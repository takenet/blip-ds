import { r as registerInstance, c as createEvent, h, a as getElement } from './index-UYZ9xe6Z.js';

const accordionCss = ".accordion_header{display:-ms-flexbox;display:flex;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, rgb(40, 40, 40));cursor:pointer}.accordion_header::before{content:\"\";position:absolute;inset:0;z-index:0}.accordion_header slot{display:-ms-flexbox;display:flex;width:100%;-ms-flex-negative:99999;flex-shrink:99999}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.accordion_header .accButton:hover{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_header .accButton:active{background-color:var(--color-surface-1, rgb(246, 246, 246))}.accordion_body{height:0;overflow:hidden;border-bottom:none;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.accordion_body::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.accordion_body::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body_isOpen{overflow:overlay}.accordion_body_divisor{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, rgb(40, 40, 40))}";

const Accordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsToggle = createEvent(this, "bdsToggle");
        this.bdsAccordionOpen = createEvent(this, "bdsAccordionOpen");
        this.bdsAccordionClose = createEvent(this, "bdsAccordionClose");
        this.accGroup = null;
        this.accheaders = null;
        this.accBodies = null;
        this.isOpen = false;
        this.numberElement = null;
        this.condition = false;
        this.startOpen = false;
        this.divisor = true;
    }
    async toggle() {
        this.isOpen = !this.isOpen;
        this.bdsToggle.emit({ value: this.isOpen });
    }
    async open() {
        this.accheaders?.open();
        this.accBodies?.open();
        this.isOpen = true;
    }
    async close() {
        this.accheaders?.close();
        this.accBodies?.close();
        this.isOpen = false;
    }
    async notStart() {
        this.startOpen = false;
    }
    async reciveNumber(number) {
        this.numberElement = number;
    }
    isOpenChanged(value) {
        if (value) {
            if (this.accGroup.collapse == 'single' && this.condition === false) {
                this.accGroup?.closeAll(this.numberElement);
            }
            this.accheaders?.open();
            this.accBodies?.open();
            this.bdsAccordionOpen.emit();
        }
        else {
            this.accheaders?.close();
            this.accBodies?.close();
            this.bdsAccordionClose.emit();
        }
        this.condition = false;
    }
    divisorChanged(newValue) {
        const accordionBody = this.element.querySelector('bds-accordion-body');
        if (accordionBody) {
            accordionBody.divisor(newValue);
        }
    }
    componentWillLoad() {
        this.accGroup =
            this.element.parentElement.tagName == 'BDS-ACCORDION-GROUP' &&
                this.element.parentElement;
        this.accheaders = this.element.children[0];
        this.accBodies = this.element.children[1];
        // Passar a prop divisor para o AccordionBody
        const accordionBody = this.element.querySelector('bds-accordion-body');
        if (accordionBody) {
            accordionBody.divisor(this.divisor);
        }
        if (this.startOpen === true) {
            this.condition = true;
            this.isOpen = true;
        }
    }
    render() {
        return (h("div", { key: '6eccc3d0a35c8460a98dc2ad4dbbece19e8260b0', class: "accordion_group" }, h("slot", { key: '48b84b3db8e76028dc5a98161bef920c5ec12650' })));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "isOpen": ["isOpenChanged"],
        "divisor": ["divisorChanged"]
    }; }
};
Accordion.style = accordionCss;

export { Accordion as bds_accordion };
//# sourceMappingURL=bds-accordion.entry.js.map

//# sourceMappingURL=bds-accordion.entry.js.map