import type { NextPage } from "next";
import Hero from "../components/hero";
import Head from "next/head";
import HomePageLayout from "../components/homePageLayout";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/static/badge.ico" />
      </Head>
      <Hero />
      <HomePageLayout />
    </div>
  );
};

export default Index;
