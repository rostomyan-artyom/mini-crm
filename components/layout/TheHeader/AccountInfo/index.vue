<template>
  <div class="account-info">
    <div class="account-info__img-box">
      <img
        v-if="accountData.img"
        :src="accountData.img.url"
        :alt="accountData.img.alt || '#'"
        class="account-info__img"
      />
    </div>

    <div class="account-info__text-info">
      <p class="account-info__name">
        {{ accountData.name }}
      </p>

      <p class="account-info__post">
        {{ accountData.post }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountInfo',
}
</script>


<script setup>
defineProps({
  accountData: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="scss" scoped>
.account-info {
  display: flex;
  align-items: center;

  &__img-box {
    width: 60px;
    min-width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #f8f8f8;
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__text-info {
    margin-left: 15px;
  }

  &__name {
    color: #1c1c1c;
    font-weight: 600;
    font-size: 16px;
  }

  &__post {
    color: #6c6c6c;
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>
