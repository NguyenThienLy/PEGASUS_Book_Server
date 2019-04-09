import { CrudController } from '../crudController'
import { appService } from '../../services/index'


export class AppController extends CrudController<typeof appService>{
    constructor(){
        super(appService);
    }
    
}