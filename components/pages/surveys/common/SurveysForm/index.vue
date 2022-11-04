<template>
  <FormWrapper>
    <template #title><slot name="title" /></template>

    <slot />

    <div class="surveys-form__add-btn-wrapper">
      <VButton
        type="form-add"
        class="surveys-form__add-btn"
        @click="$emit('addCondition')"
      >
        <template #icon>
          <PlusIcon class="surveys-form__plus-icon" />
        </template>

        Нажмите, что бы добавить новое условие выборки.<br />Все условия связываются между собой логическим "И"
      </VButton>
    </div>

    <div class="surveys-form__actions">
      <VButton>
        Протестировать опрос
      </VButton>

      <VButton type="success" @click.native="$emit('submitForm')">
        Далее

        <template #iconRight>
          <ArrowIcon />
        </template>
      </VButton>
    </div>
  </FormWrapper>
</template>

<script>
export default {
  name: 'SurveysForm'
}
</script>

<script setup>
import FormWrapper from '@/components/common/FormWrapper';
import VButton from '@/components/common/ui/VButton';
import PlusIcon from '@/assets/icons/common/plus.svg';
import ArrowIcon from '@/assets/icons/common/arrow-big.svg';

const ageForm = {
  type: 'age',
  requestQey: 'ageRanges',
  ranges: [
    { from: 0, to: 10 },
  ],
}
const cardTypeForm = {
  type: 'cardType',
  requestQey: 'cardTypes',
  types: ['gold'],
}
const cardStatusesForm = {
  type: 'cardStatuses',
  requestQey: 'cardStatuses',
  types: ['active'],
}
</script>

<style lang="scss" scoped>
::v-deep .surveys-form {
  &__content {
    padding: 0 20px;
  }

  &__add-btn-wrapper {
    padding: 20px;
  }

  &__add-btn {
    width: 100%;
  }

  &__plus-icon {
    width: 20px;
    height: auto;

    path {
      fill: green;
    }
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #e2efed;
  }
}
</style>
