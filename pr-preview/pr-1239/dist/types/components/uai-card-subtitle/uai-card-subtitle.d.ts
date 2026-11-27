import { ComponentInterface } from '../../stencil-public-runtime';
/**
 * Subtitle element for `UaiCardHeader` when composing with subcomponents.
 * Use inside `uai-card-header` (or pass `description` directly to `uai-card`);
 * pair with `UaiCardTitle`; avoid using without a corresponding title.
 *
 * @slot - Optional subtitle content when `text` is not provided.
 */
export declare class UaiCardSubtitle implements ComponentInterface {
    /**
     * Text rendered as the card subtitle.
     * Use for secondary context such as timestamps or scope; pair with `UaiCardTitle`; avoid duplicating the default slot.
     */
    text?: string;
    render(): any;
}
