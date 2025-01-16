import React, { useEffect, useState } from 'react';
import DocumentationTemplate from './carousel.mdx';
import {
  BdsButton,
  BdsCarousel,
  BdsCarouselItem,
  BdsGrid,
  BdsIllustration,
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
const paragraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum augue, pulvinar sit amet tincidunt non.';
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

export const Properties = (args) => {
  const el = document.getElementsByClassName('sb-story');
  if (el.length !== 0) {
    el[0].style.width = '800px';
  }
  return (
    <bds-carousel
      autoplay={args.autoplay}
      autoplay-timeout={args.autoplayTimeout}
      autoplay-hover-pause={args.autoplayHoverPause}
      auto-height={args.autoHeight}
      infinite-loop={args.infiniteLoop}
      arrows={args.arrows}
      bullets={args.bullets}
      bullets-position={args.bulletsPosition}
      slide-per-page={args.slidePerPage}
      gap={args.gap}
      grab={args.grab}
    >
      <bds-carousel-item
        bg-color={args.bgColor}
        bg-image={args.bgImage}
        bg-image-brightness={args.bgImageBrightness}
        theme={args.theme}
      >
        <bds-grid padding="x-1" margin="y-2" align-items="center" gap="1">
          <bds-grid xxs="3" direction="column">
            <bds-illustration type="spots" name="star"></bds-illustration>
          </bds-grid>
          <bds-grid xxs="9" direction="column" margin="y-1" gap="1">
            <bds-typo variant="fs-20" bold="bold" margin={false}>
              1 - {title}
            </bds-typo>
            <bds-typo variant="fs-16">{paragraph}</bds-typo>
            <bds-button>Saiba mais</bds-button>
          </bds-grid>
        </bds-grid>
      </bds-carousel-item>
      <bds-carousel-item bg-color="#FFF">
        <bds-grid padding="x-1" margin="y-2" align-items="center" gap="1">
          <bds-grid xxs="3" direction="column">
            <bds-illustration type="spots" name="check"></bds-illustration>
          </bds-grid>
          <bds-grid xxs="9" direction="column" margin="y-1" gap="1">
            <bds-typo variant="fs-20" bold="bold" margin={false}>
              2 - {title}
            </bds-typo>
            <bds-typo variant="fs-16">{paragraph}</bds-typo>
            <bds-button>Saiba mais</bds-button>
          </bds-grid>
        </bds-grid>
      </bds-carousel-item>
      <bds-carousel-item bg-color="#222" theme="dark">
        <bds-grid padding="x-1" margin="y-2" align-items="center" gap="1">
          <bds-grid xxs="3" direction="column">
            <bds-illustration type="spots" name="air-ballon"></bds-illustration>
          </bds-grid>
          <bds-grid xxs="9" direction="column" margin="y-1" gap="1">
            <bds-typo variant="fs-20" bold="bold" margin={false}>
              3 - {title}
            </bds-typo>
            <bds-typo variant="fs-16">{paragraph}</bds-typo>
            <bds-button>Saiba mais</bds-button>
          </bds-grid>
        </bds-grid>
      </bds-carousel-item>
      <bds-carousel-item bg-color="#FFF">
        <bds-grid padding="x-1" margin="y-2" align-items="center" gap="1">
          <bds-grid xxs="3" direction="column">
            <bds-illustration type="spots" name="analytics-satisfaction"></bds-illustration>
          </bds-grid>
          <bds-grid xxs="9" direction="column" margin="y-1" gap="1">
            <bds-typo variant="fs-20" bold="bold" margin={false}>
              4 - {title}
            </bds-typo>
            <bds-typo variant="fs-16">{paragraph}</bds-typo>
            <bds-button>Saiba mais</bds-button>
          </bds-grid>
        </bds-grid>
      </bds-carousel-item>
    </bds-carousel>
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
  autoHeight: {
    table: {
      defaultValue: { summary: 'false' },
    },
    description: 'Habilite-o caso você queira que o componente se ajuste a altura em relação aos items ativos.',
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
      defaultValue: { summary: 'outside' },
    },
    description: 'Escolha o tipo de navegação por bullets do componente.',
    options: ['outside', 'inside', 'none'],
    control: 'select',
  },
  bulletsPosition: {
    table: {
      defaultValue: { summary: 'center' },
    },
    description: 'Escolha o posicionamento dos bullets no componente.',
    options: ['left', 'center', 'right'],
    control: 'select',
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
  grab: {
    table: {
      defaultValue: { summary: 'true' },
    },
    description: 'Habilite se o componente terá função de Grab',
    control: 'boolean',
  },
  bgColor: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Selecione a cor de fundo para o item.',
    control: 'text',
  },
  bgImage: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Selecione a imagem de fundo para o item.',
    control: 'text',
  },
  bgImageBrightness: {
    table: {
      defaultValue: { summary: 'vazio' },
    },
    description: 'Selecione o brilho na imagem de fundo disponibilizada para o item.',
    control: 'number',
  },
  theme: {
    table: {
      defaultValue: { summary: 'light' },
    },
    description: 'Selecione o tema especifico para o item.',
    options: ['light', 'dark', 'high-contrast'],
    control: 'select',
  },
};

Properties.args = {
  autoplay: false,
  autoplayTimeout: '5000',
  autoplayHoverPause: false,
  autoHeight: false,
  infiniteLoop: false,
  bullets: 'outside',
  bulletsPosition: 'center',
  arrows: 'outside',
  slidePerPage: 1,
  gap: 'none',
  grab: true,
  bgColor: '#000',
  bgImage:
    'https://blipmediastore.blip.ai/public-medias/Media_bdcb8c47-a74f-47d8-8b55-9a91a367fead?56983082-a993-4c40-9d78-d7a90416db97',
  bgImageBrightness: 0.5,
  theme: 'dark',
};

const containerCarousel = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItens: 'center',
};

const col1 = {
  display: 'flex',
  padding: '16px',
  flex: '0 0 auto',
  width: '24.99%',
  boxSizing: 'border-box',
};

const col2 = {
  display: 'flex',
  padding: '16px',
  flex: '0 0 auto',
  width: '74.99%',
  boxSizing: 'border-box',
  flexDirection: 'column',
  gap: '8px',
};

export const Methods = () => {
  const [DATAITEMS, SETDATAITEMS] = useState(DATACAROUSEL);

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
  const buildCarousel = async (id) => {
    const acc = document.getElementById(id);
    const NEWITEM = {
      title: `${DATAITEMS.length + 1} - Título do Slide`,
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum augue, pulvinar sit amet tincidunt non.',
      illustration: {
        type: 'spots',
        name: 'analytics-satisfaction',
      },
    };
    SETDATAITEMS([...DATAITEMS, NEWITEM]);
    await acc.buildCarousel();
  };
  return (
    <BdsGrid direction="column" gap="2">
      <BdsGrid gap="2">
        <BdsButton onClick={() => nextSlide('carousel-method')} variant="primary" size="short">
          nextSlide
        </BdsButton>
        <BdsButton onClick={() => prevSlide('carousel-method')} variant="primary" size="short">
          prevSlide
        </BdsButton>
        <BdsButton onClick={() => setActivated('carousel-method')} variant="primary" size="short">
          setActivated 2
        </BdsButton>
        <BdsButton onClick={() => pauseAutoplay('carousel-method')} variant="primary" size="short">
          pauseAutoplay
        </BdsButton>
        <BdsButton onClick={() => runAutoplay('carousel-method')} variant="primary" size="short">
          runAutoplay
        </BdsButton>
        <BdsButton onClick={() => buildCarousel('carousel-method')} variant="primary" size="short">
          buildCarousel
        </BdsButton>
      </BdsGrid>
      <bds-carousel
        id="carousel-method"
        autoplay={true}
        autoplay-timeout="10000"
        autoplay-hover-pause={true}
        arrows="none"
        bullets={true}
        infinite-loop={true}
        slide-per-page={1}
        gap="2"
      >
        {DATAITEMS.map((item, index) => {
          return (
            <bds-carousel-item key={index} bg-color={item.bgColor} theme={item.theme}>
              <bds-grid padding="x-7" margin="y-6" align-items="center">
                <bds-grid xxs="3" direction="column">
                  <bds-illustration type={item.illustration.type} name={item.illustration.name}></bds-illustration>
                </bds-grid>
                <bds-grid xxs="10" direction="column" gap="1">
                  <bds-typo variant="fs-20" bold="bold" margin={false}>
                    {item.title}
                  </bds-typo>
                  <bds-typo variant="fs-16">{item.subTitle}</bds-typo>
                  <bds-button>Saiba mais</bds-button>
                </bds-grid>
              </bds-grid>
            </bds-carousel-item>
          );
        })}
      </bds-carousel>
    </BdsGrid>
  );
};

export const Events = () => {
  useEffect(() => {
    const carousel = document.getElementById('carousel-event');
    carousel.addEventListener('bdsChangeCarousel', () => {
      console.log('Evento bdsChangeCarousel funcionando');
    });
  });
  return (
    <bds-carousel
      id="carousel-event"
      arrows="outside"
      bullets="outside"
      infinite-loop={true}
      slide-per-page={1}
      gap="2"
    >
      {DATACAROUSEL.map((item, index) => {
        return (
          <bds-carousel-item key={index} bg-color={item.bgColor} theme={item.theme}>
            <bds-grid padding="x-7" margin="y-6" align-items="center">
              <bds-grid xxs="3" direction="column">
                <bds-illustration type={item.illustration.type} name={item.illustration.name}></bds-illustration>
              </bds-grid>
              <bds-grid xxs="10" direction="column" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  {item.title}
                </bds-typo>
                <bds-typo variant="fs-16">{item.subTitle}</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-carousel-item>
        );
      })}
    </bds-carousel>
  );
};

export const FrameworkReact = () => {
  return (
    <BdsCarousel
      autoplay={false}
      arrows="inside"
      bullets="inside"
      bulletsPosition="center"
      infiniteLoop={true}
      slidePerPage={1}
      gap="2"
    >
      {DATACAROUSEL.map((item, index) => {
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
  );
};
