<template>
  <div class="default-layout">
    <LeftBar class="default-layout__left-bar" />

    <div>
      <TheHeader>
        <template #right>
          <AccountInfo :accountData="user" />
        </template>
      </TheHeader>

      <Nuxt class="default-layout__content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<script setup>
import LeftBar from '@/components/layout/LeftBar';
import TheHeader from '@/components/layout/TheHeader';
import AccountInfo from '@/components/layout/TheHeader/AccountInfo';

const user = {
  img: {
    url: require('@/assets/images/user-image.jpg'),
    alt: '#',
  },
  name: 'Ростомян А.',
  post: 'Разработчик',
}
</script>

<style lang="scss" scoped>
.default-layout {
  position: relative;
  padding-left: 170px;

  &__left-bar {
    position: fixed;
    left: 0;
    top: 0;
    width: 170px;
    height: 100vh;
  }
}

.default-layout__content {
  padding: 0 40px;
}
</style>
