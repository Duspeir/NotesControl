<script>
import { RouterLink } from 'vue-router'
// import Header from './views/Header.vue'
</script>

<template>
  <header class="wrapper">
    <RouterLink to="/">NotEd</RouterLink>
  </header>
  <RouterView />
</template>

<style scoped>
.wrapper {
  z-index: 10000;
  top: 0;
  width: 100%;
  height: 2em;
  /* background-color: rgba(7, 227, 227, 0.585); */
  background-color: #3b1c36;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 0 10px;
}
.wrapper > a {
  font-size: 1.5em;
  text-decoration: none;
  color: white;
}
.wrapper > a:hover {
  color: #eebef1;
  transform: scale(1.02);
  transition: 0.2s;
}
</style>
