/**
 * Features of the uai-rich-text field. Each one is a boolean prop of the component, off by default: a feature that is
 * off has no toolbar button, no keyboard shortcut and is dropped from the content (when it is pasted or set through
 * `value`), so the HTML a field can produce is only what was turned on. Undo and redo (Ctrl/Cmd + Z) always work; the
 * `history` prop only shows their buttons.
 */
export declare const UAI_RICH_TEXT_FEATURE_GROUPS: ReadonlyArray<ReadonlyArray<UaiRichTextFeature>>;
export type UaiRichTextFeature = 'history' | 'heading' | 'bold' | 'italic' | 'underline' | 'strike' | 'code' | 'textColor' | 'highlight' | 'link' | 'image' | 'table' | 'bulletList' | 'orderedList' | 'blockquote' | 'horizontalRule' | 'textAlign' | 'clearFormatting';
export declare const UAI_RICH_TEXT_FEATURES: readonly UaiRichTextFeature[];
/**
 * Colors offered for text and highlight (uai-rich-text-colors.json). They are content colors written into the edited
 * HTML, which is used outside the design system, so they are plain values (the light theme values of the UAI tokens),
 * not `--uai-*` variables.
 */
export declare const UAI_RICH_TEXT_TEXT_COLORS: ReadonlyArray<{
    label: string;
    value: string;
}>;
export declare const UAI_RICH_TEXT_HIGHLIGHT_COLORS: ReadonlyArray<{
    label: string;
    value: string;
}>;
/** Whether a link or image address is safe to keep: http(s), mailto, tel, or a relative path. Never javascript: or data:. */
export declare const isSafeUrl: (url: string) => boolean;
/** Adds https:// to an address typed without a protocol, such as "blip.ai". */
export declare const normalizeUrl: (url: string) => string;
