import { useEffect } from "react";
import { isUserLoginFetch } from "../../services/auth.js";
import { useDispatch } from "react-redux";
import { access, denied } from "../../store/login/login.js";
import { setUserInformation } from "../../store/userInformation/userIngormation.js";

function getLoginDataHook() {
  const dispatch = useDispatch();
  async function getLoginData() {
    const data = await isUserLoginFetch();
    if (data) {
      dispatch(access());
      dispatch(setUserInformation(data));
    } else {
      dispatch(denied());
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("social_medai_key");
    if(token)
    getLoginData();
  }, []);
  return getLoginData;
}

export default getLoginDataHook;
