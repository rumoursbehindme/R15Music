"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayRotatedFileStream = void 0;
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const levels = new Map();
levels.set(10, 'trace');
levels.set(20, 'debug');
levels.set(30, 'info');
levels.set(40, 'warn');
levels.set(50, 'error');
levels.set(60, 'fatal');
const logDir = (0, path_1.join)(process.cwd(), 'logs');
function dayRotatedFileStream() {
    const stream = {
        async write(msg) {
            const logDetails = JSON.parse(msg);
            const level = levels.get(logDetails.level);
            delete logDetails.level;
            const now = new Date();
            const logLevelDir = (0, path_1.join)(logDir, level);
            if (!(0, fs_1.existsSync)(logLevelDir)) {
                await (0, promises_1.mkdir)(logLevelDir, { recursive: true });
            }
            const fileName = level + `_${now.getFullYear()}_${now.getMonth() + 1}_${now.getDate()}.json`;
            await (0, promises_1.appendFile)((0, path_1.join)(logLevelDir, fileName), JSON.stringify(logDetails, null, 2));
        }
    };
    return stream;
}
exports.dayRotatedFileStream = dayRotatedFileStream;
