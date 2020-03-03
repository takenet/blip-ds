/* eslint-disable @typescript-eslint/explicit-function-return-type */
import fs from 'fs-extra';
import { join } from 'path';

async function collectionCopy(rootDir: string) {
  await fs.remove(join(rootDir, 'dist', 'collection', 'svg'));
}

collectionCopy(join(__dirname, '..'));
