// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract mappingContract{
  mapping(address => uint) public normalMapping;
  mapping(uint => mapping (address => bool)) public nestedMapping;
  function setElement(uint a) public {
    normalMapping[msg.sender] = a;
  }
}