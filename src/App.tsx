import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import MusicShowcase from "./components/MusicShowcase";
import Portfolio from "./components/Portfolio";
import LoveNotes from "./components/LoveNotes";
import Testimonials from "./components/Testimonials";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Flyers from "./components/Flyers";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-sax-black text-sax-cream">
      <Navigation />
      <main>
        <Hero />
        <About />
        {/* <MusicShowcase /> */}
        {/* <Portfolio /> */}
        <LoveNotes />
        {/* <Flyers /> */}
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
