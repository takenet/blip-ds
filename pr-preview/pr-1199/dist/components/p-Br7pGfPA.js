import './index.js';

const warnings = new Set();
/**
 * Emite um aviso no console uma única vez por página, em qualquer ambiente.
 * Use para avisos de configuração; para depreciações, use `warnDeprecated` e `warnLegacyValue`.
 */
const warnOnce = (tag, key, message) => {
    const id = `${tag}:${key}`;
    if (warnings.has(id))
        return;
    warnings.add(id);
    console.warn(`[${tag}] ${message}`);
};

export { warnOnce as w };
//# sourceMappingURL=p-Br7pGfPA.js.map

//# sourceMappingURL=p-Br7pGfPA.js.map