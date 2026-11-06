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
        return (index.h(index.Host, { key: 'b7450c378389faf259bfddba42bafa79067d7733', hidden: true }, index.h("slot", { key: '36a42f203effe21edc38836cd0d8da976d4f5237' })));
    }
};
UaiSelectOption.style = uaiSelectOptionCss();

exports.uai_select_option = UaiSelectOption;
