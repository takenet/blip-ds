import { r as registerInstance, c as createEvent, h, H as Host } from './index-C3J6Z5OX.js';

const tabCss = ".bds-tab{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:content-box;box-sizing:content-box;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;max-width:270px;height:46px;max-height:48px;cursor:pointer;text-align:center;color:var(--color-content-disable, rgb(89, 89, 89));border-bottom:2px solid transparent}.bds-tab:not(:last-child){margin-right:32px}.bds-tab:hover{color:var(--color-content-default, rgb(40, 40, 40))}.bds-tab--selected{-webkit-animation-name:selectFade;animation-name:selectFade;-webkit-animation-duration:0.75s;animation-duration:0.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.bds-tab__text{min-width:90px;max-width:270px}@-webkit-keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, rgb(40, 40, 40))}to{border-bottom:2px solid var(--color-brand, rgb(0, 150, 250));color:var(--color-content-default, rgb(40, 40, 40))}}@keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, rgb(40, 40, 40))}to{border-bottom:2px solid var(--color-brand, rgb(0, 150, 250));color:var(--color-content-default, rgb(40, 40, 40))}}@media (max-width: 599px){.bds-tab{min-width:110px;text-overflow:ellipsis}}";

const Tab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsTabChange = createEvent(this, "bdsTabChange");
        /**
         * Prop to control externally if a tab will be active by default
         */
        this.active = false;
        /**
         * State to control if a tab is current active
         */
        this.isActive = false;
    }
    handleTabChange(event) {
        this.isActive = event.detail == this.group;
    }
    async onClick() {
        this.bdsTabChange.emit(this.group);
    }
    render() {
        const bold = this.isActive ? 'bold' : 'regular';
        return (h(Host, { key: '1f58d3bcb7cd130c7370a1cc3596ca9792aa87b8', class: {
                'bds-tab': true,
                ['bds-tab--selected']: this.isActive,
            }, onClick: this.onClick.bind(this) }, h("div", { key: '64c19d69c0d300540de3225c5cd99a9301a5e22f', class: "bds-tab__text" }, h("bds-typo", { key: '251fc8b4498663e2e221d304f22870ff824ff869', variant: "fs-16", bold: bold }, this.label))));
    }
};
Tab.style = tabCss;

export { Tab as bds_tab };
//# sourceMappingURL=bds-tab.entry.js.map

//# sourceMappingURL=bds-tab.entry.js.map