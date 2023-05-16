import dynamic from "next/dynamic";
import { GnarsSeeder } from "../deployments/gnarsSeeder";
import { GnarsDescriptor } from "../deployments/gnarsDescriptor";
import { AuctionABI } from "../deployments/gnarsAuction";
import { useContractRead } from "wagmi";
const InfoLil = dynamic(() => import("../components/InfoLil"), { ssr: false });

export default function Preview() {
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
  return (
    <div className="mx-auto">
      <div className="bg-[#22212C] min-h-80vh md:min-h-[60vh]">
        <InfoLil
          data={generateImage}
          isFetching={isFetching}
          isFetched={isFetched}
        />
      </div>
    </div>
  );
}
