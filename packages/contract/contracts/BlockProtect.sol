// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

interface ISkateContractV2AuctionHouseV2 {
    function settleCurrentAndCreateNewAuction() external;
}

contract BlockProtect {
    function settleAuction(
        address _auctionHouseAddress,
        uint256 expectedBlock
    ) external {
        require(block.number <= expectedBlock, "Gnar missed");

        ISkateContractV2AuctionHouseV2(_auctionHouseAddress)
            .settleCurrentAndCreateNewAuction();
    }
}
