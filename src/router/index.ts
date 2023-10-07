import { createRouter, createWebHistory } from 'vue-router';
import HomeItem from '../components/Home/HomeItem.vue';
import AboutItem from '../components/About/AboutItem.vue';
import TimelineItem from '../components/Timeline/TimelineItem.vue';
import ServicesItem from '../components/Services/ServicesItem.vue';
import ContactItem from '../components/Contact/ContactItem.vue';
import TestimonialItem from '../components/Testimonials/TestimonialItem.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeItem,
      children: [
        {
          path: 'about',
          component: AboutItem
        },
        {
          path: 'timeline',
          component: TimelineItem
        },
        {
          path: 'services',
          component: ServicesItem
        },
        {
          path: 'contact',
          component: ContactItem
        },
        {
          path: 'testimonials',
          component: TestimonialItem
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
