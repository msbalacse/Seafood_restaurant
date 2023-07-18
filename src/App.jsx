import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
};

export default App;
