"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = __importDefault(require("@fastify/session"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const cookie_1 = __importDefault(require("@fastify/cookie"));
const sessionPlugin = async (instance, _option) => {
    await instance.register(cookie_1.default);
    await instance.register(session_1.default, {
        secret: '7c9ee7ebeee9d648c2fbc327ce8c0d4b16f6fb6473d8e9dbbb5e14e744d6ed7a',
        cookie: {
            httpOnly: true,
            secure: false
        }
    });
    instance.log.info("Registered Session Plugin.");
};
exports.default = (0, fastify_plugin_1.default)(sessionPlugin);
