// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Nft extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Nft entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Nft must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Nft", id.toString(), this);
    }
  }

  static load(id: string): Nft | null {
    return changetype<Nft | null>(store.get("Nft", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get collection(): string {
    let value = this.get("collection");
    return value!.toString();
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get sale(): string | null {
    let value = this.get("sale");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sale(value: string | null) {
    if (!value) {
      this.unset("sale");
    } else {
      this.set("sale", Value.fromString(<string>value));
    }
  }

  get bids(): Array<string> {
    let value = this.get("bids");
    return value!.toStringArray();
  }

  set bids(value: Array<string>) {
    this.set("bids", Value.fromStringArray(value));
  }
}

export class Collection extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Collection entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Collection must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Collection", id.toString(), this);
    }
  }

  static load(id: string): Collection | null {
    return changetype<Collection | null>(store.get("Collection", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get nfts(): Array<string> {
    let value = this.get("nfts");
    return value!.toStringArray();
  }

  set nfts(value: Array<string>) {
    this.set("nfts", Value.fromStringArray(value));
  }
}

export class Sale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Sale entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Sale must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Sale", id.toString(), this);
    }
  }

  static load(id: string): Sale | null {
    return changetype<Sale | null>(store.get("Sale", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get saleId(): BigInt {
    let value = this.get("saleId");
    return value!.toBigInt();
  }

  set saleId(value: BigInt) {
    this.set("saleId", Value.fromBigInt(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get saleType(): string {
    let value = this.get("saleType");
    return value!.toString();
  }

  set saleType(value: string) {
    this.set("saleType", Value.fromString(value));
  }

  get status(): boolean {
    let value = this.get("status");
    return value!.toBoolean();
  }

  set status(value: boolean) {
    this.set("status", Value.fromBoolean(value));
  }

  get bidStartTime(): BigInt | null {
    let value = this.get("bidStartTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set bidStartTime(value: BigInt | null) {
    if (!value) {
      this.unset("bidStartTime");
    } else {
      this.set("bidStartTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get bidEndTime(): BigInt | null {
    let value = this.get("bidEndTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set bidEndTime(value: BigInt | null) {
    if (!value) {
      this.unset("bidEndTime");
    } else {
      this.set("bidEndTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get currentOwner(): Bytes {
    let value = this.get("currentOwner");
    return value!.toBytes();
  }

  set currentOwner(value: Bytes) {
    this.set("currentOwner", Value.fromBytes(value));
  }
}

export class Bid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bid entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Bid must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Bid", id.toString(), this);
    }
  }

  static load(id: string): Bid | null {
    return changetype<Bid | null>(store.get("Bid", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bidId(): BigInt {
    let value = this.get("bidId");
    return value!.toBigInt();
  }

  set bidId(value: BigInt) {
    this.set("bidId", Value.fromBigInt(value));
  }

  get saleId(): BigInt {
    let value = this.get("saleId");
    return value!.toBigInt();
  }

  set saleId(value: BigInt) {
    this.set("saleId", Value.fromBigInt(value));
  }

  get sellerAddress(): Bytes {
    let value = this.get("sellerAddress");
    return value!.toBytes();
  }

  set sellerAddress(value: Bytes) {
    this.set("sellerAddress", Value.fromBytes(value));
  }

  get buyerAddress(): Bytes {
    let value = this.get("buyerAddress");
    return value!.toBytes();
  }

  set buyerAddress(value: Bytes) {
    this.set("buyerAddress", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get withdrawn(): boolean {
    let value = this.get("withdrawn");
    return value!.toBoolean();
  }

  set withdrawn(value: boolean) {
    this.set("withdrawn", Value.fromBoolean(value));
  }
}