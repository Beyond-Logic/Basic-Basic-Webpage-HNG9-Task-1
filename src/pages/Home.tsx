/** @format */

import React from "react";
import { Footer, MainSection, NavBar } from "../components";

const Home = () => {
  return (
    <div>
      <div className="md:px-[114px] px-[16px]">
        <NavBar />
        <MainSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
