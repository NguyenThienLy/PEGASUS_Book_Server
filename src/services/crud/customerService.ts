import { CrudService } from '../crudService'
import { Customer, CustomerModel } from '../../models'

export class CustomerService extends CrudService<typeof Customer> {
    constructor(){
        super(Customer);
    }
}