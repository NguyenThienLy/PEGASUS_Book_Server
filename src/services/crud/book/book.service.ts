import { CrudService } from '../../crudService'
import { Book } from '../../../models/book.model'
import * as Sequelize from 'sequelize'

export class BookService extends CrudService<typeof Book> {
    constructor(){
        super(Book);
    }
    async increaseScore(bookId: string, rate: number){
        
        return await this.exec(this.model.update({ rate: Sequelize.literal(`rate + ${rate}`)}, { where: { _id: bookId }}))
    }
    async decreaseScore(bookId: string, rate: number, transaction?: any){
        return await this.exec(this.model.update({ rate: Sequelize.literal(`rate - ${rate}`)}, { where: { _id: bookId }}, transaction))
    }
}