
const archivo = document.getElementById("archivo");

const nombreArchivo = document.getElementById("nombreArchivo");

const tipoArchivo = document.getElementById("tipoArchivo");

const tamanoArchivo = document.getElementById("tamanoArchivo");

const eliminar = document.getElementById("eliminar");



archivo.addEventListener("change", function () {

    // Comprobamos si seleccionó algún archivo

    if (archivo.files.length > 0) {

        // Guardamos el archivo seleccionado

        const archivoSeleccionado = archivo.files[0];


        // Mostramos el nombre

        nombreArchivo.textContent =
            "📄 Nombre: " + archivoSeleccionado.name;


        // Mostramos el tipo

        tipoArchivo.textContent =
            "📌 Tipo: " +
            (archivoSeleccionado.type || "Desconocido");


        // Convertimos el tamaño a KB

        const tamanoKB =
            (archivoSeleccionado.size / 1024).toFixed(2);


        // Mostramos el tamaño

        tamanoArchivo.textContent =
            "💾 Tamaño: " + tamanoKB + " KB";

    }

});


// Botón para eliminar el archivo

eliminar.addEventListener("click", function () {

    // Limpiamos el input

    archivo.value = "";


    // Volvemos al mensaje inicial

    nombreArchivo.textContent =
        "No seleccionaste ningún archivo.";

    tipoArchivo.textContent = "";

    tamanoArchivo.textContent = "";

});
```
