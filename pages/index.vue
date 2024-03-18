<script setup lang="js">
import companies from '../static/companies.json'
</script>

<template>
  <div class="companies">
    <div v-for="(company, index) in companies" :key="index">
      <NuxtLink :to="`/${company.path}`" class="companies__item">
        <h5 class="text-weight-bold">{{ company.name }}</h5>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.companies {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &__item {
    text-decoration: none;
    color: #000;
    transition: all 0.3s ease;

    &:hover {
      color: teal;
    }
  }
}
</style>
