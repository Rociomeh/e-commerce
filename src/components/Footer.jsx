import React from 'react';

function Footer() {
  const manejarEnvio = (e) => {
    e.preventDefault();
    alert('¡Gracias por suscribirte! Recibirás tus cupones pronto.');
  };

  return (
    <React.Fragment>
      <footer className="pb-4 my-5 bg-dark text-white text-center p-4">
        <div className="container">
          <p className="fs-4 mt-2">Recibe cupones en tu correo</p>
          
          <form className="mb-3 mx-auto" style={{ maxWidth: '400px' }} onSubmit={manejarEnvio}>
            <div className="mb-2">
              <input type="text" className="form-control" placeholder="Nombre" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Correo electrónico" required />
            </div>
            <button type="submit" className="btn btn-light w-100">
              Enviar
            </button>
          </form>
        </div>
      </footer>

      <div className="text-center my-3">
        <img src="assets/imgs/logo-black.png" className="img-fluid" alt="logo footer" style={{ maxWidth: '80px' }} />
        <p className="text-muted mt-2 small">
          <i className="fa-regular fa-copyright"> 2018 todobolsas LATAM. Todos los derechos reservados</i>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Footer;