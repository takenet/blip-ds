import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'bds-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class Breadcrumb {
  @Prop() items: string | Array<{ label: string; href?: string }> = [];

  @Prop() wrapItems: boolean = true;

  @State() parsedItems: Array<{ label: string; href?: string }> = [];

  @State() isDropdownOpen: boolean = false;

  private handleDropdownToggle = (event: CustomEvent<{ value: boolean }>) => {
    const nextOpen = !!event?.detail?.value;
    if (nextOpen === this.isDropdownOpen) return;
    this.isDropdownOpen = nextOpen;
  };

  private handleActivatorPointer = (event: MouseEvent) => {
    event.stopPropagation();
  };

  @Watch('items')
  parseItems(newValue: string | Array<{ label: string; href?: string }>) {
    if (typeof newValue === 'string') {
      try {
        this.parsedItems = JSON.parse(newValue);
      } catch (error) {
        console.warn('[bds-breadcrumb] Failed to parse items:', error);
        this.parsedItems = [];
      }
    } else {
      this.parsedItems = newValue;
    }
  }

  private renderCollapsedDropdown() {
    return (
      <bds-dropdown
        position="auto"
        open={this.isDropdownOpen}
        onBdsToggle={this.handleDropdownToggle}
      >
        <bds-grid slot="dropdown-content">
          <bds-grid direction="column" padding="1" gap="half">
            {this.parsedItems.slice(1, -1).map((subItem, idx) => (
              <bds-grid class={`breadcrumb__button--${idx}`} key={subItem.label + idx}>
                {subItem.href ? (
                  <a
                    href={subItem.href}
                    class="breadcrumb__link"
                  >
                    <bds-grid align-items="center" gap="half">
                      <bds-icon
                        name="reply"
                        theme="outline"
                        class="button--icon"
                        size="x-small"
                      ></bds-icon>
                      <bds-typo variant="fs-16" margin={false} class="breadcrumb__text">
                        {subItem.label}
                      </bds-typo>
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
            icon-left="more-options-horizontal"
            onMouseDown={this.handleActivatorPointer}
            onClick={this.handleActivatorPointer}
            aria-label="Mostrar itens ocultos do breadcrumb"
          ></bds-button>
        </bds-grid>
      </bds-dropdown>
    );
  }

  private renderItemContent(item: { label: string; href?: string | null }, isCurrent: boolean) {
    if (item.label === '...') {
      return this.renderCollapsedDropdown();
    }

    if (item.href) {
      return (
        <bds-typo
          variant="fs-20"
          margin={false}
          class="breadcrumb__link--text"
        >
          <a
            href={item.href}
            class="breadcrumb__link breadcrumb__text"
            aria-current={isCurrent ? 'page' : null}
          >
            {item.label}
          </a>
        </bds-typo>
      );
    }

    return (
      <bds-typo
        variant="fs-20"
        bold={isCurrent ? 'bold' : 'regular'}
        margin={false}
        class="breadcrumb__text"
        aria-current={isCurrent ? 'page' : null}
      >
        {item.label}
      </bds-typo>
    )
  }

  private renderBreadcrumbItem(item: { label: string; href?: string | null }, index: number, items: Array<{ label: string; href?: string | null }>) {
    const isLastItem = index === items.length - 1;

    return (
      <bds-grid
        class={{
          breadcrumb__item: true,
          'breadcrumb__item--active': isLastItem,
        }}
        key={item.label + index}
        align-items="center"
      >
        <bds-grid direction="row" align-items="center" padding="x-1">
          <bds-grid direction="row" align-items="center" padding="y-half">
            {this.renderItemContent(item, isLastItem)}
          </bds-grid>
        </bds-grid>
        {!isLastItem && <bds-icon name="arrow-right" size="medium" class="breadcrumb__text"></bds-icon>}
      </bds-grid>
    )
  }

  componentWillLoad() {
    this.parseItems(this.items);
  }

  render() {
    if (!this.parsedItems || this.parsedItems.length === 0) {
      return <p>Sem itens para exibir no Breadcrumb.</p>;
    }

    const visibleItems: Array<{ label: string; href?: string | null }> =
      this.wrapItems && this.parsedItems.length > 3
        ? [
            this.parsedItems[0],
            { label: '...', href: undefined },
            this.parsedItems[this.parsedItems.length - 1],
          ]
        : this.parsedItems;

    return (
      <nav aria-label="breadcrumb">
        <bds-grid direction="row" align-items="center">
          {visibleItems.map((element, index) => this.renderBreadcrumbItem(element, index, visibleItems))}
        </bds-grid>
      </nav>
    );
  }
}
