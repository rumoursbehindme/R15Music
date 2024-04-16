"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const utils_1 = require("../../utils");
const playlistsAPIPlugin = async function playlistsAPIPlugin(instance, { playListsAPIOptions }) {
    const { playListsAPIEndpoint, playlistTracksAPIEndPoint } = playListsAPIOptions;
    instance.get('/api/playlists', async (req, reply) => {
        try {
            const response = await req.spotifyGetRequest({ url: playListsAPIEndpoint });
            if (response?.statusText.toLowerCase() !== 'ok') {
                throw new Error(`Request failed with status: ${response?.status}`);
            }
            return reply.send(response.data);
        }
        catch (error) {
            reply.code(500).send('Failed to fetch PlayLists');
        }
    });
    instance.get('/api/playlists/:id', async (req, reply) => {
        try {
            const url = (0, utils_1.mergeAPIWithID)(playlistTracksAPIEndPoint, req.params.id);
            if (url) {
                const response = await req.spotifyGetRequest({ url, });
                if (response?.statusText.toLowerCase() !== 'ok') {
                    throw new Error(`Request failed with status: ${response?.status}`);
                }
                return reply.send(response.data);
            }
        }
        catch (error) {
            reply.code(500).send('Failed to fetch PlayLists');
        }
    });
};
exports.default = (0, fastify_plugin_1.default)(playlistsAPIPlugin);
