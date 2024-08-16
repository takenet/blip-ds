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

export const CarouselImage = () => {
  return (
    <bds-carousel
      arrows="inside"
      autoplay
      autoplay-hover-pause
      autoplay-timeout="5000"
      infinite-loop
      slide-per-page={1}
      gap="2"
    >
      <bds-carousel-item>
        <bds-paper
          width="100%"
          height="480px"
          clickable
          style={{
            background: `url(https://s3-alpha-sig.figma.com/img/d916/234b/b1da2bb6e26f425a983576939e819913?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dthCtfClrJ8opl8-0sRNaftPy5Jmzt~-MXJRflXoCFjSwPas1k786WxKy94RpUqhd56xf-opk-5HZP0lu2Yfzd7nsrs47Ix-pSoefYmNQAtGTNKmhyIgWp4fyuaUSr05HLt4FHj54T6E4bOolfXR7ZZ-MJ32m1QyUWR6QAb7bErwfwJ~FXDYOnhbUxWtR~b~taNDITC53BCzNh97jV6ipJPFu9KeaYIEbWus041MmbRYGbC3rfNVwQaMhNTuMucPHEMTqtXUDdcYf3Khtfm4raU~Q5qisUxwDqgKggV8lxYbjtHp6PQ0E-4UgmrqdwFsPzaVuJ8XnL8TfUrKDWPmGA__)`,
            backgroundPsition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></bds-paper>
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-paper
          width="100%"
          height="480px"
          clickable
          style={{
            background: `url(https://s3-alpha-sig.figma.com/img/dd2a/a3fb/a988fee910c1797dd18a77bf69159f55?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCdW3lBAOZwyYM0kfnNrfb7fsRpThnN85tGDDM7JXc6AFcgzikGZZ80nDuFDNg503BwPGlOA3r83h3AxQ6mMnQfKXLCq3iGtSxs1XjYDt68J40mb00iLCVzRimTAC6rIPeV0iT-kqJ1cUW5nKNhAMY-gYXil0Wo0qujSI55Qr7P3Mwi8G1hXh~uWS0w0vojOg4sVFMP2dC607vjDI~hvOwRuNyDApwJA5zr7K7BgGulAFZ7rl6wzE7i5hmDeN~Rhf18XQJy8AhsB3RYGzpsevQ4H~T3QNsalPgeOhgKajMpAqA4dzX2k~mmUKSY1LTBbpYT4FRIt3PQUmEKU86BPxw__)`,
            backgroundPsition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></bds-paper>
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-paper
          width="100%"
          height="480px"
          clickable
          style={{
            background: `url(https://s3-alpha-sig.figma.com/img/ac74/3f4e/1df87d6b8ae4bb2972a7964be26d437a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NEBY62fA~kPtbJ8xsUGZ8IQGBeorOG0219SqhO1rTsMLOhSc98iCWITHylkws4N2YgKaO6ubU5k~vpPgy3dBjbYL3iQfqq2QMGLsv4zjVtmVExtwdMcW64b6QFvFQovy0bqj5C1M92qobfCnAdzgjbESPmh8Ao8Z6Ozc2NCAlq4jnn9l~zcLTtwIHDx6rJ6njh1u6rEAicNbYWbcaFJYop2oyQhipBQRkyIAndkybpe~K-W6tAeiOx6Z877ikC~vI-fiJKPU81JyfYG1DaNun3kMc-0l5VaPz~~lPWt-gTh53KyCRPc0K-yU2inQvVMhaPwt5~JK-DHMHbAvj9Vlhg__)`,
            backgroundPsition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></bds-paper>
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
        infinite-loop
        slide-per-page={1}
        gap="2"
      >
        <bds-carousel-item>
          <bds-paper
            width="100%"
            height="240px"
            clickable
            style={{
              background: `url(https://s3-alpha-sig.figma.com/img/d916/234b/b1da2bb6e26f425a983576939e819913?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dthCtfClrJ8opl8-0sRNaftPy5Jmzt~-MXJRflXoCFjSwPas1k786WxKy94RpUqhd56xf-opk-5HZP0lu2Yfzd7nsrs47Ix-pSoefYmNQAtGTNKmhyIgWp4fyuaUSr05HLt4FHj54T6E4bOolfXR7ZZ-MJ32m1QyUWR6QAb7bErwfwJ~FXDYOnhbUxWtR~b~taNDITC53BCzNh97jV6ipJPFu9KeaYIEbWus041MmbRYGbC3rfNVwQaMhNTuMucPHEMTqtXUDdcYf3Khtfm4raU~Q5qisUxwDqgKggV8lxYbjtHp6PQ0E-4UgmrqdwFsPzaVuJ8XnL8TfUrKDWPmGA__)`,
              backgroundPsition: `center`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
            }}
          ></bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper
            width="100%"
            height="240px"
            clickable
            style={{
              background: `url(https://s3-alpha-sig.figma.com/img/dd2a/a3fb/a988fee910c1797dd18a77bf69159f55?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCdW3lBAOZwyYM0kfnNrfb7fsRpThnN85tGDDM7JXc6AFcgzikGZZ80nDuFDNg503BwPGlOA3r83h3AxQ6mMnQfKXLCq3iGtSxs1XjYDt68J40mb00iLCVzRimTAC6rIPeV0iT-kqJ1cUW5nKNhAMY-gYXil0Wo0qujSI55Qr7P3Mwi8G1hXh~uWS0w0vojOg4sVFMP2dC607vjDI~hvOwRuNyDApwJA5zr7K7BgGulAFZ7rl6wzE7i5hmDeN~Rhf18XQJy8AhsB3RYGzpsevQ4H~T3QNsalPgeOhgKajMpAqA4dzX2k~mmUKSY1LTBbpYT4FRIt3PQUmEKU86BPxw__)`,
              backgroundPsition: `center`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
            }}
          ></bds-paper>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-paper
            width="100%"
            height="240px"
            clickable
            style={{
              background: `url(https://s3-alpha-sig.figma.com/img/ac74/3f4e/1df87d6b8ae4bb2972a7964be26d437a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NEBY62fA~kPtbJ8xsUGZ8IQGBeorOG0219SqhO1rTsMLOhSc98iCWITHylkws4N2YgKaO6ubU5k~vpPgy3dBjbYL3iQfqq2QMGLsv4zjVtmVExtwdMcW64b6QFvFQovy0bqj5C1M92qobfCnAdzgjbESPmh8Ao8Z6Ozc2NCAlq4jnn9l~zcLTtwIHDx6rJ6njh1u6rEAicNbYWbcaFJYop2oyQhipBQRkyIAndkybpe~K-W6tAeiOx6Z877ikC~vI-fiJKPU81JyfYG1DaNun3kMc-0l5VaPz~~lPWt-gTh53KyCRPc0K-yU2inQvVMhaPwt5~JK-DHMHbAvj9Vlhg__)`,
              backgroundPsition: `center`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
            }}
          ></bds-paper>
        </bds-carousel-item>
      </bds-carousel>
    </bds-grid>
  );
};

export const CarouselImageDesciption = () => {
  return (
    <bds-carousel bullets slide-per-page={2} gap="2">
      <bds-carousel-item>
        <bds-paper width="100%" height="290px" clickable style={{ backgroundColor: '#CF0180' }}>
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
        <bds-paper
          width="100%"
          height="290px"
          clickable
          style={{
            background: `url(https://s3-alpha-sig.figma.com/img/d916/234b/b1da2bb6e26f425a983576939e819913?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dthCtfClrJ8opl8-0sRNaftPy5Jmzt~-MXJRflXoCFjSwPas1k786WxKy94RpUqhd56xf-opk-5HZP0lu2Yfzd7nsrs47Ix-pSoefYmNQAtGTNKmhyIgWp4fyuaUSr05HLt4FHj54T6E4bOolfXR7ZZ-MJ32m1QyUWR6QAb7bErwfwJ~FXDYOnhbUxWtR~b~taNDITC53BCzNh97jV6ipJPFu9KeaYIEbWus041MmbRYGbC3rfNVwQaMhNTuMucPHEMTqtXUDdcYf3Khtfm4raU~Q5qisUxwDqgKggV8lxYbjtHp6PQ0E-4UgmrqdwFsPzaVuJ8XnL8TfUrKDWPmGA__)`,
            backgroundPsition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></bds-paper>
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-paper width="100%" height="290px" clickable style={{ backgroundColor: '#5500FF' }}>
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
        <bds-paper
          width="100%"
          height="290px"
          clickable
          style={{
            background: `url(https://s3-alpha-sig.figma.com/img/dd2a/a3fb/a988fee910c1797dd18a77bf69159f55?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCdW3lBAOZwyYM0kfnNrfb7fsRpThnN85tGDDM7JXc6AFcgzikGZZ80nDuFDNg503BwPGlOA3r83h3AxQ6mMnQfKXLCq3iGtSxs1XjYDt68J40mb00iLCVzRimTAC6rIPeV0iT-kqJ1cUW5nKNhAMY-gYXil0Wo0qujSI55Qr7P3Mwi8G1hXh~uWS0w0vojOg4sVFMP2dC607vjDI~hvOwRuNyDApwJA5zr7K7BgGulAFZ7rl6wzE7i5hmDeN~Rhf18XQJy8AhsB3RYGzpsevQ4H~T3QNsalPgeOhgKajMpAqA4dzX2k~mmUKSY1LTBbpYT4FRIt3PQUmEKU86BPxw__)`,
            backgroundPsition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></bds-paper>
      </bds-carousel-item>
      <bds-carousel-item>
        <bds-paper width="100%" height="290px" clickable style={{ backgroundColor: '#238662' }}>
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
        <bds-paper
          width="100%"
          height="290px"
          clickable
          style={{
            background: `url(https://s3-alpha-sig.figma.com/img/ac74/3f4e/1df87d6b8ae4bb2972a7964be26d437a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NEBY62fA~kPtbJ8xsUGZ8IQGBeorOG0219SqhO1rTsMLOhSc98iCWITHylkws4N2YgKaO6ubU5k~vpPgy3dBjbYL3iQfqq2QMGLsv4zjVtmVExtwdMcW64b6QFvFQovy0bqj5C1M92qobfCnAdzgjbESPmh8Ao8Z6Ozc2NCAlq4jnn9l~zcLTtwIHDx6rJ6njh1u6rEAicNbYWbcaFJYop2oyQhipBQRkyIAndkybpe~K-W6tAeiOx6Z877ikC~vI-fiJKPU81JyfYG1DaNun3kMc-0l5VaPz~~lPWt-gTh53KyCRPc0K-yU2inQvVMhaPwt5~JK-DHMHbAvj9Vlhg__)`,
            backgroundPsition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></bds-paper>
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
            <bds-paper width="100%" clickable style={{ backgroundColor: '#CF0180' }}>
              <bds-theme-provider theme="dark" style={{ height: '100%', display: 'block' }}>
                <bds-grid direction="column" padding="3" gap="2" justify-content="center" style={{ height: '100%' }}>
                  <bds-typo variant="fs-20" bold="bold" margin={false}>
                    1 - {title}
                  </bds-typo>
                  <bds-typo variant="fs-16">{paragraph}</bds-typo>
                </bds-grid>
              </bds-theme-provider>
            </bds-paper>
            <bds-paper
              width="100%"
              height="240px"
              clickable
              style={{
                background: `url(https://s3-alpha-sig.figma.com/img/d916/234b/b1da2bb6e26f425a983576939e819913?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dthCtfClrJ8opl8-0sRNaftPy5Jmzt~-MXJRflXoCFjSwPas1k786WxKy94RpUqhd56xf-opk-5HZP0lu2Yfzd7nsrs47Ix-pSoefYmNQAtGTNKmhyIgWp4fyuaUSr05HLt4FHj54T6E4bOolfXR7ZZ-MJ32m1QyUWR6QAb7bErwfwJ~FXDYOnhbUxWtR~b~taNDITC53BCzNh97jV6ipJPFu9KeaYIEbWus041MmbRYGbC3rfNVwQaMhNTuMucPHEMTqtXUDdcYf3Khtfm4raU~Q5qisUxwDqgKggV8lxYbjtHp6PQ0E-4UgmrqdwFsPzaVuJ8XnL8TfUrKDWPmGA__)`,
                backgroundPsition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
              }}
            ></bds-paper>
          </bds-grid>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-grid direction="column" gap="2">
            <bds-paper width="100%" clickable style={{ backgroundColor: '#5500FF' }}>
              <bds-theme-provider theme="dark" style={{ height: '100%', display: 'block' }}>
                <bds-grid direction="column" padding="3" gap="2" justify-content="center" style={{ height: '100%' }}>
                  <bds-typo variant="fs-20" bold="bold" margin={false}>
                    2 - {title}
                  </bds-typo>
                  <bds-typo variant="fs-16">{paragraph}</bds-typo>
                </bds-grid>
              </bds-theme-provider>
            </bds-paper>
            <bds-paper
              width="100%"
              height="240px"
              clickable
              style={{
                background: `url(https://s3-alpha-sig.figma.com/img/dd2a/a3fb/a988fee910c1797dd18a77bf69159f55?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCdW3lBAOZwyYM0kfnNrfb7fsRpThnN85tGDDM7JXc6AFcgzikGZZ80nDuFDNg503BwPGlOA3r83h3AxQ6mMnQfKXLCq3iGtSxs1XjYDt68J40mb00iLCVzRimTAC6rIPeV0iT-kqJ1cUW5nKNhAMY-gYXil0Wo0qujSI55Qr7P3Mwi8G1hXh~uWS0w0vojOg4sVFMP2dC607vjDI~hvOwRuNyDApwJA5zr7K7BgGulAFZ7rl6wzE7i5hmDeN~Rhf18XQJy8AhsB3RYGzpsevQ4H~T3QNsalPgeOhgKajMpAqA4dzX2k~mmUKSY1LTBbpYT4FRIt3PQUmEKU86BPxw__)`,
                backgroundPsition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
              }}
            ></bds-paper>
          </bds-grid>
        </bds-carousel-item>
        <bds-carousel-item>
          <bds-grid direction="column" gap="2">
            <bds-paper width="100%" clickable style={{ backgroundColor: '#238662' }}>
              <bds-theme-provider theme="dark" style={{ height: '100%', display: 'block' }}>
                <bds-grid direction="column" padding="3" gap="2" justify-content="center" style={{ height: '100%' }}>
                  <bds-typo variant="fs-20" bold="bold" margin={false}>
                    3 - {title}
                  </bds-typo>
                  <bds-typo variant="fs-16">{paragraph}</bds-typo>
                </bds-grid>
              </bds-theme-provider>
            </bds-paper>
            <bds-paper
              width="100%"
              height="240px"
              clickable
              style={{
                background: `url(https://s3-alpha-sig.figma.com/img/ac74/3f4e/1df87d6b8ae4bb2972a7964be26d437a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NEBY62fA~kPtbJ8xsUGZ8IQGBeorOG0219SqhO1rTsMLOhSc98iCWITHylkws4N2YgKaO6ubU5k~vpPgy3dBjbYL3iQfqq2QMGLsv4zjVtmVExtwdMcW64b6QFvFQovy0bqj5C1M92qobfCnAdzgjbESPmh8Ao8Z6Ozc2NCAlq4jnn9l~zcLTtwIHDx6rJ6njh1u6rEAicNbYWbcaFJYop2oyQhipBQRkyIAndkybpe~K-W6tAeiOx6Z877ikC~vI-fiJKPU81JyfYG1DaNun3kMc-0l5VaPz~~lPWt-gTh53KyCRPc0K-yU2inQvVMhaPwt5~JK-DHMHbAvj9Vlhg__)`,
                backgroundPsition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
              }}
            ></bds-paper>
          </bds-grid>
        </bds-carousel-item>
      </bds-carousel>
    </bds-grid>
  );
};
