import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import img01 from "../../public/images/img-01.jpg";
import img02 from "../../public/images/img-02.jpg";
import img03 from "../../public/images/img-03.jpg";
import img05 from "../../public/images/Mikeneko_Lofi_Wolf.jpg"
import img06 from "../../public/images/certificate.png"
import classes from "../../styles/about.module.css";
// import { defaultConfig } from "next/dist/server/config-shared";

export default function About(){
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="<About />" />
            <h3 className="mt-4">More about us</h3>
            <p>
              私たちは社内に業界トップクラスのNFTクリエイターユニットを有しています。
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal text-black">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  NFT
                </h6>
                
              </div>

              <div>
            
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal text-black">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Photography
                </h6>
              </div>
            </div>

            {/* <div className="mt-5">
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
            </div> */}
          </Col>

          <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                

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

               
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

