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

  import { onMounted } from 'vue';
  import NavBar from './components/Layout/NavBar.vue';
  import { useStoreNotes } from './stores/storeNotes';

  const storeNotes = useStoreNotes();

  onMounted(() => {
    storeNotes.getNotes()
  });

</script>

<style>
  @import url(../node_modules/bulma/css/bulma.min.css);

</style>