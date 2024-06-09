"use client";
import styles from "./InnerBanner.module.css";
import { Red_Hat_Display } from "next/font/google";
import { useEffect, useState } from "react";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const InnerBanner = ({
  heading1,
  heading2,
  heading3
}: {
  heading1: string[];
  heading2?: string[];
  heading3?: string[];
}) => {
  const [show, setShow] = useState<boolean>(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setShow(true);
      }, 10);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      {/* Banner */}
      <section className={styles.inner_banner}>
        <div className="container">
          <div className={`${show ? styles.play : ""}`}>
            <div id={styles.section1}>
              <div className={styles.container}>
                <div className={styles.sec1}>
                  <h1
                    className={`${redHatDisplay.className} ${styles.animate} ${
                      styles.one
                    } ${show ? styles.show : ""}`}
                  >
                    {heading1.map((item, index) => (
                      <span className={styles.heading1} key={index}>{item}</span>
                    ))}
                    &nbsp;
                    {heading2 &&
                      heading2.map((item, index) => <span className={styles.heading2} key={index}>{item}</span>)}
                    &nbsp;
                    {heading3 &&
                      heading3.map((item, index) => <span className={styles.heading3} key={index}>{item}</span>)}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerBanner;
