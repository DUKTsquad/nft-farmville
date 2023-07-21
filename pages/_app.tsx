import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Guapcoinx } from "@thirdweb-dev/chains";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const activeChain = "Guapcoinx";

  return (
    <ThirdwebProvider activeChain={Guapcoinx}>
      <Component {...pageProps} />
      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
    </ThirdwebProvider>
  );
}

export default MyApp;
