<template>
  <div class="v-tabs">
    <ul class="v-tabs__list">
      <li
        v-for="item in items"
        :key="item.id"
        :class="[
          'v-tabs__item',
          { 'v-tabs__item_active': item.value === activeValue }
        ]"
        @click="$emit('changeActive', item.value)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VTabs',
}
</script>

<script setup>
import { defineProps } from 'vue';

defineProps({
  items: {
    type: Array,
    default: () => ([]),
  },
  activeValue: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.v-tabs {
  border-bottom: 1px solid green;

  &__list {
    display: flex;
    gap: 120px;
  }

  &__item {
    padding: 10px;
    color: #318131;
    font-weight: 500;
    transition: .3s;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    &_active {
      color: #1e1e1e;
      border-bottom: 2px solid green;
    }
  }
}
</style>
