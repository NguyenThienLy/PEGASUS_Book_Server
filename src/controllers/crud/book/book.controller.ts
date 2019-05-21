import { CrudController } from '../../crudController'
import { bookService, BookErrorService } from '../../../services/crud/book'
import { ElasticSearchService } from '../../../services/elasticSearchService';
import { ICrudOption } from '../../../services';
import { BookSchema } from './book.schema';


export class BookController extends CrudController<typeof bookService>{
    constructor() {
        super(bookService);
    }
    async search(params: {
        query: string
    }) {
        const { query } = params
        return ElasticSearchService.getInstance().search("book", "books", {
            query: {
                match: {
                    title: query,
                    
                },
                // regexp: {
                //     title: query
                // }
            }
        })
    }
    async create(params: any, option?: ICrudOption) {
        const book = await this.service.create(params, option)
        const result = await ElasticSearchService.getInstance().create("book", book.toJSON())
        return book
    }
    
    async update(params: any, option?: ICrudOption) {
        await this.validateJSON(params, BookSchema.UpdateBookSchema)
        const book = await this.service.model.findOne({ where: option.filter })
        if(book.status === "pending"){
            delete params.status
            return await this.service.update(params, option)
        } else if(book.status === "update_available"){
            delete params.status
            return await this.service.update(params, option)
        } else {
            throw BookErrorService.bookBlocked()
        }
        
    }

}