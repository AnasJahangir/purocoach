"use client";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { Modal } from "../Modal/Modal";
import { NotVefied } from "../Verification/NotVefied";
import { Verified } from "../Verification/Verified";
import styles from "./GetFreeConsultation.module.css";
import EmailFormIcon from "../../../../public/assets/email_name.webp";
import UserFromIcon from "../../../../public/assets/full_name.webp";

export const GetFreeConsultation = ({openModal, isOpen}:{openModal: boolean, isOpen: Dispatch<SetStateAction<boolean>>}) => {

  const [verified, setVerified] = useState<boolean>(false);
  const [notVerified, setNotVerified] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  const closeModal = () => {
    isOpen(false);
    setVerified(false);
    setNotVerified(false)
    setCurrentStep(0)
    setOtp(["", "", "", "", "", ""]);
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

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];

    if (value === "" || /\d/.test(value)) {
      newOtp[index] = value;
      if (value === "" && index > 0) {
        const prevInput = document.getElementById(`otp-input-${index - 1}`);
        if (prevInput) {
          prevInput.focus();
        }
      }
      if (/\d/.test(value) && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
      setOtp(newOtp);
    }
  };


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const steps = [
    <div key={0}>
      <h2>Welcome to PUROCoach</h2>
      <p>We’re glad that you’re here! Please enter your name and email address to get you scheduled for your free consultation</p>
      <div className={styles.hero_form}>
        <div className={styles.form_control}>
          <Image src={UserFromIcon} alt="fullname" />
          <input type="text" name="fullname" placeholder="Full Name*" />
        </div>
        <div className={styles.form_control}>
          <Image src={EmailFormIcon} alt="Email" />
          <input type="email" name="email" placeholder="Email*" />
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
  <Modal isOpen={openModal} onClose={closeModal}>
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
)
};
