import React, { useEffect } from 'react';
import styles from "./CardsProperty.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProperty } from '../../features/propertySlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CardsProperty = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProperty())
    }, [])
    const filteredPropertystate = useSelector(state => state.property.filteredProperty) 
    const stateProperty = useSelector(state => state.property.property)
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    if(filteredPropertystate.length === 0) {
        return ( 
            <div className={styles.card}>
            {stateProperty.map(item => 
            <div className={styles.card_item}>
                    <Slider {...settings}>
                    {item.img.map(res => (
                        <div className={styles.image}>
                            <img src={res} alt="" />
                        </div>
                        ))}

                    </Slider>
                {/* <img src={item.img[0]} alt="" /> */}

                <div className={styles.card_item_info}>
                    <div>{item.typeProperty}</div>
                    <div>{item.price}</div>
                    <div>{item.rooms}</div>
                    <div>{item.quadrature}</div>
                    <div>{item.floor}</div>
                    <div>{item.address}</div>
                    <Link to={`/fullpage/${item._id}`}><button>Посмотреть</button></Link>
                </div>
            </div>
                )}
        </div>
        )
    }
    return (
        <div className={styles.card}>
            {filteredPropertystate.map(item => 
            <div className={styles.card_item}>
                <img src={item.img[0]} alt="" />
                <div className={styles.card_item_info}>
                    <div>{item.typeProperty}</div>
                    <div>{item.price}</div>
                    <div>{item.rooms}</div>
                    <div>{item.quadrature}</div>
                    <div>{item.floor}</div>
                    <div>{item.address}</div>
                    <Link to={`/fullpage/${item._id}`}><button>Посмотреть</button></Link>
                </div>
            </div>
                )}
        </div>
    );
};

export default CardsProperty;