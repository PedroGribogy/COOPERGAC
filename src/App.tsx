import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Projects from './components/Projects';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Projects />
      <News />
      <Contact />
      <Footer />

      {/* Botão do WhatsApp fixo e responsivo */}
      <a
        href="https://wa.me/554185354399?text=Quero%20solicitar%20um%20or%C3%A7amento%21"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}

export default App;
