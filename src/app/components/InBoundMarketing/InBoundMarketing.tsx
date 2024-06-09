"use client";
import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./InBoundMarketing.module.css";
import { useSearchParams } from 'next/navigation';

// icons
import { FaAngleDown } from "react-icons/fa6";

// Components
import { CodingIcon } from "@/app/icons/CodingIcon";
import { BrandingIcon } from "@/app/icons/BrandingIcon";
import { WebDevelopmentTab } from "./WebDevelopmentTab";
import { BusinessBranding } from "./BusinessBranding";
import { CaseStudyTab } from "./CaseStudyTab";

export const InBoundMarketing = () => {
  const searchParams = useSearchParams()
  const showInbound = searchParams.get('showInbound');

  const [activeTab, setActiveTab] = useState<string>("tab2");


  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(()=>{
    if(showInbound === "true") setActiveTab("tab1")
    else setActiveTab("tab2")
  },[showInbound]);
  return (
    <section className={styles.case_studies}>
      <div className="container">
        {
          activeTab === "tab1" && (
            <h2>Inbound Marketing</h2>
          )
        }
        {activeTab === "tab2" && (
          <h2>Business Branding</h2>
        )}
        {activeTab === "tab3" && (
          <h2>Web Development</h2>
        )}
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
          {showInbound === 'true' && (
            <li
              onClick={() => handleTabClick("tab1")}
              className={`${activeTab === "tab1" ? styles.active : ""}`}
            >
              <BrandingIcon fill={`${activeTab === "tab1" ? "#fff" : "#304880"}`} />{" "}
              <span>Inbound Marketing</span>
            </li>
          )}
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
            <BusinessBranding />
          )}
          {activeTab === "tab3" && (
            <WebDevelopmentTab />
          )}
        </div>
      </div>
    </section>
  )
}