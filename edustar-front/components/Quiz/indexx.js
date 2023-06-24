'use client'

import { useWeb3 } from "@3rdweb/hooks"
// import Dashboard from "./Dashboard";

export default function Home() {
  const { address, connectWallet } = useWeb3();

  return (
    <>
      {address ?
        <div address={address} />
        :
        (
          <button onClick={() => connectWallet("injected")}>Connect Wallet</button>
        )
      }
    </>
  )
}