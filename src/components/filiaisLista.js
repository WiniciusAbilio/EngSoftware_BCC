import axios from 'axios';

export function getFiliais() {
  return axios.get('http://127.0.0.1:8000/listarFiliais/')
    .then(response => response.data)
}

export function deleteFilial(idFilial) {
  return axios.delete('http://127.0.0.1:8000/filiais/' + idFilial + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addFilial(filial){
  return axios.post('http://127.0.0.1:8000/filiais/', {
    idFilial:null,
    nomeFilial:filial.nomeFilial.value,
    cidade:filial.cidade.value,
    estado:filial.estado.value,
  })
    .then(response=>response.data)
}

export function updateFilial(idFilial, filial) {
  return axios.put('http://127.0.0.1:8000/filiais/' + idFilial + '/', {
    nomeFilial:filial.nomeFilial.value,
    cidade:filial.cidade.value,
    estado:filial.estado.value,
  })
   .then(response => response.data)
}