import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Footer from "./components/layout/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
