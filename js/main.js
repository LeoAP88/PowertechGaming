/////////////////////////// GLOBAL ///////////////////////////

const carrito = []
const barraBuscar = document.getElementById("barraBusqueda");
let mainSec = document.querySelector(".SecMain");


/////////////////////////// CLASES ///////////////////////////

class Producto {
    constructor(idprod, nombre, precio, imagen) {
        this.idprod = idprod;
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.imagen = imagen;
    }

}

class Inventario {
    constructor(idprod, stock) {
        this.idprod = idprod;
        this.stock = stock;
    }
}

/////////////////////////// OBJETOS ///////////////////////////

const productos = [];
productos.push(new Producto(1000, "Procesador Intel Core i3 12100", 25000, "./img/Productos/Procesadores/i3.jpg"));
productos.push(new Producto(1001, "Procesador Intel Core i5 12400", 38000, "./img/Productos/Procesadores/i5.jpg"));
productos.push(new Producto(1002, "Procesador Intel Core i7 12700K", 70000, "./img/Productos/Procesadores/i7.jpg"));
productos.push(new Producto(1003, "Procesador Intel Core i9 12900k", 100000, "./img/Productos/Procesadores/i9.jpg"));
productos.push(new Producto(2000, "Procesador AMD Ryzen 5 5600", 32000, "./img/Productos/Procesadores/Ryzen5600.jpg"));
productos.push(new Producto(2001, "Procesador AMD Ryzen 7 5800x", 55000, "./img/Productos/Procesadores/Ryzen5800x.jpg"));
productos.push(new Producto(2002, "Procesador AMD Ryzen 7 5800x3D", 68000, "./img/Productos/Procesadores/Ryzen5800x3d.jpg"));
productos.push(new Producto(2003, "Procesador AMD Ryzen 9 5900x", 90000, "./img/Productos/Procesadores/Ryzen5900x.jpg"));
productos.push(new Producto(2004, "Procesador AMD Ryzen 9 5950x", 90000, "./img/Productos/Procesadores/Ryzen5950x.jpg"));
productos.push(new Producto(3000, "Placa de video Nvidia MSI RTX 3070TI", 150000, "./img/Productos/Placas/GPU_Nvidia_MSI_RTX3070TI.jpg"));
productos.push(new Producto(3001, "Placa de video Nvidia ZOTAC RTX 3070TI", 150000, "./img/Productos/Placas/GPU_Nvidia_ZOTAC_RTX3070TI.jpg"));
productos.push(new Producto(3002, "Placa de video Nvidia ASUS RTX 3080TI", 250000, "./img/Productos/Placas/GPU_Nvidia_MSI_RTX3080ti.jpg"));
productos.push(new Producto(3003, "Placa de video Nvidia MSI RTX 3080TI", 250000, "./img/Productos/Placas/GPU_Nvidia_ASUS_RTX3080TI.jpg"));
productos.push(new Producto(3004, "Placa de video Nvidia ASUS RTX 3090", 400000, "./img/Productos/Placas/GPU_Nvidia_ASUS_RTX3090.jpg"));
productos.push(new Producto(3005, "Placa de video Nvidia MSI RTX 3090", 400000, "./img/Productos/Placas/GPU_Nvidia_MSI_RTX3090.jpg"));
productos.push(new Producto(4000, "Placa de video AMD Asrock RX6700XT", 150000, "./img/Productos/Placas/GPU_AMD_Asrock_RX6700XT.jpg"));
productos.push(new Producto(4001, "Placa de video AMD ASUS RX6800XT", 200000, "./img/Productos/Placas/GPU_AMD_ASUS_RX6800XT.jpg"));
productos.push(new Producto(4002, "Placa de video AMD Powercolor RX6900XT", 400000, "./img/Productos/Placas/GPU_AMD_Powecolor_RX6900XT.jpg"));
productos.push(new Producto(4003, "Placa de video AMD XFX RX6900XT", 400000, "./img/Productos/Placas/GPU_AMD_XFX_RX6900XT.jpg"));
productos.push(new Producto(5000, "Motherboard Intel Gigabyte Aorus Z690", 100000, "./img/Productos/Motherboard/Mother_Intel_GigaZ690Aorus.jpg"));
productos.push(new Producto(5001, "Motherboard Intel MSI Unify Z690", 110000, "./img/Productos/Motherboard/Mother_Intel_MSIZ690Unify.jpg"));
productos.push(new Producto(5002, "Motherboard Intel ASUS ROG Z690", 130000, "./img/Productos/Motherboard/Mother_Intel_RogMaxZ690.jpg"));
productos.push(new Producto(6000, "Motherboard AMD MSI X570", 100000, "./img/Productos/Motherboard/Mother_AMD_MSIX570SEdge.jpg"));
productos.push(new Producto(6001, "Motherboard AMD Gigabyte Aorus X570", 110000, "./img/Productos/Motherboard/Mother_AMD_GigaX570SAorus.jpg"));
productos.push(new Producto(6002, "Motherboard AMD ASUS Crosshair X570", 130000, "./img/Productos/Motherboard/Mother_AMD_AsusX570CrosshairVIII.jpg"));
productos.push(new Producto(7000, "Memoria RAM DDR4 Team 4gb 2400mhz", 5000, "./img/Productos/RAM/RAMDDR4_Team4GB.jpg"));
productos.push(new Producto(7001, "Memoria RAM DDR4 ADATA 16gb 3200mhz", 12000, "./img/Productos/RAM/RAMDDR4_ADATA16GB3200.jpg"));
productos.push(new Producto(7002, "Memoria RAM DDR4 ADATA 16gb 3600mhz", 13500, "./img/Productos/RAM/RAMDDR4_ADATA16GB3600.jpg"));
productos.push(new Producto(7003, "Memoria RAM DDR5 Team 32gb 5600mhz", 13500, "./img/Productos/RAM/RAMDDR5_Team32GB.jpg"));


/////////////////////////// DOM ///////////////////////////



// Buscador de productos

barraBuscar.addEventListener('input', () => {
    console.log(barraBuscar.value);
    if (barraBuscar.value === '') {
        mostrarProductos(productos);
    } else {
        let prodFiltrados = productos.filter(elemento => elemento.nombre.includes(barraBuscar.value));
        console.log(prodFiltrados);
        mostrarProductos(prodFiltrados);
    }
})

mostrarProductos(productos);

function mostrarProductos(listaProd) {

    mainSec.innerHTML = ""

    listaProd.forEach(el => {
        let contenedor = document.createElement("article");
        contenedor.classList.add('contProducto');
        contenedor.innerHTML = `
                            <img src=${el.imagen} alt=${el.nombre} class="imgProd">
                            <div class="contInfoProd">
                            <p class="nombreProd">${el.nombre}</p>
                            <p class="precioProd">$ ${el.precio}</p>
                            </div>
                            <div class="contInfoCompra">
                            <input type="number" min="1" max="${el.stock}" value="1" class="cantItem">
                            <button type="button" class="btn-comprar" id="boton${el.id}">Comprar</button>
                            </div>
                            `;
        mainSec.appendChild(contenedor);

        let btnAgregar = document.getElementById(`boton${el.id}`);

    })

}
    /*
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
        */





