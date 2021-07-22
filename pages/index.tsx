import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import ThemeSwitcherIcon from "../components/ThemeSwitcherIcon";
import FlipMenu from "../components/FlipMenu";
import ImageGallery from "react-image-gallery";
import Slideshow from "../components/Slideshow";
import React, { useEffect, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { sushiImages, warmImages } from "../utils/imagePaths";

const Home = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [hideMobileNav, setHideMobileNav] = useState(true);
  const [darkmode, setDarkmode] = useState<boolean>(false);

  // Scrollposition hook
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < -90;
      if (isShow) setHideOnScroll(false);
      else setHideOnScroll(true);
    },
    [hideOnScroll]
  );

  // Google translate onmount
  useEffect(() => {
    const googleTranslateElementInit = () => {
      if (!(window as any).google) {
        const script = document.createElement("script");
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.getElementsByTagName("head")[0].appendChild(script);
      }
      const initTranslator = () => {
        const generateSelect = () => {
          if ((window as any).google)
            new (window as any).google.translate.TranslateElement(
              {
                pageLanguage: "no",
                // includedLanguages: "ar,en,es,jv,ko,pt,ru,zh-CN,tr",
                // layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
              },
              "google_translate_element"
            );
        };
        if ((window as any).google) {
          generateSelect();
          setTimeout(() => {
            const el = document.querySelector(".goog-te-gadget");
            const childNode = [].slice
              .call(el?.childNodes || [], 0)
              .find((n: any) => n?.nodeType === Node.TEXT_NODE);
            if (childNode) el?.removeChild(childNode);
          }, 3210);
        } else {
          setTimeout(() => initTranslator(), 1000);
        }
      };
      setTimeout(() => initTranslator(), 1500);
    };
    googleTranslateElementInit();
  }, []);

  return (
    <div
      className={`${styles.container} ${styles.priority} ${
        darkmode ? "darkmode" : ""
      }`}
    >
      <Head>
        <title>Saigonexpress</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="Saigon Express, Oslo: vurdert til 4 av 5 på TripAdvisors. Hos oss finner du populære vietnamesiske retter som vårruller, sommerruller, pho, bun...og velkjente Øst-Asiatiske retter fra det japanske, thailandske, kinesiske kjøkkenet. Alle retter serveres med tilhørende sauser eller dipper, som hver og en sørger for spennende preg på måltidene. Vi legger stor vekt på rask levering, retter lages etter bestillingen, samtidig som vi sørger for at maten alltid er frisk og velsmakende. Vi presenterer en sunn versjon av fastfood som du kan nyte i våre lokaler, eller ta med hjem som take away. Hjertelig velkommen til oss!"
        ></meta>
        <meta
          name="keywords"
          content="Saigon Express, Oslo, restauranter, vietnamesisk mat, mat, spise middag, sushi, sushi restaurant, takeaway"
        ></meta>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>

      <header
        className={`${styles.header} ${hideOnScroll ? styles.hidden : ""}`}
      >
        <a href="#" style={{ display: "flex", zIndex: -1 }}>
          <Image
            src="/logo.jpg"
            alt="saigonexpress logo"
            width={140}
            height={50}
          />
        </a>
        <nav className={hideMobileNav ? styles.hidden : ""}>
          <a href="#">Hjem</a>
          <a href="#omoss">Om oss</a>
          <a href="#meny">Meny</a>
          <a href="#galleri">Galleri</a>
          <a href="#kontaktoss">Kontakt oss</a>
        </nav>
        <div className={styles.whitespace}></div>
        <div className={`${styles.icons} ${!hideMobileNav ? styles.dark : ""}`}>
          <ThemeSwitcherIcon darkmode={darkmode} setDarkmode={setDarkmode} />
          <a
            href="https://www.facebook.com/saigonexpressoslo/"
            target="_blank"
            rel="noreferrer"
            className={styles.facebookIcon}
          >
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
          <button
            className={`${styles.burgerNav} ${
              !hideMobileNav ? styles.active : ""
            }`}
            onClick={() => setHideMobileNav(!hideMobileNav)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.splash}>
          <div className={styles.splashWrapper}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>Velkommen til Saigon Express</h1>
              <p>
                Nå er det levering hos oss via{" "}
                <a
                  href="https://wolt.com/en/nor/oslo/restaurant/saigon-express"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wolt
                </a>{" "}
                og{" "}
                <a
                  href="https://www.foodora.no/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Foodora!
                </a>
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <a
                href="https://wolt.com/en/nor/oslo/restaurant/saigon-express"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Bestill Wolt
              </a>
              <a
                href="https://www.foodora.no/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Bestill Foodora
              </a>
              <br />
              <a href="#meny" className="btn">
                Bestill Takeaway
              </a>
            </div>
          </div>
          <div id="google_translate_element"></div>
          <Slideshow />
        </div>
        <div id="omoss" className={styles.aboutus}>
          <h1>Om Saigon Express</h1>
          <p>
            Hos Saigon Express finner du velkjente Sørøst-Asiatiske retter fra
            det vietnamesiske, japanske, thailandske og kinesiske kjøkkenet.
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
            <a href="#kontaktoss">Ring og bestill</a> nå eller i forveien!
          </p>
          <div className={styles.menuDisplay}>
            <FlipMenu />
          </div>
          <div>
            <p>eller se menyen i eget vindu...</p>
            <div>
              <a
                target="_blank"
                href="/takeawaymeny.pdf"
                className={`btn ${styles.btn}`}
              >
                Takeaway PDF meny
              </a>
              <a
                target="_blank"
                href="/fullmeny.pdf"
                className={`btn ${styles.btn}`}
              >
                Fullstendig PDF meny
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.parallaxSection} ${styles.bg1}`}></div>
        <div id="galleri" className={styles.gallery}>
          <h1>Galleri</h1>
          <div className={styles.galleryWrapper}>
            <ImageGallery
              className={styles.galleryDisplay}
              items={sushiImages}
              lazyload={true}
              autoPlay={true}
            />
            <ImageGallery
              className={styles.galleryDisplay}
              items={warmImages}
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
              <p>
                <a href="https://www.google.com/maps?ll=59.938199,10.756934%26z=16%26t=m%26hl=en-USgl=NO%26mapclient=embed%26cid=9300041376621277178">
                  Maridalsveien 157, 0465 Oslo
                </a>
              </p>
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
              <p>
                tlf: <a href="tel:22230900">222 30 900</a>
              </p>
              <p>
                <a href="mailto:post@saigonexpress.no">post@saigonexpress.no</a>
              </p>
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
          <div className={`${styles.parallaxSection} ${styles.bg2}`}></div>
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
        <p>Copyright © 2021</p>
        <p>Alle rettigheter forbeholdt av Saigon Express SAGENE.</p>
        <p>Nettside designet av Joiedesign</p>
        <div>
          <p>Page top</p>
          <a className={`btn ${styles.btn}`} href="#">
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
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Home;
