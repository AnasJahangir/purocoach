import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./HomeHero.module.css";
import { Red_Hat_Display } from "next/font/google";

// Component
import { Modal } from "../Modal/Modal";
import { Verified } from "../Verification/Verified";

// Images
import PortraitHero from "../../../../public/assets/portrait_hero.png";
import EmailFormIcon from "../../../../public/assets/email_name.webp";
import UserFromIcon from "../../../../public/assets/full_name.webp";
import PhoneFormIcon from "../../../../public/assets/phone_name.webp";
import ComapanyFormIcon from "../../../../public/assets/company_name.webp";
import ComapanyWebsiteFormIcon from "../../../../public/assets/company_webiste.png";

// icons
import { IoIosPlay } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";
import { NotVefied } from "../Verification/NotVefied";
import { GetFreeConsultation } from "../GetFreeConsultation/GetFreeConsultation";
import { ReplayIcon } from "@/app/icons/ReplayIcon";


const PtSerifCaption = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const HomeHero = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [getstarted, setGetStarted] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [verified, setVerified] = useState<boolean>(false);
  const [notVerified, setNotVerified] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  const [isOpenConsultationform, setIsOpenConsultationform] =
  useState<boolean>(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setGetStarted(false);
    setVerified(false);
    setNotVerified(false);
    setReplay(false);
    setIsPlaying(false);
    setCurrentStep(0);
    setOtp(["", "", "", "", "", ""]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setShow(true);
      }, 10);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [replay, setReplay] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setReplay(true);
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleReplayClick = () => {
    setReplay(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];

    if (value === "" || /\d/.test(value)) {
      // Update the OTP value
      newOtp[index] = value;

      // If backspace key is pressed and the input field is empty,
      // focus on the previous input field
      if (value === "" && index > 0) {
        const prevInput = document.getElementById(`otp-input-${index - 1}`);
        if (prevInput) {
          prevInput.focus();
        }
      }

      // If a digit is entered and the current input field is not the last one,
      // focus on the next input field
      if (/\d/.test(value) && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }

      // Update the OTP state
      setOtp(newOtp);
    }
  };


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      // If backspace key is pressed and the current input field is empty,
      // focus on the previous input field
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hasValuesInOtp = otp.some(value => value !== "");
    if (hasValuesInOtp) {
      setVerified(true);
      setNotVerified(false);
    } else {
      setVerified(false);
      setNotVerified(true);
    }
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const steps = [
    <div key={0}>
      <h2>Welcome to PUROCoach</h2>
      <p>Let's get you started by telling us a little bit about you and your business so that we can help you the best way possible.</p>
      <div className={styles.hero_form}>
        <div className={styles.form_control}>
          <Image src={UserFromIcon} alt="fullname" />
          <input type="text" name="fullname" placeholder="Full Name*" />
        </div>
        <div className={styles.form_control}>
          <Image src={EmailFormIcon} alt="Email" />
          <input type="email" name="email" placeholder="Email*" />
        </div>
        <div className={styles.form_control}>
          <Image src={PhoneFormIcon} alt="phone" />
          <input type="tel" name="phone" placeholder="Phone*" />
        </div>
        <div className={styles.form_control}>
          <Image src={ComapanyFormIcon} alt="companyName" />
          <input type="text" name="companyName" placeholder="Company Name*" />
        </div>
        <div className={styles.form_control}>
          <Image src={ComapanyWebsiteFormIcon} alt="companyWebsite" />
          <input type="text" name="companyWebsite" placeholder="Company Website*" />
        </div>
        <div className={styles.form_control}>
          <select name="serviceInquiry">
            <option value="">Service Inquiry*</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
      <button onClick={nextStep}><span>Next</span></button>
    </div>,
    <div key={1}>
      <h2>Verify Your Email</h2>
      <p>We sent a 6 digit security code to the email provided. Please double check spam folders</p>
      <div className={styles.verification_code}>
          {otp.map((value, index) => (
          <div className={styles.form_control} key={index}>
            <input
              id={`otp-input-${index}`}
              type="text"
              value={value}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
            />
          </div>
        ))}
      </div>
      <span className={styles.resend_code}>Resend Code</span>
      <button type="submit" onClick={(e) => handleSubmit(e)}><span>Verify</span></button>
    </div>
  ];

  return (
    <>
      <section className={styles.home_hero}>
        <div className={styles.bg_overlay}></div>
        <div className="container">
          <div className={styles.home_hero_wrap}>
            <div className={`${styles.home_hero_cont} ${PtSerifCaption.className} ${show ? styles.play : ""}`}>
              <div id={styles.section1}>
                <div className={styles.container}>
                  <div className={styles.sec1}>
                    <h1
                      className={`${styles.animate} ${styles.one} ${show ? styles.show : ""
                        }`}
                    >
                      <span>C</span>
                      <span>o</span>
                      <span>n</span>
                      <span>n</span>
                      <span>e</span>
                      <span>c</span>
                      <span>t</span>
                      <span>i</span>
                      <span>n</span>
                      <span>g</span>
                      &nbsp;
                      <span>C</span>
                      <span>u</span>
                      <span>s</span>
                      <span>t</span>
                      <span>o</span>
                      <span>m</span>
                      <span>e</span>
                      <span>r</span>
                      <span>s</span>
                      &nbsp;
                      <span>t</span>
                      <span>o</span>
                      <br />
                      <span>Y</span>
                      <span>o</span>
                      <span>u</span>
                      <span>r</span>
                      &nbsp;
                      <span>B</span>
                      <span>r</span>
                      <span>a</span>
                      <span>n</span>
                      <span>d</span>
                    </h1>
                  </div>
                </div>
              </div>

              <div className={`${PtSerifCaption.className} ${styles.flip_text}`}>
                <span>Inbound Marketing,</span>
                <span>Branding</span>
                <span>&</span>
                <span>Web Development Solutions</span>
              </div>
              <div className={styles.btn_group}>
                <button className={styles.get_started} onClick={() => setGetStarted(true)}>Let’s Get Started</button>
                <button className={`${styles.learn_more} animate-slowbounce`} onClick={openModal}>
                  <span>
                    <IoIosPlay />
                  </span>
                  Learn More
                </button>
              </div>
            </div>
            <div className={styles.home_hero_img}>
              <Image src={PortraitHero} alt="Connecting Customers" />
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.hero_modal}>
          <div className={styles.close} onClick={closeModal}>
            <RxCross1 />
          </div>
          <video ref={videoRef} controls={true}  onEnded={handleVideoEnded} preload="metadata" autoPlay>
            <source src="./assets/video/Video_Promo_1.mp4#t=0.1" type="video/mp4" />
          </video>
          {/* {!isPlaying && (
          <div>
            <button className={styles.play_btn} onClick={handlePlay}> <FaPlay /></button>
          </div>
          )} */}
          {replay && (
            <div className={styles.replay_box}>
              <button onClick={handleReplayClick} className={styles.replay_btn}>
              <ReplayIcon/>
              </button>
              <button onClick={() => {
                setIsOpenConsultationform(true);
                closeModal();
              }} className={`${PtSerifCaption.className} ${styles.schedule_btn}`}>
                <span>
                  schedule your free consultation NOW
                </span>
              </button>
            </div>
          )}
        </div>
      </Modal>

      <Modal isOpen={getstarted} onClose={closeModal}>
        <div className={styles.get_started_modal}>
          <div className={styles.close} onClick={closeModal}>
            <RxCross1 />
          </div>
          {
            verified ? (
              <Verified />
            ) : (
              <>
                {
                  notVerified ? (
                    <NotVefied handleBtn={() => setNotVerified(false)}/>
                  ) : (
                    <form>
                    {steps[currentStep]}
                  </form>
                  )
                }
              </>
            )
          }
        </div>
      </Modal>
      <GetFreeConsultation
            openModal={isOpenConsultationform}
            isOpen={setIsOpenConsultationform}
          />
    </>
  );
};
