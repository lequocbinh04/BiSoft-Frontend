import type { NextPage } from "next";
import Decoration from "../components/Decoration";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-dark text-white min-h-screen z-10">
      <Navbar />
      <Decoration />
    </div>
  );
};

export default Home;
