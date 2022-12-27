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
    <span
      v-if="title"
      :class="$style.status"
      :title="title"
    >
      🔴
    </span>
    <span
      v-else
      :class="$style.status"
      :title="`${$props.name} válido`"
    >
      🟢
    </span>
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

<style module lang="scss">
  @import './input-styles.scss';
</style>
