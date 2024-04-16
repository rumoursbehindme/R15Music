"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const newReleasesAPIPlugin = async function userDetails(instance, { userDetailsAPIEndpoint }) {
    instance.get('/api/user-details', async (req, reply) => {
        try {
            const response = await req.spotifyGetRequest({ url: userDetailsAPIEndpoint });
            if (response?.statusText.toLowerCase() !== 'ok') {
                throw new Error(`Request failed with status: ${response?.status}`);
            }
            return reply.send(response.data);
        }
        catch (error) {
            reply.code(500).send(error);
        }
    });
};
exports.default = (0, fastify_plugin_1.default)(newReleasesAPIPlugin);
