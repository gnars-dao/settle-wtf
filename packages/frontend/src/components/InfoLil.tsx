import { Tab } from "@headlessui/react";
import Header from "./Header";
import AuctionBtn from "./AuctionBtn";
import Link from "next/link";
import { BigNumber } from "ethers";
import PendingLil from "./PendingLil";
import { useRouter } from "next/router";

interface Props {
  data: string | null;
  auctionTimestamp: number | undefined;
  gnarId: BigNumber;
  isLoading: boolean;
}

const InfoLil = ({ data, auctionTimestamp, gnarId, isLoading }: Props) => {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-2xl px-1.5 md:px-4 pt-6 pb-12 lg:max-w-6xl">
      <Header />
      <div className="flex flex-wrap items-start pt-8 ">
        <h1 className="text-5xl font-bold mb-2 text-[#F8F8F2] w-full">
          Preview Gnars
        </h1>
        <p className="font-bold text-[#92FFFF] text-3xl mb-6 hidden md:block">
          Preview the next Gnar before the auction
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 mb-6">
        <Tab.Group as="div" className="flex flex-col-reverse">
          <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
            <Tab.Panel>
              {auctionTimestamp &&
              auctionTimestamp < +Math.floor(Date.now() / 1000) ? (
                <img
                  src={`data:image/svg+xml;base64,${data}`}
                  alt={"nouns"}
                  className="h-full w-full object-cover shadow-xl object-center sm:rounded-lg relative"
                />
              ) : (
                <PendingLil />
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        {/* lilNoun info */}

        <div className="flex flex-col justify-center mt-3 md:mt-10 md:px-4 sm:mt-16 sm:px-0 lg:mt-0 my-auto h-full md:max-w-md">
          <div className="md:mt-8 w-full">
            {auctionTimestamp &&
            auctionTimestamp < +Math.floor(Date.now() / 1000) ? (
              <>
                <p className="text-[#92FFFF] font-bold mb-1 text-3xl hidden md:block">
                  Up next
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-[#F8F8F2] w-full mb-3">
                  Gnar {gnarId && gnarId.toNumber()}
                </h1>

                <AuctionBtn isLoading={isLoading} />

                <Link
                  href="#wtf"
                  className="text-[#92FFFF] underline font-balsamiq mt-4 inline-block"
                >
                  Learn more about settling and bidding
                </Link>
              </>
            ) : (
              <>
                <h2 className="text-white text-3xl md:text-5xl mt-8 md:mt-0 mb-3">
                  An auction is in progress!
                </h2>

                <p className="text-gray-200 text-2xl font-semibold">
                  Vist{" "}
                  <a
                    className="text-[#92FFFF] hover:underline"
                    href="https://www.gnars.wtf/"
                  >
                    Gnars.wtf
                  </a>{" "}
                  to get in on the action!
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoLil;
