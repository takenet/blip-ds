import { Component, Element, Prop, Watch, h } from '@stencil/core';

export type UaiTypoVariant =
  | 'display'
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'title'
  | 'body-lg'
  | 'body-base'
  | 'body-sm'
  | 'caption'
  | 'overline';
export type UaiTypoBold = 'regular' | 'medium' | 'semibold' | 'bold';
export type UaiTypoLetterSpacing = 'normal' | 'expanded';
export type UaiTypoTag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
export type UaiTypoLineHeight = 'none' | 'small' | 'simple' | 'plus' | 'double';

const VARIANTS: UaiTypoVariant[] = [
  'display',
  'heading-xl',
  'heading-lg',
  'heading-md',
  'title',
  'body-lg',
  'body-base',
  'body-sm',
  'caption',
  'overline',
];
const BOLDS: UaiTypoBold[] = ['regular', 'medium', 'semibold', 'bold'];
const LETTER_SPACINGS: UaiTypoLetterSpacing[] = ['normal', 'expanded'];
const TAGS: UaiTypoTag[] = ['p', 'h1', 'h2', 'h3', 'h4', 'span'];
const MARGIN_VARIANTS: UaiTypoVariant[] = ['display', 'heading-xl', 'heading-lg', 'heading-md'];

const warnings = new Set<string>();
const warnOnce = (key: string, message: string): void => {
  if (warnings.has(key)) return;
  warnings.add(key);
  console.warn(`[uai-typo] ${message}`);
};

const supported = <T extends string>(prop: string, value: string, allowed: T[], fallback: T): T => {
  if ((allowed as string[]).includes(value)) return value as T;
  warnOnce(`${prop}:${value}`, `Unsupported ${prop} "${value}". Using "${fallback}".`);
  return fallback;
};

const hasThemeRoot = (el: HTMLElement): boolean => {
  let node: Node | null = el;
  while (node) {
    if (node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).hasAttribute('data-uai-theme')) return true;
    node = node.parentNode || (node as ShadowRoot).host || null;
  }
  return false;
};

/**
 * Text with the UAI type scale. variant and bold are the Figma text styles (heading/lg/semibold is variant="heading-lg" bold="semibold");
 * tag sets the HTML element, so use h1-h4 for titles. Default: body-base, regular, <p>. Wrap the app in UaiThemeProvider.
 */
@Component({
  tag: 'uai-typo',
  styleUrl: 'uai-typo.scss',
  shadow: true,
})
export class UaiTypo {
  @Element() el!: HTMLElement;

  /**
   * Text style role from the UAI typography scale. Can be one of:
   * 'display', 'heading-xl', 'heading-lg', 'heading-md', 'title', 'body-lg', 'body-base', 'body-sm', 'caption', 'overline'.
   */
  @Prop() variant?: UaiTypoVariant = 'body-base';

  /**
   * Font weight. Can be one of: 'regular', 'medium', 'semibold', 'bold'.
   */
  @Prop() bold?: UaiTypoBold = 'regular';

  /**
   * Letter spacing. 'expanded' matches the spaced body text style.
   */
  @Prop() letterSpacing?: UaiTypoLetterSpacing = 'normal';

  /**
   * @deprecated The line height comes from the variant. This prop has no effect.
   */
  @Prop() lineHeight?: UaiTypoLineHeight;

  /**
   * Adds font style italic.
   */
  @Prop() italic?: boolean = false;

  /**
   * Keeps the text on one line and truncates it with an ellipsis.
   */
  @Prop() noWrap?: boolean = false;

  /**
   * Adds a bottom margin for paragraphs.
   */
  @Prop() paragraph?: boolean = false;

  /**
   * If true, adds the default bottom margin to display and heading variants.
   */
  @Prop() margin?: boolean = true;

  /**
   * Element tag. Use it to give the text the right semantics.
   */
  @Prop() tag?: UaiTypoTag = 'p';

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  @Watch('lineHeight')
  protected warnDeprecated(): void {
    if (this.lineHeight !== undefined && this.lineHeight !== null) {
      warnOnce('lineHeight', '"lineHeight" is deprecated and has no effect. The line height comes from the variant.');
    }
  }

  componentWillLoad(): void {
    this.warnDeprecated();
  }

  componentDidLoad(): void {
    if (!hasThemeRoot(this.el)) {
      warnOnce('theme-root', 'No [data-uai-theme] ancestor found. Wrap UAI components in <uai-theme-provider>.');
    }
  }

  render(): HTMLElement {
    const variant = supported('variant', this.variant, VARIANTS, 'body-base');
    const bold = supported('bold', this.bold, BOLDS, 'regular');
    const letterSpacing = supported('letterSpacing', this.letterSpacing, LETTER_SPACINGS, 'normal');
    const Tag = supported('tag', this.tag, TAGS, 'p');

    return (
      <Tag
        class={{
          typo: true,
          [`typo--variant-${variant}`]: true,
          [`typo--bold-${bold}`]: true,
          [`typo--letter-spacing-${letterSpacing}`]: true,
          'typo--margin': this.margin && MARGIN_VARIANTS.includes(variant),
          'typo--paragraph': this.paragraph,
          'typo--italic': this.italic,
          'typo--no-wrap': this.noWrap,
        }}
        part="uai-typo__text"
        data-test={this.dataTest}
      >
        <slot></slot>
      </Tag>
    );
  }
}
