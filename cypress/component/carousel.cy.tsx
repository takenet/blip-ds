import { useState } from 'react';
import { BdsButton, BdsCarousel, BdsCarouselItem, BdsGrid, BdsIllustration, BdsTypo } from '../dist/blip-ds-react';

export interface Props {
  autoplay: boolean;
  idComponent?: string;
  event?: boolean;
}

const DATACAROUSEL = [
  {
    title: '1 - Título do Slide',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum augue, pulvinar sit amet tincidunt non.',
    illustration: {
      type: 'spots',
      name: 'star',
    },
    bgColor: '#e7f0ff',
    theme: 'light',
  },
  {
    title: '2 - Título do Slide',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum augue, pulvinar sit amet tincidunt non.',
    illustration: {
      type: 'spots',
      name: 'check',
    },
    bgColor: '#202d44',
    theme: 'dark',
  },
  {
    title: '3 - Título do Slide',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum augue, pulvinar sit amet tincidunt non.',
    illustration: {
      type: 'spots',
      name: 'air-ballon',
    },
    bgColor: '#e7f0ff',
    theme: 'light',
  },
  {
    title: '4 - Título do Slide',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum augue, pulvinar sit amet tincidunt non.',
    illustration: {
      type: 'spots',
      name: 'air-ballon',
    },
    bgColor: '#202d44',
    theme: 'dark',
  },
];

const Carousel = (props: Props) => {
  const autoplay = props.autoplay;
  const eventAvalible = props.event;
  const componentId = props.idComponent;
  const [DATAITEMS, SETDATAITEMS] = useState(DATACAROUSEL);
  const eventChangeCarousel = (event) => {
    if (eventAvalible) {
      const input = document.getElementById('event-test') as HTMLInputElement;
      input.value = event.detail.value.id;
    }
  };
  const nextSlide = async (id: string) => {
    const carouselElement = document.getElementById(id) as HTMLBdsCarouselElement;
    await carouselElement.nextSlide();
  };
  const prevSlide = async (id: string) => {
    const carouselElement = document.getElementById(id) as HTMLBdsCarouselElement;
    await carouselElement.prevSlide();
  };
  const setActivated = async (id: string, value: number) => {
    const carouselElement = document.getElementById(id) as HTMLBdsCarouselElement;
    await carouselElement.setActivated(value);
  };
  const pauseAutoplay = async (id: string) => {
    const carouselElement = document.getElementById(id) as HTMLBdsCarouselElement;
    await carouselElement.pauseAutoplay();
  };
  const runAutoplay = async (id: string) => {
    const carouselElement = document.getElementById(id) as HTMLBdsCarouselElement;
    await carouselElement.runAutoplay();
  };
  const buildCarousel = async (id: string) => {
    const carouselElement = document.getElementById(id) as HTMLBdsCarouselElement;
    const NEWITEM = {
      title: `${DATAITEMS.length + 1} - Título do Slide`,
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum augue, pulvinar sit amet tincidunt non.',
      illustration: {
        type: 'spots',
        name: 'analytics-satisfaction',
      },
      bgColor: '#e7f0ff',
      theme: 'light',
    };
    SETDATAITEMS([...DATAITEMS, NEWITEM]);
    await carouselElement.buildCarousel();
  };
  return (
    <>
      <button id="nextSlide" onClick={() => nextSlide(componentId)}>
        nextSlide
      </button>
      <button id="prevSlide" onClick={() => prevSlide(componentId)}>
        prevSlide
      </button>
      <button id="setActivated" onClick={() => setActivated(componentId, 2)}>
        setActivated 2
      </button>
      <button id="pauseAutoplay" onClick={() => pauseAutoplay(componentId)}>
        pauseAutoplay
      </button>
      <button id="runAutoplay" onClick={() => runAutoplay(componentId)}>
        runAutoplay
      </button>
      <button id="buildCarousel" onClick={() => buildCarousel(componentId)}>
        buildCarousel
      </button>
      <BdsCarousel
        id={componentId}
        autoplay={autoplay}
        arrows="inside"
        bullets="inside"
        bulletsPosition="center"
        infiniteLoop={true}
        slidePerPage={1}
        gap="2"
        onBdsChangeCarousel={(ev) => eventChangeCarousel(ev)}
        dtSlideContent="slide-content"
      >
        {DATAITEMS.map((item, index) => {
          return (
            <BdsCarouselItem key={index} bgColor={item.bgColor} theme={item.theme}>
              <BdsGrid padding="x-7" margin="y-6" alignItems="center">
                <BdsGrid xxs="3" direction="column">
                  <BdsIllustration type={item.illustration.type} name={item.illustration.name}></BdsIllustration>
                </BdsGrid>
                <BdsGrid xxs="10" direction="column" gap="1">
                  <BdsTypo variant="fs-20" bold="bold" margin={false}>
                    {item.title}
                  </BdsTypo>
                  <BdsTypo variant="fs-16">{item.subTitle}</BdsTypo>
                  <BdsButton>Saiba mais</BdsButton>
                </BdsGrid>
              </BdsGrid>
            </BdsCarouselItem>
          );
        })}
      </BdsCarousel>
      {eventAvalible && <input id="event-test" />}
    </>
  );
};

describe('Teste de Renderização Carousel', () => {
  // Teste de Renderização
  it('deve renderizar o Carousel com o bullets correto', () => {
    cy.mount(<Carousel autoplay={false} event={false} />);
    cy.get('bds-carousel').should('have.attr', 'bullets', 'inside');
  });
  // Teste de Renderização
  it('deve renderizar o Carousel com o bullets-position correto', () => {
    cy.mount(<Carousel autoplay={false} event={false} />);
    cy.get('bds-carousel').should('have.attr', 'bullets-position', 'center');
  });
  // Teste de Renderização
  it('deve renderizar o Carousel com o arrows correto', () => {
    cy.mount(<Carousel autoplay={false} event={false} />);
    cy.get('bds-carousel').should('have.attr', 'arrows', 'inside');
  });
});

describe('Teste de Eventos Carousel', () => {
  // Teste de Evento bdsClick
  it('deve chamar o evento onBdsChangeCarousel ao clicar', () => {
    cy.mount(<Carousel autoplay={false} event={true} />);
    cy.get('button[id="nextSlide"]').click();
    cy.get('input#event-test').should('have.value', '2');
  });
});

describe('Teste de Acessibilidade Carousel', () => {
  // Teste de Acessibilidade com Tab
  it('deve ser possível navegar para o carousel usando a tecla Tab', () => {
    cy.mount(<Carousel autoplay={false} event={false} idComponent="tab" />);
    cy.get('button[id=buildCarousel]').first().focus();
    cy.wait(100);
    cy.realPress('Tab');
    cy.wait(100);
    cy.get('bds-carousel').should('have.focus');
  });
  // Teste de Acessibilidade com ArrowRight
  it('deve ser possível navegar para o carousel usando a tecla ArrowRight', () => {
    cy.mount(<Carousel autoplay={false} event={true} idComponent="arrowright" />);
    cy.get('button[id=buildCarousel]').first().focus();
    cy.wait(100);
    cy.realPress('Tab');
    cy.wait(100);
    cy.realPress('ArrowRight');
    cy.get('input#event-test').should('have.value', '2');
  });
  // Teste de Acessibilidade com ArrowLeft
  it('deve ser possível navegar para o carousel usando a tecla ArrowLeft', () => {
    cy.mount(<Carousel autoplay={false} event={true} idComponent="arrowleft" />);
    cy.get('button[id=buildCarousel]').first().focus();
    cy.wait(100);
    cy.realPress('Tab');
    cy.wait(100);
    cy.realPress('ArrowLeft');
    cy.get('input#event-test').should('have.value', '4');
  });
  // Teste de Acessibilidade método nextSlide
  it('Verificar se o método nextSlide esta sendo correspondido', () => {
    cy.mount(<Carousel autoplay={false} event={true} idComponent="nextslide" />);
    cy.get('button[id="nextSlide"]').click();
    cy.get('input#event-test').should('have.value', '2');
  });
  // Teste de Acessibilidade método prevSlide
  it('Verificar se o método prevSlide esta sendo correspondido', () => {
    cy.mount(<Carousel autoplay={false} event={true} idComponent="prevslide" />);
    cy.get('button[id="prevSlide"]').click();
    cy.get('input#event-test').should('have.value', '4');
  });
  // Teste de Acessibilidade método setActivated
  it('Verificar se o método setActivated esta sendo correspondido', () => {
    cy.mount(<Carousel autoplay={false} event={true} idComponent="setactivated" />);
    cy.get('button[id="setActivated"]').click();
    cy.get('input#event-test').should('have.value', '2');
  });
  // Teste de Acessibilidade método pauseAutoplay
  it('Verificar se o método pauseAutoplay esta sendo correspondido', () => {
    cy.mount(<Carousel autoplay={true} event={true} idComponent="pauseautoplay" />);
    cy.get('button[id="pauseAutoplay"]').click();
    cy.get('bds-carousel')
      .shadow()
      .find('[data-test="slide-content"]')
      .should('have.class', 'carousel_slide_state_paused');
  });
  // Teste de Acessibilidade método runAutoplay
  it('Verificar se o método runAutoplay esta sendo correspondido', () => {
    cy.mount(<Carousel autoplay={true} event={true} idComponent="runautoplay" />);
    cy.get('button[id="runAutoplay"]').click();
    cy.get('bds-carousel')
      .shadow()
      .find('[data-test="slide-content"]')
      .should('have.class', 'carousel_slide_state_running');
  });
  // Teste de Acessibilidade método buildCarousel
  it('Verificar se o método buildCarousel esta sendo correspondido', () => {
    cy.mount(<Carousel autoplay={false} event={true} idComponent="buildcarousel" />);
    cy.get('button[id="buildCarousel"]').click();
    cy.wait(1100);
    cy.get('button[id="prevSlide"]').click();
    cy.get('input#event-test').should('have.value', '5');
  });
});
