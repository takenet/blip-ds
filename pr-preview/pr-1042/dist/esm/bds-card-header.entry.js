import { r as registerInstance, h } from './index-COEIU3SQ.js';

const cardHeaderCss = ":host{width:100%}";

const CardHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Prop for internal elements alignment. Will follow the same values of css.
         */
        this.align = 'space-between';
    }
    render() {
        return (h("bds-grid", { key: '50c941f132a8fc8cbd9c4b1706a0d0c2118e7e50', xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, h("slot", { key: 'd26ee87e1486b99797b8c5f9cee44661b7c046f5' })));
    }
};
CardHeader.style = cardHeaderCss;

export { CardHeader as bds_card_header };
//# sourceMappingURL=bds-card-header.entry.js.map

//# sourceMappingURL=bds-card-header.entry.js.map