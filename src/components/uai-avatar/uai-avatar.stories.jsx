import React, { useState } from 'react';
import { UaiAvatar, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-avatar.mdx';

export default {
  title: 'UAI/Avatar',
  component: UaiAvatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <Story />
      </UaiThemeProvider>
    ),
  ],
};

const photo = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces';
// `.invalid` never resolves, so the image always fails and the avatar falls back to the initials.
const brokenPhoto = 'https://example.invalid/avatar.png';
const sizes = ['micro', 'extra-small', 'small', 'standard', 'large', 'extra-large'];
const colors = ['colorLetter', 'system', 'success', 'warning', 'error', 'info', 'surface'];

const row = { display: 'flex', flexWrap: 'wrap', alignItems: 'end', gap: 'var(--uai-spacing-lg)' };
const column = { display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' };
const item = { display: 'grid', justifyItems: 'center', gap: 'var(--uai-spacing-xs)' };
const caption = {
  fontFamily: 'monospace',
  fontSize: 'var(--uai-caption-font-size)',
  color: 'var(--uai-content-secondary)',
};

const Labeled = ({ label, children }) => (
  <div style={item}>
    {children}
    <span style={caption}>{label}</span>
  </div>
);

/**
 * Teste todas as propriedades.
 */
export const Playground = (args) => <UaiAvatar {...args} />;

Playground.args = {
  name: 'Alex Brown',
  thumbnail: '',
  size: 'standard',
  color: 'colorLetter',
  upload: false,
  openUpload: false,
  ellipsis: null,
  dataTest: '',
};

Playground.argTypes = {
  name: {
    description:
      'Nome da pessoa. As iniciais são a primeira letra do primeiro e do último nome, e o nome também é o nome acessível do avatar.',
    control: 'text',
  },
  thumbnail: {
    description: 'URL da imagem. Se a imagem não carregar, o avatar mostra as iniciais do `name`.',
    control: 'text',
  },
  size: {
    table: { defaultValue: { summary: 'standard' } },
    description: 'Diâmetro do avatar, de `sizing/lg` (`micro`) a `sizing/5xl` (`extra-large`).',
    options: sizes,
    control: { type: 'select' },
  },
  color: {
    table: { defaultValue: { summary: 'colorLetter' } },
    description:
      'Fundo das iniciais. `colorLetter` escolhe a cor pela inicial do nome; `surface` é o fundo neutro do UAI Core.',
    options: colors,
    control: { type: 'select' },
  },
  upload: {
    description: 'Mostra o ícone de upload no hover e no foco. O clique só emite `uaiClickAvatar`.',
    control: 'boolean',
  },
  openUpload: {
    description:
      'Abre o seletor de imagem ao ativar o avatar. A imagem escolhida vira a `thumbnail` e é emitida em `uaiImageUpload`.',
    control: 'boolean',
  },
  ellipsis: {
    description: 'Mostra `+N` no lugar da imagem ou das iniciais, como contador de um grupo.',
    control: 'number',
  },
  dataTest: { description: 'Valor de `data-test` no avatar, para testes automatizados.', control: 'text' },
  src: {
    table: { category: 'deprecated' },
    description: 'Deprecated: use `thumbnail`.',
    control: false,
  },
  label: {
    table: { category: 'deprecated' },
    description: 'Deprecated: use `name`.',
    control: false,
  },
  initials: {
    table: { category: 'deprecated' },
    description: 'Deprecated: as iniciais vêm do `name`. Sem `name`, usa no máximo 2 caracteres.',
    control: false,
  },
};

const usageSource = `import React, { useState } from 'react';
import { UaiAvatar, UaiThemeProvider } from 'blip-ds-react/dist/components';
import 'blip-tokens/uai-icons/css';

export function ProfileHeader() {
  const [photo, setPhoto] = useState('${photo}');

  return (
    <UaiThemeProvider theme="light">
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-md)' }}>
        <UaiAvatar
          name="Alex Brown"
          thumbnail={photo}
          size="large"
          openUpload
          onUaiImageUpload={(event) => setPhoto(event.detail)}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-2xs)' }}>
          <strong>Alex Brown</strong>
          <span>Clique na foto para trocar a imagem.</span>
        </div>
      </div>
    </UaiThemeProvider>
  );
}`;

/**
 * Cabeçalho de perfil. Ativar o avatar abre o seletor de imagem; a imagem escolhida chega em `onUaiImageUpload`
 * como data URL e atualiza o estado.
 */
export const Usage = () => {
  const [image, setImage] = useState(photo);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-md)' }}>
      <UaiAvatar
        name="Alex Brown"
        thumbnail={image}
        size="large"
        openUpload
        onUaiImageUpload={(event) => setImage(event.detail)}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-2xs)' }}>
        <strong>Alex Brown</strong>
        <span style={caption}>Clique na foto para trocar a imagem.</span>
      </div>
    </div>
  );
};

Usage.parameters = {
  docs: { source: { code: usageSource, language: 'jsx' } },
};

/**
 * Os seis tamanhos, com iniciais e com imagem. Nomes longos continuam com duas iniciais dentro do círculo.
 */
export const Sizes = () => (
  <div style={column}>
    <div style={row}>
      {sizes.map((size) => (
        <Labeled key={size} label={size}>
          <UaiAvatar size={size} name="Maria Eduarda dos Santos Albuquerque" />
        </Labeled>
      ))}
    </div>
    <div style={row}>
      {sizes.map((size) => (
        <Labeled key={size} label={size}>
          <UaiAvatar size={size} name="Alex Brown" thumbnail={photo} />
        </Labeled>
      ))}
    </div>
  </div>
);

/**
 * Todas as cores, incluindo `surface`, o fundo neutro do UAI Core. Com `colorLetter` (padrão), a cor vem da inicial
 * do nome.
 */
export const Colors = () => (
  <div style={column}>
    <div style={row}>
      {colors.map((color) => (
        <Labeled key={color} label={color}>
          <UaiAvatar color={color} name="Alex Brown" />
        </Labeled>
      ))}
    </div>
    <div style={caption}>colorLetter</div>
    <div style={row}>
      {['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Diego Rocha', 'Elisa Moura'].map((name) => (
        <Labeled key={name} label={name}>
          <UaiAvatar name={name} />
        </Labeled>
      ))}
    </div>
  </div>
);

/**
 * Imagem carregada, imagem com erro (cai para as iniciais), só o nome e nem nome nem imagem (ícone de usuário).
 */
export const ImageFallback = () => (
  <div style={row}>
    <Labeled label="thumbnail">
      <UaiAvatar name="Alex Brown" thumbnail={photo} />
    </Labeled>
    <Labeled label="thumbnail com erro">
      <UaiAvatar name="Alex Brown" thumbnail={brokenPhoto} />
    </Labeled>
    <Labeled label="só name">
      <UaiAvatar name="Alex Brown" />
    </Labeled>
    <Labeled label="sem name e sem thumbnail">
      <UaiAvatar />
    </Labeled>
  </div>
);

/**
 * `upload` mostra o ícone de upload no hover e no foco e só emite o clique. `openUpload` abre o seletor de imagem e
 * troca a imagem.
 */
export const Upload = () => {
  const [clicks, setClicks] = useState(0);
  const [uploaded, setUploaded] = useState(false);

  return (
    <div style={row}>
      <Labeled label={`upload · cliques: ${clicks}`}>
        <UaiAvatar
          name="Alex Brown"
          thumbnail={photo}
          upload
          onUaiClickAvatar={() => setClicks((count) => count + 1)}
        />
      </Labeled>
      <Labeled label={uploaded ? 'openUpload · imagem trocada' : 'openUpload'}>
        <UaiAvatar name="Bruno Lima" openUpload onUaiImageUpload={() => setUploaded(true)} />
      </Labeled>
    </div>
  );
};

/**
 * Contador `+N` no fim de um grupo de avatares. O `name` dá o nome acessível ao contador.
 */
export const Ellipsis = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-xs)' }}>
    <UaiAvatar size="small" name="Alex Brown" thumbnail={photo} />
    <UaiAvatar size="small" name="Bruno Lima" />
    <UaiAvatar size="small" name="Carla Dias" />
    <UaiAvatar size="small" name="Mais 5 pessoas" color="surface" ellipsis={5} />
  </div>
);

/**
 * Sem `name`, o avatar é decorativo: use quando o texto ao lado já identifica a pessoa.
 */
export const Decorative = () => (
  <div style={column}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-sm)' }}>
      <UaiAvatar size="small" thumbnail={photo} />
      <span>Alex Brown</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-sm)' }}>
      <UaiAvatar size="small" />
      <span>Pessoa sem foto</span>
    </div>
  </div>
);
