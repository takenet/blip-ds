## 1. Contrato (store)

- [ ] 1.1 Preencher `ficha-handoff.md` e `design.md` a partir do UAI Core, do `<bds-equivalente>` e das evidências.
- [ ] 1.2 Validar `openspec validate <change> --strict --store uai-convergence`.
- [ ] 1.3 Checkpoint de contrato com Wally (só se houver D-n, token faltante ou diferença de API).

## 2. Implementação (blip-ds, branch `feat/uai-<nome>` ou do pacote combinado)

- [ ] 2.1 Componente `tsx` e `scss` com tokens, tamanhos, estados, foco, forced-colors e reduced-motion.
- [ ] 2.2 Contrato herdado, eventos `uai*`, avisos com `warnDeprecated`/`warnLegacyValue`, JSDoc completo.
- [ ] 2.3 Deprecar `<bds-equivalente>` sem alterar comportamento (JSDoc, MDX, story `[deprecated]`, registro Playwright).

## 3. Testes (blip-ds)

- [ ] 3.1 Spec unitário: API, valores legados, tamanhos, estados e acessibilidade.
- [ ] 3.2 E2E: um teste por Scenario, incluindo teclado, eventos e `prefers-reduced-motion: reduce`.
- [ ] 3.3 Teste visual Playwright (baselines gerados pelo CI).

## 4. Documentação e integração (blip-ds)

- [ ] 4.1 Stories e MDX com as seis seções do modelo.
- [ ] 4.2 Code Connect e casos em `code-connect/templates.test.mjs`.
- [ ] 4.3 Build: tipos, readme, wrapper React e manifesto MCP gerados.

## 5. Portões

- [ ] 5.1 P1: `npm run lint:uai-tokens` verde, sem token faltante.
- [ ] 5.2 P2: props e estados do UAI Core mapeados no Code Connect.
- [ ] 5.3 P3: Storybook Light/Dark comparado ao UAI Core e aceite visual de Wally antes do commit.
- [ ] 5.4 P4: testes unitários e e2e do componente verdes.
- [ ] 5.5 P5: textos de exemplo revisados pelas regras Content UAI em pt-BR.
- [ ] 5.6 `npm run docs:check-uai` verde.
- [ ] 5.7 Commit `feat(uai-<nome>):` e integração no PR combinado.
