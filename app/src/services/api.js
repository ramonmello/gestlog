import axios from "axios";

const api = axios.create({
  baseURL: "http://gestlog.azurewebsites.net/api/App/"
});

export default api;