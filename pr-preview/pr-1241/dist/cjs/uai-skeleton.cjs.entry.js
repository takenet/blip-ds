'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiSkeletonCss = () => `:host{display:-ms-flexbox;display:flex;position:relative;overflow:hidden;min-width:var(--uai-sizing-2xs, 0.5rem);min-height:var(--uai-sizing-2xs, 0.5rem);border-radius:var(--uai-radius-md, 0.5rem)}:host(.uai-skeleton--circle){border-radius:var(--uai-radius-full, 624.9375rem)}.skeleton{position:relative;width:100%;height:100%;overflow:hidden;border-radius:inherit;background-color:var(--uai-surface-contrast, #e4e6e7)}.skeleton__shine{--skeleton-shine-duration:calc(var(--uai-duration-loop, 800ms) * 3.125);--skeleton-shine-easing:ease-out;position:absolute;inset:0;background:-webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))), to(transparent));background:linear-gradient(90deg, transparent 0%, var(--uai-overlay-hover, rgba(0, 0, 0, 0.08)) 50%, transparent 100%);-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-animation:uai-skeleton-shine var(--skeleton-shine-duration) var(--skeleton-shine-easing) infinite;animation:uai-skeleton-shine var(--skeleton-shine-duration) var(--skeleton-shine-easing) infinite}@media (prefers-reduced-motion: reduce){.skeleton__shine{display:none;-webkit-animation:none;animation:none}}@-webkit-keyframes uai-skeleton-shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes uai-skeleton-shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@media (forced-colors: active){.skeleton{border:var(--uai-border-width-default, 1px) solid CanvasText}}`;

// API default inherited from bds-skeleton (50 pixels). It is the consumer-facing default of a free CSS
// length, not a design value: there is no UAI token for it and consumers set height for the content.
const BDS_DEFAULT_HEIGHT = 50;
const UaiSkeleton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'b9afc7018560353f21bac587d7d9c5e927863bf5', "aria-hidden": "true", class: { [`uai-skeleton--${shape}`]: true }, style: { width: this.width, height: this.height } }, index.h("div", { key: '125c72a5e2bdd3ed0dc7364cec33605e5003cdbd', class: "skeleton", part: "skeleton", "data-test": this.dataTest }, index.h("div", { key: 'e91c9218026cd92eae6991a37dd2f20b5047bfd4', class: "skeleton__shine", part: "shine" }))));
    }
};
UaiSkeleton.style = uaiSkeletonCss();

exports.uai_skeleton = UaiSkeleton;
