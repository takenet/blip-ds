import { h, Host } from "@stencil/core";
export class BdsToastContainer {
    render() {
        return (h(Host, { key: '6ec29780dfa7f46ac107201814bf136ae1b3f616' }, h("slot", { key: '216dbb440e8e77fcc68037a0476d4c855834c076' })));
    }
    static get is() { return "bds-toast-container"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["toast-container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["toast-container.css"]
        };
    }
}
