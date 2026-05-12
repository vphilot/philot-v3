import {
  animate,
  svg,
  stagger,
  onScroll,
  splitText,
  cubicBezier,
  type JSAnimation,
  createTimeline,
} from 'animejs'

/**
 * @todo turn this into a cxontroller
 * expose global hooks for events and handel reduced motion
 * me no english good ffs
 */
const baseEase = cubicBezier(0.7, 0.1, 0.5, 0.9)
const sharpEaseFront = cubicBezier(1, -0.023, 6, 2)
const sharpEaseBack = cubicBezier(1, -0.023, 6, 2)

const generateSelectors = (name: string) => {
  return {
    group: `[data-animate-group="${name}"]`,
    backgroud: `[data-background="${name}"]`,
    foreground: `[data-foreground="${name}"]`,
  }
}

const homeSelectors = generateSelectors('home')
const workSelectors = generateSelectors('work')
const blogSelectors = generateSelectors('blog')

const scrollContainer = '[data-animate="scroll-container"]'

const accentFrameRate = 16

export const setupAnimations = () => {
  const { words: textWords } = splitText('[data-animate-group="icon-text"]', {
    words: true,
  })

  const homeScrollAnimations: Array<JSAnimation> = [
    animate(svg.createDrawable(homeSelectors.backgroud), {
      draw: '0 1',
      ease: baseEase,
      autoplay: onScroll({
        container: scrollContainer,
        target: '[data-animate="icon-scroll-target-draw"]',
        sync: true,
        enter: 'bottom top',
        leave: 'bottom-=25% bottom-=25%',
      }),
    }),
    animate(svg.createDrawable(homeSelectors.foreground), {
      draw: '0 1',
      ease: baseEase,
      autoplay: onScroll({
        container: scrollContainer,
        target: '[data-animate="icon-scroll-target-draw"]',
        sync: true,
        enter: 'bottom-=15% top+=50%',
        leave: 'bottom-=25% bottom-=25%',
      }),
    }),
    animate(textWords, {
      y: { from: 50, to: 0 },
      opacity: { from: 0 },
      ease: baseEase,
      delay: stagger(250),
      autoplay: onScroll({
        container: scrollContainer,
        target: '[data-animate="icon-scroll-target-text"]',
        sync: true,
        enter: 'bottom-=25% top',
        leave: 'bottom-=25% bottom',
      }),
      alternate: true,
    }),
    animate('[data-animate-group="icon-text-link"]', {
      y: { from: 50, to: 0 },
      opacity: { from: 0 },
      ease: baseEase,
      delay: stagger(250),
      autoplay: onScroll({
        container: scrollContainer,
        target: '[data-animate="icon-scroll-target-text"]',
        sync: true,
        enter: 'bottom-=25% top+=50%',
        leave: 'bottom-=25% bottom+=50%',
      }),
      alternate: true,
    }),
    animate(svg.createDrawable(workSelectors.backgroud), {
      draw: '0 1',
      ease: baseEase,
      delay: stagger(100),

      autoplay: onScroll({
        container: scrollContainer,
        target: '[data-animate="icon-scroll-target-draw-work"]',
        sync: true,
        enter: 'bottom top-=50%',
        leave: 'bottom-=25% center-=25%',
      }),
    }),
    animate(svg.createDrawable(workSelectors.foreground), {
      draw: ['0 0', '0 1'],
      delay: stagger(250),
      autoplay: onScroll({
        container: scrollContainer,
        target: '[data-animate="icon-scroll-target-draw-work"]',
        sync: true,
        enter: 'bottom-=25% top',
        leave: 'bottom-=50% TOP',
      }),
    }),
    animate(svg.createDrawable(blogSelectors.foreground), {
      draw: ['0 0', '0 1'],
      transformOrigin: 'center',
      delay: stagger(250),
      autoplay: onScroll({
        container: scrollContainer,
        target: '[data-animate="icon-scroll-target-draw-blog"]',
        sync: true,
        enter: 'bottom-=25% top',
        leave: 'bottom-=50% center',
      }),
    }),
  ]

  const waveAnimation = animate('[data-animate-sup-icon-front-content]', {
    rotateZ: ['-3', '3', '-3', '3', '-3', '3'],
    // easing: baseEase,
    duration: 500,
    loopDelay: 2500,
    delay: 2500,
    autoplay: true,
    loop: true,
  })

  const highFiveTimeline = createTimeline({
    autoplay: false,
    frameRate: accentFrameRate,
    onBegin: (_) => waveAnimation.pause(),
  })

  highFiveTimeline
    .add(
      '[data-animate-sup-icon-front]',
      {
        keyframes: {
          '0%': { translateX: '0px' },
          '90%': { translateX: '-8px' },
          '100%': { translateX: '0px' },
        },
        duration: 1400,
        ease: sharpEaseFront,
      },
      0
    )
    .add(
      '[data-animate-sup-icon-back]',
      {
        keyframes: {
          '0%': { translateX: '-100px', opacity: 0 },
          '50%': { opacity: 100 },
          '80%': { translateX: '-120px' },
          '99%': { translateX: '0px' },
          '100%': { translateX: '-10px' },
        },
        duration: 1200,
        ease: sharpEaseBack,
      },
      0
    )
    .add(
      '[data-animate-sup-icon-back-content]',
      {
        keyframes: {
          '0%': { rotateZ: '-90deg' },
          '80%': { rotateZ: '-90deg' },
          '100%': { rotateZ: '0' },
        },
        duration: 1200,
        ease: sharpEaseBack,
      },
      0
    )
    .add(
      svg.createDrawable('[data-animate-group="fx-high-five"]'),
      {
        draw: ['0 0', '0 1', '1 1', '0 0'],
        keyframes: {
          '0%': { opacity: 0 },
          '2%': { opacity: 1 },
          // '95%': { translateY: '-10px' },
          '100%': { opacity: 1 },
        },
        delay: stagger(20),
        duration: 500,
        ease: baseEase,
      },
      1200
    )
    .add(
      '[data-animate-sup-heading], [data-animate-sup-text], [data-animate-sup-text-secondary], span, p',
      {
        keyframes: {
          '0%': { translateY: '0' },
          '1%': { translateY: '-20px' },
          '95%': { translateY: '-10px', rotateZ: stagger(['-10deg', '10deg']) },
          '100%': { translateY: '0px', rotateZ: '0deg' },
        },
        duration: 300,
        ease: sharpEaseBack,
      },
      stagger(20, { start: 1200 })
    )
    .add(
      '[data-animate-sup-container]',
      {
        keyframes: {
          '0%': { translateY: '0' },
          '1%': { translateY: '-8px' },
          '95%': { translateY: '-4px' },
          '100%': { translateY: '0px' },
        },
        duration: 300,
        ease: sharpEaseBack,
      },
      1200
    )
    .init()

  return {
    homeScrollAnimations,
    highFiveTimeline,
  }
}
