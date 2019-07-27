import * as express from 'express';
import { CrudRouter } from '../crud';
import { adminController } from '../../controllers/crud/admin'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'
const formidable = require('formidable')
const fs = require("fs")
const XLSX = require("xlsx")

export default class AdminRouter extends CrudRouter<typeof adminController> {
    constructor() {
        super(adminController);
    }
    customRouter(){
      this.router.post("/test", async function(req, res){
        var form = new formidable.IncomingForm();
        const files: any = await (new Promise((resolve, reject) => {
            form.parse(req, function (error: any, field: any, files: any) {
                resolve(files)
            })
        }))
        console.log("files: ", files)
        var trym = "�"
        const data = fs.readFileSync(files.file.path)
        var workbook = XLSX.read(data, {type:'buffer'});
        // let csvData = new Buffer(data).toString('utf-8')
        // console.log("csv data: ", csvData)
        // csvData = csvData.replace(/�/g,"")
        res.json(workbook)
      })
    }
}

