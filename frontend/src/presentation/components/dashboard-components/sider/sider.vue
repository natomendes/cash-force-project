<template>
  <div :class="$style.sider">
    <div :class="$style.siderHeader">
      <img
        :src="logoImage"
        alt="Cash Force logo"
      >
    </div>
    <div :class="$style.menu">
      <div :class="$style.menuItem">
        <img
          :src="handShakeImage"
          alt="Hand shake image"
        >
        <p>Notas fiscais</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    logoImage: 'assets/images/logo.svg',
    handShakeImage: 'assets/images/handshake.svg'
  })
})
</script>

<style src="./sider-styles.scss" module lang="scss" />
