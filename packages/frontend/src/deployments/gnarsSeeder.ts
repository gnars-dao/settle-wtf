export const GnarsSeeder = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gnarId",
        type: "uint256",
      },
      {
        internalType: "contract IGnarDescriptorV2",
        name: "descriptor",
        type: "address",
      },
    ],
    name: "generateSeed",
    outputs: [
      {
        components: [
          {
            internalType: "uint48",
            name: "background",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "body",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "accessory",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "head",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "glasses",
            type: "uint48",
          },
        ],
        internalType: "struct IGnarSeederV2.Seed",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
