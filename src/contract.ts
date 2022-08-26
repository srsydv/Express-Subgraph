import { BigInt,Address, BigDecimal,store, TypedMap } from "@graphprotocol/graph-ts"
import {
  Contract,
  AdminChanged,
  NFTBought,
  BeaconUpgraded,
  BidExecuted,
  BidOrderReturn,
  ERC721Deployed,
  OwnershipTransferred,
  TokenMetaReturn,
  Upgraded,
  TokenMetaReturnDataStruct,

} from "../generated/Contract/Contract"
import {erc721} from "../generated/Contract/erc721"
import {  Nft, Collection, Sale, Bid  } from "../generated/schema"


export function handleNFTBought(event: NFTBought): void {
}

export function handleBeaconUpgraded(event: BeaconUpgraded): void {}

export function handleBidExecuted(event: BidExecuted): void {}

export function handleBidOrderReturn(event: BidOrderReturn): void {
  let bidId = event.params.bid.bidId.toString();
  let saleId = event.params.bid.saleId.toString();
  let id = saleId+"/"+bidId;
    let bidData = new Bid(id);
    bidData.bidId = event.params.bid.bidId
    bidData.saleId = event.params.bid.saleId;
    bidData.sellerAddress = event.params.bid.sellerAddress
    bidData.buyerAddress = event.params.bid.buyerAddress
    bidData.price = event.params.bid.price
    bidData.withdrawn = event.params.bid.withdrawn
    bidData.save()
  let contract = Contract.bind(event.address)
  let data = contract._tokenMeta(event.params.bid.saleId)
  let nftId = (data.value1.toHexString()+"/"+data.value2.toString())
  let nft = Nft.load(nftId)
  if(nft == null){
    nft = new Nft(nftId)
  }
  let bids = nft.bids;
  bids.push(id);
  nft.bids = bids;

  
  nft.save();
}

export function handleERC721Deployed(event: ERC721Deployed): void {  
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTokenMetaReturn(event: TokenMetaReturn): void {
  let address = event.params.data.collectionAddress.toHexString();
  let nftId = address + "/" + event.params.data.tokenId.toString();
  let contract = erc721.bind(event.params.data.collectionAddress);
    let nft = new Nft(nftId);

    nft.blockNumber = event.block.number
    nft.transactionHash = event.transaction.hash
    nft.tokenAddress = event.params.data.collectionAddress
    nft.tokenId = event.params.data.tokenId
    nft.tokenURI = contract.tokenURI(event.params.data.tokenId);
    nft.creator = contract.owner();
    nft.createdAt = event.block.timestamp;
    nft.collection = nftId
    nft.sale = event.params.data.saleId.toString();
    let bids = nft.bids;
    bids.push('0');
    nft.bids = bids;
    nft.save();
  

  updateCollection(event.params.data.tokenId, event.params.data.collectionAddress, event);
  updateSaledata(event.params.data.saleId, event.address, event.params.data.directSale)

}

export function handleUpgraded(event: Upgraded): void {}

export function updateCollection(nftId: BigInt, address:Address, event:TokenMetaReturn ): void{
  let id = address.toHexString();
  if (Collection.load(id) == null){
    let nftContract = new Collection(id)
    let contract = erc721.bind(address);
    nftContract.name = contract.name();
    nftContract.symbol = contract.symbol();
    nftContract.creator = contract.owner();
    nftContract.createdAt = event.block.timestamp;
    nftContract.save()
  }
}

function updateSaledata(saleId: BigInt, address: Address, directSale: bool): void {
  let id = saleId.toString()
 
    let saleData = new Sale(id);
    let contract = Contract.bind(address)
    let data = contract.try__tokenMeta(saleId);
    saleData.saleId = data.value.value0;
    saleData.tokenAddress = data.value.value1;
    saleData.tokenID = data.value.value2;
    saleData.price = data.value.value3;
    if(directSale!==true){
      saleData.saleType = "BidSale";
      saleData.bidStartTime = data.value.value7;
      saleData.bidEndTime = data.value.value8;
    }else{
      saleData.saleType = "DirectSale";
    }
    saleData.status = data.value.value6;
    saleData.currentOwner = data.value.value9;
    saleData.save();
}



// export let ZERO_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000000");
// export let BIGINT_ZERO = BigInt.fromI32(0);
// export let BIGINT_ONE = BigInt.fromI32(1);
// export let BIGDECIMAL_ZERO = new BigDecimal(BIGINT_ZERO);
