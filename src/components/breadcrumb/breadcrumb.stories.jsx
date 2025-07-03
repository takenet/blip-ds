import { useState } from 'react';
import DocumentationTemplate from './breadcrumb.mdx';
import { BdsBreadcrumb } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Breadcrumb',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export const Properties = (args) => {
  return (
    <bds-breadcrumb
      items={args.items}
      editable-current-page={args.editableCurrentPage}
    ></bds-breadcrumb>
  );
};

Properties.argTypes = {
  items: {
    table: {
      defaultValue: { summary: '' },
    },
    description: 'Define the labels and hrefs for the breadcrumb items.',
    control: { type: 'text' },
  },
  editableCurrentPage: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Enable editing of the current page label using bds-input-editable.',
    control: { type: 'boolean' },
  },
};

Properties.args = {
  items: JSON.stringify([
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Current Page' },
  ]),
  editableCurrentPage: false,
};

export const Events = () => {
  const [clickedItem, setClickedItem] = useState(null);
  const [labelChangeEvent, setLabelChangeEvent] = useState(null);

  const handleBreadcrumbClick = (event) => {
    const detail = event.detail;
    setClickedItem(detail);
    console.log('Breadcrumb item clicked:', detail);
  };

  const handleCurrentPageLabelChange = (event) => {
    const detail = event.detail;
    setLabelChangeEvent(detail);
    console.log('Current page label changed:', detail);
  };

  return (
    <div>
      <bds-breadcrumb
        items={JSON.stringify([
          { label: 'Home', href: '/' },
          { label: 'Features', href: '/features' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Documentation' },
        ])}
        editable-current-page={true}
        onBreadcrumbItemClick={(event) => handleBreadcrumbClick(event)}
        onBdsCurrentPageLabelChange={handleCurrentPageLabelChange}
      ></bds-breadcrumb>
      {clickedItem && (
        <div>
          <p>
            You clicked on: <strong>{clickedItem.label}</strong>
            {clickedItem.href && (
              <span>
                {' '}
                (<a href={clickedItem.href}>{clickedItem.href}</a>)
              </span>
            )}
          </p>
        </div>
      )}
      {labelChangeEvent && (
        <div style={{ marginTop: '8px', padding: '8px', backgroundColor: '#f0f8ff', borderRadius: '4px' }}>
          <p>
            <strong>Label changed:</strong> "{labelChangeEvent.oldLabel}" → "{labelChangeEvent.newLabel}"
          </p>
        </div>
      )}
    </div>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsBreadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Documentation' },
      ]}
    />
  );
};

export const EditableCurrentPage = () => {
  const [currentPageLabel, setCurrentPageLabel] = useState('Curso de psicologia');

  const handleCurrentPageLabelChange = (event) => {
    const detail = event.detail;
    setCurrentPageLabel(detail.newLabel);
    console.log('Current page label changed:', detail);
  };

  return (
    <div>
      <bds-breadcrumb
        items={JSON.stringify([
          { label: 'Base de conhecimento', href: '/base-conhecimento' },
          { label: currentPageLabel },
        ])}
        editable-current-page={true}
        onBdsCurrentPageLabelChange={handleCurrentPageLabelChange}
      ></bds-breadcrumb>
      <div style={{ marginTop: '16px', fontSize: '14px', color: '#595959' }}>
        <p>Try editing the current page label by clicking on "Curso de psicologia"</p>
        <p>Current label: <strong>{currentPageLabel}</strong></p>
      </div>
    </div>
  );
};

export const EditableWithLongPath = () => {
  const [currentPageLabel, setCurrentPageLabel] = useState('Detailed Information');

  const handleCurrentPageLabelChange = (event) => {
    const detail = event.detail;
    setCurrentPageLabel(detail.newLabel);
  };

  return (
    <div>
      <bds-breadcrumb
        items={JSON.stringify([
          { label: 'Home', href: '/' },
          { label: 'Features', href: '/features' },
          { label: 'Analytics', href: '/analytics' },
          { label: 'Reports', href: '/reports' },
          { label: 'Dashboard', href: '/dashboard' },
          { label: currentPageLabel },
        ])}
        editable-current-page={true}
        onBdsCurrentPageLabelChange={handleCurrentPageLabelChange}
      ></bds-breadcrumb>
      <div style={{ marginTop: '16px', fontSize: '14px', color: '#595959' }}>
        <p>Current label: <strong>{currentPageLabel}</strong></p>
      </div>
    </div>
  );
};
