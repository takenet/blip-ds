import { Component, Prop, Method, State, h } from '@stencil/core';

export type ObjectFitValue = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

@Component({
  tag: 'bds-image',
  styleUrl: 'image.scss',
  shadow: true,
})
export class Image {
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

  @Method()
  async loadImage(): Promise<void> {
    if (this.src) {
      try {
        const response = await fetch(this.src);
        if (response.ok) {
          const blob = await response.blob();
          const objectURL = URL.createObjectURL(blob);
          this.currentSrc = objectURL;
          this.imageLoaded = true;
        } else {
          this.loadError = true;
        }
      } catch {
        this.loadError = true;
      }
    }
  }

  render(): JSX.Element {
    if (!this.imageLoaded && !this.loadError) {
      // Se a imagem ainda não foi carregada, chame o método loadImage
      this.loadImage();
    }

    if (this.imageLoaded) {
      return (
        <img
          src={this.currentSrc}
          alt={this.alt}
          style={{ objectFit: this.objectFit, width: this.width, height: this.height }}
          data-test={this.dataTest}
          draggable={false}
        />
      );
    } else if (!this.src) {
      // Se imageLoaded for falso e src estiver vazia, renderize a ilustração "image-not-found"
      return (
        <div style={{ width: this.width || this.height ? this.width : '100%' }}>
          <bds-illustration
            type="empty-states"
            name="image-not-found"
            alt={this.alt}
            data-test={this.dataTest}
          ></bds-illustration>
        </div>
      );
    } else {
      // Se imageLoaded for falso e src não estiver vazia, renderize a ilustração "broken-image"
      return (
        <div style={{ width: this.width || this.height ? this.width : '100%' }}>
          <bds-illustration
            type="empty-states"
            name="broken-image"
            alt={this.alt}
            data-test={this.dataTest}
          ></bds-illustration>
        </div>
      );
    }
  }
}
