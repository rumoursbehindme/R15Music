"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const topTracks = async function topTracks(instance) {
    instance.get('/api/top-tracks', async (req, reply) => {
        try {
            const response = await req.spotifyGetRequest({ url: 'https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=5' });
            if (response?.statusText.toLowerCase() !== 'ok') {
                throw new Error(`Request failed with status: ${response?.status}`);
            }
            return reply.send(response.data);
        }
        catch (error) {
            instance.log.error(error, 'Failed to fetch top tracks.');
            reply.code(500).send(error);
        }
    });
};
exports.default = (0, fastify_plugin_1.default)(topTracks);
