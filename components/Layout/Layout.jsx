import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout(props){
  return (
    <Fragment>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </Fragment>
  );
};

