import { CrudService } from '../crudService'
import { Transport, TransportModel } from '../../models'

export class TransportService extends CrudService<typeof Transport> {
    constructor(){
        super(Transport);
    }
}