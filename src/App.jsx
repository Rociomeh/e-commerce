import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { productosData } from './data/productos';
import './App.css';

function App() {
  const [productos, setProductos] = useState(productosData);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (indexId) => {
    setCarrito(carrito.filter((_, index) => index !== indexId));
  };

  const manejarBusqueda = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);
    if (texto.trim() === '') {
      setProductos(productosData);
    } else {
      setProductos(productosData.filter(prod => 
        prod.nombre.toLowerCase().includes(texto.toLowerCase())
      ));
    }
  };

  return (
    <div>
      <Navbar 
        cantidadCarrito={carrito.length} 
        busqueda={busqueda} 
        manejarBusqueda={manejarBusqueda} 
        toggleCarrito={() => setMostrarCarrito(!mostrarCarrito)}
      />

      <Cart 
        carrito={carrito} 
        eliminarDelCarrito={eliminarDelCarrito} 
        cerrarCarrito={() => setMostrarCarrito(false)} 
        visible={mostrarCarrito}
      />

      {/* Carrusel original */}
      <div className="container mt-4 mb-5">
        <div id="carruselProductos" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner rounded shadow-sm">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src="assets/imgs/img1.jpg" className="d-block w-100 carrusel-img" alt="Producto 1" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="assets/imgs/img5.jpg" className="d-block w-100 carrusel-img" alt="Producto 2" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="assets/imgs/img2.jpg" className="d-block w-100 carrusel-img" alt="Producto 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carruselProductos" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carruselProductos" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      <section className="container mt-5">
        <div id="mensaje-error"></div>
        <div className="row g-4" id="product-container">
          {productos.length === 0 ? (
            <div className="col-12 text-center py-5">
              <p className="text-muted fs-5">No se encontraron productos que coincidan con la búsqueda.</p>
            </div>
          ) : (
            productos.map(producto => (
              <ProductCard 
                key={producto.id} 
                producto={producto} 
                agregarAlCarrito={agregarAlCarrito} 
              />
            ))
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;