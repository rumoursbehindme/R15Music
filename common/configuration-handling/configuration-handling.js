"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigurations = void 0;
const ini_1 = require("ini");
const path_1 = require("path");
const promises_1 = require("fs/promises");
async function getConfigurations() {
    const configFolderPath = (0, path_1.join)(process.cwd(), 'config');
    try {
        const allConfigFiles = await (0, promises_1.readdir)(configFolderPath);
        const serverConfigurations = {};
        const coreConfigurations = {};
        await Promise.all(allConfigFiles
            .map(async (file) => {
            const configFilePath = (0, path_1.join)(configFolderPath, file);
            const parsedData = (0, ini_1.parse)(await (0, promises_1.readFile)(configFilePath, 'utf-8'));
            if (file.toLowerCase() === 'server.ini') {
                Object.assign(serverConfigurations, parsedData);
            }
            else {
                Object.assign(coreConfigurations, parsedData);
            }
        }));
        return ({ serverConfigurations, coreConfigurations });
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.getConfigurations = getConfigurations;
;
