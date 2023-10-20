import { useState } from "react";
import FormInput from "../../components/forms/FormInput";
import { register } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { notify } from "../../plugins/toast/toast";
import { Link } from "react-router-dom";
import { isUserLogin } from "../../store/login/login.js";
import { useSelector } from "react-redux";
export default function Login() {
  const isUserLoginStore = useSelector(isUserLogin);
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [userName, updateUserName] = useState("");
  const navigate = useNavigate();
  async function registerUser(e) {
    e.preventDefault();
    const success = await register({
      firstName,
      lastName,
      userName,
      password,
      email,
    });
    if (success) {
      notify("ثبت نام با موفقیت انجام شد", "success");
      navigate("/login");
    } else {
      notify("عملیات با مشکل رو به رو شد", "error");
    }
  }
  return (
    <div className="grid grid-cols-12 justify-center  items-center py-4 bg-slate-200 h-screen sm:h-full">
      <div className=" col-span-12 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md p-10  dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-2 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              ثبت نام{isUserLoginStore}
            </h1>
            <form className="space-y-2 md:space-y-6">
              <FormInput
                type="text"
                id="firstName"
                placeholder={"نام خود را وارد کنید"}
                require={true}
                title="نام"
                formValue={firstName}
                updateFormValue={updateFirstName}
              />
              <FormInput
                type="text"
                id="lastName"
                placeholder={"نام خانوادگی خود را وارد کنید"}
                require={true}
                title="نام خانوادگی"
                formValue={lastName}
                updateFormValue={updateLastName}
              />

              <FormInput
                type="text"
                id="userName"
                placeholder={"نام کاربری خود را وارد کنید"}
                require={true}
                title="نام کاربری"
                formValue={userName}
                updateFormValue={updateUserName}
              />
              <FormInput
                type="email"
                id="email"
                placeholder={"ایمیل خود را وارد کنید"}
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
              <div className="flex items-center justify-between"></div>
              <button
                onClick={registerUser}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                ثبت نام
              </button>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-between items-center">
                <p>قبلا ثبت نام کرده اید ؟</p>
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  ورود
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
