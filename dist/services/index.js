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
//# sourceMappingURL=index.js.map