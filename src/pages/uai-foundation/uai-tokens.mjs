// UAI design tokens from the blip-tokens DTCG files, as one flat list.
// Shared by the UAI Foundation docs and by the Storybook MCP manifest (storybook-server/prepare-manifest.mjs).

const hex = (channel) =>
  Math.round(channel * 255)
    .toString(16)
    .padStart(2, '0');

export const formatValue = (type, value) => {
  if (type === 'color') {
    const rgb = `#${value.components.map(hex).join('')}`;
    return value.alpha < 1 ? `${rgb}${hex(value.alpha)}` : rgb;
  }
  if (type === 'dimension') return `${value.value}${value.unit}`;
  return String(value);
};

function* walk(node, path) {
  if (node && typeof node === 'object' && '$value' in node) {
    yield [path, node];
    return;
  }
  for (const [key, child] of Object.entries(node || {})) {
    if (!key.startsWith('$')) yield* walk(child, [...path, key]);
  }
}

const SCALE_TYPES = ['dimension', 'fontWeight'];

// Sizes and weights read from the smallest to the largest; the other tokens keep the blip-tokens order.
const byScale = (a, b) =>
  a.group === b.group && SCALE_TYPES.includes(a.type) && SCALE_TYPES.includes(b.type)
    ? parseFloat(a.light) - parseFloat(b.light)
    : 0;

/**
 * Returns every UAI token: name (uai-surface-paper), cssVar, category (color, dimension, typography),
 * group (surface, spacing, font-weight...), type, description and the light and dark values.
 * `usage` replaces the blip-tokens descriptions (English) with the translated usage text, by token name.
 * Within a group, sizes and weights are sorted from the smallest to the largest.
 */
export const uaiTokens = (light, dark, usage = {}) => {
  const darkTokens = new Map(Array.from(walk(dark, []), ([path, token]) => [path.join('.'), token]));
  const tokens = Array.from(walk(light, []), ([path, token]) => {
    const name = `uai-${path.slice(1).join('-')}`;
    const darkToken = darkTokens.get(path.join('.'));
    return {
      name,
      cssVar: `--${name}`,
      category: path[0],
      group: path[1],
      type: token.$type,
      description: usage[name] || token.$description || '',
      light: formatValue(token.$type, token.$value),
      dark: darkToken ? formatValue(darkToken.$type, darkToken.$value) : undefined,
    };
  });
  return tokens.sort(byScale);
};

/**
 * UaiTypo props for a Figma text style name, such as "heading/lg/semibold" or "body/base/regular-space".
 */
export const textStyleProps = (styleName) => {
  const parts = styleName.split('/');
  const weight = parts.pop();
  const [bold, spacing] = weight.split('-');
  return { variant: parts.join('-'), bold, letterSpacing: spacing === 'space' ? 'expanded' : 'normal' };
};
