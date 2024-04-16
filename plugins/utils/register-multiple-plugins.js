"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const registerMultiplePlugins = async function registerMultiplePlugins(instance) {
    instance.decorate('registerPlugins', async function (plugins) {
        try {
            plugins.forEach(async ({ plugin, options }) => {
                await instance.register(plugin, options);
            });
        }
        catch (error) {
            throw new Error(error);
        }
    });
};
exports.default = (0, fastify_plugin_1.default)(registerMultiplePlugins);
