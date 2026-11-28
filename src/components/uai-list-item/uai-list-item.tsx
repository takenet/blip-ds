import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import type {
  UaiListActionButtonDetail,
  UaiListItemCheckedDetail,
  UaiListTypeList,
} from '../uai-list/uai-list-interface';

export type UaiListItemSize = 'tall' | 'standard' | 'short';

/** Chips longer than this are cut with "..." and show the full text in a tooltip, as in bds-list-item. */
const CHIP_LIMIT = 30;
const CONTROL_TYPES: readonly UaiListTypeList[] = ['checkbox', 'radio', 'switch'];

const parseList = (value: string | string[], current: string[]): string[] => {
  if (!value) return [];
  if (typeof value !== 'string') return value;
  // Keep the current list if AngularJS has not interpolated the attribute yet; the watcher reloads it.
  try {
    return JSON.parse(value);
  } catch {
    return current;
  }
};

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
@Component({
  tag: 'uai-list-item',
  styleUrl: 'uai-list-item.scss',
  shadow: true,
})
export class UaiListItem {
  private hasActionAreaSlot: boolean;
  private hasContentAreaSlot: boolean;
  private itemElement?: HTMLDivElement;

  @Element() hostElement: HTMLElement;

  @State() internalChips: string[] = [];

  @State() internalActionsButtons: string[] = [];

  /** Selected state of the control. Use with typeList checkbox, radio or switch; pair with uaiChecked. Avoid it on default rows, where it has no visual. */
  @Prop({ mutable: true, reflect: true }) checked?: boolean = false;

  /** Control of the row: checkbox and radio on the left, switch on the right; default or null has none. Use the same value in every row of a list; pair with uai-list typeList. Avoid mixing controls in one list. */
  @Prop() typeList?: UaiListTypeList = null;

  /** Name shown as avatar initials. Use for people or entities; pair with avatarThumbnail. Avoid it together with icon: the avatar wins. */
  @Prop() avatarName?: string = null;

  /** Avatar photo URL. Use for people; pair with avatarName as fallback. Avoid decorative images. */
  @Prop() avatarThumbnail?: string = null;

  /** UAI icon name shown before the text; solid when active. Use to identify the row type; pair with text. Avoid it with an avatar, which takes priority. */
  @Prop() icon?: string = null;

  /** Row identifier sent in the events. Use a unique value per list; pair with uai-list value for radios. Avoid duplicates. */
  @Prop() value: string = null;

  /** Main text of the row. Use a short label; pair with secondaryText for details. Avoid long paragraphs. */
  @Prop() text?: string = null;

  /** Supporting text below the main text. Use for details; pair with text. Avoid repeating the main text. */
  @Prop() secondaryText?: string = null;

  /**
   * Chips shown after the text, as a JSON string or an array: chips='["chip1", "chip2"]'. Use for short tags;
   * pair with text. Avoid long labels: they are cut with a tooltip.
   */
  @Prop({ mutable: true }) chips: string | string[] = [];

  /**
   * UAI icon names of the action buttons on the right, as a JSON string or an array:
   * actions-buttons='["copy", "settings-general", "more-options-horizontal"]'. Use with typeList null or default;
   * pair with uaiClickActionButtom. Avoid them with controls: they are not shown.
   */
  @Prop({ mutable: true }) actionsButtons: string | string[] = [];

  /** Shows the hover and pressed states and makes the row focusable. Use when the row does something on click; pair with a click handler. Controls are always clickable. */
  @Prop() clickable?: boolean = false;

  /** Highlights the row as the current one: selected overlay, solid icon and bold text. Use for the current item; pair with navigation. Avoid it to mean checked. */
  @Prop() active?: boolean = false;

  /** Rounds the row corners with radius/md. Use for rows that float on a surface; pair with spacing between rows. Avoid it in full-bleed lists. */
  @Prop() borderRadius?: boolean = false;

  /** Row padding: tall, standard or short. Use standard by default; pair with the density of the screen. Avoid mixing sizes in one list. */
  @Prop() size?: UaiListItemSize = 'standard';

  /** Test selector on the row. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dataTest?: string = null;

  /** Checked state changed by a click, Enter or Space. Use detail.checked; pair with checked. Not emitted for changes made by code. */
  @Event() uaiChecked!: EventEmitter<UaiListItemCheckedDetail>;

  /** Click on an action button; name kept from bdsClickActionButtom. Use detail.icon to know the button; pair with actionsButtons. Avoid toggling checked in it. */
  @Event() uaiClickActionButtom!: EventEmitter<UaiListActionButtonDetail>;

  /** Same as uaiClickActionButtom, with the corrected spelling; both are emitted with the same detail. Use in new code; pair with actionsButtons. Avoid listening to both. */
  @Event() uaiClickActionButton!: EventEmitter<UaiListActionButtonDetail>;

  componentWillLoad() {
    this.hasActionAreaSlot = !!this.hostElement.querySelector('[slot="action-area"]');
    this.hasContentAreaSlot = !!this.hostElement.querySelector('[slot="content-area"]');
    this.chipsChanged();
    this.actionsButtonsChanged();
  }

  @Watch('chips')
  protected chipsChanged(): void {
    this.internalChips = parseList(this.chips, this.internalChips);
  }

  @Watch('actionsButtons')
  protected actionsButtonsChanged(): void {
    this.internalActionsButtons = parseList(this.actionsButtons, this.internalActionsButtons);
  }

  private get isControl(): boolean {
    return CONTROL_TYPES.includes(this.typeList);
  }

  // SOLFAC-117 (b, bug 4): uaiChecked is emitted only for user interaction, never for changes made by code.
  private toggle(): void {
    const next = this.typeList == 'radio' ? true : !this.checked;
    if (next === this.checked) return;
    this.checked = next;
    this.uaiChecked.emit({
      value: this.value,
      text: this.text,
      secondaryText: this.secondaryText,
      typeList: this.typeList,
      checked: next,
    });
  }

  // SOLFAC-117 (b, bug 3): a click on an action button does not toggle checked.
  private onClick = (event: MouseEvent): void => {
    const fromActionButton = event
      .composedPath()
      .some((node) => (node as HTMLElement).classList?.contains('action-button'));
    if (!fromActionButton) this.toggle();
  };

  // SOLFAC-117 (a): Enter and Space act like a click on focusable rows.
  private onKeyDown = (event: KeyboardEvent): void => {
    if (event.composedPath()[0] !== this.itemElement) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    if (!event.repeat) this.toggle();
  };

  private clickActionButtons = (icon: string, event: MouseEvent): void => {
    const detail = { value: this.value, icon, elementButton: event.composedPath()[0] };
    this.uaiClickActionButtom.emit(detail);
    // SOLFAC-117 (c): corrected spelling, emitted with the same detail.
    this.uaiClickActionButton.emit(detail);
  };

  // Inner controls are visual only: the row owns focus, role and state, so their own change events stay inside.
  private stopControlEvent = (event: Event): void => event.stopPropagation();

  private renderChips() {
    return this.internalChips.map((chip, index) => {
      const id = index.toString();
      if (chip.length <= CHIP_LIMIT) {
        return (
          <span class="chip" id={id} key={id}>
            {chip}
          </span>
        );
      }
      return (
        <uai-tooltip key={id} position="top-center" tooltip-text={chip}>
          <span class="chip" id={id}>{`${chip.slice(0, CHIP_LIMIT)} ...`}</span>
        </uai-tooltip>
      );
    });
  }

  private renderActionsButtons() {
    return this.internalActionsButtons.map((button, index) => (
      <uai-button
        key={index.toString()}
        class="action-button"
        variant="outline"
        color="content"
        size="short"
        icon={button}
        aria-label={button}
        onClick={(event: MouseEvent) => this.clickActionButtons(button, event)}
      ></uai-button>
    ));
  }

  private renderControl() {
    const label = this.text || this.value || this.typeList;
    return (
      <span class={`control control--${this.typeList}`} aria-hidden="true" inert>
        {this.typeList == 'radio' && <uai-radio value={this.value} checked={this.checked} aria-label={label} onUaiChange={this.stopControlEvent}></uai-radio>}
        {this.typeList == 'checkbox' && <uai-checkbox checked={this.checked} aria-label={label} onUaiChange={this.stopControlEvent}></uai-checkbox>}
        {this.typeList == 'switch' && <uai-switch checked={this.checked} aria-label={label} onUaiChange={this.stopControlEvent}></uai-switch>}
      </span>
    );
  }

  private role(): string {
    if (this.isControl) return this.typeList;
    return this.clickable ? 'button' : null;
  }

  render() {
    const interactive = this.clickable || this.isControl;
    const hasLeftInput = this.typeList == 'checkbox' || this.typeList == 'radio';
    const hasAvatar = this.avatarName || this.avatarThumbnail;
    const size = ['tall', 'standard', 'short'].includes(this.size) ? this.size : 'standard';
    // SOLFAC-117 (b, bug 5): the text grows when there are no chips and no content or action slots.
    const textGrows = !this.hasActionAreaSlot && !this.hasContentAreaSlot && this.internalChips.length === 0;
    return (
      <Host>
        <div
          ref={(element) => (this.itemElement = element)}
          part="item"
          class={{
            'list-item': true,
            'list-item--clickable': interactive,
            'list-item--active': this.active,
            'list-item--border-radius': this.borderRadius,
            [`list-item--${size}`]: true,
          }}
          role={this.role()}
          aria-checked={this.isControl ? String(!!this.checked) : null}
          aria-labelledby={this.text ? 'list-item-text' : null}
          aria-describedby={this.secondaryText ? 'list-item-secondary-text' : null}
          tabindex={interactive ? '0' : null}
          data-test={this.dataTest}
          onClick={this.onClick}
          onKeyDown={interactive ? this.onKeyDown : null}
        >
          {hasLeftInput && this.renderControl()}
          {hasAvatar ? (
            <uai-avatar
              class="avatar-item"
              name={this.avatarName}
              thumbnail={this.avatarThumbnail}
              size="extra-small"
            ></uai-avatar>
          ) : (
            this.icon && (
              <uai-icon
                class="icon-item"
                size="medium"
                name={this.icon}
                theme={this.active ? 'solid' : 'outline'}
              ></uai-icon>
            )
          )}
          <div class="content-slot">
            <slot></slot>
          </div>
          {(this.text || this.secondaryText) && (
            <div class={{ 'content-item': true, 'grow-up': textGrows }}>
              {this.text && (
                <uai-typo
                  id="list-item-text"
                  class="title-item"
                  variant="body-lg"
                  tag="span"
                  margin={false}
                  bold={this.active ? 'bold' : 'regular'}
                >
                  {this.text}
                </uai-typo>
              )}
              {this.secondaryText && (
                <uai-typo id="list-item-secondary-text" class="subtitle-item" variant="caption" tag="span" margin={false}>
                  {this.secondaryText}
                </uai-typo>
              )}
            </div>
          )}
          <div class="content-area grow-up">
            {this.internalChips.length > 0 && <div class="internal-chips">{this.renderChips()}</div>}
            <slot name="content-area"></slot>
          </div>
          {(!this.typeList || this.typeList == 'default') && (
            <div class="action-area">
              {this.internalActionsButtons.length > 0 && (
                <div class="internal-actions-buttons">{this.renderActionsButtons()}</div>
              )}
              <slot name="action-area"></slot>
            </div>
          )}
          {this.typeList == 'switch' && this.renderControl()}
        </div>
      </Host>
    );
  }
}
