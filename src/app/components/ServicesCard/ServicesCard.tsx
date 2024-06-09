import React from "react";
import "./ServicesCard.css";
interface CardProps {
  image: string;
  title: string;
  description: string;
}

const ServicesCard: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="card relative overflow-hidden rounded-lg shadow-lg mt-5 md:mt-0">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="overlay absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300"></div>
      <div className="content absolute bottom-0 p-4 text-white">
        <h3 className="text-[20px] md:text-[24px] leading-[36px] font-bold">{title}</h3>
      </div>
      <div className="hover-content absolute inset-0 p-4 text-white opacity-0 transition-opacity duration-300">
        <h1 className="text-[20px] md:text-[24px] leading-[36px] font-bold">{title}</h1>
        <p
          className="text-[14px] text-[#FFFFFF] leading-[21px] mt-3"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <div className="flex items-center mt-3 text-[#FFFFFFE5] font-bold cursor-pointer">
          Read More
          <svg
            className="ms-2"
            width={8}
            height={13}
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L6 6.5L1 11.5"
              stroke="white"
              strokeOpacity="0.9"
              strokeWidth={2}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
