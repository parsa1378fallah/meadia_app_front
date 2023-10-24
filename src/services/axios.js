import axios from "axios";
const url = import.meta.env.VITE_Image_Base_URL;
const instance = axios.create({
  baseURL: `${url}/api/`,
});
export default instance