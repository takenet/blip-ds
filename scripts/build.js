"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = require("path");
const svgo_1 = __importDefault(require("svgo"));
// https://mathiasbynens.be/notes/reserved-keywords
const reservedKeywords = new Set([
    'do',
    'if',
    'in',
    'for',
    'let',
    'new',
    'try',
    'var',
    'case',
    'else',
    'enum',
    'eval',
    'null',
    'this',
    'true',
    'void',
    'with',
    'await',
    'break',
    'catch',
    'class',
    'const',
    'false',
    'super',
    'throw',
    'while',
    'yield',
    'delete',
    'export',
    'import',
    'public',
    'return',
    'static',
    'switch',
    'typeof',
    'default',
    'extends',
    'finally',
    'package',
    'private',
    'continue',
    'debugger',
    'function',
    'arguments',
    'interface',
    'protected',
    'implements',
    'instanceof',
]);
function getDataUrl(svgData) {
    let svg = svgData.optimizedSvgContent;
    if (svg.includes(`'`)) {
        throw new Error(`oh no! no single quotes allowed! ${svgData.fileName}`);
    }
    if (svg.includes(`\n`) || svg.includes(`\r`)) {
        throw new Error(`oh no! no new lines allowed! ${svgData.fileName}`);
    }
    svg = svg.replace(/"/g, "'");
    return `"data:image/svg+xml;utf8,${svg}"`;
}
async function createDataJson(version, srcDir, distDir, srcSvgData) {
    const srcDataJsonPath = path_1.join(srcDir, 'data.json');
    const distDataJsonPath = path_1.join(distDir, 'ionicons.json');
    let data;
    try {
        data = await fs_extra_1.default.readJson(srcDataJsonPath);
    }
    catch (e) {
        data = {};
    }
    data.icons = data.icons || [];
    // add new icons
    srcSvgData.forEach(svgData => {
        if (!data.icons.some(i => i.name === svgData.iconName)) {
            data.icons.push({
                name: svgData.iconName
            });
        }
    });
    // remove dead icons
    data.icons = data.icons.filter(dataIcon => {
        return srcSvgData.some(svgData => dataIcon.name === svgData.iconName);
    });
    // sort
    data.icons = data.icons.sort((a, b) => {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    });
    data.icons.forEach(icon => {
        icon.tags = icon.tags || icon.name.split('-');
        icon.tags = icon.tags.sort();
    });
    const srcJsonStr = JSON.stringify(data, null, 2) + '\n';
    await fs_extra_1.default.writeFile(srcDataJsonPath, srcJsonStr);
    const distJsonData = {
        name: 'blip-ds',
        version,
        icons: data.icons
    };
    const distJsonStr = JSON.stringify(distJsonData, null, 2) + '\n';
    await fs_extra_1.default.writeFile(distDataJsonPath, distJsonStr);
}
function upFirst(word) {
    return word[0].toUpperCase() + word.toLowerCase().slice(1);
}
function camelize(text) {
    const words = text.split(/[-_]/g); // ok one simple regexp.
    return words[0].toLowerCase() + words.slice(1).map(upFirst).join('');
}
async function optimizeSvg(pass1, pass2, validatePass, svgData) {
    const srcSvgContent = await fs_extra_1.default.readFile(svgData.srcFilePath, 'utf8');
    const optimizedSvg = await pass1.optimize(srcSvgContent, { path: svgData.srcFilePath });
    const processedSvg = await pass2.optimize(optimizedSvg.data, { path: svgData.srcFilePath });
    svgData.optimizedSvgContent = processedSvg.data;
    try {
        await validatePass.optimize(svgData.optimizedSvgContent, { path: svgData.srcFilePath });
    }
    catch (e) {
        console.error(`${e.message}: ${svgData.srcFilePath}`);
    }
    await fs_extra_1.default.writeFile(svgData.optimizedFilePath, svgData.optimizedSvgContent);
}
async function copyToTesting(rootDir, distDir, srcSvgData) {
    const testDir = path_1.join(rootDir, 'www');
    const testBuildDir = path_1.join(testDir, 'build');
    const testSvgDir = path_1.join(testBuildDir, 'svg');
    await fs_extra_1.default.ensureDir(testSvgDir);
    await Promise.all(srcSvgData.map(async (svgData) => {
        const testSvgFilePath = path_1.join(testSvgDir, svgData.fileName);
        await fs_extra_1.default.writeFile(testSvgFilePath, svgData.optimizedSvgContent);
    }));
}
async function getSvgs(srcSvgDir, rootDir, distIoniconsDir) {
    const optimizedSvgDir = path_1.join(distIoniconsDir, 'svg');
    await fs_extra_1.default.emptyDir(optimizedSvgDir);
    const svgFiles = (await fs_extra_1.default.readdir(srcSvgDir)).filter(fileName => {
        return !fileName.startsWith('.') && fileName.endsWith('.svg');
    });
    const svgData = await Promise.all(svgFiles.map(async (fileName) => {
        // fileName: airplane-outline.svg
        if (fileName.toLowerCase() !== fileName) {
            throw new Error(`svg filename "${fileName}" must be all lowercase`);
        }
        // srcFilePath: /src/svg/airplane-outline.svg
        const srcFilePath = path_1.join(srcSvgDir, fileName);
        // optimizedFilePath: /dist/ionicons/svg/airplane-outline.svg
        const optimizedFilePath = path_1.join(optimizedSvgDir, fileName);
        const dotSplit = fileName.split('.');
        if (dotSplit.length > 2) {
            throw new Error(`svg filename "${fileName}" cannot contain more than one period`);
        }
        // iconName: airplane-outline
        const iconName = dotSplit[0];
        if (reservedKeywords.has(iconName)) {
            throw new Error(`svg icon name "${iconName}" is a reserved JavaScript keyword`);
        }
        // fileNameMjs: airplane-outline.mjs
        const fileNameMjs = iconName + '.mjs';
        // fileNameCjs: airplane-outline.mjs
        const fileNameCjs = iconName + '.js';
        // exportName: airplaneOutline
        const exportName = camelize(iconName);
        return {
            fileName,
            srcFilePath,
            srcSvgContent: (await fs_extra_1.default.readFile(srcFilePath, 'utf8')),
            optimizedFilePath,
            optimizedSvgContent: null,
            iconName,
            fileNameMjs,
            fileNameCjs,
            exportName,
        };
    }));
    return svgData.sort((a, b) => {
        if (a.exportName < b.exportName)
            return -1;
        if (a.exportName > b.exportName)
            return 1;
        return 0;
    });
}
async function optimizeSvgs(srcSvgData) {
    // https://github.com/svg/svgo
    const optimizePass = new svgo_1.default({});
    const processPass = new svgo_1.default({
        full: true,
        plugins: [
            {
                addFillNoneCss: {
                    type: 'perItem',
                    fn: (item, params) => {
                        if (!Array.isArray(params.attrs)) {
                            params.attrs = [params.attrs];
                        }
                        if (item.isElem()) {
                            item.eachAttr(attr => {
                                if (attr.name === 'fill') {
                                    if (attr.value === 'none') {
                                        item.class.add('ionicon-fill-none');
                                    }
                                    item.removeAttr('fill');
                                }
                                else if (attr.name === 'stroke') {
                                    item.removeAttr('stroke');
                                }
                                else if (attr.name === 'stroke-width' && attr.value === '32') {
                                    item.removeAttr('stroke-width');
                                    item.class.add('ionicon-stroke-width');
                                }
                            });
                        }
                    }
                }
            },
            {
                replaceTitleText: {
                    type: 'perItem',
                    fn: (item, params, extra) => {
                        if (item.isElem('title')) {
                            const fileName = path_1.basename(extra.path)
                                .replace('.svg', '')
                                .replace('-outline', '')
                                .replace('-sharp', '')
                                .replace(/-/g, ' ');
                            item.content[0].text = fileName;
                        }
                        return item;
                    }
                }
            },
            {
                addClassesToSVGElement: {
                    className: ['ionicon']
                }
            },
            {
                removeStyleElement: true
            },
            {
                removeScriptElement: true
            },
            {
                removeDimensions: true
            }
        ]
    });
    const validatePass = new svgo_1.default({
        full: true,
        plugins: [
            {
                addFillNoneCss: {
                    type: 'perItem',
                    fn: (item, params) => {
                        if (!Array.isArray(params.attrs)) {
                            params.attrs = [params.attrs];
                        }
                        if (item.isElem()) {
                            item.eachAttr(attr => {
                                if (attr.name === 'style') {
                                    throw new Error('Inline style detected');
                                }
                            });
                        }
                    }
                }
            }
        ]
    });
    await Promise.all(srcSvgData.map(async (svgData) => {
        return optimizeSvg(optimizePass, processPass, validatePass, svgData);
    }));
}
async function createEsmIcons(version, iconDir, srcSvgData) {
    const iconEsmFilePath = path_1.join(iconDir, 'index.mjs');
    const o = [
        `/* Ionicons v${version}, ES Modules */`, ``
    ];
    srcSvgData.forEach(svgData => {
        o.push(`export const ${svgData.exportName} = ${getDataUrl(svgData)}`);
    });
    await fs_extra_1.default.writeFile(iconEsmFilePath, o.join('\n') + '\n');
}
async function createCjsIcons(version, iconDir, srcSvgData) {
    const iconCjsFilePath = path_1.join(iconDir, 'index.js');
    const o = [
        `/* Ionicons v${version}, CommonJS */`, ``
    ];
    srcSvgData.forEach(svgData => {
        o.push(`exports.${svgData.exportName} = ${getDataUrl(svgData)}`);
    });
    await fs_extra_1.default.writeFile(iconCjsFilePath, o.join('\n') + '\n');
}
async function createIconPackage(version, iconDir, srcSvgData) {
    const iconPkgJsonFilePath = path_1.join(iconDir, 'package.json');
    await Promise.all([
        createEsmIcons(version, iconDir, srcSvgData),
        createCjsIcons(version, iconDir, srcSvgData),
    ]);
    const iconPkgJson = {
        name: "ionicons/icons",
        version,
        module: "index.mjs",
        main: "index.js",
        typings: "index.d.ts",
        private: true
    };
    const jsonStr = JSON.stringify(iconPkgJson, null, 2) + '\n';
    await fs_extra_1.default.writeFile(iconPkgJsonFilePath, jsonStr);
}
async function build(rootDir) {
    try {
        const pkgJsonPath = path_1.join(rootDir, 'package.json');
        const srcDir = path_1.join(rootDir, 'src');
        const srcSvgDir = path_1.join(srcDir, 'svg');
        const iconDir = path_1.join(rootDir, 'icons');
        const distDir = path_1.join(rootDir, 'dist');
        const distIoniconsDir = path_1.join(distDir, 'ionicons');
        const destSrcSvgDir = path_1.join(distDir, 'svg');
        await Promise.all([
            fs_extra_1.default.emptyDir(iconDir),
            fs_extra_1.default.emptyDir(distDir),
            fs_extra_1.default.emptyDir(destSrcSvgDir),
        ]);
        await fs_extra_1.default.emptyDir(distIoniconsDir);
        const pkgData = await fs_extra_1.default.readJson(pkgJsonPath);
        const version = pkgData.version;
        const srcSvgData = await getSvgs(srcSvgDir, rootDir, distIoniconsDir);
        await optimizeSvgs(srcSvgData);
        await Promise.all([
            createDataJson(version, srcDir, distDir, srcSvgData),
            createIconPackage(version, iconDir, srcSvgData),
        ]);
        await copyToTesting(rootDir, distDir, srcSvgData);
        await fs_extra_1.default.copy(srcSvgDir, destSrcSvgDir);
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
}
// let's do this
build(path_1.join(__dirname, '..'));
