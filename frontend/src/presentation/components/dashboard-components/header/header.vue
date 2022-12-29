<template>
  <div :class="$style.header">
    <img
      :src="logoutIcon"
      alt="logout icon"
      title="logout"
      @click="logout"
    >
  </div>
</template>

<script>
import { apiStore } from '@/presentation/store/api-store'
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    logoutIcon: 'assets/icons/logout.svg'
  }),
  methods: {
    logout () {
      apiStore.clearCurrentAccount()
      this.$router.push({ path: '/login', replace: true })
    }
  }
})
</script>

<style src="./header-styles.scss" module lang="scss" />
