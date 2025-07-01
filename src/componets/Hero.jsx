import React from 'react'

function Hero() {
  return (
    <>
    <div className="relative bg-white overflow-hidden text-center py-24 ">
  {/* Gradient border circle */}
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
    <div className="w-[700px] h-[700px] rounded-full p-[5px] bg-gradient-to-tr from-[#823EE4] via-white to-[#A7F3D0]">
      <div className="w-full h-full rounded-full bg-white"></div>
    </div>
  </div>

  {/* Text Content */}
  <h1 className="relative z-10 text-4xl md:text-5xl font-bold">
    Reimagining Clinical Trials with{' '}
    <span className="text-[#28C76F]">Trust</span> and{' '}
    <span className="text-[#823EE4]">Transparency</span>.
  </h1>
  <p className="mt-4 text-[#6B7280] relative z-10">
  TrustDose brings clinical research on-chain — tamper-proof, auditable, and open to the world.
  </p>
 <p className="mt-2 text-sm text-[#6B7280] relative z-10">
  No more data tampering. No more opaque processes. Just verified progress, one block at a time.
</p>
  <div className="mt-8 flex justify-center gap-4 relative z-10">
    
    <button className="px-6 py-2 bg-[#A7F3D0] text-black rounded hover:bg-[#d5bff5]">
      GET STARTED
    </button>
  </div>
</div>


    </>
  )
}

export default Hero