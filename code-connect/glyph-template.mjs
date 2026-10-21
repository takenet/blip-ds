// Builds the Code Connect template of one Figma icon component from code-connect/uai-icon-glyphs.json.
// Each glyph renders <UaiIcon> and exposes its name and theme to the UaiButton and UaiIcon templates.
export const glyphTemplate = (fileKey, nodeId, { name, theme }) =>
  [
    `// url=https://www.figma.com/design/${fileKey}/UAI-Core---Components?node-id=${nodeId.replace(':', '-')}`,
    '// source=src/components/uai-icon/uai-icon.tsx',
    '// component=UaiIcon',
    "import figma from 'figma';",
    '',
    'export default {',
    `  example: figma.code\`<UaiIcon name="${name}"${theme === 'solid' ? ' theme="solid"' : ''} />\`,`,
    `  imports: ['import { UaiIcon } from "blip-ds-react/dist/components"'],`,
    `  id: 'uai-icon-${theme}-${name}',`,
    `  metadata: { nestable: true, props: { name: '${name}', theme: '${theme}' } },`,
    '};',
    '',
  ].join('\n');
