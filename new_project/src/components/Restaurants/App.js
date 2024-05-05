import React from "react";
import Card from "../Card";
import Category from "../Category";
import Food from "../Food";
import Hero from "../Hero";
import Navbar from "../Layout/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Category />
      <Food />
    </>
  );
};

export default App;
