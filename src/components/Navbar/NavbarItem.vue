<template>
  <div class="navbar-container">
    <div class="logo">
      <router-link to="/">Logo</router-link>
    </div>
    <div class="nav-links">
      <router-link to="/#about">About</router-link>
      <router-link to="/#services">Services</router-link>
      <router-link to="/#contact">Contact</router-link>
    </div>
  </div>
</template>

<style scoped>
.navbar-container {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0f2226;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  margin-left: 20px;
}

.nav-links {
  margin-right: 20px;
  display: flex;
  gap: 20px;  /* Adds space between the links */
}

.router-link-active,
.router-link-exact-active,
.router-link-active:hover,
.router-link-exact-active:hover {
  color: white;  /* Sets the color to white */
  text-decoration: none;  /* Removes the underline */
}
</style>
