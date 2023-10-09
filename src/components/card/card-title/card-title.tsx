import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bds-card-title',
  styleUrl: 'card-title.scss',
  shadow: true,
})
export class CardTitle {
  /**
   *Set the card title.
   */
  @Prop() text?: string;

  render() {
    return (
      <bds-typo variant="fs-20" tag="h4" margin={false} bold="bold">
        {this.text}
      </bds-typo>
    );
  }
}
