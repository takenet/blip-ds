import { EventEmitter } from '../../stencil-public-runtime';
import { languages } from './languages';
export declare class BdsUpload {
    private inputElement?;
    private dropArea;
    files: File[];
    haveFiles: boolean;
    hover: boolean;
    background: string;
    size: number[];
    internalAccepts: string[];
    formatError: boolean;
    /**
     * Set the language for fixed texts.
     */
    language?: languages;
    /**
     * Used for add a text on title.
     */
    titleName: string;
    /**
     * Used for add a text on subtitle.
     */
    subtitle: string;
    /**
     * Used for add a error message. In case a verify.
     */
    error: string;
    /**
     * Used to allow upload multiple files.
     */
    multiple: boolean;
    /**
     * Used to accept a especific type of file.
     */
    accept: string;
    /**
     * Used to accept a especific type of file.
     */
    dataAccept: string[] | string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtInputFiles is the data-test to button clear.
     */
    dtInputFiles?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtLabelAddFile is the data-test to button clear.
     */
    dtLabelAddFile?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonDelete is the data-test to button clear.
     */
    dtButtonDelete?: string;
    /**
     * Event emited when delete a item from the list.
     */
    bdsUploadDelete: EventEmitter;
    /**
     * Event emited when change the value of Upload.
     */
    bdsUploadChange: EventEmitter;
    protected dataAcceptChanged(): void;
    protected filesChanged(): void;
    protected formatErrorChanged(value: any): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    validationFiles: (File: File, index: number) => void;
    /**
     * Recive the file data using drag and drop.
     */
    handleDrop: (Event: any) => void;
    /**
     * Verify if allow the state recive one or more items.
     */
    handleFiles: (files: any) => void;
    /**
     * Prevent the screen to reload.
     */
    preventDefaults(e: any): void;
    /**
     * Definy if are hover to aply styles in drop area.
     */
    hoverFile(boolean: any): void;
    /**
     * Recive the file data using click.
     */
    onUploadClick(files: any): boolean;
    /**
     * Return the size information from the file.
     */
    getSize(): void;
    /**
     * Used for delete a item from the list.
     */
    deleteFile(index: any): Promise<void>;
    /**
     * Used for delete a item from the list.
     */
    deleteAllFiles(): Promise<void>;
    private refInputElement;
    private handleKeyDown;
    render(): any;
}
