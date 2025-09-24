# BliP Design System - React

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
![npm version](https://img.shields.io/npm/v/blip-ds-react)
![npm bundle size min](https://img.shields.io/bundlephobia/min/blip-ds-react)
![npm bundle size mingzip](https://img.shields.io/bundlephobia/minzip/blip-ds-react)


React wrapper components for the BliP Design System, providing seamless integration of BliP's web components into React applications.

## 🎯 Overview

BliP Design System is a comprehensive component library built with Web Components using StencilJS. The `blip-ds-react` package provides optimized React wrapper components that make it easy to use BliP components in React applications with full TypeScript support and React-specific optimizations.

## 🚀 Why blip-ds-react?

React has a complex relationship with Web Components. While React can use Web Components, there are challenges with:

- Event handling and prop binding
- TypeScript integration
- React-specific optimizations (like ref forwarding)
- Developer experience in React environments

The `blip-ds-react` package solves these issues by providing auto-generated React wrapper components that feel native to React while leveraging the power of the underlying Web Components.

For more details about React and Web Components integration, see the [StencilJS React documentation](https://stenciljs.com/docs/react).

## 📦 Installation

```bash
npm install blip-ds-react
```

## 🔧 Usage

```jsx
import React from 'react';
import { BdsButton, BdsGrid, BdsTypo } from 'blip-ds-react';

function App() {
  return (
    <BdsGrid direction="column" gap="2">
      <BdsTypo variant="fs-24" bold="bold">
        Welcome to BliP Design System
      </BdsTypo>
      <BdsButton variant="primary" onClick={() => console.log('Clicked!')}>
        Click me!
      </BdsButton>
    </BdsGrid>
  );
}

export default App;
```

## 🎨 Design System Resources

- **[Storybook Documentation](https://takenet.github.io/blip-ds/v2/?path=/docs/welcome--welcome)** - Interactive component documentation
- **[Design Guidelines](https://design.blip.ai/)** - Complete design system specifications
- **[UAI Design System](https://design.take.net/240287753/p/9953dc-take-blip-ds-elementar)** - Design tokens and guidelines

## 🏗️ Architecture

### Core Package Relationship

- **`blip-ds`** - Core web components built with StencilJS
- **`blip-ds-react`** - React wrapper components (this package)

The React components are automatically generated from the core web components using `@stencil/react-output-target`, ensuring:

- Full TypeScript support
- Proper React event handling
- Optimized React integration
- Consistent API with the core components

### Features

- **TypeScript Support**: Full type definitions for all components and props
- **React Optimized**: Native React event handling and prop binding
- **Tree Shaking**: Import only the components you need
- **Accessibility**: Components built with accessibility best practices
- **Framework Consistency**: Same API as core web components

## 🛠️ Development

This package is part of the BliP Design System monorepo. The React components are automatically generated during the build process.

### Building from Source

```bash
# Clone the main repository
git clone https://github.com/takenet/blip-ds.git
cd blip-ds

# Install dependencies
npm install

# Build core components
npm run build

# Build React wrapper components
npm run build:react
```

### Project Structure

```
├── src/
│   ├── components/        # StencilJS web components
│   ├── assets/           # Static assets (images, SVGs)
│   ├── globals/          # Global styles and variables
│   ├── pages/            # Storybook documentation pages
│   ├── snippets/         # Reusable code examples
│   ├── templates/        # Full page layout templates
│   └── utils/            # Utility functions
├── blip-ds-react/        # React wrapper components
```

## 📚 Available Components

The `blip-ds-react` package includes React wrappers for all BliP Design System components:

- **Layout**: Grid, Container, Spacing utilities
- **Typography**: Text components with design system typography scale
- **Buttons**: Primary, secondary, and other button variants
- **Forms**: Input fields, selects, checkboxes, and form controls
- **Navigation**: Navigation components and patterns
- **Feedback**: Alerts, modals, tooltips, and notification components
- **Data Display**: Tables, cards, lists, and data visualization components

For a complete list of components and their APIs, visit the [Storybook documentation](https://takenet.github.io/blip-ds/v2/?path=/docs/welcome--welcome).

## 🔄 Versioning

`blip-ds-react` follows [Semantic Versioning](https://semver.org/) and is released in sync with the core `blip-ds` package.

### Release Branches

- **`main`** - Version 1.x (Stable)
- **`v2`** - Current v2 development (Release Candidate)

The v2 is currently in release candidate phase but it is already stable for production use. We recommend using the v2 branch for new projects.

## 🤝 Contributing

This package is part of the main BliP Design System repository. Contributions should be made to the main repository:

1. Fork the [blip-ds repository](https://github.com/takenet/blip-ds)
2. Create your feature branch
3. Make changes to the core components in `/src/components/`
4. Run `npm run build:react` to regenerate React components
5. Submit a pull request

See the main repository's [Contributing Guide](https://github.com/takenet/blip-ds/blob/main/CONTRIBUTING.md) for detailed contribution guidelines.

## 📄 License

`blip-ds-react` is under the [ISC license](https://opensource.org/licenses/ISC).

## 🔗 Related Packages

- **[blip-ds](https://www.npmjs.com/package/blip-ds)** - Core web components