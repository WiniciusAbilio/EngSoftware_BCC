import axios from 'axios';

export function getSilos() {
  return axios.get('http://127.0.0.1:8000/listarSilos/')
    .then(response => response.data)
}

export function deleteSilo(idSilo) {
  return axios.delete('http://127.0.0.1:8000/silos/' + idSilo + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addSilo(filial){
  return axios.post('http://127.0.0.1:8000/silos/', {
    idSilo:null,
    nomeSilo:filial.nomeSilo.value,
    cidade:filial.cidade.value,
    estado:filial.estado.value,
  })
    .then(response=>response.data)
}

export function updateSilo(idSilo, filial) {
  return axios.put('http://127.0.0.1:8000/silos/' + idSilo + '/', {
    nomeSilo:filial.nomeSilo.value,
    cidade:filial.cidade.value,
    estado:filial.estado.value,
  })
   .then(response => response.data)
}