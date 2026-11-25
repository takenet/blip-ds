import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

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
        return (h(Host, { key: '0a54c6bd7fe67da68e0d8ec9e956624de1bf26f3', hidden: true }, h("slot", { key: 'e86073e057171b4c5c90998069c9c484a2b6369c' })));
    }
};
UaiSelectOption.style = uaiSelectOptionCss();

export { UaiSelectOption as uai_select_option };
