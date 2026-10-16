const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const zlib = require('node:zlib');

const forbiddenModule = /assets_(icons|emojis|logos|components)\.json|blip-tokens[/\\]build[/\\]json[/\\]illustrations[/\\]|\.(svg|png|jpe?g|gif|webp|avif|ico|woff2?|ttf|otf)(?:\?|$)/i;

function createAssetGuard() {
  return {
    name: 'external-cdn-assets',
    generateBundle() {
      for (const id of this.getModuleIds()) {
        if (forbiddenModule.test(id)) this.error(`Embedded design asset module: ${id}`);
      }
    },
  };
}

function checkContent(content, filename) {
  const reject = value => {
    if (/<svg(?:\s|>)/i.test(value) || /data:(?:image|font|application\/font)/i.test(value)) throw new Error(`Embedded artwork in ${filename}`);
    for (const match of value.matchAll(/[A-Za-z0-9+/]{80,}={0,2}/g)) {
      if (/<svg(?:\s|>)/i.test(Buffer.from(match[0], 'base64').toString('utf8'))) throw new Error(`Base64 artwork in ${filename}`);
    }
  };
  if (/\.map$/.test(filename)) {
    const map = JSON.parse(content);
    for (const source of map.sources || []) if (forbiddenModule.test(source)) throw new Error(`Embedded asset source map: ${filename}`);
    for (const source of map.sourcesContent || []) if (source) checkContent(source, `${filename}.js`);
    return;
  }
  if (/\.(?:[cm]?js|tsx?)$/.test(filename)) {
    const ast = ts.createSourceFile(filename, content, ts.ScriptTarget.Latest, true);
    const visit = node => {
      if (ts.isStringLiteralLike(node) || ts.isTemplateHead(node) || ts.isTemplateMiddle(node) || ts.isTemplateTail(node)) reject(node.text);
      ts.forEachChild(node, visit);
    };
    visit(ast);
  } else reject(content);
}

function stripCopiedAssets(directory = path.resolve(__dirname, '../dist')) {
  fs.rmSync(path.join(directory, 'collection/assets'), { recursive: true, force: true });
}

function checkBundle(directory = path.resolve(__dirname, '../dist')) {
  if (!fs.existsSync(directory)) throw new Error('Build output is missing.');
  let checked = 0;
  const walk = current => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const filename = path.join(current, entry.name);
      if (entry.isDirectory()) walk(filename);
      else if (/\.(svg|png|jpe?g|gif|webp|avif|ico|woff2?|ttf|otf)$/i.test(entry.name)) throw new Error(`Copied artwork in published output: ${filename}`);
      else if (/\.(?:[cm]?js|css|scss|map)$/.test(entry.name)) {
        const content = fs.readFileSync(filename, 'utf8');
        checkContent(content, filename);
        if (/bds-icon.*entry\.js$/.test(entry.name)) {
          const gzip = zlib.gzipSync(content).length;
          if (gzip > 30000) throw new Error(`Icon chunk exceeds 30 KB gzip: ${filename} (${gzip} bytes)`);
          console.log(`${path.relative(directory, filename)}: ${Buffer.byteLength(content)} bytes, ${gzip} bytes gzip.`);
        }
        checked++;
      }
    }
  };
  walk(directory);
  if (!checked) throw new Error('No executable build outputs found.');
  console.log(`Checked ${checked} build files: no embedded artwork.`);
}

if (require.main === module) {
  try {
    if (process.argv.includes('--strip-copied')) stripCopiedAssets();
    else checkBundle(process.argv[2]);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}

module.exports = { checkBundle, checkContent, createAssetGuard, stripCopiedAssets };