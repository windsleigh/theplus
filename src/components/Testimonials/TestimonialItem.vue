<template>
  <div id="testimonial" class="component-container">
    <h2 class="services-title">Nuestros Clientes</h2>
    <div class="nav-container">
      <button
        class="button--prev Wallop-buttonPrevious"
        title="previous"
        @click="prevTestimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.9 50.2">
          <path d="M25.1 50.2L0 25.1 25.1 0l2.8 2.8L5.7 25.1l22.2 22.2z" />
        </svg>
      </button>
      <div class="parent">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          :data-index="index"
          class="testimonial-item"
          v-show="currentTestimonialIndex === index"
        >
          <h2 class="testimonial-title">{{ testimonial.title }}</h2>
          <p class="testimonial-quote">{{ testimonial.quote }}</p>
          <p class="testimonial-author">{{ testimonial.author }}</p>
        </div>
      </div>
      <button
        class="button--next Wallop-buttonNext"
        title="next"
        @click="nextTestimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.9 50.2">
          <path d="M25.1 50.2L0 25.1 25.1 0l2.8 2.8L5.7 25.1l22.2 22.2z" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { gsap } from "gsap";

interface Testimonial {
  id: number;
  title: string;
  quote: string;
  author: string;
}

export default {
  name: "TestimonialComponent",
  setup() {
    const currentTestimonialIndex = ref(0);
    const testimonials = ref<Testimonial[]>([
      {
        id: 1,
        title: "Testimonial 1",
        quote: "This is a fantastic product!",
        author: "Author 1",
      },
      {
        id: 2,
        title: "Testimonial 2",
        quote: "This is a fantastic product!",
        author: "Author 1",
      },
      {
        id: 3,
        title: "Testimonial 3",
        quote: "This is a fantastic product!",
        author: "Author 1",
      },
    ]);

    let testimonialInterval: number | null = null;

    const animateTransition = (direction: string) => {
      const parent = document.querySelector(".parent");
      if (parent) {
        const currentIndex = currentTestimonialIndex.value;
        const previousIndex =
          direction === "next"
            ? (currentIndex + testimonials.value.length - 1) %
              testimonials.value.length
            : (currentIndex + 1) % testimonials.value.length;

        const currentElement = parent.querySelector(
          `.testimonial-item[data-index="${currentIndex}"]`
        );
        const previousElement = parent.querySelector(
          `.testimonial-item[data-index="${previousIndex}"]`
        );

        if (currentElement && previousElement) {
          gsap.set(currentElement, {
            x: direction === "next" ? "100%" : "-100%",
            opacity: 0,
          });

          const timeline = gsap.timeline({
            onComplete: () => {
              startInterval();
            },
          });
          timeline
            .to(previousElement, {
              x: direction === "next" ? "-100%" : "100%",
              opacity: 0,
              duration: 0.5,
            })
            .to(
              currentElement,
              { x: "0%", opacity: 1, duration: 0.5 },
              "-=0.25"
            );
        }
      }
    };

    const startInterval = () => {
      if (testimonialInterval !== null) {
        window.clearInterval(testimonialInterval);
      }
      testimonialInterval = window.setInterval(nextTestimonial, 5000);
    };
    const nextTestimonial = () => {
      currentTestimonialIndex.value =
        (currentTestimonialIndex.value + 1) % testimonials.value.length;
      animateTransition("next");
    };

    const prevTestimonial = () => {
      currentTestimonialIndex.value =
        (currentTestimonialIndex.value + testimonials.value.length - 1) %
        testimonials.value.length;
      animateTransition("prev");
    };

    onMounted(() => {
      startInterval();
    });

    onBeforeUnmount(() => {
      if (testimonialInterval !== null) {
        window.clearInterval(testimonialInterval);
      }
    });

    return {
      currentTestimonialIndex,
      testimonials,
      nextTestimonial,
      prevTestimonial,
    };
  },
};
</script>

<style scoped>
.component-container {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 30vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
  backdrop-filter: blur(10px);
  background: linear-gradient(to right, #1c5e5e, #1e3d41, #0f2226);
  backdrop-filter: blur(100px);
}
.services-title {
  margin-bottom: 2rem;
  color: white;
  font-size: 2rem;
}

.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
}

button {
  background-color: transparent;
  border: none;
  width: 65px;
  padding: 20px;
  transition: opacity 200ms;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
  z-index: 2;
  opacity: 0.2;
}
button svg {
  fill: #ffffff;
}
button:hover,
button:focus {
  opacity: 1;
}

.button--next {
  left: auto;
  right: 0;
  transform: translate3d(0, -50%, 0) rotate(180deg);
}

.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px;
}

.testimonial-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.testimonial-quote {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.testimonial-author {
  font-size: 0.875rem;
  color: rgba(204, 204, 204, 0.8); /* Optional: for a subtle author name */
}
</style>
