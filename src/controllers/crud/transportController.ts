import { CrudController } from '../crudController'
import { transportService } from '../../services'
import { CrudService, ICrudOption, errorService } from '../../services'
import * as _ from 'lodash'

export class TransportController extends CrudController<typeof transportService> {
    constructor() {
        super(transportService)
    }
    async update(params: any, option?: ICrudOption) {
        const transports: string[] = params.companyInfo.transports
        if(transports.indexOf(option.filter._id) == -1){
            return errorService.auth.permissionDenied()
        }
        return await this.service.update(params, option)
    }
}