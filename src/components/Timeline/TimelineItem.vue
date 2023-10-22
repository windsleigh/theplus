<template>
  <div class="component-container">
    <ul class="timeline">
      <li class="timeline-item">
        <img
          src="src/assets/timeline_assets/timeline_1.png"
          alt="Timeline Step 1"
          class="timeline-image"
        />
        <div class="timeline-indicator"></div>
        <div class="text-content">
          <h3>
            <img
              src="src/assets/timeline_assets/icon_1.png"
              alt="Icon 1"
              class="title-icon"
            />Agenda una Reunión
          </h3>
          <p>
            Planifique una reunión para discutir sus necesidades y objetivos.
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
          <h3>
            <img
              src="src/assets/timeline_assets/icon_2.png"
              alt="Icon 2"
              class="title-icon"
            />Contactanos
          </h3>
          <p>
            Póngase en contacto con nosotros para obtener más información sobre
            nuestros servicios.
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
          <h3>
            <img
              src="src/assets/timeline_assets/icon_3.png"
              alt="Icon 3"
              class="title-icon"
            />Recibe un Plan Personalizado
          </h3>
          <p>
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
          <h3>
            <img
              src="src/assets/timeline_assets/icon_4.png"
              alt="Icon 4"
              class="title-icon"
            />
            Aumenta tus Ingresos
          </h3>
          <p>
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
      gsap.utils.toArray(".timeline-item").forEach((item, index) => {
        const element = item as HTMLElement;
        gsap.from(element.querySelector(".text-content") as HTMLElement, {
          autoAlpha: 0, // This will fade and un-fade the element
          x: 100, // This will start the text 100px to the right
          duration: 1, // Increase this value to slow down the animation, e.g., 1.5 for 1.5 seconds
          scrollTrigger: {
            trigger: element,
            start: "top 60%", // Adjust these values to control when the animation starts
            end: "bottom 20%", // and ends relative to the viewport
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  },
});
</script>

<style scoped>
.component-container {
  height: 220vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  background: linear-gradient(to right, #1c5e5e, #1e3d41, #0f2226);
  backdrop-filter: blur(
    100px
  ); /* Adjust this value to control the level of blur */
  opacity: 1; /* Optional: This will make the background slightly transparent, which can enhance the blur effect */
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
  bottom: 0;
  left: 400px; /* Adjust this value to position the line relative to the indicators */
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
  left: 400px; /* This positions the indicator at the start of the timeline-item */
  transform: translateX(-50%); /* This centers the indicator on the line */
}

.text-content {
  margin-left: 450px;
  width: 50%;
  /* Add any additional styles for the text content here */
}
.timeline-image {
  position: absolute;
  left: 40px; /* Adjust this value to position the images to the left of the indicators */
  width: 350px; /* Adjust this value to control the width of the images */
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
  bottom: 80px;
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
</style>
