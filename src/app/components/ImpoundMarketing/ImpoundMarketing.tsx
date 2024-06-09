"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./ImpoundMarketing.module.css";

// icons
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

// Components
import { CodingIcon } from "@/app/icons/CodingIcon";
import { DigitalMarketingIcon } from "@/app/icons/DigitalMarketingIcon";
import { BrandingIcon } from "@/app/icons/BrandingIcon";
import { CaseStudyTab } from "./CaseStudyTab";
import { WebDevelopmentTab } from "./WebDevelopmentTab";
import { BusinessBranding } from "./BusinessBranding";

export const ImpoundMarketing = () => {
    const [activeTab, setActiveTab] = useState<string>("tab1");

    const handleTabClick = (tab: string) => {
      setActiveTab(tab);
    };
    return (
        <section className={styles.case_studies}>
        <div className="container">
          <h2>Inbound Marketing Case Studies</h2>
          <div className={styles.case_studies_selects}>
            <div className={styles.form_control}>
              <select name="" id="">
                <option value="">Case Studies</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
              <FaAngleDown />
            </div>
            <div className={styles.form_control}>
              <select name="" id="">
                <option value="">All</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
              <FaAngleDown />
            </div>
          </div>
          <ul className={styles.case_studies_tabs}>
            <li
              onClick={() => handleTabClick("tab1")}
              className={`${activeTab == "tab1" ? styles.active : ""}`}
            >
              <DigitalMarketingIcon
                fill={`${activeTab == "tab1" ? "#fff" : "#304880"}`}
              />{" "}
              <span>Inbound Marketing</span>
            </li>
            <li
              onClick={() => handleTabClick("tab2")}
              className={`${activeTab == "tab2" ? styles.active : ""}`}
            >
              <BrandingIcon
                fill={`${activeTab == "tab2" ? "#fff" : "#304880"}`}
              />{" "}
              <span>Business Branding</span>
            </li>
            <li
              onClick={() => handleTabClick("tab3")}
              className={`${activeTab == "tab3" ? styles.active : ""}`}
            >
              <CodingIcon
                fill={`${activeTab == "tab3" ? "#fff" : "#304880"}`}
              />{" "}
              <span>Web Development</span>
            </li>
          </ul>
        </div>
        <div className={styles.tab_content}>
          <div className="container">
            {activeTab === "tab1" && (
              <CaseStudyTab />
            )}
            {activeTab === "tab2" && (
              <BusinessBranding/>
            )}
            {activeTab === "tab3" && (
                <WebDevelopmentTab/>
            )}
          </div>
        </div>
      </section>
    )
}