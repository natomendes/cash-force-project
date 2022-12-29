<template>
  <div :class="$style.inputWrap">
    <input
      ref="input"
      :value="modelValue"
      :type="type"
      :name="name"
      placeholder=" "
      readOnly
      @focus="handleFocus"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <label @click="focusInput">{{ placeholder }}</label>
    <img
      v-if="title"
      key="1"
      :class="$style.status"
      :title="title"
      :src="invalidIcon"
    >
    <img
      v-else
      key="2"
      :class="$style.status"
      :title="`${$props.name} válido`"
      :src="validIcon"
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: String,
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  data: () => ({
    invalidIcon: 'assets/icons/invalid.svg',
    validIcon: 'assets/icons/valid.svg'
  }),
  methods: {
    handleFocus (event) {
      event.target.readOnly = false
    },
    focusInput () {
      this.$refs.input.focus()
    }
  }
})
</script>

<style module src="./input-styles.scss" lang="scss" />
