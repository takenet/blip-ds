import { readdir, readFile, realpath } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { createStorybookMcpHandler } from '@storybook/mcp';
import { Hono } from 'hono';
import { bodyLimit } from 'hono/body-limit';

export async function createApp({ directory, publicOrigin, version = 'unknown', revision = 'unknown' }) {
  const origin = new URL(publicOrigin).origin;
  const root = await realpath(directory);
  const manifests = new Map();

  async function loadManifests(relativeDirectory) {
    for (const entry of await readdir(path.join(root, relativeDirectory), { withFileTypes: true })) {
      const relativePath = path.posix.join(relativeDirectory, entry.name);
      if (entry.isDirectory()) {
        await loadManifests(relativePath);
      } else if (entry.isFile() && entry.name.endsWith('.json')) {
        manifests.set(relativePath, await readFile(path.join(root, relativePath), 'utf8'));
      } else if (entry.isSymbolicLink()) {
        throw new Error('Manifest symlinks are not allowed.');
      }
    }
  }

  await loadManifests('manifests');
  const components = JSON.parse(manifests.get('manifests/components.json'));
  if (!components.components || Object.keys(components.components).length === 0) {
    throw new Error('A non-empty Storybook component manifest is required.');
  }

  const handler = await createStorybookMcpHandler({
    manifestProvider: async (_request, filename) => {
      const normalized = path.posix.normalize(filename);
      const content = manifests.get(normalized);
      if (!content) throw new Error('Unknown local Storybook manifest.');
      return content;
    },
  });

  const app = new Hono();
  app.get('/healthz', context => context.json({ status: 'ok', version, revision }));
  app.get('/release.json', context => {
    context.header('Cache-Control', 'no-store');
    return context.json({ version, revision });
  });
  app.use('/mcp', bodyLimit({ maxSize: 64 * 1024 }));
  app.all('/mcp', async context => {
    if (!['GET', 'POST', 'DELETE'].includes(context.req.method)) return context.text('Method not allowed', 405);
    if ((context.req.header('Host') || new URL(context.req.url).host) !== new URL(origin).host) {
      return context.text('Host not allowed', 403);
    }
    if (context.req.header('Origin') && context.req.header('Origin') !== origin) {
      return context.text('Origin not allowed', 403);
    }
    const request = new Request(new URL('/mcp', origin), context.req.raw);
    const response = await handler(request);
    response.headers.set('Cache-Control', 'no-store');
    return response;
  });
  app.use('*', serveStatic({ root }));
  return app;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const app = await createApp({
    directory: process.env.STORYBOOK_DIRECTORY || './storybook-static',
    publicOrigin: process.env.PUBLIC_ORIGIN || 'https://ds.blip.tools',
    version: process.env.RELEASE_VERSION,
    revision: process.env.RELEASE_REVISION,
  });
  const server = serve({ fetch: app.fetch, hostname: '0.0.0.0', port: Number(process.env.PORT || 8080) });
  server.requestTimeout = 30_000;
  server.headersTimeout = 15_000;
  process.on('SIGTERM', () => server.close(() => process.exit(0)));
}