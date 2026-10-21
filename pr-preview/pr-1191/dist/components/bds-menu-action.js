import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$3 } from './p-DNgOH-qB.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const menuActionCss = ".menuaction{position:relative}.menuaction__button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px;-ms-flex-align:center;align-items:center;background-color:var(--color-surface-1, rgb(246, 246, 246));border:0;border-radius:8px;padding:16px;width:100%;text-align:left;cursor:pointer}.menuaction__button__activeicleft{grid-template-columns:auto 1fr}.menuaction__button__activeicright{grid-template-columns:1fr auto}.menuaction__button__activeicleftright{grid-template-columns:auto 1fr auto}.menuaction__button .icon-item{color:var(--color-content-default, rgb(40, 40, 40))}.menuaction__button .content-item{width:100%;color:var(--color-content-default, rgb(40, 40, 40));display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.menuaction__button .arrow{color:var(--color-content-default, rgb(40, 40, 40))}.menuaction__button__lipstick .icon-item{color:#a01c2c}.menuaction__button__lipstick .content-item{color:#a01c2c}.menuaction__button__lipstick .arrow{color:#a01c2c}.menuaction__button__disabled{opacity:0.5;cursor:no-drop}.menuaction__button:hover{background-color:var(--color-surface-2, rgb(237, 237, 237))}.menuaction__submenu{position:absolute;pointer-events:none;display:block;padding:2px;background-color:var(--color-surface-1, rgb(246, 246, 246));border-radius:8px;-webkit-box-shadow:0px 4px 16px rgba(7, 71, 166, 0.12);box-shadow:0px 4px 16px rgba(7, 71, 166, 0.12);min-width:196px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.menuaction__submenu__open{pointer-events:auto;opacity:1}.menuaction.position-right .menuaction__button .icon-item{-ms-flex-order:0;order:0}.menuaction.position-right .menuaction__button .content-item{-ms-flex-order:1;order:1}.menuaction.position-right .menuaction__button .arrow{-ms-flex-order:2;order:2}.menuaction.position-right .menuaction__submenu{top:-2px;left:100%}.menuaction.position-left .menuaction__button .icon-item{-ms-flex-order:1;order:1}.menuaction.position-left .menuaction__button .content-item{-ms-flex-order:2;order:2}.menuaction.position-left .menuaction__button .arrow{-ms-flex-order:0;order:0}.menuaction.position-left .menuaction__submenu{top:-2px;right:100%}";

const BdsMenuAction$1 = /*@__PURE__*/ proxyCustomElement(class BdsMenuAction extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.openParentMenu = false;
        this.openSubMenu = false;
        this.positionSubMenu = 'right';
        this.stateSubMenu = 'close';
        this.delaySubMenu = false;
        this.zIndex = 0;
        this.delay = null;
        /**
         * ButtonText. Used to enter the display text for the item.
         */
        this.buttonText = '';
        /**
         * SubMenu. Used to declare that the button will have a submenu.
         */
        this.subMenu = false;
        /**
         * Iconleft. Used to insert the string icon and make the icon available to the left of the item.
         */
        this.iconLeft = null;
        /**
         * Subtitle. Used to insert a subtitle in the display item.
         */
        this.subtitle = null;
        /**
         * Description. Used to insert a subtitle in the display item.
         */
        this.description = null;
        /**
         * Lipstick. Used to declare that the item will be a negative/error action.
         */
        this.lipstick = false;
        /**
         * Disabled. Used to declare that the item will be disabled.
         */
        this.disabled = false;
        this.onCloseSubMenu = () => {
            this.stateSubMenu = 'close';
        };
        this.onChangeOpenParent = (event) => {
            this.openParentMenu = event.detail.value;
        };
    }
    componentWillLoad() {
        if (this.subMenu) {
            this.menuElement = this.element.parentElement;
            this.menuElement.addEventListener('bdsOpenMenu', (event) => {
                this.onChangeOpenParent(event);
            });
        }
    }
    openParentMenuChanged(active) {
        if (active) {
            const divMenu = this.menuElement.shadowRoot.querySelectorAll('div')[0];
            this.positionSubMenu = divMenu.offsetLeft + divMenu.offsetWidth + 196 >= window.innerWidth ? 'left' : 'right';
        }
    }
    openSubMenuChanged(active) {
        if (active == false) {
            this.stateSubMenu = 'pending';
            this.delay = setTimeout(this.onCloseSubMenu, 1000);
        }
        if (active == true) {
            clearTimeout(this.delay);
            this.delay = null;
            this.stateSubMenu = 'open';
        }
    }
    stateSubMenuChanged(state) {
        switch (state) {
            case 'open':
                this.delaySubMenu = true;
                break;
            case 'pending':
                this.delaySubMenu = true;
                break;
            case 'close':
                this.delaySubMenu = false;
                break;
        }
    }
    render() {
        const actLeft = this.iconLeft && !this.subMenu;
        const actRight = this.subMenu && !this.iconLeft;
        const actLeftright = this.iconLeft && this.subMenu;
        const openSubmenu = () => {
            if (this.subMenu == true) {
                this.zIndex = 1;
                this.openSubMenu = true;
            }
        };
        const closeSubmenu = () => {
            if (this.subMenu == true) {
                this.zIndex = 0;
                this.openSubMenu = false;
            }
        };
        const zIndexSubmenu = {
            zIndex: `${this.zIndex}`,
        };
        return (h("div", { key: '0dd083b69b0bc83ca31cf3c637981d045115755a', class: {
                menuaction: true,
                [`position-${this.positionSubMenu}`]: true,
            }, onMouseOver: openSubmenu, onMouseOut: closeSubmenu }, h("button", { key: 'ec99de3df9d5463d5d1e82bd8419ea457920f1a0', class: {
                menuaction__button: true,
                [`menuaction__button__activeicleft`]: actLeft,
                [`menuaction__button__activeicright`]: actRight,
                [`menuaction__button__activeicleftright`]: actLeftright,
                [`menuaction__button__lipstick`]: this.lipstick,
                [`menuaction__button__disabled`]: this.disabled,
            } }, this.iconLeft && h("bds-icon", { key: '315e2ffd6dd44f2165fac27134c5afd685ccd312', class: "icon-item", name: this.iconLeft, theme: "outline", size: "small" }), h("div", { key: 'f937b5487f8156ee3330e1b10b64535721c4d9d3', class: "content-item" }, this.buttonText && (h("bds-typo", { key: 'a370d668211d80e710068451b0084446236876bc', class: "title-item", variant: "fs-16", tag: "span" }, this.buttonText)), this.subtitle && (h("bds-typo", { key: 'be856f9a9cc03dad4284535c482457f17341011f', class: "subtitle-item", variant: "fs-10", tag: "span" }, this.subtitle)), this.description && (h("bds-typo", { key: 'f1bd06581557f41b131935b6150a66c9a9b0d12a', class: "description-item", variant: "fs-10", tag: "span" }, this.description))), this.subMenu && (h("bds-icon", { key: '36d67ae298cfd87f8ce2d97bca729ea950fe7ced', class: { arrow: true }, name: `arrow-${this.positionSubMenu}`, theme: "outline", size: "small" }))), this.subMenu && (h("div", { key: 'e4112949768e64a92a9b35584aaa62726a82aa77', class: {
                menuaction__submenu: true,
                menuaction__submenu__open: this.delaySubMenu,
            }, style: zIndexSubmenu }, h("slot", { key: '704547f40d1ffbb4d4c7726311c191ecda5fcd8b' })))));
    }
    get element() { return this; }
    static get watchers() { return {
        "openParentMenu": ["openParentMenuChanged"],
        "openSubMenu": ["openSubMenuChanged"],
        "stateSubMenu": ["stateSubMenuChanged"]
    }; }
    static get style() { return menuActionCss; }
}, [1, "bds-menu-action", {
        "buttonText": [1, "button-text"],
        "subMenu": [4, "sub-menu"],
        "iconLeft": [1, "icon-left"],
        "subtitle": [1],
        "description": [1],
        "lipstick": [4],
        "disabled": [4],
        "openParentMenu": [32],
        "openSubMenu": [32],
        "positionSubMenu": [32],
        "stateSubMenu": [32],
        "delaySubMenu": [32],
        "zIndex": [32],
        "delay": [32]
    }, undefined, {
        "openParentMenu": ["openParentMenuChanged"],
        "openSubMenu": ["openSubMenuChanged"],
        "stateSubMenu": ["stateSubMenuChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-menu-action", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-menu-action":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsMenuAction$1);
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsMenuAction = BdsMenuAction$1;
const defineCustomElement = defineCustomElement$1;

export { BdsMenuAction, defineCustomElement };
//# sourceMappingURL=bds-menu-action.js.map

//# sourceMappingURL=bds-menu-action.js.map