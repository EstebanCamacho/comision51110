class Cliente{
    constructor(nombre, apellido, correo, celular){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.celular = celular;
    };
}

let arrayClientes = [];

const formulario = document.getElementById("formulario");

function llenarFormulario(){
formulario.addEventListener("submit", (e) => {
e.preventDefault();
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const celular = document.getElementById("celular");
const cliente = new Cliente (nombre.value, apellido.value, correo.value, celular.value);
arrayClientes.push(cliente);
localStorage.setItem("clientes", JSON.stringify(cliente));
formulario.reset();
})
}

llenarFormulario();

function mensajeSweet(){
const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const correo = document.getElementById("correo").value;
const celular = document.getElementById("celular").value;

if(nombre.trim()===""){
    mostrarError("Nombre");
    return false;
}
if(apellido.trim()===""){
    mostrarError("Apellido");
    return false;
}
if(correo.trim()===""){
    mostrarError("Correo");
    return false;
}
if(celular.trim()===""){
    mostrarError("Celular");
    return false;
}else{
    mostrarSweetAlert();
}
}

function mostrarError(campo){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta completar el campo: ' + campo
}); 
}

function mostrarSweetAlert(){
    Swal.fire({
        icon: 'success',
        text: 'Sus datos fueron guardados con éxito',
});
}

document.getElementById("btnenviar").addEventListener("click", mensajeSweet);
