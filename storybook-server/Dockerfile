FROM node:24.22.1-alpine AS dependencies
WORKDIR /app
COPY storybook-server/package.json storybook-server/package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts --no-audit --no-fund

FROM node:24.22.1-alpine
WORKDIR /app
ENV NODE_ENV=production PORT=8080
ARG RELEASE_VERSION
ARG RELEASE_REVISION
ENV RELEASE_VERSION=$RELEASE_VERSION RELEASE_REVISION=$RELEASE_REVISION
LABEL org.opencontainers.image.source="https://github.com/takenet/blip-ds" \
      org.opencontainers.image.version=$RELEASE_VERSION \
      org.opencontainers.image.revision=$RELEASE_REVISION
COPY --from=dependencies /app/node_modules ./node_modules
COPY storybook-server/package.json storybook-server/server.mjs ./
COPY storybook-static ./storybook-static
USER node
EXPOSE 8080
CMD ["node", "server.mjs"]