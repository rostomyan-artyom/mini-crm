<template>
  <header class="the-header">
    <VInput
      placeholder="Поиск по системе"
      class="the-header__search-input"
    >
      <template #icon>
        <MagnifierIcon />
      </template>
    </VInput>

    <slot name="right" />
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<script setup>
import VInput from '@/components/common/ui/VInput';
import MagnifierIcon from '@/assets/icons/common/magnifier.svg';
</script>

<style lang="scss" scoped>
.the-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  &__search-input {
    width: 50%;
  }
}
</style>
