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
        <div
          v-for="order of orders"
          :key="order.id"
          :class="$style.displayItem"
        >
          <p>{{ order.orderNumber }}</p>
          <p>{{ order.Buyer.name }}</p>
          <p>{{ order.Provider.name }}</p>
          <p>{{ getDate(order.emissionDate) }}</p>
          <p :class="$style.greenColor">
            {{ getValue(order.value) }}
          </p>
          <p :class="$style.greenColor">
            {{ statusOptions[order.orderStatusBuyer] }}
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
import { makeRemoteLoadOrdersByToken } from '@/main/factories/usecases/load-orders'
import { getCurrentAccountAdapter } from '@/main/adapters/current-token-adapter'

const loadOrdersByToken = makeRemoteLoadOrdersByToken()

export default defineComponent({
  components: {
    Sider
  },
  data: () => ({
    handShakeBlueImage: 'assets/images/handshake-blue.svg',
    orders: [],
    statusOptions: [
      'Pendente de confirmação',
      'Pedido confirmado',
      'Não reconhece o pedido',
      'Mercadoria não recebida',
      'Recebida com avaria',
      'Devolvida',
      'Recebida com devolução parcial',
      'Recebida e confirmada',
      'Pagamento Autorizado'
    ]
  }),
  async created () {
    const account = getCurrentAccountAdapter()
    if (account) {
      const orders = await loadOrdersByToken.loadAll(account.accessToken)
      this.orders = orders
      console.log(this.orders)
    } else {
      this.$router.push({ name: 'Login', replace: true })
    }
  },
  methods: {
    getDate: (emissionDate) => {
      return new Date(emissionDate).toLocaleString('pt-BR', { dateStyle: 'short' })
    },
    getValue: (value) => {
      return (Number(value) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }
  }
})
</script>

<style src="./dashboard-styles.scss" module lang="scss" />
