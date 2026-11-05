import { h } from "@stencil/core";
export class BdsModalAction {
    render() {
        return (h("div", { key: 'c74f566ab0e56ac583cf95176b1d14f92bac8b8b', class: "modal__action" }, h("slot", { key: '43ed44db33f25c5b3e3615d1b616fe2027f65c41' })));
    }
    static get is() { return "bds-modal-action"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal-action.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal-action.css"]
        };
    }
}
