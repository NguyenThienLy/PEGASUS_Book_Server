import { CrudController } from '../../crudController'
import { bookCategoryService } from '../../../services/crud/bookCategory'
import { ICrudOption } from '../../../services';
import { bookService } from '../../../services/crud/book';
import { postService } from '../../../services/crud/post';

import * as _ from 'lodash'


export class BookCategoryController extends CrudController<typeof bookCategoryService>{
    constructor(){
        super(bookCategoryService);
    }
    async getPosts(categoryId: string, queryInfo: ICrudOption){
        const books = await bookService.model.findAll({ where: { categoryId }, attributes: ["_id","title"]})
        const bookIds = books.map((book: any) => { return book._id })
        const posts = await postService.getList(_.merge(queryInfo, { where: { bookId: { $in: bookIds }}}))
        posts.rows = posts.rows.map((post: any) => {
            post = post.toJSON()
            const bookIndex = books.findIndex((book) => { return book._id === post.bookId})
            post.book = books[bookIndex]
            return post
        })
        return posts
    }
    
}