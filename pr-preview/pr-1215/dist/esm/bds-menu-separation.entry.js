import { r as registerInstance, h } from './index-CkbvGS8Z.js';

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
        return (h("div", { key: '36a29e3cf24e9335e267d8d898b968e9ad4bcb9a', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: 'c4afdef021fdff6a622f83f78f11d2548456e947', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: '38b0c53e4d4fc97a9b3b7af86931d58861a0684a', class: "dividor-item" })));
    }
};
BdsMenuSeparation.style = menuSeparationCss();

export { BdsMenuSeparation as bds_menu_separation };
