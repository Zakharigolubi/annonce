<template>
  <AppHeader />
  <AppNavigation />
  <div class="lorem">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
    ratione atque quae repellendus quisquam accusamus minima delectus repellat
    sed amet, eos, recusandae perspiciatis error officiis dolor laborum ab?
    Nisi, adipisci officiis sapiente amet fugiat vitae dignissimos et ratione
    omnis laboriosam laborum, a animi nobis alias odio, esse obcaecati
    voluptatibus. Voluptates, veniam suscipit tempore sit optio tempora dolorum
    aperiam nihil sapiente porro, veritatis, provident illum? Nulla asperiores
    nihil est aliquid iure?
    {{ $route.params.company }}
  </div>
  <AppFooter />
</template>

<style scoped>
.lorem {
  color: red;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
</style>
