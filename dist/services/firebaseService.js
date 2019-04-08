"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase-admin");
const config_1 = require("../config");
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
class FirebaseService {
    constructor() {
        firebase.initializeApp({
            credential: firebase.credential.cert(config_1.config.firebase),
            databaseURL: "https://divivu-a3eca.firebaseio.com",
            storageBucket: "divivu-a3eca.appspot.com"
        });
    }
    async registerUser(email, password) {
        try {
            return await firebase.auth().createUser({ email, password });
        } catch (error) {
            throw error;
        }
    }
    async verifyIdToken(token) {
        try {
            return await firebase.auth().verifyIdToken(token);
        } catch (error) {
            throw error;
        }
    }
    async getUserByUID(uid) {
        try {
            return await firebase.auth().getUser(uid);
        } catch (error) {
            throw error;
        }
    }
    async getUserByEmail(email) {
        try {
            return await firebase.auth().getUserByEmail(email);
        } catch (error) {
            throw error;
        }
    }
    async getUserByPhone(phone) {
        try {
            return await firebase.auth().getUserByPhoneNumber(phone);
        } catch (error) {
            throw error;
        }
    }
    async getBucket() {
        return await firebase.storage().bucket().get();
    }
    async uploadFile(path) {
        const bucket = firebase.storage().bucket();
        try {
            return await bucket.upload(path);
        } catch (error) {
            throw error;
        }
    }
    async getFile(filename) {
        const file = firebase.storage().bucket().file(filename);
        try {
            const result = await file.download();
            console.log(result);
            return JSON.parse(result.toString());
        } catch (error) {
            throw error;
        }
    }
    async deleteFile(filename) {
        const file = firebase.storage().bucket().file(filename);
        try {
            return await file.delete();
        } catch (error) {
            throw error;
        }
    }
}
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebaseService.js.map