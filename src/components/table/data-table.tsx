import { Component, Host, h, Prop, State, Element, Event, EventEmitter, Method } from '@stencil/core';

type Data = {
  [key: string]: any;
};
@Component({
  tag: 'bds-data-table',
  styleUrl: 'data-table.scss',
  shadow: true,
})
export class DataTable {
  @Element() el!: HTMLElement;
  @State() newTable: Data = [];
  /**
   * For keep the Object of header;
   */
  @State() headerData?: Data = [];
  /**
   * For keep the Object of table content.
   */
  @State() tableData?: Data[] = [];
  /**
   * For keep the state of the prop sort.
   */
  @State() sortAscending?: boolean;
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
   * Prop to activate the possibility of use chip in any column.
   */
  @Prop() chips?: boolean = false;
  /**
   * Prop to activate the possibility of use chip in any column.
   */
  @Prop() actionArea?: boolean;
  /**
   * Prop to activate the sorting.
   */
  @Prop() sorting?: boolean = false;

  @Event() bdsTableClick: EventEmitter<{
    item: {
      [key: string]: any;
    }; index: number; nameButton: string
  }>;

  @Event() bdsTableDelete: EventEmitter<{
    [key: string]: any;
  }>;

  @Event() bdsTableChange: EventEmitter<{
    [key: string]: any;
  }[]>;

  componentWillLoad() {
    this.getDataFromProprety();
  }

  private getDataFromProprety() {
    this.headerData = JSON.parse(this.column);
    this.tableData = JSON.parse(this.options);
  }

  renderArrow(value) {
    if (value) {
      return <bds-icon name="arrow-up" size="small"></bds-icon>;
    } else {
      return null;
    }
  }

  @Method()
  async deleteItem(index: number) {
    const itemDelete = this.tableData.filter((item, i) => i === index && item);
    this.bdsTableDelete.emit(itemDelete[0]);
    this.tableData.splice(index, 1);
    this.tableData = [...this.tableData];
    this.bdsTableChange.emit(this.tableData);
  }

  clickButton(item: Data, index: number, btn: any) {
    this.bdsTableClick.emit({ item: item, index: index, nameButton: btn });
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
                      bold={this.headerActive === `${item.value}` ? 'bold' : 'semi-bold'}
                    >
                      {item.heading}
                    </bds-typo>
                  ) : (
                    <bds-typo variant="fs-14" bold="semi-bold">
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
                      {this.actionArea && columnItem.editAction ? (
                        <bds-button-icon
                          onClick={() => this.clickButton(item, index, columnItem.editAction)}
                          variant="secondary"
                          icon={item[`${columnItem.editAction}`]}
                          size="short"
                        ></bds-button-icon>
                      ) : (
                        ''
                      )}
                      {this.actionArea && columnItem.deleteAction ? (
                        <bds-button-icon
                          onClick={() => this.clickButton(item, index, columnItem.deleteAction)}
                          variant="secondary"
                          icon={item[`${columnItem.deleteAction}`]}
                          size="short"
                        ></bds-button-icon>
                      ) : (
                        ''
                      )}
                      {this.actionArea && columnItem.customAction ? (
                        <bds-button-icon
                          onClick={() => this.clickButton(item, index, columnItem.customAction)}
                          variant="secondary"
                          icon={item[`${columnItem.customAction}`]}
                          size="short"
                        ></bds-button-icon>
                      ) : (
                        ''
                      )}
                      {this.chips && columnItem.chips ? (
                        <bds-chip-tag color={item[`${columnItem.chips}`] ? item[`${columnItem.chips}`] : 'default'}>
                          {item[`${columnItem.value}`]}
                        </bds-chip-tag>
                      ) : (
                        ''
                      )}
                      {this.avatar && columnItem.img ? (
                        <bds-avatar
                          size="extra-small"
                          thumbnail={item[`${columnItem.img}`]}
                          name={item[`${columnItem.value}`]}
                        ></bds-avatar>
                      ) : (
                        ''
                      )}
                      {columnItem.chips ? (
                        ''
                      ) : (
                        <bds-typo
                          variant="fs-14"
                          bold={this.headerActive === `${columnItem.value}` ? 'bold' : 'regular'}
                        >
                          {item[`${columnItem.value}`]}
                        </bds-typo>
                      )}
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
