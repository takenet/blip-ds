import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { type AutocompleteChangeEventDetail, type AutocompleteMultiSelectedChangeEventDetail, type AutocompleteSelectedChangeEventDetail, type BdsAccordionCustomEvent, type BdsAccordionGroupCustomEvent, type BdsAlertCustomEvent, type BdsAutocompleteCustomEvent, type BdsAvatarCustomEvent, type BdsAvatarGroupCustomEvent, type BdsBannerCustomEvent, type BdsBannerLinkCustomEvent, type BdsButtonCustomEvent, type BdsButtonGroupCustomEvent, type BdsButtonIconCustomEvent, type BdsCardCustomEvent, type BdsCarouselCustomEvent, type BdsCheckboxCustomEvent, type BdsChipClickableCustomEvent, type BdsChipCustomEvent, type BdsChipSelectedCustomEvent, type BdsDataTableCustomEvent, type BdsDatepickerCustomEvent, type BdsDatepickerPeriodCustomEvent, type BdsDatepickerSingleCustomEvent, type BdsDropdownCustomEvent, type BdsInputChipsCustomEvent, type BdsInputCustomEvent, type BdsInputEditableCustomEvent, type BdsInputPasswordCustomEvent, type BdsInputPhoneNumberCustomEvent, type BdsListCustomEvent, type BdsListItemCustomEvent, type BdsMenuCustomEvent, type BdsModalCustomEvent, type BdsNavTreeCustomEvent, type BdsNavTreeGroupCustomEvent, type BdsNavTreeItemCustomEvent, type BdsPaginationCustomEvent, type BdsRadioCustomEvent, type BdsRadioGroupCustomEvent, type BdsRichTextCustomEvent, type BdsSelectChipsCustomEvent, type BdsSelectCustomEvent, type BdsSelectOptionCustomEvent, type BdsSidebarCustomEvent, type BdsSliderCustomEvent, type BdsSwitchCustomEvent, type BdsTabCustomEvent, type BdsTabGroupCustomEvent, type BdsTabItemCustomEvent, type BdsTabsCustomEvent, type BdsToastCustomEvent, type BdsUploadCustomEvent, type InputEditableEventDetail, type Itens, type Overflow, type SelectChangeEvent, type SelectChangeEventDetail, type TypeList, type UaiButtonCustomEvent, type UaiInputChipsChange, type UaiInputChipsCustomEvent, type UaiInputCustomEvent, type UaiInputDateCustomEvent, type UaiInputPasswordCustomEvent, type UaiInputPhoneCustomEvent, type UaiPhoneNumberChange, type UaiTextareaCustomEvent, type stateSelect } from "blip-ds";
import type { Components } from "blip-ds/dist/components";
import { BdsAccordionBody as BdsAccordionBodyElement } from "blip-ds/dist/components/bds-accordion-body.js";
import { BdsAccordionGroup as BdsAccordionGroupElement } from "blip-ds/dist/components/bds-accordion-group.js";
import { BdsAccordionHeader as BdsAccordionHeaderElement } from "blip-ds/dist/components/bds-accordion-header.js";
import { BdsAccordion as BdsAccordionElement } from "blip-ds/dist/components/bds-accordion.js";
import { BdsAlertActions as BdsAlertActionsElement } from "blip-ds/dist/components/bds-alert-actions.js";
import { BdsAlertBody as BdsAlertBodyElement } from "blip-ds/dist/components/bds-alert-body.js";
import { BdsAlertHeader as BdsAlertHeaderElement } from "blip-ds/dist/components/bds-alert-header.js";
import { BdsAlert as BdsAlertElement } from "blip-ds/dist/components/bds-alert.js";
import { BdsAutocomplete as BdsAutocompleteElement } from "blip-ds/dist/components/bds-autocomplete.js";
import { BdsAvatarGroup as BdsAvatarGroupElement } from "blip-ds/dist/components/bds-avatar-group.js";
import { BdsAvatar as BdsAvatarElement } from "blip-ds/dist/components/bds-avatar.js";
import { BdsBadge as BdsBadgeElement } from "blip-ds/dist/components/bds-badge.js";
import { BdsBannerLink as BdsBannerLinkElement } from "blip-ds/dist/components/bds-banner-link.js";
import { BdsBanner as BdsBannerElement } from "blip-ds/dist/components/bds-banner.js";
import { BdsBreadcrumb as BdsBreadcrumbElement } from "blip-ds/dist/components/bds-breadcrumb.js";
import { BdsButtonGroup as BdsButtonGroupElement } from "blip-ds/dist/components/bds-button-group.js";
import { BdsButtonIcon as BdsButtonIconElement } from "blip-ds/dist/components/bds-button-icon.js";
import { BdsButton as BdsButtonElement } from "blip-ds/dist/components/bds-button.js";
import { BdsCardBody as BdsCardBodyElement } from "blip-ds/dist/components/bds-card-body.js";
import { BdsCardColor as BdsCardColorElement } from "blip-ds/dist/components/bds-card-color.js";
import { BdsCardFooter as BdsCardFooterElement } from "blip-ds/dist/components/bds-card-footer.js";
import { BdsCardHeader as BdsCardHeaderElement } from "blip-ds/dist/components/bds-card-header.js";
import { BdsCardSubtitle as BdsCardSubtitleElement } from "blip-ds/dist/components/bds-card-subtitle.js";
import { BdsCardTitle as BdsCardTitleElement } from "blip-ds/dist/components/bds-card-title.js";
import { BdsCard as BdsCardElement } from "blip-ds/dist/components/bds-card.js";
import { BdsCarouselItem as BdsCarouselItemElement } from "blip-ds/dist/components/bds-carousel-item.js";
import { BdsCarousel as BdsCarouselElement } from "blip-ds/dist/components/bds-carousel.js";
import { BdsCheckbox as BdsCheckboxElement } from "blip-ds/dist/components/bds-checkbox.js";
import { BdsChipClickable as BdsChipClickableElement } from "blip-ds/dist/components/bds-chip-clickable.js";
import { BdsChipSelected as BdsChipSelectedElement } from "blip-ds/dist/components/bds-chip-selected.js";
import { BdsChipTag as BdsChipTagElement } from "blip-ds/dist/components/bds-chip-tag.js";
import { BdsChip as BdsChipElement } from "blip-ds/dist/components/bds-chip.js";
import { BdsCounterText as BdsCounterTextElement } from "blip-ds/dist/components/bds-counter-text.js";
import { BdsDataTable as BdsDataTableElement } from "blip-ds/dist/components/bds-data-table.js";
import { BdsDatepickerPeriod as BdsDatepickerPeriodElement } from "blip-ds/dist/components/bds-datepicker-period.js";
import { BdsDatepickerSingle as BdsDatepickerSingleElement } from "blip-ds/dist/components/bds-datepicker-single.js";
import { BdsDatepicker as BdsDatepickerElement } from "blip-ds/dist/components/bds-datepicker.js";
import { BdsDivider as BdsDividerElement } from "blip-ds/dist/components/bds-divider.js";
import { BdsDropdown as BdsDropdownElement } from "blip-ds/dist/components/bds-dropdown.js";
import { BdsExpansionPanelBody as BdsExpansionPanelBodyElement } from "blip-ds/dist/components/bds-expansion-panel-body.js";
import { BdsExpansionPanelHeader as BdsExpansionPanelHeaderElement } from "blip-ds/dist/components/bds-expansion-panel-header.js";
import { BdsExpansionPanel as BdsExpansionPanelElement } from "blip-ds/dist/components/bds-expansion-panel.js";
import { BdsGrid as BdsGridElement } from "blip-ds/dist/components/bds-grid.js";
import { BdsIcon as BdsIconElement } from "blip-ds/dist/components/bds-icon.js";
import { BdsIllustration as BdsIllustrationElement } from "blip-ds/dist/components/bds-illustration.js";
import { BdsImage as BdsImageElement } from "blip-ds/dist/components/bds-image.js";
import { BdsInputChips as BdsInputChipsElement } from "blip-ds/dist/components/bds-input-chips.js";
import { BdsInputEditable as BdsInputEditableElement } from "blip-ds/dist/components/bds-input-editable.js";
import { BdsInputPassword as BdsInputPasswordElement } from "blip-ds/dist/components/bds-input-password.js";
import { BdsInputPhoneNumber as BdsInputPhoneNumberElement } from "blip-ds/dist/components/bds-input-phone-number.js";
import { BdsInput as BdsInputElement } from "blip-ds/dist/components/bds-input.js";
import { BdsListItemContent as BdsListItemContentElement } from "blip-ds/dist/components/bds-list-item-content.js";
import { BdsListItem as BdsListItemElement } from "blip-ds/dist/components/bds-list-item.js";
import { BdsList as BdsListElement } from "blip-ds/dist/components/bds-list.js";
import { BdsLoadingBar as BdsLoadingBarElement } from "blip-ds/dist/components/bds-loading-bar.js";
import { BdsLoadingPage as BdsLoadingPageElement } from "blip-ds/dist/components/bds-loading-page.js";
import { BdsLoadingSpinner as BdsLoadingSpinnerElement } from "blip-ds/dist/components/bds-loading-spinner.js";
import { BdsMenuAction as BdsMenuActionElement } from "blip-ds/dist/components/bds-menu-action.js";
import { BdsMenuExibition as BdsMenuExibitionElement } from "blip-ds/dist/components/bds-menu-exibition.js";
import { BdsMenuListItem as BdsMenuListItemElement } from "blip-ds/dist/components/bds-menu-list-item.js";
import { BdsMenuList as BdsMenuListElement } from "blip-ds/dist/components/bds-menu-list.js";
import { BdsMenuSeparation as BdsMenuSeparationElement } from "blip-ds/dist/components/bds-menu-separation.js";
import { BdsMenu as BdsMenuElement } from "blip-ds/dist/components/bds-menu.js";
import { BdsModalAction as BdsModalActionElement } from "blip-ds/dist/components/bds-modal-action.js";
import { BdsModalCloseButton as BdsModalCloseButtonElement } from "blip-ds/dist/components/bds-modal-close-button.js";
import { BdsModal as BdsModalElement } from "blip-ds/dist/components/bds-modal.js";
import { BdsNavTreeGroup as BdsNavTreeGroupElement } from "blip-ds/dist/components/bds-nav-tree-group.js";
import { BdsNavTreeItem as BdsNavTreeItemElement } from "blip-ds/dist/components/bds-nav-tree-item.js";
import { BdsNavTree as BdsNavTreeElement } from "blip-ds/dist/components/bds-nav-tree.js";
import { BdsNavbarContent as BdsNavbarContentElement } from "blip-ds/dist/components/bds-navbar-content.js";
import { BdsNavbar as BdsNavbarElement } from "blip-ds/dist/components/bds-navbar.js";
import { BdsPagination as BdsPaginationElement } from "blip-ds/dist/components/bds-pagination.js";
import { BdsPaper as BdsPaperElement } from "blip-ds/dist/components/bds-paper.js";
import { BdsProgressBar as BdsProgressBarElement } from "blip-ds/dist/components/bds-progress-bar.js";
import { BdsRadioGroup as BdsRadioGroupElement } from "blip-ds/dist/components/bds-radio-group.js";
import { BdsRadio as BdsRadioElement } from "blip-ds/dist/components/bds-radio.js";
import { BdsRichText as BdsRichTextElement } from "blip-ds/dist/components/bds-rich-text.js";
import { BdsSelectChips as BdsSelectChipsElement } from "blip-ds/dist/components/bds-select-chips.js";
import { BdsSelectOption as BdsSelectOptionElement } from "blip-ds/dist/components/bds-select-option.js";
import { BdsSelect as BdsSelectElement } from "blip-ds/dist/components/bds-select.js";
import { BdsSidebar as BdsSidebarElement } from "blip-ds/dist/components/bds-sidebar.js";
import { BdsSkeleton as BdsSkeletonElement } from "blip-ds/dist/components/bds-skeleton.js";
import { BdsSlider as BdsSliderElement } from "blip-ds/dist/components/bds-slider.js";
import { BdsStep as BdsStepElement } from "blip-ds/dist/components/bds-step.js";
import { BdsStepper as BdsStepperElement } from "blip-ds/dist/components/bds-stepper.js";
import { BdsSwitch as BdsSwitchElement } from "blip-ds/dist/components/bds-switch.js";
import { BdsTabGroup as BdsTabGroupElement } from "blip-ds/dist/components/bds-tab-group.js";
import { BdsTabItem as BdsTabItemElement } from "blip-ds/dist/components/bds-tab-item.js";
import { BdsTabPanel as BdsTabPanelElement } from "blip-ds/dist/components/bds-tab-panel.js";
import { BdsTab as BdsTabElement } from "blip-ds/dist/components/bds-tab.js";
import { BdsTableBody as BdsTableBodyElement } from "blip-ds/dist/components/bds-table-body.js";
import { BdsTableCell as BdsTableCellElement } from "blip-ds/dist/components/bds-table-cell.js";
import { BdsTableHeader as BdsTableHeaderElement } from "blip-ds/dist/components/bds-table-header.js";
import { BdsTableRow as BdsTableRowElement } from "blip-ds/dist/components/bds-table-row.js";
import { BdsTableTh as BdsTableThElement } from "blip-ds/dist/components/bds-table-th.js";
import { BdsTable as BdsTableElement } from "blip-ds/dist/components/bds-table.js";
import { BdsTabs as BdsTabsElement } from "blip-ds/dist/components/bds-tabs.js";
import { BdsTestComponent as BdsTestComponentElement } from "blip-ds/dist/components/bds-test-component.js";
import { BdsThemeProvider as BdsThemeProviderElement } from "blip-ds/dist/components/bds-theme-provider.js";
import { BdsToastContainer as BdsToastContainerElement } from "blip-ds/dist/components/bds-toast-container.js";
import { BdsToast as BdsToastElement } from "blip-ds/dist/components/bds-toast.js";
import { BdsTooltip as BdsTooltipElement } from "blip-ds/dist/components/bds-tooltip.js";
import { BdsTypo as BdsTypoElement } from "blip-ds/dist/components/bds-typo.js";
import { BdsUpload as BdsUploadElement } from "blip-ds/dist/components/bds-upload.js";
import { BdsWarning as BdsWarningElement } from "blip-ds/dist/components/bds-warning.js";
import { UaiAvatar as UaiAvatarElement } from "blip-ds/dist/components/uai-avatar.js";
import { UaiButton as UaiButtonElement } from "blip-ds/dist/components/uai-button.js";
import { UaiGrid as UaiGridElement } from "blip-ds/dist/components/uai-grid.js";
import { UaiIcon as UaiIconElement } from "blip-ds/dist/components/uai-icon.js";
import { UaiInputChips as UaiInputChipsElement } from "blip-ds/dist/components/uai-input-chips.js";
import { UaiInputDate as UaiInputDateElement } from "blip-ds/dist/components/uai-input-date.js";
import { UaiInputPassword as UaiInputPasswordElement } from "blip-ds/dist/components/uai-input-password.js";
import { UaiInputPhone as UaiInputPhoneElement } from "blip-ds/dist/components/uai-input-phone.js";
import { UaiInput as UaiInputElement } from "blip-ds/dist/components/uai-input.js";
import { UaiNavbarContent as UaiNavbarContentElement } from "blip-ds/dist/components/uai-navbar-content.js";
import { UaiNavbar as UaiNavbarElement } from "blip-ds/dist/components/uai-navbar.js";
import { UaiPaper as UaiPaperElement } from "blip-ds/dist/components/uai-paper.js";
import { UaiTextarea as UaiTextareaElement } from "blip-ds/dist/components/uai-textarea.js";
import { UaiThemeProvider as UaiThemeProviderElement } from "blip-ds/dist/components/uai-theme-provider.js";
import { UaiTypo as UaiTypoElement } from "blip-ds/dist/components/uai-typo.js";
export type BdsAccordionEvents = {
    onBdsToggle: EventName<BdsAccordionCustomEvent<{
        value: boolean;
    }>>;
    onBdsAccordionOpen: EventName<BdsAccordionCustomEvent<void>>;
    onBdsAccordionClose: EventName<BdsAccordionCustomEvent<void>>;
};
export declare const BdsAccordion: StencilReactComponent<BdsAccordionElement, BdsAccordionEvents, Components.BdsAccordion>;
export type BdsAccordionBodyEvents = NonNullable<unknown>;
export declare const BdsAccordionBody: StencilReactComponent<BdsAccordionBodyElement, BdsAccordionBodyEvents, Components.BdsAccordionBody>;
export type BdsAccordionGroupEvents = {
    onBdsAccordionCloseAll: EventName<BdsAccordionGroupCustomEvent<void>>;
    onBdsAccordionOpenAll: EventName<BdsAccordionGroupCustomEvent<void>>;
};
export declare const BdsAccordionGroup: StencilReactComponent<BdsAccordionGroupElement, BdsAccordionGroupEvents, Components.BdsAccordionGroup>;
export type BdsAccordionHeaderEvents = NonNullable<unknown>;
export declare const BdsAccordionHeader: StencilReactComponent<BdsAccordionHeaderElement, BdsAccordionHeaderEvents, Components.BdsAccordionHeader>;
export type BdsAlertEvents = {
    onBdsAlertChanged: EventName<BdsAlertCustomEvent<{
        alertStatus: string;
    }>>;
};
export declare const BdsAlert: StencilReactComponent<BdsAlertElement, BdsAlertEvents, Components.BdsAlert>;
export type BdsAlertActionsEvents = NonNullable<unknown>;
export declare const BdsAlertActions: StencilReactComponent<BdsAlertActionsElement, BdsAlertActionsEvents, Components.BdsAlertActions>;
export type BdsAlertBodyEvents = NonNullable<unknown>;
export declare const BdsAlertBody: StencilReactComponent<BdsAlertBodyElement, BdsAlertBodyEvents, Components.BdsAlertBody>;
export type BdsAlertHeaderEvents = NonNullable<unknown>;
export declare const BdsAlertHeader: StencilReactComponent<BdsAlertHeaderElement, BdsAlertHeaderEvents, Components.BdsAlertHeader>;
export type BdsAutocompleteEvents = {
    onBdsChange: EventName<BdsAutocompleteCustomEvent<AutocompleteChangeEventDetail>>;
    onBdsSelectedChange: EventName<BdsAutocompleteCustomEvent<AutocompleteSelectedChangeEventDetail>>;
    onBdsMultiselectedChange: EventName<BdsAutocompleteCustomEvent<AutocompleteMultiSelectedChangeEventDetail>>;
    onBdsInput: EventName<BdsAutocompleteCustomEvent<KeyboardEvent>>;
    onBdsCancel: EventName<BdsAutocompleteCustomEvent<AutocompleteChangeEventDetail>>;
    onBdsFocus: EventName<BdsAutocompleteCustomEvent<void>>;
    onBdsBlur: EventName<BdsAutocompleteCustomEvent<void>>;
};
export declare const BdsAutocomplete: StencilReactComponent<BdsAutocompleteElement, BdsAutocompleteEvents, Components.BdsAutocomplete>;
export type BdsAvatarEvents = {
    onBdsClickAvatar: EventName<BdsAvatarCustomEvent<PointerEvent>>;
    onBdsImageUpload: EventName<BdsAvatarCustomEvent<string>>;
};
export declare const BdsAvatar: StencilReactComponent<BdsAvatarElement, BdsAvatarEvents, Components.BdsAvatar>;
export type BdsAvatarGroupEvents = {
    onBdsClickAvatarGroup: EventName<BdsAvatarGroupCustomEvent<PointerEvent>>;
};
export declare const BdsAvatarGroup: StencilReactComponent<BdsAvatarGroupElement, BdsAvatarGroupEvents, Components.BdsAvatarGroup>;
export type BdsBadgeEvents = NonNullable<unknown>;
export declare const BdsBadge: StencilReactComponent<BdsBadgeElement, BdsBadgeEvents, Components.BdsBadge>;
export type BdsBannerEvents = {
    onBdsBannerClose: EventName<BdsBannerCustomEvent<void>>;
};
export declare const BdsBanner: StencilReactComponent<BdsBannerElement, BdsBannerEvents, Components.BdsBanner>;
export type BdsBannerLinkEvents = {
    onBdsBannerLink: EventName<BdsBannerLinkCustomEvent<HTMLBdsBannerElement>>;
};
export declare const BdsBannerLink: StencilReactComponent<BdsBannerLinkElement, BdsBannerLinkEvents, Components.BdsBannerLink>;
export type BdsBreadcrumbEvents = NonNullable<unknown>;
export declare const BdsBreadcrumb: StencilReactComponent<BdsBreadcrumbElement, BdsBreadcrumbEvents, Components.BdsBreadcrumb>;
export type BdsButtonEvents = {
    onBdsClick: EventName<BdsButtonCustomEvent<PointerEvent | KeyboardEvent>>;
};
export declare const BdsButton: StencilReactComponent<BdsButtonElement, BdsButtonEvents, Components.BdsButton>;
export type BdsButtonGroupEvents = {
    onButtonSelected: EventName<BdsButtonGroupCustomEvent<string>>;
};
export declare const BdsButtonGroup: StencilReactComponent<BdsButtonGroupElement, BdsButtonGroupEvents, Components.BdsButtonGroup>;
export type BdsButtonIconEvents = {
    onBdsClick: EventName<BdsButtonIconCustomEvent<PointerEvent>>;
};
export declare const BdsButtonIcon: StencilReactComponent<BdsButtonIconElement, BdsButtonIconEvents, Components.BdsButtonIcon>;
export type BdsCardEvents = {
    onBdsClick: EventName<BdsCardCustomEvent<PointerEvent | KeyboardEvent>>;
};
export declare const BdsCard: StencilReactComponent<BdsCardElement, BdsCardEvents, Components.BdsCard>;
export type BdsCardBodyEvents = NonNullable<unknown>;
export declare const BdsCardBody: StencilReactComponent<BdsCardBodyElement, BdsCardBodyEvents, Components.BdsCardBody>;
export type BdsCardColorEvents = NonNullable<unknown>;
export declare const BdsCardColor: StencilReactComponent<BdsCardColorElement, BdsCardColorEvents, Components.BdsCardColor, 'name' | 'variable'>;
export type BdsCardFooterEvents = NonNullable<unknown>;
export declare const BdsCardFooter: StencilReactComponent<BdsCardFooterElement, BdsCardFooterEvents, Components.BdsCardFooter>;
export type BdsCardHeaderEvents = NonNullable<unknown>;
export declare const BdsCardHeader: StencilReactComponent<BdsCardHeaderElement, BdsCardHeaderEvents, Components.BdsCardHeader>;
export type BdsCardSubtitleEvents = NonNullable<unknown>;
export declare const BdsCardSubtitle: StencilReactComponent<BdsCardSubtitleElement, BdsCardSubtitleEvents, Components.BdsCardSubtitle>;
export type BdsCardTitleEvents = NonNullable<unknown>;
export declare const BdsCardTitle: StencilReactComponent<BdsCardTitleElement, BdsCardTitleEvents, Components.BdsCardTitle>;
export type BdsCarouselEvents = {
    onBdsChangeCarousel: EventName<BdsCarouselCustomEvent<{
        value: Itens;
    }>>;
};
export declare const BdsCarousel: StencilReactComponent<BdsCarouselElement, BdsCarouselEvents, Components.BdsCarousel>;
export type BdsCarouselItemEvents = NonNullable<unknown>;
export declare const BdsCarouselItem: StencilReactComponent<BdsCarouselItemElement, BdsCarouselItemEvents, Components.BdsCarouselItem>;
export type BdsCheckboxEvents = {
    onBdsChange: EventName<BdsCheckboxCustomEvent<any>>;
    onBdsInput: EventName<BdsCheckboxCustomEvent<KeyboardEvent>>;
};
export declare const BdsCheckbox: StencilReactComponent<BdsCheckboxElement, BdsCheckboxEvents, Components.BdsCheckbox, 'refer' | 'label' | 'name'>;
export type BdsChipEvents = {
    onBdsDelete: EventName<BdsChipCustomEvent<{
        id: string;
    }>>;
};
export declare const BdsChip: StencilReactComponent<BdsChipElement, BdsChipEvents, Components.BdsChip>;
export type BdsChipClickableEvents = {
    onChipClickableClose: EventName<BdsChipClickableCustomEvent<{
        id: string;
    }>>;
    onChipClickableClick: EventName<BdsChipClickableCustomEvent<void>>;
};
export declare const BdsChipClickable: StencilReactComponent<BdsChipClickableElement, BdsChipClickableEvents, Components.BdsChipClickable>;
export type BdsChipSelectedEvents = {
    onChipClick: EventName<BdsChipSelectedCustomEvent<{
        selected: boolean;
    }>>;
};
export declare const BdsChipSelected: StencilReactComponent<BdsChipSelectedElement, BdsChipSelectedEvents, Components.BdsChipSelected>;
export type BdsChipTagEvents = NonNullable<unknown>;
export declare const BdsChipTag: StencilReactComponent<BdsChipTagElement, BdsChipTagEvents, Components.BdsChipTag>;
export type BdsCounterTextEvents = NonNullable<unknown>;
export declare const BdsCounterText: StencilReactComponent<BdsCounterTextElement, BdsCounterTextEvents, Components.BdsCounterText, 'length'>;
export type BdsDataTableEvents = {
    onBdsTableClick: EventName<BdsDataTableCustomEvent<{
        item: {
            [key: string]: any;
        };
        index: number;
        nameButton: string;
    }>>;
    onBdsTableDelete: EventName<BdsDataTableCustomEvent<{
        [key: string]: any;
    }>>;
    onBdsTableChange: EventName<BdsDataTableCustomEvent<{
        [key: string]: any;
    }[]>>;
};
export declare const BdsDataTable: StencilReactComponent<BdsDataTableElement, BdsDataTableEvents, Components.BdsDataTable>;
export type BdsDatepickerEvents = {
    onBdsStartDate: EventName<BdsDatepickerCustomEvent<{
        value: Date | null;
    }>>;
    onBdsEndDate: EventName<BdsDatepickerCustomEvent<{
        value: Date | null;
    }>>;
    onConcludeDatepicker: EventName<BdsDatepickerCustomEvent<{
        startDate: string;
        endDate?: string;
    } | {
        startDate: string;
    } | any>>;
    onEmptyConcludeDatepicker: EventName<BdsDatepickerCustomEvent<void>>;
};
export declare const BdsDatepicker: StencilReactComponent<BdsDatepickerElement, BdsDatepickerEvents, Components.BdsDatepicker>;
export type BdsDatepickerPeriodEvents = {
    onBdsStartDate: EventName<BdsDatepickerPeriodCustomEvent<{
        value: Date | null;
    }>>;
    onBdsEndDate: EventName<BdsDatepickerPeriodCustomEvent<{
        value: Date | null;
    }>>;
    onBdsClickDayButton: EventName<BdsDatepickerPeriodCustomEvent<{
        state?: stateSelect;
    }>>;
};
export declare const BdsDatepickerPeriod: StencilReactComponent<BdsDatepickerPeriodElement, BdsDatepickerPeriodEvents, Components.BdsDatepickerPeriod>;
export type BdsDatepickerSingleEvents = {
    onBdsDateSelected: EventName<BdsDatepickerSingleCustomEvent<{
        value: Date | null;
    }>>;
};
export declare const BdsDatepickerSingle: StencilReactComponent<BdsDatepickerSingleElement, BdsDatepickerSingleEvents, Components.BdsDatepickerSingle>;
export type BdsDividerEvents = NonNullable<unknown>;
export declare const BdsDivider: StencilReactComponent<BdsDividerElement, BdsDividerEvents, Components.BdsDivider>;
export type BdsDropdownEvents = {
    onBdsToggle: EventName<BdsDropdownCustomEvent<{
        value: boolean;
    }>>;
};
export declare const BdsDropdown: StencilReactComponent<BdsDropdownElement, BdsDropdownEvents, Components.BdsDropdown>;
export type BdsExpansionPanelEvents = NonNullable<unknown>;
export declare const BdsExpansionPanel: StencilReactComponent<BdsExpansionPanelElement, BdsExpansionPanelEvents, Components.BdsExpansionPanel>;
export type BdsExpansionPanelBodyEvents = NonNullable<unknown>;
export declare const BdsExpansionPanelBody: StencilReactComponent<BdsExpansionPanelBodyElement, BdsExpansionPanelBodyEvents, Components.BdsExpansionPanelBody>;
export type BdsExpansionPanelHeaderEvents = NonNullable<unknown>;
export declare const BdsExpansionPanelHeader: StencilReactComponent<BdsExpansionPanelHeaderElement, BdsExpansionPanelHeaderEvents, Components.BdsExpansionPanelHeader>;
export type BdsGridEvents = NonNullable<unknown>;
export declare const BdsGrid: StencilReactComponent<BdsGridElement, BdsGridEvents, Components.BdsGrid>;
export type BdsIconEvents = NonNullable<unknown>;
export declare const BdsIcon: StencilReactComponent<BdsIconElement, BdsIconEvents, Components.BdsIcon>;
export type BdsIllustrationEvents = NonNullable<unknown>;
export declare const BdsIllustration: StencilReactComponent<BdsIllustrationElement, BdsIllustrationEvents, Components.BdsIllustration>;
export type BdsImageEvents = NonNullable<unknown>;
export declare const BdsImage: StencilReactComponent<BdsImageElement, BdsImageEvents, Components.BdsImage>;
export type BdsInputEvents = {
    onBdsChange: EventName<BdsInputCustomEvent<{
        value: string;
    }>>;
    onBdsInput: EventName<BdsInputCustomEvent<InputEvent>>;
    onBdsOnBlur: EventName<BdsInputCustomEvent<void>>;
    onBdsFocus: EventName<BdsInputCustomEvent<void>>;
    onBdsSubmit: EventName<BdsInputCustomEvent<{
        event: KeyboardEvent;
        value: string;
    }>>;
    onBdsPatternValidation: EventName<BdsInputCustomEvent<boolean>>;
    onBdsKeyDownBackspace: EventName<BdsInputCustomEvent<{
        event: KeyboardEvent;
        value: string;
    }>>;
};
export declare const BdsInput: StencilReactComponent<BdsInputElement, BdsInputEvents, Components.BdsInput>;
export type BdsInputChipsEvents = {
    onBdsChange: EventName<BdsInputChipsCustomEvent<{
        data: string[];
        value: string;
    }>>;
    onBdsChangeChips: EventName<BdsInputChipsCustomEvent<{
        data: string[];
        value: string;
    }>>;
    onBdsInputChipsFocus: EventName<BdsInputChipsCustomEvent<void>>;
    onBdsBlur: EventName<BdsInputChipsCustomEvent<string[]>>;
    onBdsInputChipsInput: EventName<BdsInputChipsCustomEvent<InputEvent>>;
    onBdsExtendedQuantityInput: EventName<BdsInputChipsCustomEvent<{
        value: boolean;
    }>>;
    onBdsSubmit: EventName<BdsInputChipsCustomEvent<{
        value: string[];
    }>>;
};
export declare const BdsInputChips: StencilReactComponent<BdsInputChipsElement, BdsInputChipsEvents, Components.BdsInputChips>;
export type BdsInputEditableEvents = {
    onBdsInputEditableSave: EventName<BdsInputEditableCustomEvent<InputEditableEventDetail>>;
    onBdsChange: EventName<BdsInputEditableCustomEvent<InputEditableEventDetail>>;
    onBdsInput: EventName<BdsInputEditableCustomEvent<InputEvent>>;
    onBdsCancel: EventName<BdsInputEditableCustomEvent<void>>;
    onBdsFocus: EventName<BdsInputEditableCustomEvent<void>>;
    onBdsBlur: EventName<BdsInputEditableCustomEvent<void>>;
};
export declare const BdsInputEditable: StencilReactComponent<BdsInputEditableElement, BdsInputEditableEvents, Components.BdsInputEditable>;
export type BdsInputPasswordEvents = {
    onBdsInputPasswordChange: EventName<BdsInputPasswordCustomEvent<{
        value: string | null;
    }>>;
    onBdsInputPasswordInput: EventName<BdsInputPasswordCustomEvent<InputEvent>>;
    onBdsInputPasswordBlur: EventName<BdsInputPasswordCustomEvent<void>>;
    onBdsInputPasswordFocus: EventName<BdsInputPasswordCustomEvent<void>>;
    onBdsInputPasswordSubmit: EventName<BdsInputPasswordCustomEvent<{
        event: KeyboardEvent;
        value: string | null;
    } | void>>;
    onBdsKeyDownBackspace: EventName<BdsInputPasswordCustomEvent<{
        event: KeyboardEvent;
        value: string | null;
    }>>;
};
export declare const BdsInputPassword: StencilReactComponent<BdsInputPasswordElement, BdsInputPasswordEvents, Components.BdsInputPassword>;
export type BdsInputPhoneNumberEvents = {
    onBdsPhoneNumberChange: EventName<BdsInputPhoneNumberCustomEvent<{
        value: string | null;
        code: string | null;
        isoCode: string | null;
        country: string | null;
    }>>;
    onBdsInput: EventName<BdsInputPhoneNumberCustomEvent<InputEvent>>;
    onBdsCancel: EventName<BdsInputPhoneNumberCustomEvent<void>>;
    onBdsFocus: EventName<BdsInputPhoneNumberCustomEvent<void>>;
    onBdsBlur: EventName<BdsInputPhoneNumberCustomEvent<void>>;
};
export declare const BdsInputPhoneNumber: StencilReactComponent<BdsInputPhoneNumberElement, BdsInputPhoneNumberEvents, Components.BdsInputPhoneNumber>;
export type BdsListEvents = {
    onBdsListCheckboxChange: EventName<BdsListCustomEvent<{
        value: string | null;
        text: string | null;
        secondaryText: string | null;
        avatarName: string | null;
        avatarThumbnail: string | null;
        typeList: TypeList | null;
    }[]>>;
    onBdsListRadioChange: EventName<BdsListCustomEvent<{
        value: string | null;
        text: string | null;
        secondaryText: string | null;
        avatarName: string | null;
        avatarThumbnail: string | null;
        typeList: TypeList | null;
    }>>;
    onBdsListSwitchChange: EventName<BdsListCustomEvent<{
        value: string | null;
        text: string | null;
        secondaryText: string | null;
        avatarName: string | null;
        avatarThumbnail: string | null;
        typeList: TypeList | null;
    }[]>>;
    onBdsClickActionsButtons: EventName<BdsListCustomEvent<any>>;
};
export declare const BdsList: StencilReactComponent<BdsListElement, BdsListEvents, Components.BdsList>;
export type BdsListItemEvents = {
    onBdsChecked: EventName<BdsListItemCustomEvent<{
        value: string | null;
        text: string | null;
        secondaryText: string | null;
        typeList: TypeList | null;
        checked: boolean | null;
    }>>;
    onBdsClickActionButtom: EventName<BdsListItemCustomEvent<{
        value: string | null;
        icon: string;
        elementButton: EventTarget;
    }>>;
};
export declare const BdsListItem: StencilReactComponent<BdsListItemElement, BdsListItemEvents, Components.BdsListItem>;
export type BdsListItemContentEvents = NonNullable<unknown>;
export declare const BdsListItemContent: StencilReactComponent<BdsListItemContentElement, BdsListItemContentEvents, Components.BdsListItemContent>;
export type BdsLoadingBarEvents = NonNullable<unknown>;
export declare const BdsLoadingBar: StencilReactComponent<BdsLoadingBarElement, BdsLoadingBarEvents, Components.BdsLoadingBar>;
export type BdsLoadingPageEvents = NonNullable<unknown>;
export declare const BdsLoadingPage: StencilReactComponent<BdsLoadingPageElement, BdsLoadingPageEvents, Components.BdsLoadingPage>;
export type BdsLoadingSpinnerEvents = NonNullable<unknown>;
export declare const BdsLoadingSpinner: StencilReactComponent<BdsLoadingSpinnerElement, BdsLoadingSpinnerEvents, Components.BdsLoadingSpinner>;
export type BdsMenuEvents = {
    onBdsToggle: EventName<BdsMenuCustomEvent<{
        value?: boolean;
    }>>;
};
export declare const BdsMenu: StencilReactComponent<BdsMenuElement, BdsMenuEvents, Components.BdsMenu>;
export type BdsMenuActionEvents = NonNullable<unknown>;
export declare const BdsMenuAction: StencilReactComponent<BdsMenuActionElement, BdsMenuActionEvents, Components.BdsMenuAction>;
export type BdsMenuExibitionEvents = NonNullable<unknown>;
export declare const BdsMenuExibition: StencilReactComponent<BdsMenuExibitionElement, BdsMenuExibitionEvents, Components.BdsMenuExibition>;
export type BdsMenuListEvents = NonNullable<unknown>;
export declare const BdsMenuList: StencilReactComponent<BdsMenuListElement, BdsMenuListEvents, Components.BdsMenuList>;
export type BdsMenuListItemEvents = NonNullable<unknown>;
export declare const BdsMenuListItem: StencilReactComponent<BdsMenuListItemElement, BdsMenuListItemEvents, Components.BdsMenuListItem, 'icon'>;
export type BdsMenuSeparationEvents = NonNullable<unknown>;
export declare const BdsMenuSeparation: StencilReactComponent<BdsMenuSeparationElement, BdsMenuSeparationEvents, Components.BdsMenuSeparation>;
export type BdsModalEvents = {
    onBdsModalChanged: EventName<BdsModalCustomEvent<{
        modalStatus: 'opened' | 'closed';
    }>>;
};
export declare const BdsModal: StencilReactComponent<BdsModalElement, BdsModalEvents, Components.BdsModal>;
export type BdsModalActionEvents = NonNullable<unknown>;
export declare const BdsModalAction: StencilReactComponent<BdsModalActionElement, BdsModalActionEvents, Components.BdsModalAction>;
export type BdsModalCloseButtonEvents = NonNullable<unknown>;
export declare const BdsModalCloseButton: StencilReactComponent<BdsModalCloseButtonElement, BdsModalCloseButtonEvents, Components.BdsModalCloseButton>;
export type BdsNavTreeEvents = {
    onBdsToogleChange: EventName<BdsNavTreeCustomEvent<{
        value?: boolean;
        element: HTMLElement;
    }>>;
};
export declare const BdsNavTree: StencilReactComponent<BdsNavTreeElement, BdsNavTreeEvents, Components.BdsNavTree, 'text'>;
export type BdsNavTreeGroupEvents = {
    onBdsNavTreeGroupCloseAll: EventName<BdsNavTreeGroupCustomEvent<void>>;
    onBdsNavTreeGroupOpenAll: EventName<BdsNavTreeGroupCustomEvent<void>>;
};
export declare const BdsNavTreeGroup: StencilReactComponent<BdsNavTreeGroupElement, BdsNavTreeGroupEvents, Components.BdsNavTreeGroup>;
export type BdsNavTreeItemEvents = {
    onBdsToogleChange: EventName<BdsNavTreeItemCustomEvent<{
        value?: boolean;
        element: HTMLElement;
    }>>;
};
export declare const BdsNavTreeItem: StencilReactComponent<BdsNavTreeItemElement, BdsNavTreeItemEvents, Components.BdsNavTreeItem, 'text'>;
export type BdsNavbarEvents = NonNullable<unknown>;
export declare const BdsNavbar: StencilReactComponent<BdsNavbarElement, BdsNavbarEvents, Components.BdsNavbar>;
export type BdsNavbarContentEvents = NonNullable<unknown>;
export declare const BdsNavbarContent: StencilReactComponent<BdsNavbarContentElement, BdsNavbarContentEvents, Components.BdsNavbarContent>;
export type BdsPaginationEvents = {
    onBdsPaginationChange: EventName<BdsPaginationCustomEvent<number>>;
    onBdsItemsPerPageChange: EventName<BdsPaginationCustomEvent<number>>;
};
export declare const BdsPagination: StencilReactComponent<BdsPaginationElement, BdsPaginationEvents, Components.BdsPagination>;
export type BdsPaperEvents = NonNullable<unknown>;
export declare const BdsPaper: StencilReactComponent<BdsPaperElement, BdsPaperEvents, Components.BdsPaper>;
export type BdsProgressBarEvents = NonNullable<unknown>;
export declare const BdsProgressBar: StencilReactComponent<BdsProgressBarElement, BdsProgressBarEvents, Components.BdsProgressBar>;
export type BdsRadioEvents = {
    onBdsChange: EventName<BdsRadioCustomEvent<{
        checked: boolean;
    }>>;
    onBdsClickChange: EventName<BdsRadioCustomEvent<{
        checked: boolean;
    }>>;
};
export declare const BdsRadio: StencilReactComponent<BdsRadioElement, BdsRadioEvents, Components.BdsRadio, 'value'>;
export type BdsRadioGroupEvents = {
    onBdsRadioGroupChange: EventName<BdsRadioGroupCustomEvent<{
        value?: string;
    }>>;
};
export declare const BdsRadioGroup: StencilReactComponent<BdsRadioGroupElement, BdsRadioGroupEvents, Components.BdsRadioGroup>;
export type BdsRichTextEvents = {
    onBdsRichTextChange: EventName<BdsRichTextCustomEvent<{
        value: string;
    }>>;
    onBdsRichTextInput: EventName<BdsRichTextCustomEvent<InputEvent>>;
    onBdsBlur: EventName<BdsRichTextCustomEvent<void>>;
    onBdsFocus: EventName<BdsRichTextCustomEvent<void>>;
};
export declare const BdsRichText: StencilReactComponent<BdsRichTextElement, BdsRichTextEvents, Components.BdsRichText>;
export type BdsSelectEvents = {
    onBdsChange: EventName<BdsSelectCustomEvent<SelectChangeEventDetail>>;
    onBdsCancel: EventName<BdsSelectCustomEvent<void>>;
    onBdsFocus: EventName<BdsSelectCustomEvent<void>>;
    onBdsBlur: EventName<BdsSelectCustomEvent<void>>;
};
export declare const BdsSelect: StencilReactComponent<BdsSelectElement, BdsSelectEvents, Components.BdsSelect>;
export type BdsSelectChipsEvents = {
    onBdsChange: EventName<BdsSelectChipsCustomEvent<SelectChangeEvent>>;
    onBdsCancel: EventName<BdsSelectChipsCustomEvent<void>>;
    onBdsFocus: EventName<BdsSelectChipsCustomEvent<void>>;
    onBdsBlur: EventName<BdsSelectChipsCustomEvent<void>>;
    onBdsChangeChips: EventName<BdsSelectChipsCustomEvent<{
        data: string[];
        value: number;
    }>>;
    onBdsSelectChipsInput: EventName<BdsSelectChipsCustomEvent<InputEvent>>;
    onBdsSubmit: EventName<BdsSelectChipsCustomEvent<void>>;
};
export declare const BdsSelectChips: StencilReactComponent<BdsSelectChipsElement, BdsSelectChipsEvents, Components.BdsSelectChips>;
export type BdsSelectOptionEvents = {
    onOptionSelected: EventName<BdsSelectOptionCustomEvent<{
        value: any;
        label: string;
    }>>;
    onOptionChecked: EventName<BdsSelectOptionCustomEvent<{
        value: string;
        label: string;
        checked: boolean;
    }>>;
};
export declare const BdsSelectOption: StencilReactComponent<BdsSelectOptionElement, BdsSelectOptionEvents, Components.BdsSelectOption, 'value'>;
export type BdsSidebarEvents = {
    onBdsToggle: EventName<BdsSidebarCustomEvent<{
        value: boolean;
    }>>;
};
export declare const BdsSidebar: StencilReactComponent<BdsSidebarElement, BdsSidebarEvents, Components.BdsSidebar>;
export type BdsSkeletonEvents = NonNullable<unknown>;
export declare const BdsSkeleton: StencilReactComponent<BdsSkeletonElement, BdsSkeletonEvents, Components.BdsSkeleton>;
export type BdsSliderEvents = {
    onBdsChange: EventName<BdsSliderCustomEvent<any>>;
};
export declare const BdsSlider: StencilReactComponent<BdsSliderElement, BdsSliderEvents, Components.BdsSlider>;
export type BdsStepEvents = NonNullable<unknown>;
export declare const BdsStep: StencilReactComponent<BdsStepElement, BdsStepEvents, Components.BdsStep>;
export type BdsStepperEvents = NonNullable<unknown>;
export declare const BdsStepper: StencilReactComponent<BdsStepperElement, BdsStepperEvents, Components.BdsStepper>;
export type BdsSwitchEvents = {
    onBdsChange: EventName<BdsSwitchCustomEvent<{
        checked: boolean;
    }>>;
};
export declare const BdsSwitch: StencilReactComponent<BdsSwitchElement, BdsSwitchEvents, Components.BdsSwitch, 'refer' | 'name'>;
export type BdsTabEvents = {
    onBdsTabChange: EventName<BdsTabCustomEvent<string>>;
};
export declare const BdsTab: StencilReactComponent<BdsTabElement, BdsTabEvents, Components.BdsTab, 'group' | 'label'>;
export type BdsTabGroupEvents = {
    onBdsTabChange: EventName<BdsTabGroupCustomEvent<HTMLBdsTabItemElement>>;
    onBdsTabDisabled: EventName<BdsTabGroupCustomEvent<HTMLBdsTabItemElement>>;
};
export declare const BdsTabGroup: StencilReactComponent<BdsTabGroupElement, BdsTabGroupEvents, Components.BdsTabGroup>;
export type BdsTabItemEvents = {
    onTabDisabled: EventName<BdsTabItemCustomEvent<{
        item: number;
        disable: boolean;
    }>>;
};
export declare const BdsTabItem: StencilReactComponent<BdsTabItemElement, BdsTabItemEvents, Components.BdsTabItem>;
export type BdsTabPanelEvents = NonNullable<unknown>;
export declare const BdsTabPanel: StencilReactComponent<BdsTabPanelElement, BdsTabPanelEvents, Components.BdsTabPanel, 'group'>;
export type BdsTableEvents = NonNullable<unknown>;
export declare const BdsTable: StencilReactComponent<BdsTableElement, BdsTableEvents, Components.BdsTable>;
export type BdsTableBodyEvents = NonNullable<unknown>;
export declare const BdsTableBody: StencilReactComponent<BdsTableBodyElement, BdsTableBodyEvents, Components.BdsTableBody>;
export type BdsTableCellEvents = NonNullable<unknown>;
export declare const BdsTableCell: StencilReactComponent<BdsTableCellElement, BdsTableCellEvents, Components.BdsTableCell>;
export type BdsTableHeaderEvents = NonNullable<unknown>;
export declare const BdsTableHeader: StencilReactComponent<BdsTableHeaderElement, BdsTableHeaderEvents, Components.BdsTableHeader>;
export type BdsTableRowEvents = NonNullable<unknown>;
export declare const BdsTableRow: StencilReactComponent<BdsTableRowElement, BdsTableRowEvents, Components.BdsTableRow>;
export type BdsTableThEvents = NonNullable<unknown>;
export declare const BdsTableTh: StencilReactComponent<BdsTableThElement, BdsTableThEvents, Components.BdsTableTh>;
export type BdsTabsEvents = {
    onScrollButtonClick: EventName<BdsTabsCustomEvent<Overflow>>;
    onBdsTabInit: EventName<BdsTabsCustomEvent<string>>;
};
export declare const BdsTabs: StencilReactComponent<BdsTabsElement, BdsTabsEvents, Components.BdsTabs>;
export type BdsTestComponentEvents = NonNullable<unknown>;
export declare const BdsTestComponent: StencilReactComponent<BdsTestComponentElement, BdsTestComponentEvents, Components.BdsTestComponent>;
export type BdsThemeProviderEvents = NonNullable<unknown>;
export declare const BdsThemeProvider: StencilReactComponent<BdsThemeProviderElement, BdsThemeProviderEvents, Components.BdsThemeProvider>;
export type BdsToastEvents = {
    onToastButtonClick: EventName<BdsToastCustomEvent<HTMLBdsToastElement>>;
};
export declare const BdsToast: StencilReactComponent<BdsToastElement, BdsToastEvents, Components.BdsToast>;
export type BdsToastContainerEvents = NonNullable<unknown>;
export declare const BdsToastContainer: StencilReactComponent<BdsToastContainerElement, BdsToastContainerEvents, Components.BdsToastContainer>;
export type BdsTooltipEvents = NonNullable<unknown>;
export declare const BdsTooltip: StencilReactComponent<BdsTooltipElement, BdsTooltipEvents, Components.BdsTooltip>;
export type BdsTypoEvents = NonNullable<unknown>;
export declare const BdsTypo: StencilReactComponent<BdsTypoElement, BdsTypoEvents, Components.BdsTypo>;
export type BdsUploadEvents = {
    onBdsUploadDelete: EventName<BdsUploadCustomEvent<any>>;
    onBdsUploadChange: EventName<BdsUploadCustomEvent<any>>;
};
export declare const BdsUpload: StencilReactComponent<BdsUploadElement, BdsUploadEvents, Components.BdsUpload>;
export type BdsWarningEvents = NonNullable<unknown>;
export declare const BdsWarning: StencilReactComponent<BdsWarningElement, BdsWarningEvents, Components.BdsWarning>;
export type UaiAvatarEvents = NonNullable<unknown>;
export declare const UaiAvatar: StencilReactComponent<UaiAvatarElement, UaiAvatarEvents, Components.UaiAvatar>;
export type UaiButtonEvents = {
    onUaiClick: EventName<UaiButtonCustomEvent<MouseEvent>>;
};
export declare const UaiButton: StencilReactComponent<UaiButtonElement, UaiButtonEvents, Components.UaiButton>;
export type UaiGridEvents = NonNullable<unknown>;
export declare const UaiGrid: StencilReactComponent<UaiGridElement, UaiGridEvents, Components.UaiGrid>;
export type UaiIconEvents = NonNullable<unknown>;
export declare const UaiIcon: StencilReactComponent<UaiIconElement, UaiIconEvents, Components.UaiIcon>;
export type UaiInputEvents = {
    onUaiChange: EventName<UaiInputCustomEvent<{
        value: string;
    }>>;
    onUaiInput: EventName<UaiInputCustomEvent<InputEvent>>;
    onUaiOnBlur: EventName<UaiInputCustomEvent<void>>;
    onUaiFocus: EventName<UaiInputCustomEvent<void>>;
    onUaiSubmit: EventName<UaiInputCustomEvent<{
        event: KeyboardEvent;
        value: string;
    }>>;
    onUaiPatternValidation: EventName<UaiInputCustomEvent<boolean>>;
    onUaiKeyDownBackspace: EventName<UaiInputCustomEvent<{
        event: KeyboardEvent;
        value: string;
    }>>;
};
export declare const UaiInput: StencilReactComponent<UaiInputElement, UaiInputEvents, Components.UaiInput>;
export type UaiInputChipsEvents = {
    onUaiChange: EventName<UaiInputChipsCustomEvent<UaiInputChipsChange>>;
    onUaiChangeChips: EventName<UaiInputChipsCustomEvent<UaiInputChipsChange>>;
    onUaiInputChipsFocus: EventName<UaiInputChipsCustomEvent<void>>;
    onUaiBlur: EventName<UaiInputChipsCustomEvent<string[]>>;
    onUaiInputChipsInput: EventName<UaiInputChipsCustomEvent<InputEvent>>;
    onUaiExtendedQuantityInput: EventName<UaiInputChipsCustomEvent<{
        value: boolean;
    }>>;
    onUaiSubmit: EventName<UaiInputChipsCustomEvent<{
        value: string[];
    }>>;
};
export declare const UaiInputChips: StencilReactComponent<UaiInputChipsElement, UaiInputChipsEvents, Components.UaiInputChips>;
export type UaiInputDateEvents = {
    onUaiChange: EventName<UaiInputDateCustomEvent<{
        value: string;
    }>>;
    onUaiInput: EventName<UaiInputDateCustomEvent<InputEvent>>;
    onUaiFocus: EventName<UaiInputDateCustomEvent<void>>;
    onUaiOnBlur: EventName<UaiInputDateCustomEvent<void>>;
};
export declare const UaiInputDate: StencilReactComponent<UaiInputDateElement, UaiInputDateEvents, Components.UaiInputDate>;
export type UaiInputPasswordEvents = {
    onUaiInputPasswordChange: EventName<UaiInputPasswordCustomEvent<{
        value: string | null;
    }>>;
    onUaiInputPasswordInput: EventName<UaiInputPasswordCustomEvent<InputEvent>>;
    onUaiInputPasswordBlur: EventName<UaiInputPasswordCustomEvent<void>>;
    onUaiInputPasswordFocus: EventName<UaiInputPasswordCustomEvent<void>>;
    onUaiInputPasswordSubmit: EventName<UaiInputPasswordCustomEvent<{
        event: KeyboardEvent;
        value: string | null;
    }>>;
    onUaiKeyDownBackspace: EventName<UaiInputPasswordCustomEvent<{
        event: KeyboardEvent;
        value: string | null;
    }>>;
};
export declare const UaiInputPassword: StencilReactComponent<UaiInputPasswordElement, UaiInputPasswordEvents, Components.UaiInputPassword>;
export type UaiInputPhoneEvents = {
    onUaiPhoneNumberChange: EventName<UaiInputPhoneCustomEvent<UaiPhoneNumberChange>>;
    onUaiInput: EventName<UaiInputPhoneCustomEvent<InputEvent>>;
    onUaiCancel: EventName<UaiInputPhoneCustomEvent<void>>;
    onUaiFocus: EventName<UaiInputPhoneCustomEvent<void>>;
    onUaiBlur: EventName<UaiInputPhoneCustomEvent<void>>;
};
export declare const UaiInputPhone: StencilReactComponent<UaiInputPhoneElement, UaiInputPhoneEvents, Components.UaiInputPhone>;
export type UaiNavbarEvents = NonNullable<unknown>;
export declare const UaiNavbar: StencilReactComponent<UaiNavbarElement, UaiNavbarEvents, Components.UaiNavbar>;
export type UaiNavbarContentEvents = NonNullable<unknown>;
export declare const UaiNavbarContent: StencilReactComponent<UaiNavbarContentElement, UaiNavbarContentEvents, Components.UaiNavbarContent>;
export type UaiPaperEvents = NonNullable<unknown>;
export declare const UaiPaper: StencilReactComponent<UaiPaperElement, UaiPaperEvents, Components.UaiPaper>;
export type UaiTextareaEvents = {
    onUaiChange: EventName<UaiTextareaCustomEvent<{
        value: string;
    }>>;
    onUaiInput: EventName<UaiTextareaCustomEvent<InputEvent>>;
    onUaiOnBlur: EventName<UaiTextareaCustomEvent<void>>;
    onUaiFocus: EventName<UaiTextareaCustomEvent<void>>;
    onUaiSubmit: EventName<UaiTextareaCustomEvent<{
        event: KeyboardEvent;
        value: string;
    }>>;
    onUaiPatternValidation: EventName<UaiTextareaCustomEvent<boolean>>;
    onUaiKeyDownBackspace: EventName<UaiTextareaCustomEvent<{
        event: KeyboardEvent;
        value: string;
    }>>;
};
export declare const UaiTextarea: StencilReactComponent<UaiTextareaElement, UaiTextareaEvents, Components.UaiTextarea>;
export type UaiThemeProviderEvents = NonNullable<unknown>;
export declare const UaiThemeProvider: StencilReactComponent<UaiThemeProviderElement, UaiThemeProviderEvents, Components.UaiThemeProvider>;
export type UaiTypoEvents = NonNullable<unknown>;
export declare const UaiTypo: StencilReactComponent<UaiTypoElement, UaiTypoEvents, Components.UaiTypo>;
