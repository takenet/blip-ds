'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const name = "blip-ds";
const version = "0.0.0-development";
const description = "Blip Design System";
const main = "./dist/index.cjs.js";
const module$1 = "./dist/index.js";
const es2015 = "./dist/esm/index.mjs";
const es2017 = "./dist/esm/index.mjs";
const types = "./dist/types/index.d.ts";
const collection = "./dist/collection/collection-manifest.json";
const unpkg = "./dist/blip-ds/blip-ds.js";
const files = [
	"dist/",
	"loader/"
];
const scripts = {
	generate: "stencil generate",
	clear: "rimraf  node_modules/ && rimraf  dist/ && rimraf  www/",
	dev: "stencil build --docs && concurrently \"npm:build:watch\" \"npm:storybook\"",
	start: "stencil build --dev --watch --serve --docs",
	build: "stencil build --docs --prod",
	"build:watch": "stencil build --watch",
	"build:react": "cd ./blip-ds-react && npm install && npm run build",
	test: "stencil test --spec --e2e --screenshot --coverage",
	"test:watch": "stencil test --spec --e2e --screenshot --watch",
	storybook: "storybook dev -p 6006",
	"storybook:build": "storybook build",
	eslint: "eslint . --ext .jsx,.ts,.tsx --fix",
	"semantic-release": "semantic-release",
	commit: "git-cz",
	prepare: "husky install"
};
const devDependencies = {
	"@babel/core": "^7.18.2",
	"@stencil/core": "^2.16.1",
	"@stencil/react-output-target": "0.5.3",
	"@stencil/sass": "1.5.2",
	"@storybook/addon-actions": "7.0.22",
	"@storybook/addon-essentials": "^7.0.22",
	"@storybook/addon-interactions": "^7.0.22",
	"@storybook/addon-links": "^7.0.22",
	"@storybook/addon-notes": "^5.3.21",
	"@storybook/global": "5.0.0",
	"@storybook/manager-api": "^7.4.1",
	"@storybook/react": "^7.0.22",
	"@storybook/react-webpack5": "^7.0.22",
	"@storybook/storybook-deployer": "^2.8.16",
	"@storybook/testing-library": "^0.2.0",
	"@storybook/theming": "^7.4.1",
	"@types/color": "^3.0.3",
	"@types/jest": "27.5.1",
	"@types/puppeteer": "5.4.6",
	"@types/webpack": "^5.28.0",
	"@typescript-eslint/eslint-plugin": "^5.26.0",
	"@typescript-eslint/parser": "^5.23.0",
	"babel-loader": "^8.2.5",
	"babel-preset-react-app": "^10.0.1",
	color: "^4.2.3",
	commitizen: "^4.2.4",
	concurrently: "^9.1.2",
	"copy-webpack-plugin": "^11.0.0",
	"cz-conventional-changelog": "^3.3.0",
	"cz-customizable": "^6.3.0",
	eslint: "^8.57.0",
	"eslint-config-prettier": "^9.1.0",
	"eslint-config-standard-with-typescript": "^16.0.0",
	"eslint-plugin-import": "^2.29.1",
	"eslint-plugin-prettier": "^5.1.3",
	"eslint-plugin-react": "^7.34.1",
	"eslint-plugin-storybook": "^0.8.0",
	husky: "^8.0.3",
	jest: "27.4.5",
	"jest-cli": "27.4.5",
	"npm-run-all": "^4.1.5",
	prettier: "^3.2.5",
	puppeteer: "^14.0.0",
	"react-scripts": "^5.0.1",
	rimraf: "^6.0.1",
	"semantic-release": "^23.0.8",
	storybook: "^7.0.22",
	"ts-node": "^10.7.0",
	"types-ramda": "0.29.4",
	typescript: "^4.7.2"
};
const dependencies = {
	"@storybook/addon-console": "^2.0.0",
	"@storybook/addon-docs": "^7.6.20",
	"@storybook/preset-create-react-app": "^7.6.20",
	autoprefixer: "^10.4.7",
	"blip-tokens": "^1.91.0",
	react: "^18.1.0",
	"react-dom": "^18.1.0"
};
const repository = {
	type: "git",
	url: "https://github.com/takenet/blip-ds.git"
};
const bugs = {
	url: "https://github.com/takenet/blip-ds/issues"
};
const homepage = "https://github.com/takenet/blip-ds#readme";
const config = {
	commitizen: {
		path: "./node_modules/cz-customizable"
	},
	"cz-customizable": {
		config: "./.cz-config.js"
	}
};
const browserslist = {
	production: [
		">0.2%",
		"not dead",
		"not op_mini all"
	],
	development: [
		"last 1 chrome version",
		"last 1 firefox version",
		"last 1 safari version"
	]
};
const license = "MIT";
const optionalDependencies = {
	fsevents: "^2.3.1"
};
const packageJson = {
	name: name,
	version: version,
	description: description,
	main: main,
	module: module$1,
	es2015: es2015,
	es2017: es2017,
	types: types,
	collection: collection,
	"collection:main": "./dist/collection/index.js",
	unpkg: unpkg,
	files: files,
	scripts: scripts,
	devDependencies: devDependencies,
	dependencies: dependencies,
	repository: repository,
	bugs: bugs,
	homepage: homepage,
	config: config,
	browserslist: browserslist,
	license: license,
	optionalDependencies: optionalDependencies
};

const illustrationCss = ":host .illustration{display:-ms-flexbox;display:flex;height:100%;width:auto}:host(.bds-illustration) img{width:100%;height:100%}";

const BdsIllustration = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**Function to map the svg and call the "formatSvg" function */
    this.setIllustrationContent = () => {
      const tokensVersion = packageJson.dependencies['blip-tokens'].replace('^', '');
      const apiUrl = `https://cdn.jsdelivr.net/npm/blip-tokens@${tokensVersion}/build/json/illustrations/${this.type}/${this.name}.json`;
      fetch(apiUrl).then((response) => response.json().then((data) => {
        this.IllustrationContent = data[`asset-${this.type}-${this.name}-svg`];
      }));
    };
    this.IllustrationContent = undefined;
    this.type = 'default';
    this.name = undefined;
    this.alt = undefined;
    this.dataTest = null;
  }
  componentWillLoad() {
    this.setIllustrationContent();
  }
  render() {
    return (index.h(index.Host, { role: "img", class: {
        'bds-illustration': true,
      } }, this.IllustrationContent ? (index.h("img", { draggable: false, src: `data:image/svg+xml;base64,${this.IllustrationContent}`, alt: this.alt, "data-test": this.dataTest })) : (index.h("div", { class: "default", "data-test": this.dataTest }))));
  }
  static get assetsDirs() { return ["svg"]; }
};
BdsIllustration.style = illustrationCss;

const skeletonCss = ".skeleton{min-width:8px;min-height:8px;background-color:var(--color-content-default, #282828);opacity:0.16;overflow:hidden}.skeleton_shape--circle{border-radius:50%}.skeleton_shape--square{border-radius:8px}.animation{position:absolute;width:100%;height:100%;background:-webkit-gradient(linear, left top, right top, from(rgba(246, 246, 246, 0)), color-stop(50%, rgba(246, 246, 246, 0.56)), to(rgba(246, 246, 246, 0)));background:linear-gradient(90deg, rgba(246, 246, 246, 0) 0%, rgba(246, 246, 246, 0.56) 50%, rgba(246, 246, 246, 0) 100%);mix-blend-mode:overlay;-webkit-animation:2.5s ease-out infinite shine;animation:2.5s ease-out infinite shine}@-webkit-keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}";

const Skeleton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.shape = 'square';
    this.height = '50px';
    this.width = '100%';
    this.dataTest = null;
  }
  render() {
    return (index.h(index.Host, { style: {
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        width: this.width,
        height: this.height,
        borderRadius: this.shape === 'circle' ? '50%' : '8px',
      } }, index.h("bds-grid", { xxs: "12", class: { skeleton: true, [`skeleton_shape--${this.shape}`]: true } }), index.h("div", { style: {
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: this.shape === 'circle' ? '50%' : '8px',
        overflow: 'hidden',
      }, "data-test": this.dataTest }, index.h("div", { class: "animation" }))));
  }
};
Skeleton.style = skeletonCss;

exports.bds_illustration = BdsIllustration;
exports.bds_skeleton = Skeleton;
