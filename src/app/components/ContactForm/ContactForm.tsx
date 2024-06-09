"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import ComapanyFormIcon from "../../../../public/assets/company_name.webp";
import MessageFormIcon from "../../../../public/assets/message.webp";
import EmailFormIcon from "../../../../public/assets/email_name.webp";
import UserFromIcon from "../../../../public/assets/full_name.webp";
import PhoneFormIcon from "../../../../public/assets/phone_name.webp";
import Image from "next/image";

function ContactForm() {
  const [submitInquiryForm, setSubmitInquiryForm] = useState<boolean>(false);

  const handleInquiryForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitInquiryForm(true);
  };
  return (
    <div>
      <div className="get_in_touch_form w-[100%] md:w-[514px] bg-[#fff] p-5 rounded-2xl">
        <h3>YOUR TRUSTED PARTNER!</h3>
        <form>
          <div className="form_control">
            <Image src={UserFromIcon} alt="Full Name" />
            <input
              type="text"
              placeholder="Full Name*"
              className="form_input"
            />
          </div>
          <div className="form_control">
            <Image src={EmailFormIcon} alt="Email" />
            <input type="email" placeholder="Email*" className="form_input" />
          </div>
          <div className="form_control">
            <Image src={PhoneFormIcon} alt="Phone" />
            <input type="tel" placeholder="Phone*" className="form_input" />
          </div>
          <div className="form_control">
            <Image src={ComapanyFormIcon} alt="Company Name" />
            <input
              type="text"
              placeholder="Company Name*"
              className="form_input"
            />
          </div>
          <div className="form_control">
            <select className="form_select">
              <option value="">Service Inquiry*</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <FaAngleDown />
          </div>
          <div className="form_control">
            <Image src={MessageFormIcon} alt="Message" />
            <textarea
              cols={30}
              rows={10}
              className="form_textarea"
              placeholder="Message*"
            ></textarea>
          </div>
          <button className="form_submit" onClick={(e) => handleInquiryForm(e)}>
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
