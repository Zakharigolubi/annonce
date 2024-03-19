<template>
  <div class="footer">
    <q-toolbar class="footer__toolbar">
      <NavLink class="footer__black-link">© Annonce 2023</NavLink>
      <NavLink class="footer__grey-link">Документы</NavLink>
      <NavLink class="footer__grey-link">О компании</NavLink>
    </q-toolbar>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #F5F5F5;
  border-top: 1px solid #DBDBDB;
  position: fixed;
  bottom: 0;
  width: 100vw;
  font-size: 15px;
  line-height: 24px;
  font-weight: 500;

  &__toolbar{
    padding: 24px 32px 39px 24px;
  }

  &__black-link {
    padding-right: 20px;
  }

  &__grey-link {
    color: #6B6B6B;
    padding-right: 20px;
  }
}
</style>
