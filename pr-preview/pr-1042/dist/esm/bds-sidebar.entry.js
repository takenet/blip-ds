import { r as registerInstance, c as createEvent, h, a as getElement } from './index-C3J6Z5OX.js';

const sidebarCss = ".sidebar_dialog{width:100%;height:100vh;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));background-color:rgba(0, 0, 0, 0.7);opacity:0;visibility:hidden;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;display:none}.sidebar_dialog.type_over{position:fixed;top:0;left:0;z-index:80000}.sidebar_dialog.type_over .sidebar{z-index:90000}.sidebar_dialog.type_fixed{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;height:100%;-webkit-box-shadow:none;box-shadow:none}.sidebar_dialog.is_open{display:-ms-flexbox;display:flex;opacity:1;visibility:visible}.sidebar_dialog .outzone{-ms-flex-order:2;order:2;width:100%;height:100vh}.sidebar_dialog .sidebar{width:360px;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--color-surface-2, rgb(237, 237, 237));-ms-flex-negative:0;flex-shrink:0}.sidebar_dialog .sidebar.position_left{-ms-flex-order:1;order:1}.sidebar_dialog .sidebar.position_right{-ms-flex-order:3;order:3}.sidebar_dialog .sidebar.background_surface-1{background-color:var(--color-surface-1, rgb(246, 246, 246))}.sidebar_dialog .sidebar.background_surface-2{background-color:var(--color-surface-2, rgb(237, 237, 237))}.sidebar_dialog .sidebar.background_surface-3{background-color:var(--color-surface-3, rgb(227, 227, 227))}.sidebar_dialog .sidebar.background_surface-4{background-color:var(--color-surface-4, rgb(20, 20, 20))}.sidebar_dialog .sidebar.type_fixed{width:288px}.sidebar_dialog .sidebar .header{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:justify;justify-content:space-between;padding:24px}.sidebar_dialog .sidebar .header .content{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.sidebar_dialog .sidebar .header .content ::slotted(*){width:100%}.sidebar_dialog .sidebar .header .closeButton{border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1;cursor:pointer;color:var(--color-content-default, rgb(40, 40, 40))}.sidebar_dialog .sidebar .body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.sidebar_dialog .sidebar .body .content{position:absolute;inset:0;z-index:999999;overflow-y:overlay;overflow-x:clip}.sidebar_dialog .sidebar .body .content::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.sidebar_dialog .sidebar .body .content::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.sidebar_dialog .sidebar .body .margin{padding:8px 24px}.sidebar_dialog .sidebar .footer .content{padding:24px}.sidebar_dialog .sidebar .footer .content ::slotted(*){height:40px;overflow:hidden}.sidebar_dialog .sidebar.is_open.position_left{right:calc(100% - 360px)}.sidebar_dialog .sidebar.is_open.position_right{left:calc(100% - 360px)}";

const Sidebar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsToggle = createEvent(this, "bdsToggle");
        this.InnerSpacing = 0;
        /**;
         * isOpen. Used to open sidebar.
         */
        this.isOpen = this.type === 'fixed' ? true : false;
        /**
         * sidebar position. Used to position the sidebar. Either on the left or on the right.
         */
        this.sidebarPosition = 'left';
        /**
         * sidebar type. Used to define how open.
         */
        this.type = 'over';
        /**
         * If true, a lateral margin will apear in the content.
         */
        this.margin = true;
        /**
         * Width, number to define sidebar width.
         */
        this.width = 360;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtOutzone is the data-test to button close.
         */
        this.dtOutzone = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        /**
         * Width, number to define sidebar width.
         */
        this.background = 'surface-2';
        this.listiner = (event) => {
            if (event.key == 'Escape' && this.type !== 'fixed') {
                this.isOpen = false;
            }
        };
        this.onClickCloseButtom = () => {
            this.isOpen = false;
        };
    }
    async toggle() {
        this.isOpen = !this.isOpen;
    }
    isOpenChanged(newValue) {
        this.bdsToggle.emit({ value: newValue });
        if (newValue === true) {
            document.addEventListener('keyup', this.listiner, false);
        }
        else {
            document.removeEventListener('keyup', this.listiner, false);
        }
    }
    componentWillLoad() {
        this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
        this.hasHeaderSlot = !!this.hostElement.querySelector('[slot="header"]');
    }
    render() {
        return (h("div", { key: 'e6deb15e0767aca5765da85253edb25275a3345c', class: {
                sidebar_dialog: true,
                is_open: this.isOpen,
                [`type_${this.type}`]: true,
            } }, this.type === 'over' ? (h("div", { class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone })) : (''), h("div", { key: '628e26bb30098a3cf687f449a9e7154d275c8aa6', class: {
                sidebar: true,
                is_open: this.isOpen,
                [`type_${this.type}`]: true,
                [`position_${this.sidebarPosition}`]: true,
                [`background_${this.background}`]: true,
            }, style: { width: `${this.width < 144 ? 144 : this.width}px` } }, this.hasHeaderSlot && (h("div", { key: '2e0940cfb93436bfa7ea68f26b2c3c4fc17d338a', class: { header: true } }, h("div", { key: '9441898c76d539b0dd037d7f0ddc09a9b97006c0', class: { content: true } }, h("slot", { key: '36e6cf1412a711238fb043eda74069a0df5e7ca6', name: "header" })), this.type === 'fixed' ? ('') : (h("bds-button-icon", { class: {
                closeButton: true,
            }, icon: "close", size: "short", variant: "secondary", onClick: () => this.onClickCloseButtom(), dataTest: this.dtButtonClose })))), h("div", { key: '7b6a4dcb5b5201333150c026424ac466b28b55ae', class: { body: true } }, h("div", { key: 'a0d820911e08ee57b6630883314126af7cfa686a', class: { content: true, element_scrolled: true, margin: this.margin } }, h("slot", { key: '2bf6b69461b9a15144eb3a71c8a0481a9bf7c0b8', name: "body" }))), this.hasFooterSlot && (h("div", { key: '44322eb7b9454fcc463361c186f54472e8b77963', class: { footer: true } }, h("div", { key: '9926981535f59752e9451a26fe30bc6ba8c9f67d', class: { content: true } }, h("slot", { key: '89db67b27e4a305793d3b5b05c0486715da82cfe', name: "footer" })))))));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "isOpen": ["isOpenChanged"]
    }; }
};
Sidebar.style = sidebarCss;

export { Sidebar as bds_sidebar };
//# sourceMappingURL=bds-sidebar.entry.js.map

//# sourceMappingURL=bds-sidebar.entry.js.map