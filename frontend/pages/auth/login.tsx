import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Head from "next/head";

type Props = {};

const LoginPage = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const btnStyles =
    "login__btn w-full rounded flex items-center justify-center py-[0.6rem] shadow-md relative font-semibold text-white hover:scale-95 transition ease-in-out delay-150 duration-200";
  return (
    <>
      <Head>
        <title>Login to Kcibecom</title>
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
        <div className="login__container bg-white p-4 shadow-md rounded-md w-full max-w-[400px]">
          <div className="login__header text-center mt-5">
            <h1 className="text-2xl font-bold mb-2">Login</h1>
            <p className="login__desc text-sm text-gray-400">
              Welcome back! Please login to your account.
            </p>
          </div>
          <div className="login__content">
            <form action="#" className="login__form my-3" id="login-form">
              <div className="login__form-group relative w-full h-[45px] my-4">
                <input
                  type="email"
                  className="login__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
                  id="email"
                  required
                />
                <div className="underline"></div>
                <label
                  htmlFor="email"
                  className="login__label email absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
                >
                  Email
                </label>
              </div>
              <div className="login__form-group relative w-full h-[45px] my-4">
                <input
                  type={showPassword ? "text" : "password"}
                  className="login__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
                  id="password"
                  required
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
              <p className="login__forgot text-right text-base hover:underline font-semibold primary-color cursor-pointer py-3 mr-1">
                Forgot Password
              </p>
              <div className="login__form-group">
                <button
                  type="submit"
                  className={`login__btn--email secondary-bg ${btnStyles}`}
                >
                  Login
                </button>
              </div>
            </form>
            <p className="login__or text-center font-semibold text-lg text-gray-500 my-3">
              OR
            </p>
            <div className="login__form-group mb-3">
              <button
                type="submit"
                className={`login__btn--google bg-[#db4b39] ${btnStyles}`}
              >
                <BsGoogle className="absolute left-5 text-lg" /> Login with
                Google
              </button>
            </div>
            <div className="login__form-group mb-3">
              <button
                type="submit"
                className={`login__btn--facebook bg-[#3b5998] ${btnStyles}`}
              >
                <FaFacebookSquare className="absolute left-5 text-lg" /> Login
                with Facebook
              </button>
            </div>
            <Link href="/auth/register">
              <p className="login__createaccount text-center text-sm font-medium text-gray-500 mt-3 cursor-pointer py-3">
                Don't have an account?{" "}
                <span className="primary-color hover:underline ">
                  Create one
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;