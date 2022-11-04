<template>
  <div class="surveys-page">
    <VBreadcrumbs :items="breadcrumbsNavigation" />

    <VButton
      tag="nuxt-link"
      to="/surveys/new"
      class="surveys-page__add-btn"
    >
      Добавить опрос
    </VButton>
  </div>
</template>

<script>
export default {
  name: 'SurveysPage',
}
</script>

<script setup>
import VBreadcrumbs from '@/components/common/ui/VBreadcrumbs';
import VButton from '@/components/common/ui/VButton';

const breadcrumbsNavigation = [
  {
    text: 'Опросы',
    disabled: true,
    to: '/surveys',
  },
]
</script>

<style lang="scss" scoped>
.surveys-page {

  &__add-btn {
    display: inline-block;
    margin-top: 50px;
  }
}
</style>
