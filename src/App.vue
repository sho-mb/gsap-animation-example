<script setup>
import MenuBar from './components/MenuBar.vue';
import MainPage from './components/MainPage.vue';

</script>

<template>
  <header>
    <div class="header_menu">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="25" height="25" />
      <MenuBar />
    </div>
  </header>
  <main>
    <MainPage />
    <SecondPageVue />
  </main>
</template>

<style scoped>
.header_menu{
  align-items: center;
  display: flex;
  justify-content: space-between;
}

header {
  width: 100%;
}


.logo {
  display: block;
  
}
</style>
