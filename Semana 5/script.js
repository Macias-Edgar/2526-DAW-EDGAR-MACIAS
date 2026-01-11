const inputUrl = document.querySelector("#urlImagen");
const botonAgregar = document.querySelector("#btnAgregar");
const botonEliminar = document.querySelector("#btnEliminar");
const galeria = document.querySelector("#contenedorGaleria");

let imagenActiva = null;

// Agregar imagen
botonAgregar.addEventListener("click", () => {
    if (inputUrl.value === "") {
        alert("Ingresa una URL válida");
        return;
    }

    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = inputUrl.value;

    nuevaImagen.addEventListener("click", () => {
        if (imagenActiva) {
            imagenActiva.classList.remove("activa");
        }
        nuevaImagen.classList.add("activa");
        imagenActiva = nuevaImagen;
    });

    galeria.appendChild(nuevaImagen);
    inputUrl.value = "";
});

// Eliminar imagen seleccionada
botonEliminar.addEventListener("click", () => {
    if (imagenActiva) {
        galeria.removeChild(imagenActiva);
        imagenActiva = null;
    } else {
        alert("No hay imagen seleccionada");
    }
});

// Atajo del teclado
document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && imagenActiva) {
        galeria.removeChild(imagenActiva);
        imagenActiva = null;
    }
});
