"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const core_1 = __importDefault(require("./plugins/core/core"));
const configuration_handling_1 = require("./common/configuration-handling/configuration-handling");
const logger_helper_1 = require("./lib/types/logger-helper");
const date_helper_1 = require("./common/utils/date-helper");
(async () => {
    const configurations = await (0, configuration_handling_1.getConfigurations)();
    const { coreConfigurations, serverConfigurations: { port, logs: { enabled, disableRequestLogging } } } = configurations;
    const app = (0, fastify_1.default)({
        logger: enabled ? {
            base: undefined,
            timestamp: () => `,"time":"${date_helper_1.DateHelper.getLogFormattedDate()}"`,
            stream: (0, logger_helper_1.dayRotatedFileStream)()
        } : false,
        disableRequestLogging
    });
    if (configurations) {
        await app.register(core_1.default, coreConfigurations);
        app.listen({ port }, (err) => {
            if (err)
                throw err;
            console.log(`Server is listening on http://localhost:${port}`);
        });
    }
    else {
        app.log.error('Configurations is incorrect unable to start the server');
    }
})();
