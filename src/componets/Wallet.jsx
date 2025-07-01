import React from 'react'
import * as fcl from "@onflow/fcl"
import { useEffect, useState } from "react"
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
        <>
          <p>👛 Wallet Connected: {user.addr}</p>
          <button onClick={logOut}>Logout</button>
        </>
      ) : (
        <button onClick={logIn}>Connect Wallet</button>
      )}
    </div>

    </>
  )
}

export default Wallet