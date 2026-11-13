'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiSelectOptionCss = () => `:host{display:none}`;

const UaiSelectOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Prevents choosing the option. Use for unavailable choices; pair with explanatory text elsewhere; avoid hiding options by disabling them all. */
        this.disabled = false;
        /** Optional UAI icon name shown before the label. Use to reinforce the label; pair with the label text; avoid icons without meaning. */
        this.icon = null;
    }
    render() {
        return (index.h(index.Host, { key: '2565f1779dcac69a4eaf9d152cb061752cd13e43', hidden: true }, index.h("slot", { key: 'b6059867c1451b6cc8e911136222464af07d44f5' })));
    }
};
UaiSelectOption.style = uaiSelectOptionCss();

exports.uai_select_option = UaiSelectOption;
