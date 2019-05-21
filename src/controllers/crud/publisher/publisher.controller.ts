import { CrudController } from '../../crudController'
import { publisherService } from '../../../services/crud/publisher'


export class PublisherController extends CrudController<typeof publisherService>{
    constructor(){
        super(publisherService);
    }
    
}