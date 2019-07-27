import * as _ from 'lodash'
import * as fs from 'fs'


const fileNames = fs.readdirSync(__dirname)

const models = {}

fileNames.forEach((fileName: string) => {
    if(fileName.endsWith('.model.js')){
        const model = require(`./${fileName}`)
        _.merge(models, model)
    }
})

_.forEach(models, (value: any, key: any) => {
    value.associate(models)
})


export * from './db'
export * from './base'



