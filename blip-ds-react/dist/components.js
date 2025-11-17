'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import { BdsAccordionBody as BdsAccordionBodyElement, defineCustomElement as defineBdsAccordionBody } from "blip-ds/dist/components/bds-accordion-body.js";
import { BdsAccordionGroup as BdsAccordionGroupElement, defineCustomElement as defineBdsAccordionGroup } from "blip-ds/dist/components/bds-accordion-group.js";
import { BdsAccordionHeader as BdsAccordionHeaderElement, defineCustomElement as defineBdsAccordionHeader } from "blip-ds/dist/components/bds-accordion-header.js";
import { BdsAccordion as BdsAccordionElement, defineCustomElement as defineBdsAccordion } from "blip-ds/dist/components/bds-accordion.js";
import { BdsAlertActions as BdsAlertActionsElement, defineCustomElement as defineBdsAlertActions } from "blip-ds/dist/components/bds-alert-actions.js";
import { BdsAlertBody as BdsAlertBodyElement, defineCustomElement as defineBdsAlertBody } from "blip-ds/dist/components/bds-alert-body.js";
import { BdsAlertHeader as BdsAlertHeaderElement, defineCustomElement as defineBdsAlertHeader } from "blip-ds/dist/components/bds-alert-header.js";
import { BdsAlert as BdsAlertElement, defineCustomElement as defineBdsAlert } from "blip-ds/dist/components/bds-alert.js";
import { BdsAutocomplete as BdsAutocompleteElement, defineCustomElement as defineBdsAutocomplete } from "blip-ds/dist/components/bds-autocomplete.js";
import { BdsAvatarGroup as BdsAvatarGroupElement, defineCustomElement as defineBdsAvatarGroup } from "blip-ds/dist/components/bds-avatar-group.js";
import { BdsAvatar as BdsAvatarElement, defineCustomElement as defineBdsAvatar } from "blip-ds/dist/components/bds-avatar.js";
import { BdsBadge as BdsBadgeElement, defineCustomElement as defineBdsBadge } from "blip-ds/dist/components/bds-badge.js";
import { BdsBannerLink as BdsBannerLinkElement, defineCustomElement as defineBdsBannerLink } from "blip-ds/dist/components/bds-banner-link.js";
import { BdsBanner as BdsBannerElement, defineCustomElement as defineBdsBanner } from "blip-ds/dist/components/bds-banner.js";
import { BdsBreadcrumb as BdsBreadcrumbElement, defineCustomElement as defineBdsBreadcrumb } from "blip-ds/dist/components/bds-breadcrumb.js";
import { BdsButtonGroup as BdsButtonGroupElement, defineCustomElement as defineBdsButtonGroup } from "blip-ds/dist/components/bds-button-group.js";
import { BdsButtonIcon as BdsButtonIconElement, defineCustomElement as defineBdsButtonIcon } from "blip-ds/dist/components/bds-button-icon.js";
import { BdsButton as BdsButtonElement, defineCustomElement as defineBdsButton } from "blip-ds/dist/components/bds-button.js";
import { BdsCardBody as BdsCardBodyElement, defineCustomElement as defineBdsCardBody } from "blip-ds/dist/components/bds-card-body.js";
import { BdsCardColor as BdsCardColorElement, defineCustomElement as defineBdsCardColor } from "blip-ds/dist/components/bds-card-color.js";
import { BdsCardFooter as BdsCardFooterElement, defineCustomElement as defineBdsCardFooter } from "blip-ds/dist/components/bds-card-footer.js";
import { BdsCardHeader as BdsCardHeaderElement, defineCustomElement as defineBdsCardHeader } from "blip-ds/dist/components/bds-card-header.js";
import { BdsCardSubtitle as BdsCardSubtitleElement, defineCustomElement as defineBdsCardSubtitle } from "blip-ds/dist/components/bds-card-subtitle.js";
import { BdsCardTitle as BdsCardTitleElement, defineCustomElement as defineBdsCardTitle } from "blip-ds/dist/components/bds-card-title.js";
import { BdsCard as BdsCardElement, defineCustomElement as defineBdsCard } from "blip-ds/dist/components/bds-card.js";
import { BdsCarouselItem as BdsCarouselItemElement, defineCustomElement as defineBdsCarouselItem } from "blip-ds/dist/components/bds-carousel-item.js";
import { BdsCarousel as BdsCarouselElement, defineCustomElement as defineBdsCarousel } from "blip-ds/dist/components/bds-carousel.js";
import { BdsCheckbox as BdsCheckboxElement, defineCustomElement as defineBdsCheckbox } from "blip-ds/dist/components/bds-checkbox.js";
import { BdsChipClickable as BdsChipClickableElement, defineCustomElement as defineBdsChipClickable } from "blip-ds/dist/components/bds-chip-clickable.js";
import { BdsChipSelected as BdsChipSelectedElement, defineCustomElement as defineBdsChipSelected } from "blip-ds/dist/components/bds-chip-selected.js";
import { BdsChipTag as BdsChipTagElement, defineCustomElement as defineBdsChipTag } from "blip-ds/dist/components/bds-chip-tag.js";
import { BdsChip as BdsChipElement, defineCustomElement as defineBdsChip } from "blip-ds/dist/components/bds-chip.js";
import { BdsCounterText as BdsCounterTextElement, defineCustomElement as defineBdsCounterText } from "blip-ds/dist/components/bds-counter-text.js";
import { BdsDataTable as BdsDataTableElement, defineCustomElement as defineBdsDataTable } from "blip-ds/dist/components/bds-data-table.js";
import { BdsDatepickerPeriod as BdsDatepickerPeriodElement, defineCustomElement as defineBdsDatepickerPeriod } from "blip-ds/dist/components/bds-datepicker-period.js";
import { BdsDatepickerSingle as BdsDatepickerSingleElement, defineCustomElement as defineBdsDatepickerSingle } from "blip-ds/dist/components/bds-datepicker-single.js";
import { BdsDatepicker as BdsDatepickerElement, defineCustomElement as defineBdsDatepicker } from "blip-ds/dist/components/bds-datepicker.js";
import { BdsDivider as BdsDividerElement, defineCustomElement as defineBdsDivider } from "blip-ds/dist/components/bds-divider.js";
import { BdsDropdown as BdsDropdownElement, defineCustomElement as defineBdsDropdown } from "blip-ds/dist/components/bds-dropdown.js";
import { BdsExpansionPanelBody as BdsExpansionPanelBodyElement, defineCustomElement as defineBdsExpansionPanelBody } from "blip-ds/dist/components/bds-expansion-panel-body.js";
import { BdsExpansionPanelHeader as BdsExpansionPanelHeaderElement, defineCustomElement as defineBdsExpansionPanelHeader } from "blip-ds/dist/components/bds-expansion-panel-header.js";
import { BdsExpansionPanel as BdsExpansionPanelElement, defineCustomElement as defineBdsExpansionPanel } from "blip-ds/dist/components/bds-expansion-panel.js";
import { BdsGrid as BdsGridElement, defineCustomElement as defineBdsGrid } from "blip-ds/dist/components/bds-grid.js";
import { BdsIcon as BdsIconElement, defineCustomElement as defineBdsIcon } from "blip-ds/dist/components/bds-icon.js";
import { BdsIllustration as BdsIllustrationElement, defineCustomElement as defineBdsIllustration } from "blip-ds/dist/components/bds-illustration.js";
import { BdsImage as BdsImageElement, defineCustomElement as defineBdsImage } from "blip-ds/dist/components/bds-image.js";
import { BdsInputChips as BdsInputChipsElement, defineCustomElement as defineBdsInputChips } from "blip-ds/dist/components/bds-input-chips.js";
import { BdsInputEditable as BdsInputEditableElement, defineCustomElement as defineBdsInputEditable } from "blip-ds/dist/components/bds-input-editable.js";
import { BdsInputPassword as BdsInputPasswordElement, defineCustomElement as defineBdsInputPassword } from "blip-ds/dist/components/bds-input-password.js";
import { BdsInputPhoneNumber as BdsInputPhoneNumberElement, defineCustomElement as defineBdsInputPhoneNumber } from "blip-ds/dist/components/bds-input-phone-number.js";
import { BdsInput as BdsInputElement, defineCustomElement as defineBdsInput } from "blip-ds/dist/components/bds-input.js";
import { BdsListItemContent as BdsListItemContentElement, defineCustomElement as defineBdsListItemContent } from "blip-ds/dist/components/bds-list-item-content.js";
import { BdsListItem as BdsListItemElement, defineCustomElement as defineBdsListItem } from "blip-ds/dist/components/bds-list-item.js";
import { BdsList as BdsListElement, defineCustomElement as defineBdsList } from "blip-ds/dist/components/bds-list.js";
import { BdsLoadingBar as BdsLoadingBarElement, defineCustomElement as defineBdsLoadingBar } from "blip-ds/dist/components/bds-loading-bar.js";
import { BdsLoadingPage as BdsLoadingPageElement, defineCustomElement as defineBdsLoadingPage } from "blip-ds/dist/components/bds-loading-page.js";
import { BdsLoadingSpinner as BdsLoadingSpinnerElement, defineCustomElement as defineBdsLoadingSpinner } from "blip-ds/dist/components/bds-loading-spinner.js";
import { BdsMenuAction as BdsMenuActionElement, defineCustomElement as defineBdsMenuAction } from "blip-ds/dist/components/bds-menu-action.js";
import { BdsMenuExibition as BdsMenuExibitionElement, defineCustomElement as defineBdsMenuExibition } from "blip-ds/dist/components/bds-menu-exibition.js";
import { BdsMenuListItem as BdsMenuListItemElement, defineCustomElement as defineBdsMenuListItem } from "blip-ds/dist/components/bds-menu-list-item.js";
import { BdsMenuList as BdsMenuListElement, defineCustomElement as defineBdsMenuList } from "blip-ds/dist/components/bds-menu-list.js";
import { BdsMenuSeparation as BdsMenuSeparationElement, defineCustomElement as defineBdsMenuSeparation } from "blip-ds/dist/components/bds-menu-separation.js";
import { BdsMenu as BdsMenuElement, defineCustomElement as defineBdsMenu } from "blip-ds/dist/components/bds-menu.js";
import { BdsModalAction as BdsModalActionElement, defineCustomElement as defineBdsModalAction } from "blip-ds/dist/components/bds-modal-action.js";
import { BdsModalCloseButton as BdsModalCloseButtonElement, defineCustomElement as defineBdsModalCloseButton } from "blip-ds/dist/components/bds-modal-close-button.js";
import { BdsModal as BdsModalElement, defineCustomElement as defineBdsModal } from "blip-ds/dist/components/bds-modal.js";
import { BdsNavTreeGroup as BdsNavTreeGroupElement, defineCustomElement as defineBdsNavTreeGroup } from "blip-ds/dist/components/bds-nav-tree-group.js";
import { BdsNavTreeItem as BdsNavTreeItemElement, defineCustomElement as defineBdsNavTreeItem } from "blip-ds/dist/components/bds-nav-tree-item.js";
import { BdsNavTree as BdsNavTreeElement, defineCustomElement as defineBdsNavTree } from "blip-ds/dist/components/bds-nav-tree.js";
import { BdsNavbarContent as BdsNavbarContentElement, defineCustomElement as defineBdsNavbarContent } from "blip-ds/dist/components/bds-navbar-content.js";
import { BdsNavbar as BdsNavbarElement, defineCustomElement as defineBdsNavbar } from "blip-ds/dist/components/bds-navbar.js";
import { BdsPagination as BdsPaginationElement, defineCustomElement as defineBdsPagination } from "blip-ds/dist/components/bds-pagination.js";
import { BdsPaper as BdsPaperElement, defineCustomElement as defineBdsPaper } from "blip-ds/dist/components/bds-paper.js";
import { BdsProgressBar as BdsProgressBarElement, defineCustomElement as defineBdsProgressBar } from "blip-ds/dist/components/bds-progress-bar.js";
import { BdsRadioGroup as BdsRadioGroupElement, defineCustomElement as defineBdsRadioGroup } from "blip-ds/dist/components/bds-radio-group.js";
import { BdsRadio as BdsRadioElement, defineCustomElement as defineBdsRadio } from "blip-ds/dist/components/bds-radio.js";
import { BdsRichText as BdsRichTextElement, defineCustomElement as defineBdsRichText } from "blip-ds/dist/components/bds-rich-text.js";
import { BdsSearchAnywhere as BdsSearchAnywhereElement, defineCustomElement as defineBdsSearchAnywhere } from "blip-ds/dist/components/bds-search-anywhere.js";
import { BdsSelectChips as BdsSelectChipsElement, defineCustomElement as defineBdsSelectChips } from "blip-ds/dist/components/bds-select-chips.js";
import { BdsSelectOption as BdsSelectOptionElement, defineCustomElement as defineBdsSelectOption } from "blip-ds/dist/components/bds-select-option.js";
import { BdsSelect as BdsSelectElement, defineCustomElement as defineBdsSelect } from "blip-ds/dist/components/bds-select.js";
import { BdsSidebar as BdsSidebarElement, defineCustomElement as defineBdsSidebar } from "blip-ds/dist/components/bds-sidebar.js";
import { BdsSkeleton as BdsSkeletonElement, defineCustomElement as defineBdsSkeleton } from "blip-ds/dist/components/bds-skeleton.js";
import { BdsSlider as BdsSliderElement, defineCustomElement as defineBdsSlider } from "blip-ds/dist/components/bds-slider.js";
import { BdsStep as BdsStepElement, defineCustomElement as defineBdsStep } from "blip-ds/dist/components/bds-step.js";
import { BdsStepper as BdsStepperElement, defineCustomElement as defineBdsStepper } from "blip-ds/dist/components/bds-stepper.js";
import { BdsSwitch as BdsSwitchElement, defineCustomElement as defineBdsSwitch } from "blip-ds/dist/components/bds-switch.js";
import { BdsTabGroup as BdsTabGroupElement, defineCustomElement as defineBdsTabGroup } from "blip-ds/dist/components/bds-tab-group.js";
import { BdsTabItem as BdsTabItemElement, defineCustomElement as defineBdsTabItem } from "blip-ds/dist/components/bds-tab-item.js";
import { BdsTabPanel as BdsTabPanelElement, defineCustomElement as defineBdsTabPanel } from "blip-ds/dist/components/bds-tab-panel.js";
import { BdsTab as BdsTabElement, defineCustomElement as defineBdsTab } from "blip-ds/dist/components/bds-tab.js";
import { BdsTableBody as BdsTableBodyElement, defineCustomElement as defineBdsTableBody } from "blip-ds/dist/components/bds-table-body.js";
import { BdsTableCell as BdsTableCellElement, defineCustomElement as defineBdsTableCell } from "blip-ds/dist/components/bds-table-cell.js";
import { BdsTableHeader as BdsTableHeaderElement, defineCustomElement as defineBdsTableHeader } from "blip-ds/dist/components/bds-table-header.js";
import { BdsTableRow as BdsTableRowElement, defineCustomElement as defineBdsTableRow } from "blip-ds/dist/components/bds-table-row.js";
import { BdsTableTh as BdsTableThElement, defineCustomElement as defineBdsTableTh } from "blip-ds/dist/components/bds-table-th.js";
import { BdsTable as BdsTableElement, defineCustomElement as defineBdsTable } from "blip-ds/dist/components/bds-table.js";
import { BdsTabs as BdsTabsElement, defineCustomElement as defineBdsTabs } from "blip-ds/dist/components/bds-tabs.js";
import { BdsTestComponent as BdsTestComponentElement, defineCustomElement as defineBdsTestComponent } from "blip-ds/dist/components/bds-test-component.js";
import { BdsThemeProvider as BdsThemeProviderElement, defineCustomElement as defineBdsThemeProvider } from "blip-ds/dist/components/bds-theme-provider.js";
import { BdsToastContainer as BdsToastContainerElement, defineCustomElement as defineBdsToastContainer } from "blip-ds/dist/components/bds-toast-container.js";
import { BdsToast as BdsToastElement, defineCustomElement as defineBdsToast } from "blip-ds/dist/components/bds-toast.js";
import { BdsTooltip as BdsTooltipElement, defineCustomElement as defineBdsTooltip } from "blip-ds/dist/components/bds-tooltip.js";
import { BdsTypo as BdsTypoElement, defineCustomElement as defineBdsTypo } from "blip-ds/dist/components/bds-typo.js";
import { BdsUpload as BdsUploadElement, defineCustomElement as defineBdsUpload } from "blip-ds/dist/components/bds-upload.js";
import { BdsWarning as BdsWarningElement, defineCustomElement as defineBdsWarning } from "blip-ds/dist/components/bds-warning.js";
import React from 'react';
export const BdsAccordion = createComponent({
    tagName: 'bds-accordion',
    elementClass: BdsAccordionElement,
    react: React,
    events: {
        onBdsToggle: 'bdsToggle',
        onBdsAccordionOpen: 'bdsAccordionOpen',
        onBdsAccordionClose: 'bdsAccordionClose'
    },
    defineCustomElement: defineBdsAccordion
});
export const BdsAccordionBody = createComponent({
    tagName: 'bds-accordion-body',
    elementClass: BdsAccordionBodyElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsAccordionBody
});
export const BdsAccordionGroup = createComponent({
    tagName: 'bds-accordion-group',
    elementClass: BdsAccordionGroupElement,
    react: React,
    events: {
        onBdsAccordionCloseAll: 'bdsAccordionCloseAll',
        onBdsAccordionOpenAll: 'bdsAccordionOpenAll'
    },
    defineCustomElement: defineBdsAccordionGroup
});
export const BdsAccordionHeader = createComponent({
    tagName: 'bds-accordion-header',
    elementClass: BdsAccordionHeaderElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsAccordionHeader
});
export const BdsAlert = createComponent({
    tagName: 'bds-alert',
    elementClass: BdsAlertElement,
    react: React,
    events: { onBdsAlertChanged: 'bdsAlertChanged' },
    defineCustomElement: defineBdsAlert
});
export const BdsAlertActions = createComponent({
    tagName: 'bds-alert-actions',
    elementClass: BdsAlertActionsElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsAlertActions
});
export const BdsAlertBody = createComponent({
    tagName: 'bds-alert-body',
    elementClass: BdsAlertBodyElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsAlertBody
});
export const BdsAlertHeader = createComponent({
    tagName: 'bds-alert-header',
    elementClass: BdsAlertHeaderElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsAlertHeader
});
export const BdsAutocomplete = createComponent({
    tagName: 'bds-autocomplete',
    elementClass: BdsAutocompleteElement,
    react: React,
    events: {
        onBdsChange: 'bdsChange',
        onBdsSelectedChange: 'bdsSelectedChange',
        onBdsMultiselectedChange: 'bdsMultiselectedChange',
        onBdsInput: 'bdsInput',
        onBdsCancel: 'bdsCancel',
        onBdsFocus: 'bdsFocus',
        onBdsBlur: 'bdsBlur'
    },
    defineCustomElement: defineBdsAutocomplete
});
export const BdsAvatar = createComponent({
    tagName: 'bds-avatar',
    elementClass: BdsAvatarElement,
    react: React,
    events: {
        onBdsClickAvatar: 'bdsClickAvatar',
        onBdsImageUpload: 'bdsImageUpload'
    },
    defineCustomElement: defineBdsAvatar
});
export const BdsAvatarGroup = createComponent({
    tagName: 'bds-avatar-group',
    elementClass: BdsAvatarGroupElement,
    react: React,
    events: { onBdsClickAvatarGroup: 'bdsClickAvatarGroup' },
    defineCustomElement: defineBdsAvatarGroup
});
export const BdsBadge = createComponent({
    tagName: 'bds-badge',
    elementClass: BdsBadgeElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsBadge
});
export const BdsBanner = createComponent({
    tagName: 'bds-banner',
    elementClass: BdsBannerElement,
    react: React,
    events: { onBdsBannerClose: 'bdsBannerClose' },
    defineCustomElement: defineBdsBanner
});
export const BdsBannerLink = createComponent({
    tagName: 'bds-banner-link',
    elementClass: BdsBannerLinkElement,
    react: React,
    events: { onBdsBannerLink: 'bdsBannerLink' },
    defineCustomElement: defineBdsBannerLink
});
export const BdsBreadcrumb = createComponent({
    tagName: 'bds-breadcrumb',
    elementClass: BdsBreadcrumbElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsBreadcrumb
});
export const BdsButton = createComponent({
    tagName: 'bds-button',
    elementClass: BdsButtonElement,
    react: React,
    events: { onBdsClick: 'bdsClick' },
    defineCustomElement: defineBdsButton
});
export const BdsButtonGroup = createComponent({
    tagName: 'bds-button-group',
    elementClass: BdsButtonGroupElement,
    react: React,
    events: { onButtonSelected: 'buttonSelected' },
    defineCustomElement: defineBdsButtonGroup
});
export const BdsButtonIcon = createComponent({
    tagName: 'bds-button-icon',
    elementClass: BdsButtonIconElement,
    react: React,
    events: { onBdsClick: 'bdsClick' },
    defineCustomElement: defineBdsButtonIcon
});
export const BdsCard = createComponent({
    tagName: 'bds-card',
    elementClass: BdsCardElement,
    react: React,
    events: { onBdsClick: 'bdsClick' },
    defineCustomElement: defineBdsCard
});
export const BdsCardBody = createComponent({
    tagName: 'bds-card-body',
    elementClass: BdsCardBodyElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsCardBody
});
export const BdsCardColor = createComponent({
    tagName: 'bds-card-color',
    elementClass: BdsCardColorElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsCardColor
});
export const BdsCardFooter = createComponent({
    tagName: 'bds-card-footer',
    elementClass: BdsCardFooterElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsCardFooter
});
export const BdsCardHeader = createComponent({
    tagName: 'bds-card-header',
    elementClass: BdsCardHeaderElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsCardHeader
});
export const BdsCardSubtitle = createComponent({
    tagName: 'bds-card-subtitle',
    elementClass: BdsCardSubtitleElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsCardSubtitle
});
export const BdsCardTitle = createComponent({
    tagName: 'bds-card-title',
    elementClass: BdsCardTitleElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsCardTitle
});
export const BdsCarousel = createComponent({
    tagName: 'bds-carousel',
    elementClass: BdsCarouselElement,
    react: React,
    events: { onBdsChangeCarousel: 'bdsChangeCarousel' },
    defineCustomElement: defineBdsCarousel
});
export const BdsCarouselItem = createComponent({
    tagName: 'bds-carousel-item',
    elementClass: BdsCarouselItemElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsCarouselItem
});
export const BdsCheckbox = createComponent({
    tagName: 'bds-checkbox',
    elementClass: BdsCheckboxElement,
    react: React,
    events: {
        onBdsChange: 'bdsChange',
        onBdsInput: 'bdsInput'
    },
    defineCustomElement: defineBdsCheckbox
});
export const BdsChip = createComponent({
    tagName: 'bds-chip',
    elementClass: BdsChipElement,
    react: React,
    events: { onBdsDelete: 'bdsDelete' },
    defineCustomElement: defineBdsChip
});
export const BdsChipClickable = createComponent({
    tagName: 'bds-chip-clickable',
    elementClass: BdsChipClickableElement,
    react: React,
    events: {
        onChipClickableClose: 'chipClickableClose',
        onChipClickableClick: 'chipClickableClick'
    },
    defineCustomElement: defineBdsChipClickable
});
export const BdsChipSelected = createComponent({
    tagName: 'bds-chip-selected',
    elementClass: BdsChipSelectedElement,
    react: React,
    events: { onChipClick: 'chipClick' },
    defineCustomElement: defineBdsChipSelected
});
export const BdsChipTag = createComponent({
    tagName: 'bds-chip-tag',
    elementClass: BdsChipTagElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsChipTag
});
export const BdsCounterText = createComponent({
    tagName: 'bds-counter-text',
    elementClass: BdsCounterTextElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsCounterText
});
export const BdsDataTable = createComponent({
    tagName: 'bds-data-table',
    elementClass: BdsDataTableElement,
    react: React,
    events: {
        onBdsTableClick: 'bdsTableClick',
        onBdsTableDelete: 'bdsTableDelete',
        onBdsTableChange: 'bdsTableChange'
    },
    defineCustomElement: defineBdsDataTable
});
export const BdsDatepicker = createComponent({
    tagName: 'bds-datepicker',
    elementClass: BdsDatepickerElement,
    react: React,
    events: {
        onBdsStartDate: 'bdsStartDate',
        onBdsEndDate: 'bdsEndDate',
        onConcludeDatepicker: 'concludeDatepicker',
        onEmptyConcludeDatepicker: 'emptyConcludeDatepicker'
    },
    defineCustomElement: defineBdsDatepicker
});
export const BdsDatepickerPeriod = createComponent({
    tagName: 'bds-datepicker-period',
    elementClass: BdsDatepickerPeriodElement,
    react: React,
    events: {
        onBdsStartDate: 'bdsStartDate',
        onBdsEndDate: 'bdsEndDate',
        onBdsClickDayButton: 'bdsClickDayButton'
    },
    defineCustomElement: defineBdsDatepickerPeriod
});
export const BdsDatepickerSingle = createComponent({
    tagName: 'bds-datepicker-single',
    elementClass: BdsDatepickerSingleElement,
    react: React,
    events: { onBdsDateSelected: 'bdsDateSelected' },
    defineCustomElement: defineBdsDatepickerSingle
});
export const BdsDivider = createComponent({
    tagName: 'bds-divider',
    elementClass: BdsDividerElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsDivider
});
export const BdsDropdown = createComponent({
    tagName: 'bds-dropdown',
    elementClass: BdsDropdownElement,
    react: React,
    events: { onBdsToggle: 'bdsToggle' },
    defineCustomElement: defineBdsDropdown
});
export const BdsExpansionPanel = createComponent({
    tagName: 'bds-expansion-panel',
    elementClass: BdsExpansionPanelElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsExpansionPanel
});
export const BdsExpansionPanelBody = createComponent({
    tagName: 'bds-expansion-panel-body',
    elementClass: BdsExpansionPanelBodyElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsExpansionPanelBody
});
export const BdsExpansionPanelHeader = createComponent({
    tagName: 'bds-expansion-panel-header',
    elementClass: BdsExpansionPanelHeaderElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsExpansionPanelHeader
});
export const BdsGrid = createComponent({
    tagName: 'bds-grid',
    elementClass: BdsGridElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsGrid
});
export const BdsIcon = createComponent({
    tagName: 'bds-icon',
    elementClass: BdsIconElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsIcon
});
export const BdsIllustration = createComponent({
    tagName: 'bds-illustration',
    elementClass: BdsIllustrationElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsIllustration
});
export const BdsImage = createComponent({
    tagName: 'bds-image',
    elementClass: BdsImageElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsImage
});
export const BdsInput = createComponent({
    tagName: 'bds-input',
    elementClass: BdsInputElement,
    react: React,
    events: {
        onBdsChange: 'bdsChange',
        onBdsInput: 'bdsInput',
        onBdsOnBlur: 'bdsOnBlur',
        onBdsFocus: 'bdsFocus',
        onBdsSubmit: 'bdsSubmit',
        onBdsPatternValidation: 'bdsPatternValidation',
        onBdsKeyDownBackspace: 'bdsKeyDownBackspace'
    },
    defineCustomElement: defineBdsInput
});
export const BdsInputChips = createComponent({
    tagName: 'bds-input-chips',
    elementClass: BdsInputChipsElement,
    react: React,
    events: {
        onBdsChange: 'bdsChange',
        onBdsChangeChips: 'bdsChangeChips',
        onBdsInputChipsFocus: 'bdsInputChipsFocus',
        onBdsBlur: 'bdsBlur',
        onBdsInputChipsInput: 'bdsInputChipsInput',
        onBdsExtendedQuantityInput: 'bdsExtendedQuantityInput',
        onBdsSubmit: 'bdsSubmit'
    },
    defineCustomElement: defineBdsInputChips
});
export const BdsInputEditable = createComponent({
    tagName: 'bds-input-editable',
    elementClass: BdsInputEditableElement,
    react: React,
    events: {
        onBdsInputEditableSave: 'bdsInputEditableSave',
        onBdsChange: 'bdsChange',
        onBdsInput: 'bdsInput',
        onBdsCancel: 'bdsCancel',
        onBdsFocus: 'bdsFocus',
        onBdsBlur: 'bdsBlur'
    },
    defineCustomElement: defineBdsInputEditable
});
export const BdsInputPassword = createComponent({
    tagName: 'bds-input-password',
    elementClass: BdsInputPasswordElement,
    react: React,
    events: {
        onBdsInputPasswordChange: 'bdsInputPasswordChange',
        onBdsInputPasswordInput: 'bdsInputPasswordInput',
        onBdsInputPasswordBlur: 'bdsInputPasswordBlur',
        onBdsInputPasswordFocus: 'bdsInputPasswordFocus',
        onBdsInputPasswordSubmit: 'bdsInputPasswordSubmit',
        onBdsKeyDownBackspace: 'bdsKeyDownBackspace'
    },
    defineCustomElement: defineBdsInputPassword
});
export const BdsInputPhoneNumber = createComponent({
    tagName: 'bds-input-phone-number',
    elementClass: BdsInputPhoneNumberElement,
    react: React,
    events: {
        onBdsPhoneNumberChange: 'bdsPhoneNumberChange',
        onBdsInput: 'bdsInput',
        onBdsCancel: 'bdsCancel',
        onBdsFocus: 'bdsFocus',
        onBdsBlur: 'bdsBlur'
    },
    defineCustomElement: defineBdsInputPhoneNumber
});
export const BdsList = createComponent({
    tagName: 'bds-list',
    elementClass: BdsListElement,
    react: React,
    events: {
        onBdsListCheckboxChange: 'bdsListCheckboxChange',
        onBdsListRadioChange: 'bdsListRadioChange',
        onBdsListSwitchChange: 'bdsListSwitchChange',
        onBdsClickActionsButtons: 'bdsClickActionsButtons'
    },
    defineCustomElement: defineBdsList
});
export const BdsListItem = createComponent({
    tagName: 'bds-list-item',
    elementClass: BdsListItemElement,
    react: React,
    events: {
        onBdsChecked: 'bdsChecked',
        onBdsClickActionButtom: 'bdsClickActionButtom'
    },
    defineCustomElement: defineBdsListItem
});
export const BdsListItemContent = createComponent({
    tagName: 'bds-list-item-content',
    elementClass: BdsListItemContentElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsListItemContent
});
export const BdsLoadingBar = createComponent({
    tagName: 'bds-loading-bar',
    elementClass: BdsLoadingBarElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsLoadingBar
});
export const BdsLoadingPage = createComponent({
    tagName: 'bds-loading-page',
    elementClass: BdsLoadingPageElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsLoadingPage
});
export const BdsLoadingSpinner = createComponent({
    tagName: 'bds-loading-spinner',
    elementClass: BdsLoadingSpinnerElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsLoadingSpinner
});
export const BdsMenu = createComponent({
    tagName: 'bds-menu',
    elementClass: BdsMenuElement,
    react: React,
    events: { onBdsToggle: 'bdsToggle' },
    defineCustomElement: defineBdsMenu
});
export const BdsMenuAction = createComponent({
    tagName: 'bds-menu-action',
    elementClass: BdsMenuActionElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsMenuAction
});
export const BdsMenuExibition = createComponent({
    tagName: 'bds-menu-exibition',
    elementClass: BdsMenuExibitionElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsMenuExibition
});
export const BdsMenuList = createComponent({
    tagName: 'bds-menu-list',
    elementClass: BdsMenuListElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsMenuList
});
export const BdsMenuListItem = createComponent({
    tagName: 'bds-menu-list-item',
    elementClass: BdsMenuListItemElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsMenuListItem
});
export const BdsMenuSeparation = createComponent({
    tagName: 'bds-menu-separation',
    elementClass: BdsMenuSeparationElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsMenuSeparation
});
export const BdsModal = createComponent({
    tagName: 'bds-modal',
    elementClass: BdsModalElement,
    react: React,
    events: { onBdsModalChanged: 'bdsModalChanged' },
    defineCustomElement: defineBdsModal
});
export const BdsModalAction = createComponent({
    tagName: 'bds-modal-action',
    elementClass: BdsModalActionElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsModalAction
});
export const BdsModalCloseButton = createComponent({
    tagName: 'bds-modal-close-button',
    elementClass: BdsModalCloseButtonElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsModalCloseButton
});
export const BdsNavTree = createComponent({
    tagName: 'bds-nav-tree',
    elementClass: BdsNavTreeElement,
    react: React,
    events: { onBdsToogleChange: 'bdsToogleChange' },
    defineCustomElement: defineBdsNavTree
});
export const BdsNavTreeGroup = createComponent({
    tagName: 'bds-nav-tree-group',
    elementClass: BdsNavTreeGroupElement,
    react: React,
    events: {
        onBdsNavTreeGroupCloseAll: 'bdsNavTreeGroupCloseAll',
        onBdsNavTreeGroupOpenAll: 'bdsNavTreeGroupOpenAll'
    },
    defineCustomElement: defineBdsNavTreeGroup
});
export const BdsNavTreeItem = createComponent({
    tagName: 'bds-nav-tree-item',
    elementClass: BdsNavTreeItemElement,
    react: React,
    events: { onBdsToogleChange: 'bdsToogleChange' },
    defineCustomElement: defineBdsNavTreeItem
});
export const BdsNavbar = createComponent({
    tagName: 'bds-navbar',
    elementClass: BdsNavbarElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsNavbar
});
export const BdsNavbarContent = createComponent({
    tagName: 'bds-navbar-content',
    elementClass: BdsNavbarContentElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsNavbarContent
});
export const BdsPagination = createComponent({
    tagName: 'bds-pagination',
    elementClass: BdsPaginationElement,
    react: React,
    events: {
        onBdsPaginationChange: 'bdsPaginationChange',
        onBdsItemsPerPageChange: 'bdsItemsPerPageChange'
    },
    defineCustomElement: defineBdsPagination
});
export const BdsPaper = createComponent({
    tagName: 'bds-paper',
    elementClass: BdsPaperElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsPaper
});
export const BdsProgressBar = createComponent({
    tagName: 'bds-progress-bar',
    elementClass: BdsProgressBarElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsProgressBar
});
export const BdsRadio = createComponent({
    tagName: 'bds-radio',
    elementClass: BdsRadioElement,
    react: React,
    events: {
        onBdsChange: 'bdsChange',
        onBdsClickChange: 'bdsClickChange'
    },
    defineCustomElement: defineBdsRadio
});
export const BdsRadioGroup = createComponent({
    tagName: 'bds-radio-group',
    elementClass: BdsRadioGroupElement,
    react: React,
    events: { onBdsRadioGroupChange: 'bdsRadioGroupChange' },
    defineCustomElement: defineBdsRadioGroup
});
export const BdsRichText = createComponent({
    tagName: 'bds-rich-text',
    elementClass: BdsRichTextElement,
    react: React,
    events: {
        onBdsRichTextChange: 'bdsRichTextChange',
        onBdsRichTextInput: 'bdsRichTextInput',
        onBdsBlur: 'bdsBlur',
        onBdsFocus: 'bdsFocus'
    },
    defineCustomElement: defineBdsRichText
});
export const BdsSearchAnywhere = createComponent({
    tagName: 'bds-search-anywhere',
    elementClass: BdsSearchAnywhereElement,
    react: React,
    events: {
        onBdsSearchChange: 'bdsSearchChange',
        onBdsSearchSelect: 'bdsSearchSelect',
        onBdsSearchOpen: 'bdsSearchOpen',
        onBdsSearchClose: 'bdsSearchClose'
    },
    defineCustomElement: defineBdsSearchAnywhere
});
export const BdsSelect = createComponent({
    tagName: 'bds-select',
    elementClass: BdsSelectElement,
    react: React,
    events: {
        onBdsChange: 'bdsChange',
        onBdsCancel: 'bdsCancel',
        onBdsFocus: 'bdsFocus',
        onBdsBlur: 'bdsBlur'
    },
    defineCustomElement: defineBdsSelect
});
export const BdsSelectChips = createComponent({
    tagName: 'bds-select-chips',
    elementClass: BdsSelectChipsElement,
    react: React,
    events: {
        onBdsChange: 'bdsChange',
        onBdsCancel: 'bdsCancel',
        onBdsFocus: 'bdsFocus',
        onBdsBlur: 'bdsBlur',
        onBdsChangeChips: 'bdsChangeChips',
        onBdsSelectChipsInput: 'bdsSelectChipsInput',
        onBdsSubmit: 'bdsSubmit'
    },
    defineCustomElement: defineBdsSelectChips
});
export const BdsSelectOption = createComponent({
    tagName: 'bds-select-option',
    elementClass: BdsSelectOptionElement,
    react: React,
    events: {
        onOptionSelected: 'optionSelected',
        onOptionChecked: 'optionChecked'
    },
    defineCustomElement: defineBdsSelectOption
});
export const BdsSidebar = createComponent({
    tagName: 'bds-sidebar',
    elementClass: BdsSidebarElement,
    react: React,
    events: { onBdsToggle: 'bdsToggle' },
    defineCustomElement: defineBdsSidebar
});
export const BdsSkeleton = createComponent({
    tagName: 'bds-skeleton',
    elementClass: BdsSkeletonElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsSkeleton
});
export const BdsSlider = createComponent({
    tagName: 'bds-slider',
    elementClass: BdsSliderElement,
    react: React,
    events: { onBdsChange: 'bdsChange' },
    defineCustomElement: defineBdsSlider
});
export const BdsStep = createComponent({
    tagName: 'bds-step',
    elementClass: BdsStepElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsStep
});
export const BdsStepper = createComponent({
    tagName: 'bds-stepper',
    elementClass: BdsStepperElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsStepper
});
export const BdsSwitch = createComponent({
    tagName: 'bds-switch',
    elementClass: BdsSwitchElement,
    react: React,
    events: { onBdsChange: 'bdsChange' },
    defineCustomElement: defineBdsSwitch
});
export const BdsTab = createComponent({
    tagName: 'bds-tab',
    elementClass: BdsTabElement,
    react: React,
    events: { onBdsTabChange: 'bdsTabChange' },
    defineCustomElement: defineBdsTab
});
export const BdsTabGroup = createComponent({
    tagName: 'bds-tab-group',
    elementClass: BdsTabGroupElement,
    react: React,
    events: {
        onBdsTabChange: 'bdsTabChange',
        onBdsTabDisabled: 'bdsTabDisabled'
    },
    defineCustomElement: defineBdsTabGroup
});
export const BdsTabItem = createComponent({
    tagName: 'bds-tab-item',
    elementClass: BdsTabItemElement,
    react: React,
    events: { onTabDisabled: 'tabDisabled' },
    defineCustomElement: defineBdsTabItem
});
export const BdsTabPanel = createComponent({
    tagName: 'bds-tab-panel',
    elementClass: BdsTabPanelElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsTabPanel
});
export const BdsTable = createComponent({
    tagName: 'bds-table',
    elementClass: BdsTableElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsTable
});
export const BdsTableBody = createComponent({
    tagName: 'bds-table-body',
    elementClass: BdsTableBodyElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsTableBody
});
export const BdsTableCell = createComponent({
    tagName: 'bds-table-cell',
    elementClass: BdsTableCellElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsTableCell
});
export const BdsTableHeader = createComponent({
    tagName: 'bds-table-header',
    elementClass: BdsTableHeaderElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsTableHeader
});
export const BdsTableRow = createComponent({
    tagName: 'bds-table-row',
    elementClass: BdsTableRowElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsTableRow
});
export const BdsTableTh = createComponent({
    tagName: 'bds-table-th',
    elementClass: BdsTableThElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsTableTh
});
export const BdsTabs = createComponent({
    tagName: 'bds-tabs',
    elementClass: BdsTabsElement,
    react: React,
    events: {
        onScrollButtonClick: 'scrollButtonClick',
        onBdsTabInit: 'bdsTabInit'
    },
    defineCustomElement: defineBdsTabs
});
export const BdsTestComponent = createComponent({
    tagName: 'bds-test-component',
    elementClass: BdsTestComponentElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsTestComponent
});
export const BdsThemeProvider = createComponent({
    tagName: 'bds-theme-provider',
    elementClass: BdsThemeProviderElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsThemeProvider
});
export const BdsToast = createComponent({
    tagName: 'bds-toast',
    elementClass: BdsToastElement,
    react: React,
    events: { onToastButtonClick: 'toastButtonClick' },
    defineCustomElement: defineBdsToast
});
export const BdsToastContainer = createComponent({
    tagName: 'bds-toast-container',
    elementClass: BdsToastContainerElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsToastContainer
});
export const BdsTooltip = createComponent({
    tagName: 'bds-tooltip',
    elementClass: BdsTooltipElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsTooltip
});
export const BdsTypo = createComponent({
    tagName: 'bds-typo',
    elementClass: BdsTypoElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsTypo
});
export const BdsUpload = createComponent({
    tagName: 'bds-upload',
    elementClass: BdsUploadElement,
    react: React,
    events: {
        onBdsUploadDelete: 'bdsUploadDelete',
        onBdsUploadChange: 'bdsUploadChange'
    },
    defineCustomElement: defineBdsUpload
});
export const BdsWarning = createComponent({
    tagName: 'bds-warning',
    elementClass: BdsWarningElement,
    react: React,
    events: {},
    defineCustomElement: defineBdsWarning
});
//# sourceMappingURL=components.js.map