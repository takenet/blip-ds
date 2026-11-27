import { r as registerInstance, h, H as Host } from './index-DUwG7Zwx.js';

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
        return (h(Host, { key: '71464ee6b981bf37d8b792430968287da4f20e2d', hidden: true }, h("slot", { key: '59e1e5541f362aac5b6afbd323bbd0f093e403ef' })));
    }
};
UaiSelectOption.style = uaiSelectOptionCss();

export { UaiSelectOption as uai_select_option };
