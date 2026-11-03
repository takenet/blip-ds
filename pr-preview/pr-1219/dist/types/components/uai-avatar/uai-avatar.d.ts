import { EventEmitter } from '../../stencil-public-runtime';
export type UaiAvatarSize = 'micro' | 'extra-small' | 'small' | 'standard' | 'large' | 'extra-large';
export type UaiAvatarColor = 'colorLetter' | 'system' | 'success' | 'warning' | 'error' | 'info' | 'surface';
/**
 * Avatar of a person: photo, initials of the name or a generic icon. Same contract as bds-avatar with UAI tokens.
 * Give the full name in `name`: it builds the initials and the accessible name. Use it in lists, profiles and
 * headers. Pair with the person's name nearby when the avatar is small. Avoid it as a generic button; use `upload`
 * or `openUpload` only when the avatar itself changes the photo. Wrap the app in UaiThemeProvider.
 *
 * @part avatar - The circle with the photo, initials, icon or counter.
 */
export declare class UaiAvatar {
    el: HTMLElement;
    private imageFailed;
    private fileInput?;
    /**
     * Full name of the person. Builds the initials (first letter of the first and the last name) and the accessible
     * name.
     */
    name?: string;
    /**
     * URL of the photo. Without it, or if it fails to load, the initials are shown.
     */
    thumbnail?: string;
    /**
     * Avatar size. Can be one of: 'micro', 'extra-small', 'small', 'standard' (default), 'large', 'extra-large'.
     */
    size?: UaiAvatarSize;
    /**
     * Background behind the initials. Can be one of: 'colorLetter' (default, picked by the first letter of the name),
     * 'system', 'success', 'warning', 'error', 'info', 'surface' (neutral).
     */
    color?: UaiAvatarColor;
    /**
     * If true, shows the upload icon on hover and focus. The click only emits uaiClickAvatar; the app opens its own
     * picker.
     */
    upload?: boolean;
    /**
     * If true, activating the avatar opens the image picker, shows the chosen image and emits uaiImageUpload.
     */
    openUpload?: boolean;
    /**
     * Number of hidden people, shown as "+N" (for example in a group of avatars).
     */
    ellipsis?: number;
    /**
     * Data test id, set on the host.
     */
    dataTest?: string;
    /**
     * @deprecated Use thumbnail.
     */
    src?: string;
    /**
     * @deprecated Use name. It builds the initials and the accessible name.
     */
    label?: string;
    /**
     * @deprecated The initials come from name. Without name, at most two characters are shown.
     */
    initials?: string;
    /**
     * Emitted when the avatar is clicked, or activated with Enter or Space when it is interactive.
     */
    uaiClickAvatar: EventEmitter<PointerEvent | KeyboardEvent>;
    /**
     * Emitted with the chosen image as a data URL, when openUpload is true.
     */
    uaiImageUpload: EventEmitter<string>;
    protected resetImageError(): void;
    componentWillLoad(): void;
    private get sizeValue();
    private get personName();
    private get image();
    private get interactive();
    private get text();
    private resolvedColor;
    private activate;
    private onClick;
    private onKeyDown;
    private onFileChange;
    private renderContent;
    render(): HTMLElement;
}
