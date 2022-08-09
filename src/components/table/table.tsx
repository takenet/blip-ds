import { Component, Host, h, Prop, State, Element } from '@stencil/core';

type Data = {
  [key: string]: any;
};
@Component({
  tag: 'bds-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class Table {
  @Element() el!: HTMLElement;
  /**
   * For keep the Object of header;
   */
  @State() headerData?: Data = [];
  /**
   * For keep the Object of table content.
   */
  @State() tableData?: Data = [];
  /**
   * For keep the state of the prop sort.
   */
  @State() sortAscending: boolean;
  /**
   * Prop to recive the content of the table.
   */
  @Prop() options?: string;
  /**
   * Prop to recive the header and configuration of table.
   */
  @Prop() column?: string;
  /**
   * Prop to activate the possibility of use avatar in any column.
   */
  @Prop() avatar?: boolean = false;
  /**
   * Prop to activate the sorting.
   */
  @Prop() sorting?: boolean = false;

  componentWillLoad() {
    this.getDataFromProprety();
  }

  private getDataFromProprety() {
    if (typeof (this.options == 'string')) {
      this.headerData = JSON.parse(this.column);
      this.tableData = JSON.parse(this.options);
    } else {
      this.headerData = JSON.parse(this.column);
      this.tableData = JSON.parse(this.options);
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
                <th class="header-title" key={index}>
                  {this.sorting ? (
                    <bds-typo
                      class="title-click"
                      onClick={() => this.orderColumn(item.value)}
                      variant="fs-14"
                      bold="regular"
                    >
                      {item.heading}
                    </bds-typo>
                  ) : (
                    <bds-typo variant="fs-14" bold="regular">
                      {item.heading}
                    </bds-typo>
                  )}

                  {this.sortAscending === true && this.sorting ? (
                    <bds-icon name="arrow-up" size="small"></bds-icon>
                  ) : this.sortAscending === false && this.sorting ? (
                    <bds-icon name="arrow-down" size="small"></bds-icon>
                  ) : (
                    ''
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
                        <bds-typo variant="fs-14" bold="regular">
                          {item[itemSplit[0]][itemSplit[1]]}
                        </bds-typo>
                      </td>
                    );
                  }
                  return (
                    <td class="body-item" key={idx}>
                      <bds-typo variant="fs-14" bold="regular">
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
