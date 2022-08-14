import React from "react";
import { Container, Row, Col, Progress } from "reactstrap";
// import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/skill.module.css";

export default function Skill(){
  const settings = {
    dots: false,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3500,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container className={`${classes.testimonial__block}`}>
        <Row>
          <Col lg="6" md="6">
          {/* <Col lg="6" md="6" className={`${classes.testimonial__img}`}> */}

            
            
            <div className={`${classes.skill} ${classes.top__skill}`}>
              <span className={`${classes.skill__name}`}>React</span>
              <Progress animated color="danger" value="75" className={`${classes.bar}`} />
            </div>
            <div className={`${classes.skill}`}>
              <span className={`${classes.skill__name}`}>Next.js</span>
              <Progress animated color="warning" value={68} className={`${classes.bar}`} />
              </div>
              <div className={`${classes.skill}`}>
              <span className={`${classes.skill__name}`}>Tensorflow</span>
              <Progress animated color="info" value={50} className={`${classes.bar}`} />
            </div>
            <div className={`${classes.skill}`}>
              <span className={`${classes.skill__name}`}>Wordpress</span>
              <Progress animated color="success" value="65" className={`${classes.bar}`} />
            </div>
            <div className={`${classes.skill}`}>
              <span className={`${classes.skill__name}`}>Marketing</span>
              <Progress animated value={70} className={`${classes.bar}`} />
            </div>
            
            
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="<Skills />" />
            <h4 className="mt-4 mb-5">Let me tell you about my skills</h4>
            <p>
               My skills are frontend development, HTML/CSS, JavaScript, React, Next.js, Tensorflow, Wordpress, Marketing. Ever since I have been a member of the Hagino & Hattori lab, I have been developing web applications as a frontend engineer. Apart from school projects, I am currently studying for the Tensorflow developer certificate.
              <br></br> As of my language skills, I can speak native level Japanese and English, daily conversation level Korean and French. Since I lived in the UK for 6 years, I&apos;m extremely confident in speaking in English. My TOEIC L&R test score was 950.
            </p>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

