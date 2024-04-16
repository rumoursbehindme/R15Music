"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequest = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function getRequest(req) {
    return (0, node_fetch_1.default)(req.url, {
        method: 'GET',
        headers: req.headers
    });
}
exports.getRequest = getRequest;
