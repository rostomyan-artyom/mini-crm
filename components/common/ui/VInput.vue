<template>
  <div class="v-input">
    <input
      v-model="model"
      :type="type"
      :readonly="readonly"
      class="v-input__hero"
      :class="{
        'v-input__hero_icon': $slots.icon,
      }"
    >

    <div v-if="$slots.icon" class="v-input__icon">
      <slot name="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VInput',
}
</script>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

const emit = defineEmits(['input'])

const props = defineProps({
  value: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'string',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
})

const model = ref(props.value);

watch(() => props.value, () => {
  model.value = props.value
})

watch(model, () => {
  emit('input', model.value)
})
</script>

<style lang="scss" scoped>
.v-input {
  position: relative;

  &__hero {
    padding: 8px 6px 8px 10px;
    border: 1px solid #d7d7d7;
    border-radius: 6px;
    width: 100%;

    &::placeholder {
      color: #d7d7d7;
    }

    &_icon {
      padding-right: 30px;
    }
  }

  &__icon {
    position: absolute;
    display: flex;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>
