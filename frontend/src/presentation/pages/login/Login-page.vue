<template>
  <div
    :class="$style.login"
    @updateValue="updateValue"
  >
    <header :class="$style.header">
      <img
        :src="logoImage"
        alt="Cash Force logo"
      >
    </header>
    <form
      :class="$style.form"
      @submit.prevent="submitLogin"
    >
      <h2>Login</h2>
      <FormInput
        v-model="loginData.email"
        type="email"
        name="email"
        placeholder="Digite seu e-mail"
        :title="errors.emailError"
      />
      <FormInput
        v-model="loginData.password"
        type="password"
        name="password"
        placeholder="Digite sua senha"
        :title="errors.passwordError"
      />
      <button
        type="submit"
        :disabled="errors.emailError || errors.passwordError"
      >
        Entrar
      </button>
      <div
        v-if="errors.errorMessage"
        :class="$style.errorWrap"
      >
        <span :class="$style.error">{{ errors.errorMessage }}</span>
      </div>
    </form>
    <footer :class="$style.footer" />
  </div>
</template>

<script>
import FormInput from '@/presentation/components/input/input.vue'
import { defineComponent } from 'vue'
import { makeLoginValidation } from '@/main/factories/pages/login'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication'

const validation = makeLoginValidation()
const authentication = makeRemoteAuthentication()

export default defineComponent({
  components: {
    FormInput
  },
  inject: ['ApiContext'],
  data: () => ({
    logoImage: 'assets/images/logo.svg',
    isLoading: false,
    loginData: {
      email: '',
      password: ''
    },
    errors: {
      emailError: '',
      passwordError: '',
      errorMessage: ''
    }
  }),
  beforeMount () {
    this.errors.emailError = validation.validate('email', this.loginData)
    this.errors.passwordError = validation.validate('password', this.loginData)
  },
  updated () {
    this.errors.emailError = validation.validate('email', this.loginData)
    this.errors.passwordError = validation.validate('password', this.loginData)
    console.log(this.errors)
  },
  methods: {
    async submitLogin () {
      try {
        if (!this.isLoading &&
        !this.errors.emailError && !this.errors.passwordError) {
          console.log('aqui')
          this.isLoading = true
          const account = await authentication.auth(this.loginData)
          this.ApiContext.saveCurrentAccount(account)
          this.$router.push({ path: '/', replace: true })
        }
      } catch (error) {
        this.isLoading = false
        this.errors.errorMessage = error.message
      }
    }
  }
})
</script>

<style module src="./login-page-styles.scss" lang="scss" />