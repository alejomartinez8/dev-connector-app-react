//racp
import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-use'></i> Bienvenido {user && user.name}
      </p>
      {profile != null ? (
        <Fragment>Proximamente....</Fragment>
      ) : (
        <Fragment>
          <p>Todavía no tienes perfil, agrega algo de información</p>
          <Link to='/create-profile' className='btn btn-primary m-1'>
            Crear Perfil
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired, //ptfr
  auth: PropTypes.object.isRequired, //ptor
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
