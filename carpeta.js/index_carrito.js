function renderProductosCarrito() {
    const productos = cargarProductosCarrito();
    let salida = "";
    let leyenda = "¡Usted ha seleccionado estos productos!";
    

    if(totalProductosCarrito()>0){
        salida += `<table class="table">
        <tr>
            <td colspan="5" class="text-end"><button class="btn btn-warning border-dark" onclick="vaciarCarrito()">Vaciar Carrito</button><br><br><br></td>
        </tr>`;
    
    for (producto of productos) {
        salida += `<tr>
                <td><img src="${"." + producto.imagen}" alt="${producto.nombre}" width="80"/></td>
                <td>${producto.nombre}</td>
                <td>${producto.cantidad} X $${producto.precio}</td>
                <td>$${producto.cantidad * producto.precio}</td>
                <td class="text-end"><button class="btn btn-warning border-dark" onclick="eliminarProducto(${producto.id})";><img src="../img/iconoeliminar.svg" 
                alt="Un ícono de cesto de basura que simboliza la eliminación de archivos" width= "16"/></button></td>
                </tr>`;
    }
    
    salida += `<tr>
    <td colspan="3">Total a Pagar</td>
    <td>$${totalPagarCarrito()}</td>
    <td>&nbsp;</td>
    </tr>`;

    salida += `</table><img src="../img/emoticonfeliz.jpg" class= emotifeliz>`;

document.getElementById("titulosecundario").innerHTML = leyenda;

}else{
    salida= `<div class="alert alert-success text-center" role="alert">¡No se agregaron productos en el carrito!
            <td>&nbsp;</td>
            <img src="../img/emoticontriste.jpg" class= emotitriste>
            </div>`
    document.getElementById("titulosecundario").innerHTML = "";         
}
    document.getElementById("product").innerHTML = salida;
}

renderProductosCarrito();
renderBotonCarrito();
