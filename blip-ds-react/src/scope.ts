/**
 * Scopes the blip-ds tags for this app (see `scopeTags` in blip-ds). It must run before the component wrappers are
 * created, because each wrapper defines its custom element and resolves its tag name once, when it is created.
 * `scoped.ts` imports this module before the components for that reason.
 */
import { scopeTags } from 'blip-ds/dist/components/index.js';
import { setTagTransformer } from './tag-transformer.js';

/** Prefix of the tags this app registers, such as `ds-1a2b3c4d`. Build selectors with `scopedTag('uai-select')`. */
export const TAG_PREFIX: string = scopeTags(undefined, setTagTransformer);
