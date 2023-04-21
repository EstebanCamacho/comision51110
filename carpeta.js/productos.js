const productos = [
    
    {
    nombre: "Cañería",
    precio: 4000,
    id: 1,
    imagen: "./img2/canerias.jpeg"
    },
    
    {
    nombre: "Válvula Esférica",
    precio: 8500,
    id: 2,
    imagen: "./img2/valvulaesferica.jpg"
    },
    
    {
    nombre: "Válvula Esclusa",
    precio: 12000,
    id: 3,
    imagen: "./img2/valvulaesclusa.jpeg"
    },
    
    {
    nombre: "Válvula Mariposa",
    precio: 15000,
    id: 4,
    imagen: "./img2/valvulamariposa.jpg"
    },
    
    {
    nombre: "Accesorio T",
    precio: 250,
    id: 5,
    imagen: "./img2/accesoriot.jpg"
    },
    
    {
    nombre: "Codo a 90°",
    precio: 200,
    id: 6,
    imagen: "./img2/codo.jpg"
    },

    {
        nombre: "Codo a 45°",
        precio: 180,
        id: 7,
        imagen: "./img2/cododos.jpeg"
        },

    {
        nombre: "Unión doble",
        precio: 280,
        id: 8,
        imagen: "./img2/uniondoble.jpg"
        }
]

function guardarProductosLS(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);

