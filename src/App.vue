<script setup>
import { RouterView } from 'vue-router'
import BaseNavbar from '@/components/BaseNavbar.vue'

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'main',
  attribute: 'color-scheme',
  valueDark: 'dark',
  
})

const toggleDark = useToggle(isDark)
</script>

<template>
  <main :color-scheme="isDark ? 'dark' : null">
    <header>
      <BaseNavbar :toggle-theme="toggleDark" />
    </header>
    <section>
      <RouterView />
    </section>
  </main>
</template>

<style lang="scss">
main {
  background-color: #f4f4f4;
}
</style>
