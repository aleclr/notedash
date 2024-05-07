<template>
  <!-- <RouterLink to="/">Notes</RouterLink>
  <RouterLink to="/stats">Stats</RouterLink> -->
  <NavBar />
  <div class="container appContainer is-max-desktop px-2 py-4">
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>

  import NavBar from './components/Layout/NavBar.vue';



</script>

<style>
  @import url(node_modules\bulma\css\bulma.min.css);

  .appContainer {
    width: 100rem !important;
    display: flex;
    flex-direction: column;
  }
  .main-content {
    
  }
</style>