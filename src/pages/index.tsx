import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Store from "../components/Store";
import { Product } from "../types/Product";
import { getProducts } from "./api";

const HomeCard = styled.div`
  ${tw`flex w-full bg-primary h-2`}
`;

interface HomeProps {
  state: Product[];
}

const Home: NextPage<HomeProps> = ({state}) => {

  const [products,setProducts] = useState(state);

  return (
    <Fragment>
      <HomeCard />
      <Head>
        <title>Recruitment Test Task</title>
        <meta name="description" content="Recruitment Test Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Store products={products} setProducts={setProducts}/>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps()  {
  const state = getProducts();
  return {
    props: {
      state,
    },
    revalidate: 10
  };
}
