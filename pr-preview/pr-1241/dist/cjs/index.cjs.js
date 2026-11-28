'use strict';

var index = require('./index-GTJCA4wH.js');
var uaiToast = require('./uai-toast-D1WUYP7I.js');

const prefix = "ds-6e57ab47";
var scope = {
	prefix: prefix
};

/**
 * Tag prefix of this build of blip-ds, such as `ds-1a2b3c4d`. It is a hash of the component sources, so every app on
 * the same release gets the same prefix and shares the same registered components, and different releases never clash.
 */
const TAG_SCOPE_PREFIX = scope.prefix;
const SCOPED_TAG = /^(uai|bds)-/;
// A custom element name starts with a lowercase letter and the prefix adds a hyphen before the tag.
const VALID_PREFIX = /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/;
let activePrefix;
/** Builds the transformer that renames the blip-ds tags (`uai-*` and `bds-*`) to `<prefix>-<tag>`. Other tags keep their name. */
const createTagTransformer = (prefix) => (tag) => SCOPED_TAG.test(tag) ? `${prefix}-${tag}` : tag;
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
 */
function scopeTags(prefix = TAG_SCOPE_PREFIX, setTransformer = index.setTagTransformer) {
    if (!VALID_PREFIX.test(prefix)) {
        throw new Error(`[blip-ds] Invalid tag prefix "${prefix}": use lowercase letters, digits and inner hyphens.`);
    }
    if (activePrefix === prefix)
        return prefix;
    if (activePrefix) {
        throw new Error(`[blip-ds] The tags are already scoped with "${activePrefix}". The prefix can be set once per page and runtime.`);
    }
    setTransformer(createTagTransformer(prefix));
    activePrefix = prefix;
    return prefix;
}
/** The prefix set by `scopeTags`, or `undefined` when the tags are not scoped. */
const getTagScope = () => activePrefix;
/**
 * The registered name of a blip-ds tag: `<prefix>-<tag>` when the tags are scoped, the tag itself otherwise. Use it to
 * build selectors in apps and tests, such as `document.querySelector(scopedTag('uai-select'))`.
 */
const scopedTag = (tag) => index.transformTag(tag);

exports.setTagTransformer = index.setTagTransformer;
exports.transformTag = index.transformTag;
exports.UAI_TOAST_POSITIONS = uaiToast.UAI_TOAST_POSITIONS;
exports.showToast = uaiToast.showToast;
exports.TAG_SCOPE_PREFIX = TAG_SCOPE_PREFIX;
exports.createTagTransformer = createTagTransformer;
exports.getTagScope = getTagScope;
exports.scopeTags = scopeTags;
exports.scopedTag = scopedTag;
