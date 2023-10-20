import FormInput from "../../components/forms/FormInput.jsx";
import FormCheckbox from "../../components/forms/FormCheckbox.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../../plugins/toast/toast";
import { loginFetch } from "../../services/auth";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { access, denied } from "../../store/login/login.js";
import { setUserInformation } from "../../store/userInformation/userIngormation";

export default function Login() {
  const dispatch = useDispatch();
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [rememberMe, updateRemeberme] = useState(false);
  const navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();
    const data = await loginFetch({ email, password });
    if (data) {
      console.log(data)
      dispatch(access());
      dispatch(setUserInformation(data));
      notify(`کاربر ${firstName} ${lastName} با موفقیت وارد شدید`, "success");
      navigate("/");
    } else {
      dispatch(denied());
      notify("متاسفانه عملیات با مشکل روبه رو شد", "error");
    }
  }
  return (
    <div className="grid grid-cols-12  justify-center  items-center py-4 bg-slate-200 h-screen sm:h-full">
      <div className="col-span-12  flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 z-10 w-96">
        <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-2xl dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              ورود
            </h1>
            <form className="space-y-4 md:space-y-6">
              <FormInput
                type="email"
                id="email"
                placeholder={"parsaddbb@gmail.com"}
                require={true}
                title="ایمیل"
                formValue={email}
                updateFormValue={updateEmail}
              />
              <FormInput
                type="password"
                id="password"
                placeholder={"*********"}
                require={true}
                title="رمز عبور"
                formValue={password}
                updateFormValue={updatePassword}
              />
              <FormCheckbox
                title="من را به خاطر بسپار"
                formValue={rememberMe}
                updateFormValue={updateRemeberme}
              />
              <button
                onClick={loginUser}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                ورود
              </button>
              <div className="flex justify-between items-center">
                <div>
                  <span className=" text-sm font-light text-gray-500 dark:text-gray-400">
                    حساب کاربری ندارید ؟
                  </span>
                </div>
                <Link to="/register">
                  {" "}
                  <button className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    ثبت نام
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
