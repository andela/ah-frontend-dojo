import axios from 'axios';

// const ahUser = sessionStorage.getItem('ahUser');
// const { token } = JSON.parse(ahUser);
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywiaWF0IjoxNTYwNzkzMjg3LCJleHAiOjE1NjA4MDQwODd9.hhYslSije8HlOVuEZBQUGOuZeooJPMuLBIGO2zjWK3I';
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
