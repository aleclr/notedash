<template>
  <nav
    class="navbar is-success menuheader"
    aria-label="main navigation"
    role="navigation"
  >
  <div class="container is-max-desktop px-2">
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
        ref="navbarBurguerRef"
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
      ref="navbarMenuRef"
    >
      <div class="navbar-start">
        <button
          v-if="storeAuth.user.id"
          @click="logout"
          class="button is-small is-info mt-3 mb-3"
        >
          Logout {{ storeAuth.user.email }}
        </button>
      </div>
      <div class="navbar-end">
        <RouterLink
          @click="showMobileNav = false"
          to="/"
          class="navbar-item"
          active-class="is-active"
        >
          Notes
        </RouterLink>
        <RouterLink
          @click="showMobileNav = false"
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
  import { onClickOutside } from '@vueuse/core';
  import { useStoreAuth } from '@/stores/storeAuth';

  const showMobileNav = ref(false);

  const navbarMenuRef = ref(null);

  const navbarBurguerRef = ref(null);

  const storeAuth = useStoreAuth();

  onClickOutside(navbarMenuRef, () => {
    showMobileNav.value = false
  }, {
    ignore: [navbarBurguerRef]
  });

  const logout = () => {
    showMobileNav.value = false;
    storeAuth.logoutUser();
  };
  
</script>

<style>
  .appTitle {
    color: white !important;
  }

  /* .menuheader {

  } */

  /* .navbar-menu {
    width: 50%;
  } */
</style>