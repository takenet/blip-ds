import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-UYZ9xe6Z.js';

const navTreeCss = ":host{display:block;margin:-4px;padding:4px;width:100%;position:relative;overflow:hidden;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.nav_main{display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center;padding:8px;position:relative;cursor:pointer;border-radius:8px;border:1px solid transparent;overflow:hidden}.nav_main--loading{cursor:wait}.nav_main--disable{opacity:0.5;cursor:not-allowed}.nav_main:before{content:\"\";position:absolute;inset:0}.nav_main:hover:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.nav_main:active:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}.nav_main:hover,.nav_main_active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_main_active:before{background-color:var(--color-content-default, rgb(40, 40, 40));border-color:var(--color-hover, rgba(0, 0, 0, 0.08));opacity:0.08}.nav_main--disable:before,.nav_main--disable:hover{border-color:transparent;background-color:transparent}.nav_main .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.nav_main .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.nav_main_text{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.nav_main_text .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.nav_main_text .title-item--loading{color:var(--color-content-disable, rgb(89, 89, 89))}.nav_main_text .subtitle-item{color:var(--color-content-default, rgb(40, 40, 40))}.nav_main_text .subtitle-item--loading{color:var(--color-content-disable, rgb(89, 89, 89))}.nav_main_content{width:100%;-ms-flex-negative:99999;flex-shrink:99999}.nav_main_arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.nav_main_arrow--disable{color:var(--color-content-disable, rgb(89, 89, 89))}.nav_main_arrow_active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion{display:grid;grid-template-rows:0fr;-webkit-transition:all ease 0.5s;-moz-transition:all ease 0.5s;transition:all ease 0.5s}.accordion_open{grid-template-rows:1fr;padding:8px 0}.accordion .container{overflow:hidden;position:relative;padding-left:23px}.accordion .container:before{content:\"\";position:absolute;width:2px;inset:0;left:23px;top:8px;bottom:8px;border-radius:8px;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));opacity:0.8}.accordion .container--disable:before{background-color:transparent}.nav_tree_item{position:relative;display:-ms-flexbox;display:flex;gap:8px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;cursor:pointer;padding:8px;padding-left:22px}.nav_tree_item--loading{cursor:wait}.nav_tree_item--disable{opacity:0.5;cursor:not-allowed}.nav_tree_item--disable:before,.nav_tree_item--disable:hover{border-color:transparent;background-color:transparent}.nav_tree_item .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.nav_tree_item .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.nav_tree_item_content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.nav_tree_item_slot{width:100%;-ms-flex-negative:99999;flex-shrink:99999}.nav_tree_item:before{content:\"\";position:absolute;width:2px;inset:0;top:8px;bottom:8px;border-radius:8px;background-color:transparent;-webkit-transition:background-color ease 0.8s;-moz-transition:background-color ease 0.8s;transition:background-color ease 0.8s}.nav_tree_item:hover:before{background-color:var(--color-pressed, rgba(0, 0, 0, 0.16));-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item_active:before{background-color:var(--color-primary, rgb(30, 107, 241));-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item_active:hover:before{background-color:var(--color-primary, rgb(30, 107, 241));-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item .icon-arrow{position:relative;-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.nav_tree_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.nav_tree_item_button{padding:8px;margin-left:14px;border-radius:8px;border:1px solid transparent}.nav_tree_item_button:before{left:-15px}.nav_tree_item_button:after{content:\"\";position:absolute;inset:0;border-radius:8px;background-color:transparent}.nav_tree_item_button:hover,.nav_tree_item_button_active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_tree_item_button:hover:after,.nav_tree_item_button_active:after{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.nav_tree_item_button:active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_tree_item_button:active:after{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}.focus{position:relative}.focus:before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.focus:focus-visible{outline:none}.focus:focus-visible:before{border-color:var(--color-focus, rgb(194, 38, 251))}";

const NavTreeItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsToogleChange = createEvent(this, "bdsToogleChange");
        this.navTreeParent = null;
        this.navTreeChild = null;
        this.itensElement = null;
        /**
         * Focus Selected. Used to add title in header accordion.
         */
        this.collapse = 'single';
        /**
         * Icon. Used to add icon in list item.
         */
        this.icon = null;
        /**
         * SecondaryText. Used to insert a secondaryText in the display item.
         */
        this.secondaryText = null;
        /**
         * Active. Used to define when the item is highlighted.
         */
        this.isOpen = false;
        /**
         * Loading state. Indicates if the component is in a loading state.
         */
        this.loading = false;
        /**
         * Disable state. Indicates if the component is disabled.
         */
        this.disable = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.handler = () => {
            if (!this.loading && !this.disable) {
                if (this.navTreeParent.collapse == 'single') {
                    for (let i = 0; i < this.itensElement.length; i++) {
                        if (this.itensElement[i] != this.element)
                            this.itensElement[i].isOpen = false;
                    }
                }
                this.toggle();
            }
        };
    }
    async toggle() {
        this.isOpen = !this.isOpen;
    }
    isOpenChanged(value) {
        this.bdsToogleChange.emit({ value: value, element: this.element });
        // if (this.navTreeChild) this.navTreeChild.isOpen = value;
    }
    componentWillLoad() {
        this.navTreeParent =
            (this.element.parentElement.tagName == 'BDS-NAV-TREE' && this.element.parentElement) ||
                (this.element.parentElement);
        this.navTreeChild = this.element.querySelector('bds-nav-tree-item');
    }
    componentWillRender() {
        this.itensElement = this.navTreeParent.getElementsByTagName('bds-nav-tree-item');
    }
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.handler();
        }
    }
    render() {
        return (h(Host, { key: '132f1aef904238c9b1f06c6e3aca642352e624dc' }, h("div", { key: '4bb75979a31792d0f0dd0410fdfff246138dc0f6', tabindex: "0", onKeyDown: this.handleKeyDown.bind(this), class: "focus" }, h("div", { key: '65d30eaa7a06897792095e7ae07fb581a5c344df', class: {
                nav_tree_item: true,
                nav_tree_item_active: this.isOpen,
                nav_tree_item_button: !this.navTreeChild,
                nav_tree_item_button_active: !this.navTreeChild && this.isOpen,
                [`nav_tree_item--loading`]: this.loading,
                [`nav_tree_item--disable`]: this.disable,
            }, onClick: () => this.handler(), "data-test": this.dataTest, "aria-label": this.text + (this.secondaryText && `: ${this.secondaryText}`) }, this.loading ? (h("bds-loading-spinner", { size: "extra-small" })) : this.icon ? (h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.isOpen,
            }, size: "medium", name: this.icon, color: "inherit", theme: "outline" })) : (''), h("div", { key: 'dde25a462dd853123f9887fb0c5b894a4c78d195', class: "nav_tree_item_content" }, this.text && (h("bds-typo", { key: '8b005de6c39ed9307eb37aef926d153ebfb8131e', class: { ['title-item']: true, [`title-item--loading`]: this.loading }, variant: "fs-14", tag: "span", "line-height": "small", bold: this.isOpen ? 'bold' : 'semi-bold' }, this.text)), this.secondaryText && (h("bds-typo", { key: '8d3ffaa925e509aad1b34d120c3eab83e27b8c05', class: { ['subtitle-item']: true, [`subtitle-item--loading`]: this.loading }, variant: "fs-12", "line-height": "small", tag: "span", margin: false }, this.secondaryText))), h("div", { key: '0ade154ce111fbb6cf8bae7963ab39c6577f1e58', class: "nav_tree_item_slot" }, h("slot", { key: '77b7c0dd3867fa0625ade6b94886d8635cb9e9d0', name: "header-content" })), this.navTreeChild && (h("bds-icon", { key: 'ff516a57eca474bfc55474165bddab1a982146f4', class: {
                [`nav_main_arrow`]: true,
                [`nav_main_arrow_active`]: this.isOpen,
                [`nav_main_arrow--loading`]: this.loading,
            }, name: "arrow-down" })))), this.navTreeChild && (h("div", { key: 'fb148be91f18db7517aaeb4058ea2fd74f79f3fe', class: {
                accordion: true,
                accordion_open: this.isOpen,
            } }, h("div", { key: '5eb2a7ad53d70954a8a0df66fd400c1f814339bb', class: "container" }, h("slot", { key: 'dd1b62b23e6bb68f8844294eb21f5ae23f594cbb' }))))));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "isOpen": ["isOpenChanged"]
    }; }
};
NavTreeItem.style = navTreeCss;

export { NavTreeItem as bds_nav_tree_item };
//# sourceMappingURL=bds-nav-tree-item.entry.js.map

//# sourceMappingURL=bds-nav-tree-item.entry.js.map