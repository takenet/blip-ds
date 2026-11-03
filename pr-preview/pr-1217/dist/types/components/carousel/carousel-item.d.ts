import { Themes } from '../theme-provider/theme-provider';
export declare class BdsCarouselItem {
    /**
     * Set what theme will be aplyed inside the component.
     * 'light', 'dark';
     */
    theme?: Themes;
    bgImage?: string;
    bgImageBrightness?: number;
    bgColor?: string;
    render(): HTMLElement;
}
