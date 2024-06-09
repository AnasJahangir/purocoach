import React from "react";
import "./about.css";
import Image from "next/image";
import styles from "../components/HomeHero/HomeHero.module.css";

import AboutFaq from "../components/AboutFaq/AboutFaq";

function page() {
  return (
    <>
      <div className="bg-[#DAE2EA] ">
        <section className={`${styles.home_hero} `}>
          <div className={styles.bg_overlay}></div>
          <div className="container">
            <div className={styles.home_hero_wrap}>
              <div className="mt-[150px]">
                <div>
                  <div>
                    <h1 className="[text-shadow:_0_2px_0_rgb(0_0_0_/_26%)] text-[26px] md:text-[64px]  font-[400] text-[#FFFFFFE5]">
                      About <span className="text-[#FF9D2A] italic"> US</span>
                    </h1>
                  </div>

                  <div className="text-[#FFFFFFE5] hidden md:block leading-[28px] mt-10  font-pt">
                    A world-class inbound marketing, business branding, and web
                    development agency committed to delivering superior quality
                    and results. With over ten years of industry experience,
                    we've led countless small to mid-size coaching and
                    consulting businesses to great success with proven solutions
                    that produce consistent results.
                  </div>

                  <div className="text-[#FFFFFFE5] text-[14px] mt-5 md:hidden leading-[21px] font-pt">
                    A world-class inbound marketing, business branding, and web
                    development agency committed to delivering superior quality
                    and results.
                  </div>

                  <div className="flex items-center md:hidden mt-2 text-[#FFFFFFE5]">
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
              <div className={`${styles.home_hero_img} mt-[210px]`}>
                <Image
                  src={"/assets/Intersect.png"}
                  className="w-[290px] h-[190px] md:w-[600px] md:h-[397px]"
                  alt="Intersect"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="relative about-bg-overlay1">
        <div className="by_overlay"></div>
        <div className={`outer_shape outer_shape_bottom`}></div>
        <div className="py-20">
          <section className="mt-10 md:mt-28 md:flex ">
            <div className="md:hidden mb-5 px-5">
              <h1 className="text-[24px] leading-[50.75px] text-[#242424CC] font-[700]">
                The Team that Makes it All Possible
              </h1>
              <div className="vector50 my-10 w-[100%]"></div>
            </div>
            <div>
              <Image
                src={"/assets/Our_Team_1.png"}
                width={688}
                height={795}
                className="w-[75%] md:w-[688px]"
                alt="Our_Team_1"
              />
            </div>
            <div className="pe-5 ms-10 md:w-[50%] ">
              <h1 className="text-[35px] hidden md:block leading-[50.75px] text-[#242424CC] font-[700]">
                The Team that Makes it All Possible
              </h1>

              <p className="mt-6 text-[14px] font-pt leading-[25.9px] text-[#242424]">
                Our team of Inbound Marketers, Brand Strategists, UX Designers,
                and Developers is eager to provide top-notch work that exceeds
                your expectations.
              </p>
              <div className="flex items-center text-[17px] font-[700] cursor-pointer text-[#304880] mt-8">
                Read More{" "}
                <svg
                  className="ms-2"
                  width={10}
                  height={16}
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L8 8L1 15" stroke="#304880" strokeWidth={2} />
                </svg>
              </div>
            </div>
          </section>
          <section className="mt-28 flex ">
            <div className="relative flex">
              <div className="min-h-[402px] w-[80%] md:w-[50%] rounded-tr-[24px] bg-white p-9 ">
                <h1 className="text-[25px] md:text-[35px] font-bold leading-[52.5px] text-[#242424CC]">
                  Every Client’s <br /> Vision is Our Mission
                </h1>
                <div className="vector50 mt-5 md:mt-10"></div>
                <p className="mt-52 md:mt-10 text-[14px] leading-[21px] text[#808080]">
                  At PUROCoach, we want to allow businesses time, freedom and
                  peace of mind to focus on what matters the most – their
                  valuable customers.
                </p>
                <div className="flex items-center text-[17px] font-[700] cursor-pointer text-[#304880] mt-8">
                  Read More{" "}
                  <svg
                    className="ms-2"
                    width={10}
                    height={16}
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L8 8L1 15" stroke="#304880" strokeWidth={2} />
                  </svg>
                </div>
              </div>

              <div className="sect2-bg h-[64px] w-[351px] md:h-[206.58px] md:w-[800px] absolute rounded-l-[20px] md:rounded-l-[0px] rounded-tr-[20px]  rounded-br-[20px] left-[7%] sm:left-[45%] md:left-[50%] top-[55%] md:top-[48%]"></div>
              <div className="absolute w-[320px] h-[160px] md:h-[313px] md:w-[800px] flex justify-center left-[10%] top-[35%]  sm:left-[47%] md:left-[50%] sm:top-[35%] md:top-[10%]">
                <Image
                  src={"/assets/about1.png"}
                  width={700}
                  height={313}
                  alt="about1"
                />
              </div>
            </div>
          </section>
          <section className="mt-28 mb-10 ">
            <div className="flex">
              <div className="relative w-[100%] min-h-[450px]">
                <div className="sect2-bg rounded-tl-[20px] rounded-bl-[20px] absolute h-[64px] w-[351px] md:h-[206.58px] md:w-[800px]  rounded-r-[20px] md:rounded-l-[20px] md:rounded-r-[0px] right-[7%] sm:right-[45%] md:right-[38%] bottom-[15%] sm:bottom-[20%] md:bottom-[0%]"></div>
                <div className="absolute w-[320px] h-[160px] md:h-[313px] object-cover md:w-[800px]  flex justify-center right-[10%] sm:right-[47%] md:right-[39%] top-[45%] sm:top-[35%] md:top-[0%]">
                  <Image
                    src={"/assets/about2.png"}
                    width={700}
                    height={313}
                    // className="w-[677.23px] h-[411.99px]"
                    alt="about1"
                  />
                </div>
                <div className=" w-[80%] md:w-[40%] min-h-[450px] z-[-1] md:z-0 absolute right-[0%] rounded-tl-[24px] bg-white p-9 ">
                  <h1 className="text-[24px] md:text-[35px] font-bold leading-[52.5px] text-[#242424CC]">
                    Visioning of a Brighter Future
                  </h1>
                  <div className="vector50 mt-10 md:ms-52"></div>
                  <p className="mt-60 md:mt-10  text-[14px] leading-[21px] text[#808080]">
                    We aspire to be one of the world's greatest service
                    providers of innovative marketing and branding solutions for
                    business growth across the globe. We aim to find a global
                    audience driven by our commitment to our core philosophies,
                    business models, and values. 
                  </p>
                  <div className="flex items-center text-[17px] font-[700] cursor-pointer text-[#304880] mt-8">
                    Read More{" "}
                    <svg
                      className="ms-2"
                      width={10}
                      height={16}
                      viewBox="0 0 10 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L8 8L1 15"
                        stroke="#304880"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  py-10 container">
        <h1 className="text-[24px] text-center md:text-[35px] font-bold text-[#242424CC] mt-[100px]">
          Our Values Are Core to Our Existance
        </h1>
        <div className=" justify-center my-10 flex md:hidden">
          <Image
            src="/assets/about-image3.png"
            alt="about image"
            width={1300}
            height={119}
            className="w-[100%] h-[40%]"
          />
        </div>
        <p className="text-[15px] leading-[27.75px] md:text-center w-[100%] md:w-[70%] mt-5">
          We have grown exponentially while staying true to ourselves in
          everything we do because of our seven core principles: people,
          integrity, authenticity, diversity, excellence, collaboration, and
          togetherness.
        </p>
        <AboutFaq />
      </div>
      <div className=" justify-center my-20 hidden md:flex">
        <Image
          src="/assets/about-image3.png"
          alt="about image"
          width={1300}
          className="w-[100%]"
          height={354}
        />
      </div>

      <section className="our-story">
        <div className="by_overlay"></div>
        <div className={`outer_shape outer_shape_top`}></div>
        <div className={`outer_shape outer_shape_bottom`}></div>
        <div className="container relative z-[1]">
          <div className="md:flex justify-between">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={"/assets/about-image4.png"}
                alt="about"
                width={644}
                height={515}
              />
              <div className="about-name rounded-3xl text-center w-[80%] md:w-[341.31px] p-3">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#FFFFFFE5]">
                  JOHNNY DORVILIEN
                </h3>
                <p className="text-[#FFFFFFE5] mt-2">Founder & CEO</p>
              </div>
            </div>
            <div className="w-[100%] mt-10 md:mt-0 md:w-[701px]">
              <h1 className="text-[35px] text-[#242424] font-bold">
                Our Story
              </h1>
              <div className="vector60 my-8"></div>
              <div>
                <svg
                  width={38}
                  height={23}
                  viewBox="0 0 38 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0987 22.9928H0.77872L10.4987 0.312811H19.2287L14.0987 22.9928ZM32.2787 22.9928H18.9587L28.6787 0.312811H37.4087L32.2787 22.9928Z"
                    fill="#304880"
                  />
                </svg>
                <p className="text-[14px] text-[#242424] mt-5">
                  PUROCoach was founded by Johnny Dorvilien, a seasoned software
                  architect and business executive coach with a track record of
                  helping Fortune 500 companies build secure and scalable
                  software systems. These systems come with innovative user
                  experiences and marketing solutions that drive exceptional
                  returns on investment. <br /> <br /> In 2016, Johnny stepped
                  out on faith and embarked on a journey of entrepreneurship
                  after struggling to cope in the corporate world of IT,
                  battling with ADHD. In the process, he discovered a profound
                  desire to help CEOs of small coaching and consulting
                  businesses identify the problems they face in their businesses
                  and provide solutions for long-term growth. <br /> <br /> In
                  the pursuit of growing his own coaching business, he
                  identified three major problems within the coaching and
                  consulting industry that needed resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
