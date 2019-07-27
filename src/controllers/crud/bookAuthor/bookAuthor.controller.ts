import { CrudController } from '../../crudController'
import { bookAuthorService } from '../../../services/crud/bookAuthor'
import { ElasticSearchService } from '../../../services/elasticSearchService';
import { ICrudOption } from '../../../services';
import { sequelize } from '../../../models';


export class BookAuthorController extends CrudController<typeof bookAuthorService>{
    constructor() {
        super(bookAuthorService);
    }
    async create(params: any, option?: ICrudOption) {
        const author = await this.service.create(params, option)

        try {
            const result = await ElasticSearchService.getInstance().create("author", {
                _id: author._id,
                name: author.name,
                avatar: author.avatar,
                birdthday: author.birdthday,
                biography: author.biography
            })
            return author
        } catch (err) {
            this.service.delete({ filter: { _id: author._id } })
            throw err
        }
    }
    async update(params: any, option?: ICrudOption) {
        let transaction = await sequelize.transaction()
        try {
            option.transaction = transaction
            const author = await this.service.update(params, option)
            await ElasticSearchService.getInstance().update("author", option.filter._id, author.toJSON())
            await transaction.commit()
            return author
        } catch (err) {
            await transaction.rollback()
            throw err
        }
    }
    async delete(option?: ICrudOption) {
        await ElasticSearchService.getInstance().delete("author", option.filter._id)
        return await this.service.delete(option)
    }

}