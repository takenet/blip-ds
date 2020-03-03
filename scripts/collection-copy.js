"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = require("path");
async function collectionCopy(rootDir) {
    // move optimized svgs to correct collection location
    const optimizedSrc = path_1.join(rootDir, 'dist', 'ionicons', 'svg');
    const collectionDest = path_1.join(rootDir, 'dist', 'collection', 'components', 'icon', 'svg');
    await fs_extra_1.default.copy(optimizedSrc, collectionDest);
    // we don't to copy the src svgs to collection
    await fs_extra_1.default.remove(path_1.join(rootDir, 'dist', 'collection', 'svg'));
}
collectionCopy(path_1.join(__dirname, '..'));
