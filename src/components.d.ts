/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AlertHeaderVariannt, } from "./components/alert/alert-header/alert-header";
import { ButtonSize, ButtonVariant, } from "./components/button/button";
import { CounterTextRule, } from "./components/counter-text/counter-text-interface";
import { IconSize, IconTheme, } from "./components/icon/icon-interface";
import { IconButtonSize, IconButtonVariant, } from "./components/icon-button/icon-button";
import { InputAutocapitalize, InputAutoComplete, InputCounterLengthRules, InputType, } from "./components/input/input-interface";
import { Option, SelectChangeEventDetail, } from "./components/select/select-interface";
import { Bold, FontLineHeight, FontSize, Tag, } from "./components/typo/typo";
export namespace Components {
    interface BdsAlert {
        /**
          * Used to open/close the alert
         */
        "open"?: boolean;
        /**
          * Can be used outside to open/close the alert
         */
        "toggle": () => Promise<void>;
    }
    interface BdsAlertActions {
    }
    interface BdsAlertBody {
    }
    interface BdsAlertHeader {
        /**
          * used for add icon the header. Uses the bds-icon component.
         */
        "icon"?: string;
        /**
          * Variant. Entered as one of the variant. Can be one of:  'system', 'error', 'warning', 'delete';
         */
        "variant"?: AlertHeaderVariannt;
    }
    interface BdsButton {
        /**
          * The arrow button
         */
        "arrow"?: boolean;
        /**
          * If true, the base button will be disabled.
         */
        "disabled"?: boolean;
        /**
          * used for add icon in input left. Uses the bds-icon component.
         */
        "icon"?: string;
        /**
          * Size. Entered as one of the size. Can be one of:  'tall', 'standard', 'short';
         */
        "size"?: ButtonSize;
        /**
          * Variant. Entered as one of the variant. Can be one of:  'primary', 'secondary', 'ghost', 'dashed';
         */
        "variant"?: ButtonVariant;
    }
    interface BdsCardColor {
        /**
          * Specifies HEX color, use Figma docs in Blip DS.
         */
        "hex"?: string;
        /**
          * Specifies name color, use Figma docs in Blip DS.
         */
        "name": string;
        /**
          * Specifies variabel sass color, _variables.scss.
         */
        "variable": string;
    }
    interface BdsCheckbox {
        /**
          * If `true`, the checkbox is selected.
         */
        "checked": boolean;
        /**
          * If `true`, the user cannot interact with the checkbox.
         */
        "disabled": boolean;
        "getInputElement": () => Promise<HTMLInputElement>;
        "getValue": () => Promise<boolean>;
        "label": string;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        "refer": string;
    }
    interface BdsCounterText {
        "active"?: boolean;
        "delete"?: CounterTextRule;
        "length": number;
        "max"?: number;
        "warning"?: CounterTextRule;
    }
    interface BdsIcon {
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        /**
          * Specifies the color to use.Specifies a color to use. The default is svg.
         */
        "color"?: string;
        /**
          * Specifies whether the icon should horizontally flip when `dir` is `"rtl"`.
         */
        "flipRtl"?: boolean;
        /**
          * A combination of both `name` and `src`. If a `src` url is detected it will set the `src` property. Otherwise it assumes it's a built-in named SVG and set the `name` property.
         */
        "icon"?: any;
        /**
          * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
         */
        "lazy": boolean;
        /**
          * Specifies which icon to use from the built-in set of icons.
         */
        "name"?: string;
        /**
          * Icon size. Entered as one of the icon size design tokens. Can be one of: "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large".
         */
        "size"?: IconSize;
        /**
          * Specifies the exact `src` of an SVG file to use.
         */
        "src"?: string;
        /**
          * Specifies the theme to use outline or solid icons. Defaults to outline.
         */
        "theme": IconTheme;
    }
    interface BdsIconButton {
        /**
          * If true, the base button will be disabled.
         */
        "disabled"?: boolean;
        /**
          * used for add icon in input left. Uses the bds-icon component.
         */
        "icon"?: string;
        /**
          * Size. Entered as one of the size. Can be one of: 'tall', 'standard', 'short';
         */
        "size"?: IconButtonSize;
        /**
          * Variant. Entered as one of the variant. Can be one of: 'primary', 'secondary', 'ghost', 'dashed';
         */
        "variant"?: IconButtonVariant;
    }
    interface BdsInput {
        /**
          * Capitalizes every word's second character.
         */
        "autoCapitalize"?: InputAutocapitalize;
        /**
          * Hint for form autofill feature
         */
        "autoComplete"?: InputAutoComplete;
        /**
          * Passing true to display a counter of available size, it is necessary to pass another maxlength property.
         */
        "counterLength"?: boolean;
        /**
          * Make it possible to pass the base values to the warning level and exclude, using the values between min and max.
         */
        "counterLengthRule"?: InputCounterLengthRules | {};
        /**
          * Add state danger on input, use for use feedback.
         */
        "danger"?: boolean;
        /**
          * Disabled input.
         */
        "disabled"?: boolean;
        /**
          * Indicated to pass an feeback to user.
         */
        "errorMessage"?: string;
        /**
          * Returns the native `<input>` element used under the hood.
         */
        "getInputElement": () => Promise<HTMLInputElement>;
        /**
          * Indicated to pass a help the user in complex filling.
         */
        "helperMessage"?: string;
        /**
          * used for add icon in input left. Uses the bds-icon component.
         */
        "icon"?: string;
        /**
          * Input Name
         */
        "inputName"?: string;
        /**
          * label in input, with he the input size increases.
         */
        "label"?: string;
        /**
          * The maximum value, which must not be less than its minimum (min attribute) value.
         */
        "max"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
         */
        "maxlength"?: number;
        /**
          * The minimum value, which must not be greater than its maximum (max attribute) value.
         */
        "min"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        "minlength"?: number;
        /**
          * A tip for the user who can enter no controls.
         */
        "placeholder"?: string;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly": boolean;
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus on the specified `ion-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * Input type. Can be one of: "text" or "password".
         */
        "type"?: InputType;
        /**
          * The value of the input.
         */
        "value"?: string | null;
    }
    interface BdsInputPassword {
        /**
          * Capitalizes every word's second character.
         */
        "autoCapitalize"?: InputAutocapitalize;
        /**
          * Hint for form autofill feature
         */
        "autoComplete"?: InputAutoComplete;
        /**
          * Add state danger on input, use for use feedback.
         */
        "danger"?: boolean;
        /**
          * Disabled input.
         */
        "disabled"?: boolean;
        /**
          * Indicated to pass an feeback to user.
         */
        "errorMessage"?: string;
        /**
          * Indicated to pass a help the user in complex filling.
         */
        "helperMessage"?: string;
        /**
          * used for add icon in input left. Uses the bds-icon component.
         */
        "icon"?: string;
        /**
          * Input Name
         */
        "inputName"?: string;
        /**
          * label in input, with he the input size increases.
         */
        "label"?: string;
        /**
          * The maximum value, which must not be less than its minimum (min attribute) value.
         */
        "max"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
         */
        "maxlength"?: number;
        /**
          * The minimum value, which must not be greater than its maximum (max attribute) value.
         */
        "min"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        "minlength"?: number;
        "openEyes"?: boolean;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly": boolean;
        /**
          * The value of the input.
         */
        "value"?: string | null;
    }
    interface BdsMenuList {
    }
    interface BdsMenuListItem {
        "color": string;
        /**
          * used for add icon in input left. Uses the bds-icon component.
         */
        "icon": string;
    }
    interface BdsRadio {
        /**
          * If `true`, the checkbox is selected.
         */
        "checked": boolean;
        /**
          * If `true`, the user cannot interact with the checkbox.
         */
        "disabled": boolean;
        "getInputElement": () => Promise<HTMLInputElement>;
        "getValue": () => Promise<boolean>;
        "label": string;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        "refer": string;
        "value": string;
    }
    interface BdsSelect {
        /**
          * Add state danger on input, use for use feedback.
         */
        "danger"?: boolean;
        /**
          * Disabled input.
         */
        "disabled"?: boolean;
        /**
          * used for add icon in input left. Uses the bds-icon component.
         */
        "icon"?: string;
        /**
          * label in input, with he the input size increases.
         */
        "label"?: string;
        "options"?: Array<Option>;
        /**
          * the value of the select.
         */
        "value"?: any | null;
    }
    interface BdsSelectOption {
        /**
          * Quantity Description on option value, this item is locate to rigth in component.
         */
        "bulkOption"?: string;
        /**
          * If `true`, the user cannot interact with the select option.
         */
        "disabled"?: boolean;
        /**
          * The text value of the option.
         */
        "selected"?: boolean;
        "value": any;
    }
    interface BdsTypo {
        /**
          * Bold. Entered as one of the bold. Can be one of:  'regular', 'semi-bold', 'bold', 'extra-bold';
         */
        "bold"?: Bold;
        /**
          * Added font style italic
         */
        "italic"?: boolean;
        /**
          * Line Height. Entered as one of the line hieght. Can be one of:  'none', 'small', 'simple', 'plus', 'double'
         */
        "lineHeight"?: FontLineHeight;
        /**
          * Added style no wrap
         */
        "noWrap"?: boolean;
        /**
          * Tranform text in paragraph
         */
        "paragraph"?: boolean;
        /**
          * Define element tag, must be used for acessibilty
         */
        "tag"?: Tag;
        /**
          * Variant. Entered as one of the font size variant. Can be one of:  'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40';
         */
        "variant"?: FontSize;
    }
}
declare global {
    interface HTMLBdsAlertElement extends Components.BdsAlert, HTMLStencilElement {
    }
    var HTMLBdsAlertElement: {
        prototype: HTMLBdsAlertElement;
        new (): HTMLBdsAlertElement;
    };
    interface HTMLBdsAlertActionsElement extends Components.BdsAlertActions, HTMLStencilElement {
    }
    var HTMLBdsAlertActionsElement: {
        prototype: HTMLBdsAlertActionsElement;
        new (): HTMLBdsAlertActionsElement;
    };
    interface HTMLBdsAlertBodyElement extends Components.BdsAlertBody, HTMLStencilElement {
    }
    var HTMLBdsAlertBodyElement: {
        prototype: HTMLBdsAlertBodyElement;
        new (): HTMLBdsAlertBodyElement;
    };
    interface HTMLBdsAlertHeaderElement extends Components.BdsAlertHeader, HTMLStencilElement {
    }
    var HTMLBdsAlertHeaderElement: {
        prototype: HTMLBdsAlertHeaderElement;
        new (): HTMLBdsAlertHeaderElement;
    };
    interface HTMLBdsButtonElement extends Components.BdsButton, HTMLStencilElement {
    }
    var HTMLBdsButtonElement: {
        prototype: HTMLBdsButtonElement;
        new (): HTMLBdsButtonElement;
    };
    interface HTMLBdsCardColorElement extends Components.BdsCardColor, HTMLStencilElement {
    }
    var HTMLBdsCardColorElement: {
        prototype: HTMLBdsCardColorElement;
        new (): HTMLBdsCardColorElement;
    };
    interface HTMLBdsCheckboxElement extends Components.BdsCheckbox, HTMLStencilElement {
    }
    var HTMLBdsCheckboxElement: {
        prototype: HTMLBdsCheckboxElement;
        new (): HTMLBdsCheckboxElement;
    };
    interface HTMLBdsCounterTextElement extends Components.BdsCounterText, HTMLStencilElement {
    }
    var HTMLBdsCounterTextElement: {
        prototype: HTMLBdsCounterTextElement;
        new (): HTMLBdsCounterTextElement;
    };
    interface HTMLBdsIconElement extends Components.BdsIcon, HTMLStencilElement {
    }
    var HTMLBdsIconElement: {
        prototype: HTMLBdsIconElement;
        new (): HTMLBdsIconElement;
    };
    interface HTMLBdsIconButtonElement extends Components.BdsIconButton, HTMLStencilElement {
    }
    var HTMLBdsIconButtonElement: {
        prototype: HTMLBdsIconButtonElement;
        new (): HTMLBdsIconButtonElement;
    };
    interface HTMLBdsInputElement extends Components.BdsInput, HTMLStencilElement {
    }
    var HTMLBdsInputElement: {
        prototype: HTMLBdsInputElement;
        new (): HTMLBdsInputElement;
    };
    interface HTMLBdsInputPasswordElement extends Components.BdsInputPassword, HTMLStencilElement {
    }
    var HTMLBdsInputPasswordElement: {
        prototype: HTMLBdsInputPasswordElement;
        new (): HTMLBdsInputPasswordElement;
    };
    interface HTMLBdsMenuListElement extends Components.BdsMenuList, HTMLStencilElement {
    }
    var HTMLBdsMenuListElement: {
        prototype: HTMLBdsMenuListElement;
        new (): HTMLBdsMenuListElement;
    };
    interface HTMLBdsMenuListItemElement extends Components.BdsMenuListItem, HTMLStencilElement {
    }
    var HTMLBdsMenuListItemElement: {
        prototype: HTMLBdsMenuListItemElement;
        new (): HTMLBdsMenuListItemElement;
    };
    interface HTMLBdsRadioElement extends Components.BdsRadio, HTMLStencilElement {
    }
    var HTMLBdsRadioElement: {
        prototype: HTMLBdsRadioElement;
        new (): HTMLBdsRadioElement;
    };
    interface HTMLBdsSelectElement extends Components.BdsSelect, HTMLStencilElement {
    }
    var HTMLBdsSelectElement: {
        prototype: HTMLBdsSelectElement;
        new (): HTMLBdsSelectElement;
    };
    interface HTMLBdsSelectOptionElement extends Components.BdsSelectOption, HTMLStencilElement {
    }
    var HTMLBdsSelectOptionElement: {
        prototype: HTMLBdsSelectOptionElement;
        new (): HTMLBdsSelectOptionElement;
    };
    interface HTMLBdsTypoElement extends Components.BdsTypo, HTMLStencilElement {
    }
    var HTMLBdsTypoElement: {
        prototype: HTMLBdsTypoElement;
        new (): HTMLBdsTypoElement;
    };
    interface HTMLElementTagNameMap {
        "bds-alert": HTMLBdsAlertElement;
        "bds-alert-actions": HTMLBdsAlertActionsElement;
        "bds-alert-body": HTMLBdsAlertBodyElement;
        "bds-alert-header": HTMLBdsAlertHeaderElement;
        "bds-button": HTMLBdsButtonElement;
        "bds-card-color": HTMLBdsCardColorElement;
        "bds-checkbox": HTMLBdsCheckboxElement;
        "bds-counter-text": HTMLBdsCounterTextElement;
        "bds-icon": HTMLBdsIconElement;
        "bds-icon-button": HTMLBdsIconButtonElement;
        "bds-input": HTMLBdsInputElement;
        "bds-input-password": HTMLBdsInputPasswordElement;
        "bds-menu-list": HTMLBdsMenuListElement;
        "bds-menu-list-item": HTMLBdsMenuListItemElement;
        "bds-radio": HTMLBdsRadioElement;
        "bds-select": HTMLBdsSelectElement;
        "bds-select-option": HTMLBdsSelectOptionElement;
        "bds-typo": HTMLBdsTypoElement;
    }
}
declare namespace LocalJSX {
    interface BdsAlert {
        /**
          * Used to open/close the alert
         */
        "open"?: boolean;
    }
    interface BdsAlertActions {
    }
    interface BdsAlertBody {
    }
    interface BdsAlertHeader {
        /**
          * used for add icon the header. Uses the bds-icon component.
         */
        "icon"?: string;
        /**
          * Variant. Entered as one of the variant. Can be one of:  'system', 'error', 'warning', 'delete';
         */
        "variant"?: AlertHeaderVariannt;
    }
    interface BdsButton {
        /**
          * The arrow button
         */
        "arrow"?: boolean;
        /**
          * If true, the base button will be disabled.
         */
        "disabled"?: boolean;
        /**
          * used for add icon in input left. Uses the bds-icon component.
         */
        "icon"?: string;
        /**
          * Size. Entered as one of the size. Can be one of:  'tall', 'standard', 'short';
         */
        "size"?: ButtonSize;
        /**
          * Variant. Entered as one of the variant. Can be one of:  'primary', 'secondary', 'ghost', 'dashed';
         */
        "variant"?: ButtonVariant;
    }
    interface BdsCardColor {
        /**
          * Specifies HEX color, use Figma docs in Blip DS.
         */
        "hex"?: string;
        /**
          * Specifies name color, use Figma docs in Blip DS.
         */
        "name": string;
        /**
          * Specifies variabel sass color, _variables.scss.
         */
        "variable": string;
    }
    interface BdsCheckbox {
        /**
          * If `true`, the checkbox is selected.
         */
        "checked"?: boolean;
        /**
          * If `true`, the user cannot interact with the checkbox.
         */
        "disabled"?: boolean;
        "label": string;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * Emitted when the value has changed.
         */
        "onBdsChange"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has changed.
         */
        "onBdsInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        "refer": string;
    }
    interface BdsCounterText {
        "active"?: boolean;
        "delete"?: CounterTextRule;
        "length": number;
        "max"?: number;
        "warning"?: CounterTextRule;
    }
    interface BdsIcon {
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        /**
          * Specifies the color to use.Specifies a color to use. The default is svg.
         */
        "color"?: string;
        /**
          * Specifies whether the icon should horizontally flip when `dir` is `"rtl"`.
         */
        "flipRtl"?: boolean;
        /**
          * A combination of both `name` and `src`. If a `src` url is detected it will set the `src` property. Otherwise it assumes it's a built-in named SVG and set the `name` property.
         */
        "icon"?: any;
        /**
          * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
         */
        "lazy"?: boolean;
        /**
          * Specifies which icon to use from the built-in set of icons.
         */
        "name"?: string;
        /**
          * Icon size. Entered as one of the icon size design tokens. Can be one of: "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large".
         */
        "size"?: IconSize;
        /**
          * Specifies the exact `src` of an SVG file to use.
         */
        "src"?: string;
        /**
          * Specifies the theme to use outline or solid icons. Defaults to outline.
         */
        "theme"?: IconTheme;
    }
    interface BdsIconButton {
        /**
          * If true, the base button will be disabled.
         */
        "disabled"?: boolean;
        /**
          * used for add icon in input left. Uses the bds-icon component.
         */
        "icon"?: string;
        /**
          * Size. Entered as one of the size. Can be one of: 'tall', 'standard', 'short';
         */
        "size"?: IconButtonSize;
        /**
          * Variant. Entered as one of the variant. Can be one of: 'primary', 'secondary', 'ghost', 'dashed';
         */
        "variant"?: IconButtonVariant;
    }
    interface BdsInput {
        /**
          * Capitalizes every word's second character.
         */
        "autoCapitalize"?: InputAutocapitalize;
        /**
          * Hint for form autofill feature
         */
        "autoComplete"?: InputAutoComplete;
        /**
          * Passing true to display a counter of available size, it is necessary to pass another maxlength property.
         */
        "counterLength"?: boolean;
        /**
          * Make it possible to pass the base values to the warning level and exclude, using the values between min and max.
         */
        "counterLengthRule"?: InputCounterLengthRules | {};
        /**
          * Add state danger on input, use for use feedback.
         */
        "danger"?: boolean;
        /**
          * Disabled input.
         */
        "disabled"?: boolean;
        /**
          * Indicated to pass an feeback to user.
         */
        "errorMessage"?: string;
        /**
          * Indicated to pass a help the user in complex filling.
         */
        "helperMessage"?: string;
        /**
          * used for add icon in input left. Uses the bds-icon component.
         */
        "icon"?: string;
        /**
          * Input Name
         */
        "inputName"?: string;
        /**
          * label in input, with he the input size increases.
         */
        "label"?: string;
        /**
          * The maximum value, which must not be less than its minimum (min attribute) value.
         */
        "max"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
         */
        "maxlength"?: number;
        /**
          * The minimum value, which must not be greater than its maximum (max attribute) value.
         */
        "min"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        "minlength"?: number;
        /**
          * Emitted when the value has changed.
         */
        "onBdsChange"?: (event: CustomEvent<any>) => void;
        /**
          * Event input focus.
         */
        "onBdsFocus"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has changed.
         */
        "onBdsInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * Event input onblur.
         */
        "onBdsOnBlur"?: (event: CustomEvent<any>) => void;
        /**
          * A tip for the user who can enter no controls.
         */
        "placeholder"?: string;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly"?: boolean;
        /**
          * Input type. Can be one of: "text" or "password".
         */
        "type"?: InputType;
        /**
          * The value of the input.
         */
        "value"?: string | null;
    }
    interface BdsInputPassword {
        /**
          * Capitalizes every word's second character.
         */
        "autoCapitalize"?: InputAutocapitalize;
        /**
          * Hint for form autofill feature
         */
        "autoComplete"?: InputAutoComplete;
        /**
          * Add state danger on input, use for use feedback.
         */
        "danger"?: boolean;
        /**
          * Disabled input.
         */
        "disabled"?: boolean;
        /**
          * Indicated to pass an feeback to user.
         */
        "errorMessage"?: string;
        /**
          * Indicated to pass a help the user in complex filling.
         */
        "helperMessage"?: string;
        /**
          * used for add icon in input left. Uses the bds-icon component.
         */
        "icon"?: string;
        /**
          * Input Name
         */
        "inputName"?: string;
        /**
          * label in input, with he the input size increases.
         */
        "label"?: string;
        /**
          * The maximum value, which must not be less than its minimum (min attribute) value.
         */
        "max"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
         */
        "maxlength"?: number;
        /**
          * The minimum value, which must not be greater than its maximum (max attribute) value.
         */
        "min"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        "minlength"?: number;
        "openEyes"?: boolean;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly"?: boolean;
        /**
          * The value of the input.
         */
        "value"?: string | null;
    }
    interface BdsMenuList {
    }
    interface BdsMenuListItem {
        "color"?: string;
        /**
          * used for add icon in input left. Uses the bds-icon component.
         */
        "icon": string;
    }
    interface BdsRadio {
        /**
          * If `true`, the checkbox is selected.
         */
        "checked"?: boolean;
        /**
          * If `true`, the user cannot interact with the checkbox.
         */
        "disabled"?: boolean;
        "label": string;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * Emitted when the value has changed.
         */
        "onBdsChange"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has changed.
         */
        "onBdsInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        "refer": string;
        "value": string;
    }
    interface BdsSelect {
        /**
          * Add state danger on input, use for use feedback.
         */
        "danger"?: boolean;
        /**
          * Disabled input.
         */
        "disabled"?: boolean;
        /**
          * used for add icon in input left. Uses the bds-icon component.
         */
        "icon"?: string;
        /**
          * label in input, with he the input size increases.
         */
        "label"?: string;
        /**
          * Emitted when the select loses focus.
         */
        "onBdsBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the selection is cancelled.
         */
        "onBdsCancel"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onBdsChange"?: (event: CustomEvent<SelectChangeEventDetail>) => void;
        /**
          * Emitted when the select loses focus.
         */
        "onBdsFocus"?: (event: CustomEvent<void>) => void;
        "options"?: Array<Option>;
        /**
          * the value of the select.
         */
        "value"?: any | null;
    }
    interface BdsSelectOption {
        /**
          * Quantity Description on option value, this item is locate to rigth in component.
         */
        "bulkOption"?: string;
        /**
          * If `true`, the user cannot interact with the select option.
         */
        "disabled"?: boolean;
        "onOptionSelected"?: (event: CustomEvent<any>) => void;
        /**
          * The text value of the option.
         */
        "selected"?: boolean;
        "value": any;
    }
    interface BdsTypo {
        /**
          * Bold. Entered as one of the bold. Can be one of:  'regular', 'semi-bold', 'bold', 'extra-bold';
         */
        "bold"?: Bold;
        /**
          * Added font style italic
         */
        "italic"?: boolean;
        /**
          * Line Height. Entered as one of the line hieght. Can be one of:  'none', 'small', 'simple', 'plus', 'double'
         */
        "lineHeight"?: FontLineHeight;
        /**
          * Added style no wrap
         */
        "noWrap"?: boolean;
        /**
          * Tranform text in paragraph
         */
        "paragraph"?: boolean;
        /**
          * Define element tag, must be used for acessibilty
         */
        "tag"?: Tag;
        /**
          * Variant. Entered as one of the font size variant. Can be one of:  'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40';
         */
        "variant"?: FontSize;
    }
    interface IntrinsicElements {
        "bds-alert": BdsAlert;
        "bds-alert-actions": BdsAlertActions;
        "bds-alert-body": BdsAlertBody;
        "bds-alert-header": BdsAlertHeader;
        "bds-button": BdsButton;
        "bds-card-color": BdsCardColor;
        "bds-checkbox": BdsCheckbox;
        "bds-counter-text": BdsCounterText;
        "bds-icon": BdsIcon;
        "bds-icon-button": BdsIconButton;
        "bds-input": BdsInput;
        "bds-input-password": BdsInputPassword;
        "bds-menu-list": BdsMenuList;
        "bds-menu-list-item": BdsMenuListItem;
        "bds-radio": BdsRadio;
        "bds-select": BdsSelect;
        "bds-select-option": BdsSelectOption;
        "bds-typo": BdsTypo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bds-alert": LocalJSX.BdsAlert & JSXBase.HTMLAttributes<HTMLBdsAlertElement>;
            "bds-alert-actions": LocalJSX.BdsAlertActions & JSXBase.HTMLAttributes<HTMLBdsAlertActionsElement>;
            "bds-alert-body": LocalJSX.BdsAlertBody & JSXBase.HTMLAttributes<HTMLBdsAlertBodyElement>;
            "bds-alert-header": LocalJSX.BdsAlertHeader & JSXBase.HTMLAttributes<HTMLBdsAlertHeaderElement>;
            "bds-button": LocalJSX.BdsButton & JSXBase.HTMLAttributes<HTMLBdsButtonElement>;
            "bds-card-color": LocalJSX.BdsCardColor & JSXBase.HTMLAttributes<HTMLBdsCardColorElement>;
            "bds-checkbox": LocalJSX.BdsCheckbox & JSXBase.HTMLAttributes<HTMLBdsCheckboxElement>;
            "bds-counter-text": LocalJSX.BdsCounterText & JSXBase.HTMLAttributes<HTMLBdsCounterTextElement>;
            "bds-icon": LocalJSX.BdsIcon & JSXBase.HTMLAttributes<HTMLBdsIconElement>;
            "bds-icon-button": LocalJSX.BdsIconButton & JSXBase.HTMLAttributes<HTMLBdsIconButtonElement>;
            "bds-input": LocalJSX.BdsInput & JSXBase.HTMLAttributes<HTMLBdsInputElement>;
            "bds-input-password": LocalJSX.BdsInputPassword & JSXBase.HTMLAttributes<HTMLBdsInputPasswordElement>;
            "bds-menu-list": LocalJSX.BdsMenuList & JSXBase.HTMLAttributes<HTMLBdsMenuListElement>;
            "bds-menu-list-item": LocalJSX.BdsMenuListItem & JSXBase.HTMLAttributes<HTMLBdsMenuListItemElement>;
            "bds-radio": LocalJSX.BdsRadio & JSXBase.HTMLAttributes<HTMLBdsRadioElement>;
            "bds-select": LocalJSX.BdsSelect & JSXBase.HTMLAttributes<HTMLBdsSelectElement>;
            "bds-select-option": LocalJSX.BdsSelectOption & JSXBase.HTMLAttributes<HTMLBdsSelectOptionElement>;
            "bds-typo": LocalJSX.BdsTypo & JSXBase.HTMLAttributes<HTMLBdsTypoElement>;
        }
    }
}
