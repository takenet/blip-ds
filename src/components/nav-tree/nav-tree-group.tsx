import { Component, Host, Element, State, Prop, h, Method } from '@stencil/core';

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
   * Focus Selected. Used to add title in header accordion.
   */
  @Prop() collapse?: collapses = 'single';

  componentWillRender() {
    this.itemsElement = this.element.getElementsByTagName('bds-nav-tree') as HTMLCollectionOf<HTMLBdsNavTreeElement>;
    for (let i = 0; i < this.itemsElement.length; i++) {
      this.itemsElement[i].reciveNumber(i);
    }
  }

  @Method()
  async closeAll(actNumber?) {
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
