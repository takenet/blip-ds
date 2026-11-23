import { r as registerInstance, h } from './index-B3G05Lxx.js';

const menuSeparationCss = () => `.menuseparation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 16px}.menuseparation__small{margin:8px 0}.menuseparation__default{margin:12px 0}.menuseparation__large{margin:16px 0}.menuseparation .dividor-item{height:1px;width:100%;background-color:#d4d4d4}.menuseparation .title-item{margin-right:8px;margin-top:-4px;color:#6e7b91}`;

const BdsMenuSeparation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Value. Used to insert a title to the divider.
         */
        this.value = null;
        /**
         * Size. Used to set the size of the divider.
         */
        this.size = null;
    }
    render() {
        return (h("div", { key: 'a4e7b8a4d29a2f8c73e82ffb8350b65248afe043', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: 'b271bdcc67e62a010437c98c7d36421a1892c800', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: '200a2568c714b6cd3de1ba0bb03f9189af10fdcf', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss();

export { BdsMenuSeparation as bds_menu_separation };
