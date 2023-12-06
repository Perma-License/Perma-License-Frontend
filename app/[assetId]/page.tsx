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
    <main className="mx-32 mt-16">
      <div className="flex flex-row justify-center gap-4 ">
        {/* Asset Images */}
        <img src="" className="h-[585px] w-[585px] border-2 border-BaseWhite border-opacity-50 rounded-xl" alt='image' />
        {/* Asset Info Container */}
        <div className='flex flex-col h-[585px] w-[585px] border-2 border-BaseWhite border-opacity-50 rounded-xl'>
          {/* Description */}
          <div className='flex items-center p-2 gap-2'>
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M19 1H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 5H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19 9H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 13H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {/* Text */}
            <div className='text-lg text-BaseWhite font-acorn'>Description</div>
          </div>
          {/* Divider */}
          <div className=' bg-BaseWhite bg-opacity-50 h-0.5 w-full'></div>
          {/* Description for Assets */}
          <div className='flex flex-col justify-center px-8 py-6 gap-2'>
            <div className="flex justify-between items-center">
              <div className='text-2xl text-BaseWhite font-outfit'>By <span className='text-greenDark underline'>xyz</span></div>
              <div className='flex gap-2 items-center'>
                {/* more Option Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {/* Share Button Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 6L12 2L8 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 2V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div className='text-justify text-BaseWhite '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur nulla in lorem pretium, nec tincidunt ipsum dapibus. Morbi vel ligula nec purus euismod rutrum. Quisque vel velit dapibus, faucibus purus ac, fermentum nunc. In rhoncus sagittis lacinia. Phasellus eu.
            </div>
          </div>
          {/* Divider */}
          <div className=' bg-BaseWhite bg-opacity-50 h-0.5 w-full'></div>
          {/* Info for Assets */}
          <div className='flex items-center p-2 gap-2'>
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 16V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 8H12.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {/* Text */}
            <div className='text-lg text-BaseWhite font-acorn'>Info</div>
          </div>
          {/* Divider */}
          <div className=' bg-BaseWhite bg-opacity-50 h-0.5 w-full'></div>
          {/* Details for Assets */}
          <div className='flex justify-start px-8 py-6 gap-4'>
            {/* Col-1 */}
            <div className='flex flex-col gap-2 text-lg text-BaseWhite'>
              <h1>Payment Address</h1>
              <h1>Currency</h1>
              <h1>License Term </h1>
              <h1>Commercial use</h1>
            </div>
            {/* Col-2 */}
            <div className='flex flex-col gap-2 text-lg text-BaseWhite'>
              <h1>0x8cdbd...0d3c</h1>
              <h1>Arweave</h1>
              <h1>One-Time</h1>
              <h1>Allowed-with-credit</h1>
            </div>
          </div>
          {/* Divider */}
          <div className=' bg-BaseWhite bg-opacity-50 h-0.5 w-full'></div>
          {/* Buy Rights */}
          <div className='flex items-center p-2 gap-2'>
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 1V23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {/* Text */}
            <div className='text-lg text-BaseWhite font-acorn'>Rights</div>
          </div>
          {/* Divider */}
          <div className=' bg-BaseWhite bg-opacity-50 h-0.5 w-full'></div>
          {/* button */}
          <div className='flex flex-col px-8 items-start py-3 gap-2'>
            <button className="flex items-center py-2 px-6 bg-greenNormal rounded-lg text-lg text-BaseWhite">
              Buy Rights
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
