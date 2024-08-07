import axios from 'axios'

const http = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
  }, withCredentials: true,
})

export default http;