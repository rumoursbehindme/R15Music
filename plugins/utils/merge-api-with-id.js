"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAPIWithID = void 0;
function mergeAPIWithID(apiURL, id) {
    try {
        return apiURL.replace('{requiresID}', id);
    }
    catch (err) {
        throw new Error('Error occurred while merging API with ID');
    }
}
exports.mergeAPIWithID = mergeAPIWithID;
