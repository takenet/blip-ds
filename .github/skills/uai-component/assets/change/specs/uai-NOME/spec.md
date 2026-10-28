## ADDED Requirements

<!-- Um requisito por regra verificável. Cada Scenario vira um teste e2e ou spec. Nunca escreva números visuais: só nomes de token. -->

### Requirement: Contrato herdado
O componente MUST usar a tag `uai-<nome>` e aceitar as props, slots e métodos de `<bds-equivalente>` com o mesmo significado. Eventos `bds*` MUST ser emitidos como `uai*` com o mesmo payload.

#### Scenario: Evento renomeado
- **WHEN** o valor muda por interação
- **THEN** o componente emite `uaiChange` com o mesmo payload de `bdsChange`

### Requirement: Props e valores legados
Props legadas MUST continuar aceitas, marcadas como deprecated, com um único aviso no console. Valores legados ou desconhecidos MUST cair no padrão e avisar.

#### Scenario: Valor legado
- **WHEN** o consumidor usa um valor legado
- **THEN** o componente aplica o valor padrão e avisa uma vez no console indicando o substituto

### Requirement: Tamanhos
O componente MUST aceitar `size="short"|"medium"`, com `medium` por padrão, usando `control-height/short` e `control-height/medium`.

#### Scenario: Tamanho padrão
- **WHEN** nenhum `size` é informado
- **THEN** a altura do controle usa `control-height/medium`

### Requirement: Acessibilidade e foco
O componente MUST ter nome acessível, mostrar o anel `border/ring` com foco por teclado e indicar cada estado com um sinal além da cor.

#### Scenario: Foco por teclado
- **WHEN** o componente recebe foco por Tab
- **THEN** o anel `border/ring` aparece e não aparece após clique de mouse

### Requirement: Movimento reduzido
Transições MUST usar tokens de duração e curva e MUST NOT animar com `prefers-reduced-motion: reduce`.

#### Scenario: Movimento reduzido
- **WHEN** a página está com `prefers-reduced-motion: reduce`
- **THEN** as mudanças de estado acontecem sem transição

<!-- Acrescente: formulário (FormData, reset, fieldset disabled, validação), teclado, overlays (Esc, clique fora, retorno de foco), textos padrão pt_BR/en_US/es_ES. -->
