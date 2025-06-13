import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { g as getScrollParent, d as positionElement } from './p-DJObw-Em.js';

const menuCss = ".menu{position:fixed;pointer-events:none;top:0;left:0;padding:2px;background-color:var(--color-surface-1, rgb(246, 246, 246));border-radius:8px;-webkit-box-shadow:0px 8px 12px rgba(0, 0, 0, 0.08);box-shadow:0px 8px 12px rgba(0, 0, 0, 0.08);width:240px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s;z-index:90000}.menu__open{pointer-events:auto;opacity:1}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}";

const BdsMenu$1 = /*@__PURE__*/ proxyCustomElement(class BdsMenu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsToggle = createEvent(this, "bdsToggle");
        this.refElement = null;
        this.intoView = null;
        this.menupositionTop = 0;
        this.menupositionLeft = 0;
        /**
         * Menu. Used to link the minus with the action button.
         */
        this.menu = null;
        /**
         * Position. Used to position the Menu. Either on the left or on the bottom.
         */
        this.position = 'right';
        /**
         * Open. Used to open/close the menu.
         */
        this.open = false;
        this.refMenuElement = (el) => {
            this.menuElement = el;
        };
        this.onClickCloseButtom = (event) => {
            this.open = false;
            event.stopPropagation();
        };
    }
    componentWillLoad() {
        this.refElement = document.getElementById(this.menu);
        this.intoView = getScrollParent(this.refElement);
    }
    async toggle() {
        this.open = !this.open;
    }
    openMenu() {
        this.bdsToggle.emit({ value: this.open });
        if (this.open) {
            const positionValue = positionElement({
                actionElement: this.refElement,
                changedElement: this.menuElement,
                intoView: this.intoView,
            });
            this.menupositionTop = positionValue.top;
            this.menupositionLeft = positionValue.left;
        }
    }
    render() {
        const menuPosition = {
            top: `${this.menupositionTop}px`,
            left: `${this.menupositionLeft}px`,
        };
        return (h(Host, { key: 'dc29f285e82fa013a8f97d37d85aed7bceef98da' }, h("div", { key: '718f4d3d7df44b9f36eca7469d880ae3013684f1', ref: this.refMenuElement, class: {
                menu: true,
                [`menu__${this.position}`]: true,
                [`menu__open`]: this.open,
            }, style: menuPosition }, h("slot", { key: '0dd9c462ee2df3ef76345b60410f052b2dbfdccf' })), this.open && h("div", { key: '608020102f0d432dad7116c61d456ab2c0d791d0', class: { outzone: true }, onClick: (ev) => this.onClickCloseButtom(ev) })));
    }
    static get watchers() { return {
        "open": ["openMenu"]
    }; }
    static get style() { return menuCss; }
}, [1, "bds-menu", {
        "menu": [1],
        "position": [1],
        "open": [1540],
        "refElement": [32],
        "intoView": [32],
        "menupositionTop": [32],
        "menupositionLeft": [32],
        "toggle": [64]
    }, undefined, {
        "open": ["openMenu"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsMenu$1);
            }
            break;
    } });
}

const BdsMenu = BdsMenu$1;
const defineCustomElement = defineCustomElement$1;

export { BdsMenu, defineCustomElement };
//# sourceMappingURL=bds-menu.js.map

//# sourceMappingURL=bds-menu.js.map