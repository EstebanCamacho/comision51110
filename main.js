
let nombre = prompt("Ingrese su nombre: ");
console.log(nombre);


let nroPadron = parseInt(prompt("Ingrese su Número de Padrón: "));
    for(i=0 ; i < 2 ; i=i+1){
    if (nroPadron >= 10000 && nroPadron <= 50000){
        alert ("Ingrese al sitio de su Cátedra");
        console.log("Número de Padrón: " + nroPadron);
        break;
        } 
    else {
        alert ("Error, ingrese su Padrón nuevamente");
        nroPadron = parseInt(prompt("Ingrese su Número de Padrón: "));
    }
}

function Contraseña (){
    let passUsuario = parseInt(prompt("Ingrese su Contraseña: "));
    const password= 5803;
    for (i=0 ; i < 2 ; i=i+1){
    if (passUsuario == password){
        console.log("Contraseña corrrecta");
        break;
        } else{
            passUsuario = parseInt(prompt("La contraseña es incorrecta; ingrese de nuevo"));
        }
}
}

Contraseña ();

let NotaPrimerParcial = parseFloat(prompt("Ingrese su nota del Primer Parcial"));
    console.log("La nota de su primer parcial ha sido de " + NotaPrimerParcial + " puntos");

let NotaSegundoParcial = parseFloat(prompt("Ingrese su nota del Segundo Parcial"));
    console.log("La nota de su segundo parcial ha sido de " + NotaSegundoParcial + " puntos");

let Promedio = (NotaPrimerParcial + NotaSegundoParcial)/2;

let mensaje = ("Su nota promedio es de: " + Promedio + " puntos");
    console.log(mensaje);


let Mensaje = prompt("Por favor, escriba su nota promedio en letras minúsculas: ");
    switch(Mensaje){

        case("diez"):
        alert ("Felicitaciones, " + nombre + "; has aprobado la materia con un desempeño sobresaliente");
        console.log("Felicitaciones, " + nombre + "; has aprobado la materia con un desempeño sobresaliente"); 
        break;

        case("nueve"):
        alert ("Felicitaciones, " + nombre + "; has aprobado la materia con un excelente desempeño");
        console.log("Felicitaciones, " + nombre + "; has aprobado la materia con un excelente desempeño"); 
        break;

        case("ocho"):
        alert ("Felicitaciones, " + nombre + "; has aprobado la materia con un excelente desempeño");
        console.log("Felicitaciones, " + nombre + "; has aprobado la materia con un excelente desempeño"); 
        break;

        case("siete"):
        alert ("Felicitaciones, " + nombre + "; has aprobado la materia");
        console.log("Felicitaciones, " + nombre + "; has aprobado la materia"); 
        break;

        default:
        alert ("Lo sentimos, " + nombre + "; debes recuperar parciales o rendir un examen integrador");
        console.log("Lo sentimos, " + nombre + "; debes recuperar parciales o rendir un examen integrador"); 
        break;    
    }
    
    