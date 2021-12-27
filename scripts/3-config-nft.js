import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xc3D851cF7C6c527C385255a7085c8075e3Fd45a4",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "WADA Token",
        description: "This NFT will give you access to WadaDAO!",
        image: readFileSync("scripts/assets/token.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()