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

export function addSilo(silo){
  return axios.post('http://127.0.0.1:8000/silos/', {
    idSilo:null,
    nomeSilo:silo.nomeSilo.value,
    cidade:silo.cidade.value,
    estado:silo.estado.value,
  })
    .then(response=>response.data)
}

export function updateSilo(idSilo, silo) {
  return axios.put('http://127.0.0.1:8000/silos/' + idSilo + '/', {
    nomeSilo:silo.nomeSilo.value,
  })
   .then(response => response.data)
}