import { r as registerInstance, h, a as getElement } from './index-BALoTlPi.js';

const menuActionCss = ".menuaction{position:relative}.menuaction__button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px;-ms-flex-align:center;align-items:center;background-color:var(--color-surface-1, rgb(246, 246, 246));border:0;border-radius:8px;padding:16px;width:100%;text-align:left;cursor:pointer}.menuaction__button__activeicleft{grid-template-columns:auto 1fr}.menuaction__button__activeicright{grid-template-columns:1fr auto}.menuaction__button__activeicleftright{grid-template-columns:auto 1fr auto}.menuaction__button .icon-item{color:var(--color-content-default, rgb(40, 40, 40))}.menuaction__button .content-item{width:100%;color:var(--color-content-default, rgb(40, 40, 40));display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.menuaction__button .arrow{color:var(--color-content-default, rgb(40, 40, 40))}.menuaction__button__lipstick .icon-item{color:#a01c2c}.menuaction__button__lipstick .content-item{color:#a01c2c}.menuaction__button__lipstick .arrow{color:#a01c2c}.menuaction__button__disabled{opacity:0.5;cursor:no-drop}.menuaction__button:hover{background-color:var(--color-surface-2, rgb(237, 237, 237))}.menuaction__submenu{position:absolute;pointer-events:none;display:block;padding:2px;background-color:var(--color-surface-1, rgb(246, 246, 246));border-radius:8px;-webkit-box-shadow:0px 4px 16px rgba(7, 71, 166, 0.12);box-shadow:0px 4px 16px rgba(7, 71, 166, 0.12);min-width:196px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.menuaction__submenu__open{pointer-events:auto;opacity:1}.menuaction.position-right .menuaction__button .icon-item{-ms-flex-order:0;order:0}.menuaction.position-right .menuaction__button .content-item{-ms-flex-order:1;order:1}.menuaction.position-right .menuaction__button .arrow{-ms-flex-order:2;order:2}.menuaction.position-right .menuaction__submenu{top:-2px;left:100%}.menuaction.position-left .menuaction__button .icon-item{-ms-flex-order:1;order:1}.menuaction.position-left .menuaction__button .content-item{-ms-flex-order:2;order:2}.menuaction.position-left .menuaction__button .arrow{-ms-flex-order:0;order:0}.menuaction.position-left .menuaction__submenu{top:-2px;right:100%}";

const BdsMenuAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: 'bf1a3b8ee72da71a706c7cd2869befd9b9e569b3', class: {
                menuaction: true,
                [`position-${this.positionSubMenu}`]: true,
            }, onMouseOver: openSubmenu, onMouseOut: closeSubmenu }, h("button", { key: '4a997c05d96720a7e702d43c10664ce3dd7c2cd4', class: {
                menuaction__button: true,
                [`menuaction__button__activeicleft`]: actLeft,
                [`menuaction__button__activeicright`]: actRight,
                [`menuaction__button__activeicleftright`]: actLeftright,
                [`menuaction__button__lipstick`]: this.lipstick,
                [`menuaction__button__disabled`]: this.disabled,
            } }, this.iconLeft && h("bds-icon", { key: 'f6e138c229f1b08c9fad82b869d4b1291398cd8f', class: "icon-item", name: this.iconLeft, theme: "outline", size: "small" }), h("div", { key: '2a3ff97e236103905a6f4ce38ad1db04a4e6aaa9', class: "content-item" }, this.buttonText && (h("bds-typo", { key: 'ffb2d7cbf8739f091cbb483f49bc0cccc2c1da79', class: "title-item", variant: "fs-16", tag: "span" }, this.buttonText)), this.subtitle && (h("bds-typo", { key: '52841880aa5ce2f4d7ab4b2e526c5aa6fce7ef20', class: "subtitle-item", variant: "fs-10", tag: "span" }, this.subtitle)), this.description && (h("bds-typo", { key: 'bda0651947e8f1100246dc3568f7679e33a64ed4', class: "description-item", variant: "fs-10", tag: "span" }, this.description))), this.subMenu && (h("bds-icon", { key: '056d2b944997c0c1a650c9effab4a4510bf85177', class: { arrow: true }, name: `arrow-${this.positionSubMenu}`, theme: "outline", size: "small" }))), this.subMenu && (h("div", { key: 'c6e0c2e4144123c6a23f1d668718bf5baa965c68', class: {
                menuaction__submenu: true,
                menuaction__submenu__open: this.delaySubMenu,
            }, style: zIndexSubmenu }, h("slot", { key: '35f9f133f4c7602d4d3a0213a55f547f5f8121da' })))));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "openParentMenu": ["openParentMenuChanged"],
        "openSubMenu": ["openSubMenuChanged"],
        "stateSubMenu": ["stateSubMenuChanged"]
    }; }
};
BdsMenuAction.style = menuActionCss;

export { BdsMenuAction as bds_menu_action };
//# sourceMappingURL=bds-menu-action.entry.js.map

//# sourceMappingURL=bds-menu-action.entry.js.map