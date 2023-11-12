<template>
  <div id="about" class="component-container">
    <div class="tealsea-container">
      <div class="text-container">
        <h1 class="tealsea-text">Somos una empresa de marketing digital</h1>
        <div class="body">
          <div class="p1">
            Olvídate del área digital de tu empresa y déjala en nuestras manos.
            Nosotros potenciamos tú negocios para que alcances a una mayor
            cantidad de clientes.
          </div>
          <div class="p2">
            Gestionamos, Desarrollamos y Creamos una estrategia digital que
            permite aumentar los ingresos de tu negocio/marca
          </div>

          <div class="p3">
            Elaboramos piezas gráficas para mantener activas tus cuentas y saber
            que es lo que tus clientes prefieren
          </div>
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
    this.adjustImageScale(); // call the function on mount
    window.addEventListener("resize", this.adjustImageScale); // add resize listener
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.adjustImageScale); // clean up resize listener
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
    adjustImageScale() {
      const scaleValue = window.innerWidth < 768 ? 2.5 : 1.8; // adjust scale value based on window width
      gsap.set(".tealsea-image", { scale: scaleValue }); // set the scale value using GSAP
    },
  },
};
</script>
<style scoped>
.component-container {
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  z-index: 2;
  position: relative;
  overflow: hidden;
}

.tealsea-container {
  overflow: hidden;
  height: 90vh; /* or however tall you want the visible area to be */
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
  transform: scale(1.3);
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  /* color: #0f2226; */
}

.body {
  position: relative; /* Add this to position your indicator relative to .body */
  font-size: 1.4em;
  font-weight: 400;
  text-align: center;
  margin-top: 1em;
}

.indicator {
  width: 20px;
  height: 20px;
  background-color: #6ebaba;
  border-radius: 50%;
  position: absolute;
  left: 50%; /* Center horizontally */
  top: 57%; /* Position at the bottom of the .body container */
  transform: translate(
    -50%,
    calc(0.5em + 1vh)
  ); /* Center and move down a bit */
  z-index: 3;
}
.p1 {
  margin-bottom: 1em;
}
.p2 {
  margin-bottom: 1em;
}
@media (max-width: 1700px) {
  .indicator {
    top: 63%;
  }
}
@media (max-width: 1360px) {
  .indicator {
    top: 67%;
  }
}
@media (max-width: 1200px) {
  .indicator {
    top: 61%;
  }
}
@media (max-width: 1150px) {
  .indicator {
    top: 64%;
  }
}
@media (max-width: 971px) {
  .indicator {
    top: 67%;
  }
}
@media (max-width: 960px) {
  .indicator {
    top: 69%;
  }
}
@media (max-width: 840px) {
  .component-container {
    height: 100vh;
  }
  .tealsea-container {
    height: 100vh;
  }
}

/* Media queries for smaller screens */
@media (max-width: 768px) {
  .component-container {
    height: 90vh;
  }

  .tealsea-container {
    height: 90vh;
  }

  .text-container {
    left: 2%;
    right: 2%;
    transform: translate(0, -50%);
    padding: 10px;
  }

  .tealsea-text,
  .tealsea-text {
    font-size: 1.5em;
  }

  .body {
    font-size: 1.2em;
  }
  .indicator {
    transform: translate(
      -50%,
      calc(0.5em + 2vh)
    ); /* Adjust for smaller screens */
  }
  .indicator {
    top: 62%;
  }
}

@media (max-width: 550px) {
  .component-container {
    height: 150vh;
  }
  .tealsea-container {
    height: 150vh;
  }
}
@media (max-width: 480px) {
  .tealsea-text,
  .tealsea-text {
    font-size: 1.2em;
  }

  .body {
    font-size: 1em;
  }
}
</style>
