import { CrudService } from '../../crudService'
import { Report } from '../../../models/report.model'

export class ReportService extends CrudService<typeof Report> {
    constructor(){
        super(Report);
    }
}