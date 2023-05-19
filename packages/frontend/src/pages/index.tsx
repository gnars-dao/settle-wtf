import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import Preview from "../components/Preview";

const Wtf = dynamic(() => import("../components/Wtf"), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className="bg-white h-full w-full">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Settle.wtf</title>
        <meta
          name="description"
          content="Watch the blocks. Pick a Gnar. Be kind & settle."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.settle.wtf" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gnars Preview" />
        <meta
          property="og:description"
          content="Watch the blocks. Pick a Gnar. Be kind & settle."
        />
        <meta
          property="og:image"
          content="https://www.settle.wtf/images/og.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="settle.wtf" />
        <meta property="twitter:url" content="https://www.settle.wtf" />
        <meta name="twitter:title" content="Gnars Preview" />
        <meta
          name="twitter:description"
          content="Watch the blocks. Pick a Gnar. Be kind & settle."
        />
        <meta
          name="twitter:image"
          content="https://www.settle.wtf/images/og.png"
        />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
      </Head>

      <Preview />

      <Wtf />
    </div>
  );
};
export default Home;
