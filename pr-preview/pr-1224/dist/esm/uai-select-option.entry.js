import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const uaiSelectOptionCss = () => `:host{display:none}`;

const UaiSelectOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Prevents choosing the option. Use for unavailable choices; pair with explanatory text elsewhere; avoid hiding options by disabling them all. */
        this.disabled = false;
        /** Optional UAI icon name shown before the label. Use to reinforce the label; pair with the label text; avoid icons without meaning. */
        this.icon = null;
    }
    render() {
        return (h(Host, { key: '3b248979da665d981ae5d69164b67a081980594e', hidden: true }, h("slot", { key: '2170fe2fde64813e03c70219602a528cef0187b3' })));
    }
};
UaiSelectOption.style = uaiSelectOptionCss();

export { UaiSelectOption as uai_select_option };
