# Production Storybook and MCP

The production image serves the static Storybook at `/` and the official
Storybook read-only MCP at `/mcp`. Both use the same release build. No Storybook
development server, compiler or editing tools run in production.

The MCP exposes `docs-list`, `docs-show` and `docs-show-story`. Component APIs
come from Stencil's generated JSON, combined with the Storybook manifest and
story IDs. All manifests are loaded from the image at startup; client requests
cannot select an external documentation source.

## Connect

VS Code MCP configuration:

```json
{
  "servers": {
    "blip-ds": {
      "type": "http",
      "url": "https://ds.blip.tools/mcp"
    }
  }
}
```

`GET /release.json` reports the release version and source commit.
`GET /healthz` is the readiness and liveness endpoint.

## Build and Test

Build the library and Storybook from the repository root:

```sh
npm ci --legacy-peer-deps
npm run build
npm run build:react
npm run storybook:build
npm ci --prefix storybook-server --ignore-scripts
npm --prefix storybook-server test
node storybook-server/prepare-manifest.mjs
node storybook-server/smoke.mjs
docker build -f storybook-server/Dockerfile -t blip-ds-storybook .
```

The runtime requires Node.js 24 or newer. To run without Docker, from the
repository root:

```sh
PUBLIC_ORIGIN=http://localhost:8080 node storybook-server/server.mjs
```

Configuration: `PORT` (default `8080`), `PUBLIC_ORIGIN` (default
`https://ds.blip.tools`), `STORYBOOK_DIRECTORY` (default `./storybook-static`),
`RELEASE_VERSION` and `RELEASE_REVISION`. MCP requests must use the configured
host and, when present, the configured origin. The request body limit is 64 KiB.

## Release Publication

Only successful root-package semantic releases on `v2`, including `rc`
prereleases, publish the production Storybook image. The tested Storybook build
is reused rather than rebuilt after release. Releases from `main` do not change
this service. Existing GitHub Pages publication remains supported.

The workflow publishes `ghcr.io/takenet/blip-ds-storybook` with release and commit
tags using public GitHub and Docker actions. It records the release version
tag and source metadata in `release-values.json` on the generated
`storybook-v2` branch. The file uses the published version as `image.tag`,
keeping container images readable and compatible with Kubernetes version
labels. Release versions must fit the 63-character Kubernetes label limit.
A downstream GitOps deployment can consume that public
file without this repository requiring access to private infrastructure or
internal actions. Publishing runs are serialized per branch. A previous source
commit must be an ancestor of the new release; a stale run cannot roll the
deployment pointer backward. Do not edit the generated branch manually.

The GHCR package must allow public pulls. Newly created GHCR packages can be
private even when their source repository is public. The workflow checks an
anonymous pull before advancing the deployment pointer. Package visibility is
managed in [GitHub package settings](https://github.com/orgs/takenet/packages/container/blip-ds-storybook/settings):
an administrator must select **Change visibility > Public**. Making the source
repository public does not change an existing package's visibility. Repository
rules must allow the publishing workflow to write the `storybook-v2` branch. No
GitHub App credentials, cross-repository write token or Kubernetes credentials
are required. If the anonymous check fails after the image was published, fix
the package visibility and rerun only the failed `publish-storybook` job in
GitHub Actions. Do not rerun semantic-release or create another release solely
to recover the image publication.