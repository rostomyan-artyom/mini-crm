<template>
  <div class="inner-form-wrapper">
    <ConditionLabel
      if="$slots.label"
      :elseStatus="elseStatus"
      class="inner-form-wrapper__label"
    >
      <slot name="label" />
    </ConditionLabel>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'InnerFormWrapper',
}
</script>

<script setup>
import { ref, defineProps } from 'vue';

import ConditionLabel from '@/components/pages/surveys/common/SurveysForm/ConditionLabel';

const from = ref(0);
const to = ref(0);

defineProps({
  elseStatus: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.inner-form-wrapper {
  display: flex;
  align-items: center;

  &__label {
    width: 300px;
  }
}
</style>
