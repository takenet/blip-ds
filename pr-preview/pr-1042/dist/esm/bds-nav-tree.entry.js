import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-C3J6Z5OX.js';

const navTreeCss = ":host{display:block;margin:-4px;padding:4px;width:100%;position:relative;overflow:hidden;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.nav_main{display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center;padding:8px;position:relative;cursor:pointer;border-radius:8px;border:1px solid transparent;overflow:hidden}.nav_main--loading{cursor:wait}.nav_main--disable{opacity:0.5;cursor:not-allowed}.nav_main:before{content:\"\";position:absolute;inset:0}.nav_main:hover:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.nav_main:active:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}.nav_main:hover,.nav_main_active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_main_active:before{background-color:var(--color-content-default, rgb(40, 40, 40));border-color:var(--color-hover, rgba(0, 0, 0, 0.08));opacity:0.08}.nav_main--disable:before,.nav_main--disable:hover{border-color:transparent;background-color:transparent}.nav_main .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.nav_main .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.nav_main_text{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.nav_main_text .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.nav_main_text .title-item--loading{color:var(--color-content-disable, rgb(89, 89, 89))}.nav_main_text .subtitle-item{color:var(--color-content-default, rgb(40, 40, 40))}.nav_main_text .subtitle-item--loading{color:var(--color-content-disable, rgb(89, 89, 89))}.nav_main_content{width:100%;-ms-flex-negative:99999;flex-shrink:99999}.nav_main_arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.nav_main_arrow--disable{color:var(--color-content-disable, rgb(89, 89, 89))}.nav_main_arrow_active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion{display:grid;grid-template-rows:0fr;-webkit-transition:all ease 0.5s;-moz-transition:all ease 0.5s;transition:all ease 0.5s}.accordion_open{grid-template-rows:1fr;padding:8px 0}.accordion .container{overflow:hidden;position:relative;padding-left:23px}.accordion .container:before{content:\"\";position:absolute;width:2px;inset:0;left:23px;top:8px;bottom:8px;border-radius:8px;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));opacity:0.8}.accordion .container--disable:before{background-color:transparent}.nav_tree_item{position:relative;display:-ms-flexbox;display:flex;gap:8px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;cursor:pointer;padding:8px;padding-left:22px}.nav_tree_item--loading{cursor:wait}.nav_tree_item--disable{opacity:0.5;cursor:not-allowed}.nav_tree_item--disable:before,.nav_tree_item--disable:hover{border-color:transparent;background-color:transparent}.nav_tree_item .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.nav_tree_item .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.nav_tree_item_content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.nav_tree_item_slot{width:100%;-ms-flex-negative:99999;flex-shrink:99999}.nav_tree_item:before{content:\"\";position:absolute;width:2px;inset:0;top:8px;bottom:8px;border-radius:8px;background-color:transparent;-webkit-transition:background-color ease 0.8s;-moz-transition:background-color ease 0.8s;transition:background-color ease 0.8s}.nav_tree_item:hover:before{background-color:var(--color-pressed, rgba(0, 0, 0, 0.16));-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item_active:before{background-color:var(--color-primary, rgb(30, 107, 241));-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item_active:hover:before{background-color:var(--color-primary, rgb(30, 107, 241));-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item .icon-arrow{position:relative;-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.nav_tree_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.nav_tree_item_button{padding:8px;margin-left:14px;border-radius:8px;border:1px solid transparent}.nav_tree_item_button:before{left:-15px}.nav_tree_item_button:after{content:\"\";position:absolute;inset:0;border-radius:8px;background-color:transparent}.nav_tree_item_button:hover,.nav_tree_item_button_active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_tree_item_button:hover:after,.nav_tree_item_button_active:after{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.nav_tree_item_button:active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_tree_item_button:active:after{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}.focus{position:relative}.focus:before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.focus:focus-visible{outline:none}.focus:focus-visible:before{border-color:var(--color-focus, rgb(194, 38, 251))}";

const NavTree = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsToogleChange = createEvent(this, "bdsToogleChange");
        this.itemsGroup = null;
        this.isOpenAftAnimation = false;
        this.navTreeChild = null;
        this.numberElement = null;
        /**
         * Focus Selected. Used to add title in header accordion.
         */
        this.collapse = 'single';
        /**
         * A prop for make the nav open.
         */
        this.isOpen = false;
        /**
         * Icon. Used to add icon in list item.
         */
        this.icon = null;
        /**
         * SecondaryText. Used to insert a secondaryText in the display item.
         */
        this.secondaryText = null;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Loading state. Indicates if the component is in a loading state.
         */
        this.loading = false;
        /**
         * Disable state. Indicates if the component is disabled.
         */
        this.disable = false;
        this.handler = () => {
            if (!this.loading && !this.disable) {
                this.isOpen = !this.isOpen;
            }
        };
    }
    async toggle() {
        if (!this.disable) {
            this.isOpen = !this.isOpen;
        }
    }
    async reciveNumber(number) {
        this.numberElement = number;
    }
    async open() {
        this.isOpen = true;
    }
    async close() {
        this.isOpen = false;
    }
    isOpenChanged(value) {
        var _a;
        this.bdsToogleChange.emit({ value: value, element: this.element });
        if (value) {
            if (this.itemsGroup.collapse == 'single') {
                (_a = this.itemsGroup) === null || _a === void 0 ? void 0 : _a.closeAll(this.numberElement);
            }
        }
    }
    componentWillLoad() {
        this.itemsGroup =
            this.element.parentElement.tagName == 'BDS-NAV-TREE-GROUP' &&
                this.element.parentElement;
        this.navTreeChild = this.element.querySelector('bds-nav-tree-item') === null ? false : true;
    }
    handleKeyDown(event) {
        if (event.key == 'Enter' && !this.disable) {
            this.isOpen = !this.isOpen;
        }
    }
    render() {
        return (h(Host, { key: '80ac5273c12d66e3dd437a0d97e155cfae225360' }, h("div", { key: 'cad8aaf5175c6c220371b37967c698d0a1ded530', tabindex: "0", onKeyDown: this.handleKeyDown.bind(this), class: "focus" }, h("div", { key: '6b5d037ad94347ee0c923919b5e9c61f64ea32e7', class: {
                [`nav_main--disable`]: this.disable,
            } }, h("div", { key: 'cb9f7fd56b3f6092c9490955feda6ef9733f015d', onClick: this.handler, class: {
                nav_main: true,
                nav_main_active: this.isOpen,
                [`nav_main--loading`]: this.loading,
                [`nav_main--disable`]: this.disable,
            }, "data-test": this.dataTest, "aria-label": this.text + (this.secondaryText && `: ${this.secondaryText}`) }, this.loading ? (h("bds-loading-spinner", { size: "extra-small" })) : this.icon ? (h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.isOpen,
            }, size: "medium", name: this.icon, color: "inherit", theme: "outline" })) : (''), h("div", { key: 'c27f99a63d3daff9ebc5d14126117ee1d6df765c', class: "nav_main_text" }, this.text && (h("bds-typo", { key: '750964e347e14973f2690364c3c7104eae15b8af', class: { ['title-item']: true, [`title-item--loading`]: this.loading }, variant: "fs-14", tag: "span", "line-height": "small", bold: this.isOpen ? 'bold' : 'semi-bold' }, this.text)), this.secondaryText && (h("bds-typo", { key: 'e3de7f19865b637c4ac1af10bbcabd973a2787a0', class: { ['subtitle-item']: true, [`subtitle-item--loading`]: this.loading }, variant: "fs-12", "line-height": "small", tag: "span", margin: false }, this.secondaryText))), h("div", { key: '83b1e2d7edad3678e2437e04b91158dd841a42b2', class: "nav_main_content" }, h("slot", { key: '1ba5665ad7028a10c9e9e79081efeee60570cdc1', name: "header-content" })), this.navTreeChild && (h("bds-icon", { key: '369c145d451124cf001ef1677e9244438adee834', name: "arrow-down", class: {
                [`nav_main_arrow`]: true,
                [`nav_main_arrow_active`]: this.isOpen,
                [`nav_main_arrow--loading`]: this.loading,
            } }))))), h("div", { key: '1da4e53b786d2d2b79a84f833ef433b8ff4bbc93', class: {
                accordion: true,
                accordion_open: this.isOpen && this.navTreeChild,
            } }, h("div", { key: 'a34a1324f95be2dbb10d743c1350ee344b99e4ed', class: { ['container']: true, [`container--disable`]: this.disable } }, h("slot", { key: 'd25ef5dbbe277995f17b1a22d4f0bf08434a035c' })))));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "isOpen": ["isOpenChanged"]
    }; }
};
NavTree.style = navTreeCss;

export { NavTree as bds_nav_tree };
//# sourceMappingURL=bds-nav-tree.entry.js.map

//# sourceMappingURL=bds-nav-tree.entry.js.map