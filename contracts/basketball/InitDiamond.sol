// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

import {AppStorage} from "./libraries/LibAppStorage.sol";
import {LibMeta} from "../shared/libraries/LibMeta.sol";
import {LibDiamond} from "../shared/libraries/LibDiamond.sol";
import {IDiamondCut} from "../shared/interfaces/IDiamondCut.sol";
import {IERC165} from "../shared/interfaces/IERC165.sol";
import {IDiamondLoupe} from "../shared/interfaces/IDiamondLoupe.sol";
import {IERC173} from "../shared/interfaces/IERC173.sol";
import {ILink} from "./interfaces/ILink.sol";

contract InitDiamond {
    AppStorage internal s;

    struct Args {
        address dao;
        address daoTreasury;
        address dfsnft;
        address daiContract;
        bytes32 vrfKeyHash;
        uint256 vrfFee;
        address vrfCoordinator;
        address linkAddress;
        string name;
        string symbol;
    }

    function init(Args memory _args) external {
        s.dao = _args.dao;
        s.daoTreasury = _args.daoTreasury;
        s.dfsnft = _args.dfsnft;
        s.itemsBaseUri = "https://ipfs.io/ipfs/";

        s.domainSeparator = LibMeta.domainSeparator("BasketballDiamond", "V1");

        LibDiamond.DiamondStorage storage ds = LibDiamond.diamondStorage();

        // adding ERC165 data
        ds.supportedInterfaces[type(IERC165).interfaceId] = true;
        ds.supportedInterfaces[type(IDiamondCut).interfaceId] = true;
        ds.supportedInterfaces[type(IDiamondLoupe).interfaceId] = true;
        ds.supportedInterfaces[type(IERC173).interfaceId] = true;

        s.daiContract = _args.daiContract;
        s.vrfKeyHash = _args.vrfKeyHash;
        s.vrfFee = uint144(_args.vrfFee);
        s.vrfCoordinator = _args.vrfCoordinator;
        s.link = ILink(_args.linkAddress);

        s.listingFeeInWei = 1e17;

        s.name = _args.name;
        s.symbol = _args.symbol;
    }
}
