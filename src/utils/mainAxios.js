import axios from 'axios';

// const ahUser = sessionStorage.getItem('ahUser');
// const { token } = JSON.parse(ahUser);
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiaWF0IjoxNTYwNDI5MzI4LCJleHAiOjE1NjA0NDAxMjh9.wbSveLoKWrebHE61IfoltLM9wtyLgE1HaZX1PlK2trg';
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
