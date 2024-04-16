"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiPlugin = void 0;
// import plugin from "fastify-plugin";
const user_details_1 = __importDefault(require("./user-details/user-details"));
const requires_authenticated_1 = require("../../common/prehandlers/requires-authenticated");
const add_prehandlers_1 = __importDefault(require("../utils/add-prehandlers"));
const playlists_1 = __importDefault(require("./playlists/playlists"));
const new_releases_1 = __importDefault(require("./new-releases/new-releases"));
const top_tracks_1 = __importDefault(require("./top-tracks/top-tracks"));
const apiPlugin = async function apiPlugin(instance, { apiOptions }) {
    await instance.register(add_prehandlers_1.default);
    instance.addPrehandlers([requires_authenticated_1.requiresAuthenticated]);
    const { userDetailsAPIEndpoint, playListsAPIOptions, newReleasesAPIEndpoint } = apiOptions;
    await instance.registerPlugins([
        { plugin: user_details_1.default, options: { userDetailsAPIEndpoint } },
        { plugin: playlists_1.default, options: { playListsAPIOptions } },
        { plugin: new_releases_1.default, options: { newReleasesAPIEndpoint } },
        { plugin: top_tracks_1.default }
    ]);
    instance.log.info('Registered API Plugin');
};
exports.apiPlugin = apiPlugin;
// export default plugin(apiPlugin);
