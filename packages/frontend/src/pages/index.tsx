/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";

import { BigNumber } from "ethers";

import Preview from "../components/Preview";
import MissedLils from "../components/MissedLils";

const Wtf = dynamic(() => import("../components/Wtf"), { ssr: false });

export enum AuctionState {
  NOT_STARTED,
  ACTIVE,
  OVER_NOT_SETTLED,
  OVER_AND_SETTLED,
}

const Home: NextPage = () => {
  return (
    <div className="bg-white h-full w-full">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Gnars Preview</title>
        <meta
          name="description"
          content="Watch the blocks. Pick a lil. Join the party"
        />

        {/* <!-- Facebook Meta Tags --> */}
        {/* <meta property="og:url" content="https://www.lbp.wtf" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gnars Preview" />
        <meta
          property="og:description"
          content="Watch the blocks. Pick a lil. Join the party"
        />
        {/* <meta
          property="og:image"
          content="https://www.lbp.wtf/images/og.jpeg"
        /> */}

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lbp.wtf" />
        <meta property="twitter:url" content="https://www.lbp.wtf" />
        <meta name="twitter:title" content="Gnars Preview" />
        <meta
          name="twitter:description"
          content="Watch the blocks. Pick a lil. Join the party"
        />
        {/* <meta
          name="twitter:image"
          content="https://www.lbp.wtf/images/og.jpeg"
        /> */}

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
      </Head>

      <Preview />

      <Wtf />
    </div>
  );
};
export default Home;
