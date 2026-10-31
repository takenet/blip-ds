import React, { useState } from 'react';
import { UaiPagination, UaiThemeProvider } from '../../../blip-ds-react/dist/components';
import DocumentationTemplate from './uai-pagination.mdx';

export default {
  title: 'UAI/Pagination',
  component: UaiPagination,
  tags: ['autodocs'],
  parameters: { docs: { page: DocumentationTemplate } },
  decorators: [
    (Story, context) => (
      <UaiThemeProvider theme={context.globals.hasTheme === 'dark' ? 'dark' : 'light'}>
        <div style={{ minHeight: 'calc(8 * var(--uai-control-height-medium))' }}>
          <Story />
        </div>
      </UaiThemeProvider>
    ),
  ],
};

export const Playground = (args) => <UaiPagination {...args} />;
Playground.args = {
  page: 1,
  pages: 10,
  pageCounter: true,
  language: 'pt_BR',
};
Playground.argTypes = {
  language: { control: 'select', options: ['pt_BR', 'en_US', 'es_MX'] },
};

export const Controlled = () => {
  const [page, setPage] = useState(3);
  return (
    <>
      <UaiPagination page={page} pages={12} pageCounter onUaiPaginationChange={(event) => setPage(event.detail)} />
      <p>Página atual: {page}</p>
    </>
  );
};

export const WithItemsPerPage = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
    <>
      <UaiPagination
        page={page}
        total={248}
        pageSize={pageSize}
        pageSizeOptions={[10, 20, 50]}
        pageCounter
        onUaiPaginationChange={(event) => setPage(event.detail)}
        onUaiPageSizeChange={(event) => setPageSize(event.detail)}
      />
      <p>
        Página {page}, {pageSize} itens por página
      </p>
    </>
  );
};

export const SinglePage = () => <UaiPagination pages={1} pageCounter />;

export const Languages = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--uai-spacing-md)' }}>
    {['pt_BR', 'en_US', 'es_MX'].map((language) => (
      <UaiPagination key={language} language={language} page={2} total={95} pageSize={10} pageSizeOptions={[10, 20]} pageCounter />
    ))}
  </div>
);
