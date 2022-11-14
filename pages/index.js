import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Contact from "../components/UI/Contact";
import Head from 'next/head';
import { AnimationOnScroll } from 'react-animation-on-scroll';


export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Boar Consulting Group</title>
      </Head>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </Fragment>
  );
}