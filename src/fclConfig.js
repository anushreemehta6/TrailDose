// src/fclConfig.js
import * as fcl from "@onflow/fcl";

fcl.config()
  .put("app.detail.title", "TrustDose")
  .put("app.detail.icon", "https://placekitten.com/g/200/200")
  .put("accessNode.api", "https://rest-testnet.onflow.org") // Testnet
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")
  .put("0xTrustDose", "0x49f216cc3af15405") // placeholder for now
