//Guardar el estado (columna activa)
let ColumnaActiva = 1; 

// Seleccionar las columnas

const Columnas = document.querySelectorAll(".Columna");

// Escuchar clicks en cada una de ellas

Columnas.forEach((Columna, indice) => {
    Columna.addEventListener("click", function() {
        cambiarColumna(indice)
    })
});

//Cambiar el estado de las columnas

function cambiarColumna(indice) {
    Columnas[ColumnaActiva].classList.remove("activa")
    Columnas[indice].classList.add("activa")
    ColumnaActiva = indice
}