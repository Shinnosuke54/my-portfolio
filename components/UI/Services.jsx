import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

export default function Services(){
  return (
    <section id="services">
      <Container className={`${classes.black__container}`}>
      {/* <Container className={`${classes.black__container}`}> */}
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Modern UI" icon="ri-apps-line" />

                <ServicesItem title="Web Application Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="ML Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="<Services />" />
            <h3 className="mb-0 mt-4">Modern Technology,</h3>
            <h3 className="mb-4">Modern UI</h3>
            <p>
              I can provide high quality web applications, websites and ML services. I belong to Hagino, Hattori laboratory, a laboratory in which you can study how to make high quality web applications. I'm also studying for the TensorFlow Developer Certificate.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

