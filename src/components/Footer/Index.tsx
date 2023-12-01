import React from "react";
import styles from "../Footer/Footer.module.css";
import logo from '../../assets/Logo.svg'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <ul>
          <li></li>
          <Link to={"/"}><img src={logo} alt="" /></Link>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
