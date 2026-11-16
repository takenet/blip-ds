import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { warnLegacyValue } from '../../utils/deprecation';
import type { UaiButtonColor, UaiButtonDirection, UaiButtonSize, UaiButtonVariant } from '../uai-button/uai-button';

type UaiGroupedButton = HTMLElement & {
  componentOnReady?: () => Promise<unknown>;
  setVariant(variant: UaiButtonVariant): Promise<void>;
  setColor(color: UaiButtonColor): Promise<void>;
  setSize(size: UaiButtonSize): Promise<void>;
  setDirection(direction: UaiButtonDirection): Promise<void>;
  setPosition(position: 'first' | 'middle' | 'last'): Promise<void>;
  isActive(active: boolean): Promise<void>;
};

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

const DIRECTIONS: readonly UaiButtonDirection[] = ['row', 'column'];

/**
 * Set of joined uai-button toggles for picking one option, or several with `multiple`. Selected buttons turn solid and
 * expose aria-pressed. Use for a few related options such as views or filters; pair each icon-only button with an
 * aria-label; avoid it for actions that do not keep a selected state (use separate uai-button).
 *
 * @slot - The uai-button elements of the group.
 * @part group - The container that lays the buttons out in a row or a column.
 */
@Component({
  tag: 'uai-button-group',
  styleUrl: 'uai-button-group.scss',
  shadow: true,
})
export class UaiButtonGroup {
  @Element() el!: HTMLElement;

  /** Size of every button in the group. Use the same size as the controls around the group. */
  @Prop({ mutable: true }) size?: UaiButtonSize = 'medium';

  /** Layout of the group: 'row' or 'column'. Use 'column' for vertical toolbars. */
  @Prop({ mutable: true }) direction?: UaiButtonDirection = 'row';

  /** Color of every button in the group. Use 'content' for neutral toolbars. */
  @Prop({ mutable: true }) color?: UaiButtonColor = 'primary';

  /** Allows several buttons to be selected at once. Use for independent filters; avoid for mutually exclusive views. */
  @Prop({ mutable: true }) multiple?: boolean = false;

  /** Accessible name of the group. Use a short noun phrase that says what the buttons choose, such as "Visualização". */
  @Prop() label?: string;

  /** Indexes of the selected buttons. */
  @State() selected: number[] = [];

  /** Emitted when a button is clicked, with its id and index, whether it is now selected, and every selected index. */
  @Event({ bubbles: true, composed: true }) uaiButtonSelected!: EventEmitter<UaiButtonGroupSelectedDetail>;

  /** Selects or unselects the button at `index`, as a click would. Ignored for an index outside the group. */
  @Method()
  async activateButton(index: number): Promise<void> {
    if (index >= 0 && index < this.buttons().length) this.select(index);
  }

  @Watch('size')
  @Watch('direction')
  @Watch('color')
  protected appearanceChanged(): void {
    void this.syncButtons();
  }

  @Watch('multiple')
  protected multipleChanged(): void {
    // Going back to single selection keeps only the first selected button.
    if (!this.multiple && this.selected.length > 1) this.selected = this.selected.slice(0, 1);
    void this.syncButtons();
  }

  componentDidLoad(): void {
    void this.syncButtons();
  }

  private buttons(): UaiGroupedButton[] {
    return Array.from(this.el.querySelectorAll('uai-button')) as UaiGroupedButton[];
  }

  private layoutDirection(): UaiButtonDirection {
    if (DIRECTIONS.includes(this.direction)) return this.direction;
    warnLegacyValue('uai-button-group', 'direction', this.direction, 'row');
    return 'row';
  }

  // Applies the group layout and the selection to every button. Buttons that are not hydrated yet are awaited, so
  // a group rendered together with its buttons is set up once they can receive the calls.
  private async syncButtons(): Promise<void> {
    const buttons = this.buttons();
    const direction = this.layoutDirection();
    this.selected = this.selected.filter((index) => index < buttons.length);
    await Promise.all(
      buttons.map(async (button, index) => {
        await button.componentOnReady?.();
        if (typeof button.setPosition !== 'function') return;
        const active = this.selected.includes(index);
        const last = buttons.length - 1;
        await Promise.all([
          button.setPosition(index === 0 ? 'first' : index === last ? 'last' : 'middle'),
          button.setDirection(direction),
          button.setSize(this.size),
          button.setColor(this.color),
          button.setVariant(active ? 'solid' : 'outline'),
          button.isActive(active),
        ]);
        button.classList.toggle('active', active);
        button.setAttribute('data-index', String(index));
      }),
    );
  }

  private select(index: number): void {
    const was = this.selected.includes(index);
    if (this.multiple) {
      this.selected = was ? this.selected.filter((i) => i !== index) : [...this.selected, index].sort((a, b) => a - b);
    } else {
      this.selected = was ? [] : [index];
    }
    void this.syncButtons();
    const button = this.buttons()[index];
    this.uaiButtonSelected.emit({ id: button?.id || '', index, active: !was, selected: [...this.selected] });
  }

  // One listener on the group: the clicked button is found in the event path, so buttons added later work and a
  // button never gets more than one handler.
  private onClick = (event: MouseEvent): void => {
    const buttons = this.buttons();
    const path: EventTarget[] = typeof event.composedPath === 'function' ? event.composedPath() : [];
    for (let node = event.target as Node | null; !path.length && node; node = node.parentNode) path.push(node);
    const button = path.find((node) => buttons.includes(node as UaiGroupedButton));
    if (button) this.select(buttons.indexOf(button as UaiGroupedButton));
  };

  private onSlotChange = (): void => {
    void this.syncButtons();
  };

  render(): HTMLElement {
    const direction = DIRECTIONS.includes(this.direction) ? this.direction : 'row';
    return (
      <Host role="group" aria-label={this.label} onClick={this.onClick}>
        <div class={{ 'button-group': true, [`button-group--${direction}`]: true }} part="group">
          <slot onSlotchange={this.onSlotChange}></slot>
        </div>
      </Host>
    );
  }
}
