// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

import {AppStorage} from "../libraries/LibAppStorage.sol";
import {LibMeta} from "../../shared/libraries/LibMeta.sol";
import {LibDiamond} from "../../shared/libraries/LibDiamond.sol";

contract Modifiers {
    AppStorage internal s;
    modifier onlyCardOwner(uint256 _tokenId) {
        require(LibMeta.msgSender() == s.aavegotchis[_tokenId].owner, "LibAppStorage: Only card owner can call this function");
        _;
    }
    modifier onlyUnlocked(uint256 _tokenId) {
        require(s.aavegotchis[_tokenId].locked == false, "LibAppStorage: Only callable on unlocked cards");
        _;
    }

    modifier onlyOwner {
        LibDiamond.enforceIsContractOwner();
        _;
    }

    modifier onlyDao {
        address sender = LibMeta.msgSender();
        require(sender == s.dao, "Only DAO can call this function");
        _;
    }

    modifier onlyDaoOrOwner {
        address sender = LibMeta.msgSender();
        require(sender == s.dao || sender == LibDiamond.contractOwner(), "LibAppStorage: Do not have access");
        _;
    }

    modifier onlyOwnerOrDaoOrGameManager {
        address sender = LibMeta.msgSender();
        require(sender == s.dao || sender == LibDiamond.contractOwner() || sender == s.gameManager, "LibAppStorage: Do not have access");
        _;
    }
}