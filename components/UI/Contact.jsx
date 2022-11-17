import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

export default function Contact(){
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="<Contact />" />
            <h3 className="mt-4 mb-4">Contact me!</h3>
            <p>
              Feel free to ask me anything! More than welcome for a quick chat or a job offer 😃
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Tokyo - Japan</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>shinnosuke.j.ino@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>09085163813</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/Shinnosuke54">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/shinnosuke-ino/">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://www.instagram.com/keiomlax/">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

