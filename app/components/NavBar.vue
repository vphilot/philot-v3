<template>
  {{ data }}
  <nav class="grid grid-cols-4 *:border *:border-b-0 *:not-last:border-r-0">
    <div class="grid grid-rows-2 self-stretch *:not-last:border-b">
      <div class="flex items-center px-8">
        <span class="text-h2 title leading-none"> Vinícius Philot </span>
      </div>
      <div class="flex items-center px-8 py-4 leading-none">
        <span class="text-h2"> UI Engineer </span>
      </div>
    </div>
    <div
      class="grid grid-rows-3 self-stretch *:relative *:flex *:items-center *:gap-x-2 *:px-8 *:py-4 *:not-last:border-b"
    >
      <NuxtLink
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
    <div class="flex items-center self-stretch px-8">
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
    <div class="flex flex-col items-start gap-y-4 self-stretch p-8">
      <NuxtLink
        external
        href="https://google.com"
        target="_blank"
        class="group relative flex gap-x-2 focus:outline-none"
      >
        <div class="navbar-link-item-external-transition" />
        <Icon name="philot-icon:link" class="size-6" mode="svg" />
        <span
          class="text-body-large leading-none underline decoration-2 underline-offset-4"
        >
          linkedin
        </span>
      </NuxtLink>
      <NuxtLink
        external
        href="https://google.com"
        target="_blank"
        class="group relative flex gap-x-2 focus:outline-none"
      >
        <div class="navbar-link-item-external-transition" />
        <Icon name="philot-icon:link" class="size-6" mode="svg" />
        <span
          class="text-body-large leading-none underline decoration-2 underline-offset-4"
        >
          github
        </span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/test')
const handleMouseEnter = (icon: string) => {
  console.log(icon)
}
</script>
