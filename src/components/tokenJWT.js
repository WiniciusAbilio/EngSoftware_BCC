import React from 'react';

function TokenJWT() {
  const token = localStorage.getItem('token');

  return (
    <input type="hidden" id="token" name="token" value={token || ''} />
  );
}

export default TokenJWT;
