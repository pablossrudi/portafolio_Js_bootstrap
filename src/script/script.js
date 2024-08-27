
/* tooltips */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const tareaTabla = document.getElementById("proyectos");
const formulario = document.getElementById('formulario');
const correoInput = document.getElementById('correo');

var contador = 0;

var proyectos = [
  {
    titulo: "WOSSUBB - App",
    descripcion: "App diseñada para que la comunidad de la Universidad del Bío-Bío pueda crear alertas de seguridad en el perímetro de la institución y mostrarlas en el mapa."
  },
  {
    titulo: "Fine-Tuning - Software",
    descripcion: "Software creado para realizar ajuste fino a modelos Deep Learning Pre-entrenados, enfocado en la Clasificación de Tweets en Español."
  },
  {
    titulo: "Calculadora - Web",
    descripcion: "Calculadora que realiza operaciones basicas, creada como proyecto en E-Camp Edutecno. <br>"
  },
  {
    titulo: "SeutilsUBB - Web",
    descripcion: "Pagina web para gestionar trabajos grupales de alumnos en ramos de la Universidad del Bío-Bío . <br>"
  }
]

function contenidoCarrusel() {
  let contenido = '';
  contenido += `<h3>${proyectos[contador].titulo}</h3><br><tr>`;
  contenido += `<p>${proyectos[contador].descripcion}</p>`;
  tareaTabla.innerHTML = contenido;
}

function sumar() {

  if (contador < proyectos.length - 1) {
    contador++;
    contenidoCarrusel();
  } else {
    contador = 0;
    contenidoCarrusel();
  }

}

function restar() {
  if (contador > 0) {
    contador--;
    contenidoCarrusel();
  } else {
    contador = proyectos.length - 1;
    contenidoCarrusel();
  }

}

//script para validacion de bootstrap
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

formulario, addEventListener('submit', function (event) {
  event.preventDefault();
  var correo = correoInput.value;
  var isValid = correo.includes('@');

  if (!isValid) {
    correoInput.classList.add('is-invalid');
    correoInput.classList.remove('is-valid');
    event.preventDefault();
  } else {
    correoInput.classList.add('is-valid');
    correoInput.classList.remove('is-invalid');
  }
})

contenidoCarrusel();