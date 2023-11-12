import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

export default axios;