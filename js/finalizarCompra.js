function cargarCarritoDeLocalStorage() {
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

function mostrarResumenCompra(){
const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const itemFinal = productos.filter((prod) => {
            return prod.idprod === parseInt(item);
        });
        const unidadesProd = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        let div = document.createElement('div')
        div.setAttribute('class', 'resumenCarrito')
        div.innerHTML = `
                        <img src='.${itemFinal[0].imagen}' alt=${itemFinal[0].nombre} class="imgProdCarrito">
                        <p>${itemFinal[0].nombre}</p>
                        <p>Cantidad: ${unidadesProd}</p>
                        <p>Precio: $${itemFinal[0].precio}</p>
                        `
                        secResumenCompra.appendChild(div);
    });
    precioFinalResumen.textContent = calcularTotal();
    
}




cargarCarritoDeLocalStorage()
mostrarResumenCompra()