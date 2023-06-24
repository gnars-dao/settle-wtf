export const BlockProtect = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_auctionHouseAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expectedBlock",
        type: "uint256",
      },
    ],
    name: "settleAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
