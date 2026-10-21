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

/**
 * Returns every UAI token: name (uai-surface-paper), cssVar, category (color, dimension, typography),
 * group (surface, spacing, font-weight...), type, description and the light and dark values.
 */
export const uaiTokens = (light, dark) => {
  const darkTokens = new Map(Array.from(walk(dark, []), ([path, token]) => [path.join('.'), token]));
  return Array.from(walk(light, []), ([path, token]) => {
    const name = `uai-${path.slice(1).join('-')}`;
    const darkToken = darkTokens.get(path.join('.'));
    return {
      name,
      cssVar: `--${name}`,
      category: path[0],
      group: path[1],
      type: token.$type,
      description: token.$description || '',
      light: formatValue(token.$type, token.$value),
      dark: darkToken ? formatValue(darkToken.$type, darkToken.$value) : undefined,
    };
  });
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
