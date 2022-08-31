import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useAuthStore from "../../../store/useAuthStore";
import Head from "next/head";

type Props = {};

const IndexPage = (props: Props) => {
  const { setAdminAccount, isAuthenticated, isAdministrator } = useAuthStore(
    (state) => state
  );
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated || !isAdministrator) {
      router.push("/");
    }
  }, [isAuthenticated, isAdministrator]);
  return (
    <>
      <Head>
        <title>Admin Dashboard - Kcibecom.com</title>
      </Head>
    </>
  );
};

export default IndexPage;
