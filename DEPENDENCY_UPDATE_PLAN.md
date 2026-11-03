# Plano de Atualização de Dependências - Blip Design System

## Análise Completa das Dependências

Análise realizada em: $(date +%Y-%m-%d)
Projeto: blip-ds v2.0.0-rc

---

## 📊 Resumo Executivo

### Dependências Principais Desatualizadas

| Dependência | Versão Atual | Versão Latest | Tipo | Risco |
|-------------|--------------|---------------|------|-------|
| **React** | 18.3.1 | 19.2.0 | Major | ⚠️ Alto |
| **React DOM** | 18.3.1 | 19.2.0 | Major | ⚠️ Alto |
| **Jest** | 29.7.0 | 30.2.0 | Major | ⚠️ Médio |
| **StencilJS Core** | 4.35.1 | 4.38.0 | Minor | ✅ Baixo |
| **Storybook** | 9.0.15 | 9.1.10 | Minor | ✅ Baixo |
| **TypeScript** | 5.8.3 | 5.9.3 | Minor | ✅ Baixo |
| **ESLint** | 9.30.1 | 9.36.0 | Minor | ✅ Baixo |
| **Puppeteer** | 24.11.2 | 24.23.0 | Minor | ✅ Baixo |

---

## 🔍 Análise Detalhada por Dependência

### 1. React & React DOM (18.3.1 → 19.2.0) ⚠️ ALTO RISCO

**Tipo de Atualização:** Major (18 → 19)  
**Risco:** Alto  
**Prioridade:** Média

#### Breaking Changes Identificados:

1. **Remoção de APIs Deprecadas:**
   - `ReactDOM.render()` → `ReactDOM.createRoot()`
   - `ReactDOM.hydrate()` → `ReactDOM.hydrateRoot()`
   - `ReactDOM.unmountComponentAtNode()` → `root.unmount()`
   - String refs removidas (use ref callbacks)
   - Legacy context removido (`contextTypes`, `getChildContext`)
   - Module pattern factories removidos
   - `react-test-renderer/shallow` removido

2. **Mudanças em TypeScript:**
   - `useRef()` agora requer um argumento
   - Ref callbacks não podem ter retorno implícito
   - Types para `element.props` mudaram

3. **Mudanças em Testes:**
   - `act` deve ser importado de `react` ao invés de `react-dom/test-utils`

#### Ferramentas de Migração Disponíveis:

```bash
# Migração automática para React 19
npx codemod@latest react/19/migration-recipe

# Migração específica para TypeScript
npx types-react-codemod@latest preset-19 ./src
```

#### Avaliação de Compatibilidade:

**Stencil + React 19:**
- ✅ Stencil 4.35+ é compatível com React 18
- ⚠️ Necessário verificar compatibilidade com React 19
- ⚠️ O wrapper React (`blip-ds-react`) pode precisar de ajustes

**Recomendação:** 
- **NÃO ATUALIZAR AGORA** - Aguardar:
  1. Confirmação oficial de compatibilidade do Stencil com React 19
  2. Estabilização do React 19 no ecossistema
  3. Testes extensivos em ambiente de desenvolvimento

#### Plano de Ação:
- [ ] Criar branch de teste para React 19
- [ ] Executar codemods
- [ ] Testar todos os componentes
- [ ] Validar wrapper React
- [ ] Atualizar documentação
- [ ] Executar testes E2E completos

---

### 2. Jest (29.7.0 → 30.2.0) ⚠️ MÉDIO RISCO

**Tipo de Atualização:** Major (29 → 30)  
**Risco:** Médio  
**Prioridade:** Alta (Stencil 4.35+ recomenda Jest 29+)

#### Breaking Changes Identificados:

1. **Matchers Renomeados:**
```javascript
// Antigo (Jest 29) → Novo (Jest 30)
toBeCalled() → toHaveBeenCalled()
toBeCalledTimes(n) → toHaveBeenCalledTimes(n)
toBeCalledWith(arg) → toHaveBeenCalledWith(arg)
lastCalledWith(arg) → toHaveBeenLastCalledWith(arg)
nthCalledWith(n, arg) → toHaveBeenNthCalledWith(n, arg)
toReturn() → toHaveReturned()
toReturnTimes(n) → toHaveReturnedTimes(n)
toReturnWith(val) → toHaveReturnedWith(val)
lastReturnedWith(val) → toHaveLastReturnedWith(val)
nthReturnedWith(n, val) → toHaveNthReturnedWith(n, val)
toThrowError(message) → toThrow(message)
```

2. **API Renomeada:**
```javascript
// Antigo
jest.genMockFromModule('fs')

// Novo
jest.createMockFromModule('fs')
```

3. **CLI Flags Renomeados:**
```bash
# Antigo
jest --testPathPattern="unit/.*"

# Novo
jest --testPathPatterns="unit/.*"
```

4. **jest --init removido:**
```bash
# Use agora:
npm init jest@latest
```

#### Compatibilidade:
- ✅ Stencil 4.38.0 suporta Jest 29 e Jest 30
- ✅ Projeto atual usa Jest 29.7.0

#### Ferramentas de Migração:
```bash
# Codemods para migração
npx jest-codemods
```

#### Plano de Ação:
- [ ] Atualizar Jest para 30.2.0
- [ ] Atualizar @types/jest para 30.x
- [ ] Buscar e substituir matchers deprecados em todos os testes
- [ ] Atualizar scripts de CI/CD com novos flags
- [ ] Executar suite completa de testes
- [ ] Verificar configuração do jest.setup.ts

**Recomendação:** ✅ **ATUALIZAR** - Prioridade Alta

---

### 3. StencilJS Core (4.35.1 → 4.38.0) ✅ BAIXO RISCO

**Tipo de Atualização:** Minor  
**Risco:** Baixo  
**Prioridade:** Alta

#### Melhorias na v4.38.0:
- Suporte melhorado para Jest 29/30
- Correções de bugs
- Melhorias de performance
- Sem breaking changes conhecidos

#### Plano de Ação:
- [ ] Atualizar @stencil/core para 4.38.0
- [ ] Atualizar @stencil/sass para 3.2.2
- [ ] Atualizar @stencil/react-output-target para 1.2.0
- [ ] Rebuild do projeto
- [ ] Executar testes unitários e E2E
- [ ] Rebuild do wrapper React

**Recomendação:** ✅ **ATUALIZAR** - Prioridade Alta

---

### 4. Storybook (9.0.15 → 9.1.10) ✅ BAIXO RISCO

**Tipo de Atualização:** Minor  
**Risco:** Baixo  
**Prioridade:** Média

#### Mudanças na v9.1.x:
- Melhorias de performance
- Correções de bugs
- Atualizações de addons
- Sem breaking changes

#### Dependências do Storybook para Atualizar:
```json
{
  "@storybook/addon-docs": "9.0.15 → 9.1.10",
  "@storybook/addon-links": "9.0.15 → 9.1.10",
  "@storybook/react-webpack5": "9.0.13 → 9.1.10",
  "eslint-plugin-storybook": "9.0.15 → 9.1.10",
  "storybook": "9.0.15 → 9.1.10"
}
```

#### Plano de Ação:
- [ ] Atualizar todas as dependências do Storybook para 9.1.10
- [ ] Testar Storybook local (`npm run storybook`)
- [ ] Build do Storybook estático
- [ ] Verificar documentação MDX
- [ ] Validar addons e plugins

**Recomendação:** ✅ **ATUALIZAR** - Prioridade Média

---

### 5. TypeScript (5.8.3 → 5.9.3) ✅ BAIXO RISCO

**Tipo de Atualização:** Minor  
**Risco:** Baixo  
**Prioridade:** Média

#### Mudanças:
- Melhorias no compilador
- Novos recursos de linguagem
- Correções de bugs
- Possíveis novos erros de tipo detectados

#### Plano de Ação:
- [ ] Atualizar TypeScript para 5.9.3
- [ ] Executar type checking (`tsc --noEmit`)
- [ ] Corrigir novos erros de tipo identificados
- [ ] Rebuild completo

**Recomendação:** ✅ **ATUALIZAR** - Prioridade Média

---

### 6. ESLint (9.30.1 → 9.36.0) ✅ BAIXO RISCO

**Tipo de Atualização:** Minor  
**Risco:** Baixo  
**Prioridade:** Baixa

#### Dependências ESLint para Atualizar:
```json
{
  "eslint": "9.30.1 → 9.36.0",
  "@typescript-eslint/eslint-plugin": "8.35.1 → 8.45.0",
  "@typescript-eslint/parser": "8.35.1 → 8.45.0",
  "eslint-config-prettier": "10.1.5 → 10.1.8",
  "eslint-plugin-prettier": "5.5.1 → 5.5.4"
}
```

#### Plano de Ação:
- [ ] Atualizar ESLint e plugins
- [ ] Executar linting (`npm run eslint`)
- [ ] Corrigir novos avisos/erros
- [ ] Verificar configuração do eslint.config.js

**Recomendação:** ✅ **ATUALIZAR** - Prioridade Baixa

---

### 7. Puppeteer (24.11.2 → 24.23.0) ✅ BAIXO RISCO

**Tipo de Atualização:** Minor  
**Risco:** Baixo  
**Prioridade:** Baixa

#### Mudanças:
- Atualizações do Chrome DevTools Protocol
- Correções de bugs
- Melhorias de estabilidade

#### Plano de Ação:
- [ ] Atualizar Puppeteer para 24.23.0
- [ ] Executar testes E2E
- [ ] Verificar screenshots

**Recomendação:** ✅ **ATUALIZAR** - Prioridade Baixa

---

### 8. Outras Dependências Menores ✅ BAIXO RISCO

#### Para Atualizar:
```json
{
  "@babel/core": "7.28.0 → 7.28.4",
  "@babel/preset-env": "7.28.0 → 7.28.3",
  "blip-tokens": "1.94.0 → 1.94.1",
  "color": "5.0.0 → 5.0.2",
  "concurrently": "9.2.0 → 9.2.1",
  "copy-webpack-plugin": "13.0.0 → 13.0.1",
  "cz-customizable": "7.4.0 → 7.5.1",
  "semantic-release": "24.2.6 → 24.2.9",
  "types-ramda": "0.30.1 → 0.31.0"
}
```

**Recomendação:** ✅ **ATUALIZAR EM LOTE** - Prioridade Baixa

---

## 📋 Estratégia de Implementação Recomendada

### Fase 1: Atualizações Seguras (Semana 1) ✅

**Objetivo:** Atualizar dependências de baixo risco

1. **StencilJS Ecosystem**
   ```bash
   npm install --save-dev @stencil/core@^4.38.0
   npm install --save-dev @stencil/sass@^3.2.2
   npm install --save-dev @stencil/react-output-target@^1.2.0
   ```

2. **TypeScript**
   ```bash
   npm install --save-dev typescript@^5.9.3
   ```

3. **Dependências Menores**
   ```bash
   npm install --save blip-tokens@^1.94.1
   npm install --save-dev @babel/core@^7.28.4 @babel/preset-env@^7.28.3
   npm install --save-dev color@^5.0.2 concurrently@^9.2.1
   npm install --save-dev copy-webpack-plugin@^13.0.1
   npm install --save-dev cz-customizable@^7.5.1
   npm install --save-dev semantic-release@^24.2.9
   npm install --save-dev types-ramda@^0.31.0
   ```

4. **Validação**
   ```bash
   npm run build
   npm run test
   npm run storybook:build
   ```

### Fase 2: Atualização do Jest (Semana 2) ⚠️

**Objetivo:** Migrar para Jest 30

1. **Backup dos Testes**
   ```bash
   git checkout -b update/jest-30
   ```

2. **Atualização**
   ```bash
   npm install --save-dev jest@^30.2.0 jest-cli@^30.2.0
   npm install --save-dev @types/jest@^30.0.0
   ```

3. **Migração de Código**
   ```bash
   # Buscar e substituir matchers antigos
   find src -name "*.spec.ts" -o -name "*.e2e.ts" | xargs sed -i 's/toBeCalled()/toHaveBeenCalled()/g'
   find src -name "*.spec.ts" -o -name "*.e2e.ts" | xargs sed -i 's/toBeCalledTimes(/toHaveBeenCalledTimes(/g'
   find src -name "*.spec.ts" -o -name "*.e2e.ts" | xargs sed -i 's/toBeCalledWith(/toHaveBeenCalledWith(/g'
   find src -name "*.spec.ts" -o -name "*.e2e.ts" | xargs sed -i 's/lastCalledWith(/toHaveBeenLastCalledWith(/g'
   find src -name "*.spec.ts" -o -name "*.e2e.ts" | xargs sed -i 's/nthCalledWith(/toHaveBeenNthCalledWith(/g'
   find src -name "*.spec.ts" -o -name "*.e2e.ts" | xargs sed -i 's/toReturn()/toHaveReturned()/g'
   find src -name "*.spec.ts" -o -name "*.e2e.ts" | xargs sed -i 's/toReturnTimes(/toHaveReturnedTimes(/g'
   find src -name "*.spec.ts" -o -name "*.e2e.ts" | xargs sed -i 's/toReturnWith(/toHaveReturnedWith(/g'
   find src -name "*.spec.ts" -o -name "*.e2e.ts" | xargs sed -i 's/lastReturnedWith(/toHaveLastReturnedWith(/g'
   find src -name "*.spec.ts" -o -name "*.e2e.ts" | xargs sed -i 's/nthReturnedWith(/toHaveNthReturnedWith(/g'
   find src -name "*.spec.ts" -o -name "*.e2e.ts" | xargs sed -i 's/toThrowError(/toThrow(/g'
   find src -name "*.spec.ts" -o -name "*.e2e.ts" | xargs sed -i 's/jest\.genMockFromModule(/jest.createMockFromModule(/g'
   ```

4. **Validação**
   ```bash
   npm run test
   ```

5. **Ajustes Manuais**
   - Revisar falhas de teste
   - Atualizar scripts de CI/CD
   - Atualizar documentação de testes

### Fase 3: Atualização do Storybook (Semana 2-3) ✅

**Objetivo:** Atualizar Storybook para 9.1.10

1. **Atualização**
   ```bash
   npm install --save @storybook/addon-docs@^9.1.10
   npm install --save-dev @storybook/addon-links@^9.1.10
   npm install --save-dev @storybook/react-webpack5@^9.1.10
   npm install --save-dev eslint-plugin-storybook@^9.1.10
   npm install --save-dev storybook@^9.1.10
   ```

2. **Validação**
   ```bash
   npm run storybook
   npm run storybook:build
   ```

### Fase 4: Atualização do ESLint e Puppeteer (Semana 3) ✅

**Objetivo:** Completar atualizações menores

1. **ESLint**
   ```bash
   npm install --save-dev eslint@^9.36.0
   npm install --save-dev @typescript-eslint/eslint-plugin@^8.45.0
   npm install --save-dev @typescript-eslint/parser@^8.45.0
   npm install --save-dev eslint-config-prettier@^10.1.8
   npm install --save-dev eslint-plugin-prettier@^5.5.4
   ```

2. **Puppeteer**
   ```bash
   npm install --save-dev puppeteer@^24.23.0
   ```

3. **Validação**
   ```bash
   npm run eslint
   npm run test:e2e
   ```

### Fase 5: Avaliação do React 19 (Semana 4+) ⚠️

**Objetivo:** SOMENTE AVALIAR - NÃO IMPLEMENTAR

1. **Criar Branch de Teste**
   ```bash
   git checkout -b experiment/react-19
   ```

2. **Instalação Experimental**
   ```bash
   npm install react@^19.2.0 react-dom@^19.2.0
   npm install --save-dev @types/react@^19.2.0 @types/react-dom@^19.2.0
   ```

3. **Executar Codemods**
   ```bash
   npx codemod@latest react/19/migration-recipe
   npx types-react-codemod@latest preset-19 ./src
   ```

4. **Testes Extensivos**
   ```bash
   npm run build
   npm run build:react
   npm run test
   npm run storybook
   ```

5. **Documentar Resultados**
   - Listar breaking changes encontrados
   - Avaliar esforço de migração
   - Verificar compatibilidade com Stencil
   - **NÃO FAZER MERGE** até confirmação de estabilidade

---

## ⚠️ Riscos e Mitigações

### Risco 1: Quebra de Componentes com React 19
**Probabilidade:** Alta  
**Impacto:** Alto  
**Mitigação:**
- Não atualizar React 19 em produção
- Manter branch experimental
- Aguardar adoção pela comunidade
- Monitorar compatibilidade do Stencil

### Risco 2: Testes Quebrados com Jest 30
**Probabilidade:** Média  
**Impacto:** Médio  
**Mitigação:**
- Executar migração incremental
- Testar cada componente individualmente
- Manter cobertura de testes
- Revisar CI/CD

### Risco 3: Problemas de Build com Atualizações
**Probabilidade:** Baixa  
**Impacto:** Médio  
**Mitigação:**
- Testar build após cada fase
- Manter backups de package-lock.json
- Documentar configurações customizadas

---

## 📊 Checklist de Validação

### Após Cada Fase:

- [ ] Build bem-sucedido (`npm run build`)
- [ ] Build do React wrapper bem-sucedido (`npm run build:react`)
- [ ] Testes unitários passando (`npm run test:unit`)
- [ ] Testes E2E passando (`npm run test:e2e`)
- [ ] Storybook funcionando (`npm run storybook`)
- [ ] Storybook build funcionando (`npm run storybook:build`)
- [ ] ESLint sem erros (`npm run eslint`)
- [ ] TypeScript sem erros (`tsc --noEmit`)
- [ ] Documentação atualizada
- [ ] CHANGELOG.md atualizado
- [ ] CI/CD passando

---

## 🎯 Conclusão e Recomendações

### Atualizações Recomendadas AGORA:
1. ✅ StencilJS Core 4.35.1 → 4.38.0
2. ✅ Storybook 9.0.15 → 9.1.10
3. ✅ TypeScript 5.8.3 → 5.9.3
4. ✅ Jest 29.7.0 → 30.2.0
5. ✅ ESLint 9.30.1 → 9.36.0
6. ✅ Puppeteer 24.11.2 → 24.23.0
7. ✅ Dependências menores (patches)

### Atualizações NÃO Recomendadas AGORA:
1. ❌ React 18.3.1 → 19.2.0
2. ❌ React DOM 18.3.1 → 19.2.0
3. ❌ @types/react 18.3.x → 19.x
4. ❌ @types/react-dom 18.3.x → 19.x

**Motivo:** Aguardar estabilização do ecossistema e confirmação de compatibilidade com Stencil.

### Timeline Estimado:
- **Fase 1 (Seguras):** 2-3 dias
- **Fase 2 (Jest 30):** 3-5 dias
- **Fase 3 (Storybook):** 2-3 dias
- **Fase 4 (ESLint/Puppeteer):** 1-2 dias
- **Total:** 2-3 semanas

### Próximos Passos:
1. Revisar e aprovar este plano
2. Criar issues no GitHub para cada fase
3. Executar Fase 1 imediatamente
4. Agendar revisões após cada fase
5. Manter branch experimental para React 19

---

**Documento gerado automaticamente através de análise Context7 e npm outdated**
