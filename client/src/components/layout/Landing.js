import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; //impt

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Conexión Desarrollo Software</h1>
          <p className='lead'>
            Cree un perfil / portafolio de desarrolladores, comparta
            publicaciones y obtenga ayuda de otros desarrolladores
          </p>
          <div className='buttons'>
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

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
