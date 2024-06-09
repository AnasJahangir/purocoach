"use client";
import styles from "./ClientTestimonials.module.css";
import Image from "next/image";
import { Red_Hat_Display } from "next/font/google";

// images
import Client1 from "../../../public/assets/client1.png"
import Client2 from "../../../public/assets/client2.png"
import Client3 from "../../../public/assets/client3.png"

// External Inports
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import InnerBanner from "../components/InnerBanner/InnerBanner";
import { useEffect, useRef, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const redHatDisplay = Red_Hat_Display({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
  });

const ClientTestimonials = () => {
      // slider
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  const teamSliderRef = useRef<SwiperRef | null>(null);

  const [isFirstSlide, setIsFirstSlide] = useState<boolean>(true);
  const [isLastSlide, setIsLastSlide] = useState<boolean>(false);

  useEffect(() => {
    const swiper = teamSliderRef?.current?.swiper;

    if (swiper) {
      swiper.on('slideChange', () => {
        setIsFirstSlide(swiper.isBeginning);
        setIsLastSlide(swiper.isEnd);
      });
    }
  }, []);

  const handlePrev = () => {
    if (teamSliderRef.current && teamSliderRef.current.swiper) {
      teamSliderRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (teamSliderRef.current && teamSliderRef.current.swiper) {
      teamSliderRef.current.swiper.slideNext();
    }
  };

  const heading1 = ['C', 'L', 'I', 'E', 'N', 'T'];
   const heading2 = ['T', 'E', 'S', 'T', 'I', 'M', 'O', 'N', 'I', 'A', 'L', 's'];
  return (
    <>
      {/* Banner */}
      <InnerBanner heading1={heading1} heading2={heading2}/>
      {/* What Our Clients Have to Say */}
      <section className={styles.our_clients}>
        <div className="container">
          <h2>What Our Clients Have to Say</h2>
          <div className={styles.our_client_slider_wrap}>
            <Swiper
              // ref={swiperRef}
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              ref={teamSliderRef}
              pagination={pagination}
              className="our_process_slider our_client_slider"
              breakpoints= {{
                0: {
                  slidesPerView: 1.05,
                  spaceBetween: 7,
                },
                768: {
                  slidesPerView: 2.1,
                  spaceBetween: 18,
                },
                1025: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
                <SwiperSlide>
                    <div className={styles.our_client_slide}>
                        <div className={styles.client_img}>
                            <Image src={Client1} alt="Jenny T."/>
                        </div>
                        <div className={styles.client_feedback}>
                        <h3>Jenny T. - <span>from Virginia</span></h3>
                        <p>Our Inbound Consultant works with our team on SEO. He has set up a detailed plan and works with us every step of the way. His knowledge and patience with our team have been invaluable. He keeps us current with the best content suggestions to help us succeed. We would be lost without him.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.our_client_slide}>
                        <div className={styles.client_img}>
                            <Image src={Client2} alt="Carole D."/>
                        </div>
                        <div className={styles.client_feedback}>
                        <h3>Carole D. - <span>from Texas</span></h3>
                        <p>PUROCoach exceeded our expectations. They deliver fast and reliable customer service. They worked with us to create something that truly represented our brand. We look forward to another project with them soon.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.our_client_slide}>
                        <div className={styles.client_img}>
                            <Image src={Client3} alt="Malik Z."/>
                        </div>
                        <div className={styles.client_feedback}>
                        <h3>Malik Z. - <span>from India</span></h3>
                        <p>I highly recommend PUROCoach marketing agency. I've received excellent service, with all forms of robust automation being delivered in a professional and efficient manner. Definitely   keep up the good work, PUROCoach. Excited to work with you again in the future.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <ul className={styles.slider_navigation}>
              <li className={`${styles.prev} ${isFirstSlide ? styles.active : ''}`} onClick={handlePrev}>
                <FaAngleLeft />
              </li>
              <li className={`${styles.next} ${isLastSlide ? styles.active : ''}`} onClick={handleNext}>
                <FaAngleRight />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientTestimonials;
