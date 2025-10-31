import { r as registerInstance, h } from './index-C3J6Z5OX.js';

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
        return (h("bds-grid", { key: '35e82fd0bef4b8b877ba5872e4e67fe488f361ea', xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, h("slot", { key: '23dccd08124c47a7dc509aaf5c6259fd2addac48' })));
    }
};
CardHeader.style = cardHeaderCss;

export { CardHeader as bds_card_header };
//# sourceMappingURL=bds-card-header.entry.js.map

//# sourceMappingURL=bds-card-header.entry.js.map