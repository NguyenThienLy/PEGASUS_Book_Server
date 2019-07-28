import { CrudController } from '../../crudController'
import { bookService, BookErrorService } from '../../../services/crud/book'
import { ElasticSearchService } from '../../../services/elasticSearchService';
import { ICrudOption } from '../../../services';
import { BookSchema } from './book.schema';


export class BookController extends CrudController<typeof bookService>{
    constructor() {
        super(bookService);
    }
    
    async create(params: any, option?: ICrudOption) {
        const book = await this.service.create(params, option)
        try {
            const result = await ElasticSearchService.getInstance().create("book", book.toJSON())
            return book
        } catch (err) {
            this.service.delete({ filter: { _id: book._id } })
            throw err
        }
    }


    async update(params: any, option?: ICrudOption) {
        await this.validateJSON(params, BookSchema.UpdateBookSchema)
        const book = await this.service.model.findOne({ where: option.filter })
        // Kiểm tra trạng thái của sách
        // pending 
        if (book.status === "pending" || book.status === "update_available") {
            delete params.status
            await ElasticSearchService.getInstance().update("book", book._id, book.toJSON())
            return await this.service.update(params, option)
        }  else {
            throw BookErrorService.bookBlocked()
        }

    }

}