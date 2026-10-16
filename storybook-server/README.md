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
metadata using the shared `external/docker/build@v0` action. The shared
`external/argocd/deploy@v0` action then commits the release version and immutable
digest to `.blip-default-chart.image.tag` in
`applications/blip-ds/prod/tool/values.yaml` in `blip-ai/argo-apps-sre`.
Argo reads only that repository. Publishing runs are serialized per branch.

The deployment action requires `vars.CLIENT_ID` and `secrets.APP_PRIVATE_KEY`
for a GitHub App installed on both the source repository and `argo-apps-sre`.
Its target-repository installation must allow contents write for the automatic
image-tag commit. No Kubernetes credentials are used by the release workflow.

The GHCR package must allow public pulls. Newly created GHCR packages can be
private even when their source repository is public. The workflow checks an
anonymous pull before advancing the deployment pointer. Package visibility is
managed in GitHub package settings; no registry credentials are stored in the
cluster for this service. Repository rules must allow the deployment GitHub App
to update the target repository. Failed jobs can be rerun after fixing their
prerequisite without rerunning semantic-release.