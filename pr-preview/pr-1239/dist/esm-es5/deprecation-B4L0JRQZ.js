var warnings=new Set;
/**
 * Emite um aviso no console uma única vez por página, em qualquer ambiente.
 * Use para avisos de configuração; para depreciações, use `warnDeprecated` e `warnLegacyValue`.
 */var warnOnce=function(n,r,a){var e="".concat(n,":").concat(r);if(warnings.has(e))return;warnings.add(e);console.warn("[".concat(n,"] ").concat(a))};export{warnOnce as w};