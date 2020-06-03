//racf
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardAction = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> Editar Perfil
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary'></i> Agregar Experiencia
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary'></i> Agregar Educación
      </Link>
    </div>
  );
};

export default DashboardAction;
