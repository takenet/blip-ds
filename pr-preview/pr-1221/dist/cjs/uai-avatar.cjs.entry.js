'use strict';

var index = require('./index-BuAR9UTp.js');
var colorLetter = require('./color-letter-DjbbLSXC.js');

const firstLetter = (word) => (word || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .charAt(0)
    .toUpperCase();
/** Initials of a full name: first letter of the first and of the last name ("ana maria silva" -> "AS"). */
function initialsOf(name) {
    const words = (name || '').trim().split(/\s+/).filter(Boolean);
    if (!words.length)
        return '';
    return firstLetter(words[0]) + (words.length > 1 ? firstLetter(words[words.length - 1]) : '');
}

const uaiAvatarCss = () => `:host{--avatar-size:var(--uai-sizing-3xl, 3rem);--avatar-font-size:var(--uai-heading-md-font-size, 1.25rem);--avatar-line-height:var(--uai-heading-md-line-height, 1.75rem);--avatar-background:var(--uai-surface-muted, #f2f3f3);--avatar-content:var(--uai-content-secondary, #5f676d);display:-ms-inline-flexbox;display:inline-flex;-ms-flex:0 0 var(--avatar-size);flex:0 0 var(--avatar-size);-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--avatar-size);height:var(--avatar-size);border-radius:var(--uai-radius-full, 624.9375rem);vertical-align:middle}:host([hidden]){display:none}:host(.uai-avatar--size-micro){--avatar-size:var(--uai-sizing-lg, 1.5rem);--avatar-font-size:var(--uai-body-sm-font-size, 0.75rem);--avatar-line-height:var(--uai-body-sm-line-height, 1.25rem)}:host(.uai-avatar--size-extra-small){--avatar-size:var(--uai-sizing-xl, 2rem);--avatar-font-size:var(--uai-body-base-font-size, 0.875rem);--avatar-line-height:var(--uai-body-base-line-height, 1.375rem)}:host(.uai-avatar--size-small){--avatar-size:var(--uai-sizing-2xl, 2.5rem);--avatar-font-size:var(--uai-body-lg-font-size, 1rem);--avatar-line-height:var(--uai-body-lg-line-height, 1.5rem)}:host(.uai-avatar--size-large){--avatar-size:var(--uai-sizing-4xl, 4rem);--avatar-font-size:var(--uai-heading-lg-font-size, 1.5rem);--avatar-line-height:var(--uai-heading-lg-line-height, 2rem)}:host(.uai-avatar--size-extra-large){--avatar-size:var(--uai-sizing-5xl, 4.5rem);--avatar-font-size:var(--uai-heading-xl-font-size, 2rem);--avatar-line-height:var(--uai-heading-xl-line-height, 2.5rem)}:host(.uai-avatar--color-info){--avatar-background:var(--uai-feedback-info-subtle, #eff6ff);--avatar-content:var(--uai-content-primary, #242729)}:host(.uai-avatar--color-success){--avatar-background:var(--uai-feedback-success-subtle, #ecfdf5);--avatar-content:var(--uai-content-primary, #242729)}:host(.uai-avatar--color-warning){--avatar-background:var(--uai-feedback-warning-subtle, #fff7ed);--avatar-content:var(--uai-content-primary, #242729)}:host(.uai-avatar--color-error){--avatar-background:var(--uai-feedback-error-subtle, #fef2f2);--avatar-content:var(--uai-content-primary, #242729)}:host(.uai-avatar--upload){cursor:pointer}:host(.uai-avatar--upload):focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.avatar{position:relative;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;overflow:hidden;border-radius:inherit;background-color:var(--avatar-background);color:var(--avatar-content);font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--avatar-font-size);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--avatar-line-height)}.avatar__image{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.avatar__initials,.avatar__ellipsis{overflow:hidden;white-space:nowrap}.avatar__icon{color:currentColor}.avatar__upload{position:absolute;inset:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--uai-overlay-default, rgba(0, 0, 0, 0.72));color:var(--uai-content-inverse, #ffffff);opacity:0;-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.avatar__upload{-webkit-transition:none;transition:none}}:host(.uai-avatar--upload:hover) .avatar__upload,:host(.uai-avatar--upload:focus-visible) .avatar__upload{opacity:1}.avatar__file{display:none}@media (forced-colors: active){.avatar{border:var(--uai-border-width-default, 1px) solid CanvasText}}`;

const SIZES = ['micro', 'extra-small', 'small', 'standard', 'large', 'extra-large'];
const COLORS = ['colorLetter', 'system', 'success', 'warning', 'error', 'info', 'surface'];
// system and info share feedback/info-subtle: UAI has a single information surface.
const UAI_COLOR = {
    system: 'info',
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error',
    surface: 'surface',
};
const ICON_SIZE = {
    micro: 'x-small',
    'extra-small': 'small',
    small: 'medium',
    standard: 'medium',
    large: 'medium',
    'extra-large': 'medium',
};
const UaiAvatar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiClickAvatar = index.createEvent(this, "uaiClickAvatar");
        this.uaiImageUpload = index.createEvent(this, "uaiImageUpload");
        this.imageFailed = false;
        /**
         * Full name of the person. Builds the initials (first letter of the first and the last name) and the accessible
         * name.
         */
        this.name = null;
        /**
         * URL of the photo. Without it, or if it fails to load, the initials are shown.
         */
        this.thumbnail = null;
        /**
         * Avatar size. Can be one of: 'micro', 'extra-small', 'small', 'standard' (default), 'large', 'extra-large'.
         */
        this.size = 'standard';
        /**
         * Background behind the initials. Can be one of: 'colorLetter' (default, picked by the first letter of the name),
         * 'system', 'success', 'warning', 'error', 'info', 'surface' (neutral).
         */
        this.color = 'colorLetter';
        /**
         * If true, shows the upload icon on hover and focus. The click only emits uaiClickAvatar; the app opens its own
         * picker.
         */
        this.upload = false;
        /**
         * If true, activating the avatar opens the image picker, shows the chosen image and emits uaiImageUpload.
         */
        this.openUpload = false;
        /**
         * Number of hidden people, shown as "+N" (for example in a group of avatars).
         */
        this.ellipsis = null;
        /**
         * Data test id, set on the host.
         */
        this.dataTest = null;
        this.onClick = (event) => {
            this.activate(event);
        };
        this.onKeyDown = (event) => {
            if (!this.interactive || (event.key !== 'Enter' && event.key !== ' '))
                return;
            event.preventDefault();
            this.activate(event);
        };
        this.onFileChange = (event) => {
            var _a;
            const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (!file)
                return;
            const reader = new FileReader();
            reader.onload = () => {
                const url = reader.result;
                this.thumbnail = url;
                this.uaiImageUpload.emit(url);
            };
            reader.readAsDataURL(file);
        };
    }
    resetImageError() {
        this.imageFailed = false;
    }
    componentWillLoad() {
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        return 'standard';
    }
    get personName() {
        return (this.name || this.label || '').trim();
    }
    get image() {
        return this.thumbnail || this.src || '';
    }
    get interactive() {
        return !!(this.upload || this.openUpload);
    }
    get text() {
        const fromName = initialsOf(this.personName);
        if (fromName)
            return fromName;
        return (this.initials || '').trim().slice(0, 2).toUpperCase();
    }
    resolvedColor(initials) {
        let color = this.color;
        if (!COLORS.includes(color)) {
            color = 'colorLetter';
        }
        if (color !== 'colorLetter')
            return UAI_COLOR[color];
        const letter = colorLetter.colorLetter.find((item) => item.value === initials.charAt(0));
        return letter ? UAI_COLOR[letter.color] || 'surface' : 'surface';
    }
    activate(event) {
        var _a;
        this.uaiClickAvatar.emit(event);
        if (this.openUpload)
            (_a = this.fileInput) === null || _a === void 0 ? void 0 : _a.click();
    }
    renderContent(size, initials) {
        if (this.ellipsis) {
            return (index.h("span", { class: "avatar__ellipsis", "aria-hidden": "true" }, `+${this.ellipsis}`));
        }
        if (this.image && !this.imageFailed) {
            return (index.h("img", { class: "avatar__image", src: this.image, alt: "", "aria-hidden": "true", onError: () => (this.imageFailed = true) }));
        }
        if (initials) {
            return (index.h("span", { class: "avatar__initials", "aria-hidden": "true" }, initials));
        }
        return (index.h("uai-icon", { class: "avatar__icon", name: "avatar-user", theme: "outline", size: ICON_SIZE[size], "aria-hidden": "true" }));
    }
    render() {
        const size = this.sizeValue;
        const initials = this.text;
        const hasImage = !!this.image && !this.imageFailed;
        const color = this.ellipsis || hasImage || !initials ? 'surface' : this.resolvedColor(initials);
        const name = this.personName;
        const interactive = this.interactive;
        const accessibleName = name || (this.ellipsis ? `+${this.ellipsis}` : '');
        return (index.h(index.Host, { key: 'a1c8e3c50dc773d675b3f6adb4517eb19ed529a6', class: {
                [`uai-avatar--size-${size}`]: true,
                [`uai-avatar--color-${color}`]: true,
                'uai-avatar--upload': interactive,
            }, role: interactive ? 'button' : accessibleName ? 'img' : null, tabindex: interactive ? '0' : null, "aria-label": interactive ? accessibleName || 'Avatar' : accessibleName || null, "aria-hidden": !interactive && !accessibleName ? 'true' : null, "data-test": this.dataTest, onClick: this.onClick, onKeyDown: this.onKeyDown }, index.h("div", { key: '850a88c2048d86d6dc45727e8b16fea784a798a5', class: "avatar", part: "avatar" }, this.renderContent(size, initials), interactive && (index.h("div", { key: 'daf6efc4c3e4fc18233e0b283aacf63820918059', class: "avatar__upload", "aria-hidden": "true" }, index.h("uai-icon", { key: '57eb2eea6bcc80d8d32a14b3eff7f0d86b22f331', name: "upload", theme: "outline", size: ICON_SIZE[size] })))), this.openUpload && (index.h("input", { key: '0c3a4589a42aedc84c68a09a4700486f9bc551e0', ref: (input) => (this.fileInput = input), class: "avatar__file", type: "file", accept: "image/*", tabindex: "-1", "aria-hidden": "true", onChange: this.onFileChange, onClick: (event) => event.stopPropagation() }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "thumbnail": [{
                "resetImageError": 0
            }],
        "src": [{
                "resetImageError": 0
            }]
    }; }
};
UaiAvatar.style = uaiAvatarCss();

exports.uai_avatar = UaiAvatar;
