<template>
  <div id="contact" class="component-container">
    <div class="title">
      <h2>Contáctanos</h2>
    </div>
    <div class="parent">
      <div class="content-wrapper">
        <!-- Contact Us Section -->
        <div class="section contact-us">
          <form
            action="https://formspree.io/f/xrgwwgqj"
            method="POST"
            id="form_val"
            autocomplete="off"
          >
            <div class="form-group">
              <input
                type="text"
                id="nombre"
                name="nombre"
                class="form-control input-style"
                placeholder="Nombre"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                id="correo"
                name="correo"
                class="form-control input-style"
                placeholder="Correo"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="empresa"
                name="empresa"
                class="form-control input-style"
                placeholder="Empresa"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="telefono"
                name="telefono"
                class="form-control input-style"
                placeholder="Telefono"
              />
            </div>
            <div class="form-group">
              <textarea
                id="mensaje"
                name="mensaje"
                class="form-control input-style"
                placeholder="Mensaje"
                rows="4"
              ></textarea>
            </div>
            <div class="centerbtn">
              <button
                type="submit"
                id="input-submit"
                value="submit"
                class="buttonform"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

        <!-- Social Section -->
        <div class="section social">
          <div class="contact-details">
            <div class="info">
              <img
                src="src/assets/logo-plus2.png"
                alt="Logo"
                class="logo-image"
              />
            </div>
            <ul class="social-media-list">
              <li>
                <a href="https://www.instagram.com/theplusagc/" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/the-plus-agc/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i
                ></a>
              </li>
              <li>
                <a href="https://wa.me/+56959628065/?text=Contacta a ThePlusAGC">
                  <i class="fab fa-whatsapp" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "ContactForm",
  setup() {
    const nombre = ref("");
    const correo = ref("");
    const empresa = ref("");
    const telefono = ref("");
    const mensaje = ref("");
    const errors = ref<{ [key: string]: string }>({});

    const validateEmail = (email: string) => {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email.toLowerCase());
    };

    const validateForm = () => {
      errors.value = {};

      if (!nombre.value) errors.value.nombre = "Please enter your name";
      if (!correo.value || !validateEmail(correo.value))
        errors.value.correo = "Please enter a valid email address";
      if (!empresa.value)
        errors.value.empresa = "Please enter the company name";
      if (!telefono.value)
        errors.value.telefono = "Please enter the phone number";
      if (!mensaje.value) errors.value.mensaje = "Please enter a message";

      return Object.keys(errors.value).length === 0;
    };

    const handleSubmit = () => {
      if (validateForm()) {
        // Form is valid, submit the form
        console.log("Form Submitted:", {
          nombre: nombre.value,
          correo: correo.value,
          empresa: empresa.value,
          telefono: telefono.value,
          mensaje: mensaje.value,
        });
      }
    };

    return {
      nombre,
      correo,
      empresa,
      telefono,
      mensaje,
      errors,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.component-container {
  overflow: hidden;
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: xx-large;
  position: relative;
  background-color: #00181d;
  z-index: 1;
  flex-direction: column;
  background-image: url("src/assets/deep.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.title {
  padding-top: 60px;
  margin-bottom: 50px;
  font-size: 3rem;
}
.parent {
  display: flex;
  padding: 30px;
  backdrop-filter: blur(10px); /* Adds a blur effect to the background */
  background-color: rgba(
    255,
    255,
    255,
    0.1
  ); /* Adds a semi-transparent background */
  border-radius: 15px; /* Rounded corners */
  width: 70vw;
  align-items: center;
  justify-content: space-around; /* or try space-between for different spacing */
  /* background-image: url("src/assets/teal-island.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
}

.content-wrapper {
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  width: 100%;
  max-width: 1200px; /* You can adjust this value to your preference */
  margin: 0 auto; /* This will center the content-wrapper */
}

.contact-us,
.social {
  flex: 1;
  max-width: 600px; /* Set a maximum width to prevent stretching */
}
.contact-us {
  margin-right: 20px;
  margin-left: 200px;
}

.social {
  margin-left: 50px; /* Adjust value as needed */
  text-decoration: none;
  display: flex;
  align-items: center; /* Vertically center content */
}

.contact-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social .info {
  color: #ffffff; /* White color */
  margin-bottom: 40px; /* Space between text and icons */
  text-align: left; /* Center the text */
  font-size: 1.3rem;
}

.logo-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
.info div {
  margin-bottom: 15px;
}

.social-media-list {
  display: flex; /* Align items in a row */
  list-style: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
}

.social-media-list li {
  margin: 10px; /* Add space between icons */
}

.social-media-list li i {
  color: #ffffff; /* White color */
}

.buttonform {
  background: #191919;
  border: 2px solid #fff;
  padding: 5px 10px;
  width: 100px;
  color: #e8e8e8;
  border-radius: 5px;
  font-family: "Open Sans", sans-serif;
}

.buttonform:hover {
  background: #050505;
  color: #fff;
}

.buttonform:focus {
  outline: 0;
}
.input-style {
  background: #d3d3d3; /* Grey background */
  border: 2px solid #000; /* Black border */
  padding: 10px; /* Add padding to make input fields slightly bigger */
  width: 400px; /* Make input fields wider */
  border-radius: 5px; /* Rounded corners like buttonform */
  font-size: 16px; /* Increase font size */
  color: #000; /* Black text color */
  margin-bottom: 10px; /* Space between input fields */
}

@media (max-width: 1100px) {
  .component-container {
    height: 80vh;
  }
  .contact-us {
    margin-right: -20px;
    margin-left: 20px;
  }
}

/* This will apply styles for screens between 481px and 767px (typical phone to tablet size) */
@media (max-width: 860px) {
  .component-container {
    height: 110vh;
  }
  .content-wrapper {
    flex-direction: column; /* Stack items on top of each other */
    margin-left: -20px;
  }

  .contact-us,
  .social {
    width: 100%; /* Full width for both columns */
  }

  .social {
    margin-left: 300px;
  }
  .input-style {
    width: 500px; /* Reduce width */
    padding: 8px; /* Reduce padding */
    font-size: 14px; /* Reduce font size */
    /* ... any other styles you want to adjust ... */
  }
}
@media (max-width: 765px) {
  .component-container {
    height: 110vh;
  }
  .content-wrapper {
    flex-direction: column; /* Stack items on top of each other */
  }
  .contact-us,
  .social {
    width: 100%; /* Full width for both columns */
  }
  .input-style {
    width: 350px; /* Reduce width */
    padding: 8px; /* Reduce padding */
    font-size: 14px; /* Reduce font size */
    align-items: center;
    /* ... any other styles you want to adjust ... */
  }

  .social {
    margin-left: 250px;
  }
}

/* This will apply styles for screens smaller than 480px (typical phone size) */
@media (max-width: 582px) {
  .component-container {
    height: 105vh;
  }
  .content-wrapper {
    flex-direction: column; /* Stack items on top of each other */
    margin-left: -20px;
  }
  .contact-us,
  .social {
    width: 100%; /* Full width for both columns */
  }
  .input-style,
  .buttonform {
    width: 100%; /* Full width for input fields and button */
  }
  .logo-image {
    max-width: 80%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .social {
    margin-left: 50px;
  }
  .title {
    font-size: 2rem;
  }
}
@media (max-width: 390px) {
  .component-container {
    /* Increase viewport height */
    height: 110vh;
    overflow: hidden;
  }
  .social {
    padding-top: 10px;
    margin-left: 40px;
  }
}
@media (max-width: 385px) {
  .component-container {
    /* Increase viewport height */
    height: 110vh;
    overflow: hidden;
  }
  .social {
    padding-top: 10px;
    margin-left: 40px;
  }
}
@media (max-width: 375px) {
  .component-container {
    /* Increase viewport height */
    height: 140vh;
    overflow: hidden;
  }
  .social {
    margin-left: 40px;
  }
}

@media (max-height: 800px) {
.component-container {
  height: 110vh;

}
}

@media (max-height: 750px) {


.component-container {
  height: 130vh;

}
}
</style>
