/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { utils } from "ethers";

import MissedLils from "../components/MissedLils";
import { GnarsSeeder } from "../deployments/gnarsSeeder";
import { GnarsDescriptor } from "../deployments/gnarsDescriptor";
import { AuctionABI } from "../deployments/gnarsAuction";

const InfoLil = dynamic(() => import("../components/InfoLil"), { ssr: false });
const Wtf = dynamic(() => import("../components/Wtf"), { ssr: false });

export enum AuctionState {
  NOT_STARTED,
  ACTIVE,
  OVER_NOT_SETTLED,
  OVER_AND_SETTLED,
}

interface GnarData {
  gnarId: {
    _hex: number;
  };
}

const Home: NextPage = () => {
  const {
    data: auctionHouse,
    isFetching: fetchingAuction,
    isError: isAuctionError,
  } = useContractRead({
    address: "0xC28e0d3c00296dD8c5C3F2E9707361920f92a209",
    abi: AuctionABI,
    functionName: "auction",
    watch: true,
    overrides: { blockTag: "pending" },
  });

  utils.parseUnits("", "");

  console.log(auctionHouse);

  // const {
  //   data: generateSeedData,
  //   isFetching,
  //   isFetched,
  // } = useContractRead({
  //   address: "0xb69d980feb3c2ee143ca14feb870fe09f8dfa1fc",
  //   abi: GnarsSeeder,
  //   functionName: "generateSeed",
  //   watch: true,
  //   args: [
  //     parseInt(auctionHouse?.gnarId._hex) + 1,
  //     "0x0CBcBF0cDBe9842fa53b7C107738714c2a9af1d5",
  //   ],
  //   overrides: { blockTag: "pending" },
  // });

  const {
    data: generateSeedData,
    isFetching,
    isFetched,
  } = useContractRead({
    address: "0xb69d980feb3c2ee143ca14feb870fe09f8dfa1fc",
    abi: GnarsSeeder,
    functionName: "generateSeed",
    watch: true,
    args: [auctionHouse?.gnarId, "0x0CBcBF0cDBe9842fa53b7C107738714c2a9af1d5"],
    overrides: { blockTag: "pending" },
  });

  const { data: generateImage, isFetching: fetchingImage } = useContractRead({
    address: "0x0CBcBF0cDBe9842fa53b7C107738714c2a9af1d5",
    abi: GnarsDescriptor,
    functionName: "generateSVGImage",
    watch: true,
    args: [generateSeedData],
    overrides: { blockTag: "pending" },
  });

  // useEffect(() => {
  //   if (data?.[3] === AuctionState.ACTIVE) return;

  //   setLilData(data);
  // }, [data?.[0]]);

  const [open, setOpen] = useState(false);
  const [selectedLil, setSelectedLil] = useState({});

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
      <div className="mx-auto">
        <div className="bg-[#22212C] min-h-80vh md:min-h-[60vh]">
          <InfoLil
            data={generateImage}
            isFetching={isFetching}
            isFetched={isFetched}
          />
        </div>
        {/* <MissedLils
          data={lilData}
          isFetching={isFetching}
          isFetched={isFetched}
          setModalOpen={setOpen}
          setSelectedLil={setSelectedLil}
        /> */}
      </div>

      {/* <Wtf /> */}
      {/* <EulogyModal
        open={open}
        setOpen={setOpen}
        selectedLil={selectedLil}
        data={data}
      /> */}
    </div>
  );
};
export default Home;
