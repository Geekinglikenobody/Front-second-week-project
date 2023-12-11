import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSingIn } from "../../features/applicationSlice";
import { useNavigate } from "react-router-dom";
import styles from "../SignIn/SignIn.module.scss";
import { motion } from "framer-motion";
const SingIn = () => {
  // console.log(styles);

  const singingIn = useSelector((state) => state.application.singingIn);
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSingIn = (e) => {
    e.preventDefault();
    dispatch(authSingIn({ login, password }));
  };

  const handleSetName = (e) => {
    setLogin(e.target.value);
  };

  const handleSetPass = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (singingIn === true) {
      navigate("/");
    }
  }, [singingIn]);


  const icon = {
    hidden: (custom) => ({
      y: 700,
      opacity: 0,
      transition: {
        delay: custom * 0.1,
      },
    }),
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <form onSubmit={handleSingIn} className={styles.login}>
      <motion.div
        custom={1}
        // whileInView="visible"
        animate="visible"
        initial="hidden"
        variants={icon}
        className={styles.loginForma}
      >
        <input
          type="text"
          value={login}
          placeholder="LOGIN"
          onChange={handleSetName}
        />
        <input
          type="password"
          value={password}
          placeholder="PASSWORD"
          onChange={handleSetPass}
        />
        <button>Войти</button>
      </motion.div>
    </form>
  );
};

export default SingIn;
