System.register(["./p-Btp-603e.system.js","./p-K3qvUp-C.system.js"],(function(r){"use strict";var e,t;return{setters:[function(n){e=n.a;t=n.t;r({setTagTransformer:n.a,transformTag:n.t})},function(e){r({UAI_TOAST_POSITIONS:e.U,showToast:e.s})}],execute:function(){r("scopeTags",c);var n="ds-6e57ab47";var a={prefix:n};
/**
             * Tag prefix of this build of blip-ds, such as `ds-1a2b3c4d`. It is a hash of the component sources, so every app on
             * the same release gets the same prefix and shares the same registered components, and different releases never clash.
             */var s=r("TAG_SCOPE_PREFIX",a.prefix);var i=/^(uai|bds)-/;
// A custom element name starts with a lowercase letter and the prefix adds a hyphen before the tag.
var o=/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/;var u;
/** Builds the transformer that renames the blip-ds tags (`uai-*` and `bds-*`) to `<prefix>-<tag>`. Other tags keep their name. */var f=r("createTagTransformer",(function(r){return function(e){return i.test(e)?"".concat(r,"-").concat(e):e}}));
/**
             * Registers and renders the blip-ds components under `<prefix>-<tag>` (for example `ds-1a2b3c4d-uai-button`), so an app
             * uses its own version of blip-ds even when the page already registered another version under the plain names.
             * Call it once, before any component is defined: in React, import `blip-ds-react/dist/scoped` instead of calling it.
             * Calling it again with the same prefix does nothing; with another prefix it throws, since components already defined
             * would keep the first names.
             *
             * @param prefix Defaults to `TAG_SCOPE_PREFIX`, the prefix of this release. A custom prefix must be lowercase letters,
             * digits and inner hyphens, starting with a letter.
             * @param setTransformer Where the transformer is installed. blip-ds-react passes its own setter, which also renames the
             * tags its wrappers render.
             * @returns The prefix in use.
             */function c(r,t){if(r===void 0){r=s}if(t===void 0){t=e}if(!o.test(r)){throw new Error('[blip-ds] Invalid tag prefix "'.concat(r,'": use lowercase letters, digits and inner hyphens.'))}if(u===r)return r;if(u){throw new Error('[blip-ds] The tags are already scoped with "'.concat(u,'". The prefix can be set once per page and runtime.'))}t(f(r));u=r;return r}
/** The prefix set by `scopeTags`, or `undefined` when the tags are not scoped. */var p=r("getTagScope",(function(){return u}));
/**
             * The registered name of a blip-ds tag: `<prefix>-<tag>` when the tags are scoped, the tag itself otherwise. Use it to
             * build selectors in apps and tests, such as `document.querySelector(scopedTag('uai-select'))`.
             */var T=r("scopedTag",(function(r){return t(r)}))}}}));