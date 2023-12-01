import React from "react";
import styles from "./Cards.module.css";
import domImg from "../../assets/dom.jpg";
import callPng from "../../assets/call.png";
import favorite from "../../assets/favorite.png";
function Cards() {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.oneCard}>
          <div className={styles.imgDiv}>
            <img
              className={styles.domImg}
              src={domImg}
              alt=""
              width={10}
              height={20}
            />
          </div>
          <div className={styles.contentDiv}>
            <div className={styles.topLine}>
              <p className={styles.haveGarage}>Есть гараж</p>
              <button className={styles.btnFavorite}>
                <img width={"25px"} src={favorite} alt="" />
              </button>
            </div>
            <div className={styles.midLine}>
              <div className={styles.price}>84 000 000 ₽</div>
              <div className={styles.cottageLine}>
                <span className={styles.cottage}>Коттедж •</span>
                <span className={styles.sot}> 77.8 сот.</span>
                <span className={styles.metr}>
                  400 м<sup>2</sup>
                </span>
                <span className={styles.etaj}> • 1 эт.</span>
              </div>
              <div className={styles.addresLine}>
                Московская область, Егорьевское шоссе, р-н Коренево, ул. Чехова
              </div>
            </div>
            <div className={styles.underLine}>
              <button className={styles.png_button}>
                <img
                  className={styles.callPng}
                  src={callPng}
                  width={"18px"}
                  height={"18px"}
                  alt="Описание изображения"
                />
                Показать телефон
              </button>
            </div>
          </div>
        </div>
        {/* <div className={styles.two}>2</div>
        <div className={styles.three}>3</div>
        <div className={styles.four}>4</div>
        <div className={styles.five}>5</div>
        <div className={styles.six}>6</div> */}
      </div>
    </>
  );
}

export default Cards;
