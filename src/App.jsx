import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import LinksSection from './components/LinksSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <LinksSection />
      <Footer />
    </div>
  );
}

export default App;
