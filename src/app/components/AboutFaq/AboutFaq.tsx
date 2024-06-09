"use client";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function AboutFaq() {
  const column1 = [
    {
      title: "Excellence",
      content: `Our attention to detail, high standards, and professionalism will set you apart. We pride ourselves on these qualities and infuse them into all our work.
    
          `,
    },
    {
      title: "Integrity",
      content:
        "Trust and honesty are the foundation of every business relationship. When you work with us, you can be confident that we have your best interest and are committed to your success.",
    },
    {
      title: "Authenticity",
      content: `We help you establish lasting client relationships through transparency and loyalty. Our marketing relies on thoughtful rhetoric established through credentials, an emotional connection, and data-driven evidence for your claims.      `,
    },
    {
      title: "Diversity",
      content: `Our team brings multiple unique perspectives to help flesh out your brand across each channel you hope to reach customers. Their input enables you to deliver a seamless and thoughtful holistic brand experience.
    
          `,
    },
  ];
  const column2 = [
    {
      title: "Excellence",
      content: `Attention to detail, high standards, and professionalism will set you apart. We pride ourselves on these qualities and infuse them into everything we do.

      `,
    },
    {
      title: "Collaboration",
      content:
        "Our relationships are based on mutual understanding, so we can best serve your business needs, target the right clientele, and help you achieve your long-term goals and overall vision.",
    },
    {
      title: "Togetherness",
      content: `Having a trustworthy partner will give you the confidence to take intelligent risks. Let our industry experts back your vision, no matter how daring.

      `,
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
    <div className="mt-10 md:flex md:justify-between  md:gap-5 w-[100%]" >
      <div className="w-[100%] md:w-[50%]">
        {column1.map((item, index) => (
          <div className="bg-[#E8EFF3] rounded-xl p-5 mt-5 w-[100%] md:w-[625px]" key={index}>
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => handleClick(0, index)}
            >
              <p className="text-[#242424CC] text-[20px] ">{item.title}</p>
              {openIndex[0] === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            <p
              className={`${
                openIndex[0] !== index && "hidden"
              } text-[14px] leading-[25.9px] text-[#242424] mt-5`}
            >
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <div className="w-[100%] md:w-[50%]">
        {column2.map((item, index) => (
          <div className="bg-[#E8EFF3] rounded-xl p-5 mt-5 w-[100%] md:w-[625px]"  key={index}>
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => handleClick2(0, index)}
            >
              <p className="text-[#242424CC] text-[20px] ">{item.title}</p>
              {openIndex2[0] === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            <p
              className={`${
                openIndex2[0] !== index && "hidden"
              } text-[14px] leading-[25.9px] text-[#242424] mt-5`}
            >
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutFaq;
