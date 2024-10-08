import { background } from '@storybook/theming';
import React from 'react';

export default {
  title: 'Snippets/Carousel',
};

const title = 'Slide Title';
const paragraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum augue, pulvinar sit amet tincidunt non.';
const longParagraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum augue, pulvinar sit amet tincidunt non, bibendum eu est. Integer at tincidunt libero. Sed ut nibh et ex lacinia porta.';

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
    <bds-carousel bullets slide-per-page={3} gap="2">
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

const imageContent = {
  display: 'flex',
  borderRadius: '8px',
  overflow: 'hidden',
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
      >
        <bds-carousel-item>
          <bds-image
            style={imageContent}
            alt="Example of a image"
            width="100%"
            height="210px"
            object-fit="cover"
            src="https://picasum.photos/1920/1080"
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
    <bds-carousel auto-height bullets slide-per-page={2} gap="2">
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
      <bds-carousel arrows="none" gap="2">
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
