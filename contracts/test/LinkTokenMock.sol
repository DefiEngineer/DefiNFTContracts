// SPDX-License-Identifier: MIT
pragma solidity 0.8.3;

contract LinkTokenMock {
    bytes32 vrfKeyHash;
    uint256 seed;
    address requester;
    mapping(bytes32 => uint256) nonces;

    function transferAndCall(
        address _to,
        uint256 _value,
        bytes calldata _data
    ) external returns (bool) {
        _to;
        _value;
        (vrfKeyHash, seed) = abi.decode(_data, (bytes32, uint256));
        requester = msg.sender;
        nonces[vrfKeyHash]++;
        return true;
    }

    function balanceOf(address _account) external pure returns (uint256 balanceOf_) {
        _account;
        balanceOf_ = 5e18;
    }

    function getRequestId() external view returns (bytes32 requestId_) {
        bytes32 input = keccak256(abi.encode(vrfKeyHash, seed, requester, nonces[vrfKeyHash] - 1));
        requestId_ = keccak256(abi.encodePacked(vrfKeyHash, input));
    }
}
