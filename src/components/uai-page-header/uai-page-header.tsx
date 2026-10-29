import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import {
  UaiBreadcrumbEditDetail,
  UaiBreadcrumbItem,
  UaiBreadcrumbLabels,
  UaiBreadcrumbLanguage,
} from '../uai-breadcrumb/uai-breadcrumb';
import { warnLegacyValue } from '../../utils/deprecation';

export type UaiPageHeaderLevel = 'primary' | 'secondary';

/**
 * Page title or hierarchical navigation with consumer-owned actions. Use one per page; pair with UaiButton;
 * avoid embedding product persistence or global application navigation.
 *
 * @slot actions - Page actions. Use UaiButton; pair with loading/disabled; avoid rebuilding native controls.
 */
@Component({
  tag: 'uai-page-header',
  styleUrl: 'uai-page-header.scss',
  shadow: true,
})
export class UaiPageHeader {
  /**
   * Visual composition. Use primary for title and secondary for breadcrumb; pair with items; avoid treating it as a depth limit.
   */
  @Prop() level: UaiPageHeaderLevel = 'primary';

  /**
   * Primary page title. Use with level primary; pair with actions; avoid expecting a secondary breadcrumb fallback.
   */
  @Prop() title: string = '';

  /**
   * Secondary breadcrumb items, as JSON or array. Use ancestor-to-current order; pair with level secondary; avoid context selectors.
   */
  @Prop() items: string | UaiBreadcrumbItem[] = [];

  /**
   * Collapses intermediate breadcrumb items above three. Use false to show all; pair with items; avoid imposing a depth limit.
   */
  @Prop() wrapItems: boolean = true;

  /**
   * Enables editing of the secondary breadcrumb's current item. Use with the edit event; pair with items; avoid editing primary title.
   */
  @Prop() editable: boolean = false;

  /**
   * Language for breadcrumb messages. Use a supported locale; pair with labels; avoid translating consumer-provided titles implicitly.
   */
  @Prop() language: UaiBreadcrumbLanguage = 'pt_BR';

  /**
   * Partial breadcrumb text overrides. Use for accessible names; pair with language; avoid empty action names.
   */
  @Prop() labels?: Partial<UaiBreadcrumbLabels>;

  /**
   * Native link activation bubbling from the breadcrumb. Use to observe navigation; pair with items; avoid re-emitting it.
   */
  @Event({ bubbles: true, composed: true }) uaiBreadcrumbItemClick!: EventEmitter<UaiBreadcrumbItem>;

  /**
   * Rename request bubbling from the breadcrumb. Use to update items; pair with editable; avoid assuming persistence succeeded.
   */
  @Event({ bubbles: true, composed: true }) uaiBreadcrumbItemEdit!: EventEmitter<UaiBreadcrumbEditDetail>;

  render() {
    let level = this.level;
    if (level !== 'primary' && level !== 'secondary') {
      warnLegacyValue('uai-page-header', 'level', level, 'primary');
      level = 'primary';
    }
    return (
      <header class="header">
        <div class="header__main">
          {level === 'primary' ? (
            <uai-typo class="header__title" tag="h1" variant="title-md" bold="semibold" margin={false}>
              {this.title}
            </uai-typo>
          ) : (
            <uai-breadcrumb
              items={this.items}
              wrapItems={this.wrapItems}
              editable={this.editable}
              language={this.language}
              labels={this.labels}
              currentHeadingLevel={1}
            />
          )}
        </div>
        <div class="header__actions">
          <slot name="actions" />
        </div>
      </header>
    );
  }
}
