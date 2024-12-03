import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'bds-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class Breadcrumb {
  @Prop() items: string | Array<{ label: string; href?: string }> = [];

  @State() parsedItems: Array<{ label: string; href?: string }> = [];

  @Watch('items')
  parseItems(newValue: string | Array<{ label: string; href?: string }>) {
    if (typeof newValue === 'string') {
      try {
        this.parsedItems = JSON.parse(newValue);
      } catch (error) {
        this.parsedItems = [];
      }
    } else {
      this.parsedItems = newValue;
    }
  }

  componentWillLoad() {
    this.parseItems(this.items);
  }

  @Prop() maxVisible: number = 3;

  @State() isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  render() {
    if (!this.parsedItems || this.parsedItems.length === 0) {
      return <p>Sem itens para exibir no Breadcrumb.</p>;
    }

    const visibleItems =
      this.parsedItems.length <= this.maxVisible
        ? this.parsedItems
        : [
          this.parsedItems[0],
          { label: '...', href: null },
          this.parsedItems[this.parsedItems.length - 1],
        ];

    return (
      <nav aria-label="breadcrumb">
        <bds-grid direction="row" align-items="center">
          {visibleItems.map((item, index) => (
            <bds-grid
              class={{
                breadcrumb__item: true,
                'breadcrumb__item--active': index === visibleItems.length - 1,
              }}
              aria-current={index === visibleItems.length - 1 ? 'page' : null}
            >
              {item.label === '...' ? (
                <bds-dropdown active-mode="click" position="auto">
                  <bds-grid slot="dropdown-content">
                    <bds-grid direction='column' padding='1' gap="half">
                      {this.parsedItems.slice(1, -1).map((subItem, index) => (
                        <bds-grid>
                          {subItem.href ? (
                            <a href={subItem.href} class={`breadcrumb__button--${index} breadcrumb__link`}>
                              <bds-grid align-items='center' gap='half'>
                                <bds-icon name="reply" theme='outline' class="button--icon" size='x-small'></bds-icon>
                                <bds-button variant="text" color='content' size='short'>
                                  {subItem.label}
                                </bds-button>
                              </bds-grid>

                            </a>
                          ) : (
                            <span>{subItem.label}</span>
                          )}
                        </bds-grid>
                      ))}
                    </bds-grid>
                  </bds-grid>
                  <bds-grid slot="dropdown-activator">
                    <bds-button
                      variant="text"
                      color="content"
                      size="short"
                      onClick={() => this.toggleDropdown()}
                      icon-left="more-options-horizontal"
                    ></bds-button>
                  </bds-grid>
                </bds-dropdown>
              ) : item.href ? (
                <bds-grid direction="row">
                  <bds-typo variant="fs-12" margin={false} class="breadcrumb__link--text">
                    <a href={item.href} class="breadcrumb__link">
                      {item.label}
                    </a>
                  </bds-typo>
                  <bds-icon name="arrow-right" size="x-small"></bds-icon>
                </bds-grid>
              ) : (
                <bds-grid direction="row">
                  <bds-icon name="arrow-right" size="x-small"></bds-icon>
                  <bds-typo variant="fs-12" bold="semi-bold" margin={false}>
                    {item.label}
                  </bds-typo>
                </bds-grid>
              )}
            </bds-grid>
          ))}
        </bds-grid>
      </nav>
    );
  }
}
