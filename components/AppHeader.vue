<template>
  <div class="header">
    <q-toolbar class="header__toolbar">
      <div class="header__toolbar-left">
        <q-toolbar-title class="header__logo">Annoncé</q-toolbar-title>
        <q-btn no-caps class="header__btn">
          <Icon name="sym_r_view_cozy" variant="black-m" class="header__icon"/>
          Все категории
        </q-btn>
      </div>
      <div class="header__toolbar-right">
        <span class="header__geo">
          <Icon name="room" variant="black-s"/>
          Ростов-на-Дону
        </span>
        <div class="header__line"></div>
        <div class="header__link"><NavLink>Разместить объявление</NavLink></div>
        <q-btn no-caps class="header__btn profile">
          <Icon name="menu" variant="black-m" class="header__icon"/>
          <q-avatar class="profile__avatar">
            <img src="/images/avatar.jpeg" />
          </q-avatar>
        </q-btn>
      </div>
    </q-toolbar> 
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: #FFF7EB;

  &__toolbar {
    padding: 8px 24px 8px 32px;
    &-left {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &-right {
      display: flex;
      flex-direction: row;
      margin-left: auto;
      align-items: center;
    }
  }

  &__logo {
    padding: 0 36px 0 10px;
  }

  &__btn {
    background-color: #E8E8E8;
    border-radius: 40px;
    color: #0F0F0F;
    height: 48px;
  }

  &__icon {
    margin-right: 4px;
  }

  &__geo {
    color: #0F0F0F;
    font-size: 15px;
    font-weight: 400;
    gap: 4px;
    padding: 8px 12px;
    margin: 0 20px;
  }

  &__line {
    width: 1px;
    height: 32px;
    background-color: #CCCCCC;
  }

  &__link {
    color: #337566;
    font-size: 15px;
    font-weight: 500;
    padding: 8px 12px;
    margin: 0 24px;
  }
 
  .profile {
    display: flex;
    justify-content: space-between;
    padding-right: 4px;
    padding-left: 12px;

    &__avatar {
      width: 40px;
      height: 40px;
      margin-left: 4px;
    }
  }
}
</style>