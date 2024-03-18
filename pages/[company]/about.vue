<template>
  <AppHeader />
  <AppNavigation />
  <div class="about">
    <div class="container">
      <div class="company">
        <div class="text-h3 company__title">О компании</div>
        <p class="company__description">Копкой занимаемся 15 лет. Все началось с хобби и плавно <br> переросло в любимую работу. Работаем <br> с профессиональной техникой.</p>
      </div>
      <div class="working-hours">
        <div class="text-h3 working-hours__title">
          Режим работы
          <q-icon class="working-hours__icon" name="expand_more"></q-icon>
        </div>
        <p class="working-hours__description">Сегодня с 8:00 до 23:00</p>
      </div>
      <div class="location">
        <div class="location-info">
          <div class="text-h3 location__title">Местоположение</div>
          <p class="location__description">Ростов на Дону, Воронежская ул.,<br>42А корп. 1</p>
        </div>
        <img class="location__img" src="/images/map.jpeg"/>
      </div>
    </div>
   </div>
  <AppFooter />
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #CCCCCC;
  flex: 1;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.company {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;
  margin-top: 32px;
  padding: 20px;
  gap: 8px;

  &__description {
    font-size: 17px;
    font-weight: 400;
    line-height: 28px;
  }
}

.working-hours {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #F5F5F5;
  border-radius: 16px;
  gap: 8px;
  opacity: 30%;

  &__icon {
    align-items: flex-end;
  }
}

.location {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px; 

  .location-info {
    padding: 20px;
  }

  &__description {
    font-size: 17px;
    font-weight: 400;
    line-height: 28px;
    color: #337566;
  }

  &__img {
    display: flex;
    justify-content: flex-end;
    align-self: center;
    max-width: 100%;
    height: auto;
  }
}
</style>
