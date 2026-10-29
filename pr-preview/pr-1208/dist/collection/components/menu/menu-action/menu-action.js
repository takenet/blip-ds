import { h } from "@stencil/core";
export class BdsMenuAction {
    constructor() {
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
        return (h("div", { key: 'ddad524949b90867d99d13eeb54eb260f6e8f922', class: {
                menuaction: true,
                [`position-${this.positionSubMenu}`]: true,
            }, onMouseOver: openSubmenu, onMouseOut: closeSubmenu }, h("button", { key: '91e1d5a1ecc9bf25da3e7bb5752614e8ea1b35f4', class: {
                menuaction__button: true,
                [`menuaction__button__activeicleft`]: actLeft,
                [`menuaction__button__activeicright`]: actRight,
                [`menuaction__button__activeicleftright`]: actLeftright,
                [`menuaction__button__lipstick`]: this.lipstick,
                [`menuaction__button__disabled`]: this.disabled,
            } }, this.iconLeft && h("bds-icon", { key: '46a46afc8b2fd9506bcfc3db0e1c1e965e721bb6', class: "icon-item", name: this.iconLeft, theme: "outline", size: "small" }), h("div", { key: '0cca2541c49b0333e13443de56f45f408b522549', class: "content-item" }, this.buttonText && (h("bds-typo", { key: '2018f2343f254a06dade0188935099d1234a3f1f', class: "title-item", variant: "fs-16", tag: "span" }, this.buttonText)), this.subtitle && (h("bds-typo", { key: '775effd7641c964b9392ad8f34bbba8408192ec6', class: "subtitle-item", variant: "fs-10", tag: "span" }, this.subtitle)), this.description && (h("bds-typo", { key: '5ff02ef2733d85a56300db5692f3794fe9da4f1e', class: "description-item", variant: "fs-10", tag: "span" }, this.description))), this.subMenu && (h("bds-icon", { key: 'a4a8d73bbac21991293481dfc54d90ffdca6e682', class: { arrow: true }, name: `arrow-${this.positionSubMenu}`, theme: "outline", size: "small" }))), this.subMenu && (h("div", { key: '7596ac9124fe8238d6afdf150b34bf63612d9b24', class: {
                menuaction__submenu: true,
                menuaction__submenu__open: this.delaySubMenu,
            }, style: zIndexSubmenu }, h("slot", { key: 'ecfcccfeffb01bceb10f60000d2e6c0a157c80db' })))));
    }
    static get is() { return "bds-menu-action"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-action.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-action.css"]
        };
    }
    static get properties() {
        return {
            "buttonText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "ButtonText. Used to enter the display text for the item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "button-text",
                "defaultValue": "''"
            },
            "subMenu": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "SubMenu. Used to declare that the button will have a submenu."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sub-menu",
                "defaultValue": "false"
            },
            "iconLeft": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Iconleft. Used to insert the string icon and make the icon available to the left of the item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon-left",
                "defaultValue": "null"
            },
            "subtitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Subtitle. Used to insert a subtitle in the display item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "subtitle",
                "defaultValue": "null"
            },
            "description": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Description. Used to insert a subtitle in the display item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "description",
                "defaultValue": "null"
            },
            "lipstick": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Lipstick. Used to declare that the item will be a negative/error action."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "lipstick",
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Disabled. Used to declare that the item will be disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "openParentMenu": {},
            "openSubMenu": {},
            "positionSubMenu": {},
            "stateSubMenu": {},
            "delaySubMenu": {},
            "zIndex": {},
            "delay": {}
        };
    }
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "openParentMenu",
                "methodName": "openParentMenuChanged"
            }, {
                "propName": "openSubMenu",
                "methodName": "openSubMenuChanged"
            }, {
                "propName": "stateSubMenu",
                "methodName": "stateSubMenuChanged"
            }];
    }
}
