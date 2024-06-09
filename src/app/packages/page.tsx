import React from "react";
import "./packages.css";
import styles from "../page.module.css";
import { Red_Hat_Display } from "next/font/google";
import GetInTouchImg from "../../../public/assets//get_in_touch.webp";
import EmailFormIcon from "../../../public/assets/email_name.webp";
import UserFromIcon from "../../../public/assets/full_name.webp";
import PhoneFormIcon from "../../../public/assets/phone_name.webp";
import ComapanyFormIcon from "../../../public/assets/company_name.webp";
import MessageFormIcon from "../../../public/assets/message.webp";
import EmailIcon from "../../../public/assets/email.svg";
import PhoneIcon from "../../../public/assets/phone.svg";
import LocationIcon from "../../../public/assets/location.svg";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";

const RedHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

function page() {
  return (
    <div className="min-h-[100vh]">
      <div className="packages-header h-[200px]">
        <div className="by_overlay"></div>
        <h1 className="text-[24px] md:text-[44px] italic uppercase relative z-[1] ms-[90px] mt-[100px] text-[#FFFFFF]">
          Our <span className="text-[#FF9D2A] italic">Packages</span>
        </h1>
      </div>
      <div>
        <h1 className="text-[24px] md:text-[35px] text-center uppercase font-[600] text-[#304880] ">
          Custom Packages
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="vector-packages-2 my-5 w-[80%] md:w-[30%]"></div>
      </div>
      <div className="flex justify-center items-center">
        <p className="w-[80%] text-[14px] md:text-[16px] text-[#242424] leading-[28px] mt-5 text-center">
          We have several marketing service packages available to suit your
          business needs. <br /> Each can deliver a high return on your
          investment, giving you more leads and building your brand with
          customers.
        </p>
      </div>

      <section className="packages-overlay">
        <div className="by_overlay"></div>
        <div className={`outer_shape outer_shape_top`}></div>
        <div className={`outer_shape outer_shape_bottom`}></div>
        <div className="container relative z-[1]">
          <div className="md:flex justify-between">
            <div className="md:w-[411px] min-h-[1030px] p-8 mt-5 md:mt-0 rounded-2xl bg-[#FFFFFF]">
              <h1 className="text-[22px] text-center font-bold text-[#242424CC]">
                Consulting Pack
              </h1>
              <p className="text-[12px] md:text-[14px] mt-5 text-[#242424] text-center">
                We review your business and <br /> deliver actionable
                suggestions to <br />
                improve your performance.
              </p>
              <div className="border-b-[1px] border-[#D1D1D1] w-[100%] mt-10"></div>
              <ul className="text-[#242424] mt-10 text-[12px] md:text-[16px]">
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  12 Week Consultation Sessions
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Ongoing Email Support
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Marketing Growth Plan
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Lead Segmentation
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  SEO Strategy
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Email Marketing
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Strategic Roadmap
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Custom Reporting
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Automation Strategies
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Lead Magnet
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Lead Capturing
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Lead Nurturing
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Social Media Marketing Strategies
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  2 Marketing Training Blocks
                </li>
              </ul>
              <div className="flex justify-center items-start mt-10">
                <button className="packages-btn w-[100%] md:w-[70%]">Talk to Sales</button>
              </div>
            </div>
            <div className="md:w-[411px] min-h-[1030px] p-8 mt-5 md:mt-0 rounded-2xl bg-[#FFFFFF]">
              <h1 className="text-[22px] text-center font-bold text-[#242424CC]">
                Automation Pack
              </h1>
              <p className="text-[12px] md:text-[14px] mt-5 text-[#242424] text-center">
                We implement marketing <br /> automation solutions across your{" "}
                <br />
                business, boosting department <br /> efficiency and
                productivity.
              </p>
              <div className="border-b-[1px] border-[#D1D1D1] w-[100%] mt-10"></div>
              <ul className="text-[#242424] mt-10 text-[11px] md:text-[16px]">
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Marketing System Setup
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Inbound Automation
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Sales Funnels
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Pipelines
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  SEO Optimization
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Workflows Engineering
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Sequence Automation
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Reporting Setup{" "}
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Automation Strategies
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Third Party Integration
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Template Setup
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Website Development
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Landing Pages
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Website Optimization
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Ongoing Email of Technical Support
                </li>
              </ul>
              <div className="flex justify-center items-start mt-10">
                <button className="packages-btn w-[100%] md:w-[70%]">Talk to Sales</button>
              </div>
            </div>
            <div className="md:w-[411px]  md:min-h-[1093px] p-8 mt-5 md:mt-0 rounded-2xl paclage-card-bg">
              <h1 className="text-[22px] text-center font-bold text-[#FFFFFFE5]">
                Complete Inbound Pack
              </h1>
              <p className="text-[11px] md:text-[14px] mt-5 text-[#FFFFFFE5] text-center">
                We work with you to develop a <br /> comprehensive marketing
                strategy <br />
                with a live campaign and data <br /> functionality testing.
              </p>
              <div className="border-b-[1px] border-[#D1D1D1] w-[100%] mt-10 md:mt-20"></div>
              <ul className="text-[#FFFFFFE5] mt-10 md:mt-24 text-[11px] md:text-[16px]">
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Weekly Status Report
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Inbound Strategies + Automation
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Sales Funnels Consulting + Design
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Pipelines Consulting + Design
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  SEO Strategies + Optimization
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Workflows Strategies + Engineering
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Sequence Automation
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Advanced Reporting
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Third Party Integration
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Template Setup + Design
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Website Development + Consultation
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Landing Pages Design
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Website Optimization + Revamping
                </li>
                <li className="flex items-center mt-5">
                  <svg
                    width={23}
                    height={23}
                    className="me-3"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                    <path
                      d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                      stroke="white"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                  </svg>
                  Ongoing Email of Technical Support
                </li>
              </ul>
              <div className="flex justify-center items-start mt-10">
                <button className="packages-btn w-[100%] md:w-[70%]">Talk to Sales</button>
              </div>
            </div>
          </div>
          <div className="mt-20 md:flex justify-between">
            <div className="bg-white p-8 rounded-2xl w-[100%] md:w-[568px] ">
              <h1 className="text-[22px] font-bold text-[#242424CC] text-center">
                Business Branding
              </h1>
              <p className="text-[12px] md:text-[14px] text-[#242424] text-center my-8">
                Let us develop your brand from scratch or with your current
                ideas to <br /> bring your vision to fruition.
              </p>
              <div className="border-b-[1px] border-[#D1D1D1] w-[100%] mt-10"></div>
              <div className="md:flex text-[11px] md:text-[16px] justify-between items-center">
                <ul className="text-[#242424] mt-10">
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Brand Discovery Sessions
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Brand Identity Design
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Stationary & Marketing Materials
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Brand Identity Design
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Social Banner & Icons
                  </li>
                </ul>
                <ul className="text-[#242424] md:mt-10">
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Brand Voice
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Brand Guidelines
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Brand Positioning
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Logos & Web Design{" "}
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Brand Messaging
                  </li>
                </ul>
              </div>
              <div className="flex justify-center mt-16">
                <button className="packages-hire  w-[100%] md:w-[75%]">
                  Hire a Brand Strategist
                </button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl w-[100%] md:w-[568px] mt-5 md:mt-0">
              <h1 className="text-[22px] font-bold text-[#242424CC] text-center">
                Development Options
              </h1>
              <p className="text-[12px] md:text-[14px] text-[#242424] text-center my-8">
                We can provide you with a menu of projects to help your business{" "}
                <br /> achieve specific goals.
              </p>
              <div className="border-b-[1px] border-[#D1D1D1] w-[100%] mt-10"></div>
              <div className="md:flex text-[11px] md:text-[16px]  justify-between items-center">
                <ul className="text-[#242424] mt-10">
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Hourly-Base
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Project Base
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    On Demand Developer
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Short-term Developers
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Long-term Developers
                  </li>
                </ul>
                <ul className="text-[#242424] md:mt-10">
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Database Developers
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    API Developers
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Automation Developers
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Integration Developers
                  </li>
                  <li className="flex items-center mt-5">
                    <svg
                      width={23}
                      height={23}
                      className="me-3"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11.6836" cy="11.5" r={11} fill="#45B36C" />
                      <path
                        d="M6.68359 11.5L10.8503 15.5L16.6836 7.5"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    </svg>
                    Tech Support Engineers
                  </li>
                </ul>
              </div>
              <div className="flex justify-center mt-16">
                <button className="packages-hire  w-[100%] md:w-[75%]">
                  Hire a Brand Strategist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.get_in_touch}>        
        <div className="container">
          <div className={styles.get_in_touch_wrap}>
            <div className={styles.get_in_touch_cont}>
              <div className={styles.content_box}>
                <div className={RedHatDisplay.className}>
                  <h3>Still Got Questions?</h3>
                </div>
                <p>
                  If you can’t find the answer you're looking for, chat with our
                  friendly sales team who’s happy to guide you.
                </p>
                <ul>
                  <li>
                    <Image src={PhoneIcon} alt="Phone" />
                  </li>
                  <li>
                    <Image src={EmailIcon} alt="Email" />
                  </li>
                  <li>
                    <Image src={LocationIcon} alt="Location" />
                  </li>
                </ul>
              </div>
              <Image src={GetInTouchImg} alt="get in touch" />
              <div className={RedHatDisplay.className}>
                <h2>We’ve Got Your Back!</h2>
              </div>
            </div>
            <div className={styles.get_in_touch_form}>
              <h3>Submit Your Inquiry Here</h3>
              <form>
                <div className={styles.form_control}>
                  <Image src={UserFromIcon} alt="Full Name" />
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className={styles.form_input}
                  />
                </div>
                <div className={styles.form_control}>
                  <Image src={EmailFormIcon} alt="Email" />
                  <input
                    type="email"
                    placeholder="Email*"
                    className={styles.form_input}
                  />
                </div>
                <div className={styles.form_control}>
                  <Image src={PhoneFormIcon} alt="Phone" />
                  <input
                    type="tel"
                    placeholder="Phone*"
                    className={styles.form_input}
                  />
                </div>
                <div className={styles.form_control}>
                  <Image src={ComapanyFormIcon} alt="Company Name" />
                  <input
                    type="text"
                    placeholder="Company Name*"
                    className={styles.form_input}
                  />
                </div>
                <div className={styles.form_control}>
                  <select className={styles.form_select}>
                    <option value="">Service Inquiry*</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </select>
                  <FaAngleDown />
                </div>
                <div className={styles.form_control}>
                  <Image src={MessageFormIcon} alt="Message" />
                  <textarea
                    cols={30}
                    rows={10}
                    className={styles.form_textarea}
                    placeholder="Message*"
                  ></textarea>
                </div>
                <button className={styles.form_submit}>
                  <span>Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
