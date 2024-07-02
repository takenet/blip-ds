import React from 'react';
import { useEffect } from 'react';
import DocumentationTemplate from './carousel.mdx';
import {
  BdsButton,
  BdsCarousel,
  BdsCarouselItem,
  BdsGrid,
  BdsIllustration,
  BdsPaper,
  BdsTypo,
} from '../../../blip-ds-react/dist/components';

export default {
  title: 'Components/Carousel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};

const title = 'Slide Title';
const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

export const Properties = (args) => {
  return (
    <bds-grid container direction="column" gap="2">
      <bds-carousel
        autoplay={args.autoplay}
        autoplay-timeout={args.autoplayTimeout}
        autoplay-hover-pause={args.autoplayHoverPause}
        infinite-loop={args.infiniteLoop}
        arrows={args.arrows}
        bullets={args.bullets}
        slide-per-page={args.slidePerPage}
        gap={args.gap}
      >
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="star"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  1 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="check"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  2 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="air-ballon"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  3 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="analytics-satisfaction"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  4 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="avatar"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  5 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="binoculars"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  6 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="bot-list"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  7 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="bill-1"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  8 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
      </bds-carousel>
    </bds-grid>
  );
};

Properties.argTypes = {
  autoplay: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Habilite o autoplay do componente.',
    control: 'boolean',
  },
  autoplayTimeout: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Escolha o tempo do Autoplay em milissegundo, ex: 5000.',
    control: 'text',
  },
  autoplayHoverPause: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Habilite se tera a função de pausar o autoplay quando estiver com hover.',
    control: 'boolean',
  },
  infiniteLoop: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Habilite se o componente terá Loop infinito.',
    control: 'boolean',
  },
  bullets: {
    table: {
      defaultValue: { summary: 'true' },
    },
    description: 'Habilite se o componente terá Loop infinito.',
    control: 'boolean',
  },
  arrows: {
    table: {
      defaultValue: { summary: 'outside' },
    },
    description: 'Escolha o tipo de navegação por seta do componente.',
    options: ['outside', 'inside', 'none'],
    control: 'select',
  },
  slidePerPage: {
    table: {
      defaultValue: { summary: 1 },
    },
    description: 'Escolha o número de colunas que terá disponível no carousel.',
    control: 'number',
  },
  gap: {
    table: {
      defaultValue: { summary: 'none' },
    },
    description: 'Selecione a distancia do intervalo entre os itens.',
    options: ['none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'half'],
    control: 'select',
  },
};

Properties.args = {
  autoplay: false,
  autoplayTimeout: '5000',
  autoplayHoverPause: false,
  infiniteLoop: false,
  bullets: true,
  arrows: 'outside',
  slidePerPage: 1,
  gap: 'none',
};

export const Methods = () => {
  const nextSlide = async (id) => {
    const acc = document.getElementById(id);
    await acc.nextSlide();
  };
  const prevSlide = async (id) => {
    const acc = document.getElementById(id);
    await acc.prevSlide();
  };
  const setActivated = async (id) => {
    const acc = document.getElementById(id);
    await acc.setActivated(2);
  };
  const pauseAutoplay = async (id) => {
    const acc = document.getElementById(id);
    await acc.pauseAutoplay();
  };
  const runAutoplay = async (id) => {
    const acc = document.getElementById(id);
    await acc.runAutoplay();
  };
  return (
    <bds-grid container direction="column" gap="2">
      <bds-grid gap="2">
        <bds-button onClick={() => nextSlide('carousel')} variant="primary" size="short">
          nextSlide
        </bds-button>
        <bds-button onClick={() => prevSlide('carousel')} variant="primary" size="short">
          prevSlide
        </bds-button>
        <bds-button onClick={() => setActivated('carousel')} variant="primary" size="short">
          setActivated 2
        </bds-button>
        <bds-button onClick={() => pauseAutoplay('carousel')} variant="primary" size="short">
          pauseAutoplay
        </bds-button>
        <bds-button onClick={() => runAutoplay('carousel')} variant="primary" size="short">
          runAutoplay
        </bds-button>
      </bds-grid>
      <bds-carousel
        id="carousel"
        autoplay={true}
        autoplay-timeout="10000"
        autoplay-hover-pause={true}
        arrows="none"
        bullets={true}
        infinite-loop={true}
        slide-per-page={2}
        gap="2"
      >
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="star"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  1 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="check"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  2 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="air-ballon"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  3 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="analytics-satisfaction"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  4 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="avatar"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  5 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="binoculars"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  6 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="bot-list"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  7 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="bill-1"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  8 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
      </bds-carousel>
    </bds-grid>
  );
};

export const Events = () => {
  useEffect(() => {
    const carousel = document.getElementById('carousel');
    carousel.addEventListener('bdsChangeCarousel', () => {
      console.log('Evento bdsChangeCarousel funcionando');
    });
  });
  return (
    <bds-grid container direction="column" gap="2">
      <bds-carousel
        id="carousel"
        autoplay={true}
        autoplay-timeout="10000"
        autoplay-hover-pause={true}
        arrows="none"
        bullets={true}
        infinite-loop={true}
        slide-per-page={2}
        gap="2"
      >
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="star"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  1 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="check"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  2 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="air-ballon"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  3 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="analytics-satisfaction"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  4 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="avatar"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  5 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="binoculars"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  6 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="bot-list"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  7 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid containerFluid align-items="center">
              <bds-grid xxs="3" padding="3" direction="column" margin="y-2">
                <bds-illustration type="spots" name="bill-1"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  8 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{paragraph}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-paper>
        </bds-carousel-item>
      </bds-carousel>
    </bds-grid>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsGrid container direction="column" gap="2">
      <BdsCarousel>
        <BdsCarouselItem>
          <BdsPaper bgColor="surface-0">
            <BdsGrid containerFluid align-items="center">
              <BdsGrid xxs="3" padding="3" direction="column" margin="y-2">
                <BdsIllustration type="spots" name="star"></BdsIllustration>
              </BdsGrid>
              <BdsGrid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <BdsTypo variant="fs-20" bold="bold" margin={false}>
                  1 - {title}
                </BdsTypo>
                <BdsTypo variant="fs-16">{paragraph}</BdsTypo>
                <BdsButton>Saiba mais</BdsButton>
              </BdsGrid>
            </BdsGrid>
          </BdsPaper>
        </BdsCarouselItem>
        <BdsCarouselItem>
          <BdsPaper bgColor="surface-0">
            <BdsGrid containerFluid align-items="center">
              <BdsGrid xxs="3" padding="3" direction="column" margin="y-2">
                <BdsIllustration type="spots" name="check"></BdsIllustration>
              </BdsGrid>
              <BdsGrid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <BdsTypo variant="fs-20" bold="bold" margin={false}>
                  2 - {title}
                </BdsTypo>
                <BdsTypo variant="fs-16">{paragraph}</BdsTypo>
                <BdsButton>Saiba mais</BdsButton>
              </BdsGrid>
            </BdsGrid>
          </BdsPaper>
        </BdsCarouselItem>
        <BdsCarouselItem>
          <BdsPaper bgColor="surface-0">
            <BdsGrid containerFluid align-items="center">
              <BdsGrid xxs="3" padding="3" direction="column" margin="y-2">
                <BdsIllustration type="spots" name="air-ballon"></BdsIllustration>
              </BdsGrid>
              <BdsGrid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <BdsTypo variant="fs-20" bold="bold" margin={false}>
                  3 - {title}
                </BdsTypo>
                <BdsTypo variant="fs-16">{paragraph}</BdsTypo>
                <BdsButton>Saiba mais</BdsButton>
              </BdsGrid>
            </BdsGrid>
          </BdsPaper>
        </BdsCarouselItem>
        <BdsCarouselItem>
          <BdsPaper bgColor="surface-0">
            <BdsGrid containerFluid align-items="center">
              <BdsGrid xxs="3" padding="3" direction="column" margin="y-2">
                <BdsIllustration type="spots" name="analytics-satisfaction"></BdsIllustration>
              </BdsGrid>
              <BdsGrid xxs="9" direction="column" padding="2" margin="y-2" gap="1">
                <BdsTypo variant="fs-20" bold="bold" margin={false}>
                  4 - {title}
                </BdsTypo>
                <BdsTypo variant="fs-16">{paragraph}</BdsTypo>
                <BdsButton>Saiba mais</BdsButton>
              </BdsGrid>
            </BdsGrid>
          </BdsPaper>
        </BdsCarouselItem>
      </BdsCarousel>
    </BdsGrid>
  );
};
