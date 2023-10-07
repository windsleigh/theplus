<template>
    <div id="app">
      <NavbarItem />
      <HomeItem />
      <AboutItem />
      <TimelineItem />
      <ServicesItem />
      <ContactItem />
      <TestimonialItem />
      <FooterItem />
    </div>
  </template>
  
  <script setup lang="ts">
  // Importing components
  import NavbarItem from './components/Navbar/NavbarItem.vue';
  import HomeItem from './components/Home/HomeItem.vue';
  import AboutItem from './components/About/AboutItem.vue';
  import TimelineItem from './components/Timeline/TimelineItem.vue';
  import ServicesItem from './components/Services/ServicesItem.vue';
  import ContactItem from './components/Contact/ContactItem.vue';
  import TestimonialItem from './components/Testimonials/TestimonialItem.vue';
  import FooterItem from './components/Footer/FooterItem.vue';
  </script>
  
  <style scoped>
  /* You can add global styles here or import your main.css */
  </style>
  