/////////////////////////// GLOBAL ///////////////////////////

let carrito = []
const mainSec = document.querySelector(".SecMain");
const barraBuscar = document.getElementById("barraBusqueda");
const contadorCarrito = document.querySelector('#contadorCarrito');
const contItemsCarrito = document.querySelector("#contItemsCarrito");
const precioTotal = document.querySelector('#precioTotal');
const pPrecioTotal = document.querySelector('.Total');
const carritoBody = document.querySelector('.offcanvas-body');
const btnVaciarCarrito = document.querySelector('#btnVaciar');
const mensajeCarritoVacio = document.createElement('p');
mensajeCarritoVacio.textContent = 'Tu carrito está vacío';
mensajeCarritoVacio.classList.add('mensajeCarritoVacio');
const miLocalStorage = window.localStorage;
const imagenCarrito = document.querySelector('#contenedorCarrito');
const wrapper = document.querySelector('#wrapper');


/////////////////////////// CLASES ///////////////////////////

class Producto {
    constructor(idprod, nombre, categoria, precio, imagen) {
        this.idprod = idprod;
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
    }
}

/////////////////////////// OBJETOS ///////////////////////////


async function obtenerDatos(url) {
    return fetch(url).then(response => response.json());
}

async function traerProductos() {
    const Lista = await obtenerDatos('./json/listaProd.json');
    let productos = []
    Lista.forEach(prod => {
        productos.push(new Producto(prod.idprod, prod.nombre, prod.categoria, prod.precio, prod.imagen))
    });
    return productos;
}

async function traerYmostrarProductos() {
    let productos = await traerProductos()
    mostrarProductos(productos)
}