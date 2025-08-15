import './App.css'
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Category from "./components/Category";
import GetItDone from "./components/GetItDone";
import Services from "./components/Services";
import Sponsors from "./components/Sponsors";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="font-inter text-gray-900">
      <Hero />
      <Category />
      <About />
      <GetItDone />
      <Services />
      <Sponsors />
      <Gallery />
      <Contact />
      <MapSection />
      <Footer />
    </div>
    </>
  );
}

export default App
