import type { Result } from "ethers/lib/utils";
import {
  useAccount,
  useBlockNumber,
  useContract,
  useContractWrite,
  usePrepareContractWrite,
  useProvider,
  useSigner,
} from "wagmi";

import LoadingSpinner from "./LoadingSpinner";
import { BlockProtect } from "../deployments/blockProtect";
import { BigNumber, utils } from "ethers";
import { writeContract, prepareWriteContract } from "wagmi/actions";

const AuctionBtn = ({
  data,
  isLoading,
}: {
  data: string | null;
  isLoading: boolean;
}) => {
  const {
    data: blockNumber,
    isError,
    isFetched,
    isSuccess: isBlockNumberSuccess,
    isLoading: isBlockLoading,
  } = useBlockNumber();

  const { isConnected } = useAccount();

  // const { config } = usePrepareContractWrite({
  //   address: "0xb83077111cd2CeEadbdf04B916E05530BD1EDEa9",
  //   abi: BlockProtect,
  //   functionName: "settleAuction",
  //   args: [
  //     "0xC28e0d3c00296dD8c5C3F2E9707361920f92a209",
  //     BigNumber.from(blockNumber),
  //   ],
  //   enabled: !!blockNumber && !!isBlockNumberSuccess,
  // });
  // const {
  //   data: writeData,
  //   isLoading: isWriteLoading,
  //   isSuccess,
  //   write,
  // } = useContractWrite(config);

  const provider = useProvider();
  const signer = useSigner();
  const contract = useContract({
    address: "0xb83077111cd2CeEadbdf04B916E05530BD1EDEa9",
    abi: BlockProtect,
    signerOrProvider: signer.data,
  });
  function handleClick() {
    // write?.();
    if (!contract || !blockNumber) return;
    contract.functions.settleAuction(
      "0xC28e0d3c00296dD8c5C3F2E9707361920f92a209",
      BigNumber.from(blockNumber)
    );
  }

  if (isConnected) {
    return (
      <button
        type="button"
        onClick={() => {
          handleClick();
          // if (!blockNumber) return;

          // try {
          //   const config = await prepareWriteContract({
          //     address: "0xb83077111cd2CeEadbdf04B916E05530BD1EDEa9",
          //     abi: BlockProtect,
          //     functionName: "settleAuction",
          //     args: [
          //       "0xC28e0d3c00296dD8c5C3F2E9707361920f92a209",
          //       BigNumber.from(blockNumber),
          //     ],
          //   });
          //   const data = await writeContract(config);
          //   console.log(data);
          // } catch (e) {
          //   console.log(e);
          // }
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
