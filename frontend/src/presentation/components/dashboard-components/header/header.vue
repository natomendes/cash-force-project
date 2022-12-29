<template>
  <div :class="$style.header">
    <img
      :src="logoutIcon"
      alt="logout icon"
      title="logout"
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    logoutIcon: 'assets/icons/logout.svg'
  })
})
</script>

<style src="./header-styles.scss" module lang="scss" />
