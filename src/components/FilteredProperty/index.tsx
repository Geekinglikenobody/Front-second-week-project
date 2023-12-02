import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperty, filterProperty } from "../../features/propertySlice";
import styles from "./filterProperty.module.css"

const FilteredProperty = () => {
    const dispatch = useDispatch()
    const [typeProperty, setTypeProperty] = useState("")
    const [rooms, setRooms] = useState("")
    const [minPrice, setMinPrice] = useState("Цена от")
    const [maxPrice, setMaxPrice] = useState("Цена до")
console.log(typeProperty);

    const [filteredProperty, setFilteredProperty] = useState([])
    console.log(maxPrice);
    
    const handleSetTypeProperty = (e) => {
        setTypeProperty(e.target.value)
    }
    const handleSetRooms = (e) => {
        setRooms(e.target.value)
    }

    const handleSetMinPrice = (e) => {
        setMinPrice(e.target.value)
    }

    const handleSetMaxPrice = (e) => {
        setMaxPrice(e.target.value)
    }
    const property = useSelector(state => state.property.property)
    const handleFilter = () => {
        const filter = property?.filter((item => {        
            if(item.typeProperty === typeProperty && item.rooms === rooms && item.price >= minPrice && item.price <= maxPrice) {
                return true
            }
        }))
        setFilteredProperty(filter || [])
      }
    
    useEffect(() => {
        dispatch(fetchProperty())
    }, [dispatch])

    // const filtered = useSelector(state => state.property.property)
    // console.log(filtered);
    
 
    return (
      <>
    <div className={styles.form}>
      <div className={styles.form_item}>
        <h3>
          Тип жилья:
        </h3>
          <div className={styles.select_wrapper}>
            <select className={styles.select} name="type" id="type-select" value={typeProperty} onChange={handleSetTypeProperty}>
              <option value="Квартира" selected>Квартира</option>
              <option value="Дома">Дома</option>
            </select>
          </div>
      </div>

      <div className={styles.form_item}>
        <h3>
          Количество комнат:
        </h3>
          <div className={styles.select_wrapper}>
            <select  className={styles.select} name="type" id="type-select" value={rooms} onChange={handleSetRooms}>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
      </div>

      <div className={styles.form_item}>
        <h3>
          Минимальная цена:
        </h3>
        <input
          type="number"
          name="minPrice"
          value={minPrice}
          placeholder="Цена от"
          onChange={handleSetMinPrice}
          autocomplete="off"
          required/>
      </div>

      <div className={styles.form_item}>
        <h3>
          Максимальная цена:
        </h3>
        <input
          type="number"
          name="maxPrice"
          value={maxPrice}
          placeholder="Цена до"
          onChange={handleSetMaxPrice}
          autocomplete="off"
          required/>
    </div>
      </div>
      <div className={styles.form_item}>
       <button onClick={handleFilter}>Найти</button>
      </div>
    <div>
      {filteredProperty.map(item => <div>dawdwadwad: {item._id}</div>)}
    </div>
      </>
  );
};

export default FilteredProperty;

// item.typeProperty === typeProperty && item.rooms === rooms && item.price > minPrice && item.price < maxPrice)
