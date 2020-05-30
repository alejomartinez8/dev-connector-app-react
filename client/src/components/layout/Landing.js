import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Conexión Desarrollo Software</h1>
          <p className='lead'>
            Cree un perfil / portafolio de desarrolladores, comparta
            publicaciones y obtenga ayuda de otros desarrolladores
          </p>
          <div class='buttons'>
            <Link to='/register' class='btn btn-primary'>
              Registrarse
            </Link>
            <Link to='/login' class='btn btn-light'>
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
