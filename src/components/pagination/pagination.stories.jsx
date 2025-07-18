import React from 'react';
import DocumentationTemplate from './pagination.mdx';
import { BdsPagination } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Pagination',
  parameters: {
    docs: {
      page: DocumentationTemplate,
      source: {
        state: 'open',
      },
    },
  },
};

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.height = '280px';
  }
  return (
    <bds-pagination pages={args.pages} started-Page={args.startedPage}></bds-pagination>
  );
};

Properties.args = {
  pages: 10,
  startedPage: 1,
};

Properties.argTypes = {
  pages: {
    table: {
      defaultValue: { summary: '10' },
    },
    control: 'number',
  },
  startedPage: {
    table: {
      defaultValue: { summary: '1' },
    },
    control: 'number',
  },
}

// Comprehensive examples showing all pagination states in one story
export const AllStates = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      
      {/* Basic Examples */}
      <section>
        <h2>Basic Examples</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3>Basic Pagination (Pages Only)</h3>
            <bds-pagination pages="5" started-page="1"></bds-pagination>
          </div>
          <div>
            <h3>Pagination with Items Per Page</h3>
            <bds-pagination 
              number-items="100" 
              items-page="[5, 10, 20, 50]" 
              started-page="1" 
              page-counter="true">
            </bds-pagination>
          </div>
        </div>
      </section>

      {/* Page Counter States */}
      <section>
        <h2>Page Counter States</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3>With Page Counter</h3>
            <bds-pagination 
              number-items="150" 
              items-page="[10, 25, 50]" 
              started-page="1" 
              page-counter="true">
            </bds-pagination>
          </div>
          <div>
            <h3>Without Page Counter</h3>
            <bds-pagination 
              number-items="150" 
              items-page="[10, 25, 50]" 
              started-page="1" 
              page-counter="false">
            </bds-pagination>
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section>
        <h2>Language Support</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3>Portuguese (pt_BR)</h3>
            <bds-pagination 
              number-items="75" 
              items-page="[5, 10, 25]" 
              started-page="1" 
              page-counter="true"
              language="pt_BR">
            </bds-pagination>
          </div>
          <div>
            <h3>English (en_US)</h3>
            <bds-pagination 
              number-items="75" 
              items-page="[5, 10, 25]" 
              started-page="1" 
              page-counter="true"
              language="en_US">
            </bds-pagination>
          </div>
          <div>
            <h3>Spanish (es_MX)</h3>
            <bds-pagination 
              number-items="75" 
              items-page="[5, 10, 25]" 
              started-page="1" 
              page-counter="true"
              language="es_MX">
            </bds-pagination>
          </div>
        </div>
      </section>

      {/* Page Count Variations */}
      <section>
        <h2>Page Count Variations</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3>Single Page</h3>
            <bds-pagination 
              number-items="5" 
              items-page="[10, 20, 50]" 
              started-page="1" 
              page-counter="true">
            </bds-pagination>
          </div>
          <div>
            <h3>Few Pages (3 pages)</h3>
            <bds-pagination 
              number-items="25" 
              items-page="[10, 20, 50]" 
              started-page="2" 
              page-counter="true">
            </bds-pagination>
          </div>
          <div>
            <h3>Many Pages (50 pages)</h3>
            <bds-pagination 
              number-items="1000" 
              items-page="[20, 50, 100]" 
              started-page="25" 
              page-counter="true">
            </bds-pagination>
          </div>
        </div>
      </section>

      {/* Starting Page Variations */}
      <section>
        <h2>Starting Page Variations</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3>Starting at First Page</h3>
            <bds-pagination 
              number-items="100" 
              items-page="[10, 20, 30]" 
              started-page="1" 
              page-counter="true">
            </bds-pagination>
          </div>
          <div>
            <h3>Starting at Middle Page</h3>
            <bds-pagination 
              number-items="100" 
              items-page="[10, 20, 30]" 
              started-page="5" 
              page-counter="true">
            </bds-pagination>
          </div>
          <div>
            <h3>Starting at Last Page</h3>
            <bds-pagination 
              number-items="100" 
              items-page="[10, 20, 30]" 
              started-page="10" 
              page-counter="true">
            </bds-pagination>
          </div>
        </div>
      </section>

      {/* Items Per Page Variations */}
      <section>
        <h2>Items Per Page Variations</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3>Small Dataset Options</h3>
            <bds-pagination 
              number-items="50" 
              items-page="[5, 10, 25]" 
              started-page="1" 
              page-counter="true">
            </bds-pagination>
          </div>
          <div>
            <h3>Medium Dataset Options</h3>
            <bds-pagination 
              number-items="500" 
              items-page="[10, 25, 50, 100]" 
              started-page="1" 
              page-counter="true">
            </bds-pagination>
          </div>
          <div>
            <h3>Large Dataset Options</h3>
            <bds-pagination 
              number-items="10000" 
              items-page="[25, 50, 100, 200, 500]" 
              started-page="1" 
              page-counter="true">
            </bds-pagination>
          </div>
        </div>
      </section>

      {/* Options Position States */}
      <section>
        <h2>Options Position States</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          <div>
            <h3>Options Position: Auto (Default)</h3>
            <bds-pagination 
              number-items="100" 
              items-page="[10, 20, 50]" 
              started-page="1" 
              page-counter="true"
              options-position="auto">
            </bds-pagination>
          </div>
          <div>
            <h3>Options Position: Top</h3>
            <bds-pagination 
              number-items="100" 
              items-page="[10, 20, 50]" 
              started-page="1" 
              page-counter="true"
              options-position="top">
            </bds-pagination>
          </div>
          <div>
            <h3>Options Position: Bottom</h3>
            <bds-pagination 
              number-items="100" 
              items-page="[10, 20, 50]" 
              started-page="1" 
              page-counter="true"
              options-position="bottom">
            </bds-pagination>
          </div>
        </div>
      </section>

      {/* Responsive Behavior */}
      <section>
        <h2>Responsive Behavior</h2>
        <div>
          <h3>Responsive Behavior Demo</h3>
          <p>Resize the browser window to see how the pagination adapts:</p>
          <ul>
            <li><strong>Desktop (&gt;905px):</strong> Items per page section visible</li>
            <li><strong>Tablet (600px-905px):</strong> Items per page section hidden</li>
            <li><strong>Mobile (&lt;600px):</strong> Full responsive behavior</li>
          </ul>
          <bds-pagination 
            number-items="200" 
            items-page="[10, 25, 50, 100]" 
            started-page="1" 
            page-counter="true">
          </bds-pagination>
        </div>
      </section>

    </div>
  );
};

AllStates.parameters = {
  docs: {
    source: {
      state: 'open',
    },
  },
};

export const FrameworkReact = () => {
    return (
      <BdsPagination started-page="20" pages="30"></BdsPagination>
    );
  };

