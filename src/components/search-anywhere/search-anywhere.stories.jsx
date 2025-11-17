import React, { useState, useEffect } from 'react';
import DocumentationTemplate from './search-anywhere.mdx';
import { BdsSearchAnywhere, BdsTypo, BdsGrid } from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Search Anywhere',
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

// Dados de exemplo para demonstrações
const sampleOptions = [
  {
    value: '2',
    title: 'Configurações',
    description: 'Configure as preferências da aplicação',
    url: '#settings',
  },
  {
    value: '3',
    title: 'Usuários',
    description: 'Gerencie contas e permissões de usuários',
    icon: 'contact',
    url: '#users',
  },
  {
    value: '4',
    title: 'Mensagens',
    description: 'Visualize e envie mensagens',
    icon: 'message-ballon',
    url: '#messages',
  },
  {
    value: '5',
    title: 'Análises',
    description: 'Mergulhe fundo em seus dados',
    icon: 'chart-bar',
    url: '#analytics',
  },
  {
    value: '6',
    title: 'Faturamento',
    description: 'Gerencie pagamentos e assinaturas',
    icon: 'dolar',
    url: '#billing',
  },
  {
    value: '7',
    title: 'Central de Ajuda',
    description: 'Obtenha suporte e documentação',
    icon: 'question',
    url: '#help',
  },
  {
    value: '8',
    title: 'Notificações',
    description: 'Configure as notificações',
    icon: 'bell',
    url: '#notifications',
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
    <bds-grid direction="column" gap="3" padding="3" style={{ minHeight: '700px', minWidth: '800px' }}>
      <bds-typo variant="fs-16" bold="bold">
        Componente Search Anywhere
      </bds-typo>
      <bds-typo variant="fs-14">
        Clique no campo abaixo ou pressione <kbd>Ctrl+K</kbd> para abrir o modal de busca. 
        Tente buscar por "configurações", "usuários" ou "análises".
      </bds-typo>
      
      <bds-search-anywhere
        id="search-anywhere-properties"
        options={JSON.stringify(args.options)}
        placeholder={args.placeholder}
        trigger-placeholder={args.triggerPlaceholder}
        show-shortcut={args.showShortcut}
        max-results={args.maxResults}
      />
      
      <bds-grid direction="column" gap="2" margin="t-4">
        <bds-typo variant="fs-14" bold="bold">Última Busca:</bds-typo>
        <bds-typo variant="fs-14">{lastSearch || '(nenhuma)'}</bds-typo>
        
        <bds-typo variant="fs-14" bold="bold" margin="t-2">Última Seleção:</bds-typo>
        <bds-typo variant="fs-14">
          {lastSelection ? `${lastSelection.title} - ${lastSelection.description}` : '(nenhuma)'}
        </bds-typo>
      </bds-grid>
    </bds-grid>
  );
};

Properties.args = {
  options: sampleOptions,
  placeholder: 'Buscar...',
  triggerPlaceholder: 'Buscar ou pressione Ctrl+K',
  showShortcut: true,
  maxResults: 10,
};

Properties.argTypes = {
  placeholder: {
    control: 'text',
    description: 'Texto placeholder para o input de busca no modal',
  },
  triggerPlaceholder: {
    control: 'text',
    description: 'Texto placeholder para o input de ativação',
  },
  showShortcut: {
    control: 'boolean',
    description: 'Mostrar dica de atalho do teclado',
  },
  maxResults: {
    control: { type: 'number', min: 1, max: 50 },
    description: 'Número máximo de resultados a exibir',
  },
  options: {
    control: 'object',
    description: 'Opções para exibir nos resultados da busca',
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
    <bds-grid direction="column" gap="3" padding="3" style={{ minHeight: '600px', minWidth: '800px' }}>
      <bds-typo variant="fs-16" bold="bold">
        Exemplo de Filtragem Dinâmica
      </bds-typo>
      <bds-typo variant="fs-14">
        Este exemplo mostra como lidar com mudanças na busca e atualizar os resultados dinamicamente.
        Você pode usar isso para buscar resultados de um servidor.
      </bds-typo>
      
      <bds-search-anywhere
        id="search-anywhere-dynamic"
        options={JSON.stringify(filteredOptions)}
        placeholder="Digite para buscar..."
      />
      
      <bds-grid direction="column" gap="1" margin="t-2">
        <bds-typo variant="fs-12" bold="bold">Busca atual:</bds-typo>
        <bds-typo variant="fs-12">{searchText || '(vazio)'}</bds-typo>
        <bds-typo variant="fs-12" bold="bold" margin="t-1">
          Total de resultados: {filteredOptions.length}
        </bds-typo>
      </bds-grid>
    </bds-grid>
  );
};

export const WithoutIcons = () => {
  const optionsWithoutIcons = sampleOptions.map(({ icon, ...rest }) => rest);

  return (
    <bds-grid direction="column" gap="3" padding="3" style={{ minHeight: '500px', minWidth: '800px' }}>
      <bds-typo variant="fs-16" bold="bold">
        Busca Sem Ícones
      </bds-typo>
      <bds-typo variant="fs-14">
        As opções podem ser exibidas sem ícones para uma aparência mais limpa.
      </bds-typo>
      
      <bds-search-anywhere
        options={JSON.stringify(optionsWithoutIcons)}
        placeholder="Buscar..."
      />
    </bds-grid>
  );
};

export const WithoutDescriptions = () => {
  const optionsWithoutDesc = sampleOptions.map(({ description, ...rest }) => rest);

  return (
    <bds-grid direction="column" gap="3" padding="3" style={{ minHeight: '500px', minWidth: '800px' }}>
      <bds-typo variant="fs-16" bold="bold">
        Busca Sem Descrições
      </bds-typo>
      <bds-typo variant="fs-14">
        Para casos de uso mais simples, as descrições podem ser omitidas.
      </bds-typo>
      
      <bds-search-anywhere
        options={JSON.stringify(optionsWithoutDesc)}
        placeholder="Buscar..."
      />
    </bds-grid>
  );
};

export const MinimalOptions = () => {
  const minimalOptions = [
    { value: '1', title: 'Início' },
    { value: '2', title: 'Sobre' },
    { value: '3', title: 'Contato' },
    { value: '4', title: 'Blog' },
  ];

  return (
    <bds-grid direction="column" gap="3" padding="3" style={{ minHeight: '500px', minWidth: '800px' }}>
      <bds-typo variant="fs-16" bold="bold">
        Opções Mínimas
      </bds-typo>
      <bds-typo variant="fs-14">
        Opções com apenas value e title - as propriedades mínimas necessárias.
      </bds-typo>
      
      <bds-search-anywhere
        options={JSON.stringify(minimalOptions)}
        placeholder="Buscar páginas..."
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
    <bds-grid direction="column" gap="3" padding="3" style={{ minHeight: '600px', minWidth: '800px' }}>
      <bds-typo variant="fs-16" bold="bold">
        Demonstração de Eventos
      </bds-typo>
      <bds-typo variant="fs-14">
        Todos os eventos emitidos pelo componente são registrados abaixo. Abra a busca, digite e selecione uma opção para ver os eventos.
      </bds-typo>
      
      <bds-search-anywhere
        id="search-anywhere-events"
        options={JSON.stringify(sampleOptions)}
      />
      
      <bds-grid direction="column" gap="1" margin="t-3" padding="2" style={{ backgroundColor: 'var(--color-surface-1)', borderRadius: '8px', maxHeight: '300px', overflow: 'auto' }}>
        <bds-typo variant="fs-14" bold="bold">Registro de Eventos:</bds-typo>
        {events.length === 0 ? (
          <bds-typo variant="fs-12">(nenhum evento ainda)</bds-typo>
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
    <bds-grid direction="column" gap="3" padding="3" style={{ minHeight: '600px', minWidth: '800px' }}>
      <bds-typo variant="fs-16" bold="bold">
        Demonstração de Métodos
      </bds-typo>
      <bds-typo variant="fs-14">
        Você pode abrir e fechar programaticamente o modal de busca usando os métodos open() e close().
      </bds-typo>
      
      <bds-search-anywhere
        id="search-anywhere-methods"
        options={JSON.stringify(sampleOptions)}
      />
      
      <bds-grid gap="2" margin="t-2">
        <bds-button onClick={openModal}>Abrir Modal de Busca</bds-button>
        <bds-button onClick={closeModal} variant="secondary">Fechar Modal de Busca</bds-button>
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
    <BdsGrid direction="column" gap="3" padding="3" style={{ minHeight: '600px', minWidth: '800px' }}>
      <BdsTypo variant="fs-16" bold="bold">
        Exemplo de Integração com React
      </BdsTypo>
      <BdsTypo variant="fs-14">
        Usando o componente em uma aplicação React com gerenciamento de estado.
      </BdsTypo>
      
      <BdsSearchAnywhere
        options={sampleOptions}
        placeholder="Buscar..."
        onBdsSearchChange={handleSearchChange}
        onBdsSearchSelect={handleSearchSelect}
      />
      
      <BdsGrid direction="column" gap="2" margin="t-3">
        <BdsTypo variant="fs-14" bold="bold">Estado do React:</BdsTypo>
        <BdsTypo variant="fs-12">Texto da Busca: {searchText || '(vazio)'}</BdsTypo>
        <BdsTypo variant="fs-12">
          Selecionado: {selectedOption ? selectedOption.title : '(nenhum)'}
        </BdsTypo>
      </BdsGrid>
    </BdsGrid>
  );
};
