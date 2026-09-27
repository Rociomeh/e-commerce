import React from 'react';

function ProductCard({ producto, agregarAlCarrito }) {
  return (
    <div className="col-12 col-md-4">
      <div className="card h-100">
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
            className="btn btn-outline-dark w-100 mt-3 btn-agregar" 
            onClick={() => agregarAlCarrito(producto)}
          >
            Añadir al carrito
          </button>
        </div>
        <div className="card-footer text-end">
          <small className="text-muted d-block text-decoration-line-through me-1" style={{ fontSize: '0.8rem' }}>
            Normal: ${producto.precioNormal.toLocaleString('es-CL')}
          </small>
          <small className="fw-bold text-dark">
            Oferta: ${producto.precioOferta.toLocaleString('es-CL')}
          </small>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;