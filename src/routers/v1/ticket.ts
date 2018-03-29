import * as express from 'express';
import { CrudRouter } from '../crud';
import { ticketController } from '../../controllers'
import { Request, Response } from '../base'
import { firebaseService } from '../../services'
import * as fs from 'fs'

export default class TicketRouter extends CrudRouter<typeof ticketController> {
    constructor() {
        super(ticketController);
    }
    customRouter(){
      //  this.router.post('/test', this.route(this.test))
      //  this.router.get('/getfiledemo', this.route(this.getFile))
       // this.router.delete('/delete', this.route(this.delete))
    }
    // async test(req: Request, res: Response){
    //     const data = {
    //         name:"Vu Hoai Nam",
    //         lop:"8a4",
    //         haha:"hahaa"
    //     }
    //     fs.writeFileSync(`./template/${req.body.filename}`,JSON.stringify(data),{encoding:'utf-8'})
    //     const result = await firebaseService.uploadFile(`./template/${req.body.filename}`)
    //     fs.unlinkSync(`./template/${req.body.filename}`)
        
    //     this.onSuccess(res, result)
    // }
    // async getFile(req: Request, res: Response){
    //     const result = await firebaseService.getFile()
    //     this.onSuccess(res, result)
    // }
    // async delete(req: Request, res: Response){
    //     const result = await firebaseService.deleteFile()
    //     this.onSuccess(res, result)
    // }
}

