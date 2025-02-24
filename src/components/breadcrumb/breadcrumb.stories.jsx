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
};

Properties.args = {
  items: JSON.stringify([
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Current Page' },
  ]),
};

export const Events = () => {
  const [clickedItem, setClickedItem] = useState(null);

  const handleBreadcrumbClick = (event) => {
    const detail = event.detail;
    setClickedItem(detail);
    console.log('Breadcrumb item clicked:', detail);
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
        onBreadcrumbItemClick={(event) => handleBreadcrumbClick(event)}
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
