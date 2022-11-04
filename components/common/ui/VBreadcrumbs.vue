<template>
  <div class="v-breadcrumbs">
    <div class="v-breadcrumbs__home">
      <nuxt-link to="/">
        <HomeIcon class="v-breadcrumbs__home-icon" />
      </nuxt-link>
    </div>

    <div
      v-for="item in items"
      :key="item.id"
      :class="[
        'v-breadcrumbs__item',
        { 'v-breadcrumbs__item_disabled': item.disabled },
      ]"
    >
      <div class="v-breadcrumbs__divider">
        <ArrowIcon class="v-breadcrumbs__divider-icon" />
      </div>

      <nuxt-link :to="item.to" class="v-breadcrumbs__link">
        {{ item.text }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VBreadcrumbs',
}
</script>

<script setup>
import { defineProps } from 'vue';
import HomeIcon from '@/assets/icons/navigation/home.svg';
import ArrowIcon from '@/assets/icons/common/arrow.svg';

defineProps({
  items: {
    type: Array,
    default: () => ([]),
  },
})
</script>

<style lang="scss" scoped>
.v-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 15px;

  &__item {
    display: flex;
    align-items: center;
  }

  &__home-icon {
    width: 20px;
    height: auto;
  }

  &__divider {
    padding-right: 15px;
  }

  &__divider-icon {
    transform: rotate(-90deg);
  }

  &__link {
    font-size: 17px;
    color: #1a1a1a;
    transition: .3s;

    &:hover {
      color: #989898;
    }
  }
}

.v-breadcrumbs__item_disabled .v-breadcrumbs {
  &__link {
    pointer-events: none;
    color: #989898;

    &:hover {
      color: #989898;
    }
  }
}
</style>
