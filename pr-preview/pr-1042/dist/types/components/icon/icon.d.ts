import { IconSize, IconTheme, IconType } from './icon-interface';
export declare class Icon {
    private io?;
    el: HTMLElement;
    private svgContent?;
    private isVisible;
    /**
     * Specifies the color to use.Specifies a color to use. The default is svg.
     */
    color?: string;
    /**
     * Specifies the label to use for accessibility. Defaults to the icon name.
     */
    ariaLabel: string;
    /**
     * Specifies whether the icon should horizontally flip when `dir` is `"rtl"`.
     */
    flipRtl?: boolean;
    /**
     * Specifies which icon to use from the built-in set of icons.
     */
    name?: string;
    /**
     * Specifies the exact `src` of an SVG file to use.
     */
    src?: string;
    /**
     * A combination of both `name` and `src`. If a `src` url is detected
     * it will set the `src` property. Otherwise it assumes it's a built-in named
     * SVG and set the `name` property.
     */
    icon?: any;
    /**
     * Icon size. Entered as one of the icon size design tokens. Can be one of:
     * "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "brand".
     */
    size?: IconSize;
    /**
     * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
     * Default, `false`.
     */
    lazy: boolean;
    /**
     * Specifies the theme to use outline or solid icons. Defaults to outline.
     */
    theme: IconTheme;
    /**
     * Specifies the type of icon. If type is set to emoji, it will be able to set only emoji names on the name property.
     */
    type: IconType;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private waitUntilVisible;
    loadIcon(): void;
    setSvgContent: () => void;
    render(): HTMLElement;
}
