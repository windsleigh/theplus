<template>
  <div id="home" class="component-container">
    <div id="blob1" class="blob"></div>
    <div id="blob2" class="blob"></div>
    <div id="blur1" class="blur"></div>
    <div id="blur2" class="blur"></div>
    <div id="mouse-blob" class="mouse-blob"></div>
    <img
      id="initial-logo"
      src="@/assets/logo-plus.png"
      alt="Initial Logo"
      class="logo"
    />
    <img
      id="full-logo"
      src="@/assets/full-logo-theplus.png"
      alt="The Plus Logo"
      class="logo"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  const tl = gsap.timeline();

  // Initial logo animation
  tl.fromTo(
    "#initial-logo",
    { scale: 0.05, opacity: 0 },
    { scale: 1.5, opacity: 1, duration: 2 }
  ).to("#initial-logo", { opacity: 0, duration: 1 });

  // Full logo animation
  tl.fromTo(
    "#full-logo",
    { scale: 0.1, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1 }
  );

  // Breathing effect for blobs
  const breathingTl = gsap.timeline({ repeat: -1, yoyo: true });
  breathingTl.to("#blob1, #blob2", { scale: 1.1, duration: 2 });

  // Blob 1 moving from left to right
  gsap.to("#blob1", {
    left: "70%", // Move to the right end
    duration: 3,
    repeat: -1,
    yoyo: true,
  });

  // Blob 2 moving from right to left
  gsap.to("#blob2", {
    left: "-10%", // Move to the left end
    duration: 3,
    repeat: -1,
    yoyo: true,
  });

  // Mouse blob movement
  const mouseBlob = document.getElementById("mouse-blob");
  if (mouseBlob) {
    // Null check
    window.addEventListener("mousemove", (event) => {
      mouseBlob.style.left = event.clientX + "px";
      mouseBlob.style.top = event.clientY + "px";
    });
  }
});
</script>

<style scoped>
.component-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: xx-large;
  position: relative;
  background-color: #00181d;
  z-index: 1;
  overflow: hidden;
}

.blob {
  background-color: white;
  height: 35vmax; /* Smaller size */
  aspect-ratio: 1;
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(to right, rgb(0, 255, 242), rgb(0, 255, 242));
  animation: rotate 2s infinite;
  opacity: 0.9;
  z-index: 1;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#blob1 {
  left: 60%;
  top: 35%;
  transform: translate(-50%, -50%);
}

#blob2 {
  left: 10%;
  top: 10%;
}

.blur {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(12vmax);
}

.logo {
  max-width: 80%;
  max-height: 80%;
  position: absolute;
  z-index: 3;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: scale(1, 1.25);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 450px) {
  .blob {
    height: 15vmax; /* Adjust this value to achieve the desired size */
  }
}
</style>
