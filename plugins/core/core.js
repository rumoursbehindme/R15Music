"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = __importDefault(require("../session/session"));
const client_1 = __importDefault(require("../client/client"));
const authentication_1 = __importDefault(require("../authentication"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const api_1 = require("../api");
const home_1 = require("../home/home");
const request_decorators_1 = __importDefault(require("../request-decorators"));
const register_multiple_plugins_1 = __importDefault(require("../utils/register-multiple-plugins"));
const corePlugin = async (instance, options) => {
    const { issuerOptions, apiOptions } = options;
    await instance.register(register_multiple_plugins_1.default);
    await instance.registerPlugins([
        { plugin: session_1.default },
        { plugin: request_decorators_1.default },
        { plugin: client_1.default, options: { issuerOptions } },
        { plugin: authentication_1.default },
        { plugin: home_1.homeModule },
        { plugin: api_1.apiPlugin, options: { apiOptions } }
    ]);
    instance.log.info("Registered Core Plugin.");
};
exports.default = (0, fastify_plugin_1.default)(corePlugin);
