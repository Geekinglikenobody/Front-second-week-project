import React from "react";
import styles from "../Footer/Footer.module.css";
import logo from '../../assets/Logo.svg'
import { Link } from "react-router-dom";


const Footer = () => {

  const scrolling = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <div className={styles.mainDiv}>
        <ul>
          <li></li>
          <Link onClick={scrolling} to={"/"} className={styles.logoPlace}><img src={logo} alt="" /></Link>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
