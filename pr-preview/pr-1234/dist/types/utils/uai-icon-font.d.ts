/**
 * Font family of the UAI icon font of the blip-tokens release this build of blip-ds uses, such as `uai-icon-2-5-0`.
 *
 * blip-tokens assigns the glyph code points in alphabetical order, so adding an icon moves the code points of the icons
 * after it, and every release declares the font as "uai-icon". On a page with two releases (the Portal and a scoped
 * app), the last "uai-icon" declared wins and the other release shows the wrong glyphs. uai-icon compiles the
 * name-to-code-point map of its release into its own styles, so it also registers the font of that same release under
 * a versioned family: each release always renders with its own font.
 */
export declare const ICON_FONT_FAMILY: string;
/** URL of the icon font of this blip-tokens release on the CDN. */
export declare const ICON_FONT_URL: string;
/**
 * Registers the icon font of this release in the document under ICON_FONT_FAMILY, once per page. Apps on the same
 * release share it. Fonts added to `document.fonts` are available inside every shadow root of the page. Without the
 * FontFace API (old browsers, tests), it does nothing and the icon falls back to the global "uai-icon" font.
 */
export declare function registerIconFont(doc?: Document | undefined): void;
