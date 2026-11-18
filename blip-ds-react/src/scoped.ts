/**
 * The blip-ds React components under the tag prefix of this release (`<prefix>-uai-button` and so on), so the app uses
 * its own version of blip-ds even when the page (for example the Portal) already registered another version.
 *
 *   import { UaiButton, TAG_PREFIX, scopedTag } from 'blip-ds-react/dist/scoped';
 *
 * Import every component from this entry. Importing `blip-ds-react/dist/components` (or `blip-ds-react`) first creates
 * the wrappers before the prefix is set, and they would render the plain tags.
 */
import './scope.js';

export * from './components.js';
export { TAG_PREFIX } from './scope.js';
export { scopedTag } from 'blip-ds/dist/components/index.js';
