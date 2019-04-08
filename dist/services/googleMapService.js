"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const Request = require("request-promise");
const index_1 = require("./index");
class GoogleMapService {
    constructor() {}
    googleApi(path) {
        return `https://maps.googleapis.com/maps/api/${path}`;
    }
    async exec(promise) {
        try {
            return await promise;
        } catch (response) {
            const { error } = response;
            throw index_1.errorService.router.googleMapApiWrong(error.toString());
        }
    }
    async getCoordidate(address) {
        const Options = {
            uri: this.googleApi('geocode/json'),
            headers: { 'User-Agent': 'Request-Promise' },
            qs: {
                address: address,
                key: config_1.config.googleMap.apikey
            },
            json: true
        };
        return await this.exec(Request(Options));
    }
    async getDistance(address_1, address_2) {
        const Options = {
            uri: this.googleApi('distancematrix/json'),
            headers: { 'User-Agent': 'Request-Promise' },
            qs: {
                origins: address_1,
                destinations: address_2,
                mode: "car",
                language: "vi",
                key: config_1.config.googleMap.apikey
            },
            json: true
        };
        return await this.exec(Request(Options));
    }
    async getAddressFromLatLng(lat, lng) {
        const Options = {
            uri: this.googleApi('geocode/json'),
            headers: { 'User-Agent': 'Request-Promise' },
            qs: {
                latlng: `${lat},${lng}`,
                key: config_1.config.googleMap.apikey
            },
            json: true
        };
        return await this.exec(Request(Options));
    }
}
exports.GoogleMapService = GoogleMapService;
//# sourceMappingURL=googleMapService.js.map