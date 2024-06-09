"use client";
import styles from "./MakeBetter.module.css";
import Image from "next/image";

// Images
import MakeBetterImg from "../../../../public/assets/make_better.webp";

// Icons
import { LiaAngleRightSolid } from "react-icons/lia";
import { useEffect, useRef, useState } from "react";
import { Red_Hat_Display } from "next/font/google";

const RedHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const MakeBetter = () => {
  const [readMore, setReadMore] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight * 0.8 && sectionTop > -window.innerHeight * 0.8) {
        return
      } else {
        setReadMore(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className={styles.make_better_sec} ref={sectionRef}>
      <div className="container">
        <div className={styles.heading}>
          <div className={RedHatDisplay.className}>
            <h2>At PUROCoach We Make Everything Better</h2>
          </div>
          <span className={styles.line_vector}></span>
          <p>
            We strongly believe in our guiding principles that help us to be
            increasingly successful in doing what we do.
          </p>
        </div>
        <div className={styles.make_better_wrapper}>
          <div className={styles.make_better_content}>
            <h3>Listen better. Plan better. Build better</h3>
            <p>
              With our proven process-driven methodology, we've developed
              exceptional and customized digital marketing strategies to help
              our clients grow their businesses and receive exceptional return
              on investment.
            </p>
            {readMore ? (
              <>
                <p>
                  Every client is unique, and we approach each according to
                  their business needs. We adapt our robust set of systems that
                  have been tested, tweaked, and improved to squeeze out every
                  last bit of value from our client's marketing campaigns. We
                  learn from every campaign and continue adjusting and improving
                  our algorithms.{" "}
                </p>
                <p>
                  Let's work together to make your business a leader in its
                  field, attracting, engaging, and retaining clients.
                </p>
                <button onClick={() => setReadMore(false)}>
                  Read Less <LiaAngleRightSolid />
                </button>
              </>
            ) : (
              <button onClick={() => setReadMore(true)}>
                Read More <LiaAngleRightSolid />
              </button>
            )}
          </div>
          <div className={styles.make_better_img}>
            <h3>Listen better. Plan better. Build better</h3>
            <div className={styles.img_text}>
              <Image src={MakeBetterImg} alt="Make Better" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
