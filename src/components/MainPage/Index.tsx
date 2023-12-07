import React, { useEffect, useState } from "react";
import styles from "../MainPage/MainPage.module.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useViewportScroll,
  useAnimation,
} from "framer-motion";
import FilteredProperty from "../FilteredProperty";

import { Link, Element } from "react-scroll";

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const MainPage = () => {
  const appartments = [
    {
      imgSrc: [
        "https://img.prian.ru/2023_02/8/202302081507101561306585o.webp",
        "https://img.prian.ru/2023_02/8/20230208150709755235806o.webp",
        "https://img.prian.ru/2023_02/8/202302081507131114771366o.webp",
        "https://img.prian.ru/2023_02/8/20230208150712837617146o.webp",
        "https://img.prian.ru/2023_02/8/20230208150712906612558o.webp",
        "https://img.prian.ru/2023_02/8/20230208150712704135982o.webp",
      ],
      rooms: "Количество комнат - 1",
      typeSell: "Продажа",
      quadrature: "Квадратура - 48",
      floor: "Этаж - 23",
      address: "ОАЭ, Дубай, E311 - City of Arabia - Dubai - ОАЭ",
      price: "Цена - 166 576 €",
      typeRemont: "Тип ремонта - Euro",
    },
    {
      imgSrc: [
        "https://img.prian.ru/2023_12/5/202312051501031575671150o.webp",
        "https://img.prian.ru/2023_12/5/20231205150103228717882o.webp",
        "https://img.prian.ru/2023_12/5/20231205150103795535162o.webp",
        "https://img.prian.ru/2023_12/5/20231205150103401055756o.webp",
        "https://img.prian.ru/2023_12/5/202312051501031317000470o.webp",
        "https://img.prian.ru/2023_12/5/202312051501031595151032o.webp",
      ],
      rooms: "Количество комнат - 2",
      typeSell: "Продажа",
      quadrature: "Квадратура - 71",
      floor: "Этаж -  7",
      address: "ОАЭ, Дубай, ممشي المارينا - Marina walk - Dubai Marina",
      price: "Цена - 300 508 €",
      typeRemont: "Тип ремонта - Euro",
    },
    {
      imgSrc: [
        "https://img.prian.ru/2023_02/8/202302081520431583685146o.webp",
        "https://img.prian.ru/2023_02/8/202302081455231219789570o.webp",
        "https://img.prian.ru/2023_02/8/202302081455241375211976o.webp",
        "https://img.prian.ru/2023_02/8/20230208145523797583041o.webp",
        "https://img.prian.ru/2023_02/8/20230208145525597239860o.webp",
        "https://img.prian.ru/2023_02/8/20230208145524630629190o.webp",
      ],
      rooms: "Количество комнат - 3",
      typeSell: "Продажа",
      quadrature: "Квадратура - 115",
      floor: "Этаж -  19",
      address: "	ОАЭ, Дубай, Al Asayel St Business Bay, P.O.B.O.X 3139",
      price: "Цена - 	581 882 €",
      typeRemont: "Тип ремонта - Euro",
    },
    {
      imgSrc: [
        "https://www.avtorinok.ru/cache/photo/pics/bmw/x5/211207-gthumb-gwdata480-ghdata360-gfitdatacrop.jpg",
        "https://www.avtorinok.ru/cache/photo/pics/bmw/x5/211201-gthumb-gwdata480-ghdata360-gfitdatacrop.jpg",
        "https://www.avtorinok.ru/cache/photo/pics/bmw/x5/211204-gthumb-gwdata480-ghdata360-gfitdatacrop.jpg",
        "https://www.avtorinok.ru/cache/photo/pics/bmw/x5/211203-gthumb-gwdata480-ghdata360-gfitdatacrop.jpg",
        "https://www.avtorinok.ru/cache/photo/pics/bmw/x5/211202-gthumb-gwdata480-ghdata360-gfitdatacrop.jpg",
        "https://www.avtorinok.ru/cache/photo/pics/bmw/x5/211199-gthumb-gwdata480-ghdata360-gfitdatacrop.jpg",
      ],
      rooms: "Количество комнат - 1",
      typeSell: "Продажа",
      quadrature: "Квадратура - 3",
      floor: "Этаж -  1",
      address: "BMW Headquarters, Petuelring 130, 80809 München, Германия",
      price: "Обмен на Mercedes",
      typeRemont: "Тип ремонта - Постоянный",
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
        delay: custom * 0.5,
      },
    }),
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.5,
      },
    }),
  };

  const icon2 = {
    hidden: (custom) => ({
      y: 100,
      opacity: 0,
    }),
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        ease: custom * 4.5,
      },
    }),
  };

  const [showFirstBlock, setShowFirstBlock] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 65;

      if (scrollPosition > scrollThreshold && showFirstBlock) {
        setShowFirstBlock(false);
        controls.start({ opacity: 1, y: 0 });

        // Удаление слушателя событий прокрутки после появления второго блока
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showFirstBlock, controls]);

  return (
    <>
      <div className={styles.mainDiv}>
        <div
          style={{ height: "calc(100vh - 64px)", width: "80%" }}
          className={styles.secondMainDiv}
        >
          <motion.div
            id={styles.mainText}
            initial={{ opacity: 1, y: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            style={{
              width: "100%",
            }}
          >
            {showFirstBlock ? (
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
            ) : (
              <motion.div animate="visible" initial="hidden" variants={icon2}>
                <FilteredProperty />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      <div className={styles.secondViev}>
        <section className={styles.cardsOfItems}>
          {appartments.map((apartment, index) => (
            <div className={styles.cardOfItem} key={index}>
              <article>
                {apartment.imgSrc.map((i) => {
                  return <img key={index} src={i} alt={i} />;
                })}
              </article>
              <div className={styles.discription}>
                <h3 id={styles.sale}>{apartment.typeSell}</h3>
                <div>
                  <h3>{apartment.typeRemont}</h3>
                  <h3>{apartment.rooms}</h3>
                  <h3>{apartment.quadrature}</h3>
                  <h3>{apartment.address}</h3>
                </div>
                <h3 id={styles.price}>{apartment.price}</h3>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default MainPage;
