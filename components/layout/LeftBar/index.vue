<template>
  <div class="left-bar">
    <div class="left-bar__info">
      <div class="left-bar__logo-box">
        <nuxt-link to="/">
          <LogoIcon class="left-bar__logo-icon" />
        </nuxt-link>
      </div>

      <TheNavigation :navigationList="NAVIGATION" class="left-bar__navigation" />
    </div>

    <div class="left-bar__question">
      <nuxt-link to="/support">
        <QuestionIcon class="left-bar__question-icon" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftBar',
}
</script>

<script setup>
import TheNavigation from '@/components/layout/LeftBar/TheNavigation';
import LogoIcon from '@/assets/icons/common/logo.svg';
import QuestionIcon from '@/assets/icons/common/question.svg';

import { NAVIGATION } from '@/utils/constants/common';
</script>

<style lang="scss" scoped>
.left-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid rgba(210, 210, 210, 0.3);
  padding: 20px 7px;

  &__navigation {
    margin-top: 100px;
  }

  &__logo-box {
    display: flex;
    justify-content: center;
  }

  &__logo-icon {
    width: 60px;
    height: auto;
  }

  &__question-icon {
    width: 40px;
    height: auto;
  }
}
</style>
