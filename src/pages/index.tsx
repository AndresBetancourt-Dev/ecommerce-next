import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import Store from "../components/Store";
import { useProductContext } from "../contexts/ProductsContext";
import { Product } from "../types/Product";
import { getProducts } from "./api";
interface HomeProps {
  products: Product[];
}

const Home: NextPage<HomeProps> = ({ products }) => {
  const { setProducts } = useProductContext();

  useEffect(() => {
    setProducts(products);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Recruitment Test Task</title>
        <meta name="description" content="Recruitment Test Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Store />
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  const products = getProducts();
  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
