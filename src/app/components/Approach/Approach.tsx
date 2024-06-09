"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Approach.module.css";

// Component
import { Modal } from "../Modal/Modal";

// Images

// icons
import { LiaAngleRightSolid } from "react-icons/lia";
import { TfiAngleUp } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import { Counter } from "../Counter/Counter";
import { Red_Hat_Display } from "next/font/google";
import { GetFreeConsultation } from "../GetFreeConsultation/GetFreeConsultation";

const RedHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const Approach = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOpenConsultationform, setIsOpenConsultationform] =
    useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveIndex(0);
  };

  const approach_data = [
    {
      heading: "This is where digital marketing begins...",
      info: [
        "In the Attract phase, it's all about transforming strangers to your brand into first-time visitors. This process begins by attracting the right audiences who show interest in what you're offering. At this stage, your prospects have little to no motivation to invest in the relationship, whether that means providing contact information or monetary investment.",
        "Therefore, the key is to produce the right content at the right time and place to meet their needs and answer any questions they may have. At PUROCoach, we assist you in developing the most effective strategies to attract the right people to your brand and capture their",
      ],
      strategy: {
        top_info:
          "At PUROCoach, our customer value journey begins by creating and publishing compelling content at the top of the funnel tailored to the interests of your prospects. This content is designed to raise awareness of your training products and services, educating, entertaining, and inspiring your prospects along the way. We offer support in the following areas:",
        list: [
          "Blog articles",
          "Content offers",
          "Infographs",
          "Audio, video, podcasts",
          "And more...",
        ],
        bottom_info:
          "We also focus on social media updates and content that delivers value. Examples include guides on how to use your products, insights into how your solutions can address their challenges, customer testimonials, and information on promotions or discounts. As a result, we provide content that lowers the barrier to entry, encouraging prospects to take action.",
      },
      action: "Get a Free Consultation Now",
      action_link: "#",
    },
    {
      heading:
        "Your prospects are at the middle of the funnel – now, it’s time to convert... ",
      info: [
        "Next, you need to convert your visitors into leads by obtaining their personal details. The most valuable asset at this stage is their contact information. A proven method to acquire their details is offering content—such as eBooks, white-papers, infographics, and cheat sheets—in exchange for their name and email address.",
        `The primary goal in the middle of the funnel is to transform "problem-aware" and "solution-aware" prospects into leads. Once the leads are secured, it's crucial to communicate and interact with leads and customers in a manner that encourages them to establish long-term relationships with your business. When implementing these engagement strategies, highlight the value your business will provide them.`,
      ],
      strategy: {
        top_info:
          "We leverage free content to encourage prospects to submit their contact information and opt-in to receive future marketing communications through the following methods:",
        list: [
          "Lead Magnet",
          "Call-to-Action (CTAs)",
          "Sign-up Forms,",
          "Landing Page",
          "eBooks Downloads and more.",
        ],
        bottom_info:
          "Once we've converted new prospects into leads, we go the extra mile to ensure they don't feel like just another number. Instead, we consistently offer them relevant content and valuable interactions by personalizing touchpoints and crafting tailored experiences that genuinely address their needs.",
      },
      action: "Let’s Get You Leads and Start Nurturing",
      action_link: "#",
    },
    {
      heading: "Now, it’s time to impress...",
      info: [
        "To optimize customer retention, ensuring they become repeat purchasers and keeping your brand prominently in their minds for the future, it's crucial to explore strategies that exceed their expectations during and after the sale. It's important to guarantee customer satisfaction, happiness, and support well beyond the initial purchase.",
        "Effective delight strategies include transforming your team members into advisors and experts readily available to assist customers at any moment. Sharing a wealth of useful content at strategic points throughout the customer journey is essential to ensure its relevance and value. The hallmark of an inbound strategy dedicated to customer delight is one that offers help and support in any situation, irrespective of whether it directly benefits your business.",
      ],
      strategy: {
        top_info:
          "Our team acts as your brand advocate and promoter, handling all significant and minor interactions with the utmost care. We incorporate thoughtful, well-timed chatbots and surveys to help support and request feedback, aiming to delight your customers and provide the support your clients deserve through:",
        list: [
          "Chatbot",
          "Surveys",
          "Social Media or through any other channel that produce the best results.",
        ],
        bottom_info:
          "As your dedicated inbound marketers, we're here to help you attract new prospects to your business, engage with them at scale, and delight each one individually for a positive experience, building long-term relationships.",
      },
      action: "Talk to an Agent Now",
      action_link: "#",
    },
  ];

  // Business Growth Counter
  const approachCounterRef = useRef(null);
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

    if (approachCounterRef.current) {
      observer.observe(approachCounterRef.current);
    }

    return () => {
      if (approachCounterRef.current) {
        observer.unobserve(approachCounterRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className={styles.inbound_approach}>
        <div className={styles.heading}>
          <div className={RedHatDisplay.className}>
            <h2>Electrify The Client Journey with Our Inbound Approach</h2>
          </div>
          <p>
            Our Three-Stage Proven Inbound Framework: <br /> Attract, Engage,
            and Delight.
          </p>
        </div>
        <div className={styles.approach_box}>
          <div className={styles.approach_item}>
            <h3>Attract</h3>
            <p>
              As a business owner, your content represents the voice of your
              brand. It's the beacon that attracts and maintains your audience's
              attention
            </p>
            <button onClick={() => openModal(0)}>
              Read More <LiaAngleRightSolid />
            </button>
          </div>
          <div className={styles.approach_item}>
            <h3>Engage</h3>
            <p>
              You want to know who interacts with your content and how often
              it's shared. From that, you can determine what's working and where
              to improve.
            </p>
            <button onClick={() => openModal(1)}>
              Read More <LiaAngleRightSolid />
            </button>
          </div>
          <div className={styles.approach_item}>
            <h3>Delight</h3>
            <p>
              Your goal in delighting is to provide a memorable experience that
              speaks to your audience's needs and wants. This makes them more
              likely to refer you.
            </p>
            <button onClick={() => openModal(2)}>
              Read More <LiaAngleRightSolid />
            </button>
          </div>
        </div>
        <div className={styles.approach_counter_list} ref={approachCounterRef}>
          <div className={styles.approach_counter_item}>
            <h4>Lead Generation</h4>
            <div className={styles.approach_counter}>
              <h5>
                <TfiAngleUp /> <Counter value={300} visible={isVisible} />%
              </h5>
              <p>Improvement in lead conversion rates</p>
            </div>
          </div>
          <div className={styles.approach_counter_item}>
            <h4>Conversion Rate</h4>
            <div className={styles.approach_counter}>
              <h5>
                <TfiAngleUp /> <Counter value={41} visible={isVisible} />%
              </h5>
              <p>Revenue increase per salesperson</p>
            </div>
          </div>
          <div className={styles.approach_counter_item}>
            <h4>Increased Revenue</h4>
            <div className={styles.approach_counter}>
              <h5>
                <TfiAngleUp /> <Counter value={27} visible={isVisible} />%
              </h5>
              <p>Improvement in customer retention</p>
            </div>
          </div>
          <div className={styles.approach_counter_item}>
            <h4>Sales Pipeline</h4>
            <div className={styles.approach_counter}>
              <h5>
                <TfiAngleUp /> <Counter value={24} visible={isVisible} />%
              </h5>
              <p>Shorter sales cycles</p>
            </div>
          </div>
          <div className={styles.approach_counter_item}>
            <h4>Money Saved</h4>
            <div className={styles.approach_counter}>
              <h5>
                <TfiAngleUp /> <Counter value={23} visible={isVisible} />%
              </h5>
              <p>Decreased sales and marketing costs</p>
            </div>
          </div>
        </div>
      </div>
      <GetFreeConsultation
        openModal={isOpenConsultationform}
        isOpen={setIsOpenConsultationform}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modal_box}>
          <div className={styles.close} onClick={closeModal}>
            <RxCross1 />
          </div>
          <h2>{approach_data[activeIndex].heading}</h2>
          <div className={styles.inner_content}>
            {approach_data[activeIndex].info.map((infoItem, index) => (
              <p key={index}>{infoItem}</p>
            ))}
            <h2>Our Strategy</h2>
            <p>{approach_data[activeIndex].strategy.top_info}</p>
            <ul>
              {approach_data[activeIndex].strategy.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{approach_data[activeIndex].strategy.bottom_info}</p>
          </div>
          <button
            onClick={() => {
              setIsOpenConsultationform(true);
              closeModal();
            }}
          >
            <span> {approach_data[activeIndex].action}</span>
          </button>
        </div>
      </Modal>
    </>
  );
};
