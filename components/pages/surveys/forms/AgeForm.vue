<template>
  <div class="age-form">
    <InnerFormWrapper
      v-for="(range, index) in ranges"
      :key="range.id"
      :elseStatus="index !== 0"
      class="age-form__item"
    >
      <template #label>
        Диапазон {{ index + 1 }}
      </template>

      <VRange @changeValue="changeRangeValue(index, $event)"/>
    </InnerFormWrapper>
  </div>
</template>

<script>
export default {
  name: 'AgeForm',
}
</script>

<script setup>
import { ref, defineProps, watch, defineEmits } from 'vue';
const uuid = require('uuid');

import InnerFormWrapper from '@/components/pages/surveys/common/SurveysForm/InnerFormWrapper';
import VRange from '@/components/common/ui/VRange';

const props = defineProps({
  addRangeTrigger: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['changeValue'])

const rangeItem = {id: uuid.v1(), from: 0, to: 0,}
const ranges = ref(
  [{...rangeItem}]
);

const addRange = () => {
  ranges.value.push({...rangeItem})
}

const changeRangeValue = (index, data) => {
  ranges.value[index] = {...ranges.value[index], ...data};

  emitRangeValue();
}

const emitRangeValue = () => {
  const rangesModified = ranges.value.map(item => {
    return {
      from: item.from,
      to: item.to
    }
  })

  emit('changeValue', rangesModified)
}
watch(() => props.addRangeTrigger, () => addRange())
</script>

<style lang="scss" scoped>
.age-form {
  &__item {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
}
</style>
