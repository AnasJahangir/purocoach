"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./WhyChooseUs.module.css";

// icons

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Counter } from "../Counter/Counter";

import { Red_Hat_Display } from "next/font/google";

const RedHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const WhyChooseUs = () => {
  const column1 = [
    {
      title: "We Deliver on What We Promise",
      content: `We can't overstate how important it is to deliver on our promises. Everything from your customer loyalty to financial performance depends on us fulfilling our commitments. We take pride in never overpromising and setting realistic expectations from the start. `,
    },
    {
      title: "We Provide Superior and Quality Work and Services",
      content: `We deliver customer service superior to our competitors. Our commitment to understanding each customer's needs and tailoring our services to their vision and capabilities lets us consistently deliver quality work. We use this approach across each project stage to deliver optimal results.`,
    },
    {
      title: "We’re Customer Centric Agency",
      content: "We use proven strategies that allow us to have a business culture that focuses on creating the best customer experience and building brand loyalty. We ensure each customer is central to our business philosophy, orations, and ideas.",
    },
    {
      title: "Our Solutions are Comprehensive",
      content: `We are innovative and passionate about the work we do. We constantly develop new ways to enrich your revenue to greater heights. Extraordinary and High-Quality services: Our supreme team works rigorously to grow businesses beyond clients' expectations.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number[]>([0, -1]);

  const handleClick = (columnIndex: number, index: number) => {
    setOpenIndex((prevOpenIndex) => {
      const isOpen = prevOpenIndex[columnIndex] === index;
      return isOpen ? [-1, -1] : prevOpenIndex.map((item, idx) => (idx === columnIndex ? index : -1));
    });
  };

      // success_graph Counter
      const successGraphRef = useRef(null);
      const [isVisible, setIsVisible] = useState<boolean>(false);

    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
              }
            });
          },
          { threshold: 0.5 }
        );
    
        if (successGraphRef.current) {
          observer.observe(successGraphRef.current);
        }
    
        return () => {
          if (successGraphRef.current) {
            observer.unobserve(successGraphRef.current);
          }
        };
      }, []);

  return (
    <section className={styles.choose_us}>
      <div className="container">
        <div className={styles.accordian_wrap}>
          <div className={styles.col}>
            <div className={RedHatDisplay.className}>
              <h2 data-aos="fade-right">Why Choose Us</h2>
            </div>
            {column1.map((item, index) => (
              <div className={styles.accordion} key={item.title}>
                <div
                  className={`${styles.title}`}
                  onClick={() => handleClick(0, index)}
                >
                  <h3>{item.title}</h3>
                  {openIndex[0] === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
                {openIndex[0] === index && (
                  <div
                    className={`${styles.content} ${
                      openIndex[0] === index && styles.active
                    }`}
                  >
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={`${styles.col} ${styles.success_area}`}>
            <div className={RedHatDisplay.className}>
              <h2 data-aos="fade-right">Our Success</h2>
            </div>
            <p>Pursuing excellence, innovation, and customer satisfaction is the reason we succed.  We thrive to achieve success, innovate, and stay ahead of the curve, ensuring our legacy doesn’t only reflect what we achieved, but how we achieved it and who we’ve helped along the way</p>
            <ul className={styles.success_graph} ref={successGraphRef}>
              <li>
                <div className={styles.counter_graph}>
                 <strong><Counter value={1100} visible={isVisible} />+ </strong>
                <span>Projects Delivered</span>
                </div>
                <div className={`${styles.bar_graph} ${isVisible ? styles.show : ""}`}></div>
              </li>
              <li>
                <div className={styles.counter_graph}>
                <strong><Counter value={97} visible={isVisible} />% </strong>
                <span>Customer Success Rate </span>
                </div>
                <div className={`${styles.bar_graph} ${isVisible ? styles.show : ""}`}></div>
              </li>
              <li>
                <div className={styles.counter_graph}>
                  <strong><Counter value={850} visible={isVisible} />+ </strong>
                <span>Happy Clients</span>
                </div>
                <div className={`${styles.bar_graph} ${isVisible ? styles.show : ""}`}></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
