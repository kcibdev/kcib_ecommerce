import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import useAuthStore from "../../store/useAuthStore";
import { forgotPassword, resetPassword } from "../../services/auth";
import { PulseLoader } from "react-spinners";
import { NODE_RESET_URL } from "../../utils/constants";

type Props = {};

const ResetPassword = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();
  const token = router.query.token?.toString();
  const fromEmail = router.query.from?.toString();
  const btnStyles =
    "reset__btn w-full rounded flex items-center justify-center py-[0.6rem] shadow-md relative font-semibold text-white hover:scale-95 transition ease-in-out delay-150 duration-200";

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (!passwords.password || !passwords.confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }
    if (passwords.password !== passwords.confirmPassword) {
      toast.error("Password does not match!");
      return;
    }
    setIsLoading(true);
    resetPassword(
      {
        password: passwords.password,
        token: token!,
        email: fromEmail!,
        url: NODE_RESET_URL,
      },
      setIsLoading
    );
  };

  useEffect(() => {
    if (!token || !fromEmail) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);
  return (
    <>
      <Head>
        <title>Reset your account password</title>
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
        <div className="reset__container bg-white p-4 shadow-md rounded-md w-full max-w-[400px]">
          <div className="reset__header text-center mt-5">
            <h1 className="text-2xl font-bold mb-2">Reset Password</h1>
            <p className="reset__desc text-sm text-gray-400">
              Enter your new password and confirm it to reset.
            </p>
          </div>
          <div className="reset__content">
            <form action="#" className="reset__form my-3" id="login-form">
              <div className="reset__form-group form__input relative w-full h-[45px] my-4">
                <input
                  type="password"
                  className="reset__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
                  id="password"
                  required
                  name="password"
                  value={passwords.password}
                  onChange={onInputChange}
                />
                <div className="underline"></div>
                <label
                  htmlFor="password"
                  className="reset__label password absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
                >
                  Password
                </label>
              </div>
              <div className="reset__form-group form__input relative w-full h-[45px] my-4">
                <input
                  type="password"
                  className="reset__input w-full h-full outline-none border-b-2 border-gray-200 px-1"
                  id="confirmPassword"
                  required
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={onInputChange}
                />
                <div className="underline"></div>
                <label
                  htmlFor="password"
                  className="reset__label confirmPassword absolute bottom-[10px] left-0 text-base text-[#aaa] transition ease-in-out delay-150 duration-300"
                >
                  Confirm Password
                </label>
              </div>
              <div className="reset__form-group form__input flex justify-center flex-col">
                {!isLoading && (
                  <button
                    type="submit"
                    className={`reset__btn--email secondary-bg ${btnStyles}`}
                    onClick={onSubmit}
                  >
                    Reset Password
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
