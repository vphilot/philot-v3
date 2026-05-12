<template>
  <main
    data-animate="scroll-container"
    class="relative h-screen overflow-y-auto bg-gray-50"
  >
    <h1 class="sr-only">Home</h1>
    <NavBar />
    <button
      class="fixed top-0 left-0 cursor-pointer"
      @click="devMode = !devMode"
    >
      toggle dev mode
    </button>
    <section
      class="grid grid-cols-4 *:border *:border-b-0 *:not-last:border-r-0"
    >
      <div class="col-span-4 p-8 xl:col-span-2">
        <div class="flex gap-x-2" data-animate-sup-container>
          <h2 class="text-h1" data-animate-sup-heading>sup</h2>
          <div class="relative w-36">
            <AnimatableEffectHighFive
              class="pointer-events-none absolute -top-1 left-2 size-20 scale-150 rotate-45 stroke-black stroke-3"
              :class="devMode ? 'outline-2 outline-fuchsia-300' : ''"
            />
            <div data-animate-sup-icon-front class="cursor-pointer">
              <!-- rotate inner block and animate parent to avoid translateX direction issue -->
              <Icon
                name="philot-icon:supfront"
                data-animate-sup-icon-front-content
                class="absolute left-6 size-16 -rotate-45 fill-black"
                :class="devMode ? 'outline-2 outline-fuchsia-300' : ''"
                mode="svg"
                @click="handleHighFive"
              />
            </div>
            <div
              data-animate-sup-icon-back
              class="pointer-events-none opacity-0"
            >
              <Icon
                data-animate-sup-icon-back-content
                name="philot-icon:supback"
                class="absolute left-0 size-16 rotate-45 fill-black"
                :class="devMode ? 'outline-2 outline-fuchsia-300' : ''"
                mode="svg"
              />
            </div>
          </div>
        </div>

        <p class="text-body-large text-balance" data-animate-sup-text>
          I build high-impact web applications for a living, focusing on
          delivering solutions that are not only effective but also accessible
          and inclusive. I thrive in environments that foster collaboration and
          mutual trust.
        </p>
      </div>
      <div class="col-span-4 p-8 xl:col-span-2">
        <p class="text-body-large mb-8">
          Currently leading Frontend Engineering for AI & Security Insights at
          RBC.
        </p>

        <NuxtLink to="/work" class="group nuxt-link-as-button mb-4">
          <div class="nuxt-link-as-button-transition" />
          <Icon name="philot-icon:work" class="size-8" mode="svg" />
          <span class="text-ui-large w-full text-wrap">
            Experience and résumé
          </span>
        </NuxtLink>

        <NuxtLink to="/blog" class="group nuxt-link-as-button">
          <div class="nuxt-link-as-button-transition" />
          <Icon name="philot-icon:blog" class="size-8" mode="svg" />
          <span class="text-ui-large"> I also write sometimes</span>
        </NuxtLink>
      </div>
    </section>

    <!-- motto & stack -->
    <section
      class="grid grid-cols-4 *:border *:border-b-0 *:not-last:border-r-0"
    >
      <div class="col-span-4 xl:col-span-2">
        <div class="p-8">
          <h2 class="text-h1">Motto</h2>
          <ul
            class="text-body-large mb-8 list-inside list-image-[url(/icons/star-bullet.svg)] text-balance"
          >
            <li>All work, no BS <sup>1</sup></li>
            <li>We're kind</li>
            <li>We value each other's time <sup>2</sup></li>
            <li>We're proud of what we do <sup>3</sup></li>
          </ul>

          <button
            class="nuxt-link-as-button group"
            aria-label="expand motto explanation drawer"
            @click="isMottoDrawerExpanded = !isMottoDrawerExpanded"
          >
            <div class="nuxt-link-as-button-transition" />
            <Icon
              name="philot-icon:more"
              class="size-8 stroke-black"
              mode="svg"
            />
            <span class="text-ui-large">More</span>
          </button>
        </div>
        <div v-if="isMottoDrawerExpanded" class="bg-black p-8 *:mb-8">
          <p class="text-body-large text-white">
            <sup>1</sup> I like to challenge assumptions and prevent business
            dynamics from compromising usability, accessibility, or seamlessness
            - aspects I take very seriously.
          </p>

          <p class="text-body-large text-white">
            <sup>2</sup> I love biking, painting, and casual gaming, and I'm a
            big fan of being outdoors. While I recognize that 'crunch' can be
            part of the job, I'm a firm believer that prioritizing what's most
            important helps me find space to recharge effectively and bring my
            best self to new, bigger challenges.
          </p>
          <p class="text-body-large text-white">
            <sup>3</sup> I don't engage in implementing dark patterns or
            features that compromise security, privacy, and accessibility. I
            work with designers and other engineers, not against them.
          </p>
        </div>
      </div>
      <div class="col-span-4 flex flex-col p-8 xl:col-span-2">
        <div>
          <h2 class="text-h1">Stack</h2>
          <ul
            class="text-body-large mb-8 list-inside list-image-[url(/icons/star-bullet.svg)] text-balance"
          >
            <li>Typescript</li>
            <li>Nuxt, Vue</li>
            <li>Tailwind <span class="text-red-500">improve this</span></li>
          </ul>
        </div>
        <div class="relative flex">
          <div
            data-animate="icon-scroll-target-draw"
            class="absolute bottom-0 left-0 h-full w-2"
            :class="devMode ? 'bg-blue-300' : ''"
          />
          <div
            data-animate="icon-scroll-target-text"
            class="absolute top-1/2 left-2 h-1/4 w-2"
            :class="devMode ? 'bg-orange-300' : ''"
          />
          <AnimatableIconHome
            class="box-border h-auto w-1/2 shrink-0 stroke-black [stroke-linecap:square] [stroke-linejoin:miter] *:data-background:stroke-gray-300 *:data-background:stroke-[0.25]"
          />
          <div class="relative flex flex-1 flex-col justify-end gap-y-2 px-8">
            <span class="text-ui-base" data-animate-group="icon-text">
              I designed those icons &#9786;
            </span>
            <NuxtLink
              class="text-ui-base self-end transition-opacity"
              to="/blog"
              data-animate-group="icon-text-link"
            >
              <span class="underline decoration-1 underline-offset-4">
                learn more</span
              >
              <span class="ml-2">&#8594;</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- background -->
    <section
      class="grid grid-cols-4 *:border *:border-b-0 *:not-last:border-r-0"
    >
      <div class="relative col-span-4 min-h-96 bg-gray-100 p-8 xl:col-span-2">
        <AnimatableIconWork
          class="absolute -top-1 -left-1 box-border h-[calc(100%+(--spacing(2)))] w-auto shrink-0 stroke-black [stroke-linecap:square] [stroke-linejoin:miter] *:data-background:stroke-gray-300 *:data-background:stroke-[0.15]"
        />
        <div
          data-animate="icon-scroll-target-draw-work"
          class="absolute top-1/2 left-0 h-1/2 w-2"
          :class="devMode ? 'bg-green-300' : ''"
        />
      </div>
      <div class="col-span-4 p-8 xl:col-span-2">
        <h2 class="text-h1">Background</h2>
        <p class="text-body-large text-balance">
          I started building websites for friends and family with Flash when I
          was 17, as a self-taught ActionScript 2 developer. I kept flirting
          with Web technologies as a hobby over the years while investing in a
          career in Architecture - until I decided it was time to pursue doing
          what I love full-time.
        </p>
      </div>
    </section>

    <!-- uses -->
    <section class="grid grid-cols-4 border-t">
      <div class="relative col-span-4 p-8 xl:col-span-2">
        <h2 class="text-h1">uses</h2>
        <ul
          class="text-body-large mb-8 list-inside list-image-[url(/icons/star-bullet.svg)] text-balance"
        >
          <li>
            <ExternalLink href="https://code.visualstudio.com/" inline>
              VSCode
            </ExternalLink>
            with
            <ExternalLink href="https://draculatheme.com/" inline>
              Dracula Theme
            </ExternalLink>
            and
            <ExternalLink
              href="https://fonts.google.com/specimen/JetBrains+Mono"
              inline
            >
              JetBrains Mono
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://iterm2.com/" inline>
              iTerm2
            </ExternalLink>
            with
            <ExternalLink href="https://github.com/ohmyzsh/ohmyzsh" inline>
              Oh My Zsh
            </ExternalLink>
            and
            <ExternalLink
              href="https://github.com/romkatv/powerlevel10k"
              inline
            >
              Powerlevel10k
            </ExternalLink>
          </li>
          <li>
            If I had to pick a favourite library, I'd go with
            <ExternalLink href="https://github.com/statelyai/xstate" inline>
              XState
            </ExternalLink>
          </li>
          <li>
            Safari for integration and convenience, Chrome for development. RIP
            <ExternalLink
              href="https://en.wikipedia.org/wiki/Arc_(web_browser)"
              inline
            >
              Arc
            </ExternalLink>
          </li>
          <li>
            Driving a 16” M1 Max at work and a 13” Air M3 at home. Can't live
            without
            <ExternalLink href="https://www.raycast.com/" inline>
              Raycast
            </ExternalLink>
          </li>
        </ul>
      </div>
      <div class="relative col-span-4 bg-gray-100 p-8 xl:col-span-2">
        <div
          class="absolute top-0 left-0 box-border h-auto w-auto min-w-full shrink-0 xl:h-[calc(100%+(--spacing(2)))]"
        >
          <AnimatableIconBlog
            class="h-full w-full stroke-black [stroke-linecap:butt] [stroke-linejoin:miter] *:data-background:stroke-gray-300 *:data-background:stroke-[0.15]"
          />
        </div>
        <div
          data-animate="icon-scroll-target-draw-blog"
          class="absolute top-0 left-0 h-full w-2"
          :class="devMode ? 'bg-green-300' : ''"
        />
      </div>
    </section>
    <section class="grid grid-cols-4 border-t">
      <div class="relative col-span-4 p-8">
        <h2 class="text-h2">uses</h2>
        <ul
          class="text-body-large mb-8 list-inside list-image-[url(/icons/star-bullet.svg)] text-balance"
        >
          <li>
            Brazilian Canadian, born and raised in a
            <ExternalLink
              href="https://www.google.com/maps/place/São+Pedro+da+Serra,+Nova+Friburgo+-+State+of+Rio+de+Janeiro,+28616-155,+Brazil/@-22.3190335,-42.3577406,21328m/data=!3m1!1e3!4m6!3m5!1s0x97ecc6bc6c0657:0x7625000c6484f178!8m2!3d-22.3169831!4d-42.3306174!16s%2Fg%2F1tjjqlc2?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
              inline
            >
              small village
            </ExternalLink>
            nestled in the Atlantic Forest. Country folk at heart, I take pride
            in every small victory along my journey.
          </li>
        </ul>
      </div>
    </section>

    <section class="relative h-200" />
  </main>
</template>

<script setup lang="ts">
import { Timeline } from 'animejs'

const isMottoDrawerExpanded = useState('isMottoDrawerExpanded', () => false)
const devMode = useState('devMode', () => true)

const highFiveTimeline = ref<Timeline | null>(null)

onMounted(() => {
  const { highFiveTimeline: forward } = setupAnimations()
  highFiveTimeline.value = forward
})

const handleHighFive = () => {
  if (highFiveTimeline.value instanceof Timeline) {
    highFiveTimeline.value.reset()
    highFiveTimeline.value.play()
  }
}
</script>
