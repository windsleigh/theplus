<template>
  <div class="component-container">
    <div class="text-titles">
      <div class="title-item">
        ¿Quieres <span class="pen-underline-1">dominar</span> el área digital?
      </div>
      <div class="subtitle-item">
        Somos <span class="pen-underline-2">The Plus</span> que tu empresa
        necesita
      </div>
    </div>
    <ul class="timeline">
      <li class="timeline-item">
        <img
          src="src/assets/timeline_assets/timeline_1.png"
          alt="Timeline Step 1"
          class="timeline-image"
        />
        <div class="timeline-indicator"></div>
        <div class="text-content">
          <h3 class="title">
            <img
              src="src/assets/timeline_assets/icon_2.png"
              alt="Icon 1"
              class="title-icon"
            />Agenda una Reunión
          </h3>
          <p class="text-body">
            Contáctanos para agendar una reunión, para generar el mejor plan
            basándonos en tus necesidades.
          </p>
        </div>
      </li>
      <li class="timeline-item">
        <img
          src="src/assets/timeline_assets/timeline_2.png"
          alt="Timeline Step 2"
          class="timeline-image"
        />
        <div class="timeline-indicator"></div>
        <div class="text-content">
          <h3 class="title">
            <img
              src="src/assets/timeline_assets/icon_1.png"
              alt="Icon 2"
              class="title-icon"
            />Recibe un Plan Personalizado
          </h3>
          <p class="text-body">
            Recibirás un plan personalizado diseñado específicamente para
            alcanzar los objetivos de tu empresa.
          </p>
        </div>
      </li>
      <li class="timeline-item">
        <img
          src="src/assets/timeline_assets/timeline_3.png"
          alt="Timeline Step 3"
          class="timeline-image"
        />
        <div class="timeline-indicator"></div>
        <div class="text-content">
          <h3 class="title">
            <img
              src="src/assets/timeline_assets/icon_3.png"
              alt="Icon 3"
              class="title-icon"
            />Trabaja con Nosotros
          </h3>
          <p class="text-body">
            Cuéntanos sobre tu negocio para así comernos a tu competencia.
          </p>
        </div>
      </li>
      <li class="timeline-item">
        <img
          src="src/assets/timeline_assets/timeline_4.png"
          alt="Timeline Step 4"
          class="timeline-image"
        />
        <div class="timeline-indicator"></div>
        <div class="text-content">
          <h3 class="title">
            <img
              src="src/assets/timeline_assets/icon_4.png"
              alt="Icon 4"
              class="title-icon"
            />
            Aumenta tus Ingresos
          </h3>
          <p class="text-body">
            Verás reflejado nuestro trabajo en la facturación de tu empresa.
          </p>
        </div>
      </li>
    </ul>
    <router-link to="/#contact">
      <button class="agenda-button">Agenda tu Reunión</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: "Timeline",
  setup() {
    onMounted(() => {
      const smallScreenMatchMedia = window.matchMedia("(max-width: 600px)");

      gsap.utils.toArray(".timeline-item").forEach((item) => {
        const element = item as HTMLElement;

        // Different animation parameters based on screen size
        const animationParams = smallScreenMatchMedia.matches
          ? {
              x: 0,
              y: 0,
              start: "top 80%",
              end: "bottom 30%",
            }
          : {
              x: 100, // changed from 100 to -100
              y: 500,
              start: "top 60%",
              end: "bottom 20%",
            };

        // Existing animation for text-content
        gsap.from(element.querySelector(".text-content") as HTMLElement, {
          autoAlpha: 0,
          x: animationParams.x,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: animationParams.start,
            end: animationParams.end,
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@500&display=swap");
.component-container {
  height: 235vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 2rem;
  background: linear-gradient(to right, #1c5e5e, #1e3d41, #0f2226);
  backdrop-filter: blur(
    100px
  ); /* Adjust this value to control the level of blur */
  opacity: 1; /* Optional: This will make the background slightly transparent, which can enhance the blur effect */
}

.text-titles {
  margin-bottom: 150px;
  align-items: center;
  text-align: center;
}
.title-item {
  color: aquamarine;
  font-family: "Anton", sans-serif;
  margin-bottom: 20px;
  color: white;
  font-size: 6rem;
}
.subtitle-item {
  color: white;
  font-size: 3rem;
  padding-bottom: 15px;
}

.timeline {
  padding: 0;
  margin: 0;
  list-style-type: none;
  position: relative; /* This makes sure the pseudo-element is positioned relative to this element */
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 100px;
  left: 950px; /* Adjust this value to position the line relative to the indicators */
  width: 2px;
  background-color: #ffffff;
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 250px; /* Adjust spacing between items */
  position: relative; /* This makes sure the timeline-indicator is positioned relative to this item */
}

.timeline-indicator {
  width: 20px;
  height: 20px;
  background-color: #6ebaba;
  border-radius: 50%;
  position: absolute;
  left: 950px; /* This positions the indicator at the start of the timeline-item */
  transform: translateX(-50%); /* This centers the indicator on the line */
}

.text-content {
  margin-left: 1000px;
  padding: 20px;
  width: 50%;
  /* Add any additional styles for the text content here */
}

.text-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: #4c83898a;
  backdrop-filter: blur(2px);
  border-radius: 10px;
  padding-left: 40px;
  padding-right: 40px;
}

.timeline-image {
  position: absolute;
  left: 200px; /* Adjust this value to position the images to the left of the indicators */
  width: 500px; /* Adjust this value to control the width of the images */
  height: auto; /* This will maintain the aspect ratio of the images */
  transform: translateY(
    0%
  ); /* This will vertically center the images with the indicators */
}
.title-icon {
  vertical-align: middle;
  margin-right: 8px; /* Adjust this value to control spacing between the icon and the text */
  width: 40px; /* Adjust this value to control the width of the icons */
  height: auto; /* This will maintain the aspect ratio of the icons */
}

@keyframes breathing-border {
  0%,
  100% {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
@keyframes breathing-gradient {
  0%,
  100% {
    background-image: linear-gradient(
      to right,
      #007a7a,
      #00927f,
      #006f85
    ); /* Normal state gradient */
  }
  50% {
    background-image: linear-gradient(to right, #007a7a, #007a7a, #007a7a);
  }
}
@keyframes shifting-gradient {
  0%,
  100% {
    background-size: 200% 100%;
    background-position: right bottom;
  }
  50% {
    background-size: 200% 100%;
    background-position: left bottom;
  }
}

.agenda-button {
  position: relative;
  overflow: hidden;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  font-size: 1.8rem;
  color: white;
  background-image: linear-gradient(to right, #007a7a, #00927f, #006f85);
  background-size: 200% 100%;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-block;
  text-decoration: none;
  width: 450px;
  border: 2px solid transparent;
  animation: breathing-border 3s infinite,
    shifting-gradient 3s infinite ease-in-out;
}

.agenda-button:hover {
  background: linear-gradient(to right, #10e7d5, #006d5e, #10e7d5);
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1.6rem;
  color: #6ebaba;
}
.pen-underline-1 {
  position: relative;
  /* cursor: pointer; */
  color: #51ffff; /* Or any other color you prefer for the text */
  text-decoration: none;
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 5px 2px;
}

.pen-underline-1::after {
  content: "";
  position: absolute;
  bottom: -115px; /* Adjust the distance of the underline from the text */
  left: 0;
  right: 0;
  height: 230px; /* Thickness of the pen underline */
  background-image: url("src/assets/underline-2.svg");
  background-repeat: repeat-x;
  background-size: 100% 100%;
}
.pen-underline-2 {
  position: relative;
  /* cursor: pointer; */
  color: #51ffff; /* Or any other color you prefer for the text */
  text-decoration: none;
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 5px 2px;
}

@media (max-width: 1550px) {
  .component-container {
    /* Increase viewport height */
    height: 250vh;
  }
  .text-titles {
    font-size: 2rem;
  }
  .title-item {
    font-size: 6rem;
  }
  .timeline-image {
    /* Hide the images */
    width: 400px;
    left: 40px;
  }
  .timeline-indicator {
    left: 550px;
  }
  .timeline::before {
    left: 550px;
  }
  .text-content {
    margin-left: 600px;
  }
}

@media (max-width: 1280px) {
  .component-container {
    /* Increase viewport height */
    height: 280vh;
  }

  .text-titles {
    font-size: 2rem;
  }
  .title-item {
    font-size: 5rem;
  }
}

@media (max-width: 1097px) {
  .component-container {
    /* Increase viewport height */
    height: 280vh;
  }
  .timeline-image {
    /* Hide the images */
    width: 350px;
    left: 40px;
  }
  .timeline-indicator {
    left: 400px;
  }
  .timeline::before {
    left: 400px;
  }
  .text-content {
    margin-left: 450px;
  }
  .title-item {
    font-size: 4rem;
  }
  .subtitle-item {
    font-size: 2.5rem;
  }
}

@media (max-width: 880px) {
  .component-container {
    /* Increase viewport height */
    height: 170vh;
  }
  .timeline-image {
    /* Hide the images */
    display: none;
  }
  .timeline::before,
  .timeline-indicator {
    /* Adjust the position of the timeline line and indicators */
    left: 50px;
  }
  .timeline-item {
    /* Adjust spacing between items */
    margin-bottom: 100px;
  }
  .text-content {
    /* Adjust margin for text content */
    font-size: large;
    margin-left: 100px;
    width: 70%;
  }
  .title,
  .text-body {
    /* Increase text size for better readability */
    font-size: 1.2em;
  }
  .title-item {
    font-size: 3.5rem;
  }
  .subtitle-item {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .component-container {
    /* Increase viewport height */
    height: 190vh;
  }
  .timeline-image {
    /* Hide the images */
    display: none;
  }
  .timeline::before,
  .timeline-indicator {
    /* Adjust the position of the timeline line and indicators */
    left: 50px;
  }
  .timeline-item {
    /* Adjust spacing between items */
    margin-bottom: 100px;
  }
  .text-content {
    /* Adjust margin for text content */
    font-size: large;
    margin-left: 100px;
    width: 70%;
  }
  .title,
  .text-body {
    /* Increase text size for better readability */
    font-size: 1.2em;
  }
  .agenda-button {
    width: 400px;
  }
}
@media (max-width: 450px) {
  .component-container {
    /* Increase viewport height */
    height: 210vh;
    overflow: hidden;
  }
  .timeline-image {
    /* Hide the images */
    display: none;
  }
  .timeline::before,
  .timeline-indicator {
    /* Adjust the position of the timeline line and indicators */
    left: 50px;
  }
  .timeline-item {
    /* Adjust spacing between items */
    margin-bottom: 100px;
  }
  .text-content {
    /* Adjust margin for text content */
    font-size: large;
    margin-left: 100px;
    width: 70%;
  }
  .title,
  .text-body {
    /* Increase text size for better readability */
    font-size: 1.2em;
  }
}

@media (max-width: 500px) {
  .component-container {
    /* Increase viewport height */
    height: 235vh;
    overflow: hidden;
  }
  .text-titles {
    margin-bottom: 60px;
  }
  .agenda-button {
    width: 300px;
  }
}
@media (max-width: 375px) {
  .component-container {
    /* Increase viewport height */
    height: 310vh;
    overflow: hidden;
  }
  .text-titles {
    margin-bottom: 60px;
  }
}
</style>
