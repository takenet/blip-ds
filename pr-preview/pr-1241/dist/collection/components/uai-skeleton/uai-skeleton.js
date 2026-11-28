import { Host, h } from "@stencil/core";
// API default inherited from bds-skeleton (50 pixels). It is the consumer-facing default of a free CSS
// length, not a design value: there is no UAI token for it and consumers set height for the content.
const BDS_DEFAULT_HEIGHT = 50;
/**
 * Placeholder shape shown while content loads. Use one per element that is still loading, sized like the
 * final content; pair with a container that has role="status" and aria-busy="true"; avoid it for loading
 * that has no layout to anticipate (use a spinner) and avoid nesting interactive content inside it.
 *
 * The host is aria-hidden: the skeleton is decorative and the loading state is announced by its container.
 *
 * @part skeleton - The placeholder surface.
 * @part shine - The moving shine band. Hidden with prefers-reduced-motion: reduce.
 */
export class UaiSkeleton {
    constructor() {
        /** Corner shape: square (radius/md) or circle (radius/full). Use circle for avatars; pair with equal width and height; avoid other values, which render as square. */
        this.shape = 'square';
        /** Height as any CSS length, applied inline. Defaults to the bds-skeleton height. Use the height of the content being loaded; pair with width; avoid lengths below the minimum size. */
        this.height = `${BDS_DEFAULT_HEIGHT}px`;
        /** Width as any CSS length, applied inline. Use 100% for text lines and fixed sizes for media; pair with height; avoid widths below the minimum size. */
        this.width = '100%';
        /** Test selector on the placeholder surface. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
    }
    render() {
        const shape = this.shape === 'circle' ? 'circle' : 'square';
        return (h(Host, { key: 'b9afc7018560353f21bac587d7d9c5e927863bf5', "aria-hidden": "true", class: { [`uai-skeleton--${shape}`]: true }, style: { width: this.width, height: this.height } }, h("div", { key: '125c72a5e2bdd3ed0dc7364cec33605e5003cdbd', class: "skeleton", part: "skeleton", "data-test": this.dataTest }, h("div", { key: 'e91c9218026cd92eae6991a37dd2f20b5047bfd4', class: "skeleton__shine", part: "shine" }))));
    }
    static get is() { return "uai-skeleton"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-skeleton.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-skeleton.css"]
        };
    }
    static get properties() {
        return {
            "shape": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiSkeletonShape",
                    "resolved": "\"circle\" | \"square\"",
                    "references": {
                        "UaiSkeletonShape": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-skeleton/uai-skeleton.tsx",
                            "id": "src/components/uai-skeleton/uai-skeleton.tsx::UaiSkeletonShape"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Corner shape: square (radius/md) or circle (radius/full). Use circle for avatars; pair with equal width and height; avoid other values, which render as square."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "shape",
                "defaultValue": "'square'"
            },
            "height": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Height as any CSS length, applied inline. Defaults to the bds-skeleton height. Use the height of the content being loaded; pair with width; avoid lengths below the minimum size."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height",
                "defaultValue": "`${BDS_DEFAULT_HEIGHT}px`"
            },
            "width": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Width as any CSS length, applied inline. Use 100% for text lines and fixed sizes for media; pair with height; avoid widths below the minimum size."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "'100%'"
            },
            "dataTest": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Test selector on the placeholder surface. Use for automation; pair with semantic queries. Avoid styling by it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
}
