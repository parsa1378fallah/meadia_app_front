import axios from "axios";
const instance = axios.create({
  baseURL: "https://media-app-hie5.onrender.com/api/",
});
export default instance