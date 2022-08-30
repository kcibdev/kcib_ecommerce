import "../styles/globals.scss";
import "../styles/homeStyles.scss";
import "../styles/auth.scss";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.pathname.split("/")[2] || router.pathname.split("/")[1];
  const authPage: boolean =
    path === "login" ||
    path === "register" ||
    path === "checkout" ||
    path === "forgot" ||
    path === "reset";
  return (
    <>
      <Layout isAuth={authPage}>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default MyApp;
