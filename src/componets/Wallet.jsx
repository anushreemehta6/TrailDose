import React from 'react'
import * as fcl from "@onflow/fcl"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
function Wallet() {
      const [user, setUser] = useState({ loggedIn: null })

  useEffect(() => {
    fcl.currentUser().subscribe(setUser)
  }, [])

  const logIn = () => fcl.authenticate()
  const logOut = () => fcl.unauthenticate()
  return (
    <>
    


 <div>
      {user.loggedIn ? (
        <><div  >
          <p>👛 Wallet Connected: {user.addr}</p>
         
          </div>
           <button className="bg-[#A7F3D0] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#c2b1d8] transition duration-300 mr-8" onClick={logOut}>Logout</button>
           <Link to ='/details' className="bg-[#A7F3D0] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#c2b1d8] transition duration-300">Complete details</Link>
          {/* <button >Complete details</button> */}
        </>
      ) : (
        <button onClick={logIn}>Connect Wallet</button>
      )}
    </div>

    </>
  )
}

export default Wallet