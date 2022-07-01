import { Component, Host, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'bds-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class Table {
  @Element() el!: HTMLElement;
  @State() headerData?: any = [];
  @State() tableData?: any = [];
  @State() sortedData?: any = [];
  @State() order?: boolean = false;
  @State() sortAscending: boolean;
  @State() bold?: any = 'regular';
  @Prop() options?: any;
  @Prop() column?: any;
  @Prop() check?: boolean = true;
  @Prop() avatar?: boolean = false;

  componentWillLoad() {
    this.getDataFromProprety();
  }

  private getDataFromProprety() {
    if (typeof (this.options == 'string')) {
      this.headerData = JSON.parse(this.column);
      this.tableData = JSON.parse(this.options);
    } else {
      this.headerData = this.column;
      this.tableData = this.options;
    }
  }
  toggleSorting() {
    this.sortAscending = this.sortAscending ? false : true;
  }

  resetSorting() {
    this.sortAscending = undefined;
  }

  orderColumn(idx) {
    this.sortAscending = this.sortAscending ? false : true;

    if (this.sortAscending === false) {
      this.tableData.sort(function (a, b) {
        return a[idx] > b[idx] ? 1 : -1;
      });
    } else {
      this.tableData.sort(function (a, b) {
        return a[idx] > b[idx] ? -1 : 1;
      });
    }
  }

  render() {
    return (
      <Host>
        <table class="table">
          <thead class="thead">
            <tr class="header">
              {this.headerData.map((item, index) => (
                <th class="header-title" key={index} onClick={() => this.orderColumn(item.value)}>
                  <bds-typo variant="fs-14" bold={this.bold}>
                    {item.heading}
                  </bds-typo>
                  {this.sortAscending ? (
                    <bds-icon name="arrow-up" size="small"></bds-icon>
                  ) : (
                    <bds-icon name="arrow-down" size="small"></bds-icon>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.tableData.map((item, index) => (
              <tr class="body-row" key={index}>
                {this.headerData.map((columnItem, idx) => {
                  if (columnItem.value.includes('.') && columnItem.value[0]) {
                    const itemSplit = columnItem.value.split('.');
                    const imgSplit = columnItem.img.split('.');
                    return (
                      <td class="body-item">
                        {this.avatar && (
                          <bds-avatar
                            size="extra-small"
                            thumbnail={item[itemSplit[0]][imgSplit[0]]}
                            name={item[itemSplit[0]][itemSplit[1]]}
                          ></bds-avatar>
                        )}
                        <bds-typo variant="fs-14" bold={this.bold}>
                          {item[itemSplit[0]][itemSplit[1]]}
                        </bds-typo>
                      </td>
                    );
                  }
                  return (
                    <td class="body-item" key={idx}>
                      <bds-typo variant="fs-14" bold={this.bold}>
                        {item[`${columnItem.value}`]}
                      </bds-typo>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </Host>
    );
  }
}
