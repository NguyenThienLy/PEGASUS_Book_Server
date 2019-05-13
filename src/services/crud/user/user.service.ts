import { CrudService } from '../../crudService'
import { User } from '../../../models/user.model'
import * as Sequelize from 'sequelize'

export class UserService extends CrudService<typeof User> {
    constructor(){
        super(User);
    }
    async increaseScore(userId: string){
        
        return await this.exec(this.model.update({ score: Sequelize.literal(`score + 1`)}, { where: { _id: userId }}))
    }
    async decreaseScore(userId: string, transaction?: any){
        return await this.exec(this.model.update({ score: Sequelize.literal(`score - 1`)}, { where: { _id: userId }}, transaction))
    }
}