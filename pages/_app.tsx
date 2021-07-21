import "../styles/globals.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default App;
