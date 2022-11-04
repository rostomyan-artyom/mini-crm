<template>
  <div class="form-wrapper">
    <div v-if="$slots.title" class="form-wrapper__header">
      <p class="form-wrapper__title">
        <slot name="title" />
      </p>
    </div>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormWrapper',
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  box-shadow: 0 0 10px 1px rgba(187, 177, 177, 0.3);
  border-radius: 6px;

  &__header {
    display: flex;
    align-items: center;
    height: 70px;
    padding: 0 20px;
  }

  &__title {
    font-size: 18px;
    font-weight: 500;
    color: #a2a2a2;
  }
}
</style>
