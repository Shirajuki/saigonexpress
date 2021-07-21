import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { useState } from "react";

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
