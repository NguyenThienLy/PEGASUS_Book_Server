import { CrudController } from '../../crudController'
import { bookService } from '../../../services/crud/book'
import { ElasticSearchService } from '../../../services/elasticSearchService';
import { ICrudOption } from '../../../services';


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

}