import React from "react";
import styles from "../MainPage/MainPage.module.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const MainPage = () => {

  const appartments = [
    {
      
    }
  ]


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

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
  // const { scrollYProgress } = useScroll()
  // const scaleX = useSpring(scrollYProgress, {
  // 	stiffness: 100,
  // 	damping: 20,
  // 	restDelta: 1,
  // })
  // style={{ scaleX }}

  // const icon = {
  //   hidden: (custom) => ({
  // 	delay: custom * 1,
  //     z: 1000,
  //     opacity: 0,
  //     transition: {
  //     },
  //   }),
  //   visible: (custom) => ({
  //     z: 0,
  //     opacity: 1,
  //     transition: {
  //       delay: custom * 1,
  //     },
  //   }),
  // };

  return (
    <div ref={ref} className={styles.mainDiv}>
      <div className={styles.secondMainDiv}>
        <div className={styles.someClass}>
          <motion.h1
            custom={1}
            style={{ y }}
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
  );
};

export default MainPage;
