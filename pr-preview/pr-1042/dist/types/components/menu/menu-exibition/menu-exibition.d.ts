export type avatarSize = 'extra-small' | 'small' | 'standard';
export declare class BdsMenuExibition {
    /**
     * AvatarName. Used to enter the avatar name.
     */
    avatarName?: string;
    /**
     * AvatarThumbnail. Used to insert the avatar photo.
     */
    avatarThumbnail?: string;
    /**
     * AvatarSize. Used to set avatar size.
     */
    avatarSize?: avatarSize;
    /**
     * Value. Used to insert a title in the display item.
     */
    value?: string;
    /**
     * Subtitle. Used to insert a subtitle in the display item.
     */
    subtitle?: string;
    /**
     * Description. Used to insert a subtitle in the display item.
     */
    description?: string;
    /**
     * Disabled. Used to declare that the item will be disabled.
     */
    disabled?: boolean;
    render(): any;
}
