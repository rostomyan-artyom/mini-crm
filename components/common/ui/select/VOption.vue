<template>
  <li
    :class="[
      'v-option',
      { 'v-option_disabled': disabled || groupDisabled }
    ]"
  >
    <slot>
      <span class="v-option__label">{{ label }}</span>
    </slot>
  </li>
</template>

<script>
export default {
  name: 'VOption',
}
</script>

<script setup>
import { defineProps } from 'vue';

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  groupDisabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.v-option {
  padding: 10px;
  background-color: #fff;
  transition: .3s;
  cursor: pointer;

  &:hover {
    background-color: #e9f8f4;
  }

  &__label {
    font-size: 17px;
    line-height: 115%;
    color: #363636;
  }
}
</style>
