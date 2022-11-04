<template>
  <div class="card-statuses-form">
    <InnerFormWrapper
      v-for="(typeItem, index) in types"
      :key="typeItem.id"
      :elseStatus="index !== 0"
      class="card-statuses-form__item"
    >
      <template #label>
        Тип {{ index + 1 }}
      </template>

      <SurveysSelect
        :options="cardStatuses"
        @changeActiveSelect="changeActiveSelect(index, $event)"
      />
    </InnerFormWrapper>
  </div>
</template>

<script>
export default {
  name: 'CardStatusesForm',
}
</script>

<script setup>
import { ref, defineProps, watch, defineEmits } from 'vue';
const uuid = require('uuid');

import InnerFormWrapper from '@/components/pages/surveys/common/SurveysForm/InnerFormWrapper';
import SurveysSelect from '@/components/pages/surveys/common/SurveysSelect';

const props = defineProps({
  addStatusTrigger: {
    type: Boolean,
    default: false,
  },
  cardStatuses: {
    type: Array,
    default: () => ([]),
  },
})
const emit = defineEmits(['changeValue'])

const types = ref(
  [{id: uuid.v1()}]
);

const addStatus = () => {
  types.value.push({id: uuid.v1()})
}

const changeActiveSelect = (index, value) => {
  types.value[index] = {...types.value[index], value};

  emitValue();
}

const emitValue = () => {
  const valueModify = types.value.map(item => item.value);

  emit('changeValue', valueModify);
}

watch(() => props.addStatusTrigger, () => addStatus())
</script>

<style lang="scss" scoped>
.card-statuses-form {
  &__item {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
}
</style>
