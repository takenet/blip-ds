'use strict';

var index = require('./index-D_zq0Z7d.js');

const navTreeCss = ":host{display:block;margin:-4px;padding:4px;width:100%;position:relative;overflow:hidden;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.nav_main{display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center;padding:8px;position:relative;cursor:pointer;border-radius:8px;border:1px solid transparent;overflow:hidden}.nav_main--loading{cursor:wait}.nav_main--disable{opacity:0.5;cursor:not-allowed}.nav_main:before{content:\"\";position:absolute;inset:0}.nav_main:hover:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.nav_main:active:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}.nav_main:hover,.nav_main_active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_main_active:before{background-color:var(--color-content-default, rgb(40, 40, 40));border-color:var(--color-hover, rgba(0, 0, 0, 0.08));opacity:0.08}.nav_main--disable:before,.nav_main--disable:hover{border-color:transparent;background-color:transparent}.nav_main .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.nav_main .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.nav_main_text{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.nav_main_text .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.nav_main_text .title-item--loading{color:var(--color-content-disable, rgb(89, 89, 89))}.nav_main_text .subtitle-item{color:var(--color-content-default, rgb(40, 40, 40))}.nav_main_text .subtitle-item--loading{color:var(--color-content-disable, rgb(89, 89, 89))}.nav_main_content{width:100%;-ms-flex-negative:99999;flex-shrink:99999}.nav_main_arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.nav_main_arrow--disable{color:var(--color-content-disable, rgb(89, 89, 89))}.nav_main_arrow_active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion{display:grid;grid-template-rows:0fr;-webkit-transition:all ease 0.5s;-moz-transition:all ease 0.5s;transition:all ease 0.5s}.accordion_open{grid-template-rows:1fr;padding:8px 0}.accordion .container{overflow:hidden;position:relative;padding-left:23px}.accordion .container:before{content:\"\";position:absolute;width:2px;inset:0;left:23px;top:8px;bottom:8px;border-radius:8px;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));opacity:0.8}.accordion .container--disable:before{background-color:transparent}.nav_tree_item{position:relative;display:-ms-flexbox;display:flex;gap:8px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;cursor:pointer;padding:8px;padding-left:22px}.nav_tree_item--loading{cursor:wait}.nav_tree_item--disable{opacity:0.5;cursor:not-allowed}.nav_tree_item--disable:before,.nav_tree_item--disable:hover{border-color:transparent;background-color:transparent}.nav_tree_item .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.nav_tree_item .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.nav_tree_item_content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.nav_tree_item_slot{width:100%;-ms-flex-negative:99999;flex-shrink:99999}.nav_tree_item:before{content:\"\";position:absolute;width:2px;inset:0;top:8px;bottom:8px;border-radius:8px;background-color:transparent;-webkit-transition:background-color ease 0.8s;-moz-transition:background-color ease 0.8s;transition:background-color ease 0.8s}.nav_tree_item:hover:before{background-color:var(--color-pressed, rgba(0, 0, 0, 0.16));-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item_active:before{background-color:var(--color-primary, rgb(30, 107, 241));-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item_active:hover:before{background-color:var(--color-primary, rgb(30, 107, 241));-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item .icon-arrow{position:relative;-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.nav_tree_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.nav_tree_item_button{padding:8px;margin-left:14px;border-radius:8px;border:1px solid transparent}.nav_tree_item_button:before{left:-15px}.nav_tree_item_button:after{content:\"\";position:absolute;inset:0;border-radius:8px;background-color:transparent}.nav_tree_item_button:hover,.nav_tree_item_button_active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_tree_item_button:hover:after,.nav_tree_item_button_active:after{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.nav_tree_item_button:active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_tree_item_button:active:after{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}.focus{position:relative}.focus:before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.focus:focus-visible{outline:none}.focus:focus-visible:before{border-color:var(--color-focus, rgb(194, 38, 251))}";

const NavTreeItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsToogleChange = index.createEvent(this, "bdsToogleChange");
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
                (this.element.parentElement.tagName == 'BDS-NAV-TREE-ITEM' && this.element.parentElement);
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
        return (index.h(index.Host, { key: 'eca656b5f119b1797de877cf1b9837ffa63cf875' }, index.h("div", { key: 'a6be21a84c529b28d53b3706e76d70b8f659f12c', tabindex: "0", onKeyDown: this.handleKeyDown.bind(this), class: "focus" }, index.h("div", { key: 'ac154eeaec35ec2b9354a144e806d2cda1e6737e', class: {
                nav_tree_item: true,
                nav_tree_item_active: this.isOpen,
                nav_tree_item_button: !this.navTreeChild,
                nav_tree_item_button_active: !this.navTreeChild && this.isOpen,
                [`nav_tree_item--loading`]: this.loading,
                [`nav_tree_item--disable`]: this.disable,
            }, onClick: () => this.handler(), "data-test": this.dataTest, "aria-label": this.text + (this.secondaryText && `: ${this.secondaryText}`) }, this.loading ? (index.h("bds-loading-spinner", { size: "extra-small" })) : this.icon ? (index.h("bds-icon", { class: {
                [`icon-item`]: true,
                [`icon-item-active`]: this.isOpen,
            }, size: "medium", name: this.icon, color: "inherit", theme: "outline" })) : (''), index.h("div", { key: '482633801011aed37cebb2ba4580f1ddb7bdc4fa', class: "nav_tree_item_content" }, this.text && (index.h("bds-typo", { key: '34185a9b84644c42726975869cbb82ac6b6af59a', class: { ['title-item']: true, [`title-item--loading`]: this.loading }, variant: "fs-14", tag: "span", "line-height": "small", bold: this.isOpen ? 'bold' : 'semi-bold' }, this.text)), this.secondaryText && (index.h("bds-typo", { key: '0caaf4f0c422bc65f13164143db7481b8f5a891e', class: { ['subtitle-item']: true, [`subtitle-item--loading`]: this.loading }, variant: "fs-12", "line-height": "small", tag: "span", margin: false }, this.secondaryText))), index.h("div", { key: '16a4176cd76c6242b1d6a5fa7f30b50be4e2ebdc', class: "nav_tree_item_slot" }, index.h("slot", { key: 'd8a402fe971c3afe6c78db8fecb0e1bfa5919179', name: "header-content" })), this.navTreeChild && (index.h("bds-icon", { key: '112a78ab82ad3fe277146ba288f2e497641a47be', class: {
                [`nav_main_arrow`]: true,
                [`nav_main_arrow_active`]: this.isOpen,
                [`nav_main_arrow--loading`]: this.loading,
            }, name: "arrow-down" })))), this.navTreeChild && (index.h("div", { key: '4ee3a3a5d2c8529a7b7dcef7b9b28c2bc82af5a1', class: {
                accordion: true,
                accordion_open: this.isOpen,
            } }, index.h("div", { key: 'ebab9fe7dadae0834d7e5e1646e3841560aae8d4', class: "container" }, index.h("slot", { key: 'd70ca611c5bdd1fc72d398dfb575a94ae1d4acf4' }))))));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "isOpen": ["isOpenChanged"]
    }; }
};
NavTreeItem.style = navTreeCss;

exports.bds_nav_tree_item = NavTreeItem;
//# sourceMappingURL=bds-nav-tree-item.entry.cjs.js.map

//# sourceMappingURL=bds-nav-tree-item.cjs.entry.js.map