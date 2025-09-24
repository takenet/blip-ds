'use strict';

var index = require('./index-D_zq0Z7d.js');

const menuExibitionCss = ".menuexibition{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:16px}.menuexibition__disabled{opacity:0.5;cursor:no-drop}.menuexibition .avatar-item{display:block;margin-right:8px}.menuexibition .content-item{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.menuexibition .content-item .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.menuexibition .content-item .subtitle-item{color:var(--color-content-disable, rgb(89, 89, 89))}.menuexibition .content-item .description-item{color:var(--color-content-default, rgb(40, 40, 40))}";

const BdsMenuExibition = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: '26f4d44f79e894f2221a77d4601d4fe3827a4df1', class: {
                menuexibition: true,
                [`menuexibition__disabled`]: this.disabled,
            } }, hasAvatar && (index.h("bds-avatar", { key: 'f472e20dcf583ecd9cd1c1b25b2ecb9420d568ff', class: "avatar-item", name: this.avatarName, thumbnail: this.avatarThumbnail, size: this.avatarSize })), index.h("div", { key: 'c03868ec242cdbaaf7f207d1b25dc1ed5ab1c4e3', class: "content-item" }, this.value && (index.h("bds-typo", { key: '5f6b4be0f567e01cd11aca057898da0314fd3507', class: "title-item", variant: "fs-16", tag: "span" }, this.value)), this.subtitle && (index.h("bds-typo", { key: '73daa9934056f64e320efd3665ebe2e636d915db', class: "subtitle-item", variant: "fs-10", tag: "span" }, this.subtitle)), this.description && (index.h("bds-typo", { key: '2c66e992d6d051de9582d927cbceeb1ffb9588cb', class: "description-item", variant: "fs-10", tag: "span" }, this.description)))));
    }
};
BdsMenuExibition.style = menuExibitionCss;

exports.bds_menu_exibition = BdsMenuExibition;
//# sourceMappingURL=bds-menu-exibition.entry.cjs.js.map

//# sourceMappingURL=bds-menu-exibition.cjs.entry.js.map