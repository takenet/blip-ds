# Checklist de arquivos e validação

## Arquivos do componente

| Arquivo | Quem | Observação |
|---|---|---|
| `src/components/uai-<nome>/uai-<nome>.tsx` | principal | JSDoc **o que é · Use · Pair · Avoid** em todo membro público; `@slot` e `@part` na classe; `warnDeprecated`/`warnLegacyValue` de `src/utils/deprecation.ts` |
| `src/components/uai-<nome>/uai-<nome>.scss` | principal | só tokens; mixins de foco e movimento; `control-height/*` para altura |
| `src/components/uai-<nome>/test/uai-<nome>.spec.tsx` | principal | lógica, API, valores legados |
| `src/components/uai-<nome>/test/uai-<nome>.e2e.ts` | testes | um teste por Scenario; reduced-motion |
| `tests/playwright/visual/uai-<nome>.visual.spec.ts` | testes | baselines pelo CI |
| `src/components/uai-<nome>/uai-<nome>.stories.jsx` e `.mdx` | docs | seis seções; exemplos sempre em React, com a story `Usage` em "Como usar" |
| `code-connect/uai-<nome>.figma.ts` e casos em `code-connect/templates.test.mjs` | docs | |
| `bds-*` depreciado, `.storybook/preview.js`, registro Playwright | deprecação | sem mudar comportamento |
| `src/components.d.ts`, `readme.md`, `blip-ds-react/` | build | **gerados**: nunca à mão |

Controle de formulário: `formAssociated: true`, `@AttachInternals()` e `UaiFormControl` (`src/utils/uai-form-control.ts`). Overlay: `UaiOverlay` (`src/utils/uai-overlay.ts`).

## Validação em ordem de custo

Pare no primeiro erro e corrija antes de seguir.

```bash
# 1. Estáticos (segundos)
npm run lint:uai-tokens && npm run docs:check-uai && node --test code-connect/templates.test.mjs

# 2. Unitário do componente (~1 min)
npm run test:unit -- -- src/components/uai-<nome>/test/uai-<nome>.spec.tsx

# 3. E2E do componente (~2 min)
npm run test:e2e -- -- src/components/uai-<nome>/test/uai-<nome>.e2e.ts

# 4. Change (no store)
cd .openspec/uai-convergence && openspec validate <change> --strict --store uai-convergence

# 5. Build e wrappers (avise antes se o Storybook estiver aberto)
npm run build && npm run build:react
```

Se os testes de Stencil falharem por ambiente com o Node atual, rode com Node 22:

```bash
npm exec --yes --package=node@22 -- node node_modules/@stencil/core/bin/stencil test --spec --runInBand 'uai-<nome>/test/.*spec'
```

## Commit

O pre-commit roda `eslint` e **toda** a suíte unitária, e só passa com Node 22:

```bash
npx -y -p node@22 -- git commit -F - <<'EOF'
feat(uai-<nome>): <resumo>

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
EOF
```

Commits separados: `feat(uai-<nome>):` para o componente e `feat(<bds>):` para a deprecação.

## Storybook

Depois de `npm run build`, recarregue as abas abertas (Cmd+Shift+R). Página vazia ou com altura zero após a build é hot reload, não defeito do componente.
