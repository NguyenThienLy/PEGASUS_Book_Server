import { CrudService } from '../../crudService'
import { Publisher } from '../../../models/publisher.model'

export class PublisherService extends CrudService<typeof Publisher> {
    constructor(){
        super(Publisher);
    }
}