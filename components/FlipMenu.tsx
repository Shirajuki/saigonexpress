import styles from "../styles/Home.module.scss";
import React, { useCallback, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

const Page = React.forwardRef((props: any, ref: any) => {
  return (
    <div className="demoPage" ref={ref}>
      {props.children}
    </div>
  );
});
Page.displayName = "page";
const FlipMenu = (props: any) => {
  const flipMenuRef = useRef<any>(null);
  const nextButtonClick = () => flipMenuRef?.current?.pageFlip()?.flipNext();
  const prevButtonClick = () => flipMenuRef?.current?.pageFlip()?.flipPrev();
  const onInit = useCallback((e) => {
    if (flipMenuRef.current) nextButtonClick();
  }, []);
  return (
    <>
      <button className={styles.menuNextButton} onClick={nextButtonClick}>
        <svg
          width="22"
          height="48"
          viewBox="0 0 22 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 2L18 24.6286L3 46" stroke="#5D7131" strokeWidth="5" />
        </svg>
      </button>
      <button className={styles.menuPrevButton} onClick={prevButtonClick}>
        <svg
          width="22"
          height="48"
          viewBox="0 0 22 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 46L4 23.3714L19 2" stroke="#5D7131" strokeWidth="5" />
        </svg>
      </button>
      <HTMLFlipBook
        width={300}
        height={600}
        size="stretch"
        minWidth={250}
        maxWidth={600}
        minHeight={300}
        maxHeight={800}
        usePortrait={true}
        showCover={true}
        mobileScrollSupport={false}
        onInit={onInit}
        ref={(component: any) => (flipMenuRef.current = component)}
      >
        <Page number="1">
          <Image
            src="/images/pages/takeawaymeny-1.png"
            width={1070}
            height={2077}
            alt="Saigon Express menu page 1"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8XA8AAgsBRAyiy5MAAAAASUVORK5CYII="
          />
        </Page>
        <Page number="2">
          <Image
            src="/images/pages/takeawaymeny-2.png"
            width={1070}
            height={2077}
            alt="Saigon Express menu page2"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8XA8AAgsBRAyiy5MAAAAASUVORK5CYII="
          />
        </Page>
        <Page number="3">
          <Image
            src="/images/pages/takeawaymeny-3.png"
            width={1070}
            height={2077}
            alt="Saigon Express menu page 3"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8XA8AAgsBRAyiy5MAAAAASUVORK5CYII="
          />
        </Page>
        <Page number="4">
          <Image
            src="/images/pages/takeawaymeny-4.png"
            width={1070}
            height={2077}
            alt="Saigon Express menu page 4"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8XA8AAgsBRAyiy5MAAAAASUVORK5CYII="
          />
        </Page>
        <Page number="5">
          <Image
            src="/images/pages/takeawaymeny-5.png"
            width={1070}
            height={2077}
            alt="Saigon Express menu page 5"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8XA8AAgsBRAyiy5MAAAAASUVORK5CYII="
          />
        </Page>
        <Page number="6">
          <Image
            src="/images/pages/takeawaymeny-6.png"
            width={1070}
            height={2077}
            alt="Saigon Express menu page 6"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8XA8AAgsBRAyiy5MAAAAASUVORK5CYII="
          />
        </Page>
      </HTMLFlipBook>
    </>
  );
};

export default FlipMenu;
