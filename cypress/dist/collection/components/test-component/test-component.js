import { h } from '@stencil/core';
export class TestComponent {
  render() {
    return (h("bds-grid", { xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { xxs: "12" }, h("div", { class: "titulo" }, h("bds-typo", { variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { xxs: "6", padding: "r-1" }, h("bds-theme-provider", { theme: "light" }, h("bds-paper", { elevation: "none", border: true }, h("bds-grid", { padding: "2" })))), h("bds-grid", { xxs: "6", padding: "l-1" }, h("bds-theme-provider", { theme: "dark" }, h("bds-paper", { elevation: "none", border: true }, h("bds-grid", { padding: "2" }))))));
  }
  static get is() { return "bds-test-component"; }
  static get originalStyleUrls() {
    return {
      "$": ["test-component.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["test-component.css"]
    };
  }
}
