import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
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
              width={1000}
              height={600}
              alt={"slideshow" + index}
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
