class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = parseInt(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
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

/* Creación de objetos producto dentro del array*/
const productos = [];
productos.push(new Producto(1000, "Procesador Intel Core i3 12100", 25000, 15));
productos.push(new Producto(1001, "Procesador Intel Core i5 12400", 38000, 20));
productos.push(new Producto(1002, "Procesador Intel Core i7 12700K", 70000, 10));
productos.push(new Producto(1003, "Procesador Intel Core i9 12900k", 100000, 3));

const carrito = [];
let idItem = 0;

/////////////////////////// FUNCIONES ///////////////////////////

function pedirID() {
    idItem = parseInt(prompt("Ingresar id de producto a comprar:\n1000: Procesador Intel Core i3 12100\n1001: Procesador Intel Core i5 12400\n1002: Procesador Intel Core i7 12700K\n1003: Procesador Intel Core i9 12900k\n\n0: Finalizar compra"));
}

function verificarExistencia() {
    pedirID();
    /*Busca el elemento solicitado comparando el id ingresado con el id de los productos creados */
    const encontrado = productos.find((el) => el.id === idItem);
    if (encontrado !== undefined) {
        cantidad = parseInt(prompt("Ingresar la cantidad deseada \nEl stock actual del producto es: " + encontrado.stock));
        if (encontrado.stock >= cantidad && cantidad > 0) {
            encontrado.restarStock();
            encontrado.añadirAlCarrito(cantidad);
        } else {
            alert("La cantidad ingresada no es válida");
        }
    } else if (idItem == 0) {
        alert("Finalizó la compra");
    } else {
        alert("El ID ingresado no coincide con ningun producto\nVuelva a ingresar el ID");
    }
}

function mostrarResumenCompra() {
    if (carrito != "") {
        let compra = "Resumen de la compra\n\n";
        for (const car of carrito) {
            compra += car.nombre + "\nCantidad: " + car.cantidad + "\nPrecio unitario: $" + car.precio + "\nPrecio total: $" + car.precioTotal + "\n\n";
        }
        alert(compra + "Total de compra: $" + importeFinal);
    }
}

/////////////////////////// PROGRAMA ///////////////////////////

do {
    verificarExistencia();
} while (idItem != 0 || idItem == undefined);

/* Acumulo la suma de los importes de cada item solicitado */
const importeFinal = carrito.reduce((acum, elem) => acum + elem.precioTotal, 0);

/* Muestro por alert el estado final del carrito*/
mostrarResumenCompra();