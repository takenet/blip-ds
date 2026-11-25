/**
 * Tag prefix of this build of blip-ds, such as `ds-1a2b3c4d`. It is a hash of the component sources, so every app on
 * the same release gets the same prefix and shares the same registered components, and different releases never clash.
 */
export declare const TAG_SCOPE_PREFIX: string;
/** Builds the transformer that renames the blip-ds tags (`uai-*` and `bds-*`) to `<prefix>-<tag>`. Other tags keep their name. */
export declare const createTagTransformer: (prefix: string) => (tag: string) => string;
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
export declare function scopeTags(prefix?: string, setTransformer?: (transformer: (tag: string) => string) => void): string;
/** The prefix set by `scopeTags`, or `undefined` when the tags are not scoped. */
export declare const getTagScope: () => string | undefined;
/**
 * The registered name of a blip-ds tag: `<prefix>-<tag>` when the tags are scoped, the tag itself otherwise. Use it to
 * build selectors in apps and tests, such as `document.querySelector(scopedTag('uai-select'))`.
 */
export declare const scopedTag: (tag: string) => string;
