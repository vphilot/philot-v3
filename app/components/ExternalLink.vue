<template>
  <NuxtLink
    external
    :href="href"
    target="_blank"
    class="group relative items-center gap-x-2 focus:outline-none"
    :class="inline ? 'inline-flex' : 'flex'"
  >
    <div class="overflow-hidden">
      <Icon
        name="philot-icon:link"
        class="size-6 transform-cpu transition group-hover:-translate-y-full group-focus:-translate-y-full"
        mode="svg"
      />
      <Icon
        name="philot-icon:arrowout"
        class="size-6 translate-y-full transform-cpu transition group-hover:-translate-y-1/2 group-focus:-translate-y-full"
        mode="svg"
      />
    </div>

    <span
      class="text-body-large leading-none underline decoration-2 underline-offset-4 group-hover:decoration-4 group-focus:decoration-4"
    >
      <slot />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  inline: boolean
}>()
</script>
