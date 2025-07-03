import React from 'react';

function About() {
   
  return (
    <div id='about'  className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <div>
        <img
          className="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard light"
        />
        <img
          className="w-full hidden dark:block rounded-sm"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard dark"
        />
      </div>
      <div className="mt-4 md:mt-0">
       
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          About TrustDose
        </h2>
        <p className="mb-6 font-light text-gray-800 md:text-lg ">
          TrustDose is a blockchain-powered platform that transforms how clinical trials are registered, tracked, and funded. Built on the Flow blockchain, it ensures tamper-proof data, real-time transparency, and verifiable progress at every milestone.

Our mission is to rebuild trust in medical research — making trials more reliable, auditable, and accountable to researchers, funders, and the public.
        </p>
       
      </div>
    </div>
  );
}

export default About;
