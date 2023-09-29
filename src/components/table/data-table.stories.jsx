import React from 'react';
import { BdsDataTable } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './data-table.mdx';

export default {
  title: 'Components/Data Table',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '600px';
  }
  return (
    <bds-data-table
      sorting={args.sorting}
      column={args.column}
      options={args.options}
    ></bds-data-table>
  );
};

Properties.args = {
  sorting: 'true',
  column: '[{"heading": "ID", "value": "id"},{"heading": "Name", "value": "name"},{"heading": "Data do primeiro ticket atendido", "value": "data"},{"heading": "Status", "value": "status"}]',
  options: '[{ "id": "1", "name": "Michael Scott", "avatar":"", "data": "01/01/2022", "status": "ativo" },{ "id": "2", "name" : "Dwight Schrute", "data": "01/01/2022", "status": "ativo" },{ "id": "3", "name" : "Jim Halpert", "avatar":"", "data": "01/01/2022", "status": "ativo" },{ "id": "4", "name" : "Pam Beesly", "avatar":"", "data": "01/01/2022", "status": "inativo"},{ "id": "5", "name" : "Ryan Howard", "avatar":"", "data": "01/01/2022", "status": "inativo" },{ "id": "6", "name" : "Andy Bernard", "avatar":"", "data": "01/01/2022", "status": "ativo"}]',
};

export const FrameworkReact = () => {
  return (
    <BdsDataTable
      sorting="true"
      column='[
      {"heading": "ID", "value": "id"},
      {"heading": "Name", "value": "name"},
      {"heading": "Data do primeiro ticket atendido", "value": "data"},
      {"heading": "Status", "value": "status"}
      ]'
      options='[
        { "id": "1", "name": "Michael Scott", "avatar":"", "data": "01/01/2022", "status": "ativo" },
      { "id": "2", "name" : "Dwight Schrute", "data": "01/01/2022", "status": "ativo" },
      { "id": "3", "name" : "Jim Halpert", "avatar":"", "data": "01/01/2022", "status": "ativo" },
      { "id": "4", "name" : "Pam Beesly", "avatar":"", "data": "01/01/2022", "status": "inativo"},
      { "id": "5", "name" : "Ryan Howard", "avatar":"", "data": "01/01/2022", "status": "inativo" },
      { "id": "6", "name" : "Andy Bernard", "avatar":"", "data": "01/01/2022", "status": "ativo"}
      ]'
    ></BdsDataTable>
  );
};
