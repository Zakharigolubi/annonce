<script setup lang="js">
import companies from '../static/companies.json'

const route = useRoute()
const currentCompany = companies.find(
  (company) => company.path === route.params.company
)
console.log(route)
</script>

<template>
  <div class="nav">
    <q-avatar rounded class="nav__pic">
      <img :src="`/images/${currentCompany.image}.jpeg`" />
    </q-avatar>
    <div class="text-h3">
      {{ currentCompany.name }}
    </div>
    <ul class="nav__info info">
      <li class="info__item">
        <span class="info__text">
          <Icon name="verified" variant="green"/>
          <span>Документы проверены</span>
        </span>
      </li>
      <li class="info__item">
        <span class="info__text">
          <Icon name="r_star" variant="green"/>
          <span>4.7</span>
        </span>
      </li>
      <li class="info__item">
        <span class="info__text">19 отзывов</span>
      </li>
    </ul>
    <Button class="nav__button" label="Показать номер телефона" variant="green-large"/>
    <div class="nav__buttons-group">
      <NuxtLink :to="`/${$route.params.company}/`">
        <Button :outline="$route.path === `/${$route.params.company}/`" label="Товары и услуги" variant="grey" />
      </NuxtLink> 
      <NuxtLink :to="`/${$route.params.company}/agents`">
        <Button :outline="$route.path === `/${$route.params.company}/agents`" label="Агенты" variant="grey"/>
      </NuxtLink>
      <NuxtLink :to="`/${$route.params.company}/about`">
        <Button :outline="$route.path === `/${$route.params.company}/about`" label="О компании" variant="grey"/>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;

&__pic {
  width: 120px;
  height: 120px;
  margin-bottom: 24px;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 24px; 
  margin-top: 12px;

  &__item {
    list-style: none;
    margin-right: 20px;
    position: relative;
  }
  &__item:first-child:after {
    display: none;
  }

  &__item:after {
    position: absolute;
    top: 0;
    left: -14px;
    content: "•";
  }

  &__text {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}

&__button {
  margin-bottom: 32px;
}

&__buttons-group {
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
  gap: 8px;
}
}
</style>
