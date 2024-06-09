"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Red_Hat_Display } from "next/font/google";

// Components
import { Faq } from "./components/Faq/Faq";
import { MakeBetter } from "./components/MakeBetter/MakeBetter";
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs";
import { HomeHero } from "./components/HomeHero/HomeHero";
import { OurProcess } from "./components/OurProcess/OurProcess";
import { Approach } from "./components/Approach/Approach";

// Images
import BusinessGrowth1 from "../../public/assets/business_growth1.webp";
import BusinessGrowth2 from "../../public/assets/business_growth2.webp";
import BusinessGrowth3 from "../../public/assets/business_growth3.webp";
import GetInTouchImg from "../../public/assets/get_in_touch.webp";
import EmailFormIcon from "../../public/assets/email_name.webp";
import UserFromIcon from "../../public/assets/full_name.webp";
import PhoneFormIcon from "../../public/assets/phone_name.webp";
import ComapanyFormIcon from "../../public/assets/company_name.webp";
import MessageFormIcon from "../../public/assets/message.webp";
import EmailIcon from "../../public/assets/email.svg";
import PhoneIcon from "../../public/assets/phone.svg";
import LocationIcon from "../../public/assets/location.svg";
import SeoOptimizationIcon from "../../public/assets/seo_optimization.svg";
import AutomationIcon from "../../public/assets/automation.svg";
import ContentCreationIcon from "../../public/assets/content_creation.svg";
import BrandingIcon from "../../public/assets/branding.svg";
import SocialMediaIcon from "../../public/assets/social_media.svg";
import DesignIcon from "../../public/assets/design.svg";
import BrandVisibility from "../../public/assets/Brand-Visibility.gif";

// External Imports
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import { FaAngleDown } from "react-icons/fa6";
import { Counter } from "./components/Counter/Counter";
import { KeyToSuccess } from "./components/KeyToSuccess/KeyToSuccess";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Modal } from "./components/Modal/Modal";
import { RxCross1 } from "react-icons/rx";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { GetFreeConsultation } from "./components/GetFreeConsultation/GetFreeConsultation";

const RedHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  // Business Growth Counter
  const businessGrowthRef = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [submitInquiryForm, setSubmitInquiryForm] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (businessGrowthRef.current) {
      observer.observe(businessGrowthRef.current);
    }

    return () => {
      if (businessGrowthRef.current) {
        observer.unobserve(businessGrowthRef.current);
      }
    };
  }, []);

  const [readMoreBrandVisibility, setReadMoreBrandVisibility] =
    useState<boolean>(false);

  const [isOpenTrustedPartner, setIsOpenTrustedPartner] =
    useState<boolean>(false);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const [isOpenConsultationform, setIsOpenConsultationform] =
    useState<boolean>(false);

  const closeModal = () => {
    setIsOpenTrustedPartner(false);
    setIsSubmited(false);
    setSubmitInquiryForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit the form data
    setIsSubmited(true);
  };

  const handleInquiryForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitInquiryForm(true)
  };

  return (
    <div>
      {/* Hero */}
      <HomeHero />
      {/* Services */}
      <section className={`${styles.services} ${RedHatDisplay.className}`}>
        <div className={styles.by_overlay}></div>
        <div className="container">
          <h2>Committed to Delivering Superior Quality and Results</h2>
          <div className={styles.services_box}>
            <div className={styles.services_item} data-aos="fade-right">
              <Image src={SeoOptimizationIcon} alt="SEO Optimization" />
              <h3>SEO Optimization</h3>
              <p>
                Boost Your Rankings and Profits with a Search Engine
                Optimization Partner.
              </p>
            </div>
            <div className={styles.services_item} data-aos="fade-down">
              <Image src={AutomationIcon} alt="Automation" />
              <h3>Automation</h3>
              <p>
                Send Emails That Resonate with Your Audience and Lead Them to
                Convert.
              </p>
            </div>
            <div className={styles.services_item} data-aos="fade-left">
              <Image src={ContentCreationIcon} alt="Content Creation" />
              <h3>Content Creation</h3>
              <p>
                Get Your Audience’s Attention with Eye-Catching and Engaging
                Content.
              </p>
            </div>
            <div className={styles.services_item} data-aos="fade-right">
              <Image src={BrandingIcon} alt="Branding" />
              <h3>Branding</h3>
              <p>Let Us Unleash the Power of Your Brand Across Channels.</p>
            </div>
            <div className={styles.services_item} data-aos="fade-up">
              <Image src={SocialMediaIcon} alt="Social Media" />
              <h3>Social Media</h3>
              <p>
                Build Loyalty with Your Audience Through Authentic Interactions
                and Content.
              </p>
            </div>
            <div className={styles.services_item} data-aos="fade-left">
              <Image src={DesignIcon} alt="Web Design and Development" />
              <h3>Web Design and Development</h3>
              <p>High-Converting Custom Web Design and Development Solutions</p>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Visibility */}
      <section className={styles.brand_visibility}>
        <div className="container">
          <div className={styles.brand_visibility_wrap}>
            <div className={styles.brand_visibility_img}>
              <Image src={BrandVisibility} alt="Brand Visibility" />
            </div>
            <div className={styles.brand_visibility_cont}>
              <div className={RedHatDisplay.className}>
                <h2 data-aos="fade-left">
                  Brand Visibility, Web Traffic, Lead Conversion - Always
                  Deliver!
                </h2>
              </div>
              <p data-aos="fade-right">
                As a business owner, your brand must tell your target audience a
                captivating and memorable story. At PUROCoach, we help you
                achieve just that.
              </p>
              <div className={styles.mobile_data}>
                {!readMoreBrandVisibility && (
                  <button onClick={() => setReadMoreBrandVisibility(true)}>
                    Read More <LiaAngleRightSolid />
                  </button>
                )}
                <div
                  className={styles.mobile_info}
                  style={readMoreBrandVisibility ? { display: "block" } : {}}
                >
                  <p data-aos="fade-right">Our team of elite experts...</p>
                  <ul data-aos="fade-right">
                    <li>
                      Helps you craft a unique brand identity and story brand
                      that connects.
                    </li>
                    <li>
                      Takes over all your marketing automation efforts so you
                      can focus on your clients.
                    </li>
                    <li>
                      Creates stunning, custom websites and web mobile apps to
                      attract and engage your target audience and existing
                      customers.
                    </li>
                  </ul>
                  <p data-aos="fade-right">
                    Connect with us and begin to attract, engage, and retain
                    clients like never before.
                  </p>
                </div>
              </div>
              <button
                data-aos="fade-up"
                className={styles.connect_expert}
                onClick={() => setIsOpenTrustedPartner(true)}
              >
                <span>Connect with Our Experts</span>
              </button>
            </div>
          </div>
        </div>
        <Modal isOpen={isOpenTrustedPartner} onClose={closeModal}>
          <div className={styles.trusted_partner_modal}>
            <div className={styles.close} onClick={closeModal}>
              <RxCross1 />
            </div>
            {isSubmited ? (
              <div className={`${styles.verification} ${styles.verified}`}>
                <span>
                  <IoCheckmarkCircleOutline />
                </span>
                <h2>Your info has been submitted</h2>
                <p>We will contact you within 72hrs to discuss your inquiry</p>
                <button onClick={closeModal}>
                  <span>Back to Home</span>
                </button>
              </div>
            ) : (
              <form className={styles.hero_form}>
                <h2>YOUR TRUSTED PARTNER!</h2>
                <p>
                  We're happy to help you with all your marketing, branding and
                  web development needs. Send us your inquiry!
                </p>
                <div className={styles.form_box}>
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
                </div>
                <button type="submit" onClick={(e) => handleSubmit(e)}>
                  <span>SUBMIT</span>
                </button>
              </form>
            )}
          </div>
        </Modal>
      </section>
      {/* Journey */}
      <section className={styles.journey}>
        <div className={styles.by_overlay}></div>
        <div className="container">
          {/* two_box_cont  */}
          <div className={styles.two_box_cont}>
            <div className={styles.box_wrap} data-aos="fade-right">
              <div className={RedHatDisplay.className}>
                <h2>Don't Chase New Clients; We Help Them Find You</h2>
              </div>
              <p>
                Our army of elite marketing strategists, brand consultants,
                designers, and developers will take your business to new
                heights. Tell us your vision, and we'll get your business
                noticed, generate leads, and win customers.
              </p>
              <Link
                href={{
                  pathname: "/portfolio",
                  query: { showInbound: true },
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span>View Our Work</span>
              </Link>
            </div>
            <span className={styles.verticle_line_vector}></span>
            <div className={styles.box_wrap} data-aos="fade-left">
              <div className={RedHatDisplay.className}>
                <h2>Let Us Do the Work to Get More Done</h2>
              </div>
              <p>
                We allow you the freedom to concentrate on providing top-notch
                services to your clients without worrying about boosting
                conversions or thinking of the perfect call to action.
              </p>
              <Link
                href="/client-testimonials"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <span>See What Our Clients Have to Say</span>
              </Link>
            </div>
          </div>
          {/* Growth to your business */}
          <div className={styles.business_growth}>
            <div className={styles.business_growth_top_area}>
              <h2>
                We Run The Engine <br /> That Drives Growth to Your Business
              </h2>
              <div className={styles.business_growth_list}>
                <div className={styles.business_growth_item}>
                  <Image
                    src={BusinessGrowth1}
                    alt="Tailored Branding Strategies To Drive Engagement"
                    data-aos="fade-right"
                  />
                  <h3 data-aos="fade-left">
                    Tailored Branding Strategies To Drive Engagement
                  </h3>
                  <span
                    className={`${styles.horizontal_line} ${styles.horiz_line1}`}
                  ></span>
                  <span className={styles.horizontal_line}></span>
                </div>
                <div className={styles.business_growth_item}>
                  <Image
                    src={BusinessGrowth2}
                    alt="Effective Marketing Campaigns To Generate Growth"
                    data-aos="fade-down"
                  />
                  <h3 data-aos="fade-up">
                    Effective Marketing Campaigns To Generate Growth
                  </h3>
                  <span
                    className={`${styles.horizontal_line} ${styles.horiz_line1}`}
                  ></span>
                  <span className={styles.horizontal_line}></span>
                </div>
                <div className={styles.business_growth_item}>
                  <Image
                    src={BusinessGrowth3}
                    alt="Custom Web Design Solutions To Drive Conversions"
                    data-aos="fade-left"
                  />
                  <h3 data-aos="fade-right">
                    Custom Web Design Solutions To Drive Conversions
                  </h3>
                  <span
                    className={`${styles.horizontal_line} ${styles.horiz_line1}`}
                  ></span>
                  <span className={styles.horizontal_line}></span>
                </div>
              </div>
            </div>
            <div
              className={styles.business_growth_bottom_area}
              ref={businessGrowthRef}
            >
              <div className={styles.counter_item}>
                <span className={styles.startup_text}>
                  From <strong>Startups</strong>
                  <br /> to the top
                </span>
                <p>
                  <span>
                    <Counter value={500} visible={isVisible} />
                  </span>{" "}
                  Fortune Companies
                </p>
              </div>
              <div className={styles.counter_item}>
                <p>
                  <span>
                    {" "}
                    <Counter value={97} visible={isVisible} />%
                  </span>{" "}
                  Customer <strong>Success</strong> Rate
                </p>
              </div>
              <div className={styles.counter_item}>
                <p>
                  Up to{" "}
                  <span>
                    {" "}
                    <Counter value={320} visible={isVisible} />%
                  </span>{" "}
                  of <strong>Return</strong> on Investment
                </p>
              </div>
            </div>
          </div>
          {/* Inbound Approach */}
          <Approach />
          <div className={styles.mobile_btn}>
            <button
              onClick={() => {
                setIsOpenConsultationform(true);
                closeModal();
              }}
            >
              Let's Scale Your Business
            </button>
          </div>
          <GetFreeConsultation
            openModal={isOpenConsultationform}
            isOpen={setIsOpenConsultationform}
          />
        </div>
      </section>
      {/* MakeBetter section */}
      <MakeBetter />
      {/* OurProcess */}
      <OurProcess />
      {/* WhyChooseUs */}
      <WhyChooseUs />
      {/* Key to success */}
      <KeyToSuccess />
      {/* FAQ section*/}
      <Faq />
      {/* Get In Touch */}
      <section className={styles.get_in_touch}>
        <div className={styles.by_overlay}></div>
        <div
          className={`${styles.outer_shape} ${styles.outer_shape_top}`}
        ></div>
        <div
          className={`${styles.outer_shape} ${styles.outer_shape_bottom}`}
        ></div>
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
                <button className={styles.form_submit} onClick={(e) => handleInquiryForm(e)}>
                  <span>Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <Modal isOpen={submitInquiryForm} onClose={closeModal}>
        <div className={styles.trusted_partner_modal}>
          <div className={styles.close} onClick={closeModal}>
            <RxCross1 />
          </div>
          <div className={`${styles.verification}`}>
                <span><IoCheckmarkCircleOutline /></span>
                <h2>Your info has been submitted</h2>
                <p>We will contact you within 72hrs to discuss your inquiry</p>
                <button onClick={closeModal}><span>Back to Home</span></button>
              </div>
        </div>
      </Modal>
      </section>
    </div>
  );
}
