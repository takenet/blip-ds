import { UaiIconTheme } from '../../globals/uai-icons';
export type UaiIconSize = 'x-small' | 'small' | 'medium';
export type UaiIconColor = 'content-primary' | 'content-secondary' | 'content-disabled' | 'content-inverse' | 'content-link' | 'feedback-info' | 'feedback-success' | 'feedback-warning' | 'feedback-error';
/**
 * Interface icon from the UAI icon font of blip-tokens. Use it for icons in UAI screens and inside UAI components.
 * Sizes keep the bds-icon names: x-small is 16px, small is 20px and medium (default) is 24px.
 * Without `color`, the icon takes the text color around it, so it matches the label next to it.
 * The app must load the font once: `import 'blip-tokens/uai-icons/css';`.
 */
export declare class UaiIcon {
    /**
     * Icon name, as in the Figma icon library without the theme prefix. For example "info" or "arrow-right".
     */
    name: string;
    /**
     * Icon style: 'outline' (default) or 'solid'.
     */
    theme: UaiIconTheme;
    /**
     * Icon size: 'x-small' (16px), 'small' (20px) or 'medium' (24px, default).
     */
    size: UaiIconSize;
    /**
     * Icon color, as a UAI color token: content-primary, content-secondary, content-disabled, content-inverse, content-link,
     * feedback-info, feedback-success, feedback-warning or feedback-error. Without it, the icon uses the surrounding text color.
     */
    color?: UaiIconColor;
    /**
     * Accessible name. Set it when the icon conveys meaning on its own. Without it, the icon is decorative and hidden from assistive technology.
     */
    ariaLabel: string;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    render(): HTMLElement;
}
