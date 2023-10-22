<template>
  <div id="about" class="component-container">
    <div class="tealsea-container">
      <div class="text-container">
        <h1 class="tealsea-text">Somos una empresa de marketing digital</h1>
        <div class="body">
          Potenciamos tu negocio para que alcances a una mayor cantidad de
          clientes dandole el plus que necesita tu marca
        </div>
      </div>
      <img src="@/assets/whitewall.jpg" alt="tealsea" class="tealsea-image" />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.setupTealseaScrollAnimation();
  },
  methods: {
    setupTealseaScrollAnimation() {
      gsap.to(".tealsea-image", {
        yPercent: 50,
        scrollTrigger: {
          trigger: ".tealsea-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
  },
};
</script>
<style scoped>
.component-container {
  height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;

  z-index: 2;
  position: relative;
}

.tealsea-container {
  overflow: hidden;
  height: 70vh; /* or however tall you want the visible area to be */
  position: relative;
}

.tealsea-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: #4c83898a;
  backdrop-filter: blur(2px);
}
.tealsea-image {
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  z-index: 1;
  transform: scale(1.9);
  z-index: 1;
}

.text-container {
  position: absolute;
  top: 50%;
  left: 5%;
  right: 20%;
  transform: translate(10%, -50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 83, 83, 0.144);
  padding: 20px;
  border-radius: 8px;
}

.tealsea-text,
.tealsea-text {
  font-size: 1.8em;
  margin-bottom: 0.5em; /* adds space between title and subtitle */
  text-align: center;
}

.body {
  font-size: 1.4em;
  font-weight: 400;
  text-align: center;
  margin-top: 1em;
}
</style>
