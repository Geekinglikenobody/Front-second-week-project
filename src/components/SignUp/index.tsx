import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSingUp } from "../../features/applicationSlice";
import styles from "./sign.module.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  const singingUp = useSelector((state) => state.application.singingUp);
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();

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

  const handleSetName = (e) => {
    setLogin(e.target.value);
  };

  const handleSetPass = (e) => {
    setPassword(e.target.value);
  };

  const handleSingUp = (e) => {
    e.preventDefault();
    dispatch(authSingUp({ login, password, avatar }));
  };
  useEffect(() => {
    if (singingUp === true) {
      navigate("/signin");
    }
  }, [singingUp]);
  return (
    <form className={styles.login} onSubmit={handleSingUp}>
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
          placeholder="NAME"
          onChange={handleSetName}
        />
        <input
          type="password"
          value={password}
          placeholder="PASSWORD"
          onChange={handleSetPass}
        />
        <div className={styles.fileinput}>
          <input
            onChange={(e) => setAvatar(e.target.files[0])}
            type="file"
            id="file"
            className={styles.file}
          />
          <label htmlFor="file">Выбрать файл</label>
          <button>Регистрация</button>
        </div>
      </motion.div>
    </form>
  );
};

export default SignUp;
