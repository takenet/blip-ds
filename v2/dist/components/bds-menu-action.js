import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$3 } from './p-lQDFAY-k.js';
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
        return (h("div", { key: 'f301d36964ecd0209dba142efed3dcb9c5dd9046', class: {
                menuaction: true,
                [`position-${this.positionSubMenu}`]: true,
            }, onMouseOver: openSubmenu, onMouseOut: closeSubmenu }, h("button", { key: '4bbccf86ff7be4a8650f7d86b776e90b9dc13c69', class: {
                menuaction__button: true,
                [`menuaction__button__activeicleft`]: actLeft,
                [`menuaction__button__activeicright`]: actRight,
                [`menuaction__button__activeicleftright`]: actLeftright,
                [`menuaction__button__lipstick`]: this.lipstick,
                [`menuaction__button__disabled`]: this.disabled,
            } }, this.iconLeft && h("bds-icon", { key: '03d269f200d2ff3fedbee86517b150ab1f92e350', class: "icon-item", name: this.iconLeft, theme: "outline", size: "small" }), h("div", { key: '3f54c92a1fae9b4f6d9d4ef93bfd69ba8d59c636', class: "content-item" }, this.buttonText && (h("bds-typo", { key: '9b21c816a17213fc6315c2cf9e86160c01de404c', class: "title-item", variant: "fs-16", tag: "span" }, this.buttonText)), this.subtitle && (h("bds-typo", { key: 'cb2b537205c4b02d884c409c6e095b217e7b70eb', class: "subtitle-item", variant: "fs-10", tag: "span" }, this.subtitle)), this.description && (h("bds-typo", { key: 'a3c9e8249afa0d1c37189918f3a1ef3d63d13e15', class: "description-item", variant: "fs-10", tag: "span" }, this.description))), this.subMenu && (h("bds-icon", { key: '79fa0d0dade0a2621dc0cdd9468d0c88f048e397', class: { arrow: true }, name: `arrow-${this.positionSubMenu}`, theme: "outline", size: "small" }))), this.subMenu && (h("div", { key: 'abea0b517b1b2689fae069211f75e2aaafc53e6e', class: {
                menuaction__submenu: true,
                menuaction__submenu__open: this.delaySubMenu,
            }, style: zIndexSubmenu }, h("slot", { key: '84f3db8e46cd454da68dfd33b46c0cfb4ebb8be9' })))));
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