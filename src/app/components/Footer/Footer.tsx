"use client"
import React, { useEffect, useState } from "react";
import Image from "node_modules/next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

// Images
import FooterLogo from "../../../../public/assets/logo.png";
import BestQualityImg from "../../../../public/assets/best_quality.webp";

// Icons
import { HiArrowRight } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaChevronUp } from "react-icons/fa";
import { Modal } from "../Modal/Modal";
import { RxCross1 } from "react-icons/rx";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { NotVefied } from "../Verification/NotVefied";


export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [notVerified, setNotVerified] = useState<boolean>(false);
  const [verified, setVerified] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
  const openModal = () => {
    if(email){
      setError(false)
      setIsModalOpen(true);
    }else{
      setError(true)
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVerified(false);
    setOtp(["", "", "", "", "", ""]);
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


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.clientHeight;

      setIsVisible(scrollTop > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <footer className={styles.main_footer}>
        <div className="container">
          <div className={styles.footer_wrapper}>
            <div className={styles.footer_info}>
              <div className={styles.footer_info_wrap}>
                <Link href={"/"}>
                  <Image src={FooterLogo} alt="Footer Logo" />
                </Link>
                <p>
                  Get on our newsletter email list to be the first to see inspiring
                  content, news and exclusive offers.
                </p>
                <div className={styles.footer_newsletter}>
                  <input type="text" placeholder="Email" className={error ? styles.error_input : ''} onChange={(e) => setEmail(e.target.value)} />
                  <button onClick={openModal}>
                    <HiArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.footer_lists_area}>
              <div className={styles.footer_list}>
                <h4>company</h4>
                <ul>
                  <li>
                    <Link href={"#"}>About US</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Our Mission</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Our Team</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Our Work</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footer_list}>
                <h4>Services</h4>
                <ul>
                  <li>
                    <Link href={"#"}>Inbound Marketing</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Automation</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Web Development</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Business Branding</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Consulting</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footer_list}>
                <div className={styles.footer_list_address}>
                  <h4>ADDRESS</h4>
                  <p>1372 Peachtree Street. Atlanta, GA 30013</p>
                </div>
                <div className={styles.follow_us}>
                  <h4>Follow us</h4>
                  <ul>
                    <li>
                      <Link href="https://www.linkedin.com/company/97397615/admin/feed/posts/"  target="_blank">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.facebook.com/humanecoaching" target="_blank">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/humanecoaching/" target="_blank">
                        <RiInstagramFill />
                      </Link>
                    </li>
                  </ul>
                </div>
                <Image src={BestQualityImg} alt="Best Quality" />
              </div>
            </div>
          </div>
          <p className={styles.copyright}>
            Privacy Policy <strong>© PUROCoach 2024. All rights reserved.</strong>
          </p>
        </div>
        <button className={`${styles.scroll_up_button} ${isVisible ? styles.show : ''}`} onClick={scrollToTop}>
          <FaChevronUp size={22} />
        </button>
      </footer>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.get_started_modal}>
          <div className={styles.close} onClick={closeModal}>
            <RxCross1 />
          </div>
          {
            verified ? (
              <div className={`${styles.verification}`}>
                <span><IoCheckmarkCircleOutline /></span>
                <h2>You’ve Been Subscribed</h2>
                <p>Thank you! You have been subscribed to our newsletter. You can unsubscribe at anytime through your mailbox.</p>
                <button onClick={closeModal}><span>Go back to the home</span></button>
              </div>
            ) : (
              <>
                {
                  notVerified ? (
                    <NotVefied handleBtn={() => setNotVerified(false)}/>
                  ) : (
                <form className={styles.hero_form}>
                <div>
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
              </form>
                  )
                }
              </>
            )
          }
        </div>
      </Modal>
    </>
  );
};

export default Footer;
