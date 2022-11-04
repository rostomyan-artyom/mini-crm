<template>
  <div class="card-type-form">
    <InnerFormWrapper
      v-for="(typeItem, index) in types"
      :key="typeItem.id"
      :elseStatus="index !== 0"
      class="card-type-form__item"
    >
      <template #label>
        Тип {{ index + 1 }}
      </template>

      <SurveysSelect
        :options="cardTypes"
        @changeActiveSelect="changeActiveSelect(index, $event)"
      />
    </InnerFormWrapper>
  </div>
</template>

<script>
export default {
  name: 'CardTypeForm',
}
</script>

<script setup>
import { ref, defineProps, watch, defineEmits } from 'vue';
const uuid = require('uuid');

import InnerFormWrapper from '@/components/pages/surveys/common/SurveysForm/InnerFormWrapper';
import SurveysSelect from '@/components/pages/surveys/common/SurveysSelect';

const props = defineProps({
  addTypeTrigger: {
    type: Boolean,
    default: false,
  },
  cardTypes: {
    type: Array,
    default: () => ([]),
  },
})
const emit = defineEmits(['changeValue'])

const types = ref(
  [{id: uuid.v1()}]
);

const addType = () => {
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

watch(() => props.addTypeTrigger, () => addType())
</script>

<style lang="scss" scoped>
.card-type-form {
  &__item {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
}
</style>
