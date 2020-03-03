/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import fs from 'fs-extra';
import { join, basename } from 'path';
import Svgo from 'svgo';

interface SvgData {
  /**
   * airplane-outline.svg
   */
  fileName: string;

  /**
   * /src/svg/airplane-outline.svg
   */
  srcFilePath: string;

  /**
   * /dist/ionicons/svg/airplane-outline.svg
   */
  optimizedFilePath: string;

  srcSvgContent: string;
  optimizedSvgContent: string;

  /**
   * airplane-outline
   */
  iconName: string;

  /**
   * airplane-outline.mjs
   */
  fileNameMjs: string;

  /**
   * airplane-outline.js
   */
  fileNameCjs: string;

  /**
   * airplaneOutline
   */
  exportName: string;
}

interface JsonData {
  icons: { name: string; tags?: string[] }[];
  version?: string;
}

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

function getDataUrl(svgData: SvgData) {
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

async function createDataJson(version: string, srcDir: string, distDir: string, srcSvgData: SvgData[]) {
  const srcDataJsonPath = join(srcDir, 'data.json');
  const distDataJsonPath = join(distDir, 'ionicons.json');

  let data: JsonData;

  try {
    data = await fs.readJson(srcDataJsonPath);
  } catch (e) {
    data = {} as any;
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
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0
  });
  data.icons.forEach(icon => {
    icon.tags = icon.tags || icon.name.split('-');
    icon.tags = icon.tags.sort();
  });

  const srcJsonStr = JSON.stringify(data, null, 2) + '\n';
  await fs.writeFile(srcDataJsonPath, srcJsonStr);

  const distJsonData = {
    name: 'blip-ds',
    version,
    icons: data.icons
  };
  const distJsonStr = JSON.stringify(distJsonData, null, 2) + '\n';
  await fs.writeFile(distDataJsonPath, distJsonStr);
}

function upFirst(word: string) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1);
}

function camelize(text: string) {
  const words = text.split(/[-_]/g); // ok one simple regexp.
  return words[0].toLowerCase() + words.slice(1).map(upFirst).join('');
}

async function optimizeSvg(pass1: Svgo, pass2: Svgo, validatePass: Svgo, svgData: SvgData) {
  const srcSvgContent = await fs.readFile(svgData.srcFilePath, 'utf8');

  const optimizedSvg = await pass1.optimize(srcSvgContent, { path: svgData.srcFilePath });
  const processedSvg = await pass2.optimize(optimizedSvg.data, { path: svgData.srcFilePath });

  svgData.optimizedSvgContent = processedSvg.data;

  try {
    await validatePass.optimize(svgData.optimizedSvgContent, { path: svgData.srcFilePath });
  } catch (e) {
    console.error(`${e.message}: ${svgData.srcFilePath}`);
  }

  await fs.writeFile(svgData.optimizedFilePath, svgData.optimizedSvgContent);
}

async function copyToTesting(rootDir: string, distDir: string, srcSvgData: SvgData[]) {
  const testDir = join(rootDir, 'www');
  const testBuildDir = join(testDir, 'build');
  const testSvgDir = join(testBuildDir, 'svg');
  await fs.ensureDir(testSvgDir);

  await Promise.all(srcSvgData.map(async svgData => {
    const testSvgFilePath = join(testSvgDir, svgData.fileName);
    await fs.writeFile(testSvgFilePath, svgData.optimizedSvgContent);
  }));
}

async function getSvgs(srcSvgDir: string, rootDir: string, distIoniconsDir: string): Promise<SvgData[]> {
  const optimizedSvgDir = join(distIoniconsDir, 'svg');
  await fs.emptyDir(optimizedSvgDir);

  const svgFiles = (await fs.readdir(srcSvgDir)).filter(fileName => {
    return !fileName.startsWith('.') && fileName.endsWith('.svg');
  });

  const svgData = await Promise.all(svgFiles.map(async fileName => {
    // fileName: airplane-outline.svg

    if (fileName.toLowerCase() !== fileName) {
      throw new Error(`svg filename "${fileName}" must be all lowercase`);
    }

    // srcFilePath: /src/svg/airplane-outline.svg
    const srcFilePath = join(srcSvgDir, fileName);

    // optimizedFilePath: /dist/ionicons/svg/airplane-outline.svg
    const optimizedFilePath = join(optimizedSvgDir, fileName);

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
      srcSvgContent: (await fs.readFile(srcFilePath, 'utf8')),
      optimizedFilePath,
      optimizedSvgContent: null,
      iconName,
      fileNameMjs,
      fileNameCjs,
      exportName,
    }
  }));

  return svgData.sort((a, b) => {
    if (a.exportName < b.exportName) return -1;
    if (a.exportName > b.exportName) return 1;
    return 0;
  });
}


async function optimizeSvgs(srcSvgData: SvgData[]) {
  // https://github.com/svg/svgo
  const optimizePass = new Svgo({});
  const processPass = new Svgo({
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

                } else if (attr.name === 'stroke') {
                  item.removeAttr('stroke');

                } else if (attr.name === 'stroke-width' && attr.value === '32') {
                  item.removeAttr('stroke-width');
                  item.class.add('ionicon-stroke-width');
                }
              });
            }
          }
        }
      } as any,
      {
        replaceTitleText: {
          type: 'perItem',
          fn: (item, params, extra) => {
            if (item.isElem('title')) {
              const fileName = basename(extra.path)
                .replace('.svg', '')
                .replace('-outline', '')
                .replace('-sharp', '')
                .replace(/-/g, ' ');
              item.content[0].text = fileName;
            }
            return item;
          }
        }
      } as any,
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

  const validatePass = new Svgo({
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
      } as any
    ]
  });

  await Promise.all(srcSvgData.map(async svgData => {
    return optimizeSvg(optimizePass, processPass, validatePass, svgData);
  }));
}

async function createEsmIcons(version: string, iconDir: string, srcSvgData: SvgData[]) {
  const iconEsmFilePath = join(iconDir, 'index.mjs');

  const o = [
    `/* Ionicons v${version}, ES Modules */`, ``
  ];

  srcSvgData.forEach(svgData => {
    o.push(`export const ${svgData.exportName} = ${getDataUrl(svgData)}`);
  });

  await fs.writeFile(iconEsmFilePath, o.join('\n') + '\n');
}


async function createCjsIcons(version: string, iconDir: string, srcSvgData: SvgData[]) {
  const iconCjsFilePath = join(iconDir, 'index.js');

  const o = [
    `/* Ionicons v${version}, CommonJS */`, ``
  ];

  srcSvgData.forEach(svgData => {
    o.push(`exports.${svgData.exportName} = ${getDataUrl(svgData)}`);
  });

  await fs.writeFile(iconCjsFilePath, o.join('\n') + '\n');
}

async function createIconPackage(version: string, iconDir: string, srcSvgData: SvgData[]) {
  const iconPkgJsonFilePath = join(iconDir, 'package.json');

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
  await fs.writeFile(iconPkgJsonFilePath, jsonStr);
}

async function build(rootDir: string) {
  try {
    const pkgJsonPath = join(rootDir, 'package.json');
    const srcDir = join(rootDir, 'src');
    const srcSvgDir = join(srcDir, 'svg');
    const iconDir = join(rootDir, 'icons');
    const distDir = join(rootDir, 'dist');
    const distIoniconsDir = join(distDir, 'ionicons');
    const destSrcSvgDir = join(distDir, 'svg');

    await Promise.all([
      fs.emptyDir(iconDir),
      fs.emptyDir(distDir),
      fs.emptyDir(destSrcSvgDir),
    ]);
    await fs.emptyDir(distIoniconsDir);

    const pkgData = await fs.readJson(pkgJsonPath);
    const version = pkgData.version as string;

    const srcSvgData = await getSvgs(srcSvgDir, rootDir, distIoniconsDir)

    await optimizeSvgs(srcSvgData);

    await Promise.all([
      createDataJson(version, srcDir, distDir, srcSvgData),
      createIconPackage(version, iconDir, srcSvgData),
    ]);

    await copyToTesting(rootDir, distDir, srcSvgData);

    await fs.copy(srcSvgDir, destSrcSvgDir);

  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

// let's do this
build(join(__dirname, '..'));
