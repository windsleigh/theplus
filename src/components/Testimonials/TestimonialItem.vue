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
          <img
            :src="testimonial.logo"
            alt="Company Logo"
            class="company-logo"
          />
          <div class="testimonial-text-container">
            <h2 class="testimonial-title">{{ testimonial.title }}</h2>
            <p class="testimonial-quote">{{ testimonial.quote }}</p>
            <p class="testimonial-author">{{ testimonial.author }}</p>
          </div>
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
import { gsap } from "gsap";
import { onBeforeUnmount, onMounted, ref } from "vue";

interface Testimonial {
  id: number;
  title: string;
  quote: string;
  author: string;
  logo: string;
}

export default {
  name: "TestimonialComponent",
  setup() {
    const currentTestimonialIndex = ref(0);
    const testimonials = ref<Testimonial[]>([
      {
        id: 1,
        logo: "testimonial_logo/logo_1.png",
        title: "Bazar Meghna",
        quote:
          "Nos ayudaron a impulsar las ventas en todo lo que no se movía en el negocio. Siempre con buena disposición a ayudar en más de lo que se contrató exactamente",
        author: "Pierina Assen",
      },
      {
        id: 2,
        logo: "testimonial_logo/logo_2.png",
        title: "Santina",
        quote:
          "Cumplieron con plazos, y un excelente desempeño en el lanzamiento del e-commerce. La relación muy amigable y profesional, escuchaban todo lo que quería transmitir en mi negocio",
        author: "Favia Pallavicini",
      },
      {
        id: 3,
        logo: "testimonial_logo/logo_3.png",
        title: "Saint Venik",
        quote:
          "El equipo ha demostrado un aumento en mis ventas del 500% en tan sólo 3 meses. Profesionales, dedicados y expertos en el marketing digital. Mi negocio solo depende de esta área, en buenas manos ha crecido como nunca antes.",
        author: "Benjamín Álvarez",
      },
      {
        id: 4,
        logo: "testimonial_logo/logo_4.png",
        title: "Perfumeria Jashan",
        quote:
          "Han ayudado en múltiples estructuras y flujos trabajo de la perfumería extras a lo contratado. Permitieron tener un nuevo orden y así en consiguiente una mejora en los resultados inmediatamente reflejado en las ventas.",
        author: "Kishan Punjabi",
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
  overflow: hidden;
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
  /* text-align: center; */
  width: 50%;
  padding: 0px;
}
.testimonial-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem; /* Adjust spacing between items */
}

.company-logo {
  width: 150px; /* Adjust as needed */
  margin-right: 20px; /* Adjust space between logo and text */
  border-radius: 100px;
}

.testimonial-text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align text to the start of the container */
}

.testimonial-title,
.testimonial-quote,
.testimonial-author {
  margin: 0; /* Remove default margins if needed */
  text-align: left;
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

@media (max-width: 1000px) {
  .component-container {
    height: 50vh;
  }
}

@media (max-width: 887px) {
  .component-container {
    height: 60vh;
  }
  .testimonial-item {
    flex-direction: column;
    align-items: center; /* Center align items for smaller screens */
  }

  .company-logo {
    margin-right: 0;
    margin-bottom: 10px; /* Add some space between logo and text */
    width: 100px; /* Adjust the size of the logo for smaller screens */
  }

  .testimonial-text-container {
    align-items: center; /* Center align text for smaller screens */
  }

  .testimonial-title,
  .testimonial-quote,
  .testimonial-author {
    text-align: center; /* Center the text for smaller screens */
  }
}

@media (max-width: 605px) {
  .component-container {
    height: 50vh;
  }
}
@media (max-width: 405px) {
  .component-container {
    height: 60vh;
  }
}
@media (max-height: 800px) {


.component-container {
  height: 45vh;

}
}
</style>
