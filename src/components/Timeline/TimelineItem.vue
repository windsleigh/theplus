<template>
  <div class="component-container">
    <div class="text-titles">
      <h4>INTRODUCIENDO</h4>
      <h1 class="title-item">UNA ACTUALIZACIÓN <u>MASIVA</u></h1>
      <h4><u>El plus</u> que tu empresa necesita</h4>
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
            />Contactanos
          </h3>
          <p class="text-body">
            Póngase en contacto con nosotros para obtener más información sobre
            nuestros servicios.
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
            />Agenda una Reunión
          </h3>
          <p class="text-body">
            Planifique una reunión para discutir sus necesidades y objetivos.
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
            />Recibe un Plan Personalizado
          </h3>
          <p class="text-body">
            Reciba un plan personalizado diseñado específicamente para alcanzar
            sus metas.
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
            Comienza a aumentar sus ingresos con nuestros servicios
            especializados.
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
  height: 250vh;
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
  font-size: 3rem;
  align-items: center;
  text-align: center;
}
.title-item {
  color: aquamarine;
  font-family: "Anton", sans-serif;
  margin-bottom: 20px;
  color: white;
  font-size: 6vw;
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
  left: 900px; /* Adjust this value to position the line relative to the indicators */
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
  left: 900px; /* This positions the indicator at the start of the timeline-item */
  transform: translateX(-50%); /* This centers the indicator on the line */
}

.text-content {
  margin-left: 950px;
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
  left: 150px; /* Adjust this value to position the images to the left of the indicators */
  width: 600px; /* Adjust this value to control the width of the images */
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

.agenda-button {
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  font-size: 1.8rem;
  color: white;
  background-color: #6ebaba;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-block;
  text-decoration: none;
}

.agenda-button:hover {
  background-color: #4c8389;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1.6rem;
  color: #6ebaba;
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
    font-size: 5vw;
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

@media (max-width: 1200px) {
  .component-container {
    /* Increase viewport height */
    height: 270vh;
  }

  .text-titles {
    font-size: 2rem;
  }
  .title-item {
    font-size: 5vw;
  }
}

@media (max-width: 1097px) {
  .component-container {
    /* Increase viewport height */
    height: 270vh;
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
  .text-titles {
    font-size: 1.8rem;
  }
  .title-item {
    font-size: 8vw;
  }
}

@media (max-width: 600px) {
  .component-container {
    /* Increase viewport height */
    height: 180vh;
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
@media (max-width: 390px) {
  .component-container {
    /* Increase viewport height */
    height: 220vh;
    overflow: hidden;
  }
  .text-titles {
    margin-bottom: 60px;
  }
}
@media (max-width: 375px) {
  .component-container {
    /* Increase viewport height */
    height: 280vh;
    overflow: hidden;
  }
  .text-titles {
    margin-bottom: 60px;
  }
}
</style>
