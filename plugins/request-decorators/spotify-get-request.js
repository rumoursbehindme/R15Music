"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const axios_1 = __importDefault(require("axios"));
const spotifyGetRequestPlugin = async function spotifyGetRequestPlugin(instance) {
    instance.decorateRequest('spotifyGetRequest', async function spotifyGetRequest(options) {
        try {
            const { headers: requestHeaders, url } = options;
            let headers;
            if (requestHeaders) {
                headers = requestHeaders;
            }
            else {
                const { tokenSet: { token_type, access_token } } = this.session;
                headers = {
                    Authorization: token_type + ' ' + access_token
                };
            }
            return axios_1.default.get(url, {
                headers
            });
        }
        catch (error) {
            //
        }
    });
};
exports.default = (0, fastify_plugin_1.default)(spotifyGetRequestPlugin);
