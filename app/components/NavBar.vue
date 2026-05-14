<template>
  <nav
    class="grid grid-cols-1 *:border *:border-r-0 *:border-b-0 md:grid-cols-2 md:*:not-last:border-r-0 lg:grid-cols-4"
  >
    <div class="grid grid-rows-2 self-stretch *:not-last:border-b">
      <div class="flex items-center px-8">
        <span
          class="text-h2 title leading-none"
          data-animate-sup-text-secondary
        >
          Vinícius Philot
        </span>
      </div>
      <div class="flex items-center px-8 py-4 leading-none">
        <span class="text-h2"> UI Engineer </span>
      </div>
    </div>
    <div
      class="grid grid-rows-3 self-stretch *:relative *:flex *:items-center *:gap-x-2 *:px-8 *:py-4 *:not-last:border-b"
    >
      <NuxtLink
        data-animate-sup-text-secondary
        to="/home"
        class="group w-full focus:outline-none"
        @mouseenter="handleMouseEnter('home')"
        @focus="handleMouseEnter('home')"
      >
        <div class="navbar-link-item-transition" />
        <Icon name="philot-icon:home" class="size-8" mode="svg" />
        <span class="text-body-large leading-none"> Home </span>
      </NuxtLink>
      <NuxtLink
        data-animate-sup-text-secondary
        to="/home"
        class="group focus:outline-none"
        @mouseenter="handleMouseEnter('work')"
        @focus="handleMouseEnter('work')"
      >
        <div class="navbar-link-item-transition" />
        <Icon name="philot-icon:work" class="size-8" mode="svg" />
        <span class="text-body-large leading-none"> Work </span>
      </NuxtLink>
      <NuxtLink
        data-animate-sup-text-secondary
        to="/home"
        class="group focus:outline-none"
        @mouseenter="handleMouseEnter('blog')"
        @focus="handleMouseEnter('blog')"
      >
        <div class="navbar-link-item-transition" />
        <Icon name="philot-icon:blog" class="size-8" mode="svg" />

        <span class="text-body-large leading-none"> Blog </span>
      </NuxtLink>
    </div>
    <div class="flex items-center self-stretch px-8 py-4 md:py-0">
      <div class="flex flex-col">
        <span class="text-h2 mb-2 leading-none"> Toronto, 31 C </span>
        <span class="text-body-base">
          Sunny, which a chance of thunderstorm.
        </span>
        <span class="text-body-base align-middle">
          I'm feeling
          <span
            class="inline-flex items-center rounded-full border px-3 py-2.5 pb-3.5 leading-1"
            >aprehensive</span
          >
        </span>
      </div>
    </div>
    <div
      class="flex flex-col items-start gap-y-2 self-stretch px-8 py-4 md:gap-y-4 md:py-8"
    >
      <ExternalLink
        href="https://www.google.com/maps/place/São+Pedro+da+Serra,+Nova+Friburgo+-+State+of+Rio+de+Janeiro,+28616-155,+Brazil/@-22.3190335,-42.3577406,21328m/data=!3m1!1e3!4m6!3m5!1s0x97ecc6bc6c0657:0x7625000c6484f178!8m2!3d-22.3169831!4d-42.3306174!16s%2Fg%2F1tjjqlc2?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
        inline
      >
        linkedin
      </ExternalLink>

      <ExternalLink
        href="https://www.google.com/maps/place/São+Pedro+da+Serra,+Nova+Friburgo+-+State+of+Rio+de+Janeiro,+28616-155,+Brazil/@-22.3190335,-42.3577406,21328m/data=!3m1!1e3!4m6!3m5!1s0x97ecc6bc6c0657:0x7625000c6484f178!8m2!3d-22.3169831!4d-42.3306174!16s%2Fg%2F1tjjqlc2?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
        inline
      >
        github
      </ExternalLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/test')
const handleMouseEnter = (icon: string) => {
  console.log(icon)
}
</script>
