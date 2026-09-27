import React from 'react';

function Cart({ carrito, eliminarDelCarrito, cerrarCarrito, visible }) {
  const total = carrito.reduce((acc, item) => acc + item.precioOferta, 0);

  return (
    <div className={`offcanvas offcanvas-end ${visible ? 'show d-block' : ''}`} tabIndex="-1" id="carritoOffcanvas">
      <div className="offcanvas-header bg-dark text-white">
        <h5 className="offcanvas-title" id="carritoOffcanvasLabel">Resumen de Compra</h5>
        <button type="button" className="btn-close btn-close-white" onClick={cerrarCarrito}></button>
      </div>
      <div className="offcanvas-body d-flex flex-column justify-content-between">
        <div>
          {carrito.length === 0 ? (
            <p className="text-center mt-3 text-muted">Tu carrito está vacío</p>
          ) : (
            <ul id="lista-carrito" className="list-group mb-3">
              {carrito.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <span>{item.nombre}</span>
                    <br />
                    <small className="text-muted">${item.precioOferta.toLocaleString('es-CL')}</small>
                  </div>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => eliminarDelCarrito(index)}>
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-top pt-3">
          <h4 className="d-flex justify-content-between">
            <span>Total:</span>
            <span>$<span id="total-carrito">{total.toLocaleString('es-CL')}</span></span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Cart;