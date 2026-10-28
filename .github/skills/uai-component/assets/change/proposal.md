## Why

<!-- 2–4 frases: o problema do bds-* atual e o que o UAI Core define. Cite a onda (0–4) e os ADRs aplicados. -->
Onda <n>. ADRs: <ADR-00x>. 

## What Changes

- Criar `uai-<nome>` <form-associated / overlay / superfície>, a partir de `<bds-equivalente>`.
- Preservar a API do `<bds-equivalente>`; eventos `bds*` viram `uai*`. Diferenças e extensões: ficha §5.
- <extensões ou decisões novas, uma por linha>
- Entregar testes, Storybook, Code Connect, wrapper React e deprecação do `<bds-equivalente>`.

Fontes: ficha §2. Fora de escopo: <itens>.

Tokens: lista e mapa em `design.md`. Faltantes: <nenhum | tokens>. Decisões em aberto que bloqueiam: <nenhuma | D-n>.

Conformidade: capabilities `tokens-uai` e `contrato-componentes-uai`. Ficha de handoff: `ficha-handoff.md`.

## Capabilities

### New Capabilities
- `uai-<nome>`: <resumo em uma linha>.

### Modified Capabilities
(nenhuma)

## Impact

- blip-ds: `src/components/uai-<nome>/`, `code-connect/uai-<nome>.figma.ts`, teste visual; gerados pela build (tipos, readme, wrapper React).
- blip-ds: `<bds-equivalente>` marcado como deprecated, sem mudar comportamento.
- Entrega: <PR próprio | PR conjunto do pacote X>, após aceite visual.
