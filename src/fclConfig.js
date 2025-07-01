// src/fclConfig.js
import * as fcl from "@onflow/fcl"

fcl.config()
  .put("app.detail.title", "Clinical Trial Registry")
  .put("app.detail.icon", "https://yourapp.com/icon.png") // optional
  .put("accessNode.api", "https://rest-testnet.onflow.org") // testnet
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")
