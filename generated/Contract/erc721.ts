// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RoyaltiesSetForCollection extends ethereum.Event {
  get params(): RoyaltiesSetForCollection__Params {
    return new RoyaltiesSetForCollection__Params(this);
  }
}

export class RoyaltiesSetForCollection__Params {
  _event: RoyaltiesSetForCollection;

  constructor(event: RoyaltiesSetForCollection) {
    this._event = event;
  }

  get royalties(): Array<RoyaltiesSetForCollectionRoyaltiesStruct> {
    return this._event.parameters[0].value.toTupleArray<
      RoyaltiesSetForCollectionRoyaltiesStruct
    >();
  }
}

export class RoyaltiesSetForCollectionRoyaltiesStruct extends ethereum.Tuple {
  get account(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class RoyaltiesSetForTokenId extends ethereum.Event {
  get params(): RoyaltiesSetForTokenId__Params {
    return new RoyaltiesSetForTokenId__Params(this);
  }
}

export class RoyaltiesSetForTokenId__Params {
  _event: RoyaltiesSetForTokenId;

  constructor(event: RoyaltiesSetForTokenId) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get royalties(): Array<RoyaltiesSetForTokenIdRoyaltiesStruct> {
    return this._event.parameters[1].value.toTupleArray<
      RoyaltiesSetForTokenIdRoyaltiesStruct
    >();
  }
}

export class RoyaltiesSetForTokenIdRoyaltiesStruct extends ethereum.Tuple {
  get account(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class erc721__collectionRoyaltiesResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAccount(): Address {
    return this.value0;
  }

  getValue(): BigInt {
    return this.value1;
  }
}

export class erc721__safeMintInputRoyaltiesSetStruct extends ethereum.Tuple {
  get set(): boolean {
    return this[0].toBoolean();
  }

  get royalties(): Array<erc721__safeMintInputRoyaltiesSetRoyaltiesStruct> {
    return this[1].toTupleArray<
      erc721__safeMintInputRoyaltiesSetRoyaltiesStruct
    >();
  }
}

export class erc721__safeMintInputRoyaltiesSetRoyaltiesStruct extends ethereum.Tuple {
  get account(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class erc721__getRoyaltiesResultValue0Struct extends ethereum.Tuple {
  get account(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class erc721 extends ethereum.SmartContract {
  static bind(address: Address): erc721 {
    return new erc721("erc721", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  collectionRoyalties(param0: BigInt): erc721__collectionRoyaltiesResult {
    let result = super.call(
      "collectionRoyalties",
      "collectionRoyalties(uint256):(address,uint96)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new erc721__collectionRoyaltiesResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_collectionRoyalties(
    param0: BigInt
  ): ethereum.CallResult<erc721__collectionRoyaltiesResult> {
    let result = super.tryCall(
      "collectionRoyalties",
      "collectionRoyalties(uint256):(address,uint96)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new erc721__collectionRoyaltiesResult(
        value[0].toAddress(),
        value[1].toBigInt()
      )
    );
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  royaltiesByTokenId(param0: BigInt): boolean {
    let result = super.call(
      "royaltiesByTokenId",
      "royaltiesByTokenId(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBoolean();
  }

  try_royaltiesByTokenId(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "royaltiesByTokenId",
      "royaltiesByTokenId(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  safeMint(
    to: Address,
    uri: string,
    royaltiesSet: erc721__safeMintInputRoyaltiesSetStruct
  ): BigInt {
    let result = super.call(
      "safeMint",
      "safeMint(address,string,(bool,(address,uint96)[])):(uint256)",
      [
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromString(uri),
        ethereum.Value.fromTuple(royaltiesSet)
      ]
    );

    return result[0].toBigInt();
  }

  try_safeMint(
    to: Address,
    uri: string,
    royaltiesSet: erc721__safeMintInputRoyaltiesSetStruct
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "safeMint",
      "safeMint(address,string,(bool,(address,uint96)[])):(uint256)",
      [
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromString(uri),
        ethereum.Value.fromTuple(royaltiesSet)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoyalties(
    _tokenId: BigInt
  ): Array<erc721__getRoyaltiesResultValue0Struct> {
    let result = super.call(
      "getRoyalties",
      "getRoyalties(uint256):((address,uint96)[])",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return result[0].toTupleArray<erc721__getRoyaltiesResultValue0Struct>();
  }

  try_getRoyalties(
    _tokenId: BigInt
  ): ethereum.CallResult<Array<erc721__getRoyaltiesResultValue0Struct>> {
    let result = super.tryCall(
      "getRoyalties",
      "getRoyalties(uint256):((address,uint96)[])",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<erc721__getRoyaltiesResultValue0Struct>()
    );
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class SafeMintCall extends ethereum.Call {
  get inputs(): SafeMintCall__Inputs {
    return new SafeMintCall__Inputs(this);
  }

  get outputs(): SafeMintCall__Outputs {
    return new SafeMintCall__Outputs(this);
  }
}

export class SafeMintCall__Inputs {
  _call: SafeMintCall;

  constructor(call: SafeMintCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get uri(): string {
    return this._call.inputValues[1].value.toString();
  }

  get royaltiesSet(): SafeMintCallRoyaltiesSetStruct {
    return changetype<SafeMintCallRoyaltiesSetStruct>(
      this._call.inputValues[2].value.toTuple()
    );
  }
}

export class SafeMintCall__Outputs {
  _call: SafeMintCall;

  constructor(call: SafeMintCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SafeMintCallRoyaltiesSetStruct extends ethereum.Tuple {
  get set(): boolean {
    return this[0].toBoolean();
  }

  get royalties(): Array<SafeMintCallRoyaltiesSetRoyaltiesStruct> {
    return this[1].toTupleArray<SafeMintCallRoyaltiesSetRoyaltiesStruct>();
  }
}

export class SafeMintCallRoyaltiesSetRoyaltiesStruct extends ethereum.Tuple {
  get account(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class BatchMintCall extends ethereum.Call {
  get inputs(): BatchMintCall__Inputs {
    return new BatchMintCall__Inputs(this);
  }

  get outputs(): BatchMintCall__Outputs {
    return new BatchMintCall__Outputs(this);
  }
}

export class BatchMintCall__Inputs {
  _call: BatchMintCall;

  constructor(call: BatchMintCall) {
    this._call = call;
  }

  get _totalNft(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _uri(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }

  get royaltiesSet(): BatchMintCallRoyaltiesSetStruct {
    return changetype<BatchMintCallRoyaltiesSetStruct>(
      this._call.inputValues[2].value.toTuple()
    );
  }
}

export class BatchMintCall__Outputs {
  _call: BatchMintCall;

  constructor(call: BatchMintCall) {
    this._call = call;
  }
}

export class BatchMintCallRoyaltiesSetStruct extends ethereum.Tuple {
  get set(): boolean {
    return this[0].toBoolean();
  }

  get royalties(): Array<BatchMintCallRoyaltiesSetRoyaltiesStruct> {
    return this[1].toTupleArray<BatchMintCallRoyaltiesSetRoyaltiesStruct>();
  }
}

export class BatchMintCallRoyaltiesSetRoyaltiesStruct extends ethereum.Tuple {
  get account(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class SetRoyaltiesByTokenIdCall extends ethereum.Call {
  get inputs(): SetRoyaltiesByTokenIdCall__Inputs {
    return new SetRoyaltiesByTokenIdCall__Inputs(this);
  }

  get outputs(): SetRoyaltiesByTokenIdCall__Outputs {
    return new SetRoyaltiesByTokenIdCall__Outputs(this);
  }
}

export class SetRoyaltiesByTokenIdCall__Inputs {
  _call: SetRoyaltiesByTokenIdCall;

  constructor(call: SetRoyaltiesByTokenIdCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get royaltiesSet(): SetRoyaltiesByTokenIdCallRoyaltiesSetStruct {
    return changetype<SetRoyaltiesByTokenIdCallRoyaltiesSetStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class SetRoyaltiesByTokenIdCall__Outputs {
  _call: SetRoyaltiesByTokenIdCall;

  constructor(call: SetRoyaltiesByTokenIdCall) {
    this._call = call;
  }
}

export class SetRoyaltiesByTokenIdCallRoyaltiesSetStruct extends ethereum.Tuple {
  get set(): boolean {
    return this[0].toBoolean();
  }

  get royalties(): Array<SetRoyaltiesByTokenIdCallRoyaltiesSetRoyaltiesStruct> {
    return this[1].toTupleArray<
      SetRoyaltiesByTokenIdCallRoyaltiesSetRoyaltiesStruct
    >();
  }
}

export class SetRoyaltiesByTokenIdCallRoyaltiesSetRoyaltiesStruct extends ethereum.Tuple {
  get account(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class SetRoyaltiesForCollectionCall extends ethereum.Call {
  get inputs(): SetRoyaltiesForCollectionCall__Inputs {
    return new SetRoyaltiesForCollectionCall__Inputs(this);
  }

  get outputs(): SetRoyaltiesForCollectionCall__Outputs {
    return new SetRoyaltiesForCollectionCall__Outputs(this);
  }
}

export class SetRoyaltiesForCollectionCall__Inputs {
  _call: SetRoyaltiesForCollectionCall;

  constructor(call: SetRoyaltiesForCollectionCall) {
    this._call = call;
  }

  get royalties(): Array<SetRoyaltiesForCollectionCallRoyaltiesStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      SetRoyaltiesForCollectionCallRoyaltiesStruct
    >();
  }
}

export class SetRoyaltiesForCollectionCall__Outputs {
  _call: SetRoyaltiesForCollectionCall;

  constructor(call: SetRoyaltiesForCollectionCall) {
    this._call = call;
  }
}

export class SetRoyaltiesForCollectionCallRoyaltiesStruct extends ethereum.Tuple {
  get account(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}