const campo = document.getElementById("enlaceImagen");
const insertar = document.getElementById("btnInsertar");
const quitar = document.getElementById("btnQuitar");
const contenedor = document.getElementById("contenedor");

let imagenActiva = null;

insertar.addEventListener("click", () => {
  const link = campo.value.trim();
  if (!link) return;

  const nueva = document.createElement("img");
  nueva.src = link;

  nueva.addEventListener("click", () => {
    if (imagenActiva) imagenActiva.classList.remove("activa");
    nueva.classList.add("activa");
    imagenActiva = nueva;
  });

  contenedor.appendChild(nueva);
  campo.value = "";
});

quitar.addEventListener("click", () => {
  if (imagenActiva) {
    contenedor.removeChild(imagenActiva);
    imagenActiva = null;
  }
});
