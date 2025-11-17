import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { type AutocompleteChangeEventDetail, type AutocompleteMultiSelectedChangeEventDetail, type AutocompleteSelectedChangeEventDetail, type BdsAutocompleteCustomEvent, type BdsAvatarCustomEvent, type BdsAvatarGroupCustomEvent, type BdsBannerLinkCustomEvent, type BdsButtonCustomEvent, type BdsButtonIconCustomEvent, type BdsCardCustomEvent, type BdsCarouselCustomEvent, type BdsCheckboxCustomEvent, type BdsDatepickerCustomEvent, type BdsDatepickerPeriodCustomEvent, type BdsDatepickerSingleCustomEvent, type BdsInputChipsCustomEvent, type BdsInputCustomEvent, type BdsInputEditableCustomEvent, type BdsInputPasswordCustomEvent, type BdsInputPhoneNumberCustomEvent, type BdsListCustomEvent, type BdsListItemCustomEvent, type BdsNavTreeCustomEvent, type BdsNavTreeItemCustomEvent, type BdsRichTextCustomEvent, type BdsSearchAnywhereCustomEvent, type BdsSelectChipsCustomEvent, type BdsSelectCustomEvent, type BdsSliderCustomEvent, type BdsTabGroupCustomEvent, type BdsTabsCustomEvent, type BdsToastCustomEvent, type BdsUploadCustomEvent, type InputEditableEventDetail, type Itens, type Overflow, type SearchAnywhereChangeEventDetail, type SearchAnywhereSelectEventDetail, type SelectChangeEvent, type SelectChangeEventDetail, type StepOption, type TypeList, type stateSelect } from "blip-ds";
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
import { BdsSearchAnywhere as BdsSearchAnywhereElement } from "blip-ds/dist/components/bds-search-anywhere.js";
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
export type BdsAccordionEvents = {
    onBdsToggle: EventName<CustomEvent<{
        value: boolean;
    }>>;
    onBdsAccordionOpen: EventName<CustomEvent<void>>;
    onBdsAccordionClose: EventName<CustomEvent<void>>;
};
export declare const BdsAccordion: StencilReactComponent<BdsAccordionElement, BdsAccordionEvents>;
export type BdsAccordionBodyEvents = NonNullable<unknown>;
export declare const BdsAccordionBody: StencilReactComponent<BdsAccordionBodyElement, BdsAccordionBodyEvents>;
export type BdsAccordionGroupEvents = {
    onBdsAccordionCloseAll: EventName<CustomEvent<void>>;
    onBdsAccordionOpenAll: EventName<CustomEvent<void>>;
};
export declare const BdsAccordionGroup: StencilReactComponent<BdsAccordionGroupElement, BdsAccordionGroupEvents>;
export type BdsAccordionHeaderEvents = NonNullable<unknown>;
export declare const BdsAccordionHeader: StencilReactComponent<BdsAccordionHeaderElement, BdsAccordionHeaderEvents>;
export type BdsAlertEvents = {
    onBdsAlertChanged: EventName<CustomEvent<{
        alertStatus: string;
    }>>;
};
export declare const BdsAlert: StencilReactComponent<BdsAlertElement, BdsAlertEvents>;
export type BdsAlertActionsEvents = NonNullable<unknown>;
export declare const BdsAlertActions: StencilReactComponent<BdsAlertActionsElement, BdsAlertActionsEvents>;
export type BdsAlertBodyEvents = NonNullable<unknown>;
export declare const BdsAlertBody: StencilReactComponent<BdsAlertBodyElement, BdsAlertBodyEvents>;
export type BdsAlertHeaderEvents = NonNullable<unknown>;
export declare const BdsAlertHeader: StencilReactComponent<BdsAlertHeaderElement, BdsAlertHeaderEvents>;
export type BdsAutocompleteEvents = {
    onBdsChange: EventName<BdsAutocompleteCustomEvent<AutocompleteChangeEventDetail>>;
    onBdsSelectedChange: EventName<BdsAutocompleteCustomEvent<AutocompleteSelectedChangeEventDetail>>;
    onBdsMultiselectedChange: EventName<BdsAutocompleteCustomEvent<AutocompleteMultiSelectedChangeEventDetail>>;
    onBdsInput: EventName<BdsAutocompleteCustomEvent<InputEvent>>;
    onBdsCancel: EventName<BdsAutocompleteCustomEvent<AutocompleteChangeEventDetail>>;
    onBdsFocus: EventName<CustomEvent<void>>;
    onBdsBlur: EventName<CustomEvent<void>>;
};
export declare const BdsAutocomplete: StencilReactComponent<BdsAutocompleteElement, BdsAutocompleteEvents>;
export type BdsAvatarEvents = {
    onBdsClickAvatar: EventName<BdsAvatarCustomEvent<PointerEvent>>;
    onBdsImageUpload: EventName<CustomEvent<string>>;
};
export declare const BdsAvatar: StencilReactComponent<BdsAvatarElement, BdsAvatarEvents>;
export type BdsAvatarGroupEvents = {
    onBdsClickAvatarGroup: EventName<BdsAvatarGroupCustomEvent<PointerEvent>>;
};
export declare const BdsAvatarGroup: StencilReactComponent<BdsAvatarGroupElement, BdsAvatarGroupEvents>;
export type BdsBadgeEvents = NonNullable<unknown>;
export declare const BdsBadge: StencilReactComponent<BdsBadgeElement, BdsBadgeEvents>;
export type BdsBannerEvents = {
    onBdsBannerClose: EventName<CustomEvent<void>>;
};
export declare const BdsBanner: StencilReactComponent<BdsBannerElement, BdsBannerEvents>;
export type BdsBannerLinkEvents = {
    onBdsBannerLink: EventName<BdsBannerLinkCustomEvent<HTMLBdsBannerElement>>;
};
export declare const BdsBannerLink: StencilReactComponent<BdsBannerLinkElement, BdsBannerLinkEvents>;
export type BdsBreadcrumbEvents = NonNullable<unknown>;
export declare const BdsBreadcrumb: StencilReactComponent<BdsBreadcrumbElement, BdsBreadcrumbEvents>;
export type BdsButtonEvents = {
    onBdsClick: EventName<BdsButtonCustomEvent<PointerEvent | KeyboardEvent>>;
};
export declare const BdsButton: StencilReactComponent<BdsButtonElement, BdsButtonEvents>;
export type BdsButtonGroupEvents = {
    onButtonSelected: EventName<CustomEvent<string>>;
};
export declare const BdsButtonGroup: StencilReactComponent<BdsButtonGroupElement, BdsButtonGroupEvents>;
export type BdsButtonIconEvents = {
    onBdsClick: EventName<BdsButtonIconCustomEvent<PointerEvent>>;
};
export declare const BdsButtonIcon: StencilReactComponent<BdsButtonIconElement, BdsButtonIconEvents>;
export type BdsCardEvents = {
    onBdsClick: EventName<BdsCardCustomEvent<PointerEvent | KeyboardEvent>>;
};
export declare const BdsCard: StencilReactComponent<BdsCardElement, BdsCardEvents>;
export type BdsCardBodyEvents = NonNullable<unknown>;
export declare const BdsCardBody: StencilReactComponent<BdsCardBodyElement, BdsCardBodyEvents>;
export type BdsCardColorEvents = NonNullable<unknown>;
export declare const BdsCardColor: StencilReactComponent<BdsCardColorElement, BdsCardColorEvents>;
export type BdsCardFooterEvents = NonNullable<unknown>;
export declare const BdsCardFooter: StencilReactComponent<BdsCardFooterElement, BdsCardFooterEvents>;
export type BdsCardHeaderEvents = NonNullable<unknown>;
export declare const BdsCardHeader: StencilReactComponent<BdsCardHeaderElement, BdsCardHeaderEvents>;
export type BdsCardSubtitleEvents = NonNullable<unknown>;
export declare const BdsCardSubtitle: StencilReactComponent<BdsCardSubtitleElement, BdsCardSubtitleEvents>;
export type BdsCardTitleEvents = NonNullable<unknown>;
export declare const BdsCardTitle: StencilReactComponent<BdsCardTitleElement, BdsCardTitleEvents>;
export type BdsCarouselEvents = {
    onBdsChangeCarousel: EventName<BdsCarouselCustomEvent<{
        value: Itens;
    }>>;
};
export declare const BdsCarousel: StencilReactComponent<BdsCarouselElement, BdsCarouselEvents>;
export type BdsCarouselItemEvents = NonNullable<unknown>;
export declare const BdsCarouselItem: StencilReactComponent<BdsCarouselItemElement, BdsCarouselItemEvents>;
export type BdsCheckboxEvents = {
    onBdsChange: EventName<CustomEvent<{
        checked: boolean;
    }>>;
    onBdsInput: EventName<BdsCheckboxCustomEvent<KeyboardEvent>>;
};
export declare const BdsCheckbox: StencilReactComponent<BdsCheckboxElement, BdsCheckboxEvents>;
export type BdsChipEvents = {
    onBdsDelete: EventName<CustomEvent<{
        id: string;
    }>>;
};
export declare const BdsChip: StencilReactComponent<BdsChipElement, BdsChipEvents>;
export type BdsChipClickableEvents = {
    onChipClickableClose: EventName<CustomEvent<{
        id: string;
    }>>;
    onChipClickableClick: EventName<CustomEvent<void>>;
};
export declare const BdsChipClickable: StencilReactComponent<BdsChipClickableElement, BdsChipClickableEvents>;
export type BdsChipSelectedEvents = {
    onChipClick: EventName<CustomEvent<{
        selected: boolean;
    }>>;
};
export declare const BdsChipSelected: StencilReactComponent<BdsChipSelectedElement, BdsChipSelectedEvents>;
export type BdsChipTagEvents = NonNullable<unknown>;
export declare const BdsChipTag: StencilReactComponent<BdsChipTagElement, BdsChipTagEvents>;
export type BdsCounterTextEvents = NonNullable<unknown>;
export declare const BdsCounterText: StencilReactComponent<BdsCounterTextElement, BdsCounterTextEvents>;
export type BdsDataTableEvents = {
    onBdsTableClick: EventName<CustomEvent<{
        item: {
            [key: string]: any;
        };
        index: number;
        nameButton: string;
    }>>;
    onBdsTableDelete: EventName<CustomEvent<{
        [key: string]: any;
    }>>;
    onBdsTableChange: EventName<CustomEvent<{
        [key: string]: any;
    }[]>>;
};
export declare const BdsDataTable: StencilReactComponent<BdsDataTableElement, BdsDataTableEvents>;
export type BdsDatepickerEvents = {
    onBdsStartDate: EventName<BdsDatepickerCustomEvent<{
        value: Date | null;
    }>>;
    onBdsEndDate: EventName<BdsDatepickerCustomEvent<{
        value: Date | null;
    }>>;
    onConcludeDatepicker: EventName<CustomEvent<{
        startDate: string;
        endDate?: string;
    } | {
        startDate: string;
    } | any>>;
    onEmptyConcludeDatepicker: EventName<CustomEvent<void>>;
};
export declare const BdsDatepicker: StencilReactComponent<BdsDatepickerElement, BdsDatepickerEvents>;
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
export declare const BdsDatepickerPeriod: StencilReactComponent<BdsDatepickerPeriodElement, BdsDatepickerPeriodEvents>;
export type BdsDatepickerSingleEvents = {
    onBdsDateSelected: EventName<BdsDatepickerSingleCustomEvent<{
        value: Date | null;
    }>>;
};
export declare const BdsDatepickerSingle: StencilReactComponent<BdsDatepickerSingleElement, BdsDatepickerSingleEvents>;
export type BdsDividerEvents = NonNullable<unknown>;
export declare const BdsDivider: StencilReactComponent<BdsDividerElement, BdsDividerEvents>;
export type BdsDropdownEvents = {
    onBdsToggle: EventName<CustomEvent<{
        value: boolean;
    }>>;
};
export declare const BdsDropdown: StencilReactComponent<BdsDropdownElement, BdsDropdownEvents>;
export type BdsExpansionPanelEvents = NonNullable<unknown>;
export declare const BdsExpansionPanel: StencilReactComponent<BdsExpansionPanelElement, BdsExpansionPanelEvents>;
export type BdsExpansionPanelBodyEvents = NonNullable<unknown>;
export declare const BdsExpansionPanelBody: StencilReactComponent<BdsExpansionPanelBodyElement, BdsExpansionPanelBodyEvents>;
export type BdsExpansionPanelHeaderEvents = NonNullable<unknown>;
export declare const BdsExpansionPanelHeader: StencilReactComponent<BdsExpansionPanelHeaderElement, BdsExpansionPanelHeaderEvents>;
export type BdsGridEvents = NonNullable<unknown>;
export declare const BdsGrid: StencilReactComponent<BdsGridElement, BdsGridEvents>;
export type BdsIconEvents = NonNullable<unknown>;
export declare const BdsIcon: StencilReactComponent<BdsIconElement, BdsIconEvents>;
export type BdsIllustrationEvents = NonNullable<unknown>;
export declare const BdsIllustration: StencilReactComponent<BdsIllustrationElement, BdsIllustrationEvents>;
export type BdsImageEvents = NonNullable<unknown>;
export declare const BdsImage: StencilReactComponent<BdsImageElement, BdsImageEvents>;
export type BdsInputEvents = {
    onBdsChange: EventName<CustomEvent<{
        value: string;
    }>>;
    onBdsInput: EventName<BdsInputCustomEvent<InputEvent>>;
    onBdsOnBlur: EventName<CustomEvent<void>>;
    onBdsFocus: EventName<CustomEvent<void>>;
    onBdsSubmit: EventName<BdsInputCustomEvent<{
        event: KeyboardEvent;
        value: string;
    }>>;
    onBdsPatternValidation: EventName<CustomEvent<boolean>>;
    onBdsKeyDownBackspace: EventName<BdsInputCustomEvent<{
        event: KeyboardEvent;
        value: string;
    }>>;
};
export declare const BdsInput: StencilReactComponent<BdsInputElement, BdsInputEvents>;
export type BdsInputChipsEvents = {
    onBdsChange: EventName<CustomEvent<{
        data: string[];
        value: string;
    }>>;
    onBdsChangeChips: EventName<CustomEvent<{
        data: string[];
        value: string;
    }>>;
    onBdsInputChipsFocus: EventName<CustomEvent<void>>;
    onBdsBlur: EventName<CustomEvent<string[]>>;
    onBdsInputChipsInput: EventName<BdsInputChipsCustomEvent<InputEvent>>;
    onBdsExtendedQuantityInput: EventName<CustomEvent<{
        value: boolean;
    }>>;
    onBdsSubmit: EventName<CustomEvent<{
        value: string[];
    }>>;
};
export declare const BdsInputChips: StencilReactComponent<BdsInputChipsElement, BdsInputChipsEvents>;
export type BdsInputEditableEvents = {
    onBdsInputEditableSave: EventName<BdsInputEditableCustomEvent<InputEditableEventDetail>>;
    onBdsChange: EventName<BdsInputEditableCustomEvent<InputEditableEventDetail>>;
    onBdsInput: EventName<BdsInputEditableCustomEvent<InputEvent>>;
    onBdsCancel: EventName<CustomEvent<void>>;
    onBdsFocus: EventName<CustomEvent<void>>;
    onBdsBlur: EventName<CustomEvent<void>>;
};
export declare const BdsInputEditable: StencilReactComponent<BdsInputEditableElement, BdsInputEditableEvents>;
export type BdsInputPasswordEvents = {
    onBdsInputPasswordChange: EventName<CustomEvent<{
        value: string | null;
    }>>;
    onBdsInputPasswordInput: EventName<BdsInputPasswordCustomEvent<InputEvent>>;
    onBdsInputPasswordBlur: EventName<CustomEvent<void>>;
    onBdsInputPasswordFocus: EventName<CustomEvent<void>>;
    onBdsInputPasswordSubmit: EventName<BdsInputPasswordCustomEvent<{
        event: KeyboardEvent;
        value: string | null;
    } | void>>;
    onBdsKeyDownBackspace: EventName<BdsInputPasswordCustomEvent<{
        event: KeyboardEvent;
        value: string | null;
    }>>;
};
export declare const BdsInputPassword: StencilReactComponent<BdsInputPasswordElement, BdsInputPasswordEvents>;
export type BdsInputPhoneNumberEvents = {
    onBdsPhoneNumberChange: EventName<CustomEvent<{
        value: string | null;
        code: string | null;
        isoCode: string | null;
        country: string | null;
    }>>;
    onBdsInput: EventName<BdsInputPhoneNumberCustomEvent<InputEvent>>;
    onBdsCancel: EventName<CustomEvent<void>>;
    onBdsFocus: EventName<CustomEvent<void>>;
    onBdsBlur: EventName<CustomEvent<void>>;
};
export declare const BdsInputPhoneNumber: StencilReactComponent<BdsInputPhoneNumberElement, BdsInputPhoneNumberEvents>;
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
    onBdsClickActionsButtons: EventName<CustomEvent<any>>;
};
export declare const BdsList: StencilReactComponent<BdsListElement, BdsListEvents>;
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
export declare const BdsListItem: StencilReactComponent<BdsListItemElement, BdsListItemEvents>;
export type BdsListItemContentEvents = NonNullable<unknown>;
export declare const BdsListItemContent: StencilReactComponent<BdsListItemContentElement, BdsListItemContentEvents>;
export type BdsLoadingBarEvents = NonNullable<unknown>;
export declare const BdsLoadingBar: StencilReactComponent<BdsLoadingBarElement, BdsLoadingBarEvents>;
export type BdsLoadingPageEvents = NonNullable<unknown>;
export declare const BdsLoadingPage: StencilReactComponent<BdsLoadingPageElement, BdsLoadingPageEvents>;
export type BdsLoadingSpinnerEvents = NonNullable<unknown>;
export declare const BdsLoadingSpinner: StencilReactComponent<BdsLoadingSpinnerElement, BdsLoadingSpinnerEvents>;
export type BdsMenuEvents = {
    onBdsToggle: EventName<CustomEvent<{
        value?: boolean;
    }>>;
};
export declare const BdsMenu: StencilReactComponent<BdsMenuElement, BdsMenuEvents>;
export type BdsMenuActionEvents = NonNullable<unknown>;
export declare const BdsMenuAction: StencilReactComponent<BdsMenuActionElement, BdsMenuActionEvents>;
export type BdsMenuExibitionEvents = NonNullable<unknown>;
export declare const BdsMenuExibition: StencilReactComponent<BdsMenuExibitionElement, BdsMenuExibitionEvents>;
export type BdsMenuListEvents = NonNullable<unknown>;
export declare const BdsMenuList: StencilReactComponent<BdsMenuListElement, BdsMenuListEvents>;
export type BdsMenuListItemEvents = NonNullable<unknown>;
export declare const BdsMenuListItem: StencilReactComponent<BdsMenuListItemElement, BdsMenuListItemEvents>;
export type BdsMenuSeparationEvents = NonNullable<unknown>;
export declare const BdsMenuSeparation: StencilReactComponent<BdsMenuSeparationElement, BdsMenuSeparationEvents>;
export type BdsModalEvents = {
    onBdsModalChanged: EventName<CustomEvent<{
        modalStatus: 'opened' | 'closed';
    }>>;
};
export declare const BdsModal: StencilReactComponent<BdsModalElement, BdsModalEvents>;
export type BdsModalActionEvents = NonNullable<unknown>;
export declare const BdsModalAction: StencilReactComponent<BdsModalActionElement, BdsModalActionEvents>;
export type BdsModalCloseButtonEvents = NonNullable<unknown>;
export declare const BdsModalCloseButton: StencilReactComponent<BdsModalCloseButtonElement, BdsModalCloseButtonEvents>;
export type BdsNavTreeEvents = {
    onBdsToogleChange: EventName<BdsNavTreeCustomEvent<{
        value?: boolean;
        element: HTMLElement;
    }>>;
};
export declare const BdsNavTree: StencilReactComponent<BdsNavTreeElement, BdsNavTreeEvents>;
export type BdsNavTreeGroupEvents = {
    onBdsNavTreeGroupCloseAll: EventName<CustomEvent<void>>;
    onBdsNavTreeGroupOpenAll: EventName<CustomEvent<void>>;
};
export declare const BdsNavTreeGroup: StencilReactComponent<BdsNavTreeGroupElement, BdsNavTreeGroupEvents>;
export type BdsNavTreeItemEvents = {
    onBdsToogleChange: EventName<BdsNavTreeItemCustomEvent<{
        value?: boolean;
        element: HTMLElement;
    }>>;
};
export declare const BdsNavTreeItem: StencilReactComponent<BdsNavTreeItemElement, BdsNavTreeItemEvents>;
export type BdsNavbarEvents = NonNullable<unknown>;
export declare const BdsNavbar: StencilReactComponent<BdsNavbarElement, BdsNavbarEvents>;
export type BdsNavbarContentEvents = NonNullable<unknown>;
export declare const BdsNavbarContent: StencilReactComponent<BdsNavbarContentElement, BdsNavbarContentEvents>;
export type BdsPaginationEvents = {
    onBdsPaginationChange: EventName<CustomEvent<number>>;
    onBdsItemsPerPageChange: EventName<CustomEvent<number>>;
};
export declare const BdsPagination: StencilReactComponent<BdsPaginationElement, BdsPaginationEvents>;
export type BdsPaperEvents = NonNullable<unknown>;
export declare const BdsPaper: StencilReactComponent<BdsPaperElement, BdsPaperEvents>;
export type BdsProgressBarEvents = NonNullable<unknown>;
export declare const BdsProgressBar: StencilReactComponent<BdsProgressBarElement, BdsProgressBarEvents>;
export type BdsRadioEvents = {
    onBdsChange: EventName<CustomEvent<{
        checked: boolean;
    }>>;
    onBdsClickChange: EventName<CustomEvent<{
        checked: boolean;
    }>>;
};
export declare const BdsRadio: StencilReactComponent<BdsRadioElement, BdsRadioEvents>;
export type BdsRadioGroupEvents = {
    onBdsRadioGroupChange: EventName<CustomEvent<{
        value?: string;
    }>>;
};
export declare const BdsRadioGroup: StencilReactComponent<BdsRadioGroupElement, BdsRadioGroupEvents>;
export type BdsRichTextEvents = {
    onBdsRichTextChange: EventName<CustomEvent<{
        value: string;
    }>>;
    onBdsRichTextInput: EventName<BdsRichTextCustomEvent<InputEvent>>;
    onBdsBlur: EventName<CustomEvent<void>>;
    onBdsFocus: EventName<CustomEvent<void>>;
};
export declare const BdsRichText: StencilReactComponent<BdsRichTextElement, BdsRichTextEvents>;
export type BdsSearchAnywhereEvents = {
    onBdsSearchChange: EventName<BdsSearchAnywhereCustomEvent<SearchAnywhereChangeEventDetail>>;
    onBdsSearchSelect: EventName<BdsSearchAnywhereCustomEvent<SearchAnywhereSelectEventDetail>>;
    onBdsSearchOpen: EventName<CustomEvent<any>>;
    onBdsSearchClose: EventName<CustomEvent<any>>;
};
export declare const BdsSearchAnywhere: StencilReactComponent<BdsSearchAnywhereElement, BdsSearchAnywhereEvents>;
export type BdsSelectEvents = {
    onBdsChange: EventName<BdsSelectCustomEvent<SelectChangeEventDetail>>;
    onBdsCancel: EventName<CustomEvent<void>>;
    onBdsFocus: EventName<CustomEvent<void>>;
    onBdsBlur: EventName<CustomEvent<void>>;
};
export declare const BdsSelect: StencilReactComponent<BdsSelectElement, BdsSelectEvents>;
export type BdsSelectChipsEvents = {
    onBdsChange: EventName<BdsSelectChipsCustomEvent<SelectChangeEvent>>;
    onBdsCancel: EventName<CustomEvent<void>>;
    onBdsFocus: EventName<CustomEvent<void>>;
    onBdsBlur: EventName<CustomEvent<void>>;
    onBdsChangeChips: EventName<CustomEvent<{
        data: string[];
        value: number;
    }>>;
    onBdsSelectChipsInput: EventName<BdsSelectChipsCustomEvent<InputEvent>>;
    onBdsSubmit: EventName<CustomEvent<void>>;
};
export declare const BdsSelectChips: StencilReactComponent<BdsSelectChipsElement, BdsSelectChipsEvents>;
export type BdsSelectOptionEvents = {
    onOptionSelected: EventName<CustomEvent<{
        value: any;
        label: string;
    }>>;
    onOptionChecked: EventName<CustomEvent<{
        value: string;
        label: string;
        checked: boolean;
    }>>;
};
export declare const BdsSelectOption: StencilReactComponent<BdsSelectOptionElement, BdsSelectOptionEvents>;
export type BdsSidebarEvents = {
    onBdsToggle: EventName<CustomEvent<{
        value: boolean;
    }>>;
};
export declare const BdsSidebar: StencilReactComponent<BdsSidebarElement, BdsSidebarEvents>;
export type BdsSkeletonEvents = NonNullable<unknown>;
export declare const BdsSkeleton: StencilReactComponent<BdsSkeletonElement, BdsSkeletonEvents>;
export type BdsSliderEvents = {
    onBdsChange: EventName<BdsSliderCustomEvent<StepOption>>;
};
export declare const BdsSlider: StencilReactComponent<BdsSliderElement, BdsSliderEvents>;
export type BdsStepEvents = NonNullable<unknown>;
export declare const BdsStep: StencilReactComponent<BdsStepElement, BdsStepEvents>;
export type BdsStepperEvents = NonNullable<unknown>;
export declare const BdsStepper: StencilReactComponent<BdsStepperElement, BdsStepperEvents>;
export type BdsSwitchEvents = {
    onBdsChange: EventName<CustomEvent<{
        checked: boolean;
    }>>;
};
export declare const BdsSwitch: StencilReactComponent<BdsSwitchElement, BdsSwitchEvents>;
export type BdsTabEvents = {
    onBdsTabChange: EventName<CustomEvent<string>>;
};
export declare const BdsTab: StencilReactComponent<BdsTabElement, BdsTabEvents>;
export type BdsTabGroupEvents = {
    onBdsTabChange: EventName<BdsTabGroupCustomEvent<HTMLBdsTabItemElement>>;
    onBdsTabDisabled: EventName<BdsTabGroupCustomEvent<HTMLBdsTabItemElement>>;
};
export declare const BdsTabGroup: StencilReactComponent<BdsTabGroupElement, BdsTabGroupEvents>;
export type BdsTabItemEvents = {
    onTabDisabled: EventName<CustomEvent<{
        item: number;
        disable: boolean;
    }>>;
};
export declare const BdsTabItem: StencilReactComponent<BdsTabItemElement, BdsTabItemEvents>;
export type BdsTabPanelEvents = NonNullable<unknown>;
export declare const BdsTabPanel: StencilReactComponent<BdsTabPanelElement, BdsTabPanelEvents>;
export type BdsTableEvents = NonNullable<unknown>;
export declare const BdsTable: StencilReactComponent<BdsTableElement, BdsTableEvents>;
export type BdsTableBodyEvents = NonNullable<unknown>;
export declare const BdsTableBody: StencilReactComponent<BdsTableBodyElement, BdsTableBodyEvents>;
export type BdsTableCellEvents = NonNullable<unknown>;
export declare const BdsTableCell: StencilReactComponent<BdsTableCellElement, BdsTableCellEvents>;
export type BdsTableHeaderEvents = NonNullable<unknown>;
export declare const BdsTableHeader: StencilReactComponent<BdsTableHeaderElement, BdsTableHeaderEvents>;
export type BdsTableRowEvents = NonNullable<unknown>;
export declare const BdsTableRow: StencilReactComponent<BdsTableRowElement, BdsTableRowEvents>;
export type BdsTableThEvents = NonNullable<unknown>;
export declare const BdsTableTh: StencilReactComponent<BdsTableThElement, BdsTableThEvents>;
export type BdsTabsEvents = {
    onScrollButtonClick: EventName<BdsTabsCustomEvent<Overflow>>;
    onBdsTabInit: EventName<CustomEvent<string>>;
};
export declare const BdsTabs: StencilReactComponent<BdsTabsElement, BdsTabsEvents>;
export type BdsTestComponentEvents = NonNullable<unknown>;
export declare const BdsTestComponent: StencilReactComponent<BdsTestComponentElement, BdsTestComponentEvents>;
export type BdsThemeProviderEvents = NonNullable<unknown>;
export declare const BdsThemeProvider: StencilReactComponent<BdsThemeProviderElement, BdsThemeProviderEvents>;
export type BdsToastEvents = {
    onToastButtonClick: EventName<BdsToastCustomEvent<HTMLBdsToastElement>>;
};
export declare const BdsToast: StencilReactComponent<BdsToastElement, BdsToastEvents>;
export type BdsToastContainerEvents = NonNullable<unknown>;
export declare const BdsToastContainer: StencilReactComponent<BdsToastContainerElement, BdsToastContainerEvents>;
export type BdsTooltipEvents = NonNullable<unknown>;
export declare const BdsTooltip: StencilReactComponent<BdsTooltipElement, BdsTooltipEvents>;
export type BdsTypoEvents = NonNullable<unknown>;
export declare const BdsTypo: StencilReactComponent<BdsTypoElement, BdsTypoEvents>;
export type BdsUploadEvents = {
    onBdsUploadDelete: EventName<BdsUploadCustomEvent<{
        value: File[];
    }>>;
    onBdsUploadChange: EventName<BdsUploadCustomEvent<{
        value: File[];
    }>>;
};
export declare const BdsUpload: StencilReactComponent<BdsUploadElement, BdsUploadEvents>;
export type BdsWarningEvents = NonNullable<unknown>;
export declare const BdsWarning: StencilReactComponent<BdsWarningElement, BdsWarningEvents>;
