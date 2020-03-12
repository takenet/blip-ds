/* eslint-disable @typescript-eslint/no-explicit-any */
import { Build, Component, Element, Host, Prop, State, Watch, h } from '@stencil/core';
// import { getName, getUrl, formatSvg } from './utils';
import icons from 'jc-test-sd/build/json/assets_icons.json';

export type IconSize = 'xxx-small'
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large';

export type IconTheme = 'outline' | 'solid';

@Component({
  tag: 'bds-icon',
  assetsDir: 'svg',
  styleUrl: 'icon.scss',
  shadow: true
})
export class Icon {
  private io?: IntersectionObserver;

  @Element() el!: HTMLElement;

  @State() private svgContent?: string;
  @State() private isVisible = false;

  /**
  * Specifies the color to use.Specifies a color to use. The default is svg.
  */
  @Prop() color?: string;

  /**
   * Specifies the label to use for accessibility. Defaults to the icon name.
   */
  @Prop({ mutable: true, reflectToAttr: true }) ariaLabel?: string;

  /**
   * Specifies whether the icon should horizontally flip when `dir` is `"rtl"`.
   */
  @Prop() flipRtl?: boolean;

  /**
   * Specifies which icon to use from the built-in set of icons.
   */
  @Prop() name?: string;

  /**
   * Specifies the exact `src` of an SVG file to use.
   */
  @Prop() src?: string;

  /**
   * A combination of both `name` and `src`. If a `src` url is detected
   * it will set the `src` property. Otherwise it assumes it's a built-in named
   * SVG and set the `name` property.
   */
  @Prop() icon?: any;

  /**
   * Icon size. Entered as one of the icon size design tokens. Can be one of:
   * "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large".
   */
  @Prop() size?: IconSize = 'medium';

  /**
   * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
   * Default, `false`.
   */
  @Prop() lazy = false;

  /**
  * Specifies the theme to use outline or solid icons. Defaults to outline.
  */
  @Prop({ reflect: true }) theme: IconTheme = 'outline';

  connectedCallback(): void {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.el, '50px', () => {
      this.isVisible = true;
      console.log('callback');
      this.loadIcon();
    });
  }

  disconnectedCallback(): void {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }

  private waitUntilVisible(el: HTMLElement, rootMargin: string, cb: () => void): void {
    if (Build.isBrowser && this.lazy && typeof window !== 'undefined' && (window as any).IntersectionObserver) {
      const io = this.io = new (window as any).IntersectionObserver((data: IntersectionObserverEntry[]) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = undefined;
          cb();
        }
      }, { rootMargin });

      io.observe(el);

    } else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      cb();
    }
  }

  @Watch('name')
  @Watch('src')
  @Watch('icon')
  loadIcon(): void {
    if (Build.isBrowser && this.isVisible) {
      const iconKey = 'asset-icon-alert-circle';
      const svg = atob(icons[iconKey]);
      this.svgContent = svg;
      console.log('trace loadIcon', this.svgContent);
    }

    if (!this.ariaLabel) {
      const label = this.name;
      // user did not provide a label
      // come up with the label based on the icon name
      if (label) {
        this.ariaLabel = label;
      }
    }
  }

  render(): HTMLElement {
    console.log('render', this.isVisible, Boolean(this.svgContent));
    return (
      <Host role="img" class="example-icon">{(
        (this.svgContent)
          ? <div class="icon-inner" innerHTML={this.svgContent}></div>
          : <div class="icon-inner"></div>
      )}
      </Host>
    );
  }

}
