import { CrudController } from '../../crudController'
import { reportService } from '../../../services/crud/report'


export class ReportController extends CrudController<typeof reportService>{
    constructor(){
        super(reportService);
    }
    
}