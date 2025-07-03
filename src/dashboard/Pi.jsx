import React from 'react'
import Navbar from '../componets/Navbar'
import * as fcl from "@onflow/fcl"
import { useEffect, useState } from 'react'
import Trails from './Trails'

function Pi() {
  const [user, setUser] = useState({ loggedIn: true })

  useEffect(() => {
    fcl.currentUser().subscribe(setUser)
  }, [])

  const logIn = () => fcl.authenticate()
  const logOut = () => fcl.unauthenticate()
  const nameString = localStorage.getItem("userInfo");
  const name = JSON.parse(nameString)
  const FirstName = name.firstName
  const LastName = name.lastName

  return (
    <>
      <Navbar />
      <div className='m-5 text-center mb-10'>
        <h1 class=" text-center
       mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl  ">Welcome, Dr. {FirstName} {LastName}</h1>
        <h1 class=" text-center mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl ">Wallet Connected, {user.addr}</h1>
        <p class=" text-center mb-6 text-lg font-normal text-gray-800 lg:text-xl ">Your research journey is protected and transparent with TrustDose.</p>
        <p class=" text-center mb-6 text-lg font-normal text-gray-800 lg:text-xl ">Launch a new clinical trial on-chain. Record every milestone securely, assign reviewers, and link funding — all from one place.</p>
        <a
    href="/register-trial"
    className="bg-[#A7F3D0] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#c2b1d8] transition duration-300 mr-8 "
  >
     Register Trial
    
  </a>
   
      </div>
      <div className='m-5'>
<Trails/>
      </div>
      
    </>
  )
}

export default Pi