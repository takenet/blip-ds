export declare const setTagTransformer: (transformer: (tagName: string) => string) => void;
export declare const transformTag: (tag: string) => string;
export declare const getTagTransformer: () => ((tagName: string) => string) | undefined;
