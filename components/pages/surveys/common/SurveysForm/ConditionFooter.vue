<template>
  <div class="condition-footer">
    <VButton v-if="$slots['add-btn']" @click.native="$emit('add')">
      <template #icon>
        <PlusIcon class="condition-footer__btn-icon condition-footer__btn-icon_plus" />
      </template>

      <slot name="add-btn" />
    </VButton>
    <span v-else />

    <VButton type="destroy" @click.native="$emit('destroyCondition')">
      <template #icon>
        <TrashIcon class="condition-footer__btn-icon condition-footer__btn-icon_destroy" />
      </template>

      Удалить условие
    </VButton>
  </div>
</template>

<script>
export default {
  name: 'ConditionFooter',
}
</script>

<script setup>
import VButton from '@/components/common/ui/VButton';
import PlusIcon from '@/assets/icons/common/plus.svg';
import TrashIcon from '@/assets/icons/common/trash.svg';
</script>

<style lang="scss" scoped>
.condition-footer {
  display: flex;
  justify-content: space-between;
}

::v-deep .condition-footer {
  &__btn-icon {
    width: 18px;
    height: auto;

    &_plus {
      path {
        fill: rgba(132, 255, 0, 1);
      }
    }

    &_destroy {
      path {
        fill: red;
      }
    }
  }
}
</style>
