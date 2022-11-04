<template>
  <div class="v-range">
    <ul class="v-range__list">
      <li class="v-range__item">
        <span>от</span>

        <VInput
          v-model="from"
          type="number"
          class="v-range__input"
        />
      </li>

      <li class="v-range__item">
        <span>до</span>

        <VInput
          v-model="to"
          type="number"
          class="v-range__input"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VRange',
}
</script>

<script setup>
import { ref, watch, defineEmits } from 'vue';

import VInput from '@/components/common/ui/VInput';

const emit = defineEmits(['changeValue'])

const from = ref(0);
const to = ref(0);

const emitValues = () => emit('changeValue', {
  from: Number(from.value),
  to: Number(to.value)
})

watch(() => from.value, () => emitValues())
watch(() => to.value, () => emitValues())
</script>

<style lang="scss" scoped>
.v-range {
  &__list {
    display: flex;
    align-items: center;
  }

  &__item {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-left: 30px;
    }

    & span {
      color: #757575;
    }
  }

  &__input {
    width: 60px;
    margin-left: 10px;
  }
}
</style>
