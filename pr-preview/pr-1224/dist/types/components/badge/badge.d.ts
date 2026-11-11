export type Shape = 'circle' | 'triangle' | 'triangle-reverse' | 'polygon' | 'square';
export type Color = 'system' | 'danger' | 'warning' | 'success' | 'neutral';
export type Type = 'status' | 'icon' | 'number' | 'empty';
export declare class Badge {
    /**
     * State for keep the value of the type.
     */
    type?: Type;
    /**
     * Set the color of the component.
     */
    color?: string;
    /**
     * Set the shape of the component.
     */
    shape?: Shape;
    /**
     * Set witch icon will be render inside the component.
     */
    icon?: string;
    /**
     * Set the text in shape circle. Is just alow numbers, but if the number pass 999 a symbol '+' will be render.
     */
    number?: number;
    /**
     * If true, actived the pulse animation.
     */
    animation?: boolean;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    componentWillLoad(): void;
    numberChanged(newNumber: number): void;
    render(): any;
}
