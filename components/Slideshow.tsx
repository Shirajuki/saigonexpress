import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/slideshow/sushi-2.jpg",
  "/images/slideshow/51a.jpg",
  "/images/slideshow/bunthitxao2.jpg",
  "/images/slideshow/slideshow.jpg",
];
const Slideshow = () => {
  const [selected, setSelected] = useState<number>(0);
  const [timer, setTimer] = useState<any>(0);
  useEffect(() => {
    clearTimeout(timer);
    const t = setTimeout(
      () => setSelected((selected + 1) % images.length),
      10000
    );
    setTimer(t);
  }, [selected]); //eslint-disable-line
  return (
    <>
      <div className={styles.slideshowWrapper}>
        {images.map((image: string, index: number) => (
          <div
            key={index}
            className={selected === index ? styles.slideshowImage : ""}
          >
            <Image
              src={image}
              alt={"slideshow" + index}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className={styles.imageScroller}>
        {images.map((_, index: number) => (
          <button
            key={"btn" + index}
            onClick={() => setSelected(index)}
            className={selected === index ? styles.active : ""}
          />
        ))}
      </div>
    </>
  );
};
export default Slideshow;
