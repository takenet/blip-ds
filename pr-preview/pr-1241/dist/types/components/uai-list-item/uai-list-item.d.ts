import { EventEmitter } from '../../stencil-public-runtime';
import type { UaiListActionButtonDetail, UaiListItemCheckedDetail, UaiListTypeList } from '../uai-list/uai-list-interface';
export type UaiListItemSize = 'tall' | 'standard' | 'short';
/**
 * One row of a uai-list: text with optional avatar or icon, chips, action buttons and a checkbox, radio or
 * switch. Use inside uai-list; pair with typeList for selection; avoid nesting other interactive rows.
 *
 * Interactive rows (clickable or with a control) are focusable and expose the checkbox, radio, switch or button
 * role; Enter and Space do the same as a click.
 *
 * @slot - Content placed before the text, after the avatar or icon.
 * @slot content-area - Content placed next to the chips; it grows to fill the row.
 * @slot action-area - Content placed with the action buttons on the right. Hidden when typeList is a control.
 * @part item - The row container.
 */
export declare class UaiListItem {
    private hasActionAreaSlot;
    private hasContentAreaSlot;
    private itemElement?;
    hostElement: HTMLElement;
    internalChips: string[];
    internalActionsButtons: string[];
    /** Selected state of the control. Use with typeList checkbox, radio or switch; pair with uaiChecked. Avoid it on default rows, where it has no visual. */
    checked?: boolean;
    /** Control of the row: checkbox and radio on the left, switch on the right; default or null has none. Use the same value in every row of a list; pair with uai-list typeList. Avoid mixing controls in one list. */
    typeList?: UaiListTypeList;
    /** Name shown as avatar initials. Use for people or entities; pair with avatarThumbnail. Avoid it together with icon: the avatar wins. */
    avatarName?: string;
    /** Avatar photo URL. Use for people; pair with avatarName as fallback. Avoid decorative images. */
    avatarThumbnail?: string;
    /** UAI icon name shown before the text; solid when active. Use to identify the row type; pair with text. Avoid it with an avatar, which takes priority. */
    icon?: string;
    /** Row identifier sent in the events. Use a unique value per list; pair with uai-list value for radios. Avoid duplicates. */
    value: string;
    /** Main text of the row. Use a short label; pair with secondaryText for details. Avoid long paragraphs. */
    text?: string;
    /** Supporting text below the main text. Use for details; pair with text. Avoid repeating the main text. */
    secondaryText?: string;
    /**
     * Chips shown after the text, as a JSON string or an array: chips='["chip1", "chip2"]'. Use for short tags;
     * pair with text. Avoid long labels: they are cut with a tooltip.
     */
    chips: string | string[];
    /**
     * UAI icon names of the action buttons on the right, as a JSON string or an array:
     * actions-buttons='["copy", "settings-general", "more-options-horizontal"]'. Use with typeList null or default;
     * pair with uaiClickActionButtom. Avoid them with controls: they are not shown.
     */
    actionsButtons: string | string[];
    /** Shows the hover and pressed states and makes the row focusable. Use when the row does something on click; pair with a click handler. Controls are always clickable. */
    clickable?: boolean;
    /** Highlights the row as the current one: selected overlay, solid icon and bold text. Use for the current item; pair with navigation. Avoid it to mean checked. */
    active?: boolean;
    /** Rounds the row corners with radius/md. Use for rows that float on a surface; pair with spacing between rows. Avoid it in full-bleed lists. */
    borderRadius?: boolean;
    /** Row padding: tall, standard or short. Use standard by default; pair with the density of the screen. Avoid mixing sizes in one list. */
    size?: UaiListItemSize;
    /** Test selector on the row. Use for automation; pair with semantic queries. Avoid styling by it. */
    dataTest?: string;
    /** Checked state changed by a click, Enter or Space. Use detail.checked; pair with checked. Not emitted for changes made by code. */
    uaiChecked: EventEmitter<UaiListItemCheckedDetail>;
    /** Click on an action button; name kept from bdsClickActionButtom. Use detail.icon to know the button; pair with actionsButtons. Avoid toggling checked in it. */
    uaiClickActionButtom: EventEmitter<UaiListActionButtonDetail>;
    /** Same as uaiClickActionButtom, with the corrected spelling; both are emitted with the same detail. Use in new code; pair with actionsButtons. Avoid listening to both. */
    uaiClickActionButton: EventEmitter<UaiListActionButtonDetail>;
    componentWillLoad(): void;
    protected chipsChanged(): void;
    protected actionsButtonsChanged(): void;
    private get isControl();
    private toggle;
    private onClick;
    private onKeyDown;
    private clickActionButtons;
    private stopControlEvent;
    private renderChips;
    private renderActionsButtons;
    private renderControl;
    private role;
    render(): any;
}
