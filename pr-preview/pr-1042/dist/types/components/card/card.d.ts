import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { PaperBackground, BorderColor } from '../paper/paper-interface';
export type elevationType = 'primary' | 'secondary' | 'static' | 'none';
export declare class Card implements ComponentInterface {
    /**
     * Prop for set the height of the component.
     */
    height?: string;
    /**
     * Prop for set the width of the component.
     */
    width?: string;
    /**
     * If the prop is true, the component will be clickable.
     */
    clickable?: boolean;
    /**
     * Prop for set the background color.
     */
    bgColor?: PaperBackground;
    /**
     * Prop for set the background color.
     */
    selectable?: boolean;
    /**
     * Prop for set the border color.
     */
    borderColor?: BorderColor;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    isHovered: boolean;
    isPressed: boolean;
    elevation: elevationType;
    /**
     * This event will be dispatch when click on the component.
     */
    bdsClick: EventEmitter;
    element: HTMLElement;
    private cardElement;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    private handleKeyDown;
    render(): any;
}
