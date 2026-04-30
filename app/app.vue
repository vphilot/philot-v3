<template>
  <div class="relative">
    <NavBar />
    <div class="grid grid-cols-4 *:border *:border-b-0 *:not-last:border-r-0">
      <div class="col-span-2 p-8">
        <h1 class="text-h1">sup 👋</h1>
        <p class="text-body-large text-balance">
          I build high-impact Web applications for a living, focusing on
          delivering solutions that are not only effective but also accessible
          and inclusive. I thrive in environments that foster collaboration and
          mutual trust.
        </p>
      </div>
      <div class="col-span-2 p-8">
        <p class="text-body-large mb-8">
          Currently leading Frontend Engineering for AI & Security Insights at
          RBC.
        </p>

        <NuxtLink to="/work" class="group nuxt-link-as-button mb-4">
          <div class="nuxt-link-as-button-transition" />
          <Icon name="philot-icon:work" class="size-8" mode="svg" />
          <span class="text-ui-large"> Work experience and résumé </span>
        </NuxtLink>

        <NuxtLink to="/blog" class="group nuxt-link-as-button">
          <div class="nuxt-link-as-button-transition" />
          <Icon name="philot-icon:blog" class="size-8" mode="svg" />
          <span class="text-ui-large"> I also write sometimes</span>
        </NuxtLink>
      </div>
    </div>

    <div class="grid grid-cols-4 *:border *:not-last:border-r-0">
      <div class="col-span-2">
        <div class="p-8">
          <h1 class="text-h1">Motto</h1>
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
      <div class="col-span-2 p-8">
        <h1 class="text-h1">Stack</h1>
        <ul
          class="text-body-large mb-8 list-inside list-image-[url(/icons/star-bullet.svg)] text-balance"
        >
          <li>Typescript</li>
          <li>Nuxt, Vue</li>
          <li>Tailwind</li>
        </ul>
      </div>
    </div>

    <div class="">
      <NavBarHomeIconAnimatable
        class="h-full w-full stroke-black stroke-[1] [stroke-linecap:square] [stroke-linejoin:miter]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { animate, svg, stagger } from 'animejs'

const isMottoDrawerExpanded = useState('isMottoDrawerExpanded', () => false)

onMounted(() => {
  animate(svg.createDrawable('[data-animate-group]'), {
    draw: ['0 0', '0 1'],
    ease: 'inOutQuad',
    duration: stagger(200, { start: 500 }),
    delay: stagger(50),
  })

  animate('[data-home-icon]', {
    ease: 'inOutQuad',
    strokeWidth: '2',
    delay: stagger(50),
  })
})
</script>
