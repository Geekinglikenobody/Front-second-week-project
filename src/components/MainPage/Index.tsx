import React from "react";
import styles from "../MainPage/MainPage.module.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useViewportScroll,
} from "framer-motion";

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

const MainPage = () => {
  const appartments = [
    {
      imgSrc: [
        "https://www.eremont.ru/upload/iblock/a7f/3u1wrdidxhnaupj3g6vpj0smmsubm04g/Oblozhka-Obekta.jpg",
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.glenwoodnyc.com/wp-content/uploads/2022/05/2-JSP-LOBBY-01-02-1280.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZh1Lj46KrAH-f81JmrZv1Frl1ZHq1Fz19Zg&usqp=CAU",
      ],
      rooms: "Количество комнат - 4",
      typeSell: "Продажа",
      quadrature: "Квадратура - 126",
      floor: "Этаж - 4",
      address: "улица Льва яшина",
      price: "Цена - 1600000",
      typeRemont: "Тип ремонта - Euro",
    },
    {
      imgSrc: [
        "https://www.eremont.ru/upload/iblock/a7f/3u1wrdidxhnaupj3g6vpj0smmsubm04g/Oblozhka-Obekta.jpg",
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.glenwoodnyc.com/wp-content/uploads/2022/05/2-JSP-LOBBY-01-02-1280.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZh1Lj46KrAH-f81JmrZv1Frl1ZHq1Fz19Zg&usqp=CAU",
      ],
      rooms: "Количество комнат - 4",
      typeSell: "Продажа",
      quadrature: "Квадратура - 126",
      floor: "Этаж -  4",
      address: "улица Льва яшина",
      price: "Цена - 1600000",
      typeRemont: "Тип ремонта - Euro",
    },
    {
      imgSrc: [
        "https://www.eremont.ru/upload/iblock/a7f/3u1wrdidxhnaupj3g6vpj0smmsubm04g/Oblozhka-Obekta.jpg",
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.glenwoodnyc.com/wp-content/uploads/2022/05/2-JSP-LOBBY-01-02-1280.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZh1Lj46KrAH-f81JmrZv1Frl1ZHq1Fz19Zg&usqp=CAU",
      ],
      rooms: "Количество комнат - 4",
      typeSell: "Продажа",
      quadrature: "Квадратура - 126",
      floor: "Этаж -  4",
      address: "улица Льва яшина",
      price: "Цена - 1600000",
      typeRemont: "Тип ремонта - Euro",
    },
    {
      imgSrc: [
        "https://www.eremont.ru/upload/iblock/a7f/3u1wrdidxhnaupj3g6vpj0smmsubm04g/Oblozhka-Obekta.jpg",
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.glenwoodnyc.com/wp-content/uploads/2022/05/2-JSP-LOBBY-01-02-1280.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZh1Lj46KrAH-f81JmrZv1Frl1ZHq1Fz19Zg&usqp=CAU",
      ],
      rooms: "Количество комнат - 4",
      typeSell: "Продажа",
      quadrature: "Квадратура - 126",
      floor: "Этаж -  4",
      address: "улица Льва яшина",
      price: "Цена - 1600000",
      typeRemont: "Тип ремонта - Euro",
    },
    {
      imgSrc: [
        "https://www.eremont.ru/upload/iblock/a7f/3u1wrdidxhnaupj3g6vpj0smmsubm04g/Oblozhka-Obekta.jpg",
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.glenwoodnyc.com/wp-content/uploads/2022/05/2-JSP-LOBBY-01-02-1280.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZh1Lj46KrAH-f81JmrZv1Frl1ZHq1Fz19Zg&usqp=CAU",
      ],
      rooms: "Количество комнат - 4",
      typeSell: "Продажа",
      quadrature: "Квадратура - 126",
      floor: "Этаж -  4",
      address: "улица Льва яшина",
      price: "Цена - 1600000",
      typeRemont: "Тип ремонта - Euro",
    },
    {
      imgSrc: [
        "https://www.eremont.ru/upload/iblock/a7f/3u1wrdidxhnaupj3g6vpj0smmsubm04g/Oblozhka-Obekta.jpg",
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.glenwoodnyc.com/wp-content/uploads/2022/05/2-JSP-LOBBY-01-02-1280.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZh1Lj46KrAH-f81JmrZv1Frl1ZHq1Fz19Zg&usqp=CAU",
      ],
      rooms: "Количество комнат - 4",
      typeSell: "Продажа",
      quadrature: "Квадратура - 126",
      floor: "Этаж -  4",
      address: "улица Льва яшина",
      price: "Цена - 1600000",
      typeRemont: "Тип ремонта - Euro",
    },
  ];

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useParallax(scrollYProgress, 200);

  const icon = {
    hidden: (custom) => ({
      y: 100,
      opacity: 0,
      transition: {
        delay: custom * 1,
      },
    }),
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 1,
      },
    }),
  };

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <div 
      // ref={ref} 
      className={styles.mainDiv}>
        <div className={styles.secondMainDiv}>
          <div className={styles.welcomeText}>
            <motion.h1
              custom={1}
              // style={{ y }}
              className={styles.h1}
              // whileInView="visible"
              animate="visible"
              initial="hidden"
              variants={icon}
            >
              Выбирайте жилье вместе с нами
            </motion.h1>
          </div>
        </div>
      </div>
      <div className={styles.secondViev}>
        <section className={styles.cardsOfItems}>
          {appartments.map((apartment, index) => (
            <div className={styles.cardOfItem} key={index}>
              <article>
                {appartments[0].imgSrc.map((e) => (
                  <img src={e} />
                ))}
              </article>
              <h3>{apartment.typeSell}</h3>
              <h3>{apartment.typeRemont}</h3>
              <h3>{apartment.rooms}</h3>
              <h4>{apartment.quadrature}</h4>
              <h5>{apartment.address}</h5>
              <h3>{apartment.price}</h3>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default MainPage;
