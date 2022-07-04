const confirmarCompra = document.querySelector('#confirmarCompra');
const nombreCliente = document.querySelector('#nombreCliente');
const apellidoCliente = document.querySelector('#apellidoCliente');
const emailCliente = document.querySelector('#emailCliente');
const wrapperCompraFinal = document.querySelector('#wrapperCompraFinal');


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
                        <img src='.${itemFinal[0].imagen}' alt=${itemFinal[0].nombre} class="imgProdResumen">
                        <p>${itemFinal[0].nombre}</p>
                        <p>Cantidad ${unidadesProd}</p>
                        <p>P.U. $${itemFinal[0].precio}</p>
                        `
                        secResumenCompra.append(div);
    });
    precioFinalResumen.textContent = calcularTotal();
    
}

function finalizarCompra(e){
    e.preventDefault();
    wrapperCompraFinal.innerHTML = ''
    wrapperCompraFinal.style.height = "30vh";
    let contMensajeCompra = document.createElement('div');
    contMensajeCompra.setAttribute('class', 'contMensajeCompra');
    let mensajeCompra = document.createElement('p');
    mensajeCompra.setAttribute('class', 'mensajeCompra');
    mensajeCompra.innerText = "¡" + nombreCliente.value + " " + apellidoCliente.value + "  muchas gracias por tu compra!" + "\nLa información para el pago será enviada a: " + emailCliente.value;
    wrapperCompraFinal.appendChild(contMensajeCompra);
    contMensajeCompra.appendChild(mensajeCompra);
    carrito = [];
    localStorage.clear();
}

confirmarCompra.addEventListener('click', finalizarCompra);


cargarCarritoDeLocalStorage()
mostrarResumenCompra()