import type { NextPage } from "next";
import Head from "next/head";
import {
  DesktopNav,
  MobileNav,
  HomeSection,
  PopularSection,
  FeaturedSection,
  NewestSection,
  Footer,
} from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>KCIBECOM - No 1 Ecommerce Site</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <HomeSection />
        <PopularSection />
        <FeaturedSection />
        <NewestSection />
      </main>
    </div>
  );
};

export default Home;
