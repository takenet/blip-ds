import { Component, h } from '@stencil/core';

@Component({
  tag: 'bds-test-component',
  styleUrl: 'test-component.scss',
})
export class TestComponent {
  render() {
    const DATA = [
      {
        id: 1,
        produto: 'Celular',
        valor: '1500,00',
        disponibilidade: 'disponivel',
        descricao:
          'Descrição do celular, incluindo modelo, marca e especificações técnicas. Este celular possui uma variedade de recursos avançados, como uma câmera de alta resolução, processador rápido e tela de alta qualidade. Ele está disponível em várias cores e tamanhos, e oferece opções flexíveis de pagamento. Com garantia e política de devolução, este celular é uma escolha popular entre os consumidores que buscam qualidade e desempenho.',
      },
      {
        id: 2,
        produto: 'Notebook',
        valor: '4000,00',
        disponibilidade: 'indisponivel',
        descricao:
          'Descrição do notebook, incluindo marca, modelo e configurações detalhadas. Este notebook oferece um desempenho excepcional, com um processador potente, grande capacidade de armazenamento e uma tela de alta resolução. Embora a garantia estendida esteja disponível, este produto é atualmente indisponível devido à alta demanda. Fique atento às próximas promoções e descontos especiais para este notebook.',
      },
      {
        id: 3,
        produto: 'Livros',
        valor: '60,00',
        disponibilidade: 'disponivel',
        descricao:
          'Descrição dos livros disponíveis, incluindo autor, título e gênero literário. Com uma variedade de títulos emocionantes e informativos, estes livros oferecem uma experiência de leitura envolvente para todos os gostos. Desde romances cativantes até obras acadêmicas, há algo para todos. Além disso, aproveite as promoções especiais, como descontos em compras de múltiplos livros, para expandir sua biblioteca pessoal.',
      },
    ];

    const heading = ['id', 'Produtos', 'Valor', 'Disponibilidade'];

    return (
      <bds-grid xxs="12" direction="row" padding="3" flex-wrap="wrap" gap="2">
        <bds-grid xxs="12">
          <div class="titulo">
            <bds-typo variant="fs-40" bold="bold">
              Titulo de teste fora de temas
            </bds-typo>
          </div>
        </bds-grid>
        <bds-grid xxs="6" padding="r-1">
          <bds-theme-provider theme="light">
            <bds-paper border>
              <bds-grid padding="2" gap="3" direction="column">
                <bds-typo variant="fs-32" bold="bold">
                  Insira o componente aqui
                </bds-typo>
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
        <bds-grid xxs="6" padding="l-1">
          <bds-theme-provider theme="dark">
            <bds-paper>
              <bds-grid padding="2" gap="3" direction="column">
                <bds-typo variant="fs-32" bold="bold">
                  Insira o componente aqui
                </bds-typo>
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>

        <bds-grid xxs="12">
          <bds-table collapse dense-table={true}>
            <bds-table-header>
              <bds-table-row>
                {heading.map((item, index) => {
                  return <bds-table-th key={index}>{item}</bds-table-th>;
                })}
              </bds-table-row>
            </bds-table-header>

            {DATA.map((row, index) => {
              return (
                <bds-table-body key={index}>
                  <bds-table-row data-target={index}>
                    <bds-table-cell>
                      <bds-typo variant="fs-14">{row.id}</bds-typo>
                    </bds-table-cell>
                    <bds-table-cell>
                      <bds-typo variant="fs-14">{row.produto}</bds-typo>
                    </bds-table-cell>
                    <bds-table-cell>
                      <bds-typo variant="fs-14">{row.valor}</bds-typo>
                    </bds-table-cell>
                    <bds-table-cell type="custom">
                      {row.disponibilidade === 'disponivel' ? (
                        <bds-chip-tag color="success">{row.disponibilidade}</bds-chip-tag>
                      ) : (
                        <bds-chip-tag color="danger">{row.disponibilidade}</bds-chip-tag>
                      )}
                    </bds-table-cell>
                  </bds-table-row>

                  <bds-table-row body-collapse={index}>
                    <bds-typo>{row.descricao}</bds-typo>
                  </bds-table-row>
                </bds-table-body>
              );
            })}
          </bds-table>
        </bds-grid>
      </bds-grid>
    );
  }
}
