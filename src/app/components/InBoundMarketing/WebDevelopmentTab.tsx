"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./InBoundMarketing.module.css";

// Data
import { technologyTabs, technologyData } from "@/app/case-studies/data";

// icons
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

function chunkArray<T>(array: T[], size: number): T[][] {
  const chunkedArr: T[][] = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}

export const WebDevelopmentTab = () => {
  const [activeTab, setActiveTab] = useState(technologyTabs[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const filteredData =
    activeTab === "All"
      ? technologyData
      : technologyData.filter((item) => item.tag === activeTab);
  const paginatedData = chunkArray(filteredData, 9);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(0)
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={`${styles.content} ${styles.technology}`}>
      <h3>Choose a Technologies</h3>
      <div className={styles.technology_tab}>
        <ul>
          {technologyTabs.map((technology, index) => (
            <li className={redHatDisplay.className} key={index}>
              <button
                className={technology == activeTab ? styles.active : ""}
                onClick={() => handleClick(technology)}
              >
                {technology}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.technology_box}>
        {paginatedData[currentPage]?.map((item, index) => (
          <div key={`technology_${index}`} className={styles.technology_item}>
            <div className={styles.technology_inner}>
              <div className={styles.technology_img}>
                <Image
                  src={item.img}
                  alt={item.heading}
                  height={450}
                  width={500}
                />
              </div>
              <div className={styles.technology_cont}>
                <h4>{item.heading}</h4>
                <ul>
                  {item.info.map((info, index) => (
                    <li key={index}>{info}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
      <ul className={styles.pagination_list}>
          <li>
            <button
              className={`${styles.pagination}`}
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              <FaAngleLeft />
            </button>
          </li>
          {paginatedData.map((_, index) => (
            <li key={index}>
              <button
                className={`${styles.pagination} ${
                  currentPage === index ? styles.active : ""
                }`}
                onClick={() => setCurrentPage(index)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`${styles.pagination}`}
              onClick={handleNextPage}
              disabled={currentPage === paginatedData.length - 1}
            >
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
