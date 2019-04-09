import { CrudService } from '../crudService'
import { App, AppModel } from '../../models/index'

export class AppService extends CrudService<typeof App> {
    constructor(){
        super(App);
    }
}