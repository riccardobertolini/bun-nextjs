import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import nextPackage from "package.json";

const pokeImage = async (pokemon) => {
  const pokeImage = await fetch(pokemon.url).then(response => response.json());
  return pokeImage.sprites.back_default;
} 


export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js + Bun + Original 151 Pokemon!</title>
        <meta name="description" content="Original Pokemon with Bun and Next.JS!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Pokemon</h1>
      
      <div>
          {
            data?.results?.map(pokemon => <div className={styles.poke}>{pokemon.name}</div>)
          }
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => response.json());

  return { props: { data } }
}
