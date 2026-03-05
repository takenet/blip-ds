import { h } from "@stencil/core";
export class BdsMenuExibition {
    constructor() {
        /**
         * AvatarName. Used to enter the avatar name.
         */
        this.avatarName = null;
        /**
         * AvatarThumbnail. Used to insert the avatar photo.
         */
        this.avatarThumbnail = null;
        /**
         * AvatarSize. Used to set avatar size.
         */
        this.avatarSize = 'standard';
        /**
         * Value. Used to insert a title in the display item.
         */
        this.value = null;
        /**
         * Subtitle. Used to insert a subtitle in the display item.
         */
        this.subtitle = null;
        /**
         * Description. Used to insert a subtitle in the display item.
         */
        this.description = null;
        /**
         * Disabled. Used to declare that the item will be disabled.
         */
        this.disabled = false;
    }
    render() {
        const hasAvatar = this.avatarName || this.avatarThumbnail;
        return (h("div", { key: '26f4d44f79e894f2221a77d4601d4fe3827a4df1', class: {
                menuexibition: true,
                [`menuexibition__disabled`]: this.disabled,
            } }, hasAvatar && (h("bds-avatar", { key: 'f472e20dcf583ecd9cd1c1b25b2ecb9420d568ff', class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: this.avatarSize })), h("div", { key: 'c03868ec242cdbaaf7f207d1b25dc1ed5ab1c4e3', class: "content-item" }, this.value && (h("bds-typo", { key: '5f6b4be0f567e01cd11aca057898da0314fd3507', class: "title-item", variant: "fs-16", tag: "span" }, this.value)), this.subtitle && (h("bds-typo", { key: '73daa9934056f64e320efd3665ebe2e636d915db', class: "subtitle-item", variant: "fs-10", tag: "span" }, this.subtitle)), this.description && (h("bds-typo", { key: '2c66e992d6d051de9582d927cbceeb1ffb9588cb', class: "description-item", variant: "fs-10", tag: "span" }, this.description)))));
    }
    static get is() { return "bds-menu-exibition"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-exibition.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-exibition.css"]
        };
    }
    static get properties() {
        return {
            "avatarName": {
                "type": "string",
                "attribute": "avatar-name",
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
                    "text": "AvatarName. Used to enter the avatar name."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "avatarThumbnail": {
                "type": "string",
                "attribute": "avatar-thumbnail",
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
                    "text": "AvatarThumbnail. Used to insert the avatar photo."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "avatarSize": {
                "type": "string",
                "attribute": "avatar-size",
                "mutable": false,
                "complexType": {
                    "original": "avatarSize",
                    "resolved": "\"extra-small\" | \"small\" | \"standard\"",
                    "references": {
                        "avatarSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/menu/menu-exibition/menu-exibition.tsx",
                            "id": "src/components/menu/menu-exibition/menu-exibition.tsx::avatarSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "AvatarSize. Used to set avatar size."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'standard'"
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                    "text": "Value. Used to insert a title in the display item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "subtitle": {
                "type": "string",
                "attribute": "subtitle",
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
                "defaultValue": "null"
            },
            "description": {
                "type": "string",
                "attribute": "description",
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
                "defaultValue": "null"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=menu-exibition.js.map
