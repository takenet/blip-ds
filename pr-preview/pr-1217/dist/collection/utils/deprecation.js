import { Build } from "@stencil/core";
const warnings = new Set();
/**
 * Emite um aviso no console uma única vez por página, em qualquer ambiente.
 * Use para avisos de configuração; para depreciações, use `warnDeprecated` e `warnLegacyValue`.
 */
export const warnOnce = (tag, key, message) => {
    const id = `${tag}:${key}`;
    if (warnings.has(id))
        return;
    warnings.add(id);
    console.warn(`[${tag}] ${message}`);
};
/**
 * Avisa uma única vez por página que uma prop legada está deprecated.
 * `hint` diz o que fazer no lugar; sem ele, o aviso diz que a prop não tem efeito.
 * Só emite em desenvolvimento.
 */
export const warnDeprecated = (tag, prop, hint) => {
    if (!Build.isDev)
        return;
    warnOnce(tag, `deprecated:${prop}`, `"${prop}" is deprecated. ${hint || 'It has no effect.'}`);
};
/**
 * Avisa uma única vez por página que um valor legado ou desconhecido caiu no padrão.
 * Só emite em desenvolvimento.
 */
export const warnLegacyValue = (tag, prop, value, fallback) => {
    if (!Build.isDev)
        return;
    warnOnce(tag, `value:${prop}:${String(value)}`, `Unsupported ${prop} "${String(value)}". Using "${fallback}".`);
};
export const resetDeprecationWarnings = () => warnings.clear();
