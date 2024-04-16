"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeModule = void 0;
const static_1 = __importDefault(require("@fastify/static"));
const path_1 = require("path");
const promises_1 = require("fs/promises");
const homeModule = async function homeModule(instance) {
    instance.register(static_1.default, {
        root: (0, path_1.join)(process.cwd(), 'public'),
        prefix: '/'
    });
    instance.get('/', async (req, reply) => {
        if (req.session.authenticated) {
            try {
                const module = await (0, promises_1.readFile)((0, path_1.join)(process.cwd(), 'public/index.html'), 'utf-8');
                if (module) {
                    return reply.sendFile('index.html');
                }
            }
            catch (error) {
                throw new Error(error);
            }
        }
        const { query: { returnURL, error } } = req;
        if (error) {
            return reply.type('text/html').send(`<p style='color: red'>${error}</p>
                <a href='/login?returnURL=${returnURL ?? '/'}'>Login</a>`);
        }
        return reply.redirect('/login');
    });
};
exports.homeModule = homeModule;
