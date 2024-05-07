<template>
  <nav
    class="navbar is-success menuheader"
    aria-label="main navigation"
    role="navigation"
  >
  <div class="container is-max-desktop">
    <div class="navbar-brand">
      <div class="navbar-item is-size-4 is-family-monospace appTitle">
        Notedash
      </div>

      <a
        @click.prevent="showMobileNav = !showMobileNav"
        class="navbar-burger"
        :class="{ 'is-active' : showMobileNav }"
        aria-expanded="false"
        aria-label="menu"
        data-target="navbarBasicExample"
        role="button"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active' : showMobileNav }"
    >
      <div class="navbar-end">
        <RouterLink
          to="/"
          class="navbar-item"
          active-class="is-active"
        >
          Notes
        </RouterLink>
        <RouterLink
          to="/stats"
          class="navbar-item"
          active-class="is-active"
        >
          Stats
        </RouterLink>
      </div>
    </div>
  </div>
  </nav>
</template>

<script setup>
  import { ref } from 'vue';

  const showMobileNav = ref(false);
</script>

<style>
  .appTitle {
    color: white !important;
  }

  .menuheader {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    overflow: auto;
  }

  /* .navbar-menu {
    width: 50%;
  } */
</style>