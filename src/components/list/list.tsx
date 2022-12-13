import { Element, Component, Host, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';

export type TypeList = 'checkbox' | 'radio' | 'switch' | 'default';

@Component({
  tag: 'bds-list',
  styleUrl: 'list.scss',
  shadow: true,
})
export class List {
  private itemListElement?: HTMLCollectionOf<HTMLBdsListItemElement> = null;

  @Element() private element: HTMLElement;

  @Prop() typeList?: TypeList = 'default';

  /**
   * The value of the selected radio
   */
  @Prop({ mutable: true, reflect: true }) value?: string;

  /**
   * Emitted when the value has changed because of a click event.
   */
  @Event() bdsListChange!: EventEmitter;

  componentWillRender() {
    this.itemListElement = this.element.getElementsByTagName(
      'bds-list-item'
    ) as HTMLCollectionOf<HTMLBdsListItemElement>;

    for (let i = 0; i < this.itemListElement.length; i++) {
      this.itemListElement[i].typeList = this.typeList;
      if (this.typeList == 'radio') {
        this.itemListElement[i].addEventListener('bdsChange', (event: CustomEvent) =>
          this.chagedOptions(this.itemListElement[i].value, event)
        );
      } else if (this.typeList == 'checkbox' || this.typeList == 'switch') {
        this.itemListElement[i].addEventListener('bdsChange', () => this.setSelectedCheckbox());
      }
    }
  }

  @Watch('value')
  valueChanged(value: string) {
    if (this.typeList == 'radio') {
      this.setSelectedRadio(value);
    }
  }

  private chagedOptions = (value: string, event: CustomEvent): void => {
    if (event.detail.checked == true) {
      this.value = value;
    }
  };

  private setSelectedRadio(value: string) {
    const radios = this.itemListElement;
    for (let i = 0; i < radios.length; i++) {
      const getValue = radios[i].value;
      radios[i].checked = false;
      if (radios[i].checked == false && value == getValue) {
        radios[i].checked = true;
        const construct = {
          value: radios[i].value,
          text: radios[i]?.text,
          secondaryText: radios[i]?.secondaryText,
          avatarName: radios[i]?.avatarName,
          avatarThumbnail: radios[i]?.avatarThumbnail,
          typeList: radios[i]?.typeList,
        };
        this.bdsListChange.emit(construct);
      }
    }
  }

  private setSelectedCheckbox() {
    const checkboxs = this.itemListElement;
    const itens = Array.from(checkboxs);
    const result = itens
      .filter((item) => item.checked)
      .map((term) => ({
        value: term.value,
        text: term?.text,
        secondaryText: term?.secondaryText,
        avatarName: term?.avatarName,
        avatarThumbnail: term?.avatarThumbnail,
        typeList: term?.typeList,
      }));
    this.bdsListChange.emit(result);
  }

  render() {
    return (
      <Host>
        <div
          class={{
            list: true,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
