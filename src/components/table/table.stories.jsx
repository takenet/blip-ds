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
      {"heading": "Data do primeiro ticket atendido", "value": "default"},
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
      {"heading": "Data do primeiro ticket atendido", "value": "default"},
      {"heading": "Status", "value": "status"}
      ]'
      options='[
        { "id": "1", "name": "Michael Scott", "avatar":"", "default": "01/01/2022", "status": "ativo" },
      { "id": "2", "name" : "Dwight Schrute", "default": "01/01/2022", "status": "ativo" },
      { "id": "3", "name" : "Jim Halpert", "avatar":"", "default": "01/01/2022", "status": "ativo" },
      { "id": "4", "name" : "Pam Beesly", "avatar":"", "default": "01/01/2022", "status": "inativo"},
      { "id": "5", "name" : "Ryan Howard", "avatar":"", "default": "01/01/2022", "status": "inativo" },
      { "id": "6", "name" : "Andy Bernard", "avatar":"", "default": "01/01/2022", "status": "ativo"}
      ]'
    ></bds-table>
  );
};

export const TableChips = () => {
  return (
    <bds-table
    sorting="true"
    avatar="true"
    chips="true"
    action-area="true"
    column='[
    {"heading": "ID", "value": "id"},
    {"heading": "Name", "value": "name", "img" : "avatar"},
    {"heading": "Data do primeiro ticket atendido", "value": "default"},
    {"heading": "Status", "value": "status", "chips" : "color"}
    ]'
    options='[
      { "id": "1", "name": "Michael Scott", "avatar":"", "default": "01/01/2022", "status": "ativo", "color": "success" },
      { "id": "2", "name" : "Dwight Schrute", "default": "01/01/2022", "status": "ativo", "color": "success" },
      { "id": "3", "name" : "Jim Halpert", "avatar":"", "default": "01/01/2022", "status": "ativo", "color": "success" },
      { "id": "4", "name" : "Pam Beesly", "avatar":"", "default": "01/01/2022", "status": "inativo", "color": "disabled"},
      { "id": "5", "name" : "Ryan Howard", "avatar":"", "default": "01/01/2022", "status": "inativo", "color": "disabled" },
      { "id": "6", "name" : "Andy Bernard", "avatar":"", "default": "01/01/2022", "status": "ativo", "color": "success"}
    ]'
  >
  </bds-table>
  );
};

export const TableActionButtons = () => {
  return (
    <bds-table
      sorting="true"
      avatar="true"
      chips="true"
      action-area="true"
      column='[
      {"heading": "ID", "value": "id"},
      {"heading": "Name", "value": "name", "img" : "avatar"},
      {"heading": "Data do primeiro ticket atendido", "value": "default"},
      {"heading": "Status", "value": "status", "chips" : "color"},
      {"heading": "Ações", "editAction": "edit-button", "deleteAction": "delete-button", "customAction" : "dot-button"}
      ]'
      options='[
        { "id": "1", "name": "Michael Scott", "avatar":"", "default": "01/01/2022", "status": "ativo", "color": "success", "edit-button": "edit", "delete-button": "trash", "dot-button": "more-options-horizontal" },
        { "id": "2", "name" : "Dwight Schrute", "default": "01/01/2022", "status": "ativo", "color": "success", "edit-button": "edit", "delete-button": "trash", "dot-button": "more-options-horizontal"  },
        { "id": "3", "name" : "Jim Halpert", "avatar":"", "default": "01/01/2022", "status": "ativo", "color": "success", "edit-button": "edit", "delete-button": "trash", "dot-button": "more-options-horizontal" },
        { "id": "4", "name" : "Pam Beesly", "avatar":"", "default": "01/01/2022", "status": "inativo", "color": "disabled", "edit-button": "edit", "delete-button": "trash", "dot-button": "more-options-horizontal" },
        { "id": "5", "name" : "Ryan Howard", "avatar":"", "default": "01/01/2022", "status": "inativo", "color": "disabled","edit-button": "edit", "delete-button": "trash", "dot-button": "more-options-horizontal"  },
        { "id": "6", "name" : "Andy Bernard", "avatar":"", "default": "01/01/2022", "status": "ativo", "color": "success", "edit-button": "edit", "delete-button": "trash", "dot-button": "more-options-horizontal"  }
      ]'
    >
    </bds-table>
  );
};

