<template>
  <VSelect
    v-model="selectValue"
    :hideTrigger="selectHideTrigger"
    :label="activeConditionType.title"
  >
    <VOption
      v-for="optionItem in options"
      :key="optionItem.id"
      :label="optionItem.title"
      :value="optionItem.value"
      @click.native="changeActiveValue(optionItem.value)"
    >
      {{ optionItem.title }}
    </VOption>
  </VSelect>
</template>

<script>
export default {
  name: 'SurveysSelect',
}
</script>

<script setup>
import { ref, defineProps, computed, defineEmits } from 'vue';

import VSelect from '@/components/common/ui/select/VSelect';
import VOption from '@/components/common/ui/select/VOption';

const props = defineProps({
  propValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => ([]),
  },
})

const emit = defineEmits(['changeActiveSelect'])

const selectHideTrigger = ref(false);
const toggleSelectHideTrigger = () => {
  selectHideTrigger.value = !selectHideTrigger.value;
}

const selectValue = ref(props.propValue);
const activeConditionType = computed(() => props.options.find(item => item.value === selectValue.value) || '');
const changeActiveValue = (value) => {
  selectValue.value = value;
  toggleSelectHideTrigger();

  emit('changeActiveSelect', selectValue.value)
}
</script>

<style lang="scss" scoped>

</style>
