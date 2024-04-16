"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const newReleases = async function playLists(instance, { newReleasesAPIEndpoint }) {
    instance.get('/api/new-releases', async (req, reply) => {
        try {
            const response = await req.spotifyGetRequest({ url: newReleasesAPIEndpoint });
            if (response?.statusText.toLowerCase() !== 'ok') {
                throw new Error(`Request failed with status: ${response?.status}`);
            }
            return reply.send(response.data.albums.items);
        }
        catch (error) {
            reply.code(500).send('Failed to fetch New Releases');
        }
    });
};
exports.default = (0, fastify_plugin_1.default)(newReleases);
