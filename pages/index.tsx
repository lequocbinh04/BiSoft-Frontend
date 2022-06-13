import type { NextPage } from "next";
import "remixicon/fonts/remixicon.css";
import Decoration from "../components/Decoration";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BiSoft</title>
      </Head>
      <div className="bg-dark text-white min-h-screen relative z-10 overflow-x-hidden">
        <Navbar />
        <Decoration />
        <HeroSection />
        abc
      </div>
    </>
  );
};

export default Home;
