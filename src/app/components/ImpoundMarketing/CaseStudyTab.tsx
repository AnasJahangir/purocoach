"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./ImpoundMarketing.module.css";

// icons
import { FaAngleRight } from "react-icons/fa6";

// Data
import { caseStudiesData } from "@/app/case-studies/data";

export const CaseStudyTab = () => {
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
    const totalCaseStudyPages = Math.ceil(caseStudiesData.length / caseStudyItemsPerPage);
    return(
        <div className={`${styles.content} ${styles.case_study_cont}`}>
        <h3>Select a Case Study</h3>
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
                <button>
                  Read More <FaAngleRight />
                </button>
              </div>
            </div>
          ))}
        </div>
        <ul className={styles.pagination_list}>
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
        </ul>
      </div>
    )
}