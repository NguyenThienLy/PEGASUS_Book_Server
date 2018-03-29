import * as firebase from 'firebase-admin'
import { config } from '../config'
const  StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

export class FirebaseService {
    constructor(){
        firebase.initializeApp({
            credential: firebase.credential.cert(config.firebase as firebase.ServiceAccount),
            databaseURL: "https://divivu-a3eca.firebaseio.com",
            storageBucket: "divivu-a3eca.appspot.com"
        });
    }
    async registerUser(email: string, password: string) {
        try {
            return await firebase.auth().createUser({ email, password })
        } catch (error) {
            throw error
        }
    }
    async verifyIdToken(token: string) {
        try {
            return await firebase.auth().verifyIdToken(token)
        } catch (error) {
            throw error
        }
    }
    async getUserByUID(uid: string) {
        try {
            return await firebase.auth().getUser(uid)
        } catch (error) {
            throw error
        }
    }
    async getUserByEmail(email: string) {
        try {
            return await firebase.auth().getUserByEmail(email)
        } catch (error) {
            throw error
        }
    }
    async getUserByPhone(phone: string) {
        try {
            return await firebase.auth().getUserByPhoneNumber(phone)
        } catch (error) {
            throw error
        }
    }
    async getBucket(){
        return await firebase.storage().bucket().get()
    }
    async uploadFile(path: string){
        const bucket = firebase.storage().bucket()
        try{
            return await bucket.upload(path)
        } catch(error){
            throw error
        }
    }
    async getFile(filename: string){
        const file = firebase.storage().bucket().file(filename)
        try{
            const result:any = await file.download()
            console.log(result)
            return JSON.parse(result.toString())
        } catch(error){
            throw error
        }
    }
    async deleteFile(filename: string){
        const file = firebase.storage().bucket().file(filename)
        try{
            return await file.delete()
        } catch(error){
            throw error
        }
    }
}