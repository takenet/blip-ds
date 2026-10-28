# AI-INSTRUCTIONS — blip-ds (UAI)

Instruções para agentes de IA que montam telas ou alteram componentes com o blip-ds. Leia antes de gerar código.

## O que é

O blip-ds é a biblioteca de Web Components do Blip, feita com StencilJS. Os componentes `uai-*` são a v2, baseada nos tokens UAI do pacote `blip-tokens`. Os `bds-*` são o legado: continuam no pacote e nunca são removidos.

## Componentes disponíveis

Use estes componentes, nesta ordem de preferência: `uai-*`, depois `bds-*` apenas quando não existe `uai-*` equivalente.

| Componente | Use para | Pair | Avoid |
| --- | --- | --- | --- |
| `uai-theme-provider` | Declarar o tema (`light` ou `dark`) e os tokens, uma vez na raiz do app | Qualquer tela com `uai-*` | Aninhar vários providers sem necessidade |
| `uai-button` | Disparar uma ação (`solid`, `outline`, `text`) | `uai-icon` por `iconLeft` e `iconRight` | `variant` legado (`primary`, `secondary`, `delete`…); botão só com ícone sem `aria-label` |
| `uai-icon` | Ícone da fonte UAI | Botões, navbar | Nomes que não existem na fonte UAI |
| `uai-typo` | Texto com tipografia do sistema | Qualquer conteúdo | Definir `font-size` ou `font-family` à mão |
| `uai-avatar` | Pessoa ou entidade, em seis tamanhos | Listas, navbar | Tamanhos fora da escala |
| `uai-navbar` e `uai-navbar-content` | Navegação | `uai-icon`, `uai-avatar` | Recriar a navegação com `div` |

A lista cresce por onda. Consulte o Storybook (`UAI/*`) para o estado atual.

## Tokens

- Todo valor de design vem de token: cor, tamanho, espaço, raio, sombra, tipografia, duração e curva. As variáveis CSS têm o prefixo `--uai-`.
- Escolha pelo papel do elemento, não pelo valor: `surface-paper` para o fundo de um card, `content-secondary` para texto de apoio, `feedback-error` para erro.
- Ordem de escolha: componente → token semântico → fundação. Não crie alias duplicado.
- Altura de controle usa `control-height/*`. Escalas: `compact`, `short`, `medium` (padrão) e `large`.
- Se nenhum token serve, pare e peça ao time de design. Não use um valor fixo.

## Como montar uma tela

1. Envolva a tela em `UaiThemeProvider`.
2. Carregue a fonte Figtree e o CSS dos ícones (`blip-tokens/uai-icons/css`) uma vez no app.
3. Use componentes `uai-*` com as props e os eventos documentados. No React, importe de `blip-ds-react/dist/components` (`UaiButton`, `onUaiClick`). Em HTML, use a tag e o evento (`<uai-button>`, `uaiClick`).
4. Espaçamento e layout com tokens `spacing-*`.

## Nunca faça

- **Nunca** sobrescreva `::part`, variáveis CSS internas, nem acesse `shadowRoot` de um componente do blip-ds.
- **Nunca** use cor, tamanho, raio, sombra, duração ou fonte literais (`#fff`, `16px`, `0.15s`, `Arial`).
- **Nunca** estilize componentes com `!important` ou seletores que dependam da estrutura interna.
- **Nunca** edite à mão os arquivos gerados: `src/components.d.ts`, os `readme.md` dos componentes e `blip-ds-react/`. Rode `npm run build` e `npm run build:react`.
- **Nunca** remova um `bds-*` nem uma prop legada. Marque como deprecated e avise.
- **Nunca** use valores legados de props (`variant="primary"`). Eles caem no padrão e geram aviso.
- **Nunca** crie um botão só com ícone sem nome acessível (`aria-label`).
- **Nunca** use só a cor para indicar um estado.
- **Nunca** invente duração de animação. Use tokens e respeite `prefers-reduced-motion`.
- **Nunca** use `uai-input` para texto multilinha. Use `uai-textarea`.

## Ao criar ou alterar um componente `uai-*`

Use a skill [`uai-component`](.github/skills/uai-component/SKILL.md) para o fluxo completo (change OpenSpec, subagentes em paralelo, validação e commit). Siga o [guia de autoria](src/pages/uai-foundation/authoring-guide.mdx) e o [modelo de documentação](src/pages/uai-foundation/component-doc-template.mdx). Em resumo:

- Mesmos nomes de props, valores, slots e métodos do `bds-*`; eventos `bds*` viram `uai*`.
- JSDoc em todo membro público, no formato **o que é · Use · Pair · Avoid**.
- Storybook com visão geral, playground, estados, comportamento, acessibilidade e migração.
- Testes unitários e e2e na pasta `test` do componente. Rode `npm run test -- -- <pasta-do-componente>`.
- Uma branch por componente (`feat/uai-<componente>`) e Conventional Commits com escopo (`feat(uai-input):`).
