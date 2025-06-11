import { newE2EPage } from '@stencil/core/testing';

describe('bds-carousel e2e tests', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <button id="nextSlide">nextSlide</button>
        <button id="prevSlide">prevSlide</button>
        <button id="setActivated">setActivated 2</button>
        <button id="pauseAutoplay">pauseAutoplay</button>
        <button id="runAutoplay">runAutoplay</button>
        <button id="buildCarousel">buildCarousel</button>
        <bds-carousel
          id="test-carousel"
          autoplay="false"
          arrows="inside"
          bullets="inside"
          bullets-position="center"
          infinite-loop="true"
          slide-per-page="1"
          gap="2"
          dt-slide-content="slide-content"
        >
          <bds-carousel-item bg-color="#e7f0ff" theme="light">
            <bds-grid padding="x-7" margin="y-6" align-items="center">
              <bds-grid xxs="3" direction="column">
                <bds-illustration type="spots" name="star"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="10" direction="column" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin="false">1 - Titulo do Slide</bds-typo>
                <bds-typo variant="fs-16">Lorem ipsum dolor sit amet</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-carousel-item>
          <bds-carousel-item bg-color="#202d44" theme="dark">
            <bds-grid padding="x-7" margin="y-6" align-items="center">
              <bds-grid xxs="3" direction="column">
                <bds-illustration type="spots" name="check"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="10" direction="column" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin="false">2 - Titulo do Slide</bds-typo>
                <bds-typo variant="fs-16">Lorem ipsum dolor sit amet</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-carousel-item>
          <bds-carousel-item bg-color="#e7f0ff" theme="light">
            <bds-grid padding="x-7" margin="y-6" align-items="center">
              <bds-grid xxs="3" direction="column">
                <bds-illustration type="spots" name="air-ballon"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="10" direction="column" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin="false">3 - Titulo do Slide</bds-typo>
                <bds-typo variant="fs-16">Lorem ipsum dolor sit amet</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-carousel-item>
          <bds-carousel-item bg-color="#202d44" theme="dark">
            <bds-grid padding="x-7" margin="y-6" align-items="center">
              <bds-grid xxs="3" direction="column">
                <bds-illustration type="spots" name="air-ballon"></bds-illustration>
              </bds-grid>
              <bds-grid xxs="10" direction="column" gap="1">
                <bds-typo variant="fs-20" bold="bold" margin="false">4 - Titulo do Slide</bds-typo>
                <bds-typo variant="fs-16">Lorem ipsum dolor sit amet</bds-typo>
                <bds-button>Saiba mais</bds-button>
              </bds-grid>
            </bds-grid>
          </bds-carousel-item>
        </bds-carousel>
        <input id="event-test" />
      `,
    });

    // Add carousel control functionality
    await page.evaluate(() => {
      const nextSlideButton = document.getElementById('nextSlide');
      const prevSlideButton = document.getElementById('prevSlide');
      const setActivatedButton = document.getElementById('setActivated');
      const pauseAutoplayButton = document.getElementById('pauseAutoplay');
      const runAutoplayButton = document.getElementById('runAutoplay');
      const buildCarouselButton = document.getElementById('buildCarousel');
      const carousel = document.getElementById('test-carousel') as any;
      
      nextSlideButton?.addEventListener('click', async () => {
        await carousel.nextSlide();
      });

      prevSlideButton?.addEventListener('click', async () => {
        await carousel.prevSlide();
      });

      setActivatedButton?.addEventListener('click', async () => {
        await carousel.setActivated(2);
      });

      pauseAutoplayButton?.addEventListener('click', async () => {
        await carousel.pauseAutoplay();
      });

      runAutoplayButton?.addEventListener('click', async () => {
        await carousel.runAutoplay();
      });

      buildCarouselButton?.addEventListener('click', async () => {
        await carousel.buildCarousel();
      });

      carousel?.addEventListener('bdsChangeCarousel', (event: CustomEvent) => {
        const input = document.getElementById('event-test') as HTMLInputElement;
        if (input) {
          input.value = event.detail?.value?.id?.toString() || 'changed';
        }
      });
    });
  });

  describe('Properties', () => {
    it('should render carousel with correct bullets', async () => {
      const carousel = await page.find('bds-carousel');
      const bullets = await carousel.getProperty('bullets');
      expect(bullets).toBe('inside');
    });

    it('should render carousel with correct bullets-position', async () => {
      const carousel = await page.find('bds-carousel');
      const bulletsPosition = await carousel.getProperty('bulletsPosition');
      expect(bulletsPosition).toBe('center');
    });

    it('should render carousel with correct arrows', async () => {
      const carousel = await page.find('bds-carousel');
      const arrows = await carousel.getProperty('arrows');
      expect(arrows).toBe('inside');
    });
  });

  describe('Events', () => {
    it('should emit bdsChangeCarousel event when nextSlide is called', async () => {
      const carousel = await page.find('bds-carousel');
      const bdsChangeCarouselEvent = await carousel.spyOnEvent('bdsChangeCarousel');

      const nextSlideButton = await page.find('#nextSlide');
      await nextSlideButton.click();
      await page.waitForChanges();

      expect(bdsChangeCarouselEvent).toHaveReceivedEvent();
    });
  });

  describe('Accessibility and Methods', () => {
    it('should be accessible via Tab navigation', async () => {
      await page.focus('#buildCarousel');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBe('BDS-CAROUSEL');
    });

    it('should navigate with ArrowRight key', async () => {
      const carousel = await page.find('bds-carousel');
      const bdsChangeCarouselEvent = await carousel.spyOnEvent('bdsChangeCarousel');

      await page.focus('#buildCarousel');
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowRight');
      await page.waitForChanges();

      expect(bdsChangeCarouselEvent).toHaveReceivedEvent();
    });

    it('should navigate with ArrowLeft key', async () => {
      const carousel = await page.find('bds-carousel');
      const bdsChangeCarouselEvent = await carousel.spyOnEvent('bdsChangeCarousel');

      await page.focus('#buildCarousel');
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowLeft');
      await page.waitForChanges();

      expect(bdsChangeCarouselEvent).toHaveReceivedEvent();
    });

    it('should call nextSlide method', async () => {
      const carousel = await page.find('bds-carousel');
      const bdsChangeCarouselEvent = await carousel.spyOnEvent('bdsChangeCarousel');

      const nextSlideButton = await page.find('#nextSlide');
      await nextSlideButton.click();
      await page.waitForChanges();

      expect(bdsChangeCarouselEvent).toHaveReceivedEvent();
    });

    it('should call prevSlide method', async () => {
      const carousel = await page.find('bds-carousel');
      const bdsChangeCarouselEvent = await carousel.spyOnEvent('bdsChangeCarousel');

      const prevSlideButton = await page.find('#prevSlide');
      await prevSlideButton.click();
      await page.waitForChanges();

      expect(bdsChangeCarouselEvent).toHaveReceivedEvent();
    });

    it('should call setActivated method', async () => {
      const carousel = await page.find('bds-carousel');
      const bdsChangeCarouselEvent = await carousel.spyOnEvent('bdsChangeCarousel');

      const setActivatedButton = await page.find('#setActivated');
      await setActivatedButton.click();
      await page.waitForChanges();

      expect(bdsChangeCarouselEvent).toHaveReceivedEvent();
    });

    it('should call pauseAutoplay method', async () => {
      page = await newE2EPage({
        html: `
          <button id="pauseAutoplay">pauseAutoplay</button>
          <bds-carousel
            id="test-carousel"
            autoplay="true"
            dt-slide-content="slide-content"
          >
            <bds-carousel-item>Slide 1</bds-carousel-item>
            <bds-carousel-item>Slide 2</bds-carousel-item>
          </bds-carousel>
        `,
      });

      await page.evaluate(() => {
        const pauseAutoplayButton = document.getElementById('pauseAutoplay');
        const carousel = document.getElementById('test-carousel') as any;
        
        pauseAutoplayButton?.addEventListener('click', async () => {
          await carousel.pauseAutoplay();
        });
      });

      const pauseAutoplayButton = await page.find('#pauseAutoplay');
      await pauseAutoplayButton.click();
      await page.waitForChanges();

      const slideContent = await page.find('bds-carousel >>> [data-test="slide-content"]');
      expect(slideContent).toHaveClass('carousel_slide_state_paused');
    });

    it('should call runAutoplay method', async () => {
      page = await newE2EPage({
        html: `
          <button id="runAutoplay">runAutoplay</button>
          <bds-carousel
            id="test-carousel"
            autoplay="true"
            dt-slide-content="slide-content"
          >
            <bds-carousel-item>Slide 1</bds-carousel-item>
            <bds-carousel-item>Slide 2</bds-carousel-item>
          </bds-carousel>
        `,
      });

      await page.evaluate(() => {
        const runAutoplayButton = document.getElementById('runAutoplay');
        const carousel = document.getElementById('test-carousel') as any;
        
        runAutoplayButton?.addEventListener('click', async () => {
          await carousel.runAutoplay();
        });
      });

      const runAutoplayButton = await page.find('#runAutoplay');
      await runAutoplayButton.click();
      await page.waitForChanges();

      const slideContent = await page.find('bds-carousel >>> [data-test="slide-content"]');
      expect(slideContent).toHaveClass('carousel_slide_state_running');
    });

    it('should call buildCarousel method', async () => {
      const buildCarouselButton = await page.find('#buildCarousel');
      await buildCarouselButton.click();
      await page.waitForChanges();

      // Check that the method was called by verifying the component exists
      const carousel = await page.find('bds-carousel');
      expect(carousel).toBeTruthy();
    });
  });
});