/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import fs from 'fs-extra';
import { join } from 'path';

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

function upFirst(word: string) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1);
}

function camelize(text: string) {
  const words = text.split(/[-_]/g); // ok one simple regexp.
  return words[0].toLowerCase() + words.slice(1).map(upFirst).join('');
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

async function getSvgs(srcSvgDir: string): Promise<SvgData[]> {
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
    // const optimizedFilePath = join(optimizedSvgDir, fileName);
    const optimizedFilePath = '';

    const dotSplit = fileName.split('.');
    if (dotSplit.length > 2) {
      throw new Error(`svg filename "${fileName}" cannot contain more than one period`);
    }

    // iconName: airplane-outline
    const iconName = dotSplit[0];

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

async function build(rootDir: string) {
  try {
    const srcDir = join(rootDir, 'src');
    const srcSvgDir = join(srcDir, 'svg');
    const distDir = join(rootDir, 'dist');
    const destSrcSvgDir = join(distDir, 'svg');
    const wwwDir = join(rootDir, 'www');
    const destWwwBuildDir = join(wwwDir, 'build');
    const destWwwBuildSvgDir = join(destWwwBuildDir, 'svg');

    await Promise.all([
      fs.emptyDir(distDir),
      fs.emptyDir(destSrcSvgDir),
      fs.emptyDir(wwwDir),
      fs.emptyDir(destWwwBuildDir),
      fs.emptyDir(destWwwBuildSvgDir),
    ]);

    const srcSvgData = await getSvgs(srcSvgDir);

    await copyToTesting(rootDir, distDir, srcSvgData);

    await fs.copy(srcSvgDir, destSrcSvgDir);
    await fs.copy(srcSvgDir, destWwwBuildSvgDir);

  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

build(join(__dirname, '..'));
