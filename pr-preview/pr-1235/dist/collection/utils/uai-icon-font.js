import assets from "./asset-config.json";
/**
 * Font family of the UAI icon font of the blip-tokens release this build of blip-ds uses, such as `uai-icon-2-5-0`.
 *
 * blip-tokens assigns the glyph code points in alphabetical order, so adding an icon moves the code points of the icons
 * after it, and every release declares the font as "uai-icon". On a page with two releases (the Portal and a scoped
 * app), the last "uai-icon" declared wins and the other release shows the wrong glyphs. uai-icon compiles the
 * name-to-code-point map of its release into its own styles, so it also registers the font of that same release under
 * a versioned family: each release always renders with its own font.
 */
export const ICON_FONT_FAMILY = `uai-icon-${assets.version.replace(/[^A-Za-z0-9]+/g, '-')}`;
/** URL of the icon font of this blip-tokens release on the CDN. */
export const ICON_FONT_URL = new URL('uai-icon/font/uai-icon.woff2', assets.assetRoot).href;
const unquote = (family) => family.replace(/^["']|["']$/g, '');
/**
 * Registers the icon font of this release in the document under ICON_FONT_FAMILY, once per page. Apps on the same
 * release share it. Fonts added to `document.fonts` are available inside every shadow root of the page. Without the
 * FontFace API (old browsers, tests), it does nothing and the icon falls back to the global "uai-icon" font.
 */
export function registerIconFont(doc = typeof document === 'undefined' ? undefined : document) {
    // The DOM lib of this project does not declare FontFaceSet as iterable nor its add(); every supported browser has both.
    const fonts = doc === null || doc === void 0 ? void 0 : doc.fonts;
    if (!fonts || typeof FontFace === 'undefined')
        return;
    for (const face of fonts) {
        if (unquote(face.family) === ICON_FONT_FAMILY)
            return;
    }
    const face = new FontFace(ICON_FONT_FAMILY, `url("${ICON_FONT_URL}") format("woff2")`, { display: 'block' });
    fonts.add(face);
    face.load().catch(() => undefined);
}
