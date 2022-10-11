import GlobalContextProvider from "../contexts/GlobalContext";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <div className="h-screen">
        <GlobalContextProvider>
          <Component {...pageProps} />
        </GlobalContextProvider>
      </div>
    </>
  );
}

export default App;
