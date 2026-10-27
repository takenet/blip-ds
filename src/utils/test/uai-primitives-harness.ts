import { E2EPage } from '@stencil/core/testing';
import { readFileSync } from 'fs';
import { join } from 'path';
import * as sass from 'sass-embedded';
import * as ts from 'typescript';

// The primitives are internal (no public component yet), so the e2e tests load the real sources into the page:
// TypeScript is transpiled as-is and the SCSS mixins are compiled with the same Sass compiler as the build.
const root = process.cwd();

const transpile = (file: string) =>
  ts.transpileModule(readFileSync(join(root, file), 'utf8'), {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020 },
  }).outputText;

export const compileUaiScss = (scss: string) =>
  sass.compileString(`@use 'src/globals/uai-mixins' as *;\n${scss}`, {
    loadPaths: [root, join(root, 'node_modules')],
  }).css;

export async function loadPrimitives(page: E2EPage, scss = '') {
  if (scss) await page.addStyleTag({ content: compileUaiScss(scss) });
  await page.addScriptTag({
    type: 'module',
    content: `${transpile('src/utils/uai-overlay.ts')}\nObject.assign(window, { UaiOverlay, computeOverlayLayout });`,
  });
  await page.addScriptTag({
    type: 'module',
    content: `${transpile('src/utils/uai-form-control.ts')}\nObject.assign(window, { UaiFormControl });`,
  });
  await page.waitForFunction(() => 'UaiOverlay' in window && 'UaiFormControl' in window);
}
