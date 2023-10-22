<template>
  <div :class="['navbar-container', { scrolled: isScrolled }]">
    <div class="logo">
      <router-link to="/">
        <img src="src/assets/logo-p-50.png" alt="The Plus" />
      </router-link>
    </div>
    <div class="nav-links desktop-nav">
      <router-link to="/#home">Home</router-link>
      <router-link to="/#about">About</router-link>
      <router-link to="/#services">Services</router-link>
      <router-link to="/#contact">Contact</router-link>
    </div>
    <button class="hamburger mobile-nav" @click="toggleSidebar">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </button>
    <div :class="['sidebar', sidebarClass]">
      <button class="close-button" @click="toggleSidebar">
        <svg height="24px" width="24px" viewBox="0 0 24 24">
          <line x1="1" y1="23" x2="23" y2="1" stroke="white" stroke-width="2" />
          <line x1="1" y1="1" x2="23" y2="23" stroke="white" stroke-width="2" />
        </svg>
      </button>
      <div class="sidebar-links">
        <router-link to="/#home" @click="toggleSidebar">Home</router-link>
        <router-link to="/#about" @click="toggleSidebar">About</router-link>
        <router-link to="/#services" @click="toggleSidebar"
          >Services</router-link
        >
        <router-link to="/#contact" @click="toggleSidebar">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const isScrolled = ref(false);
const isSidebarOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const sidebarClass = computed(() => (isSidebarOpen.value ? "open" : "closed"));
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
}

.logo {
  margin-left: 2vw;
  margin-top: 0.5rem;
}

.nav-links {
  position: relative;
  margin-right: 20px;
  display: none;
  gap: 20px;
  font-size: 1.3rem;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.nav-links a {
  position: relative;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  background-color: #ffffff;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.nav-links a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
  background-color: rgb(0, 255, 255);
}

.router-link-active,
.router-link-exact-active,
.router-link-active:hover,
.router-link-exact-active:hover {
  color: white;
  text-decoration: none;
}

.navbar-container.scrolled {
  background-color: #000a0c;
  opacity: 0.8;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  border: none;
  background: none;
  cursor: pointer;
}

.bar {
  width: 24px;
  height: 3px;
  background-color: white;
}

@media (min-width: 769px) {
  .nav-links {
    display: flex;
  }
  .hamburger {
    display: none;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}

.sidebar {
  position: absolute;
  top: 0;
  right: -100%;
  height: 100vh;
  width: 80vw;
  background-color: #0f2226;
  transition: right 0.5s ease-in-out;
  z-index: 99;
  opacity: 0.8;
  justify-content: center;
  align-items: center;
}

.sidebar.open {
  right: 0;
}

.sidebar.closed {
  right: -100%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  z-index: 101;
  padding-right: 1rem;
  padding-top: 1rem;
}

.sidebar-links {
  padding: auto;
  padding-top: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  font-size: 2rem;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.sidebar-links a:hover {
  color: #ffffff;
  background-color: #000;
  border-radius: 16px;
  padding: 8px;
}
</style>
