import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePropertyInFavorite, fetchFavorites } from "../../features/favoriteSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../CardsProperty/CardsProperty.module.css";
import { Link } from "react-router-dom";
import logoImg from "../../assets/save.png";
import trashBox from "../../assets/icons8-мусор.svg";
const Favorite = () => {
  const dispatch = useDispatch();
  const imgPoint = "i"

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
  const propertyInFavorite = useSelector(
    (state) => state.favorite.favorites.properties
  );
  console.log(propertyInFavorite);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {propertyInFavorite?.map((item) => (
          <div className={styles.card_item}>
            <Slider {...settings}>
              {item.img.map((res) => (
                <div className={styles.image}>
                    {imgPoint === res[0] ? <img src={`http://localhost:3030/${res}`} alt="" /> :<img src={res} alt="" />} 
                </div>
              ))}
            </Slider>
            <div className={styles.card_item_info}>
                <div className={styles.line_1}>
                  <div className={styles.namePro}>{item.address}</div>
                  <div>
                    <img
                    onClick={() => dispatch(deletePropertyInFavorite(item._id))}
                      className={styles.trash_box}
                      src={trashBox}
                      height={35}
                      width={35}
                      alt=""
                    />
                  </div>
                </div>
              <Link to={`/fullpage/${item._id}`}>
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
};

export default Favorite;
