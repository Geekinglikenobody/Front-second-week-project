// import React from "react";
import styles from "../Header/Header.module.css";
import logo from "../../assets/Logo.svg";
// import logotip from "../../assets/log4.png";
import { motion } from "framer-motion";
import { forwardRef, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { exit } from "../../features/applicationSlice";

const Header = forwardRef(() => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.application.token);
  const user = useSelector((state) => state.application.user);
  const handleClose = () => {
    dispatch(exit());
  };
  const textAnimation = {
    hidden: (custom) => ({
      scaleX: 0,
      opacity: 0,
      transition: { delay: custom * 2 },
    }),
    visible: (custom) => ({
      scaleX: 1,
      opacity: 1,
    }),
  };

  if (token) {
    return (
      <>
        <motion.div
          viewport={{ amount: 0.2 }}
          custom={3}
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
          className={styles.mainDiv}
        >
          <header>
            <div className={styles.leftMenu}>
              <ul>
                <li>
                  <Link to={"/cardsProperty"}>Купить</Link>
                </li>
                <li>
                  <Link to={"/"}>Снять</Link>
                </li>
                <li>
                  <Link to={"/"}>Продать</Link>
                </li>
                <li className={styles.lastLi}>
                  <Link to={"/"}>Сдать</Link>
                </li>
              </ul>
            </div>
            <Link to={"/"} className={styles.logoPlace}>
              <img src={logo} alt="" width={130} height={60} />
            </Link>

            <div className={styles.rightMenu}>
              <ul>
                <li>
                  <Link to={"/signup"}>{user.login}</Link>
                  <img
                    src={`http://localhost:3030/${user.avatar}`}
                    alt=""
                    width={50}
                    height={50}
                  />
                </li>
                <li>
                  <Link to={"/"} onClick={handleClose}>
                    Выйти
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>Помощь</Link>
                </li>
                <li>
                  <Link to={"/"}>Ипотека</Link>
                </li>
                <li className={styles.lastLi}>
                  <Link to={"/"}>Навостройки</Link>
                </li>
              </ul>
            </div>
            {/* <div className={styles.form}>
              <input
                placeholder="Введите название улицы или города"
                type="text"
                className={styles.input}
              />
              <button className={styles.btnSearch}>Найти</button>
            </div> */}
          </header>
        </motion.div>
      </>
    );
  }
  return (
    <>
      <motion.div
        viewport={{ amount: 0.2 }}
        custom={3}
        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
        className={styles.mainDiv}
      >
        <header>
          <div className={styles.leftMenu}>
            <ul>
              <li>
                <Link to={"/cardsProperty"}>Купить</Link>
              </li>
              <li>
                <Link to={"/"}>Снять</Link>
              </li>
              <li>
                <Link to={"/"}>Продать</Link>
              </li>
              <li className={styles.lastLi}>
                <Link to={"/"}>Сдать</Link>
              </li>
            </ul>
          </div>
          <Link to={"/"} className={styles.logoPlace}>
            <img src={logo} alt="" width={130} height={60} />
          </Link>

          <div className={styles.rightMenu}>
            <ul>
              <li>
                <Link to={"/signup"}>Войти</Link>
              </li>
              <li>
                <Link to={"/"}>Помощь</Link>
              </li>
              <li>
                <Link to={"/"}>Ипотека</Link>
              </li>
              <li className={styles.lastLi}>
                <Link to={"/"}>Навостройки</Link>
              </li>
            </ul>
          </div>
          {/* <div className={styles.form}>
            <input
              placeholder="Введите название улицы или города"
              type="text"
              className={styles.input}
            />
            <button className={styles.btnSearch}>Найти</button>
          </div> */}
        </header>
      </motion.div>
    </>
  );
});

export default Header;
export const MHeader = motion(Header);
