<template>
  <nav class="the-navigation">
    <div class="the-navigation__list">
      <template v-for="navigationItem in navigationList">
        <nuxt-link
          v-if="navigationItem.to"
          :key="navigationItem.id"
          :to="navigationItem.to"
          class="the-navigation__link"
        >
          <NavigationItem
            :key="navigationItem.id"
            :navigationData="navigationItem"
            class="the-navigation__item"
          />
        </nuxt-link>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavigation',
}
</script>

<script setup>
import { defineProps } from 'vue';

import NavigationItem from '@/components/layout/LeftBar/TheNavigation/NavigationItem';

defineProps({
  navigationList: {
    type: Array,
    default: () => ([]),
  },
})
</script>

<style lang="scss" scoped>
.the-navigation__link {
  display: block;

  &:not(:first-child) {
    margin-top: 10px;
  }
}

::v-deep .nuxt-link-exact-active {
  & .navigation-item {
    background-color: rgba(238, 238, 238, 0.5);
  }
}
</style>
