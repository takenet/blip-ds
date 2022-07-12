import React from 'react';
import readme from './readme.md';

export default {
  title: 'Pagination',
  parameters: {
    notes: { markdown: readme },
  },
};

export const PaginationDefault = () => {
  return (
    <bds-pagination pages="30"></bds-pagination>
  );
};

export const PaginationStartedPage = () => {
    return (
      <bds-pagination started-page="20" pages="30"></bds-pagination>
    );
  };

