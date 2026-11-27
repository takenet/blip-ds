import { ComponentInterface } from '../../stencil-public-runtime';
/**
 * Title element for `UaiCardHeader` when composing with subcomponents.
 * Use inside `uai-card-header` (or pass `heading` directly to `uai-card`);
 * pair with `UaiCardSubtitle`; avoid long sentences that wrap onto multiple lines.
 *
 * @slot - Optional title content when `text` is not provided.
 */
export declare class UaiCardTitle implements ComponentInterface {
    /**
     * Text rendered as the card title.
     * Use a concise label; pair with `UaiCardHeader`; avoid duplicating the default slot content.
     */
    text?: string;
    render(): any;
}
