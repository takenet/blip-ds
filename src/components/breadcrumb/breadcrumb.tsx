import { Component, h, Prop, State, Watch, Element } from '@stencil/core';

@Component({
  tag: 'bds-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class Breadcrumb {
  @Element() hostElement: HTMLElement;
  @Prop() items: string | Array<{ label: string; href?: string }> = [];

  @Prop() wrapItems: boolean | string = true;

  // internal normalized boolean value to avoid re-assigning the prop inside its watcher
  private wrapItemsBool: boolean = true;

  @Watch('wrapItems')
  handleWrapItemsChange(newValue: boolean | string) {
    if (typeof newValue === 'string') {
      if (newValue === 'true') this.wrapItemsBool = true;
      else if (newValue === 'false') this.wrapItemsBool = false;
      else if (newValue === '') this.wrapItemsBool = true; // presence-only attribute => true
      else this.wrapItemsBool = !!newValue;
    } else {
      this.wrapItemsBool = !!newValue;
    }
  }

  @State() parsedItems: Array<{ label: string; href?: string }> = [];

  @State() isDropdownOpen: boolean = false;

  @Watch('items')
  parseItems(newValue: string | Array<{ label: string; href?: string }>) {
    if (typeof newValue === 'string') {
      try {
        this.parsedItems = JSON.parse(newValue);
      } catch {
        this.parsedItems = [];
      }
    } else {
      this.parsedItems = newValue;
    }
  }

  componentWillLoad() {
    this.parseItems(this.items);
    // Normalize initial wrapItems value with preference for explicit attribute
    const attr = this.hostElement.getAttribute('wrap-items');
    if (attr === null) {
      // attribute absent — use the prop value (could be boolean or string)
      this.handleWrapItemsChange(this.wrapItems);
    } else if (attr === '') {
      // presence-only attribute means true
      this.wrapItemsBool = true;
    } else if (attr === 'false') {
      this.wrapItemsBool = false;
    } else if (attr === 'true') {
      this.wrapItemsBool = true;
    } else {
      this.wrapItemsBool = !!attr;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  render() {
    if (!this.parsedItems || this.parsedItems.length === 0) {
      return <p>Sem itens para exibir no Breadcrumb.</p>;
    }

    const visibleItems =
      this.wrapItemsBool && this.parsedItems.length > 3
        ? [
          this.parsedItems[0],
          { label: '...', href: null },
          this.parsedItems[this.parsedItems.length - 1],
        ]
        : this.parsedItems;

    const renderBreadcrumbItem = (item: { label: string; href?: string | null }, index: number) => {
      const isLastItem = index === visibleItems.length - 1;
      const renderBasedOnLabel = (item: { label: string; href?: string | null }) => {

        if (item.label === '...') {
          return (
            <bds-dropdown active-mode="click" position="auto">
              <bds-grid slot="dropdown-content">
                <bds-grid direction="column" padding="1" gap="half">
                  {this.parsedItems.slice(1, -1).map((subItem, idx) => (
                    <bds-grid class={`breadcrumb__button--${idx}`} key={subItem.label + idx}>
                      {subItem.href ? (
                        <a
                          href={subItem.href}
                          class={`breadcrumb__link breadcrumb__button--${idx}`}
                        >
                          <bds-grid align-items="center" gap="half">
                            <bds-icon
                              name="reply"
                              theme="outline"
                              class="button--icon"
                              size="x-small"
                            ></bds-icon>
                            <bds-button
                              variant="text"
                              color="content"
                              size="short"
                            >
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
              <bds-grid slot="dropdown-activator" align-items="center">
                <bds-button
                  variant="text"
                  color="content"
                  size="short"
                  onClick={() => this.toggleDropdown()}
                  icon-left="more-options-horizontal"
                ></bds-button>
              </bds-grid>
            </bds-dropdown>
          );
        }

        if (item.href) {
          return (
            <bds-typo
              variant="fs-20"
              margin={false}
              class="breadcrumb__link--text"
            >
              <a href={item.href} class="breadcrumb__link breadcrumb__text">
                {item.label}
              </a>
            </bds-typo>
          );
        }

        return (
          <bds-typo variant="fs-20" bold={isLastItem ? 'bold' : 'regular'} margin={false} class="breadcrumb__text">
            {item.label}
          </bds-typo>
        )
      }

      return (
        <bds-grid
          class={{
            breadcrumb__item: true,
            'breadcrumb__item--active': isLastItem,
          }}
          aria-current={isLastItem ? 'page' : null}
          key={item.label + index}
          align-items="center"
        >
          <bds-grid direction="row" align-items="center" padding="x-1">
            <bds-grid direction="row" align-items="center" padding="y-half">
              {renderBasedOnLabel(item)}
            </bds-grid>
          </bds-grid>
          {!isLastItem && <bds-icon name="arrow-right" size="medium" class="breadcrumb__text"></bds-icon>}
        </bds-grid>
      )
    }

    return (
      <nav aria-label="breadcrumb">
        <bds-grid direction="row" align-items="center">
          {visibleItems.map((element, index) => renderBreadcrumbItem(element, index))}
        </bds-grid>
      </nav>
    );
  }
}
