import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Skill from "../components/UI/Skill";
import Contact from "../components/UI/Contact";
import { AnimationOnScroll } from 'react-animation-on-scroll';


export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Skill />
      <Contact />
    </Fragment>
  );
}