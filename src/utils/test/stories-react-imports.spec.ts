import * as fs from 'fs';
import * as path from 'path';

// The stories import the React wrappers from the committed build in blip-ds-react/dist. When a new
// component is added and only blip-ds-react/src is regenerated, the import resolves to undefined
// and Storybook fails with "Cannot read properties of undefined (reading 'displayName')".

const root = path.resolve(__dirname, '../../..');
const distDir = path.join(root, 'blip-ds-react/dist');

const listStories = (dir: string): string[] =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return listStories(full);
    return /\.stories\.(jsx|tsx|js|ts)$/.test(entry.name) ? [full] : [];
  });

const exportsCache = new Map<string, Set<string>>();
const distExports = (module: string): Set<string> => {
  if (!exportsCache.has(module)) {
    const dts = fs.readFileSync(path.join(distDir, `${module}.d.ts`), 'utf8');
    const names = new Set<string>();
    for (const m of dts.matchAll(/export\s+declare\s+(?:const|function|class|let|var)\s+([A-Za-z_$][\w$]*)/g)) {
      names.add(m[1]);
    }
    for (const m of dts.matchAll(/export\s+(?:declare\s+)?(?:type|interface|enum)\s+([A-Za-z_$][\w$]*)/g)) {
      names.add(m[1]);
    }
    for (const m of dts.matchAll(/export\s+(?:type\s+)?\{([^}]*)\}/g)) {
      m[1]
        .split(',')
        .map((part) => part.trim().split(/\s+as\s+/).pop().replace(/^type\s+/, '').trim())
        .filter(Boolean)
        .forEach((name) => names.add(name));
    }
    exportsCache.set(module, names);
  }
  return exportsCache.get(module);
};

const importPattern = /import\s*\{([^}]*)\}\s*from\s*['"](?:[./]*)blip-ds-react\/dist\/([\w-]+)['"]/g;

describe('stories import React wrappers that blip-ds-react/dist exports', () => {
  const stories = listStories(path.join(root, 'src'));

  it('finds the stories', () => {
    expect(stories.length).toBeGreaterThan(0);
  });

  it('every name imported from blip-ds-react/dist exists in the build', () => {
    const missing: string[] = [];
    for (const file of stories) {
      const source = fs.readFileSync(file, 'utf8');
      for (const m of source.matchAll(importPattern)) {
        const module = m[2];
        const names = m[1]
          .split(',')
          .map((part) => part.trim().split(/\s+as\s+/)[0].replace(/^type\s+/, '').trim())
          .filter(Boolean);
        for (const name of names) {
          if (!distExports(module).has(name)) {
            missing.push(`${path.relative(root, file)}: ${name} (blip-ds-react/dist/${module})`);
          }
        }
      }
    }
    // Fix: npm run build && npm run build:react, then commit blip-ds-react/dist.
    expect(missing).toEqual([]);
  });
});
