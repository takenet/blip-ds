#!/usr/bin/env node
// Writes src/utils/tag-scope.json with the tag prefix of this build of blip-ds (for example "ds-1a2b3c4d").
//
// An app that scopes the blip-ds tags (scopeTags) registers `uai-button` as `<prefix>-uai-button`, so its components do
// not clash with another version of blip-ds already registered on the page. The prefix must be the same for every app
// on the same release and different between releases. The package version cannot be used: semantic-release sets it
// after the build. The prefix is a hash of what goes into the components instead: the component sources and the
// blip-ds-tokens version (asset-config.json), read in a fixed order so the same sources always give the same prefix.
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const sourceDir = path.join(root, 'src');
const outputPath = path.join(sourceDir, 'utils', 'tag-scope.json');
const included = /\.(ts|tsx|scss|css|json)$/;
const excluded = /(\.spec\.ts|\.e2e\.ts|\.stories\.[jt]sx?|\/test\/|\/utils\/tag-scope\.json$)/;

const files = [];
const walk = (dir) => {
  for (const entry of fs
    .readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (included.test(entry.name) && !excluded.test(full.split(path.sep).join('/'))) files.push(full);
  }
};
walk(sourceDir);

const hash = crypto.createHash('sha256');
for (const file of files) {
  hash.update(path.relative(root, file).split(path.sep).join('/'));
  hash.update('\0');
  hash.update(fs.readFileSync(file));
  hash.update('\0');
}
const prefix = `ds-${hash.digest('hex').slice(0, 8)}`;
const content = `${JSON.stringify({ prefix })}\n`;
if (!fs.existsSync(outputPath) || fs.readFileSync(outputPath, 'utf8') !== content)
  fs.writeFileSync(outputPath, content);
console.log(`Prepared tag scope prefix ${prefix} from ${files.length} source files.`);
