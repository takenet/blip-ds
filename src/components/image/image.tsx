import { Element, Component, Prop, Method, State, Watch, h, Host } from '@stencil/core';

export type ObjectFitValue = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

@Component({
  tag: 'bds-image',
  styleUrl: 'image.scss',
  shadow: true,
})
export class Image {
  @State() private imageHasLoading = false;

  @Element() element: HTMLElement;
  /**
   * URL of the main image.
   */
  @Prop({ reflect: true, mutable: true }) src?: string;

  /**
   * Alternative text for the image.
   */
  @Prop() alt?: string;

  /**
   * Width of the image.
   */
  @Prop() width?: string;

  /**
   * Height of the image.
   */
  @Prop() height?: string;

  /**
   * Specifies the object-fit style for the image. Can be: 'fill', 'contain', 'cover', 'none', 'scale-down'.
   */
  @Prop() objectFit?: ObjectFitValue = 'cover';

  /**
   * Brightness of the image.
   */
  @Prop() brightness?: number;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Indicates whether the main image has been successfully loaded.
   */
  @State() imageLoaded = false;

  /**
   * Indicates whether there was an error during image loading.
   */
  @State() loadError = false;

  /**
   * The current source URL of the image to be rendered.
   */
  @State() currentSrc: string;

  componentWillLoad() {
    this.loadImage();
  }

  componentDidLoad() {
    this.element.style.width = this.width ? this.width : 'auto';
    this.element.style.height = this.height?.length > 0 ? this.height : 'auto';
  }

  @Method()
  @Watch('src')
  async loadImage(): Promise<void> {
    this.imageLoaded = false;
    this.loadError = false;
    this.currentSrc = this.src || undefined;
    this.imageHasLoading = !!this.currentSrc;
  }

  render(): JSX.Element {
    return (
      <Host class={{ empty_img: !this.imageLoaded }}>
        {this.currentSrc && !this.loadError && (
          <img
            src={this.currentSrc}
            alt={this.alt}
            hidden={!this.imageLoaded}
            onLoad={() => {
              this.imageLoaded = true;
              this.imageHasLoading = false;
            }}
            onError={() => {
              this.loadError = true;
              this.imageHasLoading = false;
            }}
            style={{
              objectFit: this.objectFit,
              width: '100%',
              height: '100%',
              filter: `brightness(${this.brightness ?? 1})`,
            }}
            data-test={this.dataTest}
            draggable={false}
          />
        )}
        {!this.imageLoaded && (this.imageHasLoading ? (
          <bds-skeleton shape="square" width="100%" height="100%"></bds-skeleton>
        ) : (
          <bds-illustration
            class="img-feedback"
            type="empty-states"
            name={this.loadError ? 'broken-image' : 'image-not-found'}
            alt={this.alt}
            data-test={this.dataTest}
          ></bds-illustration>
        ))}
      </Host>
    );
  }
}
