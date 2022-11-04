<template>
  <div class="navigation-item">
    <component
      v-if="navigationData.icon"
      :is="navigationData.icon"
      class="navigation-item__icon"
    />

    <p class="navigation-item__title">
      {{ navigationData.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'NavigationItem',
}
</script>

<script setup>
import { defineProps } from 'vue';

defineProps({
  navigationData: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="scss" scoped>
.navigation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  border-radius: 6px;
  transition: .3s;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #008617;
  }

  &__icon {
    width: 30px;
    height: auto;
  }

  &__title {
    color: #2a2a2a;
    font-size: 16px;
    margin-top: 10px;
    text-align: center;
    transition: .3s;
  }
}

::v-deep .navigation-item__icon {
  path {
    transition: .3s;
  }
}

.navigation-item:hover ::v-deep .navigation-item {
  &__icon {
    path {
      fill: #008617;
    }
  }

  &__title {
    color: #008617;
  }
}
</style>
