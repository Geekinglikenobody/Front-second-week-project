import React from "react";
import {
  YMaps,
  Map,
  Panorama,
  TypeSelector,
  TrafficControl,
  SearchControl,
} from "react-yandex-maps";
import styles from "./Sell.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProperty, fetchProperty } from "../../features/propertySlice";

const Sell = () => {
  const dispatch = useDispatch();

  const [typeSell, setTypeSell] = useState("Продажа");
  const [address, setAddress] = useState("");
  const [typeFloor, setTypeFloor] = useState("Квартира");
  const [rooms, setRooms] = useState("");
  const [quadrature, setQuadrature] = useState("");
  const [typeRemont, setTypeRemont] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState([]);

  console.log("images", images);

  const handleAddAnnounc = () => {
    dispatch(
      addProperty({
        typeSell,
        address,
        typeFloor,
        rooms,
        quadrature,
        typeRemont,
        price,
        desc,
       images,
      })
    );

  };

  return (
    <div className={styles.realMainDiv}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.con_h1}>Моё объявление</h1>
        </div>

        <div className={styles.cont}>
          <div className={styles.sell}>
            <button
              className={`${styles.typeSell} ${
                typeSell === "Продажа" ? styles.typeSellActive : ""
              }`}
              onClick={() => setTypeSell("Продажа")}
            >
              Продажа
            </button>
            <button
              onClick={() => setTypeSell("Аренда")}
              className={`${styles.typeSell} ${
                typeSell === "Аренда" ? styles.typeSellActive : ""
              }`}
            >
              Аренда
            </button>
          </div>
          <div className={styles.h3}>
            <h3>Тип недвижимости</h3>
            <div className={styles.fl}>
              <button
                className={`${styles.typeFloor} ${
                  typeFloor === "Квартира" ? styles.typeFloorActive : ""
                }`}
                onClick={() => setTypeFloor("Квартира")}
              >
                Квартира
              </button>
              <button
                onClick={() => setTypeFloor("Дом")}
                className={`${styles.typeFloor} ${
                  typeFloor === "Дом" ? styles.typeFloorActive : ""
                }`}
              >
                Дом
              </button>
            </div>
          </div>
          <div className={styles.adr1}>
            <div className={styles.adh3}>
              <h3>Адресс</h3>
            </div>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={styles.inp}
              type="text"
              placeholder="Населенный пункт, улица, дом, корпус"
            />

            <div className={styles.map}>
              <div className={styles.map2}>
                {" "}
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A98080b813d0f8167c079938fa46e1b9d2406f73da4932e1d7e33c7bfc91127e2&amp;source=constructor"
                  width="610"
                  height="500"
                  frameBorder="0"
                  title="map"
                ></iframe>
              </div>
            </div>
          </div>
          <div>
            

            <div className={styles.countNam}>
              <h3>Число комнат</h3>
            </div>
            <div>
              <input
                className={styles.inproom}
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                type="number"
              />
            </div>
          </div>
          <div className={styles.apr}>
            <div className={styles.type}>
              <h3>Площадь</h3>
              <input
                className={styles.inp_s}
                value={quadrature}
                onChange={(e) => setQuadrature(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <h3>Этаж</h3>
              <input className={styles.inp_f} type="text" />
            </div>
          </div>

          <select
            className={styles.sel}
            onChange={(e) => setTypeRemont(e.target.value)}
          >
            <option disabled>Выберите тип ремонта</option>
            <option value="Косметический ремонт">Косметический ремонт</option>
            <option selected value="Капитальный ремонт ">
              Капитальный ремонт{" "}
            </option>
            <option value="Дизайнерский ремонт">Дизайнерский ремонт</option>
            <option value="Элитный ремонт">Элитный ремонт</option>
          </select>

          <div>
            <div className={styles.op}>
              <h3>Описание</h3>
            </div>
            <div>
              <div>
                <textarea
                  className={styles.textare}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.foto}>
            <h3>Фотографии: {images.length}</h3>
          </div>
          <input
            onChange={(e) => setImages([...images, e.target.files[0]])}
            hidden={true}
            id="file"
            type="file"
          />
          <label className={styles.lab} style={{}} htmlFor="file">
            Загрузить фото
          </label>
        </div>
        <div>
          <div>
            
            <div className={styles.texh3}>
              <h3>Цена недвижимости</h3>
            </div>
            <input
              className={styles.inp_price}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
            />
          </div>
        </div>
        <div className={styles.sp}>
          <div>
            <span className={styles.span_t}>
              Нажимая кнопку "Разместить объявление", вы отправляете запрос на
              бесплатное размещение объявления на сайте и соглашаетесь со
              стоимостью услуг компании в случае проведения сделки
            </span>
          </div>
          <div className={styles.span_up}>
            <button onClick={handleAddAnnounc} className={styles.btn6}>
              Разместить объявление
            </button>
          </div>
        </div>
      </div>
      <div className={styles.image}></div>
    </div>
  );
};

export default Sell;
