import { useState, useRef, useEffect } from 'react';
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
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // keep component defaults unless args explicitly provides a wrapItems value
    el.items = args.items;
    if (args.wrapItems !== undefined) {
      el.wrapItems = args.wrapItems;
    }
  }, [args.items, args.wrapItems]);

  return <bds-breadcrumb ref={ref}></bds-breadcrumb>;
};

Properties.argTypes = {
  items: {
    table: {
      defaultValue: { summary: '' },
    },
    description: 'Define the labels and hrefs for the breadcrumb items.',
    control: { type: 'text' },
  },
  wrapItems: {
    table: {
      defaultValue: { summary: 'true' },
    },
    description: 'Determines if middle items collapse into a dropdown when there are more than 3 breadcrumb items.',
    control: 'boolean',
  },
};

Properties.args = {
  items: JSON.stringify([
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Current Page', href: '/current' },
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
        wrap-items={true}
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
      wrapItems={true}
    />
  );
};
