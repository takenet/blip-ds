import { Component, Host, Prop, h } from '@stencil/core';

export type UaiSkeletonShape = 'circle' | 'square';

// API default inherited from bds-skeleton (50 pixels). It is the consumer-facing default of a free CSS
// length, not a design value: there is no UAI token for it and consumers set height for the content.
const BDS_DEFAULT_HEIGHT = 50;

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
@Component({
  tag: 'uai-skeleton',
  styleUrl: 'uai-skeleton.scss',
  shadow: true,
})
export class UaiSkeleton {
  /** Corner shape: square (radius/md) or circle (radius/full). Use circle for avatars; pair with equal width and height; avoid other values, which render as square. */
  @Prop() shape?: UaiSkeletonShape = 'square';

  /** Height as any CSS length, applied inline. Defaults to the bds-skeleton height. Use the height of the content being loaded; pair with width; avoid lengths below the minimum size. */
  @Prop() height?: string = `${BDS_DEFAULT_HEIGHT}px`;

  /** Width as any CSS length, applied inline. Use 100% for text lines and fixed sizes for media; pair with height; avoid widths below the minimum size. */
  @Prop() width?: string = '100%';

  /** Test selector on the placeholder surface. Use for automation; pair with semantic queries. Avoid styling by it. */
  @Prop() dataTest?: string = null;

  render() {
    const shape: UaiSkeletonShape = this.shape === 'circle' ? 'circle' : 'square';
    return (
      <Host
        aria-hidden="true"
        class={{ [`uai-skeleton--${shape}`]: true }}
        style={{ width: this.width, height: this.height }}
      >
        <div class="skeleton" part="skeleton" data-test={this.dataTest}>
          <div class="skeleton__shine" part="shine"></div>
        </div>
      </Host>
    );
  }
}
