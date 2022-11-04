<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    :to="to"
    :is="tag"
    :class="[
      'v-button',
      `v-button_${ type }`,
    ]"
    @mousedown.prevent
  >
    <i v-if="loading">
      <LoadingIcon />
    </i>

    <slot v-if="$slots.icon && !loading" name="icon" />

    <span v-if="$slots.default">
      <slot />
    </span>

    <slot v-if="$slots.iconRight && !loading" name="iconRight" />
  </button>
</template>

<script>
export default {
  name: 'VButton',
}
</script>

<script setup>
import { defineProps } from 'vue';

import LoadingIcon from '@/assets/icons/common/gif-loading.svg';

defineProps({
  tag: {
    type: String,
    default: 'button',
    validator: val => ['nuxt-link', 'a', 'button'].includes(val),
  },
  to: {
    type: String,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'default',
    validator: val => [
      'default',
      'form-add',
      'success',
      'destroy',
    ].includes(val),
  },
})
</script>

<style lang="scss" scoped>
.v-button {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  padding: 10px;
  color: #52c742;
  font-weight: 500;
  line-height: 115%;
  background-color: #fff;
  box-shadow: 0 5px 15px -1px rgba(87, 87, 87, 0.3);
  transition: .3s;

  &:hover {
    transform: translate(0, -3px);
  }

  &_form-add {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    color: green;
    padding: 25px;
  }

  &_success {
    box-shadow: none;
    background-color: #52c742;
    color: #fff;
  }

  &_destroy {
    background-color: #fff7f7;
    color: #a40000;
    box-shadow: 0 5px 15px -1px rgba(178, 47, 47, 0.3);
  }
}
</style>
