import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$4 } from './p-DQoTpKn5.js';
import { d as defineCustomElement$3 } from './p-BTJFi-RQ.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const menuExibitionCss = ".menuexibition{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:16px}.menuexibition__disabled{opacity:0.5;cursor:no-drop}.menuexibition .avatar-item{display:block;margin-right:8px}.menuexibition .content-item{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.menuexibition .content-item .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.menuexibition .content-item .subtitle-item{color:var(--color-content-disable, rgb(89, 89, 89))}.menuexibition .content-item .description-item{color:var(--color-content-default, rgb(40, 40, 40))}";

const BdsMenuExibition$1 = /*@__PURE__*/ proxyCustomElement(class BdsMenuExibition extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h("div", { key: '34c5a7e8e9b55d43c6309ad684fa7af359a11d23', class: {
                menuexibition: true,
                [`menuexibition__disabled`]: this.disabled,
            } }, hasAvatar && (h("bds-avatar", { key: 'c485d7a4248a4a34553ef499ba60cabc6b580036', class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: this.avatarSize })), h("div", { key: '5b41a63882e63541b2315cba00ba981c2167e403', class: "content-item" }, this.value && (h("bds-typo", { key: '2214b9f2a065e365065e7beca3dfa7664dedcd59', class: "title-item", variant: "fs-16", tag: "span" }, this.value)), this.subtitle && (h("bds-typo", { key: 'fd08dfd0153a07bd3095ca258f5501fc92e28c67', class: "subtitle-item", variant: "fs-10", tag: "span" }, this.subtitle)), this.description && (h("bds-typo", { key: 'e607923f89a5b744d79b62ee220003f36ac2b3a8', class: "description-item", variant: "fs-10", tag: "span" }, this.description)))));
    }
    static get style() { return menuExibitionCss; }
}, [1, "bds-menu-exibition", {
        "avatarName": [1, "avatar-name"],
        "avatarThumbnail": [1, "avatar-thumbnail"],
        "avatarSize": [1, "avatar-size"],
        "value": [1],
        "subtitle": [1],
        "description": [1],
        "disabled": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-menu-exibition", "bds-avatar", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-menu-exibition":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsMenuExibition$1);
            }
            break;
        case "bds-avatar":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
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

const BdsMenuExibition = BdsMenuExibition$1;
const defineCustomElement = defineCustomElement$1;

export { BdsMenuExibition, defineCustomElement };
//# sourceMappingURL=bds-menu-exibition.js.map

//# sourceMappingURL=bds-menu-exibition.js.map