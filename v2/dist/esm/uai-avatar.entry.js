import { r as registerInstance, h, H as Host } from './index-BnSR_zce.js';

const uaiAvatarCss = () => `:host{--avatar-size:var(--uai-sizing-3xl, 3rem);--avatar-font-size:var(--uai-heading-md-font-size, 1.25rem);--avatar-line-height:var(--uai-heading-md-line-height, 1.75rem);position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex:0 0 var(--avatar-size);flex:0 0 var(--avatar-size);-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--avatar-size);height:var(--avatar-size);overflow:hidden;border-radius:var(--uai-radius-full, 624.9375rem);-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--uai-surface-muted, #f2f3f3);color:var(--uai-content-secondary, #5f676d);font-family:var(--uai-font-family-sans, Figtree);font-size:var(--avatar-font-size);font-weight:var(--uai-font-weight-medium, 500);line-height:var(--avatar-line-height);vertical-align:middle}:host(.uai-avatar--size-micro){--avatar-size:var(--uai-sizing-lg, 1.5rem);--avatar-font-size:var(--uai-caption-font-size, 0.75rem);--avatar-line-height:var(--uai-caption-line-height, 1.25rem)}:host(.uai-avatar--size-extra-small){--avatar-size:var(--uai-sizing-xl, 2rem);--avatar-font-size:var(--uai-body-base-font-size, 0.875rem);--avatar-line-height:var(--uai-body-base-line-height, 1.375rem)}:host(.uai-avatar--size-small){--avatar-size:var(--uai-sizing-2xl, 2.5rem);--avatar-font-size:var(--uai-title-md-font-size, 1rem);--avatar-line-height:var(--uai-title-md-line-height, 1.5rem)}:host(.uai-avatar--size-standard){--avatar-size:var(--uai-sizing-3xl, 3rem)}:host(.uai-avatar--size-large){--avatar-size:var(--uai-sizing-4xl, 4rem);--avatar-font-size:var(--uai-heading-lg-font-size, 1.5rem);--avatar-line-height:var(--uai-heading-lg-line-height, 2rem)}:host(.uai-avatar--size-extra-large){--avatar-size:var(--uai-sizing-5xl, 4.5rem);--avatar-font-size:var(--uai-heading-xl-font-size, 2rem);--avatar-line-height:var(--uai-heading-xl-line-height, 2.5rem)}.avatar__image{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.avatar__initials{max-width:100%;overflow:hidden;padding:0 var(--uai-spacing-3xs, 0.125rem);text-overflow:clip;text-transform:uppercase;white-space:nowrap}.avatar__icon{color:currentColor}`;

const SIZES = ['micro', 'extra-small', 'small', 'standard', 'large', 'extra-large'];
const supportedSize = (value) => {
    if (SIZES.includes(value))
        return value;
    return 'standard';
};
const UaiAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.imageFailed = false;
        /**
         * Avatar diameter: micro (`sizing/lg`), extra-small (`sizing/xl`), small (`sizing/2xl`), standard (`sizing/3xl`), large (`sizing/4xl`), or extra-large (`sizing/5xl`).
         */
        this.size = 'standard';
    }
    resetImageError() {
        this.imageFailed = false;
    }
    render() {
        var _a, _b;
        const size = supportedSize(this.size);
        const hasImage = !!this.src && !this.imageFailed;
        const initials = (_a = this.initials) === null || _a === void 0 ? void 0 : _a.trim();
        const label = (_b = this.label) === null || _b === void 0 ? void 0 : _b.trim();
        const iconSize = size === 'micro' ? 'x-small' : size === 'extra-small' ? 'small' : 'medium';
        return (h(Host, { key: 'e429b942626271afb7b1896d27b8a7a7873d993f', class: { [`uai-avatar--size-${size}`]: true }, role: label ? 'img' : undefined, "aria-label": label || undefined, "aria-hidden": label ? undefined : 'true', "data-test": this.dataTest }, hasImage ? (h("img", { class: "avatar__image", src: this.src, alt: "", "aria-hidden": "true", onError: () => (this.imageFailed = true) })) : initials ? (h("span", { class: "avatar__initials", "aria-hidden": "true" }, initials)) : (h("uai-icon", { class: "avatar__icon", name: "avatar-user", theme: "outline", size: iconSize, "aria-hidden": "true" }))));
    }
    static get watchers() { return {
        "src": [{
                "resetImageError": 0
            }]
    }; }
};
UaiAvatar.style = uaiAvatarCss();

export { UaiAvatar as uai_avatar };
