
fetch("carpeta.js/clientes.json")
.then ((response) => response.json())
.then ((data) => {
    
    const listaclientes = document.getElementById("listaclientes");
    
    data.forEach(valor => {

        let columna = document.createElement("div");
        columna.className = "col-md-4";
        
        let div_padre = document.createElement("div");
        div_padre.className = "card m-8 border-dark";
        
        let div_hijo1 = document.createElement("div");
        div_hijo1.className = "card-header text-center border-dark fw-bold";
        
        let div_hijo2 = document.createElement("div");
        div_hijo2.className = "card-body text-center";
        
        let parrafo = document.createElement("p");
        div_hijo1.innerHTML = `${valor.nombre}`;
        parrafo.innerText = valor.descripcion;
        
        let imagen = document.createElement("img");
        imagen.src = "./img3/" + valor.imagen;
        imagen.alt = valor.nombre;
        imagen.width = 120;
        
        div_hijo2.appendChild(parrafo);
        div_hijo2.appendChild(imagen);
        div_padre.appendChild(div_hijo1);
        div_padre.appendChild(div_hijo2);
        columna.appendChild(div_padre);
        listaclientes.appendChild(columna);
    })
})
