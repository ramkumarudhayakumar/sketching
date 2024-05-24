import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Services from "./pages/Services";
import PayNowButton from "./pages/PayNowButton";

import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Header />
      <Main />
      <About />
      <Services />
      <PayNowButton />
      <Footer />
    </div>
  );
}

export default App;
