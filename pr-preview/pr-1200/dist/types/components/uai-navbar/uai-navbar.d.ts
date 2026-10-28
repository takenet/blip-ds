export type uaiNavbarOrientation = 'horizontal' | 'vertical';
export type uaiNavbarBackground = 'surface-background' | 'surface-contrast' | 'surface-inverse' | 'surface-muted' | 'surface-paper';
export type uaiNavbarJustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
/**
 * Navigation bar container. Set orientation, background and justifyContent; put uai-navbar-content items inside.
 *
 * @slot - Navbar content, usually uai-navbar-content elements.
 */
export declare class UaiNavbar {
    hostElement: HTMLElement;
    /** Navbar orientation: horizontal or vertical. */
    orientation?: uaiNavbarOrientation;
    /** Background surface color. */
    backgroundColor?: uaiNavbarBackground;
    /** Alignment for navbar content. */
    justifyContent?: uaiNavbarJustifyContent;
    /** Attribute used to identify the component in tests. */
    dataTest?: string;
    render(): any;
}
