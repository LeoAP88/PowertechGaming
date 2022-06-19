// class Producto {
//     constructor(id, nombre, precio, stock) {
//         this.id = parseInt(id);
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.stock = parseInt(stock);
//     }

//     /*Chequea la cantidad solicitada contra el stock*/
//     restarStock() {
//         this.stock = this.stock - cantidad;
//         return cantidad;
//     }

//     /*Si hay stock del producto, lo agrego al carrito*/
//     añadirAlCarrito(cantidad) {
//         carrito.push({
//             nombre: this.nombre,
//             cantidad: cantidad,
//             precio: this.precio,
//             precioTotal: cantidad * this.precio
//         });
//         return carrito;
//     }
// }

// /* Creación de objetos producto dentro del array*/
// const productos = [];
// productos.push(new Producto(1000, "Procesador Intel Core i3 12100", 25000, 15));
// productos.push(new Producto(1001, "Procesador Intel Core i5 12400", 38000, 20));
// productos.push(new Producto(1002, "Procesador Intel Core i7 12700K", 70000, 10));
// productos.push(new Producto(1003, "Procesador Intel Core i9 12900k", 100000, 3));

// const carrito = [];
// let idItem = 0;

// /////////////////////////// FUNCIONES ///////////////////////////

// function pedirID() {
//     idItem = parseInt(prompt("Ingresar id de producto a comprar:\n1000: Procesador Intel Core i3 12100\n1001: Procesador Intel Core i5 12400\n1002: Procesador Intel Core i7 12700K\n1003: Procesador Intel Core i9 12900k\n\n0: Finalizar compra"));
// }

// function verificarExistencia() {
//     pedirID();
//     /*Busca el elemento solicitado comparando el id ingresado con el id de los productos creados */
//     const encontrado = productos.find((el) => el.id === idItem);
//     if (encontrado !== undefined) {
//         cantidad = parseInt(prompt("Ingresar la cantidad deseada \nEl stock actual del producto es: " + encontrado.stock));
//         if (encontrado.stock >= cantidad && cantidad > 0) {
//             encontrado.restarStock();
//             encontrado.añadirAlCarrito(cantidad);
//         } else {
//             alert("La cantidad ingresada no es válida");
//         }
//     } else if (idItem == 0) {
//         alert("Finalizó la compra");
//     } else {
//         alert("El ID ingresado no coincide con ningun producto\nVuelva a ingresar el ID");
//     }
// }

// function mostrarResumenCompra() {
//     if (carrito != "") {
//         let compra = "Resumen de la compra\n\n";
//         for (const car of carrito) {
//             compra += car.nombre + "\nCantidad: " + car.cantidad + "\nPrecio unitario: $" + car.precio + "\nPrecio total: $" + car.precioTotal + "\n\n";
//         }
//         alert(compra + "Total de compra: $" + importeFinal);
//     }
// }

// /////////////////////////// PROGRAMA ///////////////////////////

// do {
//     verificarExistencia();
// } while (idItem != 0 || idItem == undefined);

// /* Acumulo la suma de los importes de cada item solicitado */
// const importeFinal = carrito.reduce((acum, elem) => acum + elem.precioTotal, 0);

// /* Muestro por alert el estado final del carrito*/
// mostrarResumenCompra();

class Producto {
    constructor(id, nombre, precio, stock, imagen) {
        this.id = parseInt(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.imagen = imagen;
    }

    /*Chequea la cantidad solicitada contra el stock*/
    restarStock() {
        this.stock = this.stock - cantidad;
        return cantidad;
    }

    /*Si hay stock del producto, lo agrego al carrito*/
    añadirAlCarrito(cantidad) {
        carrito.push({
            nombre: this.nombre,
            cantidad: cantidad,
            precio: this.precio,
            precioTotal: cantidad * this.precio
        });
        return carrito;
    }

}

const productos = [];
productos.push(new Producto(1000, "Procesador Intel Core i3 12100", 25000, 15, "./img/Productos/Procesadores/i3.jpg"));
productos.push(new Producto(1001, "Procesador Intel Core i5 12400", 38000, 20, "./img/Productos/Procesadores/i5.jpg"));
productos.push(new Producto(1002, "Procesador Intel Core i7 12700K", 70000, 10, "./img/Productos/Procesadores/i7.jpg"));
productos.push(new Producto(1003, "Procesador Intel Core i9 12900k", 100000, 3, "./img/Productos/Procesadores/i9.jpg"));
productos.push(new Producto(2000, "Procesador AMD Ryzen 5 5600", 32000, 25, "./img/Productos/Procesadores/Ryzen5600.jpg"));
productos.push(new Producto(2001, "Procesador AMD Ryzen 7 5800x", 55000, 6, "./img/Productos/Procesadores/Ryzen5800x.jpg"));
productos.push(new Producto(2002, "Procesador AMD Ryzen 7 5800x3D", 68000, 8, "./img/Productos/Procesadores/Ryzen5800x3d.jpg"));
productos.push(new Producto(2003, "Procesador AMD Ryzen 9 5900x", 90000, 10, "./img/Productos/Procesadores/Ryzen5900x.jpg"));
productos.push(new Producto(2004, "Procesador AMD Ryzen 9 5950x", 90000, 10, "./img/Productos/Procesadores/Ryzen5950x.jpg"));
productos.push(new Producto(3000, "Placa de video Nvidia MSI RTX 3070TI", 150000, 3, "./img/Productos/Placas/GPU_Nvidia_MSI_RTX3070TI.jpg"));
productos.push(new Producto(3001, "Placa de video Nvidia ZOTAC RTX 3070TI", 150000, 3, "./img/Productos/Placas/GPU_Nvidia_ZOTAC_RTX3070TI.jpg"));
productos.push(new Producto(3002, "Placa de video Nvidia ASUS RTX 3080TI", 250000, 4, "./img/Productos/Placas/GPU_Nvidia_MSI_RTX3080ti.jpg"));
productos.push(new Producto(3003, "Placa de video Nvidia MSI RTX 3080TI", 250000, 4, "./img/Productos/Placas/GPU_Nvidia_ASUS_RTX3080TI.jpg"));
productos.push(new Producto(3004, "Placa de video Nvidia ASUS RTX 3090", 400000, 6, "./img/Productos/Placas/GPU_Nvidia_ASUS_RTX3090.jpg"));
productos.push(new Producto(3005, "Placa de video Nvidia MSI RTX 3090", 400000, 10, "./img/Productos/Placas/GPU_Nvidia_MSI_RTX3090.jpg"));
productos.push(new Producto(4000, "Placa de video AMD Asrock RX6700XT", 150000, 3, "./img/Productos/Placas/GPU_AMD_Asrock_RX6700XT.jpg"));
productos.push(new Producto(4001, "Placa de video AMD ASUS RX6800XT", 200000, 5, "./img/Productos/Placas/GPU_AMD_ASUS_RX6800XT.jpg"));
productos.push(new Producto(4002, "Placa de video AMD Powercolor RX6900XT", 400000, 7, "./img/Productos/Placas/GPU_AMD_Powecolor_RX6900XT.jpg"));
productos.push(new Producto(4003, "Placa de video AMD XFX RX6900XT", 400000, 7, "./img/Productos/Placas/GPU_AMD_XFX_RX6900XT.jpg"));
productos.push(new Producto(5000, "Motherboard Intel Gigabyte Aorus Z690", 100000, 10, "./img/Productos/Motherboard/Mother_Intel_GigaZ690Aorus.jpg"));
productos.push(new Producto(5001, "Motherboard Intel MSI Unify Z690", 110000, 10, "./img/Productos/Motherboard/Mother_Intel_MSIZ690Unify.jpg"));
productos.push(new Producto(5002, "Motherboard Intel ASUS ROG Z690", 130000, 15, "./img/Productos/Motherboard/Mother_Intel_RogMaxZ690.jpg"));
productos.push(new Producto(6000, "Motherboard AMD MSI X570", 100000, 5, "./img/Productos/Motherboard/Mother_AMD_MSIX570SEdge.jpg"));
productos.push(new Producto(6001, "Motherboard AMD Gigabyte Aorus X570", 110000, 15, "./img/Productos/Motherboard/Mother_AMD_GigaX570SAorus.jpg"));
productos.push(new Producto(6002, "Motherboard AMD ASUS Crosshair X570", 130000, 15, "./img/Productos/Motherboard/Mother_AMD_AsusX570CrosshairVIII.jpg"));
productos.push(new Producto(7000, "Memoria RAM DDR4 Team 4gb 2400mhz", 5000, 20, "./img/Productos/RAM/RAMDDR4_Team4GB.jpg"));
productos.push(new Producto(7001, "Memoria RAM DDR4 ADATA 16gb 3200mhz", 12000, 15, "./img/Productos/RAM/RAMDDR4_ADATA16GB3200.jpg"));
productos.push(new Producto(7002, "Memoria RAM DDR4 ADATA 16gb 3600mhz", 13500, 15, "./img/Productos/RAM/RAMDDR4_ADATA16GB3600.jpg"));
productos.push(new Producto(7003, "Memoria RAM DDR5 Team 32gb 5600mhz", 13500, 4, "./img/Productos/RAM/RAMDDR5_Team32GB.jpg"));

let mainSec = document.querySelector(".SecMain");

for (const producto of productos) {
    let contenedor = document.createElement("article");
    contenedor.className = "contProducto";
    contenedor.innerHTML = `
                            <img src=${producto.imagen} alt=${producto.nombre} class="imgProd">
                            <div class="contInfoProd">
                            <p class="nombreProd">${producto.nombre}</p>
                            <p class="precioProd">$ ${producto.precio}</p>
                            </div>
                            <div class="contInfoCompra">
                            <input type="number" min="1" max="${producto.stock}" value="1" class="cantItem">
                            <button type="button" class="btn-comprar">Comprar</button>
                            </div>
                            `;
    mainSec.appendChild(contenedor);
}

const carrito = []
let barraBusqueda = document.getElementById("barraBusqueda");
barraBusqueda.addEventListener('input', () => {
    const buscarProducto = () => {
        const nombreProd = barraBusqueda.value;

        const resultadoBusqueda = productos.filter(producto => producto.nombre.includes(nomreProd))
        for (producto of productos) {

            const id = producto.id;
            document.getElementById(id).style.display = "none";

        }
        for (producto of resultadoBusqueda) {

            const id = producto.id;
            document.getElementById(id).style.display = "flex";

        }

    }
})

/*
const barra = document.querySelector("#barraBusqueda");
const btnBuscar = document.querySelector("#btn-buscar");
const contProd = document.querySelector(".contProducto");

const filtrar = () =>{
    const buscado = barra.value.toUpperCase();
    for(let prod of productos){
        let nombre = prod.nombre.toUpperCase();
        if(nombre.indexOf(buscado) !== -1){
            contProd.innerHTML +=`
            <img src=${producto.imagen} alt=${producto.nombre} class="imgProd">
            <div class="contInfoProd">
            <p class="nombreProd">${producto.nombre}</p>
            <p class="precioProd">$ ${producto.precio}</p>
            </div>
            <div class="contInfoCompra">
            <input type="number" min="1" max="${producto.stock}" value="1" class="cantItem">
            <button type="button" class="btn-comprar">Comprar</button>
            </div>
            `;
        }
    }
}

btnBuscar.addEventListener('click', filtrar);
*/