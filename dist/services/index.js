"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crudService_1 = require("./crudService");
exports.CrudService = crudService_1.CrudService;
const utilService_1 = require("./utilService");
const firebaseService_1 = require("./firebaseService");
const errorService_1 = require("./errorService");
const tokenService_1 = require("./tokenService");
const googleMapService_1 = require("./googleMapService");
//import { FirebaseStorageService } from './firebaseStorageService'
const blogService_1 = require("./crud/blogService");
const userService_1 = require("./crud/userService");
const postService_1 = require("./crud/postService");
const utilService = new utilService_1.UtilService();
exports.utilService = utilService;
const firebaseService = new firebaseService_1.FirebaseService();
exports.firebaseService = firebaseService;
const errorService = new errorService_1.ErrorService();
exports.errorService = errorService;
const tokenService = new tokenService_1.TokenService();
exports.tokenService = tokenService;
const googleMapService = new googleMapService_1.GoogleMapService();
exports.googleMapService = googleMapService;
//const firebaseStorageService = new FirebaseStorageService()
const userService = new userService_1.UserService();
exports.userService = userService;
const blogService = new blogService_1.BlogService();
exports.blogService = blogService;
const postService = new postService_1.PostService();
exports.postService = postService;
//# sourceMappingURL=index.js.map