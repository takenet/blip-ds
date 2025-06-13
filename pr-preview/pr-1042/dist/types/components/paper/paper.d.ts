import { ComponentInterface } from '../../stencil-public-runtime';
import { PaperElevation, PaperBackground, BorderColor } from './paper-interface';
export declare class Paper implements ComponentInterface {
    hasBorder: boolean;
    constElevation: string;
    /**
     * Size. Entered as one of the size. Can be one of:
     * 'static', 'primary', 'secondary';
     */
    elevation?: PaperElevation;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    /**
     * Prop for set the border of the component.
     */
    border?: boolean;
    /**
     * Prop for set the height of the component.
     */
    height?: string;
    /**
     * Prop for set the width of the component.
     */
    width?: string;
    /**
     * Prop for set the background color.
     */
    bgColor?: PaperBackground;
    /**
     * Prop for set the border color.
     */
    borderColor?: BorderColor;
    componentWillLoad(): void;
    render(): any;
}
