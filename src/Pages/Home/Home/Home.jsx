import React from "react";
import Banner from "../Banner/Banner";
import Test from "../Test/Test";
import Company from "../Company/Company";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <Test></Test>
      <Company></Company>
    </div>
  );
};

export default Home;
