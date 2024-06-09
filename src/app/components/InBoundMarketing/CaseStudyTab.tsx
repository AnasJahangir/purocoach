"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./InBoundMarketing.module.css";

// icons
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

// Data
import { caseStudiesData } from "@/app/case-studies/data";
import { Modal } from "../Modal/Modal";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { GetFreeConsultation } from "../GetFreeConsultation/GetFreeConsultation";

export const CaseStudyTab = () => {
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
  const [currentCaseStudyPage, setCurrentCaseStudyPage] = useState(1);
  const caseStudyItemsPerPage = 4;
  const indexOfLastCaseStudyItem = currentCaseStudyPage * caseStudyItemsPerPage;
  const indexOfFirstCaseStudyItem =
    indexOfLastCaseStudyItem - caseStudyItemsPerPage;
  const currentCaseStudyItems = caseStudiesData.slice(
    indexOfFirstCaseStudyItem,
    indexOfLastCaseStudyItem
  );
  const caseStudyPaginate = (pageNumber: number) =>
    setCurrentCaseStudyPage(pageNumber);
  const totalCaseStudyPages = Math.ceil(
    caseStudiesData.length / caseStudyItemsPerPage
  );

  console.log("totalCaseStudyPages", totalCaseStudyPages);

  const handlePrevPage = () => {
    setCurrentCaseStudyPage(currentCaseStudyPage - 1);
  };

  const handleNextPage = () => {
    setCurrentCaseStudyPage(currentCaseStudyPage + 1);
  };
  return (
    <>
      <div className={`${styles.content} ${styles.case_study_cont}`}>
        {/* <h3>Select a Case Study</h3> */}
        <div className={styles.case_study_box}>
          {currentCaseStudyItems.map((item, index) => (
            <div
              className={styles.case_study_box_item}
              key={`case_study_${index}`}
            >
              <div className={styles.item_img}>
                <Image
                  src={item.img}
                  alt={item.heading}
                  width={700}
                  height={400}
                />
              </div>
              <div className={styles.item_cont}>
                <h4>{item.heading}</h4>
                <p>{item.info}</p>
                <button onClick={() => openModal(index)}>
                  Read More <FaAngleRight />
                </button>
              </div>
            </div>
          ))}
        </div>
        <ul className={styles.pagination_list}>
          <li>
            <button
              className={`${styles.pagination}`}
              onClick={handlePrevPage}
              disabled={currentCaseStudyPage === 1}
            >
              <FaAngleLeft />
            </button>
          </li>
          {Array.from({ length: totalCaseStudyPages }, (v, i) => i + 1).map(
            (number) => (
              <li key={number}>
                <button
                  className={`${styles.pagination} ${
                    currentCaseStudyPage === number ? styles.active : ""
                  }`}
                  onClick={() => caseStudyPaginate(number)}
                >
                  {number}
                </button>
              </li>
            )
          )}
          <li>
            <button
              className={`${styles.pagination}`}
              onClick={handleNextPage}
              disabled={currentCaseStudyPage === totalCaseStudyPages}
            >
              <FaAngleRight />
            </button>
          </li>
        </ul>
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
          <div className={styles.inner_content}>
            <h2>About</h2>
            <p>{caseStudiesData[activeIndex].about}</p>
            <h2>The Problem</h2>
            <p>{caseStudiesData[activeIndex].problem}</p>
            <h2>Our Solution</h2>
            <p>{caseStudiesData[activeIndex].solution.info}</p>
            <ul>
              {caseStudiesData[activeIndex].solution.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h2>The Result</h2>
            <p>{caseStudiesData[activeIndex].result.info}</p>
            <ul>
              {caseStudiesData[activeIndex].result.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => {
              setIsOpenConsultationform(true);
              closeModal();
            }}
          >
            <span> {caseStudiesData[activeIndex].action}</span>
          </button>
        </div>
      </Modal>
    </>
  );
};
