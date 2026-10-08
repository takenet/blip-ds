import { h } from '@stencil/core';
export class CardBody {
  render() {
    return (h("bds-grid", null, h("slot", null)));
  }
  static get is() { return "bds-card-body"; }
  static get encapsulation() { return "shadow"; }
}
