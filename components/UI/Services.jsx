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
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="<Services />" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet
              culpa nobis corporis officiis, numquam cupiditate, enim expedita
              eveniet dolorum, aliquid nesciunt sapiente illo voluptatum!
              Dolores fuga mollitia atque, placeat minima quibusdam accusantium!
              Veniam, non distinctio dolorem rerum laboriosam deleniti.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

