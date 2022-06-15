import type { NextPage } from "next";
import "remixicon/fonts/remixicon.css";
import Decoration from "../components/Decoration";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Section1 from "../components/Section1";
import Statistic from "../components/Statistic";
import Service from "../components/Service";
import Product from "../components/Product";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BiSoft</title>
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
      </Head>

      <div className="bg-dark text-white min-h-screen relative z-10 overflow-x-hidden">
        <Navbar />
        <Decoration />
        <HeroSection />
        <Section1 />
        <Statistic />
        <Service />
        <Product />
        <Footer />
      </div>
    </>
  );
};

export default Home;
