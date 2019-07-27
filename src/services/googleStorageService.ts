import { config } from '../config'
import * as Request from 'request-promise'
import { errorService } from './index'

export class GoogleStorageService {
    constructor() {

    }
    // googleApi(path: string) {
    //     return `https://www.googleapis.com/upload/storage/v1/b/${config.storage.bucket}/${path}`
    // }
    // async exec(promise: Request.Promise) {
    //     try {
    //         return await promise
    //     } catch (response) {
    //         const { error } = response
    //         throw errorService.router.googleMapApiWrong(error.toString())
    //     }

    // }
    // async getCoordidate(address: string) {
    //     const Options = {
    //         uri: this.googleApi('geocode/json'),
    //         headers: { 'User-Agent': 'Request-Promise' },
    //         qs: {
    //             address: address,
    //             key: config.googleMap.apikey
    //         },
    //         json: true
    //     }
    //     return await this.exec(Request(Options))
    // }
    // async getDistance(address_1: string, address_2: string) {
    //     const Options = {
    //         uri: this.googleApi('distancematrix/json'),
    //         headers: { 'User-Agent': 'Request-Promise' },
    //         qs: {
    //             origins: address_1,
    //             destinations: address_2,
    //             mode: "car",
    //             language: "vi",
    //             key: config.googleMap.apikey
    //         },
    //         json: true
    //     }
    //     return await this.exec(Request(Options))
    // }
    // async getAddressFromLatLng(lat: string, lng: string) {
    //     const Options = {
    //         uri: this.googleApi('geocode/json'),
    //         headers: { 'User-Agent': 'Request-Promise' },
    //         qs: {
    //             latlng: `${lat},${lng}`,
    //             key: config.googleMap.apikey
    //         },
    //         json: true
    //     }
    //     return await this.exec(Request(Options))
    // }
}