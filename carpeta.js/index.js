
function renderProductos() {
    const productos = cargarProductosLS();
    let salida = "";

    for (producto of productos) {
        salida += `<div class="col-md-3 my-3">
                <div class="card text-center fs-4 text-decoration-none card h-100 border border-dark">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <br>
                <div class="card-body">
                <p class="card-text">${producto.nombre}<br>$${producto.precio}</p>
                <br><br><br>
                <p><button class= "btn btn-warning border-dark" onclick="agregarAlCarrito(${producto.id})";>Agregar (+)</button></p>
                </div>
                </div>
                </div>`;
    }
    document.getElementById("productos").innerHTML = salida;
}

renderProductos();
renderBotonCarrito();





