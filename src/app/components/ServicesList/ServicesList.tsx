"use client";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function ServicesList() {
  const column1 = [
    {
      title: "SEO",
      list1: [
        "Keyword research",
        "Rank tracking",
        "Site SEO Audit Report",
        "Index Optimization",
        "Meta tag optimization",
      ],
      list2: [
        "Page channel optimization",
        "Search intent-based analysis",
        "Page-level SEO analysis",
        "Competitor Analysis",
        "And more",
      ],
    },
    {
      title: "Marketing Automation",
      list1: [
        "Lead Management",
        "Meeting Scheduling",
        "Personalized Messages",
        "Funnels",
        "CTA",
      ],
      list2: [
        "Email Campaigns",
        "Social Media Posts",
        "Workflows",
        "Sequences",
        "Segmentation",
      ],
    },
    {
      title: "Marketing Analytics",
      list1: [
        "Web Tracking",
        "KPI",
        "Email Performance",
        "Custom Dashboards",
        "Deal Pipeline",
      ],
      list2: [
        "Custom Reporting",
        "Lead Scoring",
        "Forecast",
        "Sales Reports",
        "Goals and Projections",
      ],
    },
    {
      title: "Social Media Management",
      list1: [
        "Account Monitoring",
        "Account Management",
        "Increase Followers",
        "Content Management",
        "Post Scheduling",
      ],
      list2: [
        "Action Plan",
        "Captions",
        "Follower Engagement",
        "Hashtags",
        "Page, channel Evaluation",
      ],
    },
  ];

  const column2 = [
    {
      title: "Emails & Lead Nurturing",
      list1: [
        "Email Writing",
        "Automation",
        "Campaigns",
        "Performance",
        "Lead Scoring",
      ],
      list2: ["Recipient engagement", "Metrics", "Email Health", "Engagement"],
    },
    {
      title: "Websites & Landing Pages",
      list1: [
        "Headlines",
        "Forms",
        "Call to Action",
        "Social Proof",
        "Features",
      ],
      list2: [
        "Download Features",
        "Blogs",
        "Services",
        "About",
        "Designs",
        "SEO",
      ],
    },
    {
      title: "Web-App Development",
      list1: [
        "Websites",
        "Mobile Apps",
        "API’s",
        "System Integration",
        "System Optimization",
      ],
      list2: ["Maintenance and Updates"],
    },

    {
      title: "Branding",
      list1: [
        "Story",
        "Messaging",
        "Positioning",
        "Consistency",
        "Audience",
        "Personality",
        "Voice",
      ],
      list2: [
        "Values",
        "Identity",
        "Awareness",
        "Targeting",
        "Competition",
        "Loyalty",
        "Authority",
      ],
    },
  ];
  const [openIndex, setOpenIndex] = useState<number[]>([-1, -1]);
  const [openIndex2, setOpenIndex2] = useState<number[]>([-1, -1]);

  const handleClick = (columnIndex: number, index: number) => {
    setOpenIndex((prevOpenIndex) => {
      const isOpen = prevOpenIndex[columnIndex] === index;
      return isOpen
        ? [-1, -1]
        : prevOpenIndex.map((item, idx) => (idx === columnIndex ? index : -1));
    });
  };
  const handleClick2 = (columnIndex: number, index: number) => {
    setOpenIndex2((prevOpenIndex) => {
      const isOpen = prevOpenIndex[columnIndex] === index;
      return isOpen
        ? [-1, -1]
        : prevOpenIndex.map((item, idx) => (idx === columnIndex ? index : -1));
    });
  };
  return (
    <div className="mt-10 md:flex justify-between w-[100%]  gap-5">
      <div className="w-[100%] md:w-[50%]">
        {column1.map((item, index) => (
          <div className="bg-[#FFFFFF1A] rounded-xl p-5 mt-5 md:w-[625px]" key={index}>
            <div
              className=" flex justify-between items-center cursor-pointer text-[14px] md:text-[18px] font-bold text-[#FFFFFFE5]"
              onClick={() => handleClick(0, index)}
            >
              <p className="text-[#FFFFFFE5]">{item.title}</p>
              {openIndex[0] === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            <div
              className={`${
                openIndex[0] !== index && "hidden"
              } text-[12px] md:text-[14px] flex gap-40 leading-[21px] text-[#FFFFFF] mt-5`}
            >
              <ul>
                {item.list1.map((item,index) => (
                  <li className="flex items-center mt-2" key={index}>
                    <svg
                      width={14}
                      height={15}
                      className="me-3"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.29956 11.5L9.63289 7.5L4.29956 3.5L5.74691 7.5L4.29956 11.5Z"
                        fill="white"
                      />
                    </svg>

                    {item}
                  </li>
                ))}
              </ul>
              <ul className="hidden md:block">
                {item.list2.map((item,index) => (
                  <li className="flex items-center mt-2" key={index}>
                    <svg
                      width={14}
                      height={15}
                      className="me-3"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.29956 11.5L9.63289 7.5L4.29956 3.5L5.74691 7.5L4.29956 11.5Z"
                        fill="white"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[100%] md:w-[50%]">
        {column2.map((item, index) => (
          <div className="bg-[#FFFFFF1A] rounded-xl p-5 mt-5 md:w-[625px]" key={index}>
            <div
              className=" flex justify-between items-center cursor-pointer text-[14px] md:text-[18px] font-bold text-[#FFFFFFE5]"
              onClick={() => handleClick2(0, index)}
            >
              <p>{item.title}</p>
              {openIndex2[0] === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            <div
              className={`${
                openIndex2[0] !== index && "hidden"
              } text-[12px] md:text-[14px] flex gap-40 leading-[21px] text-[#FFFFFF] mt-5`}
            >
              <ul>
                {item.list1.map((item,index) => (
                  <li className="flex items-center mt-2" key={index}>
                    <svg
                      width={14}
                      height={15}
                      className="me-3"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.29956 11.5L9.63289 7.5L4.29956 3.5L5.74691 7.5L4.29956 11.5Z"
                        fill="white"
                      />
                    </svg>

                    {item}
                  </li>
                ))}
              </ul>
              <ul className="hidden md:block">
                {item.list2.map((item,index) => (
                  <li className="flex items-center mt-2" key={index}>
                    <svg
                      width={14}
                      height={15}
                      className="me-3"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.29956 11.5L9.63289 7.5L4.29956 3.5L5.74691 7.5L4.29956 11.5Z"
                        fill="white"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesList;
