import React from "react";
import Headers from "./components/Headers";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";

export default function page() {
  return (
    <div>
      <Headers />
      <Hero />
      <Benefits />
      <Footer />
    </div>
  );
}
