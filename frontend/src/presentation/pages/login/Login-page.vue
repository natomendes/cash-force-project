<template>
  <div
    :class="$style.login"
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
      <Input
        v-model="loginData.email"
        type="email"
        name="email"
        placeholder="Digite seu e-mail"
        :title="errors.emailError"
      />
      <Input
        v-model="loginData.password"
        type="password"
        name="password"
        placeholder="Digite sua senha"
        :title="errors.passwordError"
      />
      <button
        v-if="isLoading"
        type="submit"
        :disabled="!!errors.emailError || !!errors.passwordError"
      >
        <Spinner />
      </button>
      <button
        v-else
        type="submit"
        :disabled="!!errors.emailError || !!errors.passwordError"
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
import { Input, Spinner } from '@/presentation/components'
import { apiStore } from '@/presentation/store/api-store'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication'
import { makeLoginValidation } from '@/main/factories/pages/login'
import { defineComponent } from 'vue'

const validation = makeLoginValidation()
const authentication = makeRemoteAuthentication()

export default defineComponent({
  components: {
    Input,
    Spinner
  },
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
  },
  methods: {
    async submitLogin () {
      try {
        if (!this.isLoading &&
        !this.errors.emailError && !this.errors.passwordError) {
          this.isLoading = true
          const account = await authentication.auth(this.loginData)
          apiStore.saveCurrentAccount(account)
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
