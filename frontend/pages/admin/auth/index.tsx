import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";
import useAuthStore from "../../../store/useAuthStore";
import { accessLoginUser } from "../../../services/auth";
import { NODE_ACCESS_URL } from "../../../utils/constants";

type Props = {};

const AdminLogin = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    url: NODE_ACCESS_URL,
  });
  const { setAdminAccount, isAuthenticated, isAdministrator } = useAuthStore(
    (state) => state
  );
  const router = useRouter();
  const btnStyles =
    "login__btn w-full rounded flex items-center justify-center py-[0.6rem] shadow-md relative font-semibold text-white hover:scale-95 transition ease-in-out delay-150 duration-200";

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const { email, password } = formData;
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }
    setIsLoading(true);
    accessLoginUser(formData, setIsLoading, setAdminAccount);
  };

  useEffect(() => {
    if (isAuthenticated && isAdministrator) {
      router.push("/admin/v1/dashboard");
    }
  }, [isAuthenticated, isAdministrator]);

  return (
    <>
      <Head>
        <title>KCIBECOM.COM</title>
      </Head>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="login__container bg-white p-4 shadow-md rounded-md w-full max-w-[400px]">
          <div className="login__header text-center mt-5">
            <h1 className="text-2xl font-bold mb-2">Login</h1>
          </div>
          <div className="login__content">
            <form action="#" className="login__form my-3" id="login-form">
              <div className="login__form-group form__input relative w-full h-[45px] my-4">
                <input
                  type="email"
                  className="login__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
                  id="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                />
                <div className="underline"></div>
                <label
                  htmlFor="email"
                  className="login__label email absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
                >
                  Email
                </label>
              </div>
              <div className="login__form-group form__input relative w-full h-[45px] my-4">
                <input
                  type={showPassword ? "text" : "password"}
                  className="login__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
                  id="password"
                  required
                  name="password"
                  value={formData.password}
                  onChange={onInputChange}
                />
                <div className="underline"></div>
                <label
                  htmlFor="password"
                  className="login__label password absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
                >
                  Password
                </label>
                <div
                  className="register__showPassword absolute right-5 bottom-[10px] cursor-pointer md:hidden"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="text-2xl text-gray-500" />
                  ) : (
                    <AiOutlineEye className="text-2xl text-gray-500" />
                  )}
                </div>
              </div>
              <div className="login__form-group form__input flex justify-center flex-col">
                {!isLoading && (
                  <button
                    type="submit"
                    className={`login__btn--email secondary-bg ${btnStyles}`}
                    onClick={onSubmit}
                  >
                    Login
                  </button>
                )}
                <PulseLoader
                  size={15}
                  className="mx-auto my-3"
                  color={"#192a56"}
                  loading={isLoading}
                />
              </div>
            </form>
            <p className="login__or text-center font-semibold text-lg text-gray-500 my-3">
              OR
            </p>
            <div className="login__form-group form__input mb-3">
              <button
                type="submit"
                className={`login__btn--google bg-[#db4b39] ${btnStyles}`}
              >
                <BsGoogle className="absolute left-5 text-lg" /> Login with
                Google
              </button>
            </div>
            <div className="login__form-group form__input mb-3">
              <button
                type="submit"
                className={`login__btn--facebook bg-[#3b5998] ${btnStyles}`}
              >
                <FaFacebookSquare className="absolute left-5 text-lg" /> Login
                with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
