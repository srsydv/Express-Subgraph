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

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class BidExecuted extends ethereum.Event {
  get params(): BidExecuted__Params {
    return new BidExecuted__Params(this);
  }
}

export class BidExecuted__Params {
  _event: BidExecuted;

  constructor(event: BidExecuted) {
    this._event = event;
  }

  get price(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class BidOrderReturn extends ethereum.Event {
  get params(): BidOrderReturn__Params {
    return new BidOrderReturn__Params(this);
  }
}

export class BidOrderReturn__Params {
  _event: BidOrderReturn;

  constructor(event: BidOrderReturn) {
    this._event = event;
  }

  get bid(): BidOrderReturnBidStruct {
    return changetype<BidOrderReturnBidStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class BidOrderReturnBidStruct extends ethereum.Tuple {
  get bidId(): BigInt {
    return this[0].toBigInt();
  }

  get saleId(): BigInt {
    return this[1].toBigInt();
  }

  get sellerAddress(): Address {
    return this[2].toAddress();
  }

  get buyerAddress(): Address {
    return this[3].toAddress();
  }

  get price(): BigInt {
    return this[4].toBigInt();
  }

  get withdrawn(): boolean {
    return this[5].toBoolean();
  }
}

export class ERC721Deployed extends ethereum.Event {
  get params(): ERC721Deployed__Params {
    return new ERC721Deployed__Params(this);
  }
}

export class ERC721Deployed__Params {
  _event: ERC721Deployed;

  constructor(event: ERC721Deployed) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NFTBought extends ethereum.Event {
  get params(): NFTBought__Params {
    return new NFTBought__Params(this);
  }
}

export class NFTBought__Params {
  _event: NFTBought;

  constructor(event: NFTBought) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get saleId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
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

export class TokenMetaReturn extends ethereum.Event {
  get params(): TokenMetaReturn__Params {
    return new TokenMetaReturn__Params(this);
  }
}

export class TokenMetaReturn__Params {
  _event: TokenMetaReturn;

  constructor(event: TokenMetaReturn) {
    this._event = event;
  }

  get data(): TokenMetaReturnDataStruct {
    return changetype<TokenMetaReturnDataStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokenMetaReturnDataStruct extends ethereum.Tuple {
  get saleId(): BigInt {
    return this[0].toBigInt();
  }

  get collectionAddress(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get directSale(): boolean {
    return this[4].toBoolean();
  }

  get bidSale(): boolean {
    return this[5].toBoolean();
  }

  get status(): boolean {
    return this[6].toBoolean();
  }

  get bidStartTime(): BigInt {
    return this[7].toBigInt();
  }

  get bidEndTime(): BigInt {
    return this[8].toBigInt();
  }

  get currentOwner(): Address {
    return this[9].toAddress();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Contract__BidsResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;
  value3: Address;
  value4: BigInt;
  value5: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: Address,
    value3: Address,
    value4: BigInt,
    value5: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    return map;
  }

  getBidId(): BigInt {
    return this.value0;
  }

  getSaleId(): BigInt {
    return this.value1;
  }

  getSellerAddress(): Address {
    return this.value2;
  }

  getBuyerAddress(): Address {
    return this.value3;
  }

  getPrice(): BigInt {
    return this.value4;
  }

  getWithdrawn(): boolean {
    return this.value5;
  }
}

export class Contract___tokenMetaResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: boolean;
  value5: boolean;
  value6: boolean;
  value7: BigInt;
  value8: BigInt;
  value9: Address;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: boolean,
    value5: boolean,
    value6: boolean,
    value7: BigInt,
    value8: BigInt,
    value9: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromAddress(this.value9));
    return map;
  }

  getSaleId(): BigInt {
    return this.value0;
  }

  getCollectionAddress(): Address {
    return this.value1;
  }

  getTokenId(): BigInt {
    return this.value2;
  }

  getPrice(): BigInt {
    return this.value3;
  }

  getDirectSale(): boolean {
    return this.value4;
  }

  getBidSale(): boolean {
    return this.value5;
  }

  getStatus(): boolean {
    return this.value6;
  }

  getBidStartTime(): BigInt {
    return this.value7;
  }

  getBidEndTime(): BigInt {
    return this.value8;
  }

  getCurrentOwner(): Address {
    return this.value9;
  }
}

export class Contract__collectionsResult {
  value0: string;
  value1: string;
  value2: Address;
  value3: Address;
  value4: string;

  constructor(
    value0: string,
    value1: string,
    value2: Address,
    value3: Address,
    value4: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    return map;
  }

  getName(): string {
    return this.value0;
  }

  getSymbol(): string {
    return this.value1;
  }

  getContractAddress(): Address {
    return this.value2;
  }

  getOwner(): Address {
    return this.value3;
  }

  getDescription(): string {
    return this.value4;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  Bids(param0: BigInt, param1: BigInt): Contract__BidsResult {
    let result = super.call(
      "Bids",
      "Bids(uint256,uint256):(uint256,uint256,address,address,uint256,bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new Contract__BidsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toBigInt(),
      result[5].toBoolean()
    );
  }

  try_Bids(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<Contract__BidsResult> {
    let result = super.tryCall(
      "Bids",
      "Bids(uint256,uint256):(uint256,uint256,address,address,uint256,bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__BidsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toBigInt(),
        value[5].toBoolean()
      )
    );
  }

  _tokenMeta(param0: BigInt): Contract___tokenMetaResult {
    let result = super.call(
      "_tokenMeta",
      "_tokenMeta(uint256):(uint256,address,uint256,uint256,bool,bool,bool,uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Contract___tokenMetaResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBoolean(),
      result[5].toBoolean(),
      result[6].toBoolean(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toAddress()
    );
  }

  try__tokenMeta(
    param0: BigInt
  ): ethereum.CallResult<Contract___tokenMetaResult> {
    let result = super.tryCall(
      "_tokenMeta",
      "_tokenMeta(uint256):(uint256,address,uint256,uint256,bool,bool,bool,uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract___tokenMetaResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBoolean(),
        value[5].toBoolean(),
        value[6].toBoolean(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toAddress()
      )
    );
  }

  collectionIdTracker(): BigInt {
    let result = super.call(
      "collectionIdTracker",
      "collectionIdTracker():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_collectionIdTracker(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "collectionIdTracker",
      "collectionIdTracker():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  collectionToOwner(param0: Address): Address {
    let result = super.call(
      "collectionToOwner",
      "collectionToOwner(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toAddress();
  }

  try_collectionToOwner(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "collectionToOwner",
      "collectionToOwner(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  collections(param0: BigInt): Contract__collectionsResult {
    let result = super.call(
      "collections",
      "collections(uint256):(string,string,address,address,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Contract__collectionsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toString()
    );
  }

  try_collections(
    param0: BigInt
  ): ethereum.CallResult<Contract__collectionsResult> {
    let result = super.tryCall(
      "collections",
      "collections(uint256):(string,string,address,address,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__collectionsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toString()
      )
    );
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
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

  ownerToCollections(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "ownerToCollections",
      "ownerToCollections(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_ownerToCollections(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ownerToCollections",
      "ownerToCollections(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class BidCall extends ethereum.Call {
  get inputs(): BidCall__Inputs {
    return new BidCall__Inputs(this);
  }

  get outputs(): BidCall__Outputs {
    return new BidCall__Outputs(this);
  }
}

export class BidCall__Inputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get _saleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BidCall__Outputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }
}

export class BuyNFTCall extends ethereum.Call {
  get inputs(): BuyNFTCall__Inputs {
    return new BuyNFTCall__Inputs(this);
  }

  get outputs(): BuyNFTCall__Outputs {
    return new BuyNFTCall__Outputs(this);
  }
}

export class BuyNFTCall__Inputs {
  _call: BuyNFTCall;

  constructor(call: BuyNFTCall) {
    this._call = call;
  }

  get _saleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyNFTCall__Outputs {
  _call: BuyNFTCall;

  constructor(call: BuyNFTCall) {
    this._call = call;
  }
}

export class SellNFT_byBidCall extends ethereum.Call {
  get inputs(): SellNFT_byBidCall__Inputs {
    return new SellNFT_byBidCall__Inputs(this);
  }

  get outputs(): SellNFT_byBidCall__Outputs {
    return new SellNFT_byBidCall__Outputs(this);
  }
}

export class SellNFT_byBidCall__Inputs {
  _call: SellNFT_byBidCall;

  constructor(call: SellNFT_byBidCall) {
    this._call = call;
  }

  get _collectionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _bidTime(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class SellNFT_byBidCall__Outputs {
  _call: SellNFT_byBidCall;

  constructor(call: SellNFT_byBidCall) {
    this._call = call;
  }
}

export class CancelSaleCall extends ethereum.Call {
  get inputs(): CancelSaleCall__Inputs {
    return new CancelSaleCall__Inputs(this);
  }

  get outputs(): CancelSaleCall__Outputs {
    return new CancelSaleCall__Outputs(this);
  }
}

export class CancelSaleCall__Inputs {
  _call: CancelSaleCall;

  constructor(call: CancelSaleCall) {
    this._call = call;
  }

  get _saleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelSaleCall__Outputs {
  _call: CancelSaleCall;

  constructor(call: CancelSaleCall) {
    this._call = call;
  }
}

export class ExecuteBidOrderCall extends ethereum.Call {
  get inputs(): ExecuteBidOrderCall__Inputs {
    return new ExecuteBidOrderCall__Inputs(this);
  }

  get outputs(): ExecuteBidOrderCall__Outputs {
    return new ExecuteBidOrderCall__Outputs(this);
  }
}

export class ExecuteBidOrderCall__Inputs {
  _call: ExecuteBidOrderCall;

  constructor(call: ExecuteBidOrderCall) {
    this._call = call;
  }

  get _saleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _bidOrderID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ExecuteBidOrderCall__Outputs {
  _call: ExecuteBidOrderCall;

  constructor(call: ExecuteBidOrderCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
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

export class SellNFTCall extends ethereum.Call {
  get inputs(): SellNFTCall__Inputs {
    return new SellNFTCall__Inputs(this);
  }

  get outputs(): SellNFTCall__Outputs {
    return new SellNFTCall__Outputs(this);
  }
}

export class SellNFTCall__Inputs {
  _call: SellNFTCall;

  constructor(call: SellNFTCall) {
    this._call = call;
  }

  get _collectionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SellNFTCall__Outputs {
  _call: SellNFTCall;

  constructor(call: SellNFTCall) {
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

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}

export class WithdrawBidMoneyCall extends ethereum.Call {
  get inputs(): WithdrawBidMoneyCall__Inputs {
    return new WithdrawBidMoneyCall__Inputs(this);
  }

  get outputs(): WithdrawBidMoneyCall__Outputs {
    return new WithdrawBidMoneyCall__Outputs(this);
  }
}

export class WithdrawBidMoneyCall__Inputs {
  _call: WithdrawBidMoneyCall;

  constructor(call: WithdrawBidMoneyCall) {
    this._call = call;
  }

  get _saleId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _bidId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawBidMoneyCall__Outputs {
  _call: WithdrawBidMoneyCall;

  constructor(call: WithdrawBidMoneyCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _feeAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class Initialize1Call extends ethereum.Call {
  get inputs(): Initialize1Call__Inputs {
    return new Initialize1Call__Inputs(this);
  }

  get outputs(): Initialize1Call__Outputs {
    return new Initialize1Call__Outputs(this);
  }
}

export class Initialize1Call__Inputs {
  _call: Initialize1Call;

  constructor(call: Initialize1Call) {
    this._call = call;
  }
}

export class Initialize1Call__Outputs {
  _call: Initialize1Call;

  constructor(call: Initialize1Call) {
    this._call = call;
  }
}

export class DeployERC721Call extends ethereum.Call {
  get inputs(): DeployERC721Call__Inputs {
    return new DeployERC721Call__Inputs(this);
  }

  get outputs(): DeployERC721Call__Outputs {
    return new DeployERC721Call__Outputs(this);
  }
}

export class DeployERC721Call__Inputs {
  _call: DeployERC721Call;

  constructor(call: DeployERC721Call) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get description(): string {
    return this._call.inputValues[2].value.toString();
  }

  get royalties(): Array<DeployERC721CallRoyaltiesStruct> {
    return this._call.inputValues[3].value.toTupleArray<
      DeployERC721CallRoyaltiesStruct
    >();
  }
}

export class DeployERC721Call__Outputs {
  _call: DeployERC721Call;

  constructor(call: DeployERC721Call) {
    this._call = call;
  }
}

export class DeployERC721CallRoyaltiesStruct extends ethereum.Tuple {
  get account(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}