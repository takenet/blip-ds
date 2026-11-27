import { ComponentInterface } from '../../stencil-public-runtime';
import { UaiCardJustifyContent } from '../uai-card-header/uai-card-header';
/**
 * Footer container for `UaiCard` when composing with subcomponents.
 * Use inside `uai-card` (or place content directly with `slot="footer"`);
 * pair with `UaiButton` or supporting trend/goal metadata; avoid using outside a card context.
 *
 * @slot - Footer elements such as metadata labels, trend indicators, or action buttons.
 */
export declare class UaiCardFooter implements ComponentInterface {
    el: HTMLElement;
    /**
     * Horizontal distribution of children inside the footer.
     * Use `flex-end` for action buttons or `space-between` for dual metadata; pair with `UaiCard`; avoid invalid CSS alignment values.
     */
    align?: UaiCardJustifyContent;
    componentWillLoad(): void;
    private resolveAlign;
    render(): any;
}
