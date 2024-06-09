"use client";
import React, { useState } from "react";
import styles from "./Faq.module.css";

// icons

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { Red_Hat_Display } from "next/font/google";

const RedHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const Faq = () => {
  const column1 = [
    {
      title: "Why do I need inbound marketing?",
      content: `How people consume information and content has evolved over time, necessitating businesses to maintain a strong online presence to find, attract, and retain customers. After all, these customers are virtually living online nowadays! Furthermore, digital marketing offers measurable and flexible advantages; marketers can swiftly modify campaigns using comprehensive data, fulfilling every marketer's dream.`,
    },
    {
      title: "How much does inbound marketing cost?",
      content:
        "Generally speaking, the cost of inbound marketing services ranges from $4,000 to $15,000 per month. Most agencies are equipped to manage all aspects of an inbound marketing strategy. However, the more you are willing to invest, the more your agency can accomplish for you, and the quicker you will see results.",
    },
    {
      title: "What do inbound marketing consultants do?",
      content: `Digital marketing consultants assist you in the following:`,
      list: ["Enhancing your digital marketing strategy, taking into account factors such as your industry, competitive landscape, target audience, user behavior, and more.", "Analyzing your analytics to identify insights and recommend subsequent steps", "Determining which channels are most effective for reaching your target audience.", "Assessing your marketing campaigns and optimizing them for improved results."]
    },
    {
      title: "How do I know if I should hire an inbound marketing consultant?",
      content: `Three signs that your business should consider hiring a digital marketing consultant include:`,
      list: ["Your business isn't generating measurable results in leads and sales despite trying various marketing strategies.", "Your in-house team lacks the expertise and skill set required for developing effective marketing campaigns.", "You're unsure which key metrics to track or how to analyze these metrics for actionable insights."]
    },
    {
      title: "Why should I invest in inbound marketing consulting services?",
      content: `Investing in digital marketing consulting services can help you devise an effective digital marketing strategy, pinpoint the most valuable key performance indicators to monitor, enhance growth across various channels, and expand your online presence to effectively reach your target audience. A comprehensive digital marketing strategy enables you to optimize customer journeys toward conversion, impacting your revenue directly and indirectly. Our experts will assist in analyzing digital channels to comprehend your audience's behavior and identify the most effective methods for reaching and engaging them.`,
    },
  ];

  const column2 = [
    {
      title: "Can I do it myself, or do I really need an agency?",
      content:
        "It really depends on who you are! Business owners, marketers, or entrepreneurs often have the skills to manage certain aspects of digital marketing but may not cover all areas effectively. Engaging an agency can provide significant advantages, such as developing a cohesive strategy, leveraging expert knowledge for improved outcomes, and figuring out where best to spend your money.",
    },
    {
      title: "Do you also provide marketing training?",
      content: `Currently, we don't offer training; however, it's a service we may provide in the future. There are numerous online resources where you can find training or purchase courses in digital marketing.`,
    },
    {
      title: "How long before I see results after hiring a consultant?",
      content: `Typically, it takes 3-6 months to begin seeing results. In highly competitive industries, it could extend to a year or more. For PPC (Pay-Per-Click) Advertising, results may become evident within a few days to several weeks. However, optimizing these campaigns for maximum return on investment (ROI) could require several months.`,
    },
    {
      title: "How do I measure my return on investment (ROI)?",
      content: `At its core, digital marketing ROI represents the revenue generated directly by your marketing activities minus the cost of those activities, all divided by the marketing expenditure. For instance, when launching a new campaign, estimating the potential ROI from the outset is essential. To project future ROI, multiply the number of potential customers targeted by your conversion rate and the average purchase price. This calculation yields your anticipated return.`,
    },
    {
      title: "Why should I choose to work with you?",
      content: `Our company distinguishes itself from competitors by prioritizing the delivery of high-quality services that consistently exceed customer expectations. We boast a proven track record of supplying reliable solutions that effectively address our clients' challenges. Embracing a customer-centric approach, we tailor our offerings to meet your unique needs.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number[]>([-1, -1]);

  const handleClick = (columnIndex: number, index: number) => {
    setOpenIndex((prevOpenIndex) => {
      const isOpen = prevOpenIndex[columnIndex] === index;
      return isOpen ? [-1, -1] : prevOpenIndex.map((item, idx) => (idx === columnIndex ? index : -1));
    });
  };

  return (
    <section className={styles.faq_comp}>
      <div className="container">
        <div className={RedHatDisplay.className}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className={styles.accordian_wrap}>
          <div className={styles.col}>
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
                    {item?.list?.length && (
                      <ul>
                          {
                              item.list.map((list_item, list_index) => (
                                  <li key={`list_${list_index}`}>{list_item}</li>
                              ))
                          }
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.col}>
            {column2.map((item, index) => (
              <div className={styles.accordion} key={item.title}>
                <div
                  className={`${styles.title}`}
                  onClick={() => handleClick(1, index)}
                >
                  <h3>{item.title}</h3>
                  {openIndex[1] === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
                {openIndex[1] === index && (
                  <div
                    className={`${styles.content} ${
                      openIndex[1] === index && styles.active
                    }`}
                  >
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
