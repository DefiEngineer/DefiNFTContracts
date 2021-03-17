// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract HackerNews {
  uint lastId;

  event NewArticle(uint _id, address _author, string _title, string _url, uint _createdAt);
  event NewVote(uint _articleId, uint _createdAt);

  function submit(address _author, string memory _title, string memory _url) public {
    uint id = lastId++;
    emit NewArticle(id, _author, _title, _url, block.timestamp);
  }

  function vote(address payable _author, uint _articleId) public payable {
    bool success = _author.send(0.1 ether);
    require(success, "Failed to send ether");
    emit NewVote(_articleId, block.timestamp);
  }
}
