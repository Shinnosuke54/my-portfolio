import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";

export default function Hero(){
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="<Hero />" />
              <h2 className="mt-3 mb-3">I&apos;m Shinnosuke Ino</h2>
              <h5 className="mb-4">Keio University Student</h5>
              <p>
                I&apos;m a student of Keio University, Faculty of Environment and Information Studies, Class of 2024.
               
              </p>
              <div className="mt-5">
              <Link href="#contact">
                <button className="primary__btn">
                  Hire me
                </button>
                </Link>
                <Link href="/CV">
                <button className="secondary__btn">
                  Check CV
                </button>
                </Link>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end gap-4`}>
              <Image alt="hero-image" src={heroImg} width="500" height="400" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

