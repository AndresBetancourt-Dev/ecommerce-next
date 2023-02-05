import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import { ProductProvider } from "../contexts/ProductsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>

  );
}
export default MyApp;
