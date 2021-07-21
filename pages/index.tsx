import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import ThemeSwitcherIcon from "../components/ThemeSwitcherIcon";
import ImageGallery from "react-image-gallery";
import React, { useCallback, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
const Page = React.forwardRef((props: any, ref: any) => {
  return (
    <div className="demoPage" ref={ref}>
      {props.children}
    </div>
  );
});
Page.displayName = "page";
const MyBook = (props: any) => {
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
            src="https://saigonexpress.no/pages/1.jpg"
            width={580}
            height={1000}
            alt="Saigon Express menu page 1"
          />
        </Page>
        <Page number="2">
          <Image
            src="https://saigonexpress.no/pages/2.jpg"
            width={580}
            height={1000}
            alt="Saigon Express menu page2"
          />
        </Page>
        <Page number="3">
          <Image
            src="https://saigonexpress.no/pages/3.jpg"
            width={580}
            height={1000}
            alt="Saigon Express menu page 3"
          />
        </Page>
        <Page number="4">
          <Image
            src="https://saigonexpress.no/pages/5.jpg"
            width={580}
            height={1000}
            alt="Saigon Express menu page 4"
          />
        </Page>
        <Page number="5">
          <Image
            src="https://saigonexpress.no/pages/6.jpg"
            width={580}
            height={1000}
            alt="Saigon Express menu page 5"
          />
        </Page>
        <Page number="6">
          <Image
            src="https://saigonexpress.no/pages/4.jpg"
            width={580}
            height={1000}
            alt="Saigon Express menu page 6"
          />
        </Page>
      </HTMLFlipBook>
    </>
  );
};

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
const Home = () => {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      if (!(window as any).google) {
        const script = document.createElement("script");
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.getElementsByTagName("head")[0].appendChild(script);
      }
      setTimeout(() => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "no",
            // includedLanguages: "ar,en,es,jv,ko,pt,ru,zh-CN,tr",
            // layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }, 1000);
      setTimeout(() => {
        const el = document.querySelector(".goog-te-gadget");
        const childNode = [].slice
          .call(el?.childNodes, 0)
          .find((n: any) => n?.nodeType === Node.TEXT_NODE);
        if (childNode) el?.removeChild(childNode);
      }, 3210);
    };
    googleTranslateElementInit();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Saigonexpress</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <a href="#" style={{ display: "flex" }}>
          <Image
            src="/logo.jpg"
            alt="saigonexpress logo"
            width={140}
            height={50}
          />
        </a>
        <nav>
          <a href="#">Hjem</a>
          <a href="#omoss">Om oss</a>
          <a href="#meny">Meny</a>
          <a href="#galleri">Galleri</a>
          <a href="#kontaktoss">Kontakt oss</a>
        </nav>
        <div className={styles.icons}>
          <ThemeSwitcherIcon />
          <a href="#" className={styles.facebookIcon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9167 0C5.8125 0 0 5.79958 0 12.9425C0 19.4008 4.7275 24.7612 10.9017 25.73V16.6883H7.62083V12.9425H10.9017V10.0879C10.9017 6.84583 12.8263 5.06333 15.7842 5.06333C17.1921 5.06333 18.6646 5.30875 18.6646 5.30875V8.49917H17.0371C15.4354 8.49917 14.9317 9.49375 14.9317 10.5142V12.9425H18.5225L17.9412 16.6883H14.9317V25.73C17.9754 25.2493 20.747 23.6963 22.7462 21.3513C24.7453 19.0064 25.8402 16.024 25.8333 12.9425C25.8333 5.79958 20.0208 0 12.9167 0Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.splash}>
          <div className={styles.splashWrapper}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>Velkommen til Saigon Express</h1>
              <p>
                Nå er det levering hos oss via <a href="#">Wolt</a> og{" "}
                <a href="#">JustEat!</a>
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <a href="#" className="btn">
                Bestill Wolt
              </a>
              <a href="#" className="btn">
                Bestill Just-eat
              </a>
              <br />
              <a href="#" className="btn">
                Bestill Takeaway
              </a>
            </div>
          </div>
          <div id="google_translate_element"></div>
          <div className={styles.imageScroller}>
            <button className={styles.active}></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
        <div id="omoss" className={styles.aboutus}>
          <h1>Om Saigon Express</h1>
          <p>
            Hos Saigon Express finner du velkjente Sørøst-Asiatiske retter fra
            det vietnamesiske, japanske, thailandske og det kinesiske kjøkkenet.
            Alle retter serveres med tilhørende sauser eller dipper, som hver og
            en sørger for spennende preg på måltidene.
          </p>
          <p>
            Vi legger stor vekt på rask levering, retter lages etter
            bestillingen, samtidig som vi sørger for at maten alltid er frisk og
            velsmakende. Vi presenterer en sunn versjon av fastfood som du kan
            nyte i våre lokaler, eller ta med hjem som take away.
          </p>
          <p>Hjertelig velkommen til oss!</p>
        </div>
        <div id="meny" className={styles.menu}>
          <h1>Vår takeaway meny</h1>
          <p>
            <a href="#">Ring og bestill</a> nå eller i forveien!
          </p>
          <div className={styles.menuDisplay}>
            <MyBook />
          </div>
          <div>
            <p>eller se menyen i eget vindu...</p>
            <div>
              <a href="#" className={`btn ${styles.btn}`}>
                Takeaway PDF meny
              </a>
              <a href="#" className={`btn ${styles.btn}`}>
                Fullstendig PDF meny
              </a>
            </div>
          </div>
        </div>
        <div className={styles.parallaxSection}></div>
        <div id="galleri" className={styles.gallery}>
          <h1>Galleri</h1>
          <div className={styles.galleryWrapper}>
            <ImageGallery
              className={styles.galleryDisplay}
              items={images}
              lazyload={true}
              autoPlay={true}
            />
            <ImageGallery
              className={styles.galleryDisplay}
              items={images}
              lazyLoad={true}
              autoPlay={true}
            />
          </div>
        </div>
        <div id="kontaktoss" className={styles.contactus}>
          <div className={styles.infoWrapper}>
            <div className={styles.info}>
              <svg
                width="21"
                height="30"
                viewBox="0 0 21 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 0C4.695 0 0 4.695 0 10.5C0 18.375 10.5 30 10.5 30C10.5 30 21 18.375 21 10.5C21 4.695 16.305 0 10.5 0ZM10.5 14.25C8.43 14.25 6.75 12.57 6.75 10.5C6.75 8.43 8.43 6.75 10.5 6.75C12.57 6.75 14.25 8.43 14.25 10.5C14.25 12.57 12.57 14.25 10.5 14.25Z"
                  fill="#769E02"
                />
              </svg>

              <h3>Besøk oss</h3>
              <p>Maridalsveien 157, 0465 Oslo</p>
            </div>
            <div className={styles.info}>
              <svg
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 6L15 13.5L3 6V3L15 10.5L27 3V6Z"
                  fill="#769E02"
                />
              </svg>

              <h3>Kontakt oss</h3>
              <p>tlf: 222 30 900</p>
              <p>e-post: epost@saigonexpress.no</p>
            </div>
            <div className={styles.info}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.985 3C9.705 3 3 9.72 3 18C3 26.28 9.705 33 17.985 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 17.985 3ZM18 30C11.37 30 6 24.63 6 18C6 11.37 11.37 6 18 6C24.63 6 30 11.37 30 18C30 24.63 24.63 30 18 30Z"
                  fill="#769E02"
                />
                <path
                  d="M18.75 10.5H16.5V19.5L24.375 24.225L25.5 22.38L18.75 18.375V10.5Z"
                  fill="#769E02"
                />
              </svg>

              <h3>Åpningstider</h3>
              <p>Alle dager: 13.00 - 21.00</p>
            </div>
            <div className={styles.info}>
              <div
                id="TA_cdsratingsonlynarrow792"
                className="TA_cdsratingsonlynarrow"
              >
                <ul id="UsuJ5yE" className="TA_links C3TYdpS6I">
                  <li id="SVJNf84Rk" className="UBwjxAr">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://no.tripadvisor.com/Restaurant_Review-g190479-d6407063-Reviews-Saigon_Express-Oslo_Eastern_Norway.html"
                    >
                      <Image
                        src="https://no.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg"
                        alt="TripAdvisor"
                        width={200}
                        height={50}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <script
                async
                src="https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&amp;uniq=792&amp;locationId=6407063&amp;lang=en_US&amp;border=true&amp;display_version=2"
                data-loadtrk
                onLoad={() => ((this as any).loadtrk = true)}
              ></script>
            </div>
          </div>
          <div className={styles.parallaxSection}></div>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6414438549562!2d10.75468121575559!3d59.938091669105255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e1256b3a773%3A0x8110625bb9f22ffa!2sSaigon+Express.!5e0!3m2!1sno!2sno!4v1457627536105"
            frameBorder="0"
            width="100%"
            height="450"
            allowFullScreen={false}
            title="Google Maps"
          ></iframe>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Copyright © 2021 - Alle rettigheter forbeholdt av Saigon Express
          SAGENE.
        </p>
        <p>Nettside designet av Joiedesign</p>
        <div>
          Page top
          <a href="#">
            <button>
              <svg
                width="30"
                height="12"
                viewBox="0 0 36 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 16L18.1029 4L33.6 16"
                  stroke="#DDDDDD"
                  strokeWidth="5"
                />
              </svg>
            </button>
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Home;
