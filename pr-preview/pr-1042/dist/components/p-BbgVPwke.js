import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './index.js';
import { g as getScrollParent, p as positionAbsoluteElement } from './p-BNEKIkjk.js';

const dropdownCss = ":host{position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host(.is_child_drop){display:block;width:100%}.dropdown{position:absolute;pointer-events:none;padding:2px;background-color:var(--color-surface-0, rgb(255, 255, 255));border-radius:8px;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));min-width:240px;width:-webkit-max-content;width:-moz-max-content;width:max-content;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s;z-index:90000}.dropdown__open{pointer-events:auto;opacity:1}.dropdown__basic__top-center{bottom:calc(100% + 16px);left:calc(50% - 122px)}.dropdown__basic__top-left{bottom:calc(100% + 16px);left:0}.dropdown__basic__top-right{bottom:calc(100% + 16px);right:0}.dropdown__basic__bottom-center{top:calc(100% + 16px);left:calc(50% - 122px)}.dropdown__basic__bottom-right{top:calc(100% + 16px);right:0}.dropdown__basic__bottom-left{top:calc(100% + 16px);left:0}.dropdown__basic__right-center{right:calc(100% + 8px)}.dropdown__basic__right-top{right:calc(100% + 8px);top:0}.dropdown__basic__right-bottom{right:calc(100% + 8px);bottom:0}.dropdown__basic__left-center{left:calc(100% + 8px)}.dropdown__basic__left-top{left:calc(100% + 8px);top:0}.dropdown__basic__left-bottom{left:calc(100% + 8px);bottom:0}.dropdown:after{content:\"\";position:absolute;inset:0;border-radius:8px;-webkit-box-shadow:var(--color-surface-0, rgb(255, 255, 255)) 0px 0px 0px 2px inset;box-shadow:var(--color-surface-0, rgb(255, 255, 255)) 0px 0px 0px 2px inset;pointer-events:none}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}";

const BdsDropdown = /*@__PURE__*/ proxyCustomElement(class BdsDropdown extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsToggle = createEvent(this, "bdsToggle");
        this.intoView = null;
        this.stateOpenSubMenu = false;
        this.stateSubMenu = 'close';
        this.zIndex = 0;
        this.delay = null;
        /**
         * Open. Used to open/close the dropdown.
         */
        this.activeMode = 'click';
        /**
         * Open. Used to open/close the dropdown.
         */
        this.open = false;
        /**
         * Used to set drop position
         */
        this.position = 'auto';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.onCloseSubMenu = () => {
            this.stateSubMenu = 'close';
        };
        this.refDropElement = (el) => {
            this.dropElement = el;
        };
        this.onClickCloseButtom = () => {
            this.open = false;
        };
        this.onMouseOver = () => {
            if (this.activeMode === 'hover') {
                this.zIndex = 1;
            }
            this.stateOpenSubMenu = true;
        };
        this.onMouseOut = () => {
            if (this.activeMode === 'hover') {
                this.zIndex = 0;
                this.stateOpenSubMenu = false;
            }
        };
        this.handleClickOutside = (event) => {
            if (this.open && !this.hostElement.contains(event.target)) {
                this.setClose();
            }
        };
        this.centerDropElement = (value) => {
            const arrayPosition = value.split('-');
            if ((arrayPosition[0] == 'left' || arrayPosition[0] == 'right') && arrayPosition[1] == 'center') {
                this.dropElement.style.top = `calc(50% - ${this.dropElement.offsetHeight / 2}px)`;
            }
        };
    }
    componentWillLoad() {
        this.activatorElement = this.hostElement.querySelector('[slot="dropdown-activator"]').children[0];
        this.intoView = getScrollParent(this.hostElement);
        if (this.activeMode == 'hover') {
            this.activatorElement.addEventListener('mouseover', () => this.onMouseOver());
            this.activatorElement.addEventListener('click', () => this.onMouseOver());
            this.activatorElement.addEventListener('mouseout', () => this.onMouseOut());
        }
        else {
            this.activatorElement.addEventListener('click', () => this.toggle());
        }
    }
    componentDidLoad() {
        if (this.position != 'auto') {
            this.centerDropElement(this.position);
            this.setDefaultPlacement(this.position);
        }
        else {
            this.validatePositionDrop();
        }
        document.addEventListener('click', this.handleClickOutside);
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.handleClickOutside);
    }
    setDefaultPlacement(value) {
        this.dropElement.classList.add(`dropdown__basic__${value}`);
    }
    validatePositionDrop() {
        const positionValue = positionAbsoluteElement({
            actionElement: this.hostElement,
            changedElement: this.dropElement,
            intoView: this.intoView,
        });
        this.dropElement.classList.add(`dropdown__basic__${positionValue.y}-${positionValue.x}`);
    }
    isOpenChanged(open) {
        this.bdsToggle.emit({ value: open });
        if (open)
            if (this.position != 'auto') {
                this.setDefaultPlacement(this.position);
            }
            else {
                this.validatePositionDrop();
            }
    }
    isPositionChanged() {
        this.setDefaultPlacement(this.position);
    }
    async toggle() {
        this.open = !this.open;
    }
    async setOpen() {
        this.open = true;
    }
    async setClose() {
        this.stateOpenSubMenu = false;
        clearTimeout(this.delay);
        this.open = false;
    }
    openSubMenuChanged(active) {
        if (active == false) {
            this.stateSubMenu = 'pending';
            this.delay = setTimeout(this.onCloseSubMenu, 1000);
        }
        if (active == true) {
            clearTimeout(this.delay);
            this.delay = null;
            this.stateSubMenu = 'open';
        }
        return;
    }
    stateSubMenuChanged(state) {
        switch (state) {
            case 'open':
                this.open = true;
                break;
            case 'pending':
                this.open = true;
                break;
            case 'close':
                this.open = false;
                break;
        }
    }
    render() {
        const zIndexSubmenu = {
            zIndex: `${this.zIndex}`,
        };
        return (h(Host, { key: '939a25fc739bb7820e92fd85b8875ecd19482e9a' }, h("slot", { key: '8ca0ab91226ca341c5d73a44d402dcc601ce9085', name: "dropdown-activator" }), h("div", { key: '1b0ec61d5bdba6ebbfc4b52d6135f370e643a0cd', ref: (el) => this.refDropElement(el), class: {
                dropdown: true,
                dropdown__open: this.open,
            }, "data-test": this.dataTest, onMouseOver: () => this.onMouseOver(), onMouseOut: () => this.onMouseOut() }, h("div", { key: 'a9bfdcc1db256676b7ae4c39d0aca6abe2209c92', class: "content", style: zIndexSubmenu }, h("slot", { key: 'a10054f1c922dc1f10ae9e668443942fb02d77a8', name: "dropdown-content" }))), this.activeMode !== 'hover' && this.open && (h("div", { key: 'd7a20da55b47fd6c3714a7908f1cd931755fd49a', class: { outzone: true }, onClick: () => this.onClickCloseButtom() }))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "open": ["isOpenChanged"],
        "position": ["isPositionChanged"],
        "stateOpenSubMenu": ["openSubMenuChanged"],
        "stateSubMenu": ["stateSubMenuChanged"]
    }; }
    static get style() { return dropdownCss; }
}, [1, "bds-dropdown", {
        "activeMode": [1, "active-mode"],
        "open": [1540],
        "position": [1],
        "dataTest": [1, "data-test"],
        "intoView": [32],
        "stateOpenSubMenu": [32],
        "stateSubMenu": [32],
        "zIndex": [32],
        "delay": [32],
        "toggle": [64],
        "setOpen": [64],
        "setClose": [64]
    }, undefined, {
        "open": ["isOpenChanged"],
        "position": ["isPositionChanged"],
        "stateOpenSubMenu": ["openSubMenuChanged"],
        "stateSubMenu": ["stateSubMenuChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-dropdown"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-dropdown":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsDropdown);
            }
            break;
    } });
}

export { BdsDropdown as B, defineCustomElement as d };
//# sourceMappingURL=p-BbgVPwke.js.map

//# sourceMappingURL=p-BbgVPwke.js.map