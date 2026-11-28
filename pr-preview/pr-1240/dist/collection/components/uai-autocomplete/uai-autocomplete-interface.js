const TERMS = {
    pt_BR: {
        selected: (count) => `${count} selecionados`,
        allSelected: 'Selecionar todos',
        loading: 'Carregando…',
        empty: 'Nenhum resultado',
        clear: 'Limpar',
        required: 'Selecione uma opção.',
    },
    en_US: {
        selected: (count) => `${count} selected`,
        allSelected: 'Select all',
        loading: 'Loading…',
        empty: 'No results',
        clear: 'Clear',
        required: 'Select an option.',
    },
    es_ES: {
        selected: (count) => `${count} seleccionados`,
        allSelected: 'Seleccionar todos',
        loading: 'Cargando…',
        empty: 'Sin resultados',
        clear: 'Limpiar',
        required: 'Seleccione una opción.',
    },
};
export const autocompleteTerms = (language) => TERMS[language];
/** Text without accents and in lower case, so "São" matches "sao". */
export const normalize = (text) => String(text !== null && text !== void 0 ? text : '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
