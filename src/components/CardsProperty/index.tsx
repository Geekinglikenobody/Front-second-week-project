import React from 'react';
import styles from "./CardsProperty.module.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const CardsProperty = () => {
    const filteredPropertystate = useSelector(state => state.property.filteredProperty) 
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