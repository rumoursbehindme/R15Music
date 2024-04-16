"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiresAuthenticated = void 0;
const requiresAuthenticated = async function requiresAuthebticated(req, reply) {
    if (req.session.authenticated) {
        return;
    }
    ;
    const { url } = req;
    return reply.redirect(`/?returnURL=${url}&error=Please authenticate to access this route: ${url}`);
};
exports.requiresAuthenticated = requiresAuthenticated;
