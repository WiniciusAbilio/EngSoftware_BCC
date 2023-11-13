import axios from 'axios';

export function getFiliais() {
  return axios.get('http://127.0.0.1:8000/listarFiliais/')
    .then(response => response.data)
}