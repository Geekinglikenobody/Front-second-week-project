import React, { useEffect, useState } from "react";
import styles from "../Help/Help.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addComplains, fetchComplains } from "../../features/complainSlice";
import { Link } from "react-router-dom";
import MainPage from "../MainPage/Index";
import Footer from "../Footer/Index";

const Help = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.application.user._id);
  // const userName = useSelector((state) => state.application.user.login);

  const [send, setSend] = useState(false);
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const handleValueInput = (e) => {
    setText(e.target.value);
  };

  const handleFAQ = (e) => {
    if (text === "") {
      alert("Введите жалобу ");
    } else {
      e.preventDefault();
      dispatch(addComplains({ text, userId, number }));
      setText("");
      setNumber("");
      setSend(true);
    }
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.viceMain}>
          {send ? (
            <div className={styles.complaintAccepted}>
              <h4 id={styles.thankYou}>
                Ваше обращение принято. Благодарим вас за обратную связь! <br />
                Сделаем всё чтоб сайт был лучше !
              </h4>
              <h4>
                <Link id={styles.onMain} to={"/"} element={<MainPage />}>
                  Вернуться на главную страницу
                </Link>
              </h4>
            </div>
          ) : (
            <div className={styles.appeal}>
              <h2>Обращение</h2>
              <div className={styles.formsButton}>
                <div className={styles.forms}>
                  <form onSubmit={handleFAQ} action="">
                    <input
                      placeholder="Ваше обращение..."
                      type="text"
                      onChange={handleValueInput}
                      value={text}
                    />
                  </form>
                  <form onSubmit={handleFAQ}>
                    <input
                      placeholder="Ваш номер телефона"
                      type="number"
                      onChange={(e) => setNumber(e.target.value)}
                      value={number}
                    />
                  </form>
                </div>
                <button onClick={handleFAQ}>Отправить</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Help;
