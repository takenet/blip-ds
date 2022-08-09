import React from 'react';
import readme from './readme.md';

export default {
  title: 'Table',
  parameters: {
    notes: { markdown: readme },
  },
};

export const Table = () => {
  return (
    <bds-table
      avatar="true"
      column='[
      {"heading": "ID", "value": "id"},
      {"heading": "Name", "value": "name", "img" : "thumb"},
      {"heading": "Default", "value": "default"},
      {"heading": "Status", "value": "status"}
      ]'
      options='[
        { "id": "1", "name": "Michael Scott", "thumb":"", "default": "default 3", "status": "ativo" },
        { "id": "2", "name" : "Dwight Schrute", "default": "default 2", "status": "ativo" },
        { "id": "3", "name" : "Jim Halpert", "thumb":"", "default": "default 6", "status": "ativo" },
        { "id": "4", "name" : "Pam Beesly", "thumb":"", "default": "default 5", "status": "desativado" },
        { "id": "5", "name" : "Ryan Howard", "thumb":"", "default": "default 1", "status": "desativado" },
        { "id": "6", "name" : "Andy Bernard", "thumb":"", "default": "default 9", "status": "ativo" }
      ]'
    ></bds-table>
  );
};

export const TableSorting = () => {
  return (
    <bds-table
      sorting="true"
      avatar="true"
      column='[
      {"heading": "ID", "value": "id"},
      {"heading": "Name", "value": "name", "img" : "thumb"},
      {"heading": "Default", "value": "default"},
      {"heading": "Status", "value": "status"}
      ]'
      options='[
        { "id": "1", "name": "Michael Scott", "thumb":"", "default": "default 3", "status": "ativo" },
        { "id": "2", "name" : "Dwight Schrute", "default": "default 2", "status": "ativo" },
        { "id": "3", "name" : "Jim Halpert", "thumb":"", "default": "default 6", "status": "ativo" },
        { "id": "4", "name" : "Pam Beesly", "thumb":"", "default": "default 5", "status": "desativado" },
        { "id": "5", "name" : "Ryan Howard", "thumb":"", "default": "default 1", "status": "desativado" },
        { "id": "6", "name" : "Andy Bernard", "thumb":"", "default": "default 9", "status": "ativo" }
      ]'
    ></bds-table>
  );
};
