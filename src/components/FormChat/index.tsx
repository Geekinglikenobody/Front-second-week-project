import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css"

// console.log(styles);


const FormChat = ({ socket }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", user);
    socket.emit("newUser", {user, socketID: socket.id})
    navigate("/chat");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h2>Вход в чат</h2>
      <label htmlFor="user"></label>
      <input
        type="text"
        id="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className={styles.userInput}
      />
      <button type="submit" className={styles.FormChatBtn}>Войти</button>
    </form>
  );
};

export default FormChat;
