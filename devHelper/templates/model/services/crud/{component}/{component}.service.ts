import { CrudService } from '../../crudService'
import { {Name} } from '../../../models/{name}.model'

export class {Name}Service extends CrudService<typeof {Name}> {
    constructor(){
        super({Name});
    }
}