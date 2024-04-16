"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const routes_1 = require("./routes");
// Authorization code flow
const authenticationPlugin = async function authenticationModule(instance) {
    await instance.register(routes_1.loginRoutes);
    await instance.register(routes_1.logoutRoutes);
    instance.log.info("Registered Authentication Plugin.");
};
exports.default = (0, fastify_plugin_1.default)(authenticationPlugin);
