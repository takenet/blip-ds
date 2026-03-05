import { r as registerInstance, c as createEvent, h, H as Host } from './index-gowA9FoV.js';
import { g as getScrollParent, d as positionElement } from './position-element-BNEKIkjk.js';

const menuCss = ".menu{position:fixed;pointer-events:none;top:0;left:0;padding:2px;background-color:var(--color-surface-1, rgb(246, 246, 246));border-radius:8px;-webkit-box-shadow:0px 8px 12px rgba(0, 0, 0, 0.08);box-shadow:0px 8px 12px rgba(0, 0, 0, 0.08);width:240px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s;z-index:90000}.menu__open{pointer-events:auto;opacity:1}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}";

const BdsMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsToggle = createEvent(this, "bdsToggle");
        this.refElement = null;
        this.intoView = null;
        this.menupositionTop = 0;
        this.menupositionLeft = 0;
        /**
         * Menu. Used to link the minus with the action button.
         */
        this.menu = null;
        /**
         * Position. Used to position the Menu. Either on the left or on the bottom.
         */
        this.position = 'right';
        /**
         * Open. Used to open/close the menu.
         */
        this.open = false;
        this.refMenuElement = (el) => {
            this.menuElement = el;
        };
        this.onClickCloseButtom = (event) => {
            this.open = false;
            event.stopPropagation();
        };
    }
    componentWillLoad() {
        this.refElement = document.getElementById(this.menu);
        this.intoView = getScrollParent(this.refElement);
    }
    async toggle() {
        this.open = !this.open;
    }
    openMenu() {
        this.bdsToggle.emit({ value: this.open });
        if (this.open) {
            const positionValue = positionElement({
                actionElement: this.refElement,
                changedElement: this.menuElement,
                intoView: this.intoView,
            });
            this.menupositionTop = positionValue.top;
            this.menupositionLeft = positionValue.left;
        }
    }
    render() {
        const menuPosition = {
            top: `${this.menupositionTop}px`,
            left: `${this.menupositionLeft}px`,
        };
        return (h(Host, { key: '4f7c34c68dd427bfd59e014c4f4ff610e98e359c' }, h("div", { key: 'dd7e5c5f09a0df133458f2c76984bcf5e8d1c08c', ref: this.refMenuElement, class: {
                menu: true,
                [`menu__${this.position}`]: true,
                [`menu__open`]: this.open,
            }, style: menuPosition, part: "bds-menu__container" }, h("slot", { key: '9d4b91e84f9ce6c4b298cd0bc91059ae91b66613' })), this.open && h("div", { key: '63117e957ae3da41519ee5ea67b1cfbe888129ea', class: { outzone: true }, onClick: (ev) => this.onClickCloseButtom(ev) })));
    }
    static get watchers() { return {
        "open": ["openMenu"]
    }; }
};
BdsMenu.style = menuCss;

export { BdsMenu as bds_menu };
//# sourceMappingURL=bds-menu.entry.js.map

//# sourceMappingURL=bds-menu.entry.js.map