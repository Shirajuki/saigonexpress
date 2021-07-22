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
        height={500}
        usePortrait={true}
        showCover={true}
        mobileScrollSupport={true}
        onInit={onInit}
        ref={(component: any) => (flipMenuRef.current = component)}
      >
        <Page number="1">
          <Image
            src="/images/pages/1.jpg"
            width={580}
            height={1000}
            alt="Saigon Express menu page 1"
          />
        </Page>
        <Page number="2">
          <Image
            src="/images/pages/2.jpg"
            width={580}
            height={1000}
            alt="Saigon Express menu page2"
          />
        </Page>
        <Page number="3">
          <Image
            src="/images/pages/3.jpg"
            width={580}
            height={1000}
            alt="Saigon Express menu page 3"
          />
        </Page>
        <Page number="4">
          <Image
            src="/images/pages/4.jpg"
            width={580}
            height={1000}
            alt="Saigon Express menu page 4"
          />
        </Page>
        <Page number="5">
          <Image
            src="/images/pages/5.jpg"
            width={580}
            height={1000}
            alt="Saigon Express menu page 5"
          />
        </Page>
        <Page number="6">
          <Image
            src="/images/pages/6.jpg"
            width={580}
            height={1000}
            alt="Saigon Express menu page 6"
          />
        </Page>
      </HTMLFlipBook>
    </>
  );
};

export default FlipMenu;
