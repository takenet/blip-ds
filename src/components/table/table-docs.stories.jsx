import readme from './readme.md';

export default {
  title: 'Table Live Code',
  parameters: {
    notes: { markdown: readme },
  },
};

export const TableDocs = (args) => {
    const el = document.getElementsByClassName('sb-story');
    if (el.length !== 0) {
      el[0].style.width = '720px';
      el[0].style.height = '500px';
      el[0].style.position = 'relative';
      el[0].style.background = 'none';
    }

  return (
    <bds-data-table
      sorting={args.sorting}
      column={args.column}
      options={args.options}
    ></bds-data-table>
  );
};

TableDocs.argTypes = {
    sorting: {
      table: {
        defaultValue: { summary: 'false' },
      },
      description: 'Configure se as colunas poderam ser ordenadas ao clique no cabeçalho.',
      control: 'boolean',
    },
    column: {
      table: {
        defaultValue: { summary: '' },
      },
      description: 'Insira os valores do cabeçalho e de defina quais os valores da coluna. (Siga o modelo que está aplicado)',
      control: 'text',
    },
    options: {
      table: {
        defaultValue: { summary: '' },
      },
      description: 'Insira os valores do corpo da tabela. (Siga o modelo que está aplicado)',
      control: 'text',
    },
  };
  
  TableDocs.args = {
    sorting: 'true',
    column: '[{"heading": "ID", "value": "id"},{"heading": "Name", "value": "name"},{"heading": "Data do primeiro ticket atendido", "value": "data"},{"heading": "Status", "value": "status"}]',
    options: '[{ "id": "1", "name": "Michael Scott", "avatar":"", "data": "01/01/2022", "status": "ativo" },{ "id": "2", "name" : "Dwight Schrute", "data": "01/01/2022", "status": "ativo" },{ "id": "3", "name" : "Jim Halpert", "avatar":"", "data": "01/01/2022", "status": "ativo" },{ "id": "4", "name" : "Pam Beesly", "avatar":"", "data": "01/01/2022", "status": "inativo"},{ "id": "5", "name" : "Ryan Howard", "avatar":"", "data": "01/01/2022", "status": "inativo" },{ "id": "6", "name" : "Andy Bernard", "avatar":"", "data": "01/01/2022", "status": "ativo"}]',
  };
  