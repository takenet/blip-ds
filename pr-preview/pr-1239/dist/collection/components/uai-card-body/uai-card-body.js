import { Host, h } from "@stencil/core";
/**
 * Body container for `UaiCard` when migrating from `bds-card-body`.
 * Use inside `uai-card` (or place content directly in `uai-card`'s default slot);
 * pair with `UaiCardHeader` and `UaiCardFooter`; avoid extra manual padding that duplicates the card body spacing.
 *
 * @slot - Main body elements of the card.
 */
export class UaiCardBody {
    render() {
        return (h(Host, { key: '8dd2beb89585769424945d7ba32666adf349b65c' }, h("uai-grid", { key: 'f76097852f89fd4e8d05fa46f72cd1a4e2bcf286', xxs: "12", direction: "column", gap: "1" }, h("slot", { key: '96d1b1b34d06390ab80d85a4376c7b92bb6f2972' }))));
    }
    static get is() { return "uai-card-body"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-card-body.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-card-body.css"]
        };
    }
}
