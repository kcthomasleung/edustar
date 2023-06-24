import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { ThirdwebProvider } from "@3rdweb/hooks";

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider supportedChainIds={supportedChainIds} connectors={connectors}>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
