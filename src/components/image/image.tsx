import { Element, Component, Prop, Method, State, h, Host } from '@stencil/core';

export type ObjectFitValue = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

@Component({
  tag: 'bds-image',
  styleUrl: 'image.scss',
  shadow: true,
})
export class Image {
  private imageHasLoading: boolean = false;

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

  componentDidLoad() {
    this.element.style.width = this.width ? this.width : 'auto';
    this.element.style.height = this.height?.length > 0 ? this.height : 'auto';
  }

  @Method()
  async loadImage(): Promise<void> {
    if (this.src) {
      this.imageHasLoading = true;
      try {
        const response = await fetch(this.src);
        if (response.ok) {
          const blob = await response.blob();
          const objectURL = URL.createObjectURL(blob);
          this.currentSrc = objectURL;
          this.imageLoaded = true;
          this.imageHasLoading = false;
        } else {
          this.loadError = true;
        }
      } catch {
        this.imageHasLoading = false;
        this.loadError = true;
      }
    }
  }

  render(): JSX.Element {
    if (!this.imageLoaded && !this.loadError) {
      // Se a imagem ainda não foi carregada, chame o método loadImage
      this.loadImage();
    }
    return (
      <Host class={{ empty_img: !this.imageLoaded }}>
        {this.imageLoaded ? (
          <img
            src={this.currentSrc}
            alt={this.alt}
            style={{
              objectFit: this.objectFit,
              width: '100%',
              height: '100%',
              filter: `brightness(${this.brightness})`,
            }}
            data-test={this.dataTest}
            draggable={false}
          />
        ) : this.imageHasLoading ? (
          <bds-skeleton shape="square" width="100%" height="100%"></bds-skeleton>
        ) : (
          <bds-illustration
            class="img-feedback"
            type="empty-states"
            name={this.loadError ? 'broken-image' : 'image-not-found'}
            alt={this.alt}
            data-test={this.dataTest}
          ></bds-illustration>
        )}
      </Host>
    );
  }
}
