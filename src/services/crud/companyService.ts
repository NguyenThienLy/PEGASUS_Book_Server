import { CrudService } from '../crudService'
import { Company, CompanyModel } from '../../models'

export class CompanyService extends CrudService<typeof Company> {
    constructor(){
        super(Company);
    }
}