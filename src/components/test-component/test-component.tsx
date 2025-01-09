import { Component, h } from '@stencil/core';
import { IllustrationType } from '../illustration/illustration-interface';
import { Themes } from '../theme-provider/theme-provider';

@Component({
  tag: 'bds-test-component',
  styleUrl: 'test-component.scss',
})
export class TestComponent {
  render() {
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
    return (
      <bds-grid xxs="12" padding="x-2" flex-wrap="wrap">
        <bds-grid xxs="12" margin="t-2">
          <div class="titulo">
            <bds-typo variant="fs-40" bold="bold">
              Titulo de teste fora de temas
            </bds-typo>
          </div>
        </bds-grid>
        <bds-grid xxs="6" padding="r-1">
          <bds-theme-provider theme="light">
            <bds-paper elevation="none" border>
              <bds-grid padding="8" direction="column" gap="8">
                <bds-carousel
                  id="carousel"
                  autoplay={true}
                  autoplay-timeout="5000"
                  autoplay-hover-pause={true}
                  arrows="inside"
                  bullets="inside"
                  bulletsPosition="left"
                  infinite-loop={true}
                  slide-per-page={1}
                  gap="2"
                >
                  {DATACAROUSEL.map((item, index) => {
                    return (
                      <bds-carousel-item key={index} bgColor={item.bgColor} theme={item.theme as Themes}>
                        <bds-grid padding="x-7" margin="y-6" alignItems="center">
                          <bds-grid xxs="2" direction="column">
                            <bds-illustration
                              type={item.illustration.type as IllustrationType}
                              name={item.illustration.name}
                            ></bds-illustration>
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
                <bds-carousel
                  id="carousel"
                  autoplay={true}
                  autoplay-timeout="5000"
                  autoplay-hover-pause={true}
                  arrows="inside"
                  bullets="inside"
                  bulletsPosition="center"
                  infinite-loop={true}
                  slide-per-page={1}
                  gap="2"
                >
                  {DATACAROUSEL.map((item, index) => {
                    return (
                      <bds-carousel-item key={index} bgColor={item.bgColor} theme={item.theme as Themes}>
                        <bds-grid padding="x-7" margin="y-6" alignItems="center">
                          <bds-grid xxs="2" direction="column">
                            <bds-illustration
                              type={item.illustration.type as IllustrationType}
                              name={item.illustration.name}
                            ></bds-illustration>
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
                <bds-carousel
                  id="carousel"
                  autoplay={true}
                  autoplay-timeout="5000"
                  autoplay-hover-pause={true}
                  arrows="inside"
                  bullets="inside"
                  bulletsPosition="right"
                  infinite-loop={true}
                  slide-per-page={1}
                  gap="2"
                >
                  {DATACAROUSEL.map((item, index) => {
                    return (
                      <bds-carousel-item key={index} bgColor={item.bgColor} theme={item.theme as Themes}>
                        <bds-grid padding="x-7" margin="y-6" alignItems="center">
                          <bds-grid xxs="2" direction="column">
                            <bds-illustration
                              type={item.illustration.type as IllustrationType}
                              name={item.illustration.name}
                            ></bds-illustration>
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
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
        <bds-grid xxs="6" padding="l-1">
          <bds-theme-provider theme="dark">
            <bds-paper elevation="none" border>
              <bds-grid padding="8" direction="column" gap="8">
                <bds-carousel
                  id="carousel"
                  autoplay={true}
                  autoplay-timeout="5000"
                  autoplay-hover-pause={true}
                  arrows="inside"
                  bullets="inside"
                  bulletsPosition="left"
                  infinite-loop={true}
                  slide-per-page={1}
                  gap="2"
                >
                  {DATACAROUSEL.map((item, index) => {
                    return (
                      <bds-carousel-item key={index} bgColor={item.bgColor} theme={item.theme as Themes}>
                        <bds-grid padding="x-7" margin="y-6" alignItems="center">
                          <bds-grid xxs="2" direction="column">
                            <bds-illustration
                              type={item.illustration.type as IllustrationType}
                              name={item.illustration.name}
                            ></bds-illustration>
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
                <bds-carousel
                  id="carousel"
                  autoplay={true}
                  autoplay-timeout="5000"
                  autoplay-hover-pause={true}
                  arrows="inside"
                  bullets="inside"
                  bulletsPosition="center"
                  infinite-loop={true}
                  slide-per-page={1}
                  gap="2"
                >
                  {DATACAROUSEL.map((item, index) => {
                    return (
                      <bds-carousel-item key={index} bgColor={item.bgColor} theme={item.theme as Themes}>
                        <bds-grid padding="x-7" margin="y-6" alignItems="center">
                          <bds-grid xxs="2" direction="column">
                            <bds-illustration
                              type={item.illustration.type as IllustrationType}
                              name={item.illustration.name}
                            ></bds-illustration>
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
                <bds-carousel
                  id="carousel"
                  autoplay={true}
                  autoplay-timeout="5000"
                  autoplay-hover-pause={true}
                  arrows="inside"
                  bullets="inside"
                  bulletsPosition="right"
                  infinite-loop={true}
                  slide-per-page={1}
                  gap="2"
                >
                  {DATACAROUSEL.map((item, index) => {
                    return (
                      <bds-carousel-item key={index} bgColor={item.bgColor} theme={item.theme as Themes}>
                        <bds-grid padding="x-7" margin="y-6" alignItems="center">
                          <bds-grid xxs="2" direction="column">
                            <bds-illustration
                              type={item.illustration.type as IllustrationType}
                              name={item.illustration.name}
                            ></bds-illustration>
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
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
      </bds-grid>
    );
  }
}
