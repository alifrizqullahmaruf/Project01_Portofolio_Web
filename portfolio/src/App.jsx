// import React from 'react';

import Analytics from "./Components/Analytics";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Analytics />
      </main>
    </div>
  );
}
