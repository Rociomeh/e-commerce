import React from 'react';

function Footer() {
  return (
    <React.Fragment>
      <footer className="pb-3 my-5">
        <div className="text-white">
          <div className="row">
            <div className="col">
              <p className="fs-4 mt-5">Recibe cupones en tu correo</p>
            </div>
            <form className="mb-3" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="nombre" className="form-label"></label>
              <input type="text" className="form-control" id="nombre" placeholder="Nombre" required />
              <label htmlFor="email" className="form-label"></label>
              <input type="text" className="form-control" id="email" placeholder="Correo" required />         
            </form>
          </div>
        </div>
        <a className="btn btn-light" href="#/">Enviar</a>
      </footer>

      <div className="logo">
        <img src="assets/imgs/logo-black.png" className="img-fluid" alt="logo footer" />
      </div>
      <p className="text-center text-muted">
        <i className="fa-regular fa-copyright"> 2018 todobolsas LATAM. Todos los derechos reservados</i>
      </p>
    </React.Fragment>
  );
}

export default Footer;