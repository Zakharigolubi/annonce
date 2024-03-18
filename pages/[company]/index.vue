<template>
  <AppHeader />
  <AppNavigation />
  <div class="main">Главная {{ $route.params.company }}</div>
  <AppFooter />
</template>

<style>
.main {
  color: red;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
</style>
