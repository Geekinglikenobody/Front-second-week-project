import React, { useEffect } from "react";
import styles from "../Complaint/Complaint.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteComplains, fetchComplains } from "../../features/complainSlice";
import Footer from "../Footer/Index";

const Complaint = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.complaintsReducer.isLoading);
  const complains = useSelector((state) => state.complaintsReducer.complains);
  const complains2 = useSelector((state) => state.complaintsReducer.complains);
  const userLogin = useSelector((state) => state.application.user.login);
  console.log(complains2, "asdsad");

  const handleDeleter = (_id) => {
    dispatch(deleteComplains(_id));
    // dispatch(fetchComplains());
  };

  // useEffect(() => {
  //   dispatch(fetchComplains());
  // }, []);

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.viceMain}>
          {complains.map((element, index) => (
            <div className={styles.divOfComplain} key={element._id}>
              <h3 id={styles.complainersName}>
                {element.userId.login} - {element.number}
              </h3>
              <div className={styles.complain}>
                <p>{element.text}</p>
              </div>
                <button onClick={() => handleDeleter(element._id)}>❌</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Complaint;
