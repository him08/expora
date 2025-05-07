import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './sections/Header.jsx';
import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';
import About from './sections/About.jsx';
import Search from './pages/Search.tsx';
import TajMahalTour from './pages/tajmahaltour.tsx';
import EiffelTowerTour from './pages/eiffeltowertour.tsx';

const MainLayout = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
    </main>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/taj-mahal-tour" element={<TajMahalTour />} />
      <Route path="/eiffel-tower-tour" element={<EiffelTowerTour />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
