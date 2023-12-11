import React, {useEffect, useState} from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
const MessageBlock = ({socket}) => {
  const [message, setMessage] = useState("");

  const [typing, setTyping] = useState(true)

  const user = useSelector(state => state.application.user.login)
  const image = useSelector(state => state.application.user.avatar)

  // console.log(image)

  const handleSend = (e) => {
    e.preventDefault()
    if(message.trim() && localStorage.getItem("user")) {
        socket.emit("message", {
            text:message,
            name: user,
            // user:localStorage.getItem("user"),
            id: `${socket.id}-${Math.random()}`,
            socketID: socket.id,
            avatar: image,
        })
    }
    setMessage("")
  }

  const handleChangeInput = (e) => {
    setMessage(e.target.value)
    setTyping(true)
    
}
let inTypingTimeout;
setTimeout(() => {
    setTyping(false)
}, 2000);
clearTimeout(inTypingTimeout)

useEffect(() => {
   socket.emit("typing", `${localStorage.getItem("user")} is typing`)

}, [message.length])


  return (
    <div className={styles.messageBlock}>
      <form className={styles.form} onSubmit={handleSend}>
        <input
          type="text"
          className={styles.userMessage}
          value={message}
          onChange={handleChangeInput}
        />
        <button className={styles.btn} >Сказать</button>
      </form>
    </div>
  );
};

export default MessageBlock;
