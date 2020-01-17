/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ButtonSize,
  ButtonVariant,
} from './components/button/button';
import {
  IconSize,
  IconTheme,
} from './components/icon/icon';
import {
  InputType,
} from './components/inputs/inputs';
import {
  Bold,
  FontLineHeight,
  FontSize,
  Tag,
} from './components/typo/typo';

export namespace Components {
  interface BdsButton {
    /**
    * The arrow button
    */
    'arrow'?: boolean;
    /**
    * If true, the base button will be disabled.
    */
    'disabled'?: boolean;
    /**
    * The icon name
    */
    'icon'?: string;
    /**
    * Size. Entered as one of the size. Can be one of:  'tall', 'standard', 'short';
    */
    'size'?: ButtonSize;
    /**
    * Variant. Entered as one of the variant. Can be one of:  'primary', 'second', 'ghost', 'dashed';
    */
    'variant'?: ButtonVariant;
  }
  interface BdsCardColor {
    /**
    * Specifies HEX color, use Figma docs in Blip DS.
    */
    'hex'?: string;
    /**
    * Specifies name color, use Figma docs in Blip DS.
    */
    'name': string;
    /**
    * Specifies variabel sass color, _variables.scss.
    */
    'variable': string;
  }
  interface BdsIcon {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    /**
    * Specifies the color to use.Specifies a color to use. The default is svg.
    */
    'color'?: string;
    /**
    * Specifies which icon to use from the built-in set of icons.
    */
    'name': string;
    /**
    * Icon size. Entered as one of the icon size design tokens. Can be one of:  "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large".
    */
    'size'?: IconSize;
    /**
    * Specifies the theme to use outline or solid icons. Defaults to outline.
    */
    'theme': IconTheme;
  }
  interface BdsInput {
    'danger'?: boolean;
    'errorMessage'?: string;
    'helperMessage'?: string;
    'iconLeft'?: string;
    'iconRight'?: string;
    'inputId': string;
    'inputName'?: string;
    'label'?: string;
    'onChangeValue': Function;
    'placeholder'?: string;
    'type'?: InputType;
    'value'?: string;
  }
  interface BdsTypo {
    /**
    * Bold. Entered as one of the bold. Can be one of:  'regular', 'semi-bold', 'bold', 'extra-bold';
    */
    'bold'?: Bold;
    /**
    * Added font style italic
    */
    'italic'?: boolean;
    /**
    * Line Height. Entered as one of the line hieght. Can be one of:  'none', 'small', 'simple', 'plus', 'double'
    */
    'lineHeight'?: FontLineHeight;
    /**
    * Added style no wrap
    */
    'noWrap'?: boolean;
    /**
    * Tranform text in paragraph
    */
    'paragraph'?: boolean;
    /**
    * Define element tag, must be used for acessibilty
    */
    'tag'?: Tag;
    /**
    * Variant. Entered as one of the font size variant. Can be one of:  'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40';
    */
    'variant'?: FontSize;
  }
}

declare global {


  interface HTMLBdsButtonElement extends Components.BdsButton, HTMLStencilElement {}
  var HTMLBdsButtonElement: {
    prototype: HTMLBdsButtonElement;
    new (): HTMLBdsButtonElement;
  };

  interface HTMLBdsCardColorElement extends Components.BdsCardColor, HTMLStencilElement {}
  var HTMLBdsCardColorElement: {
    prototype: HTMLBdsCardColorElement;
    new (): HTMLBdsCardColorElement;
  };

  interface HTMLBdsIconElement extends Components.BdsIcon, HTMLStencilElement {}
  var HTMLBdsIconElement: {
    prototype: HTMLBdsIconElement;
    new (): HTMLBdsIconElement;
  };

  interface HTMLBdsInputElement extends Components.BdsInput, HTMLStencilElement {}
  var HTMLBdsInputElement: {
    prototype: HTMLBdsInputElement;
    new (): HTMLBdsInputElement;
  };

  interface HTMLBdsTypoElement extends Components.BdsTypo, HTMLStencilElement {}
  var HTMLBdsTypoElement: {
    prototype: HTMLBdsTypoElement;
    new (): HTMLBdsTypoElement;
  };
  interface HTMLElementTagNameMap {
    'bds-button': HTMLBdsButtonElement;
    'bds-card-color': HTMLBdsCardColorElement;
    'bds-icon': HTMLBdsIconElement;
    'bds-input': HTMLBdsInputElement;
    'bds-typo': HTMLBdsTypoElement;
  }
}

declare namespace LocalJSX {
  interface BdsButton {
    /**
    * The arrow button
    */
    'arrow'?: boolean;
    /**
    * If true, the base button will be disabled.
    */
    'disabled'?: boolean;
    /**
    * The icon name
    */
    'icon'?: string;
    /**
    * Size. Entered as one of the size. Can be one of:  'tall', 'standard', 'short';
    */
    'size'?: ButtonSize;
    /**
    * Variant. Entered as one of the variant. Can be one of:  'primary', 'second', 'ghost', 'dashed';
    */
    'variant'?: ButtonVariant;
  }
  interface BdsCardColor {
    /**
    * Specifies HEX color, use Figma docs in Blip DS.
    */
    'hex'?: string;
    /**
    * Specifies name color, use Figma docs in Blip DS.
    */
    'name': string;
    /**
    * Specifies variabel sass color, _variables.scss.
    */
    'variable': string;
  }
  interface BdsIcon {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    /**
    * Specifies the color to use.Specifies a color to use. The default is svg.
    */
    'color'?: string;
    /**
    * Specifies which icon to use from the built-in set of icons.
    */
    'name': string;
    /**
    * Icon size. Entered as one of the icon size design tokens. Can be one of:  "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large".
    */
    'size'?: IconSize;
    /**
    * Specifies the theme to use outline or solid icons. Defaults to outline.
    */
    'theme'?: IconTheme;
  }
  interface BdsInput {
    'danger'?: boolean;
    'errorMessage'?: string;
    'helperMessage'?: string;
    'iconLeft'?: string;
    'iconRight'?: string;
    'inputId': string;
    'inputName'?: string;
    'label'?: string;
    'onChangeValue'?: Function;
    'placeholder'?: string;
    'type'?: InputType;
    'value'?: string;
  }
  interface BdsTypo {
    /**
    * Bold. Entered as one of the bold. Can be one of:  'regular', 'semi-bold', 'bold', 'extra-bold';
    */
    'bold'?: Bold;
    /**
    * Added font style italic
    */
    'italic'?: boolean;
    /**
    * Line Height. Entered as one of the line hieght. Can be one of:  'none', 'small', 'simple', 'plus', 'double'
    */
    'lineHeight'?: FontLineHeight;
    /**
    * Added style no wrap
    */
    'noWrap'?: boolean;
    /**
    * Tranform text in paragraph
    */
    'paragraph'?: boolean;
    /**
    * Define element tag, must be used for acessibilty
    */
    'tag'?: Tag;
    /**
    * Variant. Entered as one of the font size variant. Can be one of:  'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40';
    */
    'variant'?: FontSize;
  }

  interface IntrinsicElements {
    'bds-button': BdsButton;
    'bds-card-color': BdsCardColor;
    'bds-icon': BdsIcon;
    'bds-input': BdsInput;
    'bds-typo': BdsTypo;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'bds-button': LocalJSX.BdsButton & JSXBase.HTMLAttributes<HTMLBdsButtonElement>;
      'bds-card-color': LocalJSX.BdsCardColor & JSXBase.HTMLAttributes<HTMLBdsCardColorElement>;
      'bds-icon': LocalJSX.BdsIcon & JSXBase.HTMLAttributes<HTMLBdsIconElement>;
      'bds-input': LocalJSX.BdsInput & JSXBase.HTMLAttributes<HTMLBdsInputElement>;
      'bds-typo': LocalJSX.BdsTypo & JSXBase.HTMLAttributes<HTMLBdsTypoElement>;
    }
  }
}


