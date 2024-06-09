"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./ImpoundMarketing.module.css";

import Logo from "../../../../public/assets/logo.png"

// Data
import { prototypeTabs, prototypeData } from "@/app/case-studies/data";

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

export const BusinessBranding = () => {
  const [activeTab, setActiveTab] = useState(prototypeTabs[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const filteredData =
    activeTab === "All"
      ? prototypeData
      : prototypeData.filter((item) => item.tag === activeTab);
  const paginatedData = chunkArray(filteredData, 4);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(0)
  };

  // const handlePrevPage = () => {
  //   setCurrentPage(currentPage - 1);
  // };

  // const handleNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  return (
    <div className={`${styles.content} ${styles.prototyping}`}>
      <h3>Choose a Prototype</h3>
      <div className={styles.technology_tab}>
        <ul>
          {prototypeTabs.map((technology, index) => (
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
      <div className={styles.prototype_box}>
        {paginatedData[currentPage]?.map((item, index) => (
          <div key={`technology_${index}`} className={styles.prototype_item}>
            <div className={styles.vector_box}>
              <span className={`${styles.vector} ${styles.vector1}`}></span>
              <span className={`${styles.vector} ${styles.vector2}`}></span>
              <span className={`${styles.vector} ${styles.vector3}`}></span>
              <span className={`${styles.vector} ${styles.vector4}`}></span>
              <span className={`${styles.vector} ${styles.vector5}`}></span>
            </div>
              <div className={styles.prototype_img}>
                <Image
                  src={item.img}
                  alt={item.heading}
                  height={450}
                  width={500}
                />
              </div>
              <div className={styles.prototype_cont}>
              <Image
                  src={Logo}
                  alt={"Logo"}
                />
                <h4>{item.heading}</h4>
                <ul>
                  {item.info.map((info, index) => (
                    <li key={index}>{info}</li>
                  ))}
                </ul>
                <button>{item.action}</button>
              </div>
            </div>
        ))}
      </div>
      <div>
        {/* <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Prev
        </button> */}
        <ul className={styles.pagination_list}>
        {paginatedData.map((_, index) => (
          <li key={index} >
            <button className={`${styles.pagination} ${
            currentPage === index  ? styles.active : ""
          }`} onClick={() => setCurrentPage(index)}>
            {index + 1}
            </button>
          </li>
        ))}
        </ul>
        {/* <button
          onClick={handleNextPage}
          disabled={currentPage === paginatedData.length - 1}
        >
          Next
        </button> */}
      </div>
    </div>
  );
};
