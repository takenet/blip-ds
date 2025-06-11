import { Component, Host, Element, State, Prop, h, EventEmitter, Event, Method } from '@stencil/core';

export type collapses = 'single' | 'multiple';

@Component({
  tag: 'bds-nav-tree-group',
  styleUrl: 'nav-tree.scss',
  shadow: true,
})
export class NavTreeGroup {
  private itemsElement?: HTMLCollectionOf<HTMLBdsNavTreeElement> = null;
  @Element() private element: HTMLElement;

  @State() isOpenAftAnimation?: boolean = false;
  @State() navTreeChild? = null;
  /**
   * Collapse. Used to set mode of iteraction of componente when navigate with menu. You can choose a option single or multiple.
   */
  @Prop() collapse?: collapses = 'single';

  @Event() bdsNavTreeGroupCloseAll?: EventEmitter<void>;
  @Event() bdsNavTreeGroupOpenAll?: EventEmitter<void>;

  componentWillRender() {
    this.itemsElement = this.element.getElementsByTagName('bds-nav-tree') as HTMLCollectionOf<HTMLBdsNavTreeElement>;
    for (let i = 0; i < this.itemsElement.length; i++) {
      this.itemsElement[i].reciveNumber(i);
    }
  }

  @Method()
  async closeAll(actNumber?) {
    this.bdsNavTreeGroupCloseAll.emit();
    for (let i = 0; i < this.itemsElement.length; i++) {
      if (this.collapse != 'multiple') {
        if (actNumber != i) this.itemsElement[i].close();
      } else {
        this.itemsElement[i].close();
      }
    }
  }

  @Method()
  async openAll(actNumber?) {
    this.bdsNavTreeGroupOpenAll.emit();
    for (let i = 0; i < this.itemsElement.length; i++) {
      if (this.collapse != 'multiple') {
        if (actNumber != i) this.itemsElement[i].open();
      } else {
        this.itemsElement[i].open();
      }
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
