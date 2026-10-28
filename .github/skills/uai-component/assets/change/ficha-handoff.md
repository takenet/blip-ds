# Ficha de handoff — `uai-<nome>`

Versão enxuta do modelo `docs/modelos/ficha-handoff-componente.md`. Tokens e animações ficam só no `design.md`.

## 1. Identificação

| Campo | Valor |
|---|---|
| Tipo e onda | Componente · onda <n> |
| Change | `<change>` |
| Status | decisão / pronto para implementação / validação / concluído |

## 2. Fontes

| Fonte | Link ou caminho | O que foi verificado |
|---|---|---|
| UAI Core | `4H8ECPPE83nfyLcIvhz9I5`, node `<id>` | variantes e estados |
| `bds-*` | `src/components/<bds>/` | props, eventos, métodos, slots, parts |
| Template / MFE | | regras de comportamento |
| blip-tokens | versão instalada | tokens disponíveis |

## 3. Convergência

- **Converge sem alteração:**
- **Adaptado para UAI:**
- **Não absorvido e por quê:**
- **Conflitos e decisão (D-n):**

## 4. Contrato visual e tokens

Ver o mapa medida → token e as animações em `design.md`.

## 5. API e migração

| Membro `bds-*` | Membro `uai-*` | Ação | Observação |
|---|---|---|---|
| | | manter / mapear / deprecated / n.a. | |

## 6. Comportamento e estados

| Regra ou estado | Fonte | Cenário (spec) | Teste |
|---|---|---|---|
| | | | spec / e2e |

## 7. Conteúdo e acessibilidade

- **Textos padrão e idiomas:**
- **Nome acessível, semântica e foco:**
- **Não aplicável e por quê:**

## 8. Aceite

- [ ] Code Connect aponta para o `uai-*`.
- [ ] Migração documentada no MDX.
- [ ] Testes cobrem cada regra da seção 6.
- [ ] Aceite visual de Wally.
