"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openid_client_1 = require("openid-client");
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const clientPlugin = async (instance, { issuerOptions }) => {
    const issuer = await openid_client_1.Issuer.discover('https://accounts.spotify.com');
    const client = new issuer.Client({ ...issuerOptions });
    instance.decorate('oidcClient', client);
    instance.decorate('getAuthorizationUrl', async function getAuthorizationUrl({ returnURL }) {
        return client.authorizationUrl({ ...issuerOptions, state: btoa(JSON.stringify({ returnURL })) });
    });
    instance.decorate('handleCallback', async function handleCallback(params) {
        return client.oauthCallback(issuerOptions.redirect_uri, { code: params.code, state: params.state }, { state: params.state });
    });
    instance.log.info("Registered Client Plugin.");
};
exports.default = (0, fastify_plugin_1.default)(clientPlugin);
