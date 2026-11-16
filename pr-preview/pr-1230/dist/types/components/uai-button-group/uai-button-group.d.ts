import { EventEmitter } from '../../stencil-public-runtime';
import type { UaiButtonColor, UaiButtonDirection, UaiButtonSize } from '../uai-button/uai-button';
export interface UaiButtonGroupSelectedDetail {
    /** id of the clicked button, as in bds-button-group. */
    id: string;
    /** Index of the clicked button in the group. */
    index: number;
    /** Whether the clicked button ended up selected. */
    active: boolean;
    /** Indexes of every selected button, in order. */
    selected: number[];
}
/**
 * Set of joined uai-button toggles for picking one option, or several with `multiple`. Selected buttons turn solid and
 * expose aria-pressed. Use for a few related options such as views or filters; pair each icon-only button with an
 * aria-label; avoid it for actions that do not keep a selected state (use separate uai-button).
 *
 * @slot - The uai-button elements of the group.
 * @part group - The container that lays the buttons out in a row or a column.
 */
export declare class UaiButtonGroup {
    el: HTMLElement;
    /** Size of every button in the group. Use the same size as the controls around the group. */
    size?: UaiButtonSize;
    /** Layout of the group: 'row' or 'column'. Use 'column' for vertical toolbars. */
    direction?: UaiButtonDirection;
    /** Color of every button in the group. Use 'content' for neutral toolbars. */
    color?: UaiButtonColor;
    /** Allows several buttons to be selected at once. Use for independent filters; avoid for mutually exclusive views. */
    multiple?: boolean;
    /** Accessible name of the group. Use a short noun phrase that says what the buttons choose, such as "Visualização". */
    label?: string;
    /** Indexes of the selected buttons. */
    selected: number[];
    /** Emitted when a button is clicked, with its id and index, whether it is now selected, and every selected index. */
    uaiButtonSelected: EventEmitter<UaiButtonGroupSelectedDetail>;
    /** Selects or unselects the button at `index`, as a click would. Ignored for an index outside the group. */
    activateButton(index: number): Promise<void>;
    protected appearanceChanged(): void;
    protected multipleChanged(): void;
    componentDidLoad(): void;
    private buttons;
    private layoutDirection;
    private syncButtons;
    private select;
    private onClick;
    private onSlotChange;
    render(): HTMLElement;
}
