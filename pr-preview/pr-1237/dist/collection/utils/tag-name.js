import { transformTag } from "@stencil/core";
/**
 * Whether `element` is the component `tag`, under the name it was registered with. When an app scopes the blip-ds tags
 * (see `scopeTags`), `uai-tab-item` is registered as `<prefix>-uai-tab-item`, so comparing `tagName` with the literal
 * name would fail. `closest` and `querySelector(All)` with a literal tag are rewritten by the compiler; comparisons are
 * not, so they go through this helper.
 */
export const isTag = (element, tag) => !!element && element.localName === transformTag(tag);
