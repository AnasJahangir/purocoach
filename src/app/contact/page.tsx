import React from "react";
import Image from "next/image";
import styles from "../components/HomeHero/HomeHero.module.css";
import "./contact.css";
import ContactForm from "../components/ContactForm/ContactForm";

function page() {
  return (
    <>
      <div className="bg-[#DAE2EA] min-h-[200vh] md:min-h-[180vh]">
        <section className={`${styles.home_hero} `}>
          <div className={styles.bg_overlay}></div>
          <div className="container">
            <div className={styles.home_hero_wrap}>
              <div className="mt-[150px]">
                <div>
                  <div>
                    <h1 className="[text-shadow:_0_2px_0_rgb(0_0_0_/_26%)] text-[26px] md:text-[64px]  font-[400] text-[#FFFFFFE5] hidden md:block">
                      Contact <span className="text-[#FF9D2A] italic"> Us</span>
                    </h1>
                  </div>
                  <div className="contact-text-gradient text-[26px] md:text-[35px] md:w-[511px] mt-10 text-center md:text-start">
                    Let’s Grow Your Business The Right Way
                  </div>
                  <div className="w-[520px] text-[16px] leading-[24px] mt-7 text-[#FFFFFF] hidden md:block">
                    Together, we’ll make your business a leader in its field,
                    attracting, engaging and retaining clients like never
                    before.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute bottom-[3%] flex justify-center w-[100%] md:w-[514px] md:bottom-[23%] md:left-[56%]">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default page;
