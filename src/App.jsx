import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const respuesta = await fetch(`${import.meta.env.BASE_URL}data/productos.json`);
        
        if (!respuesta.ok) {
          throw new Error(`Error HTTP! estado: ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        
        setTimeout(() => {
          setProductos(datos);
          setCargando(false);
        }, 800);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  const productosFiltrados = productos.filter(prod =>
    prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const agregarAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
      const existe = prevCarrito.find(item => item.id === producto.id);
      if (existe) {
        return prevCarrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };

  const modificarCantidad = (id, delta) => {
    setCarrito(prevCarrito =>
      prevCarrito
        .map(item => {
          if (item.id === id) {
            const nuevaCantidad = item.cantidad + delta;
            return nuevaCantidad > 0 ? { ...item, cantidad: nuevaCantidad } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Total acumulado de items en el carrito
  const totalItemsCarrito = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div>
      <Navbar 
        cantidadCarrito={totalItemsCarrito} 
        busqueda={busqueda} 
        manejarBusqueda={(e) => setBusqueda(e.target.value)} 
        toggleCarrito={() => setMostrarCarrito(!mostrarCarrito)}
      />

      <Cart 
        carrito={carrito} 
        modificarCantidad={modificarCantidad}
        eliminarDelCarrito={eliminarDelCarrito} 
        vaciarCarrito={vaciarCarrito}
        cerrarCarrito={() => setMostrarCarrito(false)} 
        visible={mostrarCarrito}
      />

      {/* Carrusel de Productos */}
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
        </div>
      </div>

      <section className="container mt-5">
        {/* Renderizado condicional: Carga de datos */}
        {cargando ? (
          <div className="text-center py-5">
            <div className="spinner-border text-dark" role="status"></div>
            <p className="mt-2 text-muted">Cargando catálogo de productos...</p>
          </div>
        ) : productosFiltrados.length === 0 ? (
          <div className="col-12 text-center py-5">
            <p className="text-muted fs-5">No se encontraron productos que coincidan con la búsqueda.</p>
          </div>
        ) : (
          <div className="row g-4">
            {productosFiltrados.map(producto => {
              const itemEnCarrito = carrito.find(item => item.id === producto.id);
              return (
                <ProductCard 
                  key={producto.id} 
                  producto={producto} 
                  cantidadEnCarrito={itemEnCarrito ? itemEnCarrito.cantidad : 0}
                  agregarAlCarrito={agregarAlCarrito} 
                />
              );
            })}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default App;