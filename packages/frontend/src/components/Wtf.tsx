/* eslint-disable react/no-unescaped-entities */
const Wtf = () => {
  return (
    <div className="w-full mx-auto max-w-2xl px-4  py-2 lg:max-w-6xl pt-20 mb-20">
      <section className="w-full text-left mb-8">
        <h1 className="text-5xl mb-8 mt-4" id="wtf">
          WTF?
        </h1>
        <p className="max-w-[90ch] text-lg font-balsamiq mb-16">
          Gnars is a community owned (and run) extreme sports club. We prefer a
          world where kids aren’t shilled energy drinks by their heroes. So as a
          community of action sports enthusiasts, we’ve formed a DAO to rethink
          how shredders get sponsored. Based on Nouns open source code and CC0
          artwork, they’re stored fully on-chain on Ethereum with no external
          dependencies (not even IPFS), and each one represents a DAO vote.
          We’re changing the way extreme sport is funded with backing from Nouns
          DAO. Start creating Gnars off-chain using the Playground or learn more
          at gnars.com.
        </p>
      </section>
      <section className="w-full text-left mb-20">
        <h2 className="text-4xl mb-4">Summary</h2>
        <p className="max-w-[90ch] text-lg font-balsamiq">
          <ul className="list-disc px-8">
            <li className="mb-2">
              Gnars are determined by the block that they are minted on.{" "}
            </li>
            <li className="mb-2">
              Preview Gnars lets you watch, block by block, the next possible
              Gnar.{" "}
            </li>
            <li className="mb-2">
              The block where “settlement” occurs determines the next Gnar.
            </li>
            <li className="mb-2">
              Settling the auction allows you to mint the shown Gnar as the next
              auction.{" "}
            </li>

            <li className="mb-2">
              Settlement and wallet confirmation have to happen all within the
              current block.
            </li>
            <li className="mb-2">
              Blocks change REALLY FAST, so decide you want your Gnarn quickly.
              You only have seconds!
            </li>
          </ul>
        </p>
      </section>

      {/* <section className="mb-14">
        <div className="relative h-0 pb-[56.25%]">
          <iframe
            src="https://www.loom.com/embed/a6abe7704d8449b789563accea2ca6f9"
            frameBorder="0"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          />
        </div>
      </section> */}

      <section className="w-full text-left mb-20">
        <h2 className="text-4xl mb-4">Settling Auctions</h2>
        <p className="max-w-[90ch] text-lg font-balsamiq mb-8">
          Ethereum Blocks last 12 seconds, so you need to act FAST. When a Gnar
          appears that you want to mint, you must click “Settle auction” and
          confirm in your wallet. Both of these steps must occur during the
          current block. Otherwise, your transaction will fail.
        </p>
        <h3 className="text-2xl mb-4 font-balsamiq">Successful Settlement</h3>
        <p className="max-w-[90ch] text-lg font-balsamiq mb-8">
          Congratulations! But you’re not done yet! Your Gnar is now up for
          auction on the Gnars website. Place your bid and good luck!
        </p>
        <h3 className="text-2xl mb-4 font-balsamiq">Failed Settlement</h3>
        <p className="max-w-[90ch] text-lg font-balsamiq mb-20">
          If you have a failed transaction, your transaction didn’t make it onto
          the current block, and no auction was started. This can be
          frustrating, but keep trying!
        </p>
        <h2 className="text-4xl mb-4 mt-8">The Team</h2>
        <ul className="list-disc px-8 text-lg font-balsamiq mb-16">
          <li className="mb-2">
            <a
              className="text-[#D63C5E] hover:underline"
              href="https://twitter.com/0xMulf"
            >
              @0xMulf
            </a>{" "}
            Dev
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Wtf;
