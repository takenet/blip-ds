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
export const BdsAccordion = /*@__PURE__*/ createComponent({
    tagName: 'bds-accordion',
    elementClass: BdsAccordionElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsToggle: 'bdsToggle',
        onBdsAccordionOpen: 'bdsAccordionOpen',
        onBdsAccordionClose: 'bdsAccordionClose'
    },
    defineCustomElement: defineBdsAccordion
});
export const BdsAccordionBody = /*@__PURE__*/ createComponent({
    tagName: 'bds-accordion-body',
    elementClass: BdsAccordionBodyElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsAccordionBody
});
export const BdsAccordionGroup = /*@__PURE__*/ createComponent({
    tagName: 'bds-accordion-group',
    elementClass: BdsAccordionGroupElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsAccordionCloseAll: 'bdsAccordionCloseAll',
        onBdsAccordionOpenAll: 'bdsAccordionOpenAll'
    },
    defineCustomElement: defineBdsAccordionGroup
});
export const BdsAccordionHeader = /*@__PURE__*/ createComponent({
    tagName: 'bds-accordion-header',
    elementClass: BdsAccordionHeaderElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsAccordionHeader
});
export const BdsAlert = /*@__PURE__*/ createComponent({
    tagName: 'bds-alert',
    elementClass: BdsAlertElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsAlertChanged: 'bdsAlertChanged' },
    defineCustomElement: defineBdsAlert
});
export const BdsAlertActions = /*@__PURE__*/ createComponent({
    tagName: 'bds-alert-actions',
    elementClass: BdsAlertActionsElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsAlertActions
});
export const BdsAlertBody = /*@__PURE__*/ createComponent({
    tagName: 'bds-alert-body',
    elementClass: BdsAlertBodyElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsAlertBody
});
export const BdsAlertHeader = /*@__PURE__*/ createComponent({
    tagName: 'bds-alert-header',
    elementClass: BdsAlertHeaderElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsAlertHeader
});
export const BdsAutocomplete = /*@__PURE__*/ createComponent({
    tagName: 'bds-autocomplete',
    elementClass: BdsAutocompleteElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
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
export const BdsAvatar = /*@__PURE__*/ createComponent({
    tagName: 'bds-avatar',
    elementClass: BdsAvatarElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsClickAvatar: 'bdsClickAvatar',
        onBdsImageUpload: 'bdsImageUpload'
    },
    defineCustomElement: defineBdsAvatar
});
export const BdsAvatarGroup = /*@__PURE__*/ createComponent({
    tagName: 'bds-avatar-group',
    elementClass: BdsAvatarGroupElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsClickAvatarGroup: 'bdsClickAvatarGroup' },
    defineCustomElement: defineBdsAvatarGroup
});
export const BdsBadge = /*@__PURE__*/ createComponent({
    tagName: 'bds-badge',
    elementClass: BdsBadgeElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsBadge
});
export const BdsBanner = /*@__PURE__*/ createComponent({
    tagName: 'bds-banner',
    elementClass: BdsBannerElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsBannerClose: 'bdsBannerClose' },
    defineCustomElement: defineBdsBanner
});
export const BdsBannerLink = /*@__PURE__*/ createComponent({
    tagName: 'bds-banner-link',
    elementClass: BdsBannerLinkElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsBannerLink: 'bdsBannerLink' },
    defineCustomElement: defineBdsBannerLink
});
export const BdsBreadcrumb = /*@__PURE__*/ createComponent({
    tagName: 'bds-breadcrumb',
    elementClass: BdsBreadcrumbElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsBreadcrumb
});
export const BdsButton = /*@__PURE__*/ createComponent({
    tagName: 'bds-button',
    elementClass: BdsButtonElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsClick: 'bdsClick' },
    defineCustomElement: defineBdsButton
});
export const BdsButtonGroup = /*@__PURE__*/ createComponent({
    tagName: 'bds-button-group',
    elementClass: BdsButtonGroupElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onButtonSelected: 'buttonSelected' },
    defineCustomElement: defineBdsButtonGroup
});
export const BdsButtonIcon = /*@__PURE__*/ createComponent({
    tagName: 'bds-button-icon',
    elementClass: BdsButtonIconElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsClick: 'bdsClick' },
    defineCustomElement: defineBdsButtonIcon
});
export const BdsCard = /*@__PURE__*/ createComponent({
    tagName: 'bds-card',
    elementClass: BdsCardElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsClick: 'bdsClick' },
    defineCustomElement: defineBdsCard
});
export const BdsCardBody = /*@__PURE__*/ createComponent({
    tagName: 'bds-card-body',
    elementClass: BdsCardBodyElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsCardBody
});
export const BdsCardColor = /*@__PURE__*/ createComponent({
    tagName: 'bds-card-color',
    elementClass: BdsCardColorElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsCardColor
});
export const BdsCardFooter = /*@__PURE__*/ createComponent({
    tagName: 'bds-card-footer',
    elementClass: BdsCardFooterElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsCardFooter
});
export const BdsCardHeader = /*@__PURE__*/ createComponent({
    tagName: 'bds-card-header',
    elementClass: BdsCardHeaderElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsCardHeader
});
export const BdsCardSubtitle = /*@__PURE__*/ createComponent({
    tagName: 'bds-card-subtitle',
    elementClass: BdsCardSubtitleElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsCardSubtitle
});
export const BdsCardTitle = /*@__PURE__*/ createComponent({
    tagName: 'bds-card-title',
    elementClass: BdsCardTitleElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsCardTitle
});
export const BdsCarousel = /*@__PURE__*/ createComponent({
    tagName: 'bds-carousel',
    elementClass: BdsCarouselElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsChangeCarousel: 'bdsChangeCarousel' },
    defineCustomElement: defineBdsCarousel
});
export const BdsCarouselItem = /*@__PURE__*/ createComponent({
    tagName: 'bds-carousel-item',
    elementClass: BdsCarouselItemElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsCarouselItem
});
export const BdsCheckbox = /*@__PURE__*/ createComponent({
    tagName: 'bds-checkbox',
    elementClass: BdsCheckboxElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsChange: 'bdsChange',
        onBdsInput: 'bdsInput'
    },
    defineCustomElement: defineBdsCheckbox
});
export const BdsChip = /*@__PURE__*/ createComponent({
    tagName: 'bds-chip',
    elementClass: BdsChipElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsDelete: 'bdsDelete' },
    defineCustomElement: defineBdsChip
});
export const BdsChipClickable = /*@__PURE__*/ createComponent({
    tagName: 'bds-chip-clickable',
    elementClass: BdsChipClickableElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onChipClickableClose: 'chipClickableClose',
        onChipClickableClick: 'chipClickableClick'
    },
    defineCustomElement: defineBdsChipClickable
});
export const BdsChipSelected = /*@__PURE__*/ createComponent({
    tagName: 'bds-chip-selected',
    elementClass: BdsChipSelectedElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onChipClick: 'chipClick' },
    defineCustomElement: defineBdsChipSelected
});
export const BdsChipTag = /*@__PURE__*/ createComponent({
    tagName: 'bds-chip-tag',
    elementClass: BdsChipTagElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsChipTag
});
export const BdsCounterText = /*@__PURE__*/ createComponent({
    tagName: 'bds-counter-text',
    elementClass: BdsCounterTextElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsCounterText
});
export const BdsDataTable = /*@__PURE__*/ createComponent({
    tagName: 'bds-data-table',
    elementClass: BdsDataTableElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsTableClick: 'bdsTableClick',
        onBdsTableDelete: 'bdsTableDelete',
        onBdsTableChange: 'bdsTableChange'
    },
    defineCustomElement: defineBdsDataTable
});
export const BdsDatepicker = /*@__PURE__*/ createComponent({
    tagName: 'bds-datepicker',
    elementClass: BdsDatepickerElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsStartDate: 'bdsStartDate',
        onBdsEndDate: 'bdsEndDate',
        onConcludeDatepicker: 'concludeDatepicker',
        onEmptyConcludeDatepicker: 'emptyConcludeDatepicker'
    },
    defineCustomElement: defineBdsDatepicker
});
export const BdsDatepickerPeriod = /*@__PURE__*/ createComponent({
    tagName: 'bds-datepicker-period',
    elementClass: BdsDatepickerPeriodElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsStartDate: 'bdsStartDate',
        onBdsEndDate: 'bdsEndDate',
        onBdsClickDayButton: 'bdsClickDayButton'
    },
    defineCustomElement: defineBdsDatepickerPeriod
});
export const BdsDatepickerSingle = /*@__PURE__*/ createComponent({
    tagName: 'bds-datepicker-single',
    elementClass: BdsDatepickerSingleElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsDateSelected: 'bdsDateSelected' },
    defineCustomElement: defineBdsDatepickerSingle
});
export const BdsDivider = /*@__PURE__*/ createComponent({
    tagName: 'bds-divider',
    elementClass: BdsDividerElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsDivider
});
export const BdsDropdown = /*@__PURE__*/ createComponent({
    tagName: 'bds-dropdown',
    elementClass: BdsDropdownElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsToggle: 'bdsToggle' },
    defineCustomElement: defineBdsDropdown
});
export const BdsExpansionPanel = /*@__PURE__*/ createComponent({
    tagName: 'bds-expansion-panel',
    elementClass: BdsExpansionPanelElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsExpansionPanel
});
export const BdsExpansionPanelBody = /*@__PURE__*/ createComponent({
    tagName: 'bds-expansion-panel-body',
    elementClass: BdsExpansionPanelBodyElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsExpansionPanelBody
});
export const BdsExpansionPanelHeader = /*@__PURE__*/ createComponent({
    tagName: 'bds-expansion-panel-header',
    elementClass: BdsExpansionPanelHeaderElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsExpansionPanelHeader
});
export const BdsGrid = /*@__PURE__*/ createComponent({
    tagName: 'bds-grid',
    elementClass: BdsGridElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsGrid
});
export const BdsIcon = /*@__PURE__*/ createComponent({
    tagName: 'bds-icon',
    elementClass: BdsIconElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsIcon
});
export const BdsIllustration = /*@__PURE__*/ createComponent({
    tagName: 'bds-illustration',
    elementClass: BdsIllustrationElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsIllustration
});
export const BdsImage = /*@__PURE__*/ createComponent({
    tagName: 'bds-image',
    elementClass: BdsImageElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsImage
});
export const BdsInput = /*@__PURE__*/ createComponent({
    tagName: 'bds-input',
    elementClass: BdsInputElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
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
export const BdsInputChips = /*@__PURE__*/ createComponent({
    tagName: 'bds-input-chips',
    elementClass: BdsInputChipsElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
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
export const BdsInputEditable = /*@__PURE__*/ createComponent({
    tagName: 'bds-input-editable',
    elementClass: BdsInputEditableElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
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
export const BdsInputPassword = /*@__PURE__*/ createComponent({
    tagName: 'bds-input-password',
    elementClass: BdsInputPasswordElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
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
export const BdsInputPhoneNumber = /*@__PURE__*/ createComponent({
    tagName: 'bds-input-phone-number',
    elementClass: BdsInputPhoneNumberElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
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
export const BdsList = /*@__PURE__*/ createComponent({
    tagName: 'bds-list',
    elementClass: BdsListElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsListCheckboxChange: 'bdsListCheckboxChange',
        onBdsListRadioChange: 'bdsListRadioChange',
        onBdsListSwitchChange: 'bdsListSwitchChange',
        onBdsClickActionsButtons: 'bdsClickActionsButtons'
    },
    defineCustomElement: defineBdsList
});
export const BdsListItem = /*@__PURE__*/ createComponent({
    tagName: 'bds-list-item',
    elementClass: BdsListItemElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsChecked: 'bdsChecked',
        onBdsClickActionButtom: 'bdsClickActionButtom'
    },
    defineCustomElement: defineBdsListItem
});
export const BdsListItemContent = /*@__PURE__*/ createComponent({
    tagName: 'bds-list-item-content',
    elementClass: BdsListItemContentElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsListItemContent
});
export const BdsLoadingBar = /*@__PURE__*/ createComponent({
    tagName: 'bds-loading-bar',
    elementClass: BdsLoadingBarElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsLoadingBar
});
export const BdsLoadingPage = /*@__PURE__*/ createComponent({
    tagName: 'bds-loading-page',
    elementClass: BdsLoadingPageElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsLoadingPage
});
export const BdsLoadingSpinner = /*@__PURE__*/ createComponent({
    tagName: 'bds-loading-spinner',
    elementClass: BdsLoadingSpinnerElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsLoadingSpinner
});
export const BdsMenu = /*@__PURE__*/ createComponent({
    tagName: 'bds-menu',
    elementClass: BdsMenuElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsToggle: 'bdsToggle' },
    defineCustomElement: defineBdsMenu
});
export const BdsMenuAction = /*@__PURE__*/ createComponent({
    tagName: 'bds-menu-action',
    elementClass: BdsMenuActionElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsMenuAction
});
export const BdsMenuExibition = /*@__PURE__*/ createComponent({
    tagName: 'bds-menu-exibition',
    elementClass: BdsMenuExibitionElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsMenuExibition
});
export const BdsMenuList = /*@__PURE__*/ createComponent({
    tagName: 'bds-menu-list',
    elementClass: BdsMenuListElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsMenuList
});
export const BdsMenuListItem = /*@__PURE__*/ createComponent({
    tagName: 'bds-menu-list-item',
    elementClass: BdsMenuListItemElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsMenuListItem
});
export const BdsMenuSeparation = /*@__PURE__*/ createComponent({
    tagName: 'bds-menu-separation',
    elementClass: BdsMenuSeparationElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsMenuSeparation
});
export const BdsModal = /*@__PURE__*/ createComponent({
    tagName: 'bds-modal',
    elementClass: BdsModalElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsModalChanged: 'bdsModalChanged' },
    defineCustomElement: defineBdsModal
});
export const BdsModalAction = /*@__PURE__*/ createComponent({
    tagName: 'bds-modal-action',
    elementClass: BdsModalActionElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsModalAction
});
export const BdsModalCloseButton = /*@__PURE__*/ createComponent({
    tagName: 'bds-modal-close-button',
    elementClass: BdsModalCloseButtonElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsModalCloseButton
});
export const BdsNavTree = /*@__PURE__*/ createComponent({
    tagName: 'bds-nav-tree',
    elementClass: BdsNavTreeElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsToogleChange: 'bdsToogleChange' },
    defineCustomElement: defineBdsNavTree
});
export const BdsNavTreeGroup = /*@__PURE__*/ createComponent({
    tagName: 'bds-nav-tree-group',
    elementClass: BdsNavTreeGroupElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsNavTreeGroupCloseAll: 'bdsNavTreeGroupCloseAll',
        onBdsNavTreeGroupOpenAll: 'bdsNavTreeGroupOpenAll'
    },
    defineCustomElement: defineBdsNavTreeGroup
});
export const BdsNavTreeItem = /*@__PURE__*/ createComponent({
    tagName: 'bds-nav-tree-item',
    elementClass: BdsNavTreeItemElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsToogleChange: 'bdsToogleChange' },
    defineCustomElement: defineBdsNavTreeItem
});
export const BdsNavbar = /*@__PURE__*/ createComponent({
    tagName: 'bds-navbar',
    elementClass: BdsNavbarElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsNavbar
});
export const BdsNavbarContent = /*@__PURE__*/ createComponent({
    tagName: 'bds-navbar-content',
    elementClass: BdsNavbarContentElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsNavbarContent
});
export const BdsPagination = /*@__PURE__*/ createComponent({
    tagName: 'bds-pagination',
    elementClass: BdsPaginationElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsPaginationChange: 'bdsPaginationChange',
        onBdsItemsPerPageChange: 'bdsItemsPerPageChange'
    },
    defineCustomElement: defineBdsPagination
});
export const BdsPaper = /*@__PURE__*/ createComponent({
    tagName: 'bds-paper',
    elementClass: BdsPaperElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsPaper
});
export const BdsProgressBar = /*@__PURE__*/ createComponent({
    tagName: 'bds-progress-bar',
    elementClass: BdsProgressBarElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsProgressBar
});
export const BdsRadio = /*@__PURE__*/ createComponent({
    tagName: 'bds-radio',
    elementClass: BdsRadioElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsChange: 'bdsChange',
        onBdsClickChange: 'bdsClickChange'
    },
    defineCustomElement: defineBdsRadio
});
export const BdsRadioGroup = /*@__PURE__*/ createComponent({
    tagName: 'bds-radio-group',
    elementClass: BdsRadioGroupElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsRadioGroupChange: 'bdsRadioGroupChange' },
    defineCustomElement: defineBdsRadioGroup
});
export const BdsRichText = /*@__PURE__*/ createComponent({
    tagName: 'bds-rich-text',
    elementClass: BdsRichTextElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsRichTextChange: 'bdsRichTextChange',
        onBdsRichTextInput: 'bdsRichTextInput',
        onBdsBlur: 'bdsBlur',
        onBdsFocus: 'bdsFocus'
    },
    defineCustomElement: defineBdsRichText
});
export const BdsSelect = /*@__PURE__*/ createComponent({
    tagName: 'bds-select',
    elementClass: BdsSelectElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsChange: 'bdsChange',
        onBdsCancel: 'bdsCancel',
        onBdsFocus: 'bdsFocus',
        onBdsBlur: 'bdsBlur'
    },
    defineCustomElement: defineBdsSelect
});
export const BdsSelectChips = /*@__PURE__*/ createComponent({
    tagName: 'bds-select-chips',
    elementClass: BdsSelectChipsElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
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
export const BdsSelectOption = /*@__PURE__*/ createComponent({
    tagName: 'bds-select-option',
    elementClass: BdsSelectOptionElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onOptionSelected: 'optionSelected',
        onOptionChecked: 'optionChecked'
    },
    defineCustomElement: defineBdsSelectOption
});
export const BdsSidebar = /*@__PURE__*/ createComponent({
    tagName: 'bds-sidebar',
    elementClass: BdsSidebarElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsToggle: 'bdsToggle' },
    defineCustomElement: defineBdsSidebar
});
export const BdsSkeleton = /*@__PURE__*/ createComponent({
    tagName: 'bds-skeleton',
    elementClass: BdsSkeletonElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsSkeleton
});
export const BdsSlider = /*@__PURE__*/ createComponent({
    tagName: 'bds-slider',
    elementClass: BdsSliderElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsChange: 'bdsChange' },
    defineCustomElement: defineBdsSlider
});
export const BdsStep = /*@__PURE__*/ createComponent({
    tagName: 'bds-step',
    elementClass: BdsStepElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsStep
});
export const BdsStepper = /*@__PURE__*/ createComponent({
    tagName: 'bds-stepper',
    elementClass: BdsStepperElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsStepper
});
export const BdsSwitch = /*@__PURE__*/ createComponent({
    tagName: 'bds-switch',
    elementClass: BdsSwitchElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsChange: 'bdsChange' },
    defineCustomElement: defineBdsSwitch
});
export const BdsTab = /*@__PURE__*/ createComponent({
    tagName: 'bds-tab',
    elementClass: BdsTabElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onBdsTabChange: 'bdsTabChange' },
    defineCustomElement: defineBdsTab
});
export const BdsTabGroup = /*@__PURE__*/ createComponent({
    tagName: 'bds-tab-group',
    elementClass: BdsTabGroupElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsTabChange: 'bdsTabChange',
        onBdsTabDisabled: 'bdsTabDisabled'
    },
    defineCustomElement: defineBdsTabGroup
});
export const BdsTabItem = /*@__PURE__*/ createComponent({
    tagName: 'bds-tab-item',
    elementClass: BdsTabItemElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onTabDisabled: 'tabDisabled' },
    defineCustomElement: defineBdsTabItem
});
export const BdsTabPanel = /*@__PURE__*/ createComponent({
    tagName: 'bds-tab-panel',
    elementClass: BdsTabPanelElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsTabPanel
});
export const BdsTable = /*@__PURE__*/ createComponent({
    tagName: 'bds-table',
    elementClass: BdsTableElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsTable
});
export const BdsTableBody = /*@__PURE__*/ createComponent({
    tagName: 'bds-table-body',
    elementClass: BdsTableBodyElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsTableBody
});
export const BdsTableCell = /*@__PURE__*/ createComponent({
    tagName: 'bds-table-cell',
    elementClass: BdsTableCellElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsTableCell
});
export const BdsTableHeader = /*@__PURE__*/ createComponent({
    tagName: 'bds-table-header',
    elementClass: BdsTableHeaderElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsTableHeader
});
export const BdsTableRow = /*@__PURE__*/ createComponent({
    tagName: 'bds-table-row',
    elementClass: BdsTableRowElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsTableRow
});
export const BdsTableTh = /*@__PURE__*/ createComponent({
    tagName: 'bds-table-th',
    elementClass: BdsTableThElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsTableTh
});
export const BdsTabs = /*@__PURE__*/ createComponent({
    tagName: 'bds-tabs',
    elementClass: BdsTabsElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onScrollButtonClick: 'scrollButtonClick',
        onBdsTabInit: 'bdsTabInit'
    },
    defineCustomElement: defineBdsTabs
});
export const BdsTestComponent = /*@__PURE__*/ createComponent({
    tagName: 'bds-test-component',
    elementClass: BdsTestComponentElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsTestComponent
});
export const BdsThemeProvider = /*@__PURE__*/ createComponent({
    tagName: 'bds-theme-provider',
    elementClass: BdsThemeProviderElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsThemeProvider
});
export const BdsToast = /*@__PURE__*/ createComponent({
    tagName: 'bds-toast',
    elementClass: BdsToastElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onToastButtonClick: 'toastButtonClick' },
    defineCustomElement: defineBdsToast
});
export const BdsToastContainer = /*@__PURE__*/ createComponent({
    tagName: 'bds-toast-container',
    elementClass: BdsToastContainerElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsToastContainer
});
export const BdsTooltip = /*@__PURE__*/ createComponent({
    tagName: 'bds-tooltip',
    elementClass: BdsTooltipElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsTooltip
});
export const BdsTypo = /*@__PURE__*/ createComponent({
    tagName: 'bds-typo',
    elementClass: BdsTypoElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsTypo
});
export const BdsUpload = /*@__PURE__*/ createComponent({
    tagName: 'bds-upload',
    elementClass: BdsUploadElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onBdsUploadDelete: 'bdsUploadDelete',
        onBdsUploadChange: 'bdsUploadChange'
    },
    defineCustomElement: defineBdsUpload
});
export const BdsWarning = /*@__PURE__*/ createComponent({
    tagName: 'bds-warning',
    elementClass: BdsWarningElement,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineBdsWarning
});
//# sourceMappingURL=components.js.map