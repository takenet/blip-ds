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
        return (h(Host, { key: '2c1bb0ab7e63160f39eac4241ee0c7494f9e7e2d', hidden: true }, h("slot", { key: '7caf67ba74ffdfb64d214436b18a0089a425de1d' })));
    }
};
UaiSelectOption.style = uaiSelectOptionCss();

export { UaiSelectOption as uai_select_option };
