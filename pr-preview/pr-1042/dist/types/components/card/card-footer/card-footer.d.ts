import { ComponentInterface } from '../../../stencil-public-runtime';
export type justifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
export declare class CardFooter implements ComponentInterface {
    /**
     * Prop for internal elements alignment. Will follow the same values of css.
     */
    align?: justifyContent;
    render(): any;
}
