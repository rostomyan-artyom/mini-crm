<template>
  <div
    class="v-select"
    v-click-outside="hide"
  >
    <VInput
      readonly
      :value="label"
      class="v-select__input"
      @click.native="toggleShow"
    >
      <template #icon>
        <ArrowIcon class="v-select__icon" />
      </template>
    </VInput>

    <div v-if="$slots.default && show" class="v-select__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSelect',
}
</script>

<script setup>
import { ref, defineProps, watch } from 'vue';

import VInput from '@/components/common/ui/VInput';
import ArrowIcon from '@/assets/icons/common/arrow-bold.svg';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  hideTrigger: {
    type: Boolean,
    default: false,
  },
})

const show = ref(false);

const toggleShow = () => {
  show.value = !show.value;
}

const hide = () => {
  show.value = false;
}

watch(() => props.hideTrigger, () => hide())
</script>

<style lang="scss" scoped>
.v-select {
  position: relative;

  &__input {
    cursor: pointer;
  }

  &__icon {
    transform: rotate(90deg);
  }

  &__content {
    position: absolute;
    right: 0;
    bottom: -15px;
    width: 100%;
    min-width: 250px;
    transform: translate(0, 100%);
    box-shadow: 0 0 15px -1px rgba(87, 87, 87, 0.3);
    z-index: 2;
    border-radius: 4px;
    overflow: hidden;
  }
}
</style>
