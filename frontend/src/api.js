import axios from "axios";

const API = axios.create({
  baseURL: "https://expense-tracker-backend1-jfp5.onrender.com"
});

export default API;