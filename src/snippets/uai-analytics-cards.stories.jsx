import React, { useState } from 'react';
import {
  UaiThemeProvider,
  UaiGrid,
  UaiCard,
  UaiIconBox,
  UaiIconButton,
  UaiSectionTitle,
  UaiProgressBar,
  UaiFilterBar,
  UaiSparkline,
  UaiBarChart,
  UaiLineChart,
  UaiTypo,
} from '../../blip-ds-react/dist/components';

export default {
  title: 'UAI Snippets/Cards e Analytics',
  parameters: {
    layout: 'fullscreen',
  },
};

const LINE_SERIES = [
  { key: 'investido', label: 'Valor investido', color: 'ai-start' },
  { key: 'conversas', label: 'Conversas iniciadas', color: 'ai-middle' },
  { key: 'receita', label: 'Receita', color: 'ai-end' },
];

const LINE_DATA = [
  { key: '20/07', investido: 275000, conversas: 285000, receita: 120000 },
  { key: '27/07', investido: 282000, conversas: 294000, receita: 138000 },
  { key: '01/08', investido: 280000, conversas: 292000, receita: 140000 },
  { key: '05/08', investido: 256000, conversas: 305000, receita: 182000 },
  { key: '10/08', investido: 270000, conversas: 318000, receita: 96000 },
  { key: '15/08', investido: 185000, conversas: 350000, receita: 52000 },
  { key: 'Hoje', investido: 192000, conversas: 350000, receita: 68000 },
];

const BAR_DATA = [
  { label: 'Black Friday Wpp', value: 100000 },
  { label: 'Reativação de carrinho', value: 75000 },
  { label: 'Lançamento 2026', value: 59000 },
  { label: 'Recompra pós-venda', value: 50000 },
  { label: 'Cupom fidelização', value: 44000 },
];

const FILTER_CATEGORIES = [
  {
    id: 'campanha',
    label: 'Campanha',
    search: true,
    options: ['Black Friday Wpp', 'Reativação de carrinho', 'Lançamento 2026'],
  },
  {
    id: 'canal',
    label: 'Canal',
    options: ['WhatsApp', 'Instagram', 'Webchat'],
  },
];

const metricRowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
};

const footerMetaStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: 'var(--uai-spacing-xs)',
};

const trendFooterStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--uai-spacing-2xs)',
};

export const GoalProgressCards = () => (
  <UaiThemeProvider theme="light">
    <UaiGrid type="default" gap="2">
      <UaiCard size="sm" heading="Recuperar carrinhos abandonados">
        <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="medium" aria-label="Mais opções da meta de carrinhos" />
        <div style={metricRowStyle}>
          <UaiTypo variant="heading-xl" bold="semibold" margin={false}>
            680
          </UaiTypo>
          <UaiTypo variant="heading-xl" bold="semibold" margin={false}>
            68%
          </UaiTypo>
        </div>
        <UaiProgressBar percent={68} aria-label="Progresso de carrinhos recuperados" />
        <div slot="footer" style={footerMetaStyle}>
          <span>Meta: 1.000</span>
          <span>Período: 01/07/2026 a 31/07/2026</span>
        </div>
      </UaiCard>

      <UaiCard size="sm" heading="Novos leads">
        <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="medium" aria-label="Mais opções da meta de novos leads" />
        <div style={metricRowStyle}>
          <UaiTypo variant="heading-xl" bold="semibold" margin={false}>
            13.578
          </UaiTypo>
          <UaiTypo variant="heading-xl" bold="semibold" margin={false}>
            61%
          </UaiTypo>
        </div>
        <UaiProgressBar percent={61} aria-label="Progresso de novos leads" />
        <div slot="footer" style={footerMetaStyle}>
          <span>Meta: 18.000</span>
          <span>Período: 01/07/2026 a 31/07/2026</span>
        </div>
      </UaiCard>
    </UaiGrid>
  </UaiThemeProvider>
);

export const KpiIndicatorRow = () => {
  const kpis = [
    { title: 'Investimentos', value: 'R$ 184.420', delta: '+13%', context: 'de investimentos', positive: true },
    { title: 'Leads Engajados (ROI)', value: '1.240', delta: '-13%', context: 'leads atingidos', positive: false },
    { title: 'ROAS', value: '87,4%', delta: '+13%', context: 'ROAS de anúncios', positive: true },
    { title: 'CAC', value: '12,41', delta: '-17,7s', context: 'no CAC', positive: false },
  ];

  return (
    <UaiThemeProvider theme="light">
      <UaiGrid type="default" gap="2">
        {kpis.map((item) => (
          <UaiCard key={item.title} size="sm" heading={item.title}>
            <UaiIconButton
              slot="actions"
              icon="more-options-vertical"
              variant="ghost"
              size="short"
              aria-label={`Mais opções de ${item.title}`}
            />
            <UaiTypo variant="heading-xl" bold="semibold" margin={false}>
              {item.value}
            </UaiTypo>
            <div slot="footer" style={trendFooterStyle}>
              <span
                style={{
                  color: item.positive ? 'var(--uai-feedback-success)' : 'var(--uai-feedback-error)',
                  fontWeight: 'var(--uai-font-weight-medium)',
                }}
              >
                {item.delta}
              </span>
              <span>{item.context}</span>
            </div>
          </UaiCard>
        ))}
      </UaiGrid>
    </UaiThemeProvider>
  );
};

export const SparklineTrendRow = () => (
  <UaiThemeProvider theme="light">
    <UaiGrid type="default" gap="2">
      <UaiCard size="sm" heading="Receita estimada">
        <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="short" aria-label="Opções de Receita estimada" />
        <UaiSparkline variant="positive" data={[32, 38, 28, 56, 48, 54]} label="Tendência positiva de receita estimada" />
        <div slot="footer" style={trendFooterStyle}>
          <span style={{ color: 'var(--uai-feedback-success)', fontWeight: 'var(--uai-font-weight-medium)' }}>+13%</span>
          <span>de receita estimada</span>
        </div>
      </UaiCard>

      <UaiCard size="sm" heading="Taxa de entradas">
        <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="short" aria-label="Opções de Taxa de entradas" />
        <UaiSparkline variant="neutral" data={[50, 50, 50, 50, 50]} label="Tendência estável de taxa de entradas" />
        <div slot="footer" style={trendFooterStyle}>
          <span>0% de crescimento</span>
        </div>
      </UaiCard>

      <UaiCard size="sm" heading="Tempo de uso do sistema">
        <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="short" aria-label="Opções de Tempo de uso" />
        <UaiSparkline variant="negative" data={[54, 46, 58, 30, 42, 34]} label="Oscilação em tempo de uso do sistema" />
        <div slot="footer" style={trendFooterStyle}>
          <span style={{ color: 'var(--uai-feedback-error)', fontWeight: 'var(--uai-font-weight-medium)' }}>+13%</span>
          <span>de taxa de uso do sistema</span>
        </div>
      </UaiCard>
    </UaiGrid>
  </UaiThemeProvider>
);

export const LineChartEvolutionCard = () => (
  <UaiThemeProvider theme="light">
    <UaiGrid type="default" gap="2">
      <UaiCard size="md" heading="Evolução temporal" description="Volume semanal de mensagens">
        <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="medium" aria-label="Mais opções do gráfico" />
        <UaiLineChart
          series={LINE_SERIES}
          data={LINE_DATA}
          tooltipTitle="Evolução"
        />
      </UaiCard>
    </UaiGrid>
  </UaiThemeProvider>
);

export const BarChartRankingCard = () => (
  <UaiThemeProvider theme="light">
    <UaiGrid type="default" gap="2">
      <UaiCard
        size="md"
        heading="Top campanhas por ROI"
        description="Campanhas com melhor retorno sobre investimento no período"
      >
        <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="medium" aria-label="Mais opções do gráfico" />
        <UaiBarChart
          data={BAR_DATA}
          seriesLabel="ROI"
          format="currency"
        />
      </UaiCard>
    </UaiGrid>
  </UaiThemeProvider>
);

export const ResourceActionRow = () => {
  const resources = [
    {
      icon: 'question',
      title: 'Blip Help',
      description: 'Obtenha respostas sobre configurações de agentes, integrações e comportamentos.',
    },
    {
      icon: 'book',
      title: 'Blip Academy',
      description: 'Aprenda a criar jornadas de alto desempenho com cursos práticos e guiados.',
    },
    {
      icon: 'team',
      title: 'Blip Community',
      description: 'Troque experiência com outros Blippers e descubra como melhorar seus resultados.',
    },
  ];

  return (
    <UaiThemeProvider theme="light">
      <UaiGrid type="default" gap="2">
        {resources.map((res) => (
          <UaiCard key={res.title} size="sm">
            <UaiIconBox slot="icon" size="lg" icon={res.icon} />
            <UaiIconButton
              slot="actions"
              icon="more-options-vertical"
              variant="ghost"
              size="short"
              aria-label={`Mais opções de ${res.title}`}
            />
            <UaiTypo variant="title" bold="medium" margin={false}>
              {res.title}
            </UaiTypo>
            <UaiTypo variant="body-base" margin={false}>
              <span style={{ color: 'var(--uai-content-secondary)' }}>{res.description}</span>
            </UaiTypo>
          </UaiCard>
        ))}
      </UaiGrid>
    </UaiThemeProvider>
  );
};

export const DraggableDashboardBuilder = () => {
  const [sections, setSections] = useState([
    {
      id: 'sec-demand',
      cards: [
        { id: 'c1', title: 'Investimentos', value: 'R$ 184.420', note: '+13% no período' },
        { id: 'c2', title: 'Leads Engajados', value: '1.240', note: 'Meta em andamento' },
        { id: 'c3', title: 'ROAS', value: '87,4%', note: '+13% em anúncios' },
      ],
    },
    {
      id: 'sec-channels',
      cards: [
        { id: 'c4', title: 'Anúncios', value: '13.290', note: '+13% em anúncios' },
        { id: 'c5', title: 'Conversas iniciadas', value: '8.412', note: 'WhatsApp oficial' },
      ],
    },
  ]);

  const handleReorder = (ev) => {
    const { fromIndex, toIndex } = ev.detail;
    setSections((prev) => {
      const next = [...prev];
      const [moved] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, moved);
      return next;
    });
  };

  const handleAddCard = (sectionId) => {
    setSections((prev) =>
      prev.map((sec) => {
        if (sec.id !== sectionId || sec.cards.length >= 4) return sec;
        const nextNum = sec.cards.length + 1;
        return {
          ...sec,
          cards: [
            ...sec.cards,
            { id: `${sectionId}-${nextNum}`, title: `Indicador ${nextNum}`, value: '1.000', note: 'Adicionado pelo +' },
          ],
        };
      }),
    );
  };

  return (
    <UaiThemeProvider theme="light">
      <div
        style={{
          padding: 'var(--uai-spacing-xl) var(--uai-spacing-6xl)',
          backgroundColor: 'var(--uai-surface-background)',
        }}
      >
        <UaiGrid direction="column" gap="2" sortable controlledReorder onUaiReorder={handleReorder}>
          {sections.map((section) => (
            <UaiGrid
              key={section.id}
              type="draggable"
              gap="2"
              maxItems={4}
              onUaiAddClick={() => handleAddCard(section.id)}
            >
              {section.cards.map((card) => (
                <UaiCard key={card.id} size="sm" heading={card.title}>
                  <UaiIconButton
                    slot="actions"
                    icon="more-options-vertical"
                    variant="ghost"
                    size="short"
                    aria-label={`Mais opções de ${card.title}`}
                  />
                  <UaiTypo variant="heading-xl" bold="semibold" margin={false}>
                    {card.value}
                  </UaiTypo>
                  <div slot="footer">{card.note}</div>
                </UaiCard>
              ))}
            </UaiGrid>
          ))}
        </UaiGrid>
      </div>
    </UaiThemeProvider>
  );
};

export const FullAnalyticsSection = () => {
  const [period, setPeriod] = useState('7d');
  const [filters, setFilters] = useState({});

  return (
    <UaiThemeProvider theme="light">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--uai-spacing-xl)',
          padding: 'var(--uai-spacing-xl) var(--uai-spacing-6xl)',
          backgroundColor: 'var(--uai-surface-background)',
        }}
      >
        <UaiFilterBar
          selectedPeriod={period}
          categories={FILTER_CATEGORIES}
          appliedFilters={filters}
          onUaiPeriodChange={(ev) => setPeriod(ev.detail.id)}
          onUaiFilterChange={(ev) => setFilters(ev.detail.filters)}
        />
        <UaiGrid direction="column" gap="2" alignItems="center">
          <UaiGrid type="default" gap="2">
            <UaiSectionTitle
              heading="Geração de demanda"
              description="Entenda como os usuários interagem e identifique oportunidades para geração de demanda."
            />
          </UaiGrid>
          <UaiGrid type="default" gap="2">
            <UaiCard size="md" heading="Evolução temporal" description="Volume semanal de mensagens">
              <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="medium" aria-label="Mais opções de Evolução temporal" />
              <UaiLineChart series={LINE_SERIES} data={LINE_DATA} tooltipTitle="Evolução" />
            </UaiCard>
          </UaiGrid>
        </UaiGrid>
      </div>
    </UaiThemeProvider>
  );
};
