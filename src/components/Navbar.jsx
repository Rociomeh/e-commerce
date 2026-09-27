import React from 'react';

function Navbar({ cantidadCarrito, busqueda, manejarBusqueda, toggleCarrito }) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid"> 
        <a className="navbar-brand" href="#/">
          <img src="assets/imgs/logo-white.png" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link text-light" href="#/">Tote Bags</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#/">Bolsas de Malla</a></li>
          </ul>
          <form className="d-flex me-3" id="form-busqueda" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="form-control me-2" 
              type="search" 
              id="input-busqueda" 
              placeholder="Buscar producto..." 
              value={busqueda}
              onChange={manejarBusqueda}
            />
            <button className="btn btn-outline-light" type="submit">Buscar</button>
          </form>
          <button 
            className="btn btn-dark ms-lg-3 mt-2 mt-lg-0" 
            type="button" 
            onClick={toggleCarrito}
          >
            🛒 Carrito (<span id="contador-carrito">{cantidadCarrito}</span>)
          </button>
        </div>
      </div> 
    </nav>
  );
}

export default Navbar;