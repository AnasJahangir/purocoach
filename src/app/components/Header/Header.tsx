"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import logo from "/public/assets/PUROCoachLogo.png";
import mobileNavMenu from "/public/assets/mobile_nav_menu.svg";
import { Red_Hat_Display } from "next/font/google";
import { RxCross1, RxCrossCircled } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import { Modal } from "../Modal/Modal";
import UserFromIcon from "../../../../public/assets/full_name.webp";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { GetFreeConsultation } from "../GetFreeConsultation/GetFreeConsultation";

const PtSerifCaption = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalClientLogin, setIsModalClientLogin] = useState<boolean>(false);
  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalClientLogin(false);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    setError({
      username: "Invalid username or password - try again!",
      password: "Invalid username or password - try again!",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`${PtSerifCaption.className} ${styles.header} ${
          isScrolled ? styles.scrolled : ""
        }`}
      >
        <div className="container">
          <div className={styles.header_wrap}>
            <div>
              {/* logo */}
              <div className={styles.logo}>
                <Link href={"/"}>
                  <Image src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/* Desktop Navigation Bar */}
            <nav className={styles.desktop_menu}>
              <ul className={` ${styles.menu}`}>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/portfolio",
                      query: { showInbound: false },
                    }}
                  >
                    Our Work <FaAngleDown />
                  </Link>
                  <div className={styles.dropdown}>
                    <Link
                      href={{
                        pathname: "/portfolio",
                        query: { showInbound: false },
                      }}
                    >
                      Portfolio
                    </Link>
                    <Link href="/case-studies">Case Studies</Link>
                    <Link href="/client-testimonials">Client Testimonials</Link>
                  </div>
                </li>
                <li>
                  <Link href="/packages">Packages</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className={styles.client_login}>
              <button onClick={() => setIsModalClientLogin(true)}>
                <AiOutlineUser /> <span>CLIENT LOGIN</span>
              </button>
            </div>
            <div className={styles.free_consultation_button}>
              <button onClick={openModal}>
                <span>Get A Free Consultation</span>
              </button>
            </div>
            {/* Mobile Navigation Menu */}
            <div className={styles.mobileNavMenu}>
              <Image
                src={mobileNavMenu}
                alt=""
                onClick={() => setOpenMenu(!openMenu)}
              />
            </div>
            <div
              className={`${styles.mobile_navigation} ${
                openMenu ? styles.active : ""
              }`}
            >
              <div className={styles.header_top}>
                <Link href={"/"}>
                  <Image src={logo} alt="" />
                </Link>
                <RxCrossCircled onClick={() => setOpenMenu(false)} />
              </div>
              <nav>
                <ul className={`${styles.mobile_menu}`}>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <p>
                      Our Work <FaAngleDown />
                    </p>
                    <div className={styles.dropdown}>
                      <Link
                        onClick={() => setOpenMenu(false)}
                        href={{
                          pathname: "/portfolio",
                          query: { showInbound: false },
                        }}
                      >
                        Portfolio
                      </Link>
                      <Link
                        onClick={() => setOpenMenu(false)}
                        href="/case-studies"
                      >
                        Case Studies
                      </Link>
                      <Link
                        onClick={() => setOpenMenu(false)}
                        href="/client-testimonials"
                      >
                        Client Testimonials
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link href="/packages">Packages</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
                <div className={styles.client_login}>
                  <button onClick={() => setIsModalClientLogin(true)}>
                    <AiOutlineUser /> <span>CLIENT LOGIN</span>
                  </button>
                </div>
                <button onClick={openModal}>
                  <a>Get A Free Consultation</a>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <GetFreeConsultation openModal={isModalOpen} isOpen={setIsModalOpen} />
      <Modal isOpen={isModalClientLogin} onClose={closeModal}>
        <div className={styles.get_started_modal}>
          <div className={styles.close} onClick={closeModal}>
            <RxCross1 />
          </div>
          <form>
            <div>
              <h2>Welcome to PUROCoach</h2>
              <p>
                We're glad that you're here! Please enter your username and
                password for login.
              </p>
              <div className={styles.hero_form}>
                <div className={styles.form_control}>
                  <Image src={UserFromIcon} alt="username" />
                  <input type="text" name="username" placeholder="Username*" />
                </div>
                {error.username && (
                  <span className={styles.error}>{error.username}</span>
                )}
                <div className={styles.form_control}>
                  <RiLockPasswordFill />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password*"
                  />
                </div>
                {error.password && (
                  <span className={styles.error}>{error.password}</span>
                )}
              </div>
              <div className={styles.forget_password_text}>
                <Link href={"#"} className={styles.resend_code}>
                  Forget Password?
                </Link>
              </div>
              <button type="submit" onClick={(e) => handleLogin(e)}>
                <span>Login</span>
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Header;
