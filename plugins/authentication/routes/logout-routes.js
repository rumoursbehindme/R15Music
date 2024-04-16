"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutRoutes = void 0;
const requires_authenticated_1 = require("../../../common/prehandlers/requires-authenticated");
async function logoutRoutes(instance) {
    instance.addHook('preHandler', requires_authenticated_1.requiresAuthenticated);
    instance.get('/logout', async (req, reply) => {
        await req.session.destroy();
        return reply.redirect('/');
    });
}
exports.logoutRoutes = logoutRoutes;
