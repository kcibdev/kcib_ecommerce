import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Head from "next/head";
import { useRouter } from "next/router";
import useAuthStore from "../../store/useAuthStore";
import { toast } from "react-toastify";
import { registerUser } from "../../services/auth";
import { PulseLoader } from "react-spinners";

type Props = {};

const RegisterPage = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const { setUserAccount, isAuthenticated } = useAuthStore((state) => state);
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

    const { name, email, phone, password } = formData;
    if (!name || !phone || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);
    registerUser(formData, setIsLoading, setUserAccount);
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Head>
        <title>Register to Kcibecom</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <div className="login__logo my-8">
          <Link href="/">
            <h3 className="font-bold text-3xl primary-color cursor-pointer">
              KCIB<span className="secondary-color">ECOM</span>
            </h3>
          </Link>
        </div>
        <div className="register__container bg-white p-4 shadow-md rounded-md w-full max-w-[400px]">
          <div className="register__header text-center mt-5">
            <h1 className="text-2xl font-bold mb-2">Register</h1>
            <p className="register__desc text-sm text-gray-400">
              Create an account with us.
            </p>
          </div>
          <div className="register__content">
            <form action="#" className="register__form my-3" id="login-form">
              <div className="register__form-group form__input relative w-full h-[45px] my-4">
                <input
                  type="text"
                  className="register__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
                  id="name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={onInputChange}
                />
                <div className="underline"></div>
                <label
                  htmlFor="name"
                  className="register__label name absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
                >
                  Full Name
                </label>
              </div>
              <div className="register__form-group form__input relative w-full h-[45px] my-4">
                <input
                  type="email"
                  className="register__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
                  id="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                />
                <div className="underline"></div>
                <label
                  htmlFor="email"
                  className="register__label email absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
                >
                  Email
                </label>
              </div>
              <div className="register__form-group form__input relative w-full h-[45px] my-4">
                <input
                  type="number"
                  className="register__input w-full h-full outline-none border-b-2 border-gray-200 px-1 appearance-none"
                  id="phone"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={onInputChange}
                />
                <div className="underline"></div>
                <label
                  htmlFor="phone"
                  className="register__label phone absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
                >
                  Phone Number
                </label>
              </div>
              <div className="register__form-group form__input relative w-full h-[45px] my-4">
                <input
                  type={showPassword ? "text" : "password"}
                  className="register__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
                  id="password"
                  required
                  name="password"
                  value={formData.password}
                  onChange={onInputChange}
                />
                <div className="underline"></div>
                <label
                  htmlFor="password"
                  className="register__label password absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
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
              <div className="register__form-group form__input flex justify-center flex-col">
                {!isLoading && (
                  <button
                    type="submit"
                    className={`register__btn--email secondary-bg ${btnStyles}`}
                    onClick={onSubmit}
                  >
                    Register
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
            <p className="register__or text-center font-semibold text-lg text-gray-500 my-3">
              OR
            </p>
            <div className="register__form-group form__input mb-3">
              <button
                type="submit"
                className={`register__btn--google bg-[#db4b39] ${btnStyles}`}
              >
                <BsGoogle className="absolute left-5 text-lg" /> Continue with
                Google
              </button>
            </div>
            <div className="register__form-group form__input mb-3">
              <button
                type="submit"
                className={`register__btn--facebook bg-[#3b5998] ${btnStyles}`}
              >
                <FaFacebookSquare className="absolute left-5 text-lg" />{" "}
                Continue with Facebook
              </button>
            </div>
            <Link href="/auth/login">
              <p className="register__createaccount text-center text-sm font-medium text-gray-500 mt-3 cursor-pointer py-3">
                Already have an account?{" "}
                <span className="primary-color hover:underline ">Log in</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
