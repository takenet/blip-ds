# Blip Design System (blip-ds) - Copilot Instructions

## Project Overview

Blip Design System (blip-ds) is a design system component library built with Web Components using StencilJS. The project provides UI components that follow Blip's design guidelines and can be used in various web applications.

## Project Structure

- `/src/` - Source code of the component library
  - `/assets/` - Static assets like images and SVGs
  - `/components/` - Individual web components
  - `/globals/` - Global styles and variables
  - `/pages/` - Documentation pages in MDX format for Storybook, including guides, integration docs, and framework-specific usage
  - `/snippets/` - Reusable code examples demonstrating UI patterns and component combinations as Storybook stories
  - `/templates/` - Full page layout templates showing how components can be combined into complete interfaces
  - `/utils/` - Utility functions and helpers
  - `/view_components/` - View-specific components
- `/blip-ds-react/` - React wrapper components (generated from StencilJS components)

## Core Technologies

### StencilJS

The project uses [StencilJS](https://stenciljs.com/) (v2.16.1) as the core technology for building web components. StencilJS is a compiler that generates standard Web Components that can work in any framework or with no framework at all.

Stencil config is located in stencil.config.ts

#### React Integration

React wrapper components are auto-generated using `@stencil/react-output-target` to allow usage of these components in React applications.

### Styling

- **SASS** is used for styling via `@stencil/sass`
- **blip-tokens** design tokens are imported for consistent theming

### Testing

We use stencil unit tests and e2e tests.

Tests are located in each component's directory in a `test` folder. We prioritize unit tests for component logic and e2e tests for integration scenarios.

Must follow stencil's testing guidelines and use the `@stencil/core/testing` package.

### Documentation

- **Storybook** for component documentation and development

## Build & Development Commands

- `npm run dev` - Starts development environment with Stencil and Storybook
- `npm run build` - Builds the component library
- `npm run build:react` - Builds the React wrapper components
- `npm run test` - Runs all tests
- `npm run storybook` - Starts Storybook for component development
- `npm run storybook:build` - Builds static Storybook documentation

## Key Integration Points

1. When adding new components:

   - Create the StencilJS component in `/src/components/`
   - Ensure it runs correctly with `npm run dev`
   - React wrappers will be auto-generated in `/blip-ds-react/` with `npm run build:react`
   - Add Storybook documentation. Use an existing component as a reference for structure and format.
   - Ensure unit tests are written in the component's `test` folder
   - Ensure e2e tests cover integration scenarios
   - Ensure both unit and e2e tests pass with `npm run test -- -- <componentFolder>`
   - Review and update documentation as necessary (components readme.md are automatically generated)

2. The project follows semantic versioning and uses conventional commits for releases.

3. Design tokens come from the `blip-tokens` package which should be kept updated.

## Resources

- [GitHub Repository](https://github.com/takenet/blip-ds)
