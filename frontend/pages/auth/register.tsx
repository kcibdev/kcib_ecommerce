import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Head from "next/head";

type Props = {};

const RegisterPage = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const btnStyles =
    "register__btn w-full rounded flex items-center justify-center py-[0.6rem] shadow-md relative font-semibold text-white hover:scale-95 transition ease-in-out delay-150 duration-200";
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
              <div className="register__form-group relative w-full h-[45px] my-4">
                <input
                  type="text"
                  className="register__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
                  id="name"
                  required
                />
                <div className="underline"></div>
                <label
                  htmlFor="name"
                  className="register__label name absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
                >
                  Full Name
                </label>
              </div>
              <div className="register__form-group relative w-full h-[45px] my-4">
                <input
                  type="email"
                  className="register__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
                  id="email"
                  required
                />
                <div className="underline"></div>
                <label
                  htmlFor="email"
                  className="register__label email absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
                >
                  Email
                </label>
              </div>
              <div className="register__form-group relative w-full h-[45px] my-4">
                <input
                  type={showPassword ? "text" : "password"}
                  className="register__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
                  id="password"
                  required
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
              <div className="register__form-group">
                <button
                  type="submit"
                  className={`register__btn--email secondary-bg ${btnStyles}`}
                >
                  Register
                </button>
              </div>
            </form>
            <p className="register__or text-center font-semibold text-lg text-gray-500 my-3">
              OR
            </p>
            <div className="register__form-group mb-3">
              <button
                type="submit"
                className={`register__btn--google bg-[#db4b39] ${btnStyles}`}
              >
                <BsGoogle className="absolute left-5 text-lg" /> Continue with
                Google
              </button>
            </div>
            <div className="register__form-group mb-3">
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