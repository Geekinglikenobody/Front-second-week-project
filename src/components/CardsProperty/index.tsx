import React, { useEffect } from "react";
import styles from "./CardsProperty.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProperty } from "../../features/propertySlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./flickity.css";
import logoImg from "../../assets/save.png";

const flickityOptions = {
  initialIndex: 2,
};

const CardsProperty = () => {
  const dispatch = useDispatch();
    const {name} = useParams()

  useEffect(() => {
    dispatch(fetchProperty());
  }, []);
  const filteredPropertystate = useSelector(
    (state) => state.property.filteredProperty
  );
  console.log(filteredPropertystate);
  
  const stateProperty = useSelector((state) => state.property.property.filter((item) => {
    console.log(item)
    
    if(item.typeSell === name) {
        return true
    }
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (filteredPropertystate.length === 0) {
    return (
        <div className={styles.wrapper}>
      <div className={styles.card}>
        {stateProperty.map((item) => (
          <div className={styles.card_item}>
            <Slider {...settings}>
              {item.img.map((res) => (
                <div className={styles.image}>
                  <img src={res} alt="" />
                </div>
              ))}
            </Slider>
            <div className={styles.card_item_info}>
            <Link to={`/fullpage/${item._id}`}>
              <div className={styles.line_1}>
                <div className={styles.namePro}>{item.address}</div>
                <div>
                  <img src={logoImg} height={35} width={35} alt="" />
                </div>
              </div>
              <div className={styles.tip}>
                Тип недвижимости: {item.typeProperty}
              </div>
              <div className={styles.quadrature}>
                Площадь: {item.quadrature} м<sup>2</sup>
              </div>
              <div className={styles.floor}>Этаж: {item.floor}</div>
              <div className={styles.price}>{item.price} млн руб</div>
            </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }
  return (
    <div className={styles.card}>
      {filteredPropertystate.map((item) => (
        <div className={styles.card_item}>
          <img src={item.img[0]} alt="" />
          <div className={styles.card_item_info}>
            <div>{item.typeProperty}</div>
            <div>{item.price}</div>
            <div>{item.rooms}</div>
            <div>{item.quadrature}</div>
            <div>{item.floor}</div>
            <div>{item.address}</div>
            <Link to={`/fullpage/${item._id}`}>
              <button>Посмотреть</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsProperty;
