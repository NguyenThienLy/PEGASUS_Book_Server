import { CrudController } from '../../crudController'
import { bookCategoryService } from '../../../services/crud/bookCategory'
import { ICrudOption } from '../../../services';
import { bookService } from '../../../services/crud/book';
import { postService } from '../../../services/crud/post';

import * as _ from 'lodash'
import * as moment from 'moment'
import * as Sequelize from 'sequelize'
import { sequelize } from '../../../models';


export class BookCategoryController extends CrudController<typeof bookCategoryService>{
    constructor() {
        super(bookCategoryService);
    }
    async getPopulars(queryInfo: ICrudOption) {
        const endTime = moment().subtract(3, "months").format()
        const posts = await postService.model.findAll({
            where: { createdAt: { $gte: endTime } },
            include: [{
                association: "book",
                attributes: ["title","authorId","_id"],
                include: [{
                    association: "category",
                    attributes: ["name","_id"],
                }]
            }],
            limit: 100
        })
        const categories = posts.map((post: any)=> {
            return post.toJSON().book.category
        })
        return {
            categories,
            posts
        }
       
    }
    async getPosts(categoryId: string, queryInfo: ICrudOption) {
        const books = await bookService.model.findAll({ where: { categoryId }, attributes: ["_id", "title"] })
        const bookIds = books.map((book: any) => { return book._id })
        const posts = await postService.getList(_.merge(queryInfo, { filter: { bookId: { $in: bookIds } } }))
        // const posts = await postService.model.findAll({
        //     where: { bookId: { $in: bookIds }},
        //     include: [{
        //         association: "user"
        //     }]
        // })
        posts.rows = posts.rows.map((post: any) => {
            post = post.toJSON()
            const bookIndex = books.findIndex((book) => { return book._id === post.bookId })
            post.book = books[bookIndex]
            return post
        })
        return posts
    }

}