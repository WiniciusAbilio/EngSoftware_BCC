import axios from 'axios';

export function getUsuarios() {
  return axios.get('http://127.0.0.1:8000/listarUsuarios/')
    .then(response => response.data)
}

export function deleteUsuario(idUsuario) {
  return axios.delete('http://127.0.0.1:8000/usuarios/' + idUsuario + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addUsuario(usuario){
  return axios.post('http://127.0.0.1:8000/usuarios/', {
    idUsuario:null,
    nomeUsuario:usuario.nomeUsuario.value,
    email:usuario.email.value,
    tipoUsuario:usuario.tipoUsuario.value,
  })
    .then(response=>response.data)
}

export function updateUsuario(idUsuario, usuario) {
  return axios.put('http://127.0.0.1:8000/usuarios/' + idUsuario + '/', {
    nomeUsuario:usuario.nomeUsuario.value,
  })
   .then(response => response.data)
}