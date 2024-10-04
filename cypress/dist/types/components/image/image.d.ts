/// <reference types="react" />
export type ObjectFitValue = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
export declare class Image {
  /**
   * URL of the main image.
   */
  src?: string;
  /**
   * Alternative text for the image.
   */
  alt?: string;
  /**
   * Width of the image.
   */
  width?: string;
  /**
   * Height of the image.
   */
  height?: string;
  /**
   * Specifies the object-fit style for the image. Can be: 'fill', 'contain', 'cover', 'none', 'scale-down'.
   */
  objectFit?: ObjectFitValue;
  /**
   * Data test is the prop to specifically test the component action object.
   */
  dataTest?: string;
  /**
   * Indicates whether the main image has been successfully loaded.
   */
  imageLoaded: boolean;
  /**
   * Indicates whether there was an error during image loading.
   */
  loadError: boolean;
  /**
   * The current source URL of the image to be rendered.
   */
  currentSrc: string;
  loadImage(): Promise<void>;
  render(): JSX.Element;
}
