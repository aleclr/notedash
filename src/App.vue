<template>
  <!-- <RouterLink to="/">Notes</RouterLink>
  <RouterLink to="/stats">Stats</RouterLink> -->
  <NavBar />
  <div class="container is-max-desktop px-2 py-4">
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>

  import NavBar from './components/Layout/NavBar.vue';



</script>

<style>
  @import url(\Alec\FATEC\vue3course\notedash\node_modules\bulma\css\bulma.min.css);

</style>