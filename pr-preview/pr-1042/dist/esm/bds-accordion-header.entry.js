import { r as registerInstance, h, a as getElement } from './index-C3J6Z5OX.js';

const accordionCss = ".accordion_header{display:-ms-flexbox;display:flex;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, rgb(40, 40, 40));cursor:pointer}.accordion_header::before{content:\"\";position:absolute;inset:0;z-index:0}.accordion_header slot{display:-ms-flexbox;display:flex;width:100%;-ms-flex-negative:99999;flex-shrink:99999}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.accordion_header .accButton:hover{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_header .accButton:active{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_body{height:0;overflow:hidden;border-bottom:none;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.accordion_body::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.accordion_body::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body_isOpen{overflow:overlay}.accordion_body_divisor{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, rgb(40, 40, 40))}";

const AccordionHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.accordionElement = null;
        this.isOpen = false;
        this.btToggleIsfocus = false;
        this.numberElement = null;
        /**
         * Accordion Title. Used to add title in header accordion.
         */
        this.accordionTitle = null;
        /**
         * Icon. Used to add icon in header accordion.
         */
        this.icon = null;
        /**
         * Avatar Name. Used to add avatar in header accordion.
         */
        this.avatarName = null;
        /**
         * Avatar Thumb. Used to add avatar in header accordion.
         */
        this.avatarThumb = null;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.toggleHeader = () => {
            var _a, _b;
            if (this.isOpen) {
                (_a = this.accordionElement) === null || _a === void 0 ? void 0 : _a.close();
            }
            else {
                (_b = this.accordionElement) === null || _b === void 0 ? void 0 : _b.open();
            }
        };
    }
    async toggle() {
        this.isOpen = !this.isOpen;
    }
    async open() {
        this.isOpen = true;
    }
    async close() {
        this.isOpen = false;
    }
    componentWillRender() {
        this.accordionElement = this.element.parentElement;
    }
    handleKeyDown(event) {
        var _a, _b;
        if (event.key == 'Enter') {
            if (this.isOpen) {
                (_a = this.accordionElement) === null || _a === void 0 ? void 0 : _a.close();
            }
            else {
                (_b = this.accordionElement) === null || _b === void 0 ? void 0 : _b.open();
            }
        }
    }
    render() {
        return (h("div", { key: 'aa23339d986d7c2f05630ffc59ae2e4fd07704fd', onClick: this.toggleHeader, class: { accordion_header: true }, "data-test": this.dataTest }, this.avatarName || this.avatarThumb ? (h("bds-avatar", { name: this.avatarName, thumbnail: this.avatarThumb, size: "extra-small" })) : (this.icon && h("bds-icon", { size: "x-large", name: this.icon, color: "inherit" })), this.accordionTitle && (h("bds-typo", { key: '44b7f3065cd79a1f267e2957bad75a552cab81ba', bold: "bold", variant: "fs-16", "line-height": "double" }, this.accordionTitle)), h("slot", { key: '0802c33c0da12a80096ce5e15f41bffac90bbde3' }), h("bds-icon", { key: '86c9c143ec585c6e825a039470d7efd8c5b8f00e', class: {
                accButton: true,
                accButton__isopen: this.isOpen,
                accButton__isfocus: this.btToggleIsfocus,
            }, size: "x-large", name: "arrow-down", color: "inherit", tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) })));
    }
    get element() { return getElement(this); }
};
AccordionHeader.style = accordionCss;

export { AccordionHeader as bds_accordion_header };
//# sourceMappingURL=bds-accordion-header.entry.js.map

//# sourceMappingURL=bds-accordion-header.entry.js.map