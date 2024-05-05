import React from 'react'
import Card from './components/Card'
import Category from './components/Category'
import Food from './components/Food'
import Hero from './components/Hero'
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      {/* <Category /> */}
      <Food />
      <Footer />
    </>
  );
};

export default App