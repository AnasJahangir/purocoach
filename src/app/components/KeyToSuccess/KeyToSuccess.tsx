"use client";
import styles from "./KeyToSuccess.module.css";
import Image from "next/image";

// Images
import BrandBuildingMethodologyImg from "../../../../public/assets/brand_building_methodology.webp";
import GameChangingModalImg from "../../../../public/assets/game_changing_modal.webp";

// Icons
import { LiaAngleRightSolid } from "react-icons/lia";
import { BsInfoCircle } from "react-icons/bs";
import { PiSliders, PiSpeakerHigh } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { Modal } from "../Modal/Modal";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

export const KeyToSuccess = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section className={styles.key_to_success}>
        <div className={styles.by_overlay}></div>
        <div
          className={`${styles.outer_shape} ${styles.outer_shape_top}`}
        ></div>
        <div
          className={`${styles.outer_shape} ${styles.outer_shape_bottom}`}
        ></div>
        <div className="container">
          <h2>The Key to Our Success</h2>
          <div className={styles.methodology_box}>
            <div className={styles.methodology_cont}>
              <h3 data-aos="fade-right">
                Our Proven Brand-Building Methodology
              </h3>
              <p data-aos="fade-left">
                With our proven process-driven methodology, we'll achieve your
                marketing objectives and help you connect with customers like
                never before. We develop exceptional and customized digital
                marketing strategies to help our clients grow their businesses
                and receive great investment returns.
              </p>
              <button data-aos="fade-right" onClick={openModal}>
                Read More <LiaAngleRightSolid />
              </button>
            </div>
            <div className={styles.methodology_Img}>
              <Image
                src={BrandBuildingMethodologyImg}
                alt="Our Proven Brand-Building Methodology"
              />
            </div>
          </div>
          <div className={styles.game_changing_box}>
            <div className={styles.game_changing_Img}>
              <Image
                src={GameChangingModalImg}
                alt="Behind Our Game-Changing Business Model"
              />
              <div className={styles.info_box}>
                <span>
                  <FaCheck />
                </span>
                <p>Ranked in Top 1% in Customer Satisfaction</p>
              </div>
            </div>
            <div className={styles.methodology_cont}>
              <h3 data-aos="fade-left">
                Behind Our Game-Changing Business Model
              </h3>
              <p data-aos="fade-right">
                Our business model is straightforward yet profoundly impactful.
                It revolves around connecting, serving, and supporting our
                valuable clients.
              </p>
              <ul>
                <li data-aos="fade-up">
                  <span>
                    <PiSpeakerHigh />
                  </span>
                  We connect with our clients on a deep level, building rapport
                  through excellent communication and transparency.
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <span>
                    <PiSliders />
                  </span>
                  We serve our clients with top-notch services, providing
                  solutions that elevate their business brand's visibility,
                  expand their social presence, and win customers.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <span>
                    <BsInfoCircle />
                  </span>
                  We support our clients by offering ongoing expert advice,
                  personalized experiences, convenience, and attentive customer
                  service at every step of their journey with us.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modal_box}>
          <div className={styles.close} onClick={closeModal}>
            <RxCross1 />
          </div>
          <h2>Our Proven Brand-Building Methodology</h2>
          <div className={styles.inner_content}>
            <p>
              Every client is unique, and we approach each according to their
              business needs. We adapt our robust set of systems that have been
              tested, tweaked, and improved to squeeze out every last bit of
              value from our client's marketing campaigns. We learn from every
              campaign and continue adjusting and improving our algorithms.
            </p>
            <p>
              Our team of experts helps you stand out with a unique brand
              identity and story brand that unites your marketing automation
              efforts, letting you focus on serving your clients.
            </p>
            <p>
              We create stunning websites and mobile apps to attract and engage
              your target audience and existing customers.
            </p>
            <p>
              Let's work together to make your business a leader in its field,
              attracting, engaging, and retaining clients like never before.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};
