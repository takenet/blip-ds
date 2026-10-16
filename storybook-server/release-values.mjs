import { writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export function createReleaseValues({ version, revision, digest }) {
  if (!/^\d+\.\d+\.\d+(?:-[\da-zA-Z.-]+)?$/.test(version || '')) throw new Error('Invalid release version.');
  if (!/^[a-f0-9]{40}$/.test(revision || '')) throw new Error('Invalid source revision.');
  if (!/^sha256:[a-f0-9]{64}$/.test(digest || '')) throw new Error('Invalid image digest.');
  return {
    image: { tag: `sha-${revision}@${digest}` },
    env: { RELEASE_VERSION: version, RELEASE_REVISION: revision },
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const values = createReleaseValues({
    version: process.env.RELEASE_VERSION,
    revision: process.env.RELEASE_REVISION,
    digest: process.env.RELEASE_DIGEST,
  });
  await writeFile(process.argv[2], `${JSON.stringify(values, null, 2)}\n`);
}