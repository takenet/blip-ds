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
        return (h(Host, { key: '2565f1779dcac69a4eaf9d152cb061752cd13e43', hidden: true }, h("slot", { key: 'b6059867c1451b6cc8e911136222464af07d44f5' })));
    }
};
UaiSelectOption.style = uaiSelectOptionCss();

export { UaiSelectOption as uai_select_option };
