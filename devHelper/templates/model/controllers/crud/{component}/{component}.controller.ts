import { CrudController } from '../../crudController'
import { {name}Service } from '../../../services/crud/{name}'


export class {Name}Controller extends CrudController<typeof {name}Service>{
    constructor(){
        super({name}Service);
    }
    
}