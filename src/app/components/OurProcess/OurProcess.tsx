"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./OurProcess.module.css";

// External Inports
import { Navigation, Pagination, Autoplay, } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import AngleRight from "../../../../public/assets/angle.svg";
import ScheduleCallImg from "../../../../public/assets/schedule_call.webp";
import DiscoveryImg from "../../../../public/assets/discovery.webp";
import PlanningImg from "../../../../public/assets/planning.webp";
import ExecuteImg from "../../../../public/assets/execute.webp";
import FinalizeImg from "../../../../public/assets/finalize.webp";

// icons
import { LiaAngleRightSolid } from "react-icons/lia";
import { Modal } from "../Modal/Modal";
import { RxCross1 } from "react-icons/rx";

interface approachData {
  heading: string;
  info?: string[] | undefined;
  list?: string[];
}

export const OurProcess = () => {
  const processName = ["Discovery", "Planning", "Execute", "Finalize"];

  // Modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeSliderIndex, setActiveSliderIndex] = useState<number>(0);

  const approach_data: approachData[] = [
    {
      heading: "Requirement Gathering",
      info: [
        "During this stage, we'll consult with you to discover your desired outcome and vision of success. This helps us craft a practical approach to achieving your business goals.  ",
        "Our discovery phase entails uncovering your needs, challenges, and the results you desire for your business. We need clarification to help ensure you, as the client and PUROCoach's agent, are on the same page before we begin our work.",
      ],
    },
    {
      heading: "Our objective is to:",
      list: [
        "We listen ",
        "Get to know your business well",
        "Gather key requirements",
        "Ask questions to gain an understanding",
        "Define and set key smart goals",
        "Devise a winning game plan",
      ],
    },
    {
      heading: "Proposed Solution",
      info: [
        "During the Project Discovery phase, we'll conduct our initial research to identify solutions. ",
        `Your Project Manager works with your dedicated project team to create any marketing assets, technical designs, task lists, resource plans, budgets, communications plans, and initial schedules for the project. They establish the roles and responsibilities of your project. We then present our solution and the value your business will gain by working with us.`,
      ],
    },
    {
      heading: "The Agenda:",
      list: [
        "Target Audience Definition",
        "SWOT Analysis",
        "Competitor Analysis ",
        "Brainstorm",
        "Map Out Marketing Campaign Workflows",
        "Develop a Roadmap for Success",
      ],
    },
    {
      heading: "We Get to Work",
      info: [
        "During the Project Execution phase, the Project Manager oversees the Project Task Owners. ",
        "The Project Manager ensures that Project Task Owners complete tasks on time and within budget. Project Managers also ensure that the project workflow continues smoothly and that we complete each project stage promptly. To accomplish this, the Project Manager approaches Execution through three sub-phases: Building Deliverables, Monitoring and Control, and Reviewing.",
      ],
    },
    {
      heading: "The Agenda:",
      list: [
        "Allocate Resource and Assign Tasks ",
        "Implement client requirements to realize their vision",
        "Business Process and Automation Engineering ",
        "Web Design and Development",
        "Monitor Progress to Milestones",
        "Adjust Workflow to Meet Goals and Declines",
        "Update Client on Progress and On a Regular Basis",
      ],
    },
    {
      heading: "Test, Tweak and Launch",
      info: [
        "This final phase of implementing your project involves testing, revising, tracking, and readjusting your plan based on feedback and data to measure our effectiveness. ",
        "No project plan should be considered finished before we review how well the plan worked and whether we need to boost performance with changes. By measuring the results of the plan, we can directly connect the project plan to effective changes and make better choices in the future. Once you approve of our work, we will launch your project!",
      ],
    },
    {
      heading: "The Agenda:",
      list: [
        "Test All Work Before Launch",
        "Adjust Our Efforts as Necessary",
        "Tweak and Revise Work as Necessary",
        "Retest All Work to Ensure Readiness",
        "Get Client’s Approval and Sign-off",
        "Launch Campaigns and Products ",
        "Track and Monitor Performance and Results,"
      ],
    },
  ];

  // slider
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  const swiperRef = useRef<SwiperRef | null>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleProcessClick = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
      setActiveIndex(index);
    }
  };

  const openModal = (index: number) => {
    setActiveSliderIndex(index);
    setIsModalOpen(true);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveSliderIndex(0);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <>
      <section className={styles.our_process}>
        <div className={styles.by_overlay}></div>
        <div
          className={`${styles.outer_shape} ${styles.outer_shape_top}`}
        ></div>
        <div
          className={`${styles.outer_shape} ${styles.outer_shape_bottom}`}
        ></div>
        <div className="container">
          <div className={styles.heading}>
            <h2>Our Process to Providing Unmatched Solutions</h2>
            <p>
              Learn how our 4-step process will help connect your business with
              the right customers at the right time,{" "}
            </p>
          </div>
        </div>
        <div className={styles.process_slider}>
          <ul>
            {processName.map((processItem, index) => (
              <li
                className={`${index <= activeIndex && styles.active}`}
                key={`processName_${index}`}
                onClick={() => handleProcessClick(index)}
              >
                <span>
                  {index + 1}. {processItem}
                </span>
                {index != 3 && <Image src={AngleRight} alt={processItem} />}
              </li>
            ))}
          </ul>
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={pagination}
            scrollbar={{ draggable: true }}
            // autoplay={{
            //   delay: 3000,
            // }}
            onSlideChange={(swiper: { activeIndex: number }) => {
              const newIndex = swiper.activeIndex;
              setActiveIndex(newIndex);
            }}
            className="our_process_slider"
          >
            <SwiperSlide>
              <div className={styles.slider_item}>
                <div className={styles.slider_img}>
                  <Image src={DiscoveryImg} alt="Discovery" />
                </div>
                <div className={styles.slider_info}>
                  <h3>Requirement Gathering</h3>
                  <p>
                    Our journey with our client’s customers begins with a
                    thorough assessment of their current business needs. During
                    this stage, we'll consult with you to discover your desired
                    outcome and vision of success so that we can craft a
                    practical approach to achieving your business goals.{" "}
                  </p>
                  <button onClick={() => openModal(0)}>
                    Read More <LiaAngleRightSolid />
                  </button>
                </div>
                <div className={styles.slider_list}>
                  <h3>Our objective is to:</h3>
                  <ul>
                    <li>We listen </li>
                    <li>Get to know your business well</li>
                    <li>Gather key requirements</li>
                    <li>Ask questions to gain an understanding</li>
                  </ul>
                  <button onClick={() => openModal(1)}>
                    Read More <LiaAngleRightSolid />
                  </button>
                </div>
                <div className={styles.slider_schedule_call}>
                  <Image src={ScheduleCallImg} alt="Discovery Schedule Call" />
                  <button>Schedule a Discovery Call</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slider_item}>
                <div className={styles.slider_img}>
                  <Image src={PlanningImg} alt="Planning" />
                </div>
                <div className={styles.slider_info}>
                  <h3>Proposed Solution</h3>
                  <p>
                    During the Project Discovery phase, we'll conduct our
                    initial research to identify solutions.{" "}
                  </p>
                  <button onClick={() => openModal(2)}>
                    Read More <LiaAngleRightSolid />
                  </button>
                </div>
                <div className={styles.slider_list}>
                  <h3>The Agenda:</h3>
                  <ul>
                    <li>Target Audience Definition </li>
                    <li>SWOT Analysis</li>
                    <li>Competitor Analysis </li>
                    <li>Brainstorm</li>
                  </ul>
                  <button onClick={() => openModal(3)}>
                    Read More <LiaAngleRightSolid />
                  </button>
                </div>
                <div className={styles.slider_schedule_call}>
                  <Image src={ScheduleCallImg} alt="Planning Schedule Call" />
                  <button>Schedule a Discovery Call</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slider_item}>
                <div className={styles.slider_img}>
                  <Image src={ExecuteImg} alt="Execute" />
                </div>
                <div className={styles.slider_info}>
                  <h3>We Get to Work</h3>
                  <p>
                    During the Project Execution phase, the Project Manager
                    oversees the Project Task Owners.{" "}
                  </p>
                  <button onClick={() => openModal(4)}>
                    Read More <LiaAngleRightSolid />
                  </button>
                </div>
                <div className={styles.slider_list}>
                  <h3>The Agenda:</h3>
                  <ul>
                    <li>Allocate Resource and Assign Tasks </li>
                    <li>
                      Implement client requirements to realize their vision
                    </li>
                    <li>Business Process and Automation Engineering </li>
                    <li>Web Design and Development</li>
                  </ul>
                  <button onClick={() => openModal(5)}>
                    Read More <LiaAngleRightSolid />
                  </button>
                </div>
                <div className={styles.slider_schedule_call}>
                  <Image src={ScheduleCallImg} alt="Execute Schedule Call" />
                  <button>Schedule a Discovery Call</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slider_item}>
                <div className={styles.slider_img}>
                  <Image src={FinalizeImg} alt="Finalize" />
                </div>
                <div className={styles.slider_info}>
                  <h3>Test, Tweak and Launch</h3>
                  <p>
                    This final phase of implementing your project involves
                    testing, revising, tracking, and readjusting your plan based
                    on feedback and data to measure our effectiveness.{" "}
                  </p>
                  <button onClick={() => openModal(6)}>
                    Read More <LiaAngleRightSolid />
                  </button>
                </div>
                <div className={styles.slider_list}>
                  <h3>The Agenda:</h3>
                  <ul>
                    <li>Test All Work Before Launch </li>
                    <li>Adjust Our Efforts as Necessary</li>
                    <li>Tweak and Revise Work as Necessary</li>
                    <li>Retest All Work to Ensure Readiness</li>
                  </ul>
                  <button onClick={() => openModal(7)}>
                    Read More <LiaAngleRightSolid />
                  </button>
                </div>
                <div className={styles.slider_schedule_call}>
                  <Image src={ScheduleCallImg} alt="Finalize Schedule Call" />
                  <button>Schedule a Discovery Call</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modal_box}>
          <div className={styles.close} onClick={closeModal}>
            <RxCross1 />
          </div>
          <h2>{approach_data[activeSliderIndex].heading}</h2>
          <div className={styles.inner_content}>
            {approach_data[activeSliderIndex].info &&
              approach_data[activeSliderIndex].info?.length &&
              approach_data[activeSliderIndex].info?.map((infoItem, index) => {
                return <p key={index}>{infoItem}</p>
              })}
            {approach_data[activeSliderIndex].list && (
              <ul>
                {approach_data[activeSliderIndex].list?.length &&
                  approach_data[activeSliderIndex].list?.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};
