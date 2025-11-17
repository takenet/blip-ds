import React, { useState, useEffect } from 'react';
import DocumentationTemplate from './search-anywhere.mdx';
import { BdsSearchAnywhere, BdsTypo, BdsGrid } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/SearchAnywhere',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

// Sample data for demonstrations
const sampleOptions = [
  {
    value: '1',
    title: 'Dashboard',
    description: 'View your analytics and key metrics',
    icon: 'analytics',
    url: '#dashboard',
  },
  {
    value: '2',
    title: 'Settings',
    description: 'Configure your application preferences',
    icon: 'builder-variable',
    url: '#settings',
  },
  {
    value: '3',
    title: 'Users',
    description: 'Manage user accounts and permissions',
    icon: 'contact',
    url: '#users',
  },
  {
    value: '4',
    title: 'Messages',
    description: 'View and send messages',
    icon: 'message-ballon',
    url: '#messages',
  },
  {
    value: '5',
    title: 'Analytics',
    description: 'Deep dive into your data',
    icon: 'analytics',
    url: '#analytics',
  },
  {
    value: '6',
    title: 'Billing',
    description: 'Manage payments and subscriptions',
    icon: 'dolar',
    url: '#billing',
  },
  {
    value: '7',
    title: 'Help Center',
    description: 'Get support and documentation',
    icon: 'question',
    url: '#help',
  },
  {
    value: '8',
    title: 'Notifications',
    description: 'Configure notification settings',
    icon: 'message-ballon',
    url: '#notifications',
  },
];

// Storybook components data
const storybookComponents = [
  {
    value: 'button',
    title: 'Button',
    description: 'Interactive button component with multiple variants',
    icon: 'blip-chat',
    url: '/?path=/docs/components-button--docs',
  },
  {
    value: 'input',
    title: 'Input',
    description: 'Text input field for user data entry',
    icon: 'text-variable',
    url: '/?path=/docs/components-input--docs',
  },
  {
    value: 'modal',
    title: 'Modal',
    description: 'Overlay dialog box for focused content',
    icon: 'bottom-sheet',
    url: '/?path=/docs/components-modal--docs',
  },
  {
    value: 'dropdown',
    title: 'Dropdown',
    description: 'Selection dropdown menu component',
    icon: 'arrow-down',
    url: '/?path=/docs/components-dropdown--docs',
  },
  {
    value: 'card',
    title: 'Card',
    description: 'Container for related content and actions',
    icon: 'catalog',
    url: '/?path=/docs/components-card--docs',
  },
  {
    value: 'table',
    title: 'Table',
    description: 'Data table with sorting and pagination',
    icon: 'filter-table',
    url: '/?path=/docs/components-table--docs',
  },
  {
    value: 'toast',
    title: 'Toast',
    description: 'Brief notification messages',
    icon: 'message-ballon',
    url: '/?path=/docs/components-toast--docs',
  },
  {
    value: 'avatar',
    title: 'Avatar',
    description: 'User profile image or initials',
    icon: 'contact',
    url: '/?path=/docs/components-avatar--docs',
  },
  {
    value: 'badge',
    title: 'Badge',
    description: 'Small count and labeling component',
    icon: 'mark',
    url: '/?path=/docs/components-badge--docs',
  },
  {
    value: 'accordion',
    title: 'Accordion',
    description: 'Collapsible content sections',
    icon: 'organize-list',
    url: '/?path=/docs/components-accordion--docs',
  },
  {
    value: 'tabs',
    title: 'Tabs',
    description: 'Navigation between related content',
    icon: 'organize-blocks',
    url: '/?path=/docs/components-tabs--docs',
  },
  {
    value: 'checkbox',
    title: 'Checkbox',
    description: 'Toggle selection control',
    icon: 'checkball',
    url: '/?path=/docs/components-checkbox--docs',
  },
  {
    value: 'radio',
    title: 'Radio Button',
    description: 'Single selection from a group',
    icon: 'radiobutton',
    url: '/?path=/docs/components-radio--docs',
  },
  {
    value: 'switch',
    title: 'Switch',
    description: 'On/off toggle control',
    icon: 'toggle',
    url: '/?path=/docs/components-switch--docs',
  },
  {
    value: 'loading',
    title: 'Loading Spinner',
    description: 'Loading state indicator',
    icon: 'automation',
    url: '/?path=/docs/components-loading-spinner--docs',
  },
];

export const Properties = (args) => {
  const [lastSearch, setLastSearch] = React.useState('');
  const [lastSelection, setLastSelection] = React.useState(null);

  useEffect(() => {
    const searchAnywhere = document.getElementById('search-anywhere-properties');
    if (searchAnywhere) {
      searchAnywhere.addEventListener('bdsSearchChange', (event) => {
        setLastSearch(event.detail.searchText);
      });
      searchAnywhere.addEventListener('bdsSearchSelect', (event) => {
        setLastSelection(event.detail.option);
      });
    }
  }, []);

  return (
    <bds-grid direction="column" gap="3" padding="3">
      <bds-search-anywhere
        id="search-anywhere-properties"
        options={JSON.stringify(args.options)}
        placeholder={args.placeholder}
        trigger-placeholder={args.triggerPlaceholder}
        show-shortcut={args.showShortcut}
        max-results={args.maxResults}
      />
      
      <bds-grid direction="column" gap="2" margin="t-4">
        <bds-typo variant="fs-14" bold="bold">Last Search:</bds-typo>
        <bds-typo variant="fs-14">{lastSearch || '(none)'}</bds-typo>
        
        <bds-typo variant="fs-14" bold="bold" margin="t-2">Last Selection:</bds-typo>
        <bds-typo variant="fs-14">
          {lastSelection ? `${lastSelection.title} - ${lastSelection.description}` : '(none)'}
        </bds-typo>
      </bds-grid>
    </bds-grid>
  );
};

Properties.args = {
  options: sampleOptions,
  placeholder: 'Search...',
  triggerPlaceholder: 'Search or press Ctrl+K',
  showShortcut: true,
  maxResults: 10,
};

Properties.argTypes = {
  placeholder: {
    control: 'text',
    description: 'Placeholder text for search input in modal',
  },
  triggerPlaceholder: {
    control: 'text',
    description: 'Placeholder text for trigger input',
  },
  showShortcut: {
    control: 'boolean',
    description: 'Show keyboard shortcut hint',
  },
  maxResults: {
    control: { type: 'number', min: 1, max: 50 },
    description: 'Maximum number of results to display',
  },
  options: {
    control: 'object',
    description: 'Options to display in search results',
  },
};

export const DynamicFiltering = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(sampleOptions);

  useEffect(() => {
    const searchAnywhere = document.getElementById('search-anywhere-dynamic');
    if (searchAnywhere) {
      searchAnywhere.addEventListener('bdsSearchChange', (event) => {
        const text = event.detail.searchText.toLowerCase();
        setSearchText(text);
        
        // Custom filtering logic (you can add your own, like server-side search)
        const filtered = sampleOptions.filter((opt) =>
          opt.title.toLowerCase().includes(text) ||
          opt.description.toLowerCase().includes(text)
        );
        setFilteredOptions(filtered);
      });
    }
  }, []);

  return (
    <bds-grid direction="column" gap="3" padding="3">
      <bds-typo variant="fs-16" bold="bold">
        Dynamic Filtering Example
      </bds-typo>
      <bds-typo variant="fs-14">
        This example shows how to handle search changes and update results dynamically.
        You could use this to fetch results from a server.
      </bds-typo>
      
      <bds-search-anywhere
        id="search-anywhere-dynamic"
        options={JSON.stringify(filteredOptions)}
        placeholder="Type to search..."
      />
      
      <bds-grid direction="column" gap="1" margin="t-2">
        <bds-typo variant="fs-12" bold="bold">Current search:</bds-typo>
        <bds-typo variant="fs-12">{searchText || '(empty)'}</bds-typo>
        <bds-typo variant="fs-12" bold="bold" margin="t-1">
          Results count: {filteredOptions.length}
        </bds-typo>
      </bds-grid>
    </bds-grid>
  );
};

export const StorybookComponentsSearch = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Helper function to get the correct base URL for Storybook navigation
  const getStorybookBaseUrl = () => {
    const currentUrl = window.location.href;
    
    // Check if we're in PR preview
    if (currentUrl.includes('/pr-preview/')) {
      const match = currentUrl.match(/(.*\/pr-preview\/pr-\d+\/)/);
      return match ? match[1] : '';
    }
    
    // Check if we're in v2 branch
    if (currentUrl.includes('/blip-ds/v2/')) {
      const match = currentUrl.match(/(.*\/blip-ds\/v2\/)/);
      return match ? match[1] : '';
    }
    
    // Check if we're in main/production
    if (currentUrl.includes('/blip-ds/')) {
      const match = currentUrl.match(/(.*\/blip-ds\/)/);
      return match ? match[1] : '';
    }
    
    // Local development or other scenarios
    return '';
  };

  useEffect(() => {
    const searchAnywhere = document.getElementById('search-anywhere-storybook');
    if (searchAnywhere) {
      searchAnywhere.addEventListener('bdsSearchSelect', (event) => {
        setSelectedComponent(event.detail.option);
        console.log('Selected component:', event.detail.option);
        
        // Navigate to the component page
        const baseUrl = getStorybookBaseUrl();
        const targetUrl = event.detail.option.url;
        const fullUrl = baseUrl ? `${baseUrl}${targetUrl.replace(/^\/\?/, '?')}` : targetUrl;
        
        if (event.detail.newTab) {
          window.open(fullUrl, '_blank');
        } else {
          window.location.href = fullUrl;
        }
      });
    }
  }, []);

  return (
    <bds-grid direction="column" gap="3" padding="3">
      <bds-typo variant="fs-16" bold="bold">
        Search Storybook Components
      </bds-typo>
      <bds-typo variant="fs-14">
        This demonstrates searching through all available components in the design system.
        Try searching for "button", "input", or "modal".
      </bds-typo>
      
      <bds-search-anywhere
        id="search-anywhere-storybook"
        options={JSON.stringify(storybookComponents)}
        placeholder="Search components..."
        trigger-placeholder="Find a component..."
        max-results={8}
      />
      
      {selectedComponent && (
        <bds-grid direction="column" gap="2" margin="t-3" padding="3" style={{ backgroundColor: 'var(--color-surface-1)', borderRadius: '8px' }}>
          <bds-typo variant="fs-14" bold="bold">Last selected component:</bds-typo>
          <bds-typo variant="fs-16" bold="bold">{selectedComponent.title}</bds-typo>
          <bds-typo variant="fs-12">{selectedComponent.description}</bds-typo>
          <bds-typo variant="fs-10" style={{ fontFamily: 'monospace' }}>
            URL: {selectedComponent.url}
          </bds-typo>
        </bds-grid>
      )}
    </bds-grid>
  );
};

export const WithoutIcons = () => {
  const optionsWithoutIcons = sampleOptions.map(({ icon, ...rest }) => rest);

  return (
    <bds-grid direction="column" gap="3" padding="3">
      <bds-typo variant="fs-16" bold="bold">
        Search Without Icons
      </bds-typo>
      <bds-typo variant="fs-14">
        Options can be displayed without icons for a cleaner look.
      </bds-typo>
      
      <bds-search-anywhere
        options={JSON.stringify(optionsWithoutIcons)}
        placeholder="Search..."
      />
    </bds-grid>
  );
};

export const WithoutDescriptions = () => {
  const optionsWithoutDesc = sampleOptions.map(({ description, ...rest }) => rest);

  return (
    <bds-grid direction="column" gap="3" padding="3">
      <bds-typo variant="fs-16" bold="bold">
        Search Without Descriptions
      </bds-typo>
      <bds-typo variant="fs-14">
        For simpler use cases, descriptions can be omitted.
      </bds-typo>
      
      <bds-search-anywhere
        options={JSON.stringify(optionsWithoutDesc)}
        placeholder="Search..."
      />
    </bds-grid>
  );
};

export const MinimalOptions = () => {
  const minimalOptions = [
    { value: '1', title: 'Home' },
    { value: '2', title: 'About' },
    { value: '3', title: 'Contact' },
    { value: '4', title: 'Blog' },
  ];

  return (
    <bds-grid direction="column" gap="3" padding="3">
      <bds-typo variant="fs-16" bold="bold">
        Minimal Options
      </bds-typo>
      <bds-typo variant="fs-14">
        Options with just value and title - the minimal required properties.
      </bds-typo>
      
      <bds-search-anywhere
        options={JSON.stringify(minimalOptions)}
        placeholder="Search pages..."
        show-shortcut={false}
      />
    </bds-grid>
  );
};

export const Events = () => {
  const [events, setEvents] = React.useState([]);

  useEffect(() => {
    const searchAnywhere = document.getElementById('search-anywhere-events');
    if (searchAnywhere) {
      searchAnywhere.addEventListener('bdsSearchOpen', () => {
        setEvents((prev) => [...prev, { type: 'bdsSearchOpen', time: new Date().toLocaleTimeString() }]);
      });
      
      searchAnywhere.addEventListener('bdsSearchClose', () => {
        setEvents((prev) => [...prev, { type: 'bdsSearchClose', time: new Date().toLocaleTimeString() }]);
      });
      
      searchAnywhere.addEventListener('bdsSearchChange', (event) => {
        setEvents((prev) => [...prev, { 
          type: 'bdsSearchChange', 
          detail: event.detail.searchText,
          time: new Date().toLocaleTimeString() 
        }]);
      });
      
      searchAnywhere.addEventListener('bdsSearchSelect', (event) => {
        setEvents((prev) => [...prev, { 
          type: 'bdsSearchSelect', 
          detail: event.detail.option.title,
          time: new Date().toLocaleTimeString() 
        }]);
      });
    }
  }, []);

  return (
    <bds-grid direction="column" gap="3" padding="3">
      <bds-typo variant="fs-16" bold="bold">
        Events Demo
      </bds-typo>
      <bds-typo variant="fs-14">
        All events emitted by the component are logged below. Open the search, type, and select an option to see events.
      </bds-typo>
      
      <bds-search-anywhere
        id="search-anywhere-events"
        options={JSON.stringify(sampleOptions)}
      />
      
      <bds-grid direction="column" gap="1" margin="t-3" padding="2" style={{ backgroundColor: 'var(--color-surface-1)', borderRadius: '8px', maxHeight: '300px', overflow: 'auto' }}>
        <bds-typo variant="fs-14" bold="bold">Event Log:</bds-typo>
        {events.length === 0 ? (
          <bds-typo variant="fs-12">(no events yet)</bds-typo>
        ) : (
          events.slice(-10).reverse().map((event, index) => (
            <bds-typo key={index} variant="fs-10" style={{ fontFamily: 'monospace' }}>
              [{event.time}] {event.type} {event.detail && `- ${event.detail}`}
            </bds-typo>
          ))
        )}
      </bds-grid>
    </bds-grid>
  );
};

export const Methods = () => {
  const openModal = async () => {
    const searchAnywhere = document.getElementById('search-anywhere-methods');
    await searchAnywhere.open();
  };

  const closeModal = async () => {
    const searchAnywhere = document.getElementById('search-anywhere-methods');
    await searchAnywhere.close();
  };

  return (
    <bds-grid direction="column" gap="3" padding="3">
      <bds-typo variant="fs-16" bold="bold">
        Methods Demo
      </bds-typo>
      <bds-typo variant="fs-14">
        You can programmatically open and close the search modal using the open() and close() methods.
      </bds-typo>
      
      <bds-search-anywhere
        id="search-anywhere-methods"
        options={JSON.stringify(sampleOptions)}
      />
      
      <bds-grid gap="2" margin="t-2">
        <bds-button onClick={openModal}>Open Search Modal</bds-button>
        <bds-button onClick={closeModal} variant="secondary">Close Search Modal</bds-button>
      </bds-grid>
    </bds-grid>
  );
};

export const FrameworkReact = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSearchChange = (event) => {
    setSearchText(event.detail.searchText);
  };

  const handleSearchSelect = (event) => {
    setSelectedOption(event.detail.option);
    console.log('Selected:', event.detail.option, 'New tab:', event.detail.newTab);
  };

  return (
    <BdsGrid direction="column" gap="3" padding="3">
      <BdsTypo variant="fs-16" bold="bold">
        React Integration Example
      </BdsTypo>
      <BdsTypo variant="fs-14">
        Using the component in a React application with state management.
      </BdsTypo>
      
      <BdsSearchAnywhere
        options={sampleOptions}
        placeholder="Search..."
        onBdsSearchChange={handleSearchChange}
        onBdsSearchSelect={handleSearchSelect}
      />
      
      <BdsGrid direction="column" gap="2" margin="t-3">
        <BdsTypo variant="fs-14" bold="bold">React State:</BdsTypo>
        <BdsTypo variant="fs-12">Search Text: {searchText || '(empty)'}</BdsTypo>
        <BdsTypo variant="fs-12">
          Selected: {selectedOption ? selectedOption.title : '(none)'}
        </BdsTypo>
      </BdsGrid>
    </BdsGrid>
  );
};
