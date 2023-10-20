import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function notify(message , type) {
  toast[type](message);
}
