<template>
  <div class="the-condition">
    <div v-if="$slots['sub-element']" class="the-condition__sub-element">
      <slot name="sub-element" />
    </div>

    <div class="the-condition__header">
      <p v-if="$slots.title" class="the-condition__title">
        <slot name="title" />
      </p>

      <VSelect
        v-model="conditionTypeValue"
        :hideTrigger="selectHideTrigger"
        :label="activeConditionType.title"
        class="the-condition__select"
      >
        <VOption
          v-for="optionItem in conditionsTypes"
          :key="optionItem.id"
          :label="optionItem.title"
          :value="optionItem.value"
          @click.native="changeConditionType(optionItem.value)"
        >
          {{ optionItem.title }}
        </VOption>
      </VSelect>
    </div>

    <div class="the-condition__content">
      <component
        v-if="activeFormComponent"
        :is="activeFormComponent"
        :cardTypes="cardTypes"
        :cardStatuses="cardStatuses"
        :addRangeTrigger="triggers.age"
        :addTypeTrigger="triggers.cardType"
        :addStatusTrigger="triggers.cardStatuses"
        @changeValue="changeValue"
      />
    </div>

    <ConditionFooter
      class="the-condition__condition-footer"
      @add="toggleTrigger"
      @destroyCondition="$emit('destroyCondition')"
    >
      <template v-if="activeConditionType.addBtnText" #add-btn>
        {{ activeConditionType.addBtnText }}
      </template>
    </ConditionFooter>
  </div>
</template>

<script>
export default {
  name: 'TheCondition',
}
</script>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

import ConditionFooter from '@/components/pages/surveys/common/SurveysForm/ConditionFooter';
import VSelect from '@/components/common/ui/select/VSelect';
import VOption from '@/components/common/ui/select/VOption';

const props = defineProps({
  queue: {
    type: Number,
    default: 1,
  },
  conditionsTypes: {
    type: Array,
    default: () => ([]),
  },
  propConditionType: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['changeValue'])

const selectHideTrigger = ref(false);
const toggleSelectHideTrigger = () => {
  selectHideTrigger.value = !selectHideTrigger.value;
}

const conditionTypeValue = ref(props.propConditionType);
const activeConditionType = computed(() => props.conditionsTypes.find(item => item.value === conditionTypeValue.value) || '');
const changeConditionType = (value) => {
  conditionTypeValue.value = value;
  toggleSelectHideTrigger();
}

const conditionsForms = {
  'age': () => import('@/components/pages/surveys/forms/AgeForm'),
  'cardType': () => import('@/components/pages/surveys/forms/CartTypeForm'),
  'cardStatuses': () => import('@/components/pages/surveys/forms/CardStatusesForm'),
}
const activeFormComponent = computed(() => {
  if (conditionTypeValue.value) return conditionsForms[conditionTypeValue.value];

  return false;
})

const triggers = ref({
  age: false,
  cardType: false,
  cardStatuses: false,
})
const toggleTrigger = () => {
  triggers.value[conditionTypeValue.value] = !triggers.value[conditionTypeValue.value];
}

const cardTypes = [
  { 'title': 'Gold', value: 'gold', },
  { 'title': 'Platinum', value: 'platinum', },
  { 'title': 'Bronze', value: 'bronze', },
]
const cardStatuses = [
  { 'title': 'Активен', value: 'active', },
  { 'title': 'Заморожен', value: 'frozen', },
]

const changeValue = (data) => {
  emit('changeValue', { key: activeConditionType.value.requestKey, data } )
}
</script>

<style lang="scss" scoped>
.the-condition {
  position: relative;
  padding: 30px 20px 40px 20px;
  background-color: #f8fffb;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &__sub-element {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 20px;
    top: 0;
    width: 50px;
    height: 50px;
    z-index: 2;
    background-color: #d0ffca;
    color: #7c7c7c;
    border: 2px solid #fff;
    border-radius: 6px;
    transform: translate(0, -50%);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    width: 280px;
    min-width: 280px;
    font-size: 17px;
    font-weight: 500;
    margin-right: 20px;
    color: #673e00;
  }

  &__select {
    width: 100%;
  }

  &__content {
    margin-top: 40px;
  }

  &__condition-footer {
    padding-left: 300px;
    margin-top: 50px;
  }
}
</style>
