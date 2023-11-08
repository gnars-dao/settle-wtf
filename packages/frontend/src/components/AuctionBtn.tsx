import { useAccount, usePrepareContractWrite } from "wagmi";

import { useContractWrite } from "wagmi";
import { AuctionABI } from "../deployments/gnarsAuction";

const AuctionBtn = ({
  isLoading,
  gnarId,
}: {
  isLoading: boolean;
  gnarId: number | undefined;
}) => {
  const { isConnected } = useAccount();

  const { config } = usePrepareContractWrite({
    address: "0xc28e0d3c00296dd8c5c3f2e9707361920f92a209",
    abi: AuctionABI,
    functionName: "settleCurrentAndCreateNewAuction",
  });
  const { write } = useContractWrite(config);
  if (isConnected) {
    return (
      <>
        <span className="text-red-500 mb-4 block">
          {gnarId && gnarId % 10 === 7
            ? " To pay homage and show our respect as a Nouns extension, every Gnar ending in 7 is reserved for onboarding shredders."
            : ""}
        </span>
        <button
          type="button"
          onClick={async () => {
            if (!write) return;

            try {
              write();
            } catch (e) {
              console.log(e);
            }
          }}
          className="cursor-pointer rounded-lg border text-center border-transparent bg-[#92FFFF] px-1 py-4 w-full md:max-w-sm text-black shadow-sm hover:bg-[#83e6e6]"
        >
          {isLoading ? (
            <span className="w-full text-3xl text-slate-500">
              Fetching Block...
            </span>
          ) : (
            <span className="w-full text-3xl">Settle auction</span>
          )}
        </button>
      </>
    );
  }

  if (!isConnected) {
    return (
      <button
        type="button"
        disabled
        className="hidden md:inline-flex items-center cursor-not-allowed rounded-lg border text-center border-transparent bg-[#FF80BF] px-5 py-4 w-auto md:w-full text-xl font-medium text-black shadow-sm"
      >
        <section className="text-center w-full flex items-center justify-center">
          <span>Connect Wallet</span>
        </section>
      </button>
    );
  }

  return (
    <button
      type="button"
      disabled
      className="hidden md:inline-flex items-center cursor-pointer rounded-lg border text-center border-transparent bg-[#92FFFF] px-5 py-4 w-auto md:w-80 text-xl font-medium text-black shadow-sm hover:bg-[#83e6e6]"
    >
      {"lol"}
    </button>
  );
};

export default AuctionBtn;
