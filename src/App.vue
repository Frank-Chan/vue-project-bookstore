<template>
  <Header/>
  <Menu/>
  <RouterView/>
  <HomeCategoryVue/>
  <HomeScrollPicVue/>
  <HomeBooksHot/>
</template>

<script>
import Header from './components/Header.vue';
import HomeCategoryVue from './components/HomeCategory.vue';
import HomeScrollPicVue from './components/HomeScrollPic.vue';
import HomeBooksHot from './components/HomeBooksHot.vue';
import Menu from './components/Menu.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    Menu,
    HomeCategoryVue,
    HomeScrollPicVue,
    HomeBooksHot
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
