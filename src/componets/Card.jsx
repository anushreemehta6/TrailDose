import React from 'react';

function Card() {
  return (
    <div className=" m-5 grid md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="p-[4px] bg-gradient-to-tr from-[#00EF8B] via-white to-[#6B7280] rounded-lg max-w-sm hover:shadow-md transition">
        <div className="bg-white rounded-lg p-6 shadow-sm hover:bg-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">🔒 Immutable Milestone Logging</h3>
          <p className="text-gray-600 text-sm">
            Record every trial milestone on-chain. Tamper-proof, timestamped, and fully transparent.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-[4px] bg-gradient-to-tr from-[#00EF8B] via-white to-[#6B7280] rounded-lg max-w-sm hover:shadow-md transition">
        <div className="bg-white rounded-lg p-6 shadow-sm hover:bg-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">🎫 Role-Based Access via NFTs</h3>
          <p className="text-gray-600 text-sm">
            Researchers (PIs), Reviewers, and Funders get cryptographic NFT-based access controls to securely manage and verify trial progress.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="p-[4px] bg-gradient-to-tr from-[#00EF8B] via-white to-[#6B7280] rounded-lg max-w-sm hover:shadow-md transition">
        <div className="bg-white rounded-lg p-6 shadow-sm hover:bg-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">💸 Smart Milestone-Based Funding</h3>
          <p className="text-gray-600 text-sm">
            Funds are automatically released only after verified milestone completion — reducing misuse and increasing accountability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
