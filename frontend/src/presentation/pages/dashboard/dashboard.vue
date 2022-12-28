<template>
  <div :class="$style.dashboard">
    <Sider />
    <div :class="$style.main">
      <div :class="$style.header" />
      <div :class="$style.content">
        <div :class="$style.contentHeader">
          <div :class="$style.heroItem">
            <img
              :src="handShakeBlueImage"
              alt="Hand shake image"
            >
            <p>Notas fiscais</p>
          </div>
          <p>Visualize as notas fiscais que você tem</p>
        </div>
        <div :class="$style.displayHeader">
          <p :class="$style.headerItem">
            Nota Fiscal
          </p>
          <p :class="$style.headerItem">
            Sacado
          </p>
          <p :class="$style.headerItem">
            Cedente
          </p>
          <p :class="$style.headerItem">
            Emissão
          </p>
          <p :class="$style.headerItem">
            Valor
          </p>
          <p :class="$style.headerItem">
            Status
          </p>
          <p :class="$style.headerItem" />
        </div>
        <div :class="$style.displayItem">
          <p>{order.orderNumber}</p>
          <p>{order.Buyer.name}</p>
          <p>{order.Provider.name}</p>
          <p>{date}</p>
          <p :class="$style.greenColor">
            {value}
          </p>
          <p :class="$style.greenColor">
            {statusOptions[order.orderStatusBuyer]}
          </p>
          <p :class="$style.borderedParagraph">
            Dados do cedente
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Sider from '@/presentation/components/dashboard-components/sider/sider.vue'

export default defineComponent({
  components: {
    Sider
  },
  data: () => ({
    handShakeBlueImage: 'assets/images/handshake-blue.svg'
  })
})
</script>

<style src="./dashboard-styles.scss" module lang="scss" />
