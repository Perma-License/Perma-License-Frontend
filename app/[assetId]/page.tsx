'use client'
import Image from 'next/image'
import { writeContract } from 'arweavekit/contract'
import { ArweaveWebWallet } from "arweave-wallet-connector";

export default function Home() {

    const dosth = async () => {
        const webWallet = new ArweaveWebWallet();
        webWallet.setUrl("arweave.app");
        await webWallet.connect();

        const writeResult = await writeContract({
            wallet: webWallet,
            environment: 'mainnet',
            strategy: 'arweave',
            contractTxId: "1oWaYllEGVS3z9Fma-kqHkPEdxO6SRvF2DfJWClWVxo",
            options: {
                function: 'getRights',
                asset: "DtPm7c1TMDSIAACkwo1XngE7zlCkL5FDBkCWmFh3b1A",
                paymentTxn: "DtPm7c1TMDSIAACkwo1XngE7zlCkL5FDBkCWmFh3b1A"
            }
        });

    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hey lmao
      <button className='block' onClick={() => {dosth()}}>Try me</button>
    </main>
  )
}
