import { background } from '@storybook/theming';
import React from 'react';

export default {
  title: 'Snippets/Carousel',
};
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
const title = 'Título com até uma linha';
const paragraph =
  'Descrição com até duas linhas sobre o item destacado no carrosel respeitando as orientações de uso de content design.';
const longParagraph =
  'Descrição com até duas linhas sobre o item destacado no carrosel respeitando as orientações de uso de content design.';

const imageContent = {
  borderRadius: '8px',
  overflow: 'hidden',
};

export const BasicCarousel = () => {
  const el = document.getElementsByClassName('sb-story');
  for (var i = 0; i < el.length; i++) {
    el[i].style.width = '800px';
  }
  return (
    <bds-carousel>
      <bds-carousel-item>
        <bds-paper width="100%" bg-color="surface-0" elevation="none">
          <bds-grid align-items="center" flex-wrap="wrap">
            <bds-grid xxs="3" padding="3" direction="column">
              <bds-illustration type="spots" name="star"></bds-illustration>
            </bds-grid>
            <bds-grid xxs="9" direction="column" padding="2" gap="1">
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
          <bds-grid align-items="center" flex-wrap="wrap">
            <bds-grid xxs="3" padding="3" direction="column">
              <bds-illustration type="spots" name="check"></bds-illustration>
            </bds-grid>
            <bds-grid xxs="9" direction="column" padding="2" gap="1">
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
          <bds-grid align-items="center" flex-wrap="wrap">
            <bds-grid xxs="3" padding="3" direction="column">
              <bds-illustration type="spots" name="air-ballon"></bds-illustration>
            </bds-grid>
            <bds-grid xxs="9" direction="column" padding="2" gap="1">
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
          <bds-grid align-items="center" flex-wrap="wrap">
            <bds-grid xxs="3" padding="3" direction="column">
              <bds-illustration type="spots" name="analytics-satisfaction"></bds-illustration>
            </bds-grid>
            <bds-grid xxs="9" direction="column" padding="2" gap="1">
              <bds-typo variant="fs-20" bold="bold" margin={false}>
                4 - {title}
              </bds-typo>
              <bds-typo variant="fs-16">{paragraph}</bds-typo>
              <bds-button>Saiba mais</bds-button>
            </bds-grid>
          </bds-grid>
        </bds-paper>
      </bds-carousel-item>
    </bds-carousel>
  );
};

export const BasicCarouselMobile = () => {
  return (
    <bds-grid style={{ maxWidth: `320px` }}>
      <bds-carousel arrows="none" autoplay>
        <bds-carousel-item>
          <bds-paper width="100%" bg-color="surface-0" elevation="none">
            <bds-grid align-items="center" flex-wrap="wrap">
              <bds-grid xxs="12" padding="5" direction="column">
                <bds-illustration type="spots" name="star"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="12" direction="column" padding="2" gap="1">
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
            <bds-grid align-items="center" flex-wrap="wrap">
              <bds-grid xxs="12" padding="5" direction="column">
                <bds-illustration type="spots" name="check"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="12" direction="column" padding="2" gap="1">
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
            <bds-grid align-items="center" flex-wrap="wrap">
              <bds-grid xxs="12" padding="5" direction="column">
                <bds-illustration type="spots" name="air-ballon"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="12" direction="column" padding="2" gap="1">
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
            <bds-grid align-items="center" flex-wrap="wrap">
              <bds-grid xxs="12" padding="5" direction="column">
                <bds-illustration type="spots" name="analytics-satisfaction"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="12" direction="column" padding="2" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  4 - {title}
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

export const CarouselWithCard = () => {
  return (
    <bds-carousel bullets="outside" slide-per-page={3} gap="2">
      <bds-carousel-item>
        <bds-grid direction="column" padding="1">
          <bds-card width="100%" bg-color="surface-0" clickable>
            <bds-grid direction="column" padding="2" gap="2">
              <bds-icon theme="outline" size="xxx-large" name="heart" role="img" aria-label="heart"></bds-icon>
              <bds-typo variant="fs-20" bold="bold" margin={false}>
                1 - {title}
              </bds-typo>
              <bds-typo variant="fs-16">{longParagraph}</bds-typo>
            </bds-grid>
          </bds-card>
        </bds-grid>
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-grid direction="column" padding="1">
          <bds-card width="100%" bg-color="surface-0" clickable>
            <bds-grid direction="column" padding="2" gap="2">
              <bds-icon theme="outline" size="xxx-large" name="heart" role="img" aria-label="heart"></bds-icon>
              <bds-typo variant="fs-20" bold="bold" margin={false}>
                2 - {title}
              </bds-typo>
              <bds-typo variant="fs-16">{longParagraph}</bds-typo>
            </bds-grid>
          </bds-card>
        </bds-grid>
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-grid direction="column" padding="1">
          <bds-card width="100%" bg-color="surface-0" clickable>
            <bds-grid direction="column" padding="2" gap="2">
              <bds-icon theme="outline" size="xxx-large" name="heart" role="img" aria-label="heart"></bds-icon>
              <bds-typo variant="fs-20" bold="bold" margin={false}>
                3 - {title}
              </bds-typo>
              <bds-typo variant="fs-16">{longParagraph}</bds-typo>
            </bds-grid>
          </bds-card>
        </bds-grid>
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-grid direction="column" padding="1">
          <bds-card width="100%" bg-color="surface-0" clickable>
            <bds-grid direction="column" padding="2" gap="2">
              <bds-icon theme="outline" size="xxx-large" name="heart" role="img" aria-label="heart"></bds-icon>
              <bds-typo variant="fs-20" bold="bold" margin={false}>
                4 - {title}
              </bds-typo>
              <bds-typo variant="fs-16">{longParagraph}</bds-typo>
            </bds-grid>
          </bds-card>
        </bds-grid>
      </bds-carousel-item>
    </bds-carousel>
  );
};

export const CarouselWithCardMobile = () => {
  return (
    <bds-grid style={{ maxWidth: `320px` }}>
      <bds-carousel arrows="none" gap="2">
        <bds-carousel-item>
          <bds-grid direction="column" padding="1">
            <bds-card width="100%" bg-color="surface-0" clickable>
              <bds-grid direction="column" padding="2" gap="2">
                <bds-icon theme="outline" size="xxx-large" name="heart" role="img" aria-label="heart"></bds-icon>
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  1 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{longParagraph}</bds-typo>
              </bds-grid>
            </bds-card>
          </bds-grid>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-grid direction="column" padding="1">
            <bds-card width="100%" bg-color="surface-0" clickable>
              <bds-grid direction="column" padding="2" gap="2">
                <bds-icon theme="outline" size="xxx-large" name="heart" role="img" aria-label="heart"></bds-icon>
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  2 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{longParagraph}</bds-typo>
              </bds-grid>
            </bds-card>
          </bds-grid>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-grid direction="column" padding="1">
            <bds-card width="100%" bg-color="surface-0" clickable>
              <bds-grid direction="column" padding="2" gap="2">
                <bds-icon theme="outline" size="xxx-large" name="heart" role="img" aria-label="heart"></bds-icon>
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  3 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{longParagraph}</bds-typo>
              </bds-grid>
            </bds-card>
          </bds-grid>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-grid direction="column" padding="1">
            <bds-card width="100%" bg-color="surface-0" clickable>
              <bds-grid direction="column" padding="2" gap="2">
                <bds-icon theme="outline" size="xxx-large" name="heart" role="img" aria-label="heart"></bds-icon>
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  4 - {title}
                </bds-typo>
                <bds-typo variant="fs-16">{longParagraph}</bds-typo>
              </bds-grid>
            </bds-card>
          </bds-grid>
        </bds-carousel-item>
      </bds-carousel>
    </bds-grid>
  );
};

export const CarouselImage = () => {
  return (
    <bds-carousel
      arrows="inside"
      autoplay
      autoplay-hover-pause
      autoplay-timeout="5000"
      auto-height
      infinite-loop
      slide-per-page={1}
      gap="2"
      bullets="inside"
    >
      <bds-carousel-item>
        <bds-image
          style={imageContent}
          alt="Example of a image"
          width="100%"
          height="420px"
          object-fit="cover"
          src="https://picsum.photos/1920/1080"
        />
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-image
          style={imageContent}
          alt="Example of a image"
          width="100%"
          height="420px"
          object-fit="cover"
          src="https://picsum.photos/1920/1080"
        />
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-image
          style={imageContent}
          alt="Example of a image"
          width="100%"
          height="420px"
          object-fit="cover"
          src="https://picsum.photos/1920/1080"
        />
      </bds-carousel-item>
    </bds-carousel>
  );
};

export const CarouselImageMobile = () => {
  return (
    <bds-grid style={{ maxWidth: `320px` }}>
      <bds-carousel
        arrows="inside"
        autoplay
        autoplay-hover-pause
        autoplay-timeout="5000"
        auto-height
        infinite-loop
        slide-per-page={1}
        gap="2"
        bullets="inside"
      >
        <bds-carousel-item>
          <bds-image
            style={imageContent}
            alt="Example of a image"
            width="100%"
            height="210px"
            object-fit="cover"
            src="https://picsum.photos/1920/1080"
          />
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-image
            style={imageContent}
            alt="Example of a image"
            width="100%"
            height="210px"
            object-fit="cover"
            src="https://picsum.photos/1920/1080"
          />
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-image
            style={imageContent}
            alt="Example of a image"
            width="100%"
            height="210px"
            object-fit="cover"
            src="https://picsum.photos/1920/1080"
          />
        </bds-carousel-item>
      </bds-carousel>
    </bds-grid>
  );
};

export const CarouselImageDesciption = () => {
  return (
    <bds-carousel auto-height bullets="inside" bullets-position="right" slide-per-page={2} gap="2">
      <bds-carousel-item>
        <bds-paper width="100%" height="290px" clickable style={{ backgroundColor: 'var(--color-extended-pink)' }}>
          <bds-theme-provider theme="dark" style={{ height: '100%', display: 'block' }}>
            <bds-grid direction="column" padding="3" gap="2" justify-content="center" style={{ height: '100%' }}>
              <bds-typo variant="fs-20" bold="bold" margin={false}>
                1 - {title}
              </bds-typo>
              <bds-typo variant="fs-16">{paragraph}</bds-typo>
            </bds-grid>
          </bds-theme-provider>
        </bds-paper>
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-image
          style={imageContent}
          alt="Example of a image"
          width="100%"
          height="290px"
          object-fit="cover"
          src="https://picsum.photos/573/290"
        />
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-paper width="100%" height="290px" clickable style={{ backgroundColor: 'var(--color-extended-green)' }}>
          <bds-theme-provider theme="dark" style={{ height: '100%', display: 'block' }}>
            <bds-grid direction="column" padding="3" gap="2" justify-content="center" style={{ height: '100%' }}>
              <bds-typo variant="fs-20" bold="bold" margin={false}>
                2 - {title}
              </bds-typo>
              <bds-typo variant="fs-16">{paragraph}</bds-typo>
            </bds-grid>
          </bds-theme-provider>
        </bds-paper>
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-image
          style={imageContent}
          alt="Example of a image"
          width="100%"
          height="290px"
          object-fit="cover"
          src="https://picsum.photos/573/290"
        />
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-paper width="100%" height="290px" clickable style={{ backgroundColor: 'var(--color-extended-blue)' }}>
          <bds-theme-provider theme="dark" style={{ height: '100%', display: 'block' }}>
            <bds-grid direction="column" padding="3" gap="2" justify-content="center" style={{ height: '100%' }}>
              <bds-typo variant="fs-20" bold="bold" margin={false}>
                3 - {title}
              </bds-typo>
              <bds-typo variant="fs-16">{paragraph}</bds-typo>
            </bds-grid>
          </bds-theme-provider>
        </bds-paper>
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-image
          style={imageContent}
          alt="Example of a image"
          width="100%"
          height="290px"
          object-fit="cover"
          src="https://picsum.photos/573/290"
        />
      </bds-carousel-item>
    </bds-carousel>
  );
};

export const CarouselImageDesciptionMobile = () => {
  return (
    <bds-grid style={{ maxWidth: `320px` }}>
      <bds-carousel arrows="none" bullets="inside" gap="2">
        <bds-carousel-item>
          <bds-grid direction="column" gap="2">
            <bds-paper width="100%" clickable style={{ backgroundColor: 'var(--color-extended-pink)' }}>
              <bds-theme-provider theme="dark" style={{ height: '100%', display: 'block' }}>
                <bds-grid direction="column" padding="3" gap="2" justify-content="center" style={{ height: '100%' }}>
                  <bds-typo variant="fs-20" bold="bold" margin={false}>
                    1 - {title}
                  </bds-typo>
                  <bds-typo variant="fs-16">{paragraph}</bds-typo>
                </bds-grid>
              </bds-theme-provider>
            </bds-paper>
            <bds-image
              style={imageContent}
              alt="Example of a image"
              width="100%"
              height="180px"
              object-fit="cover"
              src="https://picsum.photos/573/180"
            />
          </bds-grid>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-grid direction="column" gap="2">
            <bds-paper width="100%" clickable style={{ backgroundColor: 'var(--color-extended-green)' }}>
              <bds-theme-provider theme="dark" style={{ height: '100%', display: 'block' }}>
                <bds-grid direction="column" padding="3" gap="2" justify-content="center" style={{ height: '100%' }}>
                  <bds-typo variant="fs-20" bold="bold" margin={false}>
                    2 - {title}
                  </bds-typo>
                  <bds-typo variant="fs-16">{paragraph}</bds-typo>
                </bds-grid>
              </bds-theme-provider>
            </bds-paper>
            <bds-image
              style={imageContent}
              alt="Example of a image"
              width="100%"
              height="180px"
              object-fit="cover"
              src="https://picsum.photos/573/180"
            />
          </bds-grid>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-grid direction="column" gap="2">
            <bds-paper width="100%" clickable style={{ backgroundColor: 'var(--color-extended-blue)' }}>
              <bds-theme-provider theme="dark" style={{ height: '100%', display: 'block' }}>
                <bds-grid direction="column" padding="3" gap="2" justify-content="center" style={{ height: '100%' }}>
                  <bds-typo variant="fs-20" bold="bold" margin={false}>
                    3 - {title}
                  </bds-typo>
                  <bds-typo variant="fs-16">{paragraph}</bds-typo>
                </bds-grid>
              </bds-theme-provider>
            </bds-paper>
            <bds-image
              style={imageContent}
              alt="Example of a image"
              width="100%"
              height="180px"
              object-fit="cover"
              src="https://picsum.photos/573/180"
            />
          </bds-grid>
        </bds-carousel-item>
      </bds-carousel>
    </bds-grid>
  );
};

export const CarouselProduct = () => {
  return (
    <bds-grid container>
      <bds-carousel arrows="none" slide-per-page={1} gap="2">
        <bds-carousel-item
          bg-image="https://blipmediastore.blip.ai/public-medias/Media_bdcb8c47-a74f-47d8-8b55-9a91a367fead?56983082-a993-4c40-9d78-d7a90416db97"
          bg-image-brightness={0.4}
          theme="dark"
        >
          <bds-grid align-items="center" flex-wrap="wrap" padding="2" style={{ position: 'relative' }}>
            <bds-grid xxs="8" direction="column" padding="2" gap="3">
              <bds-grid justify-content="space-between">
                <bds-illustration
                  type="brand"
                  name="blip-store-blue-white"
                  style={{ width: '100px' }}
                ></bds-illustration>
                <bds-chip-tag color="outline">Inteligência Artificial</bds-chip-tag>
              </bds-grid>
              <bds-grid direction="column" gap="2">
                <bds-typo variant="fs-32" bold="bold" margin={false}>
                  Título com até uma linha
                </bds-typo>
                <bds-typo variant="fs-16">
                  Descrição com até duas linhas sobre o item destacado no carrosel respeitando as orientações de uso de
                  content design.
                </bds-typo>
                <bds-typo variant="fs-16">Observações com até uma linha</bds-typo>
              </bds-grid>
              <bds-grid gap="2">
                <bds-button color="content" variant="solid">
                  Ação principal
                </bds-button>
                <bds-button color="content" variant="outline">
                  Ação secundária
                </bds-button>
              </bds-grid>
            </bds-grid>
            <bds-grid xxs="4" padding="3" direction="column"></bds-grid>
          </bds-grid>
        </bds-carousel-item>

        <bds-carousel-item bg-image="https://blipmediastore.blip.ai/public-medias/Media_ccaf8af6-eb96-4372-a4db-91f1180329be?26b68de3-5e74-4724-bc5b-edc3c640ce66">
          <bds-grid align-items="center" flex-wrap="wrap" padding="2" style={{ position: 'relative' }}>
            <bds-grid xxs="8" direction="column" padding="2" gap="3">
              <bds-grid justify-content="space-between">
                <bds-illustration
                  type="brand"
                  name="blip-store-blue-black"
                  style={{ width: '100px' }}
                ></bds-illustration>
                <bds-chip-tag color="outline">Inteligência Artificial</bds-chip-tag>
              </bds-grid>
              <bds-grid direction="column" gap="2">
                <bds-typo variant="fs-32" bold="bold" margin={false}>
                  Título com até uma linha
                </bds-typo>
                <bds-typo variant="fs-16">
                  Descrição com até duas linhas sobre o item destacado no carrosel respeitando as orientações de uso de
                  content design.
                </bds-typo>
                <bds-typo variant="fs-16">Observações com até uma linha</bds-typo>
              </bds-grid>
              <bds-grid gap="2">
                <bds-button color="content" variant="solid">
                  Ação principal
                </bds-button>
                <bds-button color="content" variant="outline">
                  Ação secundária
                </bds-button>
              </bds-grid>
            </bds-grid>
            <bds-grid xxs="4" padding="3" direction="column"></bds-grid>
          </bds-grid>
        </bds-carousel-item>

        <bds-carousel-item bg-color="linear-gradient(45deg, #590ABF, #05378E)" theme="dark">
          <bds-grid align-items="center" flex-wrap="wrap" padding="2" style={{ position: 'relative' }}>
            <bds-grid xxs="4" padding="3" justify-content="center">
              <bds-illustration name="agent-1" type="default" style={{ width: '200px' }} />
            </bds-grid>
            <bds-grid xxs="8" direction="column" padding="2" gap="3">
              <bds-grid justify-content="space-between">
                <bds-illustration
                  type="brand"
                  name="blip-store-blue-white"
                  style={{ width: '100px' }}
                ></bds-illustration>
                <bds-chip-tag color="outline">Inteligência Artificial</bds-chip-tag>
              </bds-grid>
              <bds-grid direction="column" gap="2">
                <bds-typo variant="fs-32" bold="bold" margin={false}>
                  Título com até uma linha
                </bds-typo>
                <bds-typo variant="fs-16">
                  Descrição com até duas linhas sobre o item destacado no carrosel respeitando as orientações de uso de
                  content design.
                </bds-typo>
                <bds-typo variant="fs-16">Observações com até uma linha</bds-typo>
              </bds-grid>
              <bds-grid gap="2">
                <bds-button color="content" variant="solid">
                  Ação principal
                </bds-button>
                <bds-button color="content" variant="outline">
                  Ação secundária
                </bds-button>
              </bds-grid>
            </bds-grid>
          </bds-grid>
        </bds-carousel-item>

        <bds-carousel-item bg-color="#B2DFFD">
          <bds-grid align-items="center" flex-wrap="wrap" height="100%" padding="2" style={{ position: 'relative' }}>
            <bds-grid xxs="4" padding="3" justify-content="center">
              <bds-illustration name="agent-1" type="default" style={{ width: '200px' }} />
            </bds-grid>
            <bds-grid xxs="8" direction="column" padding="2" gap="3">
              <bds-grid justify-content="space-between">
                <bds-illustration
                  type="brand"
                  name="blip-store-blue-black"
                  style={{ width: '100px' }}
                ></bds-illustration>
                <bds-chip-tag color="outline">Inteligência Artificial</bds-chip-tag>
              </bds-grid>
              <bds-grid direction="column" gap="2">
                <bds-typo variant="fs-32" bold="bold" margin={false}>
                  Título com até uma linha
                </bds-typo>
                <bds-typo variant="fs-16">
                  Descrição com até duas linhas sobre o item destacado no carrosel respeitando as orientações de uso de
                  content design.
                </bds-typo>
                <bds-typo variant="fs-16">Observações com até uma linha</bds-typo>
              </bds-grid>
              <bds-grid gap="2">
                <bds-button color="content" variant="solid">
                  Ação principal
                </bds-button>
                <bds-button color="content" variant="outline">
                  Ação secundária
                </bds-button>
              </bds-grid>
            </bds-grid>
          </bds-grid>
        </bds-carousel-item>
      </bds-carousel>
    </bds-grid>
  );
};

export const CarouselProductMobile = () => {
  return (
    <bds-grid style={{ maxWidth: `320px` }}>
      <bds-carousel arrows="none" slide-per-page={1} gap="2">
        <bds-carousel-item
          bg-image="https://blipmediastore.blip.ai/public-medias/Media_bdcb8c47-a74f-47d8-8b55-9a91a367fead?56983082-a993-4c40-9d78-d7a90416db97"
          bg-image-brightness={0.4}
          theme="dark"
        >
          <bds-grid
            justify-content="center"
            flex-wrap="wrap"
            height="100%"
            style={{ position: 'relative' }}
            direction="column"
            gap="3"
            padding="4"
          >
            <bds-grid justify-content="space-between">
              <bds-illustration type="brand" name="blip-store-blue-white" style={{ width: '100px' }}></bds-illustration>
              <bds-chip-tag color="outline">Inteligência Artificial</bds-chip-tag>
            </bds-grid>
            <bds-grid direction="column" gap="2">
              <bds-typo variant="fs-20" bold="bold" margin={false}>
                {title}
              </bds-typo>
              <bds-typo variant="fs-16">{paragraph}</bds-typo>
              <bds-typo variant="fs-16">Observações com até uma linha</bds-typo>
            </bds-grid>
            <bds-grid gap="2">
              <bds-button color="content" variant="solid">
                Ação principal
              </bds-button>
              <bds-button color="content" variant="outline">
                Ação secundária
              </bds-button>
            </bds-grid>
          </bds-grid>
        </bds-carousel-item>

        <bds-carousel-item bg-image="https://blipmediastore.blip.ai/public-medias/Media_ccaf8af6-eb96-4372-a4db-91f1180329be?26b68de3-5e74-4724-bc5b-edc3c640ce66">
          <bds-grid
            justify-content="center"
            flex-wrap="wrap"
            height="100%"
            style={{ position: 'relative' }}
            direction="column"
            gap="3"
            padding="4"
          >
            <bds-grid justify-content="space-between">
              <bds-illustration type="brand" name="blip-store-blue-black" style={{ width: '100px' }}></bds-illustration>
              <bds-chip-tag color="outline">Inteligência Artificial</bds-chip-tag>
            </bds-grid>
            <bds-grid direction="column" gap="2">
              <bds-typo variant="fs-20" bold="bold" margin={false}>
                {title}
              </bds-typo>
              <bds-typo variant="fs-16">{paragraph}</bds-typo>
              <bds-typo variant="fs-16">Observações com até uma linha</bds-typo>
            </bds-grid>
            <bds-grid gap="2">
              <bds-button color="content" variant="solid">
                Ação principal
              </bds-button>
              <bds-button color="content" variant="outline">
                Ação secundária
              </bds-button>
            </bds-grid>
          </bds-grid>
        </bds-carousel-item>

        <bds-carousel-item bg-color="linear-gradient(45deg, #590ABF, #05378E)" theme="dark">
          <bds-grid
            justify-content="center"
            flex-wrap="wrap"
            height="100%"
            style={{ position: 'relative' }}
            direction="column"
            gap="3"
            padding="4"
          >
            <bds-grid justify-content="space-between">
              <bds-illustration type="brand" name="blip-store-blue-white" style={{ width: '100px' }}></bds-illustration>
              <bds-chip-tag color="outline">Inteligência Artificial</bds-chip-tag>
            </bds-grid>
            <bds-grid direction="column" gap="2">
              <bds-grid gap="3">
                <bds-illustration name="agent-1" type="default" style={{ width: '50px' }} />
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  {title}
                </bds-typo>
              </bds-grid>
              <bds-typo variant="fs-16">{paragraph}</bds-typo>
              <bds-typo variant="fs-16">Observações com até uma linha</bds-typo>
            </bds-grid>
            <bds-grid gap="2">
              <bds-button color="content" variant="solid">
                Ação principal
              </bds-button>
              <bds-button color="content" variant="outline">
                Ação secundária
              </bds-button>
            </bds-grid>
          </bds-grid>
        </bds-carousel-item>

        <bds-carousel-item bg-color="#B2DFFD">
          <bds-grid
            justify-content="center"
            flex-wrap="wrap"
            height="100%"
            style={{ position: 'relative' }}
            direction="column"
            gap="3"
            padding="4"
          >
            <bds-grid justify-content="space-between">
              <bds-illustration type="brand" name="blip-store-blue-black" style={{ width: '100px' }}></bds-illustration>
              <bds-chip-tag color="outline">Inteligência Artificial</bds-chip-tag>
            </bds-grid>
            <bds-grid direction="column" gap="2">
              <bds-grid gap="3">
                <bds-illustration name="agent-1" type="default" style={{ width: '50px' }} />
                <bds-typo variant="fs-20" bold="bold" margin={false}>
                  {title}
                </bds-typo>
              </bds-grid>
              <bds-typo variant="fs-16">{paragraph}</bds-typo>
              <bds-typo variant="fs-16">Observações com até uma linha</bds-typo>
            </bds-grid>
            <bds-grid gap="2">
              <bds-button color="content" variant="solid">
                Ação principal
              </bds-button>
              <bds-button color="content" variant="outline">
                Ação secundária
              </bds-button>
            </bds-grid>
          </bds-grid>
        </bds-carousel-item>
      </bds-carousel>
    </bds-grid>
  );
};

export const CarouselBulletsExamples = () => {
  return (
    <bds-grid xxs="12" padding="x-2" flex-wrap="wrap">
      <bds-grid xxs="6" padding="6" direction="column" gap="6">
        <bds-carousel arrows="inside" bullets="inside" bullets-position="left" infinite-loop={false} slide-per-page={1}>
          {DATACAROUSEL.map((item, index) => {
            return (
              <bds-carousel-item key={index} bg-color={item.bgColor} theme={item.theme}>
                <bds-grid padding="x-7" margin="y-6" align-items="center">
                  <bds-grid xxs="3" direction="column">
                    <bds-illustration type={item.illustration.type} name={item.illustration.name}></bds-illustration>
                  </bds-grid>
                  <bds-grid xxs="9" direction="column" gap="1">
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
          arrows="inside"
          bullets="inside"
          bullets-position="center"
          infinite-loop={false}
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
                  <bds-grid xxs="9" direction="column" gap="1">
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
          arrows="inside"
          bullets="inside"
          bullets-position="right"
          infinite-loop={false}
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
                  <bds-grid xxs="9" direction="column" gap="1">
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
      <bds-grid xxs="6" padding="6" direction="column" gap="6">
        <bds-carousel
          arrows="inside"
          bullets="outside"
          bullets-position="left"
          infinite-loop={false}
          slide-per-page={1}
          gap="2"
        >
          {DATACAROUSEL.map((item, index) => {
            return (
              <bds-carousel-item key={index} bg-color={item.bgColor} theme={item.theme}>
                <bds-grid padding="x-7" margin="y-5" align-items="center">
                  <bds-grid xxs="3" direction="column">
                    <bds-illustration type={item.illustration.type} name={item.illustration.name}></bds-illustration>
                  </bds-grid>
                  <bds-grid xxs="9" direction="column" gap="1">
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
          arrows="inside"
          bullets="outside"
          bullets-position="center"
          infinite-loop={false}
          slide-per-page={1}
          gap="2"
        >
          {DATACAROUSEL.map((item, index) => {
            return (
              <bds-carousel-item key={index} bg-color={item.bgColor} theme={item.theme}>
                <bds-grid padding="x-7" margin="y-5" align-items="center">
                  <bds-grid xxs="3" direction="column">
                    <bds-illustration type={item.illustration.type} name={item.illustration.name}></bds-illustration>
                  </bds-grid>
                  <bds-grid xxs="9" direction="column" gap="1">
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
          arrows="inside"
          bullets="outside"
          bullets-position="right"
          infinite-loop={false}
          slide-per-page={1}
          gap="2"
        >
          {DATACAROUSEL.map((item, index) => {
            return (
              <bds-carousel-item key={index} bg-color={item.bgColor} theme={item.theme}>
                <bds-grid padding="x-7" margin="y-5" align-items="center">
                  <bds-grid xxs="3" direction="column">
                    <bds-illustration type={item.illustration.type} name={item.illustration.name}></bds-illustration>
                  </bds-grid>
                  <bds-grid xxs="9" direction="column" gap="1">
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
    </bds-grid>
  );
};
