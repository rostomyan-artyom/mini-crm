<template>
  <div class="condition-label">
    <div v-if="elseStatus" class="condition-label__else">
      или
    </div>

    <p class="condition-label__title">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'ConditionLabel',
}
</script>

<script setup>
import { defineProps } from 'vue';

defineProps({
  elseStatus: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.condition-label {
  display: flex;
  align-items: center;

  &__else {
    padding: 10px;
    border-radius: 6px;
    background-color: rgba(153, 255, 0, 0.5);
    color: rgba(0, 0, 0, 0.7);
    margin-right: 20px;
  }

  &__title {
    font-weight: 500;
    color: #343434;
  }
}
</style>
