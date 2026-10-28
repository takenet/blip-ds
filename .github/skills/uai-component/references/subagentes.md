# Subagentes paralelos

Dispare os agentes de uma vez, em modo background, logo depois do checkpoint de contrato. Enquanto rodam, o agente principal implementa `tsx`, `scss` e `spec.tsx`.

## Regras comuns (cole em todo prompt)

```text
Repositório: ~/Documents/GitHub/blip-ds, branch atual. Componente: uai-<nome>.
Contrato: .openspec/uai-convergence/openspec/changes/<change>/specs/uai-<nome>/spec.md (leia uma vez).
Referência de estrutura: src/components/<uai-referência>/ (copie o padrão, não redescubra).
Regras: src/pages/uai-foundation/authoring-guide.mdx e AI-INSTRUCTIONS.md.
Edite SOMENTE os arquivos listados abaixo. Não edite src/components.d.ts, readme.md, blip-ds-react/ nem o tsx/scss do componente.
Não rode npm run build, não faça commit e não pergunte nada: se faltar informação, registre a dúvida no relatório final.
Não peça aprovação para editar os arquivos listados.
Relatório final: arquivos alterados, comandos rodados com resultado e dúvidas abertas (máx. 15 linhas).
```

## Agente de testes (`general-purpose`)

```text
Arquivos: src/components/uai-<nome>/test/uai-<nome>.e2e.ts e tests/playwright/visual/uai-<nome>.visual.spec.ts.
Cubra cada Scenario da spec com um teste e2e cujo nome cite o requisito. Inclua: formulário (FormData, reset, fieldset disabled) quando for controle, teclado e foco, eventos uai*, Light/Dark e prefers-reduced-motion: reduce.
O visual segue tests/playwright/visual/<uai-referência>.visual.spec.ts; não gere baselines (o CI gera).
Quando o tsx existir, rode: npm run test:e2e -- -- src/components/uai-<nome>/test/uai-<nome>.e2e.ts
```

## Agente de documentação (`general-purpose`)

```text
Arquivos: src/components/uai-<nome>/uai-<nome>.stories.jsx, uai-<nome>.mdx, code-connect/uai-<nome>.figma.ts e os casos do componente em code-connect/templates.test.mjs.
MDX com as seis seções do modelo (visão geral, playground, estados, comportamento, acessibilidade, migração do bds-*); na seção Comportamento, cite o teste que cobre cada linha.
Todo exemplo é em React (componentes Uai* de blip-ds-react). Logo após o Playground, a seção "Como usar" mostra uma story `Usage` com um caso real controlado por estado e `<Canvas of={...Usage} sourceState="shown" />`; o código copiável vai em `Usage.parameters.docs.source.code` (siga `Usage` de src/components/uai-input/uai-input.stories.jsx).
Exemplos só com tokens e textos em pt-BR revisados (sem valores literais).
Code Connect: url do node do UAI Core <link>, source e component no cabeçalho, como em code-connect/<uai-referência>.figma.ts.
Rode: npm run lint:uai-tokens && node --test code-connect/templates.test.mjs
```

## Agente de deprecação (`general-purpose`, só se existir `bds-*` equivalente)

```text
Arquivos: src/components/<bds>/<bds>.tsx (só a tag @deprecated na classe), <bds>.mdx (aviso no topo), <bds>.stories.jsx (título "Components/[deprecated] <Nome>"), .storybook/preview.js (ordem do storySort), tests/playwright/fixtures/component-registry.ts e specs Playwright do legado (IDs components-deprecated-<nome>--).
Não altere comportamento nem remova props do bds-*. O manifesto MCP marca o legado sozinho a partir do @deprecated.
Rode: npm run test:unit -- -- src/components/<bds>/test
```

## Integração

Quando todos terminarem, o principal lê só os relatórios (não refaz o trabalho), resolve dúvidas e roda a validação do [checklist](./checklist.md#validação-em-ordem-de-custo).
