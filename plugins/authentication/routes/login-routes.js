"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
async function loginRoutes(instance) {
    instance.addHook('preHandler', async (req, reply) => {
        if (req.session.authenticated) {
            const redirectUrl = req.query.returnURL ?? '/';
            return reply.redirect(redirectUrl);
        }
    });
    instance.get('/login', async (req, reply) => {
        const returnURL = req.query.returnURL ?? '/';
        reply.redirect(await instance.getAuthorizationUrl({ returnURL }));
    });
    instance.get('/callback', async (req, reply) => {
        const params = instance.oidcClient.callbackParams(req);
        const tokenset = await instance.handleCallback(params);
        req.session.authenticated = true;
        req.session.tokenSet = tokenset;
        const redirectURL = params.state ? JSON.parse(atob(params.state)).returnURL : '/';
        reply.redirect(redirectURL);
    });
}
exports.loginRoutes = loginRoutes;
