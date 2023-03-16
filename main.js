
let preguntaInicial = prompt ("¿Está suscripto a Materiales SA? Por favor: \n En caso afirmativo responda 1 \n En caso negativo responda 2");

if(preguntaInicial === "1"){
    let nroSuscripcion = parseInt(prompt("Ingrese su Número de Suscripción: "));
    contrasenia();
} else if (preguntaInicial === "2"){
    alert ("Ud. puede suscribirse en la sección CONTACTO y acceder a importantes descuentos");
    
} else if (preguntaInicial!== "1" && preguntaInicial!== "2"){
    alert ("Su respuesta es incorrecta; por favor, visite nuestro Catálogo de todas formas");
    
}



function contrasenia (){
    let nombre = prompt("Ingrese su Nombre: ");
    let passUsuario = parseInt(prompt("Ingrese su Contraseña: "));
    const password= 5803;
    for (i=0 ; i < 2 ; i=i+1){
    if (passUsuario == password){
        alert("¡Contraseña correcta! " + nombre + ", bienvenido/a a nuestro sitio web");
        break;
        } else{
            passUsuario = parseInt(prompt("La contraseña es incorrecta; por favor ingrese de nuevo"));
        }
}
}


function Producto (nroProducto, articulo, precio){
    this.nroProducto = nroProducto;
    this.articulo = articulo;
    this.precio = precio;
    this.descuento = function(){
        alert("Le informamos que el producto " + this.articulo + " tiene una bonificación especial del 10% para clientes con Suscripción, abonando cash");
    }
}

const canieria = new Producto ("#26.835", "cañería", 4000);
const valvEsferica = new Producto ("#26.845", "válvula esférica", 8500);
const valvEsclusa = new Producto ("#26.855", "válvula esclusa", 12000);
const valvMariposa = new Producto ("#26.865", "válvula mariposa", 15000);
const accesorioT = new Producto ("#26.875", "accesorio T", 2500);



arrayProductos = [canieria, valvEsferica, valvEsclusa, valvMariposa, accesorioT];

const precio = arrayProductos.map ((producto => {
    return{
        articulo: producto.articulo,
        precio: producto.precio,
        }
}));
console.log(precio);

const precioConIva = arrayProductos.map ((producto => {
    return{
        articulo: producto.articulo,
        precio: producto.precio * 1.21,
        }
}));
console.log(precioConIva);

const precioSuscripcion = arrayProductos.map ((producto => {
    return{
        articulo: producto.articulo,
        precio: Math.round(producto.precio * 1.21 * 0.95),
        }
}));
console.log(precioSuscripcion);

let catalogo = prompt ("Para información, ingrese un producto del Catálogo: ");
    switch (catalogo){
        
        case "cañería":
            alert ("Este producto se encuentra en stock. El monto es de $ 4840 (IVA incluido); si Ud. posee Suscripción es de $ 4598");
            break;
            
        case "válvula esférica":
            alert ("Este producto se encuentra en stock. El monto es de $ 10285 (IVA incluido); si Ud. posee Suscripción es de $ 9771");
            break;
                
        case "válvula esclusa":
            alert ("Lo sentimos; este producto se encuentra sin stock por el momento. El monto es de $ 14520 (IVA incluido); si Ud. posee Suscripción es de $ 13794");
            break;
            
        case "válvula mariposa":
            alert ("Este producto se encuentra en stock. El monto es de $ 18150 (IVA incluido); si Ud. posee Suscripción es de $ 17243");
            break;
            
        case "accesorio T":
            alert ("Este producto se encuentra en stock. El monto es de $ 3025 (IVA incluido); si Ud. posee Suscripción es de $ 2874");
            break;  

        default:
            alert ("Ingreso incorrecto");
            break;
    }

canieria.descuento();

const productoSeleccionado = prompt("Ingrese nombre del producto que desea comprar");

for (let i=0; i<3; i=i+1){
    
    if(productoSeleccionado === "cañería"){
        alert("Por favor, ingréselo al carrito");
        break;
    }else if(productoSeleccionado === "válvula esférica"){
        alert("Por favor, ingréselo al carrito");
        break;
    }else if(productoSeleccionado === "válvula esclusa"){
        alert("Este producto se encuentra temporalmente fuera de stock");
        break;
    }else if(productoSeleccionado === "válvula mariposa"){
        alert("Por favor, ingréselo al carrito");
        break;
    }else if(productoSeleccionado === "accesorio T"){
        alert("Por favor, ingréselo al carrito");
        break;
    }else{
        alert("El producto ingresado no se encuentra en el Catálogo; por favor, intente de nuevo")
    }
}

const carritoProductos = document.getElementById("carrito");

arrayProductos.forEach(producto => {
    const divCarrito = document.createElement("div");
    divCarrito.innerHTML = `<p>Nombre: ${producto.articulo} </p>
                            <p>Precio: ${producto.precio} </p>
                            <button> Agregar al carrito </button>`
    carritoProductos.appendChild(divCarrito);
});





