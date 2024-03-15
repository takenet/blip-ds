import {
  Component,
  Host,
  ComponentInterface,
  h,
  Element,
  State,
  Method,
  Prop,
  Event,
  EventEmitter,
  Watch,
} from '@stencil/core';
import { getScrollParent, positionAbsoluteElement } from '../../utils/position-element';

export type activeMode = 'hover' | 'click';
export type dropVerticalPosition = 'bottom' | 'top' | 'left' | 'right';
export type dropHorizontalPosition = 'left' | 'center' | 'right' | 'bottom' | 'top';
//^^ dropHorizontalPosition: For version 2.0 change to values: "start", "center", "end". ^^//
export type subMenuState = 'close' | 'pending' | 'open';

export type DropdownPostionType =
  | 'auto'
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'bottom-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'right-center'
  | 'right-top'
  | 'right-bottom'
  | 'left-center'
  | 'left-top'
  | 'left-bottom';

@Component({
  tag: 'bds-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class BdsDropdown implements ComponentInterface {
  private activatorElement?: Element;
  private dropElement?: HTMLElement;

  @Element() hostElement: HTMLElement;

  @State() intoView?: HTMLElement = null;

  @State() openSubMenu?: boolean = false;
  @State() stateSubMenu?: subMenuState = 'close';
  @State() zIndex?: number = 0;
  @State() delay = null;

  /**
   * Open. Used to open/close the dropdown.
   */
  @Prop() public activeMode?: activeMode = 'click';

  /**
   * Open. Used to open/close the dropdown.
   */
  @Prop({ mutable: true, reflect: true }) public open?: boolean = false;

  /**
   * Used to set drop position
   */
  @Prop() position?: DropdownPostionType = 'auto';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * bdsToggle. Event to return selected date value.
   */
  @Event() bdsToggle?: EventEmitter;

  componentWillLoad() {
    this.activatorElement = this.hostElement.querySelector('[slot="dropdown-activator"]').children[0];
    this.intoView = getScrollParent(this.hostElement);
    this.isPositionChanged;
    if (this.activeMode == 'hover') {
      this.activatorElement.addEventListener('mouseover', () => this.openSubmenu());
      this.activatorElement.addEventListener('click', () => this.openSubmenu());
      this.activatorElement.addEventListener('mouseout', () => this.closeSubmenu());
    } else {
      this.activatorElement.addEventListener('click', () => this.toggle());
    }
  }

  componentDidLoad() {
    if (this.position != 'auto') {
      this.centerDropElement(this.position);
      this.setDefaultPlacement(this.position);
    } else {
      this.validatePositionDrop();
    }
  }

  private setDefaultPlacement(value: DropdownPostionType) {
    this.dropElement.classList.add(`dropdown__basic__${value}`);
  }

  private validatePositionDrop() {
    const positionValue = positionAbsoluteElement({
      actionElement: this.hostElement,
      changedElement: this.dropElement,
      intoView: this.intoView,
    });
    this.dropElement.classList.add(`dropdown__basic__${positionValue.y}-${positionValue.x}`);
  }

  @Watch('open')
  protected isOpenChanged(open: boolean): void {
    this.bdsToggle.emit({ value: open });
    if (open)
      if (this.position != 'auto') {
        this.setDefaultPlacement(this.position);
      } else {
        this.validatePositionDrop();
      }
  }

  @Watch('position')
  protected isPositionChanged(): void {
    this.setDefaultPlacement(this.position);
  }

  @Method()
  async toggle() {
    this.open = !this.open;
  }

  @Method()
  async setOpen() {
    this.open = true;
  }

  @Method()
  async setClose() {
    this.open = false;
  }

  @Watch('openSubMenu')
  protected openSubMenuChanged(active: boolean): void {
    if (active == false) {
      this.stateSubMenu = 'pending';
      this.delay = setTimeout(this.onCloseSubMenu, 1000);
    }
    if (active == true) {
      clearTimeout(this.delay);
      this.delay = null;
      this.stateSubMenu = 'open';
    }
  }

  @Watch('stateSubMenu')
  protected stateSubMenuChanged(state: subMenuState): void {
    switch (state) {
      case 'open':
        this.open = true;
        break;
      case 'pending':
        this.open = true;
        break;
      case 'close':
        this.open = false;
        break;
    }
  }

  private onCloseSubMenu = (): void => {
    this.stateSubMenu = 'close';
  };

  private refDropElement = (el: HTMLElement): void => {
    this.dropElement = el;
  };

  private onClickCloseButtom = () => {
    this.open = false;
  };

  private openSubmenu = () => {
    if (this.activeMode === 'hover') {
      this.zIndex = 1;
    }
    this.openSubMenu = true;
  };

  private closeSubmenu = () => {
    if (this.activeMode === 'hover') {
      this.zIndex = 0;
    }
    this.openSubMenu = false;
  };

  private centerDropElement = (value: DropdownPostionType) => {
    const arrayPosition = value.split('-');
    if ((arrayPosition[0] == 'left' || arrayPosition[0] == 'right') && arrayPosition[1] == 'center') {
      this.dropElement.style.top = `calc(50% - ${this.dropElement.offsetHeight / 2}px)`;
    }
  };

  render() {
    const zIndexSubmenu = {
      zIndex: `${this.zIndex}`,
    };
    return (
      <Host>
        <slot name="dropdown-activator"></slot>
        <div
          ref={(el) => this.refDropElement(el)}
          class={{
            dropdown: true,
            dropdown__open: this.open,
          }}
          data-test={this.dataTest}
          onMouseOver={() => this.openSubmenu()}
          onMouseOut={() => this.closeSubmenu()}
        >
          <div class="content" style={zIndexSubmenu}>
            <slot name="dropdown-content"></slot>
          </div>
        </div>
        {this.activeMode !== 'hover' && this.open && (
          <div class={{ outzone: true }} onClick={() => this.onClickCloseButtom()}></div>
        )}
      </Host>
    );
  }
}
