import { EventEmitter } from '../../stencil-public-runtime';
import { UaiBreadcrumbEditDetail, UaiBreadcrumbItem, UaiBreadcrumbLabels, UaiBreadcrumbLanguage } from '../uai-breadcrumb/uai-breadcrumb';
export type UaiPageHeaderLevel = 'primary' | 'secondary';
/**
 * Page title or hierarchical navigation with consumer-owned actions. Use one per page; pair with UaiButton;
 * avoid embedding product persistence or global application navigation.
 *
 * @slot actions - Page actions. Use UaiButton; pair with loading/disabled; avoid rebuilding native controls.
 */
export declare class UaiPageHeader {
    /**
     * Visual composition. Use primary for title and secondary for breadcrumb; pair with items; avoid treating it as a depth limit.
     */
    level: UaiPageHeaderLevel;
    /**
     * Primary page title. Use with level primary; pair with actions; avoid expecting a secondary breadcrumb fallback.
     */
    title: string;
    /**
     * Secondary breadcrumb items, as JSON or array. Use ancestor-to-current order; pair with level secondary; avoid context selectors.
     */
    items: string | UaiBreadcrumbItem[];
    /**
     * Collapses intermediate breadcrumb items above three. Use false to show all; pair with items; avoid imposing a depth limit.
     */
    wrapItems: boolean;
    /**
     * Enables editing of the secondary breadcrumb's current item. Use with the edit event; pair with items; avoid editing primary title.
     */
    editable: boolean;
    /**
     * Language for breadcrumb messages. Use a supported locale; pair with labels; avoid translating consumer-provided titles implicitly.
     */
    language: UaiBreadcrumbLanguage;
    /**
     * Partial breadcrumb text overrides. Use for accessible names; pair with language; avoid empty action names.
     */
    labels?: Partial<UaiBreadcrumbLabels>;
    /**
     * Native link activation bubbling from the breadcrumb. Use to observe navigation; pair with items; avoid re-emitting it.
     */
    uaiBreadcrumbItemClick: EventEmitter<UaiBreadcrumbItem>;
    /**
     * Rename request bubbling from the breadcrumb. Use to update items; pair with editable; avoid assuming persistence succeeded.
     */
    uaiBreadcrumbItemEdit: EventEmitter<UaiBreadcrumbEditDetail>;
    render(): any;
}
