import Navbar from "@/components/Navbar";
import ProviderFun from "@/redux/Provider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ProviderFun>
      <Navbar />
      <Component {...pageProps} />
    </ProviderFun>
  );
}
