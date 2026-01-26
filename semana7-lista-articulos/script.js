// Arreglo de artículos
let articulos = [
    {
        nombre: "Cuaderno",
        precio: 3,
        descripcion: "Cuaderno universitario de 100 hojas"
    },
    {
        nombre: "Esfero",
        precio: 1,
        descripcion: "Esfero tinta azul"
    },
    {
        nombre: "Mochila",
        precio: 25,
        descripcion: "Mochila resistente para estudio"
    }
];

// Referencia al ul
const contenedor = document.getElementById("contenedor-lista");

// Función para mostrar los artículos
function mostrarArticulos() {
    contenedor.innerHTML = "";

    for (let i = 0; i < articulos.length; i++) {
        const elemento = document.createElement("li");

        elemento.innerHTML =
            "Producto: " + articulos[i].nombre + "<br>" +
            "Precio: $" + articulos[i].precio + "<br>" +
            "Descripción: " + articulos[i].descripcion;

        contenedor.appendChild(elemento);
    }
}

// Mostrar lista al cargar la página
mostrarArticulos();

// Evento del botón
const boton = document.getElementById("agregar-articulo");

boton.addEventListener("click", function () {
    const articuloNuevo = {
        nombre: "Artículo nuevo",
        precio: 5,
        descripcion: "Agregado desde el botón"
    };

    articulos.push(articuloNuevo);
    mostrarArticulos();
});
