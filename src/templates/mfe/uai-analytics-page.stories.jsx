import React, { useState } from 'react';
import {
  UaiThemeProvider,
  UaiPageHeader,
  UaiButton,
  UaiFilterBar,
  UaiGrid,
  UaiCard,
  UaiIconBox,
  UaiIconButton,
  UaiSectionTitle,
  UaiProgressBar,
  UaiSparkline,
  UaiBarChart,
  UaiLineChart,
  UaiTypo,
  UaiAvatar,
  UaiIcon,
} from '../../../blip-ds-react/dist/components';

export default {
  title: 'Templates/MFE/Página Analítica UAI',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: 'inline-radio',
      description: 'Alterna entre os temas UAI Light (4649:22352) e Dark (4649:21730).',
    },
    viewportMode: {
      options: ['mfe-isolated', 'inside-portal-shell'],
      control: 'inline-radio',
      description: 'Compara a visão isolada do MFE com o MFE encaixado dentro do Shell do Portal.',
    },
    showLayoutGuides: {
      control: 'boolean',
      description: 'Exibe o Raio-X das calhas (--uai-spacing-6xl), largura útil (--uai-width-content) e ritmo (--uai-spacing-md).',
    },
  },
  args: {
    theme: 'light',
    viewportMode: 'inside-portal-shell',
    showLayoutGuides: false,
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
    options: ['Black Friday Wpp', 'Reativação de carrinho', 'Lançamento 2026', 'Cupom fidelização'],
  },
  {
    id: 'canal',
    label: 'Canal',
    options: ['WhatsApp', 'Instagram', 'Webchat'],
  },
];

export const AnalyticsPageMFE = ({ theme, viewportMode, showLayoutGuides }) => {
  const [period, setPeriod] = useState('7d');
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [kpiCards, setKpiCards] = useState([
    { title: 'Investimentos', value: 'R$ 184.420', delta: '+13%', context: 'de investimentos', positive: true },
    { title: 'Leads Engajados (ROI)', value: '1.240', delta: '-13%', context: 'leads atingidos', positive: false },
    { title: 'ROAS', value: '87,4%', delta: '+13%', context: 'ROAS de anúncios', positive: true },
    { title: 'CAC', value: '12,41', delta: '-17,7s', context: 'no CAC', positive: false },
  ]);

  const guideZoneStyle = showLayoutGuides
    ? {
        outline: 'var(--uai-border-width-default) dashed var(--uai-accent-ai-start)',
        backgroundImage:
          'linear-gradient(to right, var(--uai-feedback-info-subtle) var(--uai-spacing-6xl), transparent var(--uai-spacing-6xl), transparent calc(100% - var(--uai-spacing-6xl)), var(--uai-feedback-info-subtle) calc(100% - var(--uai-spacing-6xl)))',
      }
    : {};

  const mfeContent = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        minWidth: 0,
        width: '100%',
        backgroundColor: 'var(--uai-surface-background)',
        color: 'var(--uai-content-primary)',
        borderTopLeftRadius: viewportMode === 'inside-portal-shell' ? 'var(--uai-radius-2xl)' : 'var(--uai-radius-none)',
        borderLeft:
          viewportMode === 'inside-portal-shell'
            ? 'var(--uai-border-width-default) solid var(--uai-border-default)'
            : 'none',
        borderTop:
          viewportMode === 'inside-portal-shell'
            ? 'var(--uai-border-width-default) solid var(--uai-border-default)'
            : 'none',
        overflow: 'hidden',
      }}
    >
      {/* Zona 1: UaiPageHeader */}
      <div style={{ width: '100%', ...guideZoneStyle }}>
        <UaiPageHeader level="primary" heading="Visão geral de Marketing" />
      </div>

      {/* Zona 2: Hero de Página */}
      <section
        aria-label="Destaque de inteligência"
        style={{
          boxSizing: 'border-box',
          width: '100%',
          paddingInline: 'var(--uai-spacing-6xl)',
          display: 'flex',
          justifyContent: 'center',
          ...guideZoneStyle,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--uai-spacing-md)',
            width: '100%',
            maxWidth: 'var(--uai-width-content)',
            paddingBlock: 'var(--uai-spacing-3xl)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-xs)' }}>
            <UaiIcon name="sparkle-ai" size="medium" />
            <UaiTypo variant="overline" bold="medium" letterSpacing="expanded" margin={false}>
              OVERLINE LABEL
            </UaiTypo>
          </div>
          <UaiTypo tag="h2" variant="heading-xl" bold="semibold" margin={false}>
            Atendimentos mais inteligentes, conversas mais humanas
          </UaiTypo>
          <div style={{ maxWidth: 'calc(var(--uai-width-content) * 0.6)' }}>
            <UaiTypo variant="body-base" margin={false}>
              <span style={{ color: 'var(--uai-content-secondary)' }}>
                Cada interação se transforma em uma experiência memorável. Com a ajuda de assistentes de IA, seus
                clientes vivenciam conversas autênticas e personalizadas, criando conexões mais profundas.
              </span>
            </UaiTypo>
          </div>
          <div style={{ display: 'flex', gap: 'var(--uai-spacing-xs)' }}>
            <UaiButton variant="solid" color="primary" size="medium">
              Explorar insights
            </UaiButton>
            <UaiButton variant="outline" color="content" size="medium">
              Configurar metas
            </UaiButton>
          </div>
        </div>
      </section>

      {/* Zona 3: UaiFilterBar */}
      <div
        style={{
          boxSizing: 'border-box',
          width: '100%',
          paddingInline: 'var(--uai-spacing-6xl)',
          display: 'flex',
          justifyContent: 'center',
          ...guideZoneStyle,
        }}
      >
        <UaiFilterBar
          selectedPeriod={period}
          searchValue={search}
          searchPlaceholder="Buscar campanhas ou fluxos"
          categories={FILTER_CATEGORIES}
          appliedFilters={filters}
          onUaiPeriodChange={(ev) => setPeriod(ev.detail.id)}
          onUaiSearchChange={(ev) => setSearch(ev.detail.value)}
          onUaiFilterChange={(ev) => setFilters(ev.detail.filters)}
        />
      </div>

      {/* Zona 4: Corpo Content (pilha de UaiGrid com gap="2" -> --uai-spacing-md) */}
      <main
        style={{
          boxSizing: 'border-box',
          width: '100%',
          padding: 'var(--uai-spacing-xl) var(--uai-spacing-6xl)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...guideZoneStyle,
        }}
      >
        <UaiGrid direction="column" gap="2" sortable>
          {/* Fileira de Metas */}
          <UaiGrid type="default" gap="2">
            <UaiCard size="sm" heading="Recuperar carrinhos abandonados">
              <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="medium" aria-label="Mais opções da meta" />
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <UaiTypo variant="heading-xl" bold="semibold" margin={false}>680</UaiTypo>
                <UaiTypo variant="heading-xl" bold="semibold" margin={false}>68%</UaiTypo>
              </div>
              <UaiProgressBar percent={68} aria-label="Progresso de carrinhos" />
              <div slot="footer" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span>Meta: 1.000</span>
                <span>Período: 01/07/2026 a 31/07/2026</span>
              </div>
            </UaiCard>

            <UaiCard size="sm" heading="Novos leads">
              <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="medium" aria-label="Mais opções de novos leads" />
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <UaiTypo variant="heading-xl" bold="semibold" margin={false}>13.578</UaiTypo>
                <UaiTypo variant="heading-xl" bold="semibold" margin={false}>61%</UaiTypo>
              </div>
              <UaiProgressBar percent={61} aria-label="Progresso de novos leads" />
              <div slot="footer" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span>Meta: 18.000</span>
                <span>Período: 01/07/2026 a 31/07/2026</span>
              </div>
            </UaiCard>
          </UaiGrid>

          {/* Título de Seção */}
          <UaiGrid type="default" gap="2">
            <UaiSectionTitle
              heading="Geração de demanda"
              description="Entenda como os usuários interagem e identifique oportunidades para geração de demanda."
            />
          </UaiGrid>

          {/* Fileira Draggable de KPIs (com orelhas laterais dentro da calha de 72px) */}
          <UaiGrid
            type="draggable"
            gap="2"
            maxItems={4}
            onUaiAddClick={() =>
              setKpiCards((prev) =>
                prev.length < 4
                  ? [...prev, { title: 'Novo KPI', value: '1.000', delta: '+5%', context: 'no período', positive: true }]
                  : prev,
              )
            }
          >
            {kpiCards.map((item) => (
              <UaiCard key={item.title} size="sm" heading={item.title}>
                <UaiIconButton
                  slot="actions"
                  icon="more-options-vertical"
                  variant="ghost"
                  size="short"
                  aria-label={`Opções de ${item.title}`}
                />
                <UaiTypo variant="heading-xl" bold="semibold" margin={false}>
                  {item.value}
                </UaiTypo>
                <div slot="footer" style={{ display: 'flex', gap: 'var(--uai-spacing-2xs)' }}>
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

          {/* Fileira Gráfico de Linhas */}
          <UaiGrid type="draggable" gap="2" maxItems={2} addDisabled>
            <UaiCard size="md" heading="Evolução temporal" description="Volume semanal de mensagens">
              <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="medium" aria-label="Mais opções de Evolução temporal" />
              <UaiLineChart series={LINE_SERIES} data={LINE_DATA} tooltipTitle="Evolução" />
            </UaiCard>
          </UaiGrid>

          {/* Fileira Sparklines */}
          <UaiGrid type="draggable" gap="2" maxItems={4}>
            <UaiCard size="sm" heading="Receita estimada">
              <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="short" aria-label="Opções de Receita" />
              <UaiSparkline variant="positive" data={[32, 38, 28, 56, 48, 54]} label="Tendência positiva" />
              <div slot="footer" style={{ display: 'flex', gap: 'var(--uai-spacing-2xs)' }}>
                <span style={{ color: 'var(--uai-feedback-success)', fontWeight: 'var(--uai-font-weight-medium)' }}>+13%</span>
                <span>de receita estimada</span>
              </div>
            </UaiCard>
            <UaiCard size="sm" heading="Taxa de entradas">
              <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="short" aria-label="Opções de Taxa" />
              <UaiSparkline variant="neutral" data={[50, 50, 50, 50, 50]} label="Tendência neutra" />
              <div slot="footer">0% de crescimento</div>
            </UaiCard>
            <UaiCard size="sm" heading="Tempo de uso do sistema">
              <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="short" aria-label="Opções de Tempo" />
              <UaiSparkline variant="negative" data={[54, 46, 58, 30, 42, 34]} label="Tendência de queda" />
              <div slot="footer" style={{ display: 'flex', gap: 'var(--uai-spacing-2xs)' }}>
                <span style={{ color: 'var(--uai-feedback-error)', fontWeight: 'var(--uai-font-weight-medium)' }}>+13%</span>
                <span>de taxa de uso do sistema</span>
              </div>
            </UaiCard>
          </UaiGrid>

          {/* Fileira Gráfico de Barras */}
          <UaiGrid type="draggable" gap="2" maxItems={2} addDisabled>
            <UaiCard
              size="md"
              heading="Top campanhas por ROI"
              description="Campanhas com melhor retorno sobre investimento no período"
            >
              <UaiIconButton slot="actions" icon="more-options-vertical" variant="ghost" size="medium" aria-label="Mais opções de Top campanhas" />
              <UaiBarChart data={BAR_DATA} seriesLabel="ROI" format="currency" />
            </UaiCard>
          </UaiGrid>
        </UaiGrid>
      </main>

      {/* Zona 5: Rodapé Institucional (_PageFooter) */}
      <footer
        style={{
          boxSizing: 'border-box',
          width: '100%',
          padding: 'var(--uai-spacing-xl) var(--uai-spacing-6xl)',
          backgroundColor: 'var(--uai-surface-contrast)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--uai-spacing-lg)',
          ...guideZoneStyle,
        }}
      >
        <div style={{ width: '100%', maxWidth: 'var(--uai-width-content)' }}>
          <UaiSectionTitle
            padding={false}
            heading="Saiba tudo sobre o Contato Inteligente"
            description="Aprenda com especialistas a extrair o máximo de resultados"
          />
        </div>
        <UaiGrid type="default" gap="2">
          {[
            {
              icon: 'question',
              title: 'Blip Help',
              desc: 'Obtenha respostas sobre configurações de agentes, integrações e comportamentos.',
            },
            {
              icon: 'book',
              title: 'Blip Academy',
              desc: 'Aprenda a criar jornadas de alto desempenho com cursos práticos e guiados.',
            },
            {
              icon: 'team',
              title: 'Blip Community',
              desc: 'Troque experiência com outros Blippers e descubra como melhorar seus resultados.',
            },
          ].map((res) => (
            <UaiCard key={res.title} size="sm">
              <UaiIconBox slot="icon" size="lg" icon={res.icon} />
              <UaiIconButton
                slot="actions"
                icon="more-options-vertical"
                variant="ghost"
                size="short"
                aria-label={`Opções de ${res.title}`}
              />
              <UaiTypo variant="title" bold="medium" margin={false}>
                {res.title}
              </UaiTypo>
              <UaiTypo variant="body-base" margin={false}>
                <span style={{ color: 'var(--uai-content-secondary)' }}>{res.desc}</span>
              </UaiTypo>
            </UaiCard>
          ))}
        </UaiGrid>
      </footer>
    </div>
  );

  return (
    <UaiThemeProvider theme={theme}>
      {viewportMode === 'mfe-isolated' ? (
        mfeContent
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: 'var(--uai-surface-paper)',
            color: 'var(--uai-content-primary)',
          }}
        >
          {/* Simulação da barra superior do Shell do Portal */}
          <header
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxSizing: 'border-box',
              padding: 'var(--uai-spacing-md) var(--uai-spacing-lg)',
              backgroundColor: 'var(--uai-surface-paper)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-sm)' }}>
              <UaiTypo variant="title-md" bold="bold" margin={false}>
                blip
              </UaiTypo>
              <UaiTypo variant="body-sm" margin={false}>
                <span style={{ color: 'var(--uai-content-secondary)' }}>Organização · Atendimento Geral</span>
              </UaiTypo>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--uai-spacing-xs)' }}>
              <UaiIconButton icon="question" variant="ghost" size="medium" aria-label="Ajuda" />
              <UaiIconButton icon="bell" variant="ghost" size="medium" aria-label="Notificações" />
              <UaiAvatar name="C J" size="standard" color="surface" />
            </div>
          </header>

          {/* Simulação de UaiSidemenu colapsado + Viewport do MFE */}
          <div style={{ display: 'flex', alignItems: 'stretch', width: '100%' }}>
            <aside
              aria-label="Menu lateral do Portal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--uai-spacing-xs)',
                boxSizing: 'border-box',
                width: 'var(--uai-width-side-menu-collapsed)',
                padding: 'var(--uai-spacing-md)',
                backgroundColor: 'var(--uai-surface-paper)',
                flexShrink: 0,
              }}
            >
              <UaiIconButton icon="sparkle-ai" variant="ghost" size="medium" aria-label="Início" />
              <UaiIconButton icon="builder-menu" variant="ghost" size="medium" aria-label="Fluxos" />
              <UaiIconButton icon="team" variant="ghost" size="medium" aria-label="Público" />
            </aside>
            {mfeContent}
          </div>
        </div>
      )}
    </UaiThemeProvider>
  );
};
