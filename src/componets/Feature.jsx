import React from 'react';

function Feature() {
  const features = [
    {
      title: "Immutable Milestone Logging",
      description:
        "All trial events are recorded permanently on-chain with timestamps and wallet signatures.",
    },
    
    {
      title: "Smart Milestone-Based Funding",
      description:
        "Funds are disbursed automatically only after verified trial progress.",
    },
    {
      title: "Real-Time Dashboards",
      description:
        "Live visual dashboards for the public, reviewers, and funders showing current trial status.",
    },
    {
      title: "Public Audit Trail",
      description:
        "View who submitted what, when, and how — permanently logged and auditable.",
    },
    {
      title: "Live Proof-of-Compliance",
      description:
        "Immutable trail of submission history helps avoid falsification or retrospective edits.",
    },
    {
      title: "Intelligent Alerts",
      description:
        "Flags delays, incomplete milestones, or suspicious activity for reviewers and funders.",
    },
  ];

  return (
    <section className="bg-white" id="features">
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="max-w-screen-md mx-auto mb-12 text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#101828]">
            Built for Transparent Research
          </h2>
          <p className="text-gray-600 sm:text-xl">
            TrustDose enables compliance, funding, and visibility — all backed by blockchain.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div key={index}>
              <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-[#823EE4]/10">
                <svg
                  className="w-6 h-6 text-[#823EE4]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#101828]">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
