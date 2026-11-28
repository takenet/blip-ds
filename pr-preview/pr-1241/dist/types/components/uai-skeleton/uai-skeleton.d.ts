export type UaiSkeletonShape = 'circle' | 'square';
/**
 * Placeholder shape shown while content loads. Use one per element that is still loading, sized like the
 * final content; pair with a container that has role="status" and aria-busy="true"; avoid it for loading
 * that has no layout to anticipate (use a spinner) and avoid nesting interactive content inside it.
 *
 * The host is aria-hidden: the skeleton is decorative and the loading state is announced by its container.
 *
 * @part skeleton - The placeholder surface.
 * @part shine - The moving shine band. Hidden with prefers-reduced-motion: reduce.
 */
export declare class UaiSkeleton {
    /** Corner shape: square (radius/md) or circle (radius/full). Use circle for avatars; pair with equal width and height; avoid other values, which render as square. */
    shape?: UaiSkeletonShape;
    /** Height as any CSS length, applied inline. Defaults to the bds-skeleton height. Use the height of the content being loaded; pair with width; avoid lengths below the minimum size. */
    height?: string;
    /** Width as any CSS length, applied inline. Use 100% for text lines and fixed sizes for media; pair with height; avoid widths below the minimum size. */
    width?: string;
    /** Test selector on the placeholder surface. Use for automation; pair with semantic queries. Avoid styling by it. */
    dataTest?: string;
    render(): any;
}
