import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';

const navTreeCss = ":host{display:block;margin:-4px;padding:4px;width:100%;position:relative;overflow:hidden;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.nav_main{display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center;padding:8px;position:relative;cursor:pointer;border-radius:8px;border:1px solid transparent;overflow:hidden}.nav_main--loading{cursor:wait}.nav_main--disable{opacity:0.5;cursor:not-allowed}.nav_main:before{content:\"\";position:absolute;inset:0}.nav_main:hover:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.nav_main:active:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}.nav_main:hover,.nav_main_active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_main_active:before{background-color:var(--color-content-default, rgb(40, 40, 40));border-color:var(--color-hover, rgba(0, 0, 0, 0.08));opacity:0.08}.nav_main--disable:before,.nav_main--disable:hover{border-color:transparent;background-color:transparent}.nav_main .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.nav_main .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.nav_main_text{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.nav_main_text .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.nav_main_text .title-item--loading{color:var(--color-content-disable, rgb(89, 89, 89))}.nav_main_text .subtitle-item{color:var(--color-content-default, rgb(40, 40, 40))}.nav_main_text .subtitle-item--loading{color:var(--color-content-disable, rgb(89, 89, 89))}.nav_main_content{width:100%;-ms-flex-negative:99999;flex-shrink:99999}.nav_main_arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.nav_main_arrow--disable{color:var(--color-content-disable, rgb(89, 89, 89))}.nav_main_arrow_active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion{display:grid;grid-template-rows:0fr;-webkit-transition:all ease 0.5s;-moz-transition:all ease 0.5s;transition:all ease 0.5s}.accordion_open{grid-template-rows:1fr;padding:8px 0}.accordion .container{overflow:hidden;position:relative;padding-left:23px}.accordion .container:before{content:\"\";position:absolute;width:2px;inset:0;left:23px;top:8px;bottom:8px;border-radius:8px;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));opacity:0.8}.accordion .container--disable:before{background-color:transparent}.nav_tree_item{position:relative;display:-ms-flexbox;display:flex;gap:8px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;cursor:pointer;padding:8px;padding-left:22px}.nav_tree_item--loading{cursor:wait}.nav_tree_item--disable{opacity:0.5;cursor:not-allowed}.nav_tree_item--disable:before,.nav_tree_item--disable:hover{border-color:transparent;background-color:transparent}.nav_tree_item .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.nav_tree_item .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.nav_tree_item_content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.nav_tree_item_slot{width:100%;-ms-flex-negative:99999;flex-shrink:99999}.nav_tree_item:before{content:\"\";position:absolute;width:2px;inset:0;top:8px;bottom:8px;border-radius:8px;background-color:transparent;-webkit-transition:background-color ease 0.8s;-moz-transition:background-color ease 0.8s;transition:background-color ease 0.8s}.nav_tree_item:hover:before{background-color:var(--color-pressed, rgba(0, 0, 0, 0.16));-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item_active:before{background-color:var(--color-primary, rgb(30, 107, 241));-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item_active:hover:before{background-color:var(--color-primary, rgb(30, 107, 241));-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item .icon-arrow{position:relative;-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.nav_tree_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.nav_tree_item_button{padding:8px;margin-left:14px;border-radius:8px;border:1px solid transparent}.nav_tree_item_button:before{left:-15px}.nav_tree_item_button:after{content:\"\";position:absolute;inset:0;border-radius:8px;background-color:transparent}.nav_tree_item_button:hover,.nav_tree_item_button_active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_tree_item_button:hover:after,.nav_tree_item_button_active:after{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.nav_tree_item_button:active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_tree_item_button:active:after{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}.focus{position:relative}.focus:before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.focus:focus-visible{outline:none}.focus:focus-visible:before{border-color:var(--color-focus, rgb(194, 38, 251))}";

const NavTreeGroup = /*@__PURE__*/ proxyCustomElement(class NavTreeGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsNavTreeGroupCloseAll = createEvent(this, "bdsNavTreeGroupCloseAll");
        this.bdsNavTreeGroupOpenAll = createEvent(this, "bdsNavTreeGroupOpenAll");
        this.itemsElement = null;
        this.isOpenAftAnimation = false;
        this.navTreeChild = null;
        /**
         * Collapse. Used to set mode of iteraction of componente when navigate with menu. You can choose a option single or multiple.
         */
        this.collapse = 'single';
    }
    componentWillRender() {
        this.itemsElement = this.element.getElementsByTagName('bds-nav-tree');
        for (let i = 0; i < this.itemsElement.length; i++) {
            this.itemsElement[i].reciveNumber(i);
        }
    }
    async closeAll(actNumber) {
        this.bdsNavTreeGroupCloseAll.emit();
        for (let i = 0; i < this.itemsElement.length; i++) {
            if (this.collapse != 'multiple') {
                if (actNumber != i)
                    this.itemsElement[i].close();
            }
            else {
                this.itemsElement[i].close();
            }
        }
    }
    async openAll(actNumber) {
        this.bdsNavTreeGroupOpenAll.emit();
        for (let i = 0; i < this.itemsElement.length; i++) {
            if (this.collapse != 'multiple') {
                if (actNumber != i)
                    this.itemsElement[i].open();
            }
            else {
                this.itemsElement[i].open();
            }
        }
    }
    render() {
        return (h(Host, { key: '2000d6225b5813ac275a1d8b77f1700f91f9336a' }, h("slot", { key: '79df764f1c04a93392a8d04155bb636f06275728' })));
    }
    get element() { return this; }
    static get style() { return navTreeCss; }
}, [1, "bds-nav-tree-group", {
        "collapse": [1],
        "isOpenAftAnimation": [32],
        "navTreeChild": [32],
        "closeAll": [64],
        "openAll": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-nav-tree-group"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-nav-tree-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, NavTreeGroup);
            }
            break;
    } });
}

const BdsNavTreeGroup = NavTreeGroup;
const defineCustomElement = defineCustomElement$1;

export { BdsNavTreeGroup, defineCustomElement };
//# sourceMappingURL=bds-nav-tree-group.js.map

//# sourceMappingURL=bds-nav-tree-group.js.map