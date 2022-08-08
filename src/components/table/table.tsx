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
   * For keep the state of the prop sort.
   */
  @State() headerActive: string;
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

  renderArrow(value) {
    if (value) {
      return <bds-icon name="arrow-up" size="small"></bds-icon>;
    } else {
      return null;
    }
  }

  orderColumn(idx) {
    this.headerActive = idx;
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
                      bold={this.headerActive === `${item.value}` ? 'bold' : 'regular'}
                    >
                      {item.heading}
                    </bds-typo>
                  ) : (
                    <bds-typo variant="fs-14" bold="regular">
                      {item.heading}
                    </bds-typo>
                  )}
                  {this.sortAscending === true && this.sorting === true && this.headerActive === `${item.value}` ? (
                    <bds-icon class="header-icon" name="arrow-up" size="small"></bds-icon>
                  ) : this.sortAscending === false && this.sorting === true && this.headerActive === `${item.value}` ? (
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
                  return (
                    <td class="body-item" key={idx}>
                      {this.avatar && columnItem.img ? (
                        <bds-avatar
                          size="extra-small"
                          thumbnail={item[`${columnItem.thumb}`]}
                          name={item[`${columnItem.value}`]}
                        ></bds-avatar>
                      ) : (
                        ''
                      )}
                      <bds-typo variant="fs-14" bold={this.headerActive === `${columnItem.value}` ? 'bold' : 'regular'}>
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
