<template>
  <div class="component-container">
    <ul class="timeline">
      <li class="timeline-item">
        <div class="timeline-indicator"></div>
        <div class="text-content">
          <h3>Agenda una Reunión</h3>
          <p>
            Planifique una reunión para discutir sus necesidades y objetivos.
          </p>
        </div>
      </li>
      <li class="timeline-item">
        <div class="timeline-indicator"></div>
        <div class="text-content">
          <h3>Contactanos</h3>
          <p>
            Póngase en contacto con nosotros para obtener más información sobre
            nuestros servicios.
          </p>
        </div>
      </li>
      <li class="timeline-item">
        <div class="timeline-indicator"></div>
        <div class="text-content">
          <h3>Reciba un Plan Personalizado</h3>
          <p>
            Reciba un plan personalizado diseñado específicamente para alcanzar
            sus metas.
          </p>
        </div>
      </li>
      <li class="timeline-item">
        <div class="timeline-indicator"></div>
        <div class="text-content">
          <h3>Aumenta tus Ingresos</h3>
          <p>
            Comienza a aumentar sus ingresos con nuestros servicios
            especializados.
          </p>
        </div>
      </li>
    </ul>
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
        gsap.from(item as HTMLElement, {
          autoAlpha: 0, // This will fade and un-fade the element
          scrollTrigger: {
            trigger: item,
            start: "top 67%", // Adjust these values to control when the animation starts
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
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  border-top: 2px solid #ffffff; /* Top border */
  border-bottom: 2px solid #ffffff; /* Bottom border */
  background: linear-gradient(to right, #4c8389, #0f2226);
  opacity: 0.9;
  backdrop-filter: blur(12vmax);
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
  left: 0px; /* Adjust this value to position the line relative to the indicators */
  width: 2px;
  background-color: #ffffff;
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 100px; /* Adjust spacing between items */
  position: relative; /* This makes sure the timeline-indicator is positioned relative to this item */
}

.timeline-indicator {
  width: 20px;
  height: 20px;
  background-color: #6ebaba;
  border-radius: 50%;
  position: absolute;
  left: 0; /* This positions the indicator at the start of the timeline-item */
  transform: translateX(-50%); /* This centers the indicator on the line */
}

.text-content {
  margin-left: 30px;
  width: 50%;
  /* Add any additional styles for the text content here */
}
</style>
