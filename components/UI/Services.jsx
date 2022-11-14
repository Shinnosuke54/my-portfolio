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
            <h3 className="mb-0 mt-4">Modern technology,</h3>
            <h3 className="mb-4">Modern UI</h3>
            <p>
              私たちは機械学習とウェブ3の領域を掛け合わせたコンサルティングを専門としています。また、モットーとして「モダンなUI」を掲げています。
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

