import { useAccount, useBlockNumber } from "wagmi";

import { BlockProtect } from "../deployments/blockProtect";
import { BigNumber } from "ethers";
import { writeContract, prepareWriteContract } from "wagmi/actions";

const AuctionBtn = ({ isLoading }: { isLoading: boolean }) => {
  const { data: blockNumber } = useBlockNumber();

  const { isConnected } = useAccount();

  if (isConnected) {
    return (
      <button
        type="button"
        onClick={async () => {
          if (!blockNumber) return;

          try {
            const config = await prepareWriteContract({
              address: "0x595717Efa16D3600a31700880c17Aa3C2077f19d",
              abi: BlockProtect,
              functionName: "settleAuction",
              args: [BigNumber.from(blockNumber + 1)],
            });
            await writeContract(config);
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
    );
  }

  if (!blockNumber) {
    return (
      <button
        type="button"
        disabled
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
