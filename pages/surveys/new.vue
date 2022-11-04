<template>
  <div class="new-surveys-page">
    <VBreadcrumbs :items="breadcrumbsNavigation" />

    <VTabs
      :items="contentNavigation"
      :activeValue="activeContentItem"
      class="new-surveys-page__tabs"
      @changeActive="changeActiveContentItem"
    />

    <SurveysForm
      v-if="route.query.content === 'respondents'"
      class="new-surveys-page__form"
      @addCondition="addCondition"
      @submitForm="submitForm"
    >
      <template #title>
        Добавить опрос
      </template>

      <TheCondition
        v-for="(condition, index) in conditions"
        :key="condition.id"
        :conditionsTypes="conditionsTypes"
        @destroyCondition="destroyCondition(index)"
        @changeValue="changeValue"
      >
        <template v-if="index !== 0" #sub-element>
          <span>и</span>
        </template>

        <template #title>Условие {{ index + 1 }}</template>

        <component :is="condition.form"/>
      </TheCondition>
    </SurveysForm>
  </div>
</template>

<script>
export default {
  name: 'NewSurveyPage',
}
</script>

<script setup>
import { ref } from 'vue';
import { useContext } from '@nuxtjs/composition-api';
const uuid =  require('uuid');

import SurveysForm from '@/components/pages/surveys/common/SurveysForm';
import TheCondition from '@/components/pages/surveys/common/SurveysForm/TheCondition';
import VBreadcrumbs from '@/components/common/ui/VBreadcrumbs';
import VTabs from '@/components/common/VTabs';

const router = useRouter();
const route = useRoute();

const { $axios } = useContext();

const breadcrumbsNavigation = [
  {
    text: 'Опросы',
    disabled: false,
    to: '/surveys',
  },
  {
    text: 'Добавить опрос',
    disabled: true,
    to: '/surveys/new',
  },
];
const contentNavigation = [
  {
    title: 'Параметры',
    value: 'params',
  },
  {
    title: 'Вопросы',
    value: 'questions',
  },
  {
    title: 'Логика',
    value: 'logics',
  },
  {
    title: 'Условия',
    value: 'terms',
  },
  {
    title: 'Респонденты',
    value: 'respondents',
  },
];
const activeContentItem = ref(route.query.content || 'params');

const changeActiveContentItem = (value) => {
  router.push({ path: '/surveys/new', query: { content: value } })
  activeContentItem.value = value;
};

const conditions = ref([]);
const addCondition = () => {
  conditions.value.push({ id: uuid.v1() })
}
const destroyCondition = (index) => {
  conditions.value.splice(index, 1);
}

const conditionsTypes = [
  {
    title: 'Возраст респондента',
    value: 'age',
    requestKey: 'ages',
    addBtnText: 'Добавить диапазон',
  },
  {
    title: 'Тип карты лояльности',
    value: 'cardType',
    requestKey: 'cardTypes',
    addBtnText: 'Добавить тип',
  },
  {
    title: 'Статус карты лояльности',
    value: 'cardStatuses',
    requestKey: 'cardStatuses',
    addBtnText: 'Добавить статус',
  },
]

const dataForSending = ref({});
const changeValue = ({key, data}) => dataForSending.value[key] = data;
const submitForm = async () => {
  try {
    const response = await $axios.$post('/respondents', dataForSending.value);

    console.log(response);
  } catch (e) {
    console.error(e);
  }
}
</script>

<style lang="scss" scoped>
.new-surveys-page {

  &__add-btn {
    display: inline-block;
    margin-top: 50px;
  }

  &__tabs {
    margin-top: 40px;
  }

  &__form {
    margin-top: 50px;
  }
}
</style>
