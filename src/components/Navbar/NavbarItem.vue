<template>
  <div :class="['navbar-container', { scrolled: isScrolled }]">
    <div class="logo">
      <router-link to="/">
        <img src="src/assets/logo-p-50.png" alt="The Plus" />
      </router-link>
    </div>
    <div class="nav-links">
      <router-link to="/#home">Home</router-link>
      <router-link to="/#about">About</router-link>
      <router-link to="/#services">Services</router-link>
      <router-link to="/#contact">Contact</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref<boolean>(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  background-color: transparent;
  transition: background-color 0.5s ease-in-out;
  z-index: 100;
  border-top: 2px solid #ffffff; /* Top border */
  border-bottom: 2px solid #ffffff; /* Bottom border */
}

.logo {
  margin-left: 2vw;
}

.nav-links {
  margin-right: 20px;
  display: flex;
  gap: 20px; /* Adds space between the links */
}

.router-link-active,
.router-link-exact-active,
.router-link-active:hover,
.router-link-exact-active:hover {
  color: white; /* Sets the color to white */
  text-decoration: none; /* Removes the underline */
}

.navbar-container.scrolled {
  background-color: #0f2226;
}
</style>
