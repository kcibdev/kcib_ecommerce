import "../styles/globals.scss";
import "../styles/homeStyles.scss";
import "../styles/auth.scss";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = React.useState(false);
  const router = useRouter();
  const path = router.pathname.split("/")[2] || router.pathname.split("/")[1];
  const authPage: boolean =
    path === "login" ||
    path === "register" ||
    path === "checkout" ||
    path === "forgot" ||
    router.pathname.split("/")[1] === "admin" ||
    path === "reset";

  React.useEffect(() => {
    setIsMounted(true);
  });
  return (
    isMounted && (
      <>
        <Layout isAuth={authPage}>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </>
    )
  );
}

export default MyApp;
