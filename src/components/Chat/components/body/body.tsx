import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Body = ({ messages,status }) => {
  console.log(messages);
  const navigate = useNavigate();
  const handleLeave = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  const user = useSelector(state => state.application.user.login)
  return (
    <>
      <header className={styles.header}>
        <button className={styles.btn} onClick={handleLeave}>
          Покинуть чат
        </button>
      </header>
      <div className={styles.container}>
        {messages.map((element) =>
          element.name === user ? (
            <div className={styles.chats} key={element.id}>
              <p className={styles.senderName}>Вы</p>
              <div className={styles.messageSender}>
                <img src={`http://localhost:3030/${element.avatar}`} alt="" className={styles.chat_logo}/>
                <p>{element.text}</p>
              </div>
            </div>
          ) : (
            <div className={styles.chats} key={element.id}>
              <p>{element.name}</p>
              <div className={styles.messageRecipient}>
              <img src={`http://localhost:3030/${element.avatar}`} alt="" className={styles.chat_logo}/>
                <p>{element.text}</p>
              </div>
            </div>
          )
        )}

        <div className={styles.status}>
          <p>{status}</p>
        </div>
      </div>
    </>
  );
};

export default Body;
