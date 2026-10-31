System.register([],(function(e){"use strict";return{execute:function(){var n=new Set;
/**
             * Emite um aviso no console uma única vez por página, em qualquer ambiente.
             * Use para avisos de configuração; para depreciações, use `warnDeprecated` e `warnLegacyValue`.
             */var t=e("w",(function(e,t,r){var u="".concat(e,":").concat(t);if(n.has(u))return;n.add(u);console.warn("[".concat(e,"] ").concat(r))}))}}}));