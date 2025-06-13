export type orientation = 'horizontal' | 'vertical';
export type navbarBackground = 'surface-1' | 'surface-2' | 'surface-3';
export type justifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
export declare class Navbar {
    hostElement: HTMLElement;
    /**
     * Navbar orientation. Used to orientation the navbar. Either on the left or on the right.
     */
    orientation?: orientation;
    /**
     * Width, number to define navbar width.
     */
    backgroundColor?: navbarBackground;
    /**
     * Justify Content. Used to align itens in navbar.
     */
    justifyContent?: justifyContent;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    render(): any;
}
