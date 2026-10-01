import React from 'react';

function ProductCard({ producto, cantidadEnCarrito, agregarAlCarrito }) {
  const estaEnCarrito = cantidadEnCarrito > 0;

  return (
    <div className="col-12 col-md-4">
      <div className="card h-100 shadow-sm">
        <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="text-muted small mb-1">{producto.descripcion}</p>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram text-muted"> todobolsas</i>
            </a>
          </div>
          <button 
            className={`btn w-100 mt-3 transition-all ${
              estaEnCarrito ? 'btn-success' : 'btn-outline-dark'
            }`} 
            onClick={() => agregarAlCarrito(producto)}
          >
            {estaEnCarrito ? `✓ En el carrito (${cantidadEnCarrito})` : 'Añadir al carrito'}
          </button>
        </div>
        <div className="card-footer text-end bg-white border-top-0">
          <small className="text-muted d-block text-decoration-line-through me-1" style={{ fontSize: '0.8rem' }}>
            Normal: ${producto.precioNormal.toLocaleString('es-CL')}
          </small>
          <small className="fw-bold text-dark fs-6">
            Oferta: ${producto.precioOferta.toLocaleString('es-CL')}
          </small>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;