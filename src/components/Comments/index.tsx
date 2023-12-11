import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { addComments, fetchComments, removeComments } from "../../features/commentSlice";
import send from "../../assets/send.png"
const Comments = ({property}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.application.user._id)
    const comments = useSelector(state => state.comments.comments)
    const token = useSelector(state => state.application.token)
    const [text, setText] = useState("")

    const handleAddText = (e) => {
        setText(e.target.value)
    }

    const handleRemoveComment = (e) => {
        dispatch(removeComments(e))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setText("")
        if(text) {
            dispatch(addComments({text,property,user}))
        }
    }

    useEffect(() => {
        dispatch(fetchComments(property))
        window.scrollTo(0,0)
      }, [dispatch])
  return (
    <>
      <div className={styles.comments}>
        <h3>
          Количество комментариев: <span>{comments.length}</span>
        </h3>
        <form action="" onSubmit={handleSubmit}>
          <div className={styles.send_comment}>
            <input
              type="text"
              value={text}
              onChange={handleAddText}
              disabled={!token}
              placeholder={
                !token && "Авторизуйтесь, чтобы комментировать новость"
              }
            />
            <button
              className={text === "" ? styles.send_btn : styles.send_btn_on}
            >
              <img className={styles.send_icon} src={send} alt="" />
              {/* <svg
                className={styles.send_icon}
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> */}
            </button>
          </div>
        </form>
        {comments
          .map((item) => {
            console.log(item)
            
            return (
              <>
                <div className={styles.comment_place}>
                  <img
                    src={`http://localhost:3030/${item.userId.avatar}`}
                    alt=""
                  />
                  <div className={styles.comment_item}>
                    <div className={styles.comment_text}>{item.text}</div>
                    <div className={styles.comment_name}>
                      {item.userId.login}
                    </div>
                  </div>
                  {
                    <button
                      onClick={() => handleRemoveComment(item._id)}
                      className={item.userId._id !== user ? styles.hidden : ""}
                    >
                      x
                    </button>
                  }
                </div>
              </>
            );
          })
          .reverse()}
      </div>
    </>
  );
};

export default Comments;
