import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";

interface IProps {
  darkmode: boolean;
  setDarkmode: (bool: boolean) => void;
}
const ThemeSwitcherIcon = ({ darkmode, setDarkmode }: IProps) => {
  useEffect(() => {
    console.log("darkmode:", darkmode);
  }, [darkmode]);
  return (
    <button
      onClick={() => setDarkmode(!darkmode)}
      className={`${styles.themeSwitcherIcon} ${darkmode ? styles.dark : ""}`}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.4999 10.0182C12.4712 10.0182 10.0181 12.4713 10.0181 15.5001C10.0181 18.5288 12.4712 20.9819 15.4999 20.9819C18.5287 20.9819 20.9818 18.5288 20.9818 15.5001C20.9818 12.4713 18.5287 10.0182 15.4999 10.0182Z"
          fill="white"
        />
        <path
          d="M15.5 23.7228C10.9637 23.7228 7.27719 20.0363 7.27719 15.5C7.27719 10.9637 10.9637 7.27719 15.5 7.27719C20.0363 7.27719 23.7228 10.9637 23.7228 15.5C23.7228 20.0363 20.0363 23.7228 15.5 23.7228ZM26.4638 10.9637V4.53625H20.0363L15.5 0L10.9637 4.53625H4.53625V10.9637L0 15.5L4.53625 20.0363V26.4638H10.9637L15.5 31L20.0363 26.4638H26.4638V20.0363L31 15.5L26.4638 10.9637Z"
          fill="white"
        />
      </svg>
    </button>
  );
};
export default ThemeSwitcherIcon;
