---
name: uai-component
description: 'Cria ou altera um componente uai-* do blip-ds seguindo a change OpenSpec (store uai-convergence), em poucas horas: change enxuta, um checkpoint de contrato, subagentes paralelos (código, testes, docs) e validação em ordem de custo. Use quando: criar componente UAI, migrar bds-* para uai-*, implementar change w1/w2/w3/w4, abrir change OpenSpec de componente, depreciar bds-* por um uai-*.'
argument-hint: 'Nome do componente (ex.: uai-input-phone) e link do Figma UAI Core'
---

# Componente `uai-*` em fluxo rápido

Meta: um componente do pacote em **2–3 horas**, com no máximo **dois** momentos de interação com a pessoa (contrato e aceite visual).

## Antes de começar

- **Store dentro do workspace.** O store OpenSpec fica em `.openspec/uai-convergence` (na raiz do blip-ds), registrado como `--store uai-convergence`. Escreva sempre por esse caminho; nunca por `~/openspec/...`, que fica fora do workspace e volta a pedir aprovação.
- **Nunca commite o store no blip-ds.** `.openspec/` está em `.git/info/exclude` (ADR-009: o store é local e o blip-ds é público). Commits do store, quando pedidos, vão para o Git próprio dele (`git -C .openspec/uai-convergence`).
- **Sessão nova por componente.** Não continue sessões antigas: histórico grande força compactações e releituras.

## Regras de velocidade

- Leia cada arquivo **uma vez** e guarde o que importa em notas da sessão (`files/notas-<componente>.md`). Não releia o componente de referência a cada passo.
- Agrupe leituras e buscas independentes na mesma resposta.
- Componente de referência: copie a estrutura de `uai-input` (campo), `uai-button` (ação) ou `uai-paper` (superfície). Não redescubra padrões.
- Não pergunte sobre escolhas rotineiras. Só pare por decisão de produto que muda o contrato (D-n), escopo ambíguo ou ação externa (push, PR, publicação).
- Rode o teste **do arquivo**, não a suíte (ver [checklist](./references/checklist.md)).
- Não rode `npm run build` com o Storybook aberto sem avisar: a build reescreve o `dist/` e as páginas abertas ficam vazias até recarregar.

## Procedimento

### 1. Contexto (em paralelo, ~15 min)

Numa única resposta, colete:

- `bds-*` equivalente em `src/components/<nome>/`: props, eventos, métodos, slots, parts e testes.
- Figma UAI Core: `get_design_context` e `get_screenshot` do component set (variantes, estados, tokens).
- Componente de referência `uai-*` mais próximo (tsx, scss, stories, mdx, testes).
- Store: `openspec/config.yaml` (regras), a change do componente se existir e a seção do componente em `docs/evidencias/uai-migration-plan.md` (use `grep`, não leia o arquivo inteiro).

### 2. Change OpenSpec enxuta (~20 min)

Se a change não existe, crie com `openspec new change w<onda>-uai-<nome>` dentro do store. Preencha a partir dos [modelos](./assets/change/) **sem duplicar conteúdo**:

| Arquivo | Guarda | Não repete |
|---|---|---|
| `ficha-handoff.md` | fontes, API bds→uai, estados, acessibilidade | mapa de tokens (fica no design) |
| `proposal.md` | por quê, o que muda, fora de escopo, conformidade | tabelas da ficha (só referencia) |
| `design.md` | decisões com origem, mapa medida → token, riscos | requisitos |
| `specs/uai-<nome>/spec.md` | requisitos e cenários WHEN/THEN testáveis | valores visuais (só nome de token) |
| `tasks.md` | lista fixa do modelo, já com repositório e portões | — |

Escreva os cinco arquivos de uma vez e rode `openspec validate <change> --strict --store uai-convergence`.

### 3. Checkpoint de contrato (única pergunta antes do código)

Mostre à pessoa, em uma tabela curta: API final (herdada e extensões), diferenças do `bds-*`, tokens faltantes e decisões D-n abertas. Use `ask_user` com as escolhas. Se não houver decisão aberta, siga sem perguntar.

### 4. Implementação com subagentes paralelos (~60–90 min)

Siga [subagentes](./references/subagentes.md). Resumo:

| Agente | Arquivos exclusivos |
|---|---|
| Principal | `<nome>.tsx`, `<nome>.scss`, `test/<nome>.spec.tsx` |
| Testes | `test/<nome>.e2e.ts`, `tests/playwright/visual/<nome>.visual.spec.ts` |
| Docs | `<nome>.stories.jsx`, `<nome>.mdx`, `code-connect/<nome>.figma.ts`, casos em `code-connect/templates.test.mjs` |
| Deprecação (se houver `bds-*`) | `@deprecated` no `bds-*`, título `[deprecated] …` no story, `.storybook/preview.js`, registro e specs Playwright do legado |

O contrato é a `spec.md` aprovada; todos escrevem contra ela ao mesmo tempo. Nenhum agente edita arquivo de outro nem arquivos gerados.

### 5. Integração e validação (~20 min)

Rode na ordem do [checklist](./references/checklist.md#validação-em-ordem-de-custo) e pare no primeiro erro. Marque as tarefas no `tasks.md` uma única vez, ao final.

### 6. Aceite visual (segunda e última interação)

Abra o Storybook (Light e Dark) ao lado do Figma, gere as capturas e peça o aceite. Só então faça commit (`feat(uai-<nome>):`) com Node 22 (ver checklist). PR só quando a pessoa pedir ou quando o pacote combinado estiver completo.

## Fontes de verdade

- [Guia de autoria](../../../src/pages/uai-foundation/authoring-guide.mdx) e [modelo de documentação](../../../src/pages/uai-foundation/component-doc-template.mdx).
- [AI-INSTRUCTIONS.md](../../../AI-INSTRUCTIONS.md) para as proibições.
- Store: `.openspec/uai-convergence/openspec/config.yaml` e `docs/plano-de-migracao.md` (§4 fluxo, §5 definição de pronto).
