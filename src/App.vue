<template>
  <div id="app">
    <div class="nav"><NavbarItem /></div>
    <div class="rest">
      <HomeItem />
      <AboutItem />
      <TimelineItem />
      <ServicesItem />
      <ContactItem />
      <TestimonialItem />
      <FooterItem />
    </div>
  </div>
</template>

<script setup lang="ts">
// Importing components
import NavbarItem from "./components/Navbar/NavbarItem.vue";
import HomeItem from "./components/Home/HomeItem.vue";
import AboutItem from "./components/About/AboutItem.vue";
import TimelineItem from "./components/Timeline/TimelineItem.vue";
import ServicesItem from "./components/Services/ServicesItem.vue";
import ContactItem from "./components/Contact/ContactItem.vue";
import TestimonialItem from "./components/Testimonials/TestimonialItem.vue";
import FooterItem from "./components/Footer/FooterItem.vue";
</script>

<style>

</style>
