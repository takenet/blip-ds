import { EventEmitter } from '../../stencil-public-runtime';
export type avatarSize = 'micro' | 'extra-small' | 'small' | 'standard' | 'large' | 'extra-large';
export type colors = 'colorLetter' | 'system' | 'success' | 'warning' | 'error' | 'info' | 'surface';
export declare class BdsAvatar {
    el: HTMLElement;
    private typoSize?;
    private iconSize?;
    hasThumb: boolean;
    /**
     * Name, Inserted for highlighted osuary name. Enter the full name.
     */
    name?: string;
    /**
     * Thumbnail, Inserted to highlight user image. Url field.
     */
    thumbnail?: string;
    /**
     * Size, Entered as one of the size. Can be one of:
     * 'extra-small', 'small', 'standard', 'large', 'extra-large'.
     */
    size?: avatarSize;
    /**
     * Color, Entered as one of the color. Can be one of:
     * 'system', 'success', 'warning', 'error', 'info'.
     */
    color?: colors;
    /**
     * Upload, Serve to enable upload function on avatar.
     */
    upload?: boolean;
    /**
     * When set to true, allows the avatar to be clicked to select and upload an image.
     */
    openUpload?: boolean;
    /**
     * Ellipses, serves to indicate the user number in the listing.
     */
    ellipsis?: number;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    bdsClickAvatar: EventEmitter;
    bdsImageUpload: EventEmitter;
    private onUploadClick;
    handleOpenUpload: (e: any) => void;
    private onFileInputChange;
    private selectTypoSize;
    private avatarBgColor;
    componentWillRender(): void;
    render(): HTMLElement;
}
