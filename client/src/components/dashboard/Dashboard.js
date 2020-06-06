//racp
import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardAction';
import Experience from './Experience';
import Education from './Education';

//Redux
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-use'></i> Bienvenid@ {user && user.name}
      </p>
      {profile != null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus'></i>Eliminar Cuenta
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>Todavía no tienes perfil, agrega algo de información</p>
          <Link to='/create-profile' className='btn btn-primary m-1'>
            Crear Perfil
          </Link>
          <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus'></i>Eliminar Cuenta
            </button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired, //ptfr
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired, //ptor
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
