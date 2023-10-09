import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bds-card-subtitle',
  shadow: true,
})
export class CardSubtitle {
  /**
   *Set the card title.
   */
  @Prop() text?: string;
  render() {
    return (
      <bds-typo variant="fs-12" tag="p" bold="regular" margin={false}>
        {this.text}
      </bds-typo>
    );
  }
}
