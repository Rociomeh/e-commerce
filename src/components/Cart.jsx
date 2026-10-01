import React from 'react';

function Cart({ carrito, modificarCantidad, eliminarDelCarrito, vaciarCarrito, cerrarCarrito, visible }) {
  // Cálculo eficiente del total multiplicando por cantidad
  const total = carrito.reduce((acc, item) => acc + (item.precioOferta * item.cantidad), 0);

  return (
    <div className={`offcanvas offcanvas-end ${visible ? 'show d-block' : ''}`} tabIndex="-1">
      <div className="offcanvas-header bg-dark text-white">
        <h5 className="offcanvas-title">Resumen de Compra</h5>
        <button type="button" className="btn-close btn-close-white" onClick={cerrarCarrito}></button>
      </div>
      <div className="offcanvas-body d-flex flex-column justify-content-between">
        <div>
          {/* Renderizado condicional: Carrito vacío vs items */}
          {carrito.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">Tu carrito está vacío</p>
            </div>
          ) : (
            <ul className="list-group mb-3">
              {carrito.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="me-2">
                    <strong className="d-block">{item.nombre}</strong>
                    <small className="text-muted">
                      ${item.precioOferta.toLocaleString('es-CL')} x {item.cantidad}
                    </small>
                  </div>
                  
                  {/* Controles de cantidad (+ / -) y eliminar */}
                  <div className="d-flex align-items-center gap-1">
                    <button className="btn btn-sm btn-outline-secondary px-2" onClick={() => modificarCantidad(item.id, -1)}>-</button>
                    <span className="px-1 small fw-bold">{item.cantidad}</span>
                    <button className="btn btn-sm btn-outline-secondary px-2" onClick={() => modificarCantidad(item.id, 1)}>+</button>
                    <button className="btn btn-sm btn-danger ms-2" onClick={() => eliminarDelCarrito(item.id)}>&times;</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {carrito.length > 0 && (
          <div className="border-top pt-3">
            <h4 className="d-flex justify-content-between mb-3">
              <span>Total:</span>
              <span>${total.toLocaleString('es-CL')}</span>
            </h4>
            <button className="btn btn-outline-danger w-100" onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;