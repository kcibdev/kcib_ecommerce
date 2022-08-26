import "../styles/globals.scss";
import "../styles/homeStyles.scss";
import "../styles/auth.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.pathname.split("/")[2];
  const authPage: boolean = path === "login" || path === "register";
  return (
    <Layout isAuth={authPage}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
