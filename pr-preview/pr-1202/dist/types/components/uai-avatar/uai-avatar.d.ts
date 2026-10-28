export type UaiAvatarSize = 'micro' | 'extra-small' | 'small' | 'standard' | 'large' | 'extra-large';
/**
 * Static user avatar. Pass a remote image URL with `src`, explicit fallback initials with `initials`,
 * and an accessible name with `label`. The consuming application is responsible for uploading images.
 */
export declare class UaiAvatar {
    private imageFailed;
    /**
     * URL of the avatar image. The consuming application handles file selection and upload.
     */
    src?: string;
    /**
     * Explicit one- or two-character fallback shown when the image is absent or fails to load.
     */
    initials?: string;
    /**
     * Accessible name for the avatar. Without a label, the avatar is hidden from assistive technology.
     */
    label?: string;
    /**
     * Avatar diameter: micro (`sizing/lg`), extra-small (`sizing/xl`), small (`sizing/2xl`), standard (`sizing/3xl`), large (`sizing/4xl`), or extra-large (`sizing/5xl`).
     */
    size: UaiAvatarSize;
    /**
     * Value placed on the avatar host for automated tests.
     */
    dataTest?: string;
    protected resetImageError(): void;
    render(): HTMLElement;
}
