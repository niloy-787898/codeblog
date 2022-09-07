import Navber from "../component/Navber";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navber></Navber>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
