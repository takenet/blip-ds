import { h, Host } from '@stencil/core';
export class TableRow {
  constructor() {
    this.toggleCollapse = (target) => {
      if (this.collapse) {
        const body = document.querySelector(`[body-collapse="${target}"]`);
        body.classList.toggle('collapse');
        this.isCollapsed = !this.isCollapsed;
      }
    };
    this.isDense = false;
    this.collapse = undefined;
    this.isCollapsed = true;
    this.colspanNumber = null;
    this.bdsTable = undefined;
    this.collapseRow = undefined;
    this.clickable = false;
    this.selected = false;
    this.bodyCollapse = undefined;
    this.dataTarget = undefined;
  }
  componentWillLoad() {
    this.bdsTable = this.element.closest('bds-table');
    this.collapseRow = document.querySelector(`[body-collapse="${this.dataTarget}"]`);
    this.colspanNumber = document.querySelector(`bds-table-row`).children.length;
    if (this.bdsTable && (this.bdsTable.getAttribute('dense-table') === 'true' || this.bdsTable.denseTable === true)) {
      this.isDense = true;
    }
    if (this.bdsTable && (this.bdsTable.getAttribute('collapse') === 'true' || this.bdsTable.collapse === true)) {
      this.collapse = true;
      this.clickable = true;
    }
    if (this.collapseRow) {
      this.collapseRow.classList.add('collapse');
      this.collapseRow.classList.add('collapse-body');
    }
  }
  componentWillUpdate() {
    const bdsTable = this.element.closest('bds-table');
    if (bdsTable && (bdsTable.getAttribute('dense-table') === 'true' || bdsTable.denseTable === true)) {
      this.isDense = true;
    }
  }
  render() {
    if (this.bodyCollapse) {
      return (h("th", { colSpan: this.colspanNumber }, h("div", { class: "collapse-body" }, h("slot", null))));
    }
    else {
      const isFirstRow = this.element.closest('bds-table-header') === this.element.parentElement;
      return (h(Host, { class: {
          host: true,
          [`clickable--${this.clickable}`]: !isFirstRow && this.clickable === true ? true : false,
          [`selected--${this.selected}`]: true,
          'dense-row': this.isDense,
        }, onClick: () => this.toggleCollapse(this.dataTarget) }, this.collapse && (h("bds-table-cell", { type: "custom" }, !isFirstRow && h("bds-icon", { class: { arrow: true, active: this.isCollapsed }, name: "arrow-down" }))), h("slot", null)));
    }
  }
  static get is() { return "bds-table-row"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["table-row.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["table-row.css"]
    };
  }
  static get properties() {
    return {
      "clickable": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Prop to make hover animation."
        },
        "attribute": "clickable",
        "reflect": true,
        "defaultValue": "false"
      },
      "selected": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Prop to highlight the row selected."
        },
        "attribute": "selected",
        "reflect": false,
        "defaultValue": "false"
      },
      "bodyCollapse": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "body-collapse",
        "reflect": false
      },
      "dataTarget": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "data-target",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isDense": {},
      "collapse": {},
      "isCollapsed": {},
      "colspanNumber": {},
      "bdsTable": {},
      "collapseRow": {}
    };
  }
  static get elementRef() { return "element"; }
}
