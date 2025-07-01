# 📘 architecture.md – Clinical Trial Registry on Flow

---

## 📌 Project Overview

This is a decentralized clinical trial registry built on the **Flow blockchain**. It allows **Principal Investigators (PIs)** to immutably register and update trials, while ensuring transparency, auditability, and public access.

Large files like protocols and consent forms are stored on **IPFS**, and all updates are timestamped on-chain.

---

## 🧱 Core Architecture Components

### 1. 🧩 Frontend (React + FCL)
- Built with React (via Vite)
- Uses **Flow Client Library (FCL)** to:
  - Connect wallets
  - Sign and send transactions
- Key pages:
  - `RegisterTrial.jsx`
  - `MyTrials.jsx`
  - `TrialExplorer.jsx`
  - `TrialDetails.jsx`
- Integrates with IPFS for document uploads
- Displays update history pulled from Flow

---

### 2. 🔗 Flow Smart Contract (Cadence)
Manages the immutable on-chain logic and state.

#### Contract Modules:
##### 🔹 TrialRegistry
- Stores all trials and maps them to Flow accounts
- Allows anyone to read trials
- Functions:
  - `createTrial()`
  - `getTrial(trialId)`
  - `getAllTrials()`

##### 🔹 Trial (Resource)
- Holds metadata + history + document hashes
- Owned by PI (Flow account)
- Functions:
  - `updateField(field, newValue)`
  - `addDocument(ipfsHash, docType)`
  - `viewUpdateHistory()`

---

### 3. 👜 Flow Wallet (PI)
- Required to:
  - Submit a trial
  - Update trial info
- Wallet address becomes the **authoritative identity** of the trial
- Can later be linked with Verifiable Credentials (e.g., from a university or regulatory body)

---

### 4. 📦 IPFS (via Web3.Storage or Pinata)
- Stores large or sensitive documents:
  - Full trial protocols
  - Consent forms
  - Ethics approval PDFs
- On-chain, we store:
  ```json
  {
    "ipfsHash": "QmXyz123...",
    "type": "Protocol",
    "uploadDate": "timestamp"
  }
  ```
- Verifies content integrity by matching hashes

---

## 🔐 Security & Trust

| Concern               | Handling                                  |
|----------------------|-------------------------------------------|
| Unauthorized edits   | Only the trial's Flow wallet can update   |
| Data tampering       | All changes are versioned & timestamped   |
| Fake trials          | Verification toggle (manual in v1)        |
| Bloated chain        | Documents stored off-chain, hash on-chain |

---

## 🧾 Data Storage Strategy

| Type          | Location     | Reason                                 |
|---------------|--------------|----------------------------------------|
| Metadata      | On-chain     | Transparent, tamper-proof              |
| Updates Log   | On-chain     | Traceable version history              |
| Large Docs    | IPFS         | Efficient, verifiable via hash         |
| Public View   | Frontend     | Open access for stakeholders           |

---

## 🔁 Workflow Summary

### ▶️ PI Registers a Trial:
1. Connects wallet
2. Fills metadata form
3. Uploads protocol PDF (optional, stored on IPFS)
4. Signs transaction → stored on Flow

### 🛠 PI Updates Trial Later:
1. Selects a trial
2. Modifies a field or adds new doc
3. Signs again → update stored immutably

### 🌐 Public Users:
- Visit explorer
- Search trials
- See update history + verify documents

---

## ⚙️ Project Folder Structure

```
/clinical-trial-registry/
├── contracts/
│   └── TrialRegistry.cdc
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── services/
│   └── utils/
├── ipfs/
│   └── uploader.js
├── docs/
│   ├── architecture.md
│   └── data-model.json
└── README.md
```
