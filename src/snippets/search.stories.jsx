import React from 'react';

export default {
  title: 'Snippets/Search',
};

export const BasicSearch = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '500px';
  }
  return <bds-input icon="search" placeholder="Procurar"></bds-input>;
};

export const SearchWithButton = (args) => {
    const el = document.getElementsByClassName('sb-story');
    if (el.length !== 0) {
      el[0].style.width = '500px';
    }
    return (
        <bds-grid gap="1">
            <bds-input icon="search" placeholder="Serviços blip"></bds-input>
            <bds-button>Procurar</bds-button>
        </bds-grid>
    );
  };

export const SearchWithOptions = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '500px';
  }
  return (
    <bds-autocomplete icon="search" placeholder="Procurar pessoas">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-autocomplete>
  );
};
