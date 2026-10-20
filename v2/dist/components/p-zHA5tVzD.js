import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { l as loadAssetSvg } from './p-DNAIg-a5.js';

const FILL_ELEMENTS = ['path', 'rect', 'circle', 'ellipse', 'polygon', 'polyline', 'line'];
const getFilledElements = (svg) => {
    const elements = [];
    for (const tag of FILL_ELEMENTS) {
        const found = svg.getElementsByTagName(tag);
        for (let i = 0; i < found.length; i++) {
            elements.push(found[i]);
        }
    }
    return elements;
};
const clearAllFillColors = (svg, color) => {
    const elements = getFilledElements(svg);
    for (const el of elements) {
        el.setAttribute('fill', color);
    }
    svg.setAttribute('fill', color);
};
const isMultiColorIcon = (svg) => {
    const elements = getFilledElements(svg);
    const fills = new Set();
    for (const el of elements) {
        const fill = el.getAttribute('fill');
        if (fill && fill !== 'none' && fill !== 'currentColor') {
            fills.add(fill.toLowerCase());
        }
    }
    return fills.size > 1;
};
const applyColorVariables = (svg) => {
    const elements = getFilledElements(svg);
    // First pass: identify unique fill colors and assign layer indices
    const colorToLayerIndex = new Map();
    let layerIndex = 0;
    for (const el of elements) {
        const fill = el.getAttribute('fill');
        if (fill && fill !== 'none' && fill !== 'currentColor') {
            const normalizedFill = fill.toLowerCase();
            if (!colorToLayerIndex.has(normalizedFill)) {
                colorToLayerIndex.set(normalizedFill, layerIndex);
                layerIndex++;
            }
        }
    }
    // Second pass: apply CSS variables using the color-to-layer mapping
    for (const el of elements) {
        const currentFill = el.getAttribute('fill');
        if (currentFill && currentFill !== 'none' && currentFill !== 'currentColor') {
            const normalizedFill = currentFill.toLowerCase();
            const layer = colorToLayerIndex.get(normalizedFill);
            el.style.fill = `var(--icon-layer-${layer}, ${currentFill})`;
            el.setAttribute('data-customizable', 'true');
        }
    }
};
const formatSvg = (svgContent, color, emoji = false) => {
    if (svgContent) {
        const div = document.createElement('div');
        div.innerHTML = svgContent;
        const svgElm = div.firstElementChild;
        if (!svgElm) {
            return '';
        }
        svgElm.removeAttribute('width');
        svgElm.removeAttribute('height');
        if (!emoji) {
            if (color) {
                clearAllFillColors(svgElm, color);
            }
            else if (isMultiColorIcon(svgElm)) {
                applyColorVariables(svgElm);
            }
            else {
                clearAllFillColors(svgElm, 'currentColor');
            }
        }
        return div.innerHTML;
    }
    return '';
};
const getIconName = (name, theme) => {
    return `asset-icon-${name}-${theme}`;
};
const getEmojiName = (name) => {
    return `asset-emoji-${name}`;
};
const getLogoName = (name) => {
    return `asset-logo-${name}`;
};

const iconCss = ":host{width:1em;height:1em;color:var(--color-content-default, rgb(40, 40, 40));fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}.icon-inner{max-width:100%;height:100%}.emoji-inner{max-width:100%;height:100%;display:-ms-flexbox;display:flex}:host(.bds-icon){display:inline-block}:host(.bds-icon) svg{fill:currentColor;width:100%;min-width:100%}:host(.bds-icon__size--brand){width:64px;min-width:64px;height:64px;max-height:64px;min-height:64px}:host(.bds-icon__size--xxx-large){width:40px;min-width:40px;height:40px;max-height:40px;min-height:40px}:host(.bds-icon__size--xx-large){width:36px;min-width:36px;height:36px;max-height:36px;min-height:36px}:host(.bds-icon__size--x-large){width:32px;min-width:32px;height:32px;max-height:32px;min-height:32px}:host(.bds-icon__size--large){width:28px;min-width:28px;height:28px;max-height:28px;min-height:28px}:host(.bds-icon__size--medium){width:24px;min-width:24px;height:24px;max-height:24px;min-height:24px}:host(.bds-icon__size--small){width:20px;min-width:20px;height:20px;max-height:20px;min-height:20px}:host(.bds-icon__size--x-small){width:16px;min-width:16px;height:16px;max-height:16px;min-height:16px}:host(.bds-icon__size--xx-small){width:12px;min-width:12px;height:12px;max-height:12px;min-height:12px}";

const Icon = /*@__PURE__*/ proxyCustomElement(class Icon extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.requestVersion = 0;
        this.isVisible = false;
        /**
         * Icon size. Entered as one of the icon size design tokens. Can be one of:
         * "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "brand".
         */
        this.size = 'medium';
        /**
         * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
         * Default, `false`.
         */
        this.lazy = false;
        /**
         * Specifies the theme to use outline or solid icons. Defaults to outline.
         */
        this.theme = 'outline';
        /**
         * Specifies the type of icon. If type is set to emoji, it will be able to set only emoji names on the name property.
         */
        this.type = 'icon';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.setSvgContent = async () => {
            const version = ++this.requestVersion;
            try {
                const key = this.type === 'icon' ? getIconName(this.name, this.theme) : this.type === 'emoji' ? getEmojiName(this.name) : getLogoName(this.name);
                const svg = await loadAssetSvg(key);
                if (version === this.requestVersion)
                    this.svgContent = formatSvg(svg, this.color, this.type !== 'icon');
            }
            catch (err) {
                if (version !== this.requestVersion)
                    return;
                this.svgContent = undefined;
                // eslint-disable-next-line no-console
                console.warn('[Warning]: Failed to setSvgContent to', this.name);
            }
        };
    }
    connectedCallback() {
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }
    disconnectedCallback() {
        this.requestVersion++;
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    waitUntilVisible(el, cb) {
        if (this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
            const io = (this.io = new window.IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    io.disconnect();
                    this.io = undefined;
                    cb();
                }
            }));
            io.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    }
    loadIcon() {
        if (!this.name) {
            this.requestVersion++;
            this.svgContent = undefined;
            return;
        }
        if (this.isVisible) {
            this.setSvgContent();
        }
        if (!this.ariaLabel) {
            const label = this.name;
            if (label) {
                this.ariaLabel = label;
            }
        }
    }
    render() {
        return (h(Host, { key: 'e285bf38968d128bf3fd8a0a90bb23183c72b781', role: "img", class: {
                'bds-icon': true,
                [`bds-icon__size--${this.size}`]: true,
            } }, this.svgContent ? (h("div", { class: {
                'icon-inner': this.type === 'icon',
                'emoji-inner': this.type === 'emoji',
                'logo-inner': this.type === 'logo',
            }, innerHTML: this.svgContent, "data-test": this.dataTest })) : (h("div", { class: "icon-inner", "data-test": this.dataTest }))));
    }
    static get assetsDirs() { return ["svg"]; }
    get el() { return this; }
    static get watchers() { return {
        "name": ["loadIcon"],
        "src": ["loadIcon"],
        "icon": ["loadIcon"],
        "color": ["loadIcon"],
        "theme": ["loadIcon"],
        "type": ["loadIcon"]
    }; }
    static get style() { return iconCss; }
}, [1, "bds-icon", {
        "color": [1],
        "ariaLabel": [1537, "aria-label"],
        "flipRtl": [4, "flip-rtl"],
        "name": [1],
        "src": [1],
        "icon": [8],
        "size": [1],
        "lazy": [4],
        "theme": [513],
        "type": [1],
        "dataTest": [1, "data-test"],
        "svgContent": [32],
        "isVisible": [32]
    }, undefined, {
        "name": ["loadIcon"],
        "src": ["loadIcon"],
        "icon": ["loadIcon"],
        "color": ["loadIcon"],
        "theme": ["loadIcon"],
        "type": ["loadIcon"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Icon);
            }
            break;
    } });
}

export { Icon as I, defineCustomElement as d };
//# sourceMappingURL=p-zHA5tVzD.js.map

//# sourceMappingURL=p-zHA5tVzD.js.map