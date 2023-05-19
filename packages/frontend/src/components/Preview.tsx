import dynamic from "next/dynamic";
import { GnarsSeeder } from "../deployments/gnarsSeeder";
import { GnarsDescriptor } from "../deployments/gnarsDescriptor";
import { AuctionABI } from "../deployments/gnarsAuction";
import { useContractRead } from "wagmi";
import { BigNumber } from "ethers";
import { useState } from "react";
const InfoLil = dynamic(() => import("../components/InfoLil"), { ssr: false });
const MissedLils = dynamic(() => import("../components/MissedLils"), {
  ssr: false,
});
type Seed = {
  background: number;
  body: number;
  accessory: number;
  head: number;
  glasses: number;
};

export default function Preview() {
  const [gnarId, setGnarId] = useState(BigNumber.from(1));
  const [seedData, setSeedData] = useState<Seed>({
    background: 0,
    body: 0,
    accessory: 0,
    head: 0,
    glasses: 0,
  });
  const [imgData, setImageData] = useState<null | string>(null);
  const { isSuccess: auctionLoaded, data: auctionData } = useContractRead({
    address: "0xC28e0d3c00296dD8c5C3F2E9707361920f92a209",
    abi: AuctionABI,
    functionName: "auction",
    watch: true,
    overrides: { blockTag: "pending" },
    onSuccess: (data) => {
      setGnarId(BigNumber.from(parseInt(data.gnarId._hex) + 1));
    },
  });

  const { isSuccess: seedLoaded } = useContractRead({
    address: "0xb69d980feb3c2ee143ca14feb870fe09f8dfa1fc",
    abi: GnarsSeeder,
    functionName: "generateSeed",
    watch: true,
    args: [gnarId, "0x0CBcBF0cDBe9842fa53b7C107738714c2a9af1d5"],
    overrides: { blockTag: "pending" },
    onSuccess: (data) => {
      setSeedData(data);
    },
  });

  const { isLoading: isImageLoading } = useContractRead({
    address: "0x0CBcBF0cDBe9842fa53b7C107738714c2a9af1d5",
    abi: GnarsDescriptor,
    functionName: "generateSVGImage",
    watch: true,
    args: [seedData],
    overrides: { blockTag: "pending" },
    onSuccess: (data) => {
      setImageData(data);
    },
  });

  const auctionTimestamp = auctionData?.endTimestamp.toNumber();

  return (
    <>
      <div className="mx-auto max-w-2xl px-1.5 md:px-4 pt-6 pb-12 lg:max-w-6xl">
        <InfoLil
          data={imgData}
          auctionTimestamp={auctionTimestamp}
          gnarId={gnarId}
          isLoading={isImageLoading}
        />
      </div>

      {auctionTimestamp &&
        auctionTimestamp < +Math.floor(Date.now() / 1000) && (
          <MissedLils data={imgData} isImageLoading={isImageLoading} />
        )}
    </>
  );
}
