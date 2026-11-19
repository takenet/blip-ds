/**
 * Emite um aviso no console uma única vez por página, em qualquer ambiente.
 * Use para avisos de configuração; para depreciações, use `warnDeprecated` e `warnLegacyValue`.
 */
export declare const warnOnce: (tag: string, key: string, message: string) => void;
/**
 * Avisa uma única vez por página que uma prop legada está deprecated.
 * `hint` diz o que fazer no lugar; sem ele, o aviso diz que a prop não tem efeito.
 * Só emite em desenvolvimento.
 */
export declare const warnDeprecated: (tag: string, prop: string, hint?: string) => void;
/**
 * Avisa uma única vez por página que um valor legado ou desconhecido caiu no padrão.
 * Só emite em desenvolvimento.
 */
export declare const warnLegacyValue: (tag: string, prop: string, value: unknown, fallback: string) => void;
export declare const resetDeprecationWarnings: () => void;
