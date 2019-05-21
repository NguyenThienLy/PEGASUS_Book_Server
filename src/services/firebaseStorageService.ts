// import {
//     errorService
// } from '../services'
// import { config } from '../config'
// import * as firebase from 'firebase'
// import * as _ from 'lodash';

// export class FirebaseStorageService {
//     constructor(){
//         firebase.initializeApp({
//             credential: firebase.credential.cert(config.firebase),
//             databaseURL: "https://divivu-a3eca.firebaseio.com"
//         });
//     }
//     async uploadFile(base64: string){
//         const ref = firebase.storage().ref()
//         try{
//             return await ref.putString(base64,'base64')
//         } catch(error){
//             console.log(error)
//         }
//     }
// }