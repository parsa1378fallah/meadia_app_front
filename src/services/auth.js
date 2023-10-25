import axios from "./axios";
import { notifyGroup, notify } from "../plugins/toast/toast";
export async function register({
  email = "",
  password = "",
  userName = "",
  firstName = "",
  lastName = "",
}) {
  try {
    const response = await axios.post("/auth/register", {
      email,
      password,
      userName,
      firstName,
      lastName,
    });
    console.log("response :", response);
    return true;
  } catch (error) {
    const erorrGroup = error.response.data.data;
    notify("عملیات با مشکل رو به رو شد", "error");
    notifyGroup(erorrGroup, "error");
  }
}
export async function loginFetch({ email = "", password = "" }) {
  try {
    const response = await axios.post("/auth/login", { email, password });

    const token = response.data.data.token;
    localStorage.setItem("social_medai_key", token);
    return response.data.data;
  } catch (error) {
    const erorrGroup = error.response.data.data;
    notify("عملیات با مشکل رو به رو شد", "error");
    notifyGroup(erorrGroup, "error");
    return false;
  }
}

export async function isUserLoginFetch() {
  const token = localStorage.getItem("social_medai_key");
  try {
    const response = await axios.get("/user", {
      headers: {
        "x-auth-token": token,
        "content-type": "application/json",
      },
    });
    const data = response.data.data;
    return data;
  } catch (error) {
    return false;
  }
}
