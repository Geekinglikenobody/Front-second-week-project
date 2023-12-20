// import React from "react";
import styles from "../Header/Header.module.css";
import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.svg";
// import logotip from "../../assets/log4.png";
import { motion } from "framer-motion";
import { forwardRef, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { exit } from "../../features/applicationSlice";
import { fetchComplains } from "../../features/complainSlice";

const Header = forwardRef(() => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.application.token);
  const user = useSelector((state) => state.application.user);
  const complains = useSelector((state) => state.complaintsReducer.complains);

  useEffect(() => {
    dispatch(fetchComplains());
  }, []);

  const [plu, setPlu] = useState(false);

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
                  <Link to={"/cardsProperty/Купить"}>Купить</Link>
                </li>
                <li>
                  <Link to={"/cardsProperty/Снять"}>Снять</Link>
                </li>
                <li>
                  <Link to={"/sell"}>Продать</Link>
                </li>
                <li className={styles.lastLi}>
                  <Link to={"/sell"}>Сдать</Link>
                </li>
              </ul>
            </div>
            <Link to={"/"} className={styles.logoPlace}>
              <img src={logo} alt="" width={130} height={60} />
            </Link>

            <div className={styles.rightMenu}>
              <ul>
                <li>
                  <img
                    src={`http://localhost:3030/${user?.avatar}`}
                    alt=""
                    className={styles.imageUser}
                    onClick={() => setPlu(!plu)}
                  />
                  <Link id={styles.userName} to={"/"}>
                    {user?.login}
                  </Link>
                </li>
                <li>
                  <Link to={"/favorite"}>
                  Избранное
                  </Link>
                </li>
                <li>
                  {user.admin ? (
                    <Link to={"/complains"}>
                      Заявки{<span>{complains?.length}</span>}
                    </Link>
                  ) : (
                    <Link to={"/help"}>Помощь</Link>
                  )}
                </li>
                <li>
                  <Link to={"/"} onClick={handleClose}>
                    Выйти
                  </Link>
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
                <Link to={"/cardsProperty/Купить"}>Купить</Link>
              </li>
              <li>
                <Link to={"/cardsProperty/Снять"}>Снять</Link>
              </li>
              <li>
                <Link to={"/sell"}>Продать</Link>
              </li>
              <li className={styles.lastLi}>
                <Link to={"/sell"}>Сдать</Link>
              </li>
            </ul>
          </div>
          <Link to={"/"} className={styles.logoPlace}>
            <img src={logo} alt="" width={130} height={60} />
          </Link>

          <div className={styles.rightMenu}>
            <ul>
              <li>
                <Link to={"/signup"}>Регистрация</Link>
              </li>
              <li>
                <Link to={"/signin"}>Войти</Link>
              </li>
              <li>
                <Link to={"/"}>Помощь</Link>
              </li>
              {/* <li className={styles.lastLi}>
                <Link to={"/"}>Новостройки</Link>
              </li> */}
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
