import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import img01 from "../../public/images/img-01.jpg";
import img02 from "../../public/images/img-02.jpg";
import img03 from "../../public/images/img-03.jpg";
import img05 from "../../public/images/Mikeneko_Lofi_Wolf.jpg"
import classes from "../../styles/about.module.css";
// import { defaultConfig } from "next/dist/server/config-shared";

export default function About(){
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="<About />" />
            <h3 className="mt-4">More about myself</h3>
            <p>
              I belong to the Keio Men&apos;s Lacrosse Team, and it&apos;s marketing team as well. As a part of the marketing team, I have been managing the <Link href="https://www.instagram.com/keiomlax/" className={`${classes.urls}`}>Instagram</Link>  account, <Link href="https://www.instagram.com/keiomlax/" className={`${classes.urls}`}>Website</Link>, and making <Link href="https://www.youtube.com/watch?v=sW4xhNTQa5g&t=14s" className={`${classes.urls}`}>YouTube</Link> videos. I am extremely interested in Web 3.0 and I sell NFTs on <Link href="https://opensea.io/collection/lofi-wolves" className={`${classes.urls}`}>Opensea</Link>.
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal text-black">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Lacrosse
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal text-black">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Instagram Marketing
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal text-black">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  NFT
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal text-black">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Photography
                </h6>
              </div>
            </div>

            <div className="mt-5">
            <Link href="#portfolio">
              <button className="primary__btn">
                My Portfolio
              </button>
              </Link>

              <Link href="/CV">
              <button className="secondary__btn">
                Check CV
              </button>
              </Link>
            </div>
          </Col>

          <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box} ${classes.lacrosse__img}`}
                >
                  <Image src={img02} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img03} alt="about-img" />
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img05} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img01} alt="about-img" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

