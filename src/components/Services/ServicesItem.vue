<template>
  <div>
    <div id="services" class="component-container z-10">
      <h1 class="title-item">Nuestros Servicios</h1>
      <div class="cards-container">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="card-wrap"
          @mouseenter="handleZoom('enter', $event)"
          @mouseleave="handleZoom('leave', $event)"
          ref="card"
        >
          <div
            class="card"
            :style="cardStyles[index]"
            @click="openModal(image)"
          >
            <div
              class="card-bg"
              :style="[cardBgTransform(index), cardBgImage(image.url)]"
            ></div>
            <div class="card-info">
              <h1>{{ image.title }}</h1>
              <p>{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="modalOpen" class="modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <span class="close" @click="closeModal">&times;</span>
          <img :src="currentImage?.url" alt="" />
          <h2>{{ currentImage?.title }}</h2>
          <p>{{ currentImage?.details }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Image {
  url: string;
  title: string;
  description: string;
  details: string;
  expanded: boolean;
}
const images: Image[] = [
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Plan Inicial",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    details: "Additional information about Canyons...",
    expanded: false,
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Plan Intermedio",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    details: "Additional information about Canyons...",
    expanded: false,
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Plan Avanzado",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    details: "Additional information about Canyons...",
    expanded: false,
  },
  {
    url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Plan Personalizado",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    details: "Additional information about Canyons...",
    expanded: false,
  },
];

const card = ref<HTMLDivElement | null>(null);
const modalOpen = ref(false);
const currentImage = ref<Image | null>(null);

const handleScrollAnimations = () => {
  gsap.utils.toArray(".card-wrap").forEach((card) => {
    gsap.from(card as HTMLElement, {
      y: 100,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: card as HTMLElement,
        start: "top bottom-=100",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  });
};

const handleZoom = (action: "enter" | "leave", e: Event) => {
  const card = e.currentTarget as HTMLElement;
  if (action === "enter") {
    gsap.to(card, { scale: 1.05, duration: 0.5 });
  } else {
    gsap.to(card, { scale: 1, duration: 0.5 });
  }
};

const cardBgTransform = (index: number) => {
  return {};
};

const cardBgImage = (url: string) => {
  return { backgroundImage: `url(${url})` };
};

const openModal = (image: Image) => {
  currentImage.value = image;
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
};

const cardStyles = computed(() => {
  return images.map((image, index) => {
    return {
      width: image.expanded ? "90vw" : "420px",
    };
  });
});

onMounted(() => {
  handleScrollAnimations();
});
</script>

<style scoped>
/* Base Styles */
.component-container {
  background-image: url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
}

.title-item {
  margin-bottom: 50px;
  color: white;
  font-size: 3rem;
}

/* Card Container Styles */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* Card Wrapper Styles */
.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
}

/* Card Styles */
.card {
  position: relative;
  flex: 0 0 240px;
  width: 420px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}

.card.expanded {
  width: 90vw;
  z-index: 2;
}

.card.expanded .card-details {
  display: block;
}
/* Background Styles */
.card-bg {
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
}

/* Card Info Styles */
.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.card-info p {
  opacity: 0;
  text-shadow: black 0 2px 3px;
  transition: 0.6s 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.card-info * {
  position: relative;
  z-index: 1;
}

.card-info:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  background-blend-mode: overlay;
  opacity: 0;
  transform: translateY(100%);
  transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-details {
  display: none;
  /* ...other styles for your details section */
}

.card.expanded {
  width: 90vw;
  z-index: 2;
}

.card.expanded .card-details {
  display: block;
}

.card-info h1 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
}

/* Hover Effects */
.card-wrap:hover .card-info {
  transform: translateY(0);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-wrap:hover .card-info p {
  opacity: 1;
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-wrap:hover .card-info:after {
  opacity: 1;
  transform: translateY(0);
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-wrap:hover .card-bg {
  opacity: 0.8;
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-wrap:hover .card {
  box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, white 0 0 0 1px,
    rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset white 0 0 0 6px;
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  justify-content: center;
  align-items: center;
  background-color: #000000;
  padding: 20px;
  border-radius: 10px;
  max-width: 65vw; /* or whatever maximum width you desire */
  max-height: auto; /* or whatever maximum height you desire */
  margin: auto; /* center the content */
  color: #fff;
}

.modal-content img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
/* Define the transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Responsive Styles */
@media (max-width: 875px) {
  .component-container {
    height: 80vh;
  }
  .card {
    width: 300px;
    height: 240px;
  }
}

@media (max-width: 675px) {
  .component-container {
    height: 140vh;
  }
  .card {
    width: 300px;
    height: 240px;
  }
}
</style>
