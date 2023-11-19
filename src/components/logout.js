import React from 'react';
import { Link } from 'react-router-dom'; // Importe a funcionalidade de Link para criar links

function Logout() {
    

  return (
    <div className='container-login-form-btn'>
    <Link to='/logout'>
      <button className='logon-form-btn'>
        LOG OUT
      </button>
    </Link>
  </div>
  );
}

export default Logout;
