import './index-gowA9FoV.js';

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
//# sourceMappingURL=deprecation-0THdFSRq.js.map

//# sourceMappingURL=deprecation-0THdFSRq.js.map