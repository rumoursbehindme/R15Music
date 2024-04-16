"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const spotify_get_request_1 = __importDefault(require("./spotify-get-request"));
const requestDecoratorsPlugin = async function requestDecoratorsPlugin(instance) {
    await instance.register(spotify_get_request_1.default);
};
exports.default = (0, fastify_plugin_1.default)(requestDecoratorsPlugin);
