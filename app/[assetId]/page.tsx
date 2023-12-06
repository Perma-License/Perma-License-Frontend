'use client'
import { writeContract } from 'arweavekit/contract'
import { ArweaveWebWallet } from "arweave-wallet-connector";
import { queryGQL } from 'arweavekit/graphql';
import { useEffect, useState } from 'react';

export default function Home({ params }) {

  const [paymentAddress, setPaymentAddress] = useState([])
  const [currency, setCurrency] = useState([])
  const [licenseTerm, setLicenseTerm] = useState([])
  const [commercialUse, setCommercialUse] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [slidePosition, setSlidePosition] = useState(0)

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

 const card = [
  {
    name: "Glorious Purpose",
    category: "Collection Category",
    image: "/assets/image 1.png",
    address: "u_7Y1KFXREBHMKWWiSHuHG3kPjSVLe6_GVp7tLVSW-Q",
    description: "The Throne"
},
{
    name: "Sweet dreams are made of cheese",
    category: "Collection Category",
    address: "lSqcmTuhc0cvAxuCEMxcCov_YXYA7Ai7dc_OVX_AYco",
    description: "cheeeeese yum yum"
},
{
    name: "Royale with Cheese",
    category: "Collection Category",
    address: "7vc1A9k-KOSC4OrL62YAUW4zDLiYyLe0ZZY8xKDPmFA",
    description: "'you know what they call a quarter pounder with cheese?'"
},
      {
          name: "Gray Blood",
          category: "Collection Category",
          address: "gi4T7GIWe4R8LAB7HiXFVQ_7A-sEyFYbCG9FsDeIZ8E",
          description: "sike"
      },
      {
          name: "Unread Books",
          category: "Collection Category",
          address: "rMMrx53QS5T4A8nbJIax9kdezz4WsmLTbs5J9uHAgV4",
          description: "sike"
      },
      {
          name: "Mango slime",
          category: "Collection Category",
          address: "z7bDM87TX6Ei_FiYQ37F3fnp4MgwsNU4agPIEEHvLlA",
          description: "sike"
      },
      {
          name: "Purple Oil",
          category: "Collection Category",
          address: "Ol5Jzq70DDRqxYiNqhS7c5fbmBG4PPJbbAU8zGQfzN8",
          description: "sike"
      },
      {
          name: "Chicken Stew",
          category: "Collection Category",
          address: "W_EmFMpRl4knj1csglGrgVi4rx8RG7oucksrFdEOzho",
          description: "sike"
      },
      {
          name: "Yellow girl",
          category: "Collection Category",
          address: "NQbRq9f3KoQY-Uosvpf9H8TbVEDOqLeY_qjl_WqL_-s",
          description: "sike"
      },
      {
          name: "LandLords",
          category: "Collection Category",
          address: "XAIt5IurErMFOw80k4yzn-NXp5RhusaB7mMyUOog0c0",
          description: "sike"
      },
  ]

  const index = card.findIndex( e => e.address === params.assetId)

  const query = `
    query getTxns($ids: [ID!]) {
        transactions(ids: $ids) {
            edges {
                node {
                    id
                    tags {
                        name
                        value
                    }
                }
            }
        }
    }
`;

  const fetchAllOfIt = async () => {
    const response = await queryGQL(query, {
      gateway: 'arweave.net',
      filters: {
          ids: [params.assetId],
      },
    });

    const stuff = response.data?.transactions.edges[0].node.tags
    
    setPaymentAddress(stuff?.find(e => e.name === "Payment-Address")?.value)
    setCurrency(stuff?.find(e => e.name === "Currency")?.value)
    setLicenseTerm(stuff?.find(e => e.name === "License-Fee")?.value)
    setCommercialUse(stuff?.find(e => e.name === "Commercial-Use")?.value)
  }

  useEffect(() => {
    if(params.assetId)
    fetchAllOfIt();

  }, [params.assetId])

  return (
    <main className="mx-32 mt-16">
      <div className="flex flex-row justify-center gap-4 ">
        {/* Asset Images */}
        <img src={"https://arweave.net/" + params.assetId} className="h-[585px] w-[585px] border-2 border-BaseWhite border-opacity-50 rounded-xl" alt='image' />
        {/* Asset Info Container */}
        <div className='flex flex-col h-[585px] w-[585px] border-2 border-BaseWhite border-opacity-50 rounded-xl'>
          {/* Description */}
          <div className='flex items-center p-2 gap-2'>
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M19 1H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 5H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 9H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 13H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {/* Text */}
            <div className='text-lg text-BaseWhite font-acorn'>Description</div>
          </div>
          {/* Divider */}
          <div className=' bg-BaseWhite bg-opacity-50 h-0.5 w-full'></div>
          {/* Description for Assets */}
          <div className='flex flex-col justify-center px-8 py-6 gap-2'>
            <div className="flex justify-between items-center">
              <div className='text-2xl text-BaseWhite font-outfit'>{index != -1 ? card[index].name : ""}</div>
              <div className='flex gap-2 items-center'>
                {/* more Option Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* Share Button Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 6L12 2L8 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className='text-justify text-BaseWhite '>
              {index != -1 ? card[index].description : ''} 
            </div>
          </div>
          {/* Divider */}
          <div className=' bg-BaseWhite bg-opacity-50 h-0.5 w-full'></div>
          {/* Info for Assets */}
          <div className='flex items-center p-2 gap-2'>
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
              <h1>{paymentAddress ? paymentAddress : "ntPm7c1TMDSIAAC.....lCkL5FDBkCWmFh3b1A" }</h1>
              <h1>{currency ? currency : "Arweave"}</h1>
              <h1>{String(licenseTerm).startsWith("One-Time")? "One Time" : "One Time"}</h1>
              <h1>{commercialUse ? commercialUse : "Allowed-with-credit"}</h1>
            </div>
          </div>
          {/* Divider */}
          <div className=' bg-BaseWhite bg-opacity-50 h-0.5 w-full'></div>
          {/* Buy Rights */}
          <div className='flex items-center p-2 gap-2'>
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 1V23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {/* Text */}
            <div className='text-lg text-BaseWhite font-acorn'>Rights</div>
          </div>
          {/* Divider */}
          <div className=' bg-BaseWhite bg-opacity-50 h-0.5 w-full'></div>
          {/* button */}
          <div className='flex flex-col px-8 items-start py-3 gap-2'>
            <button onClick={() => {setShowModal(true)}} className="flex items-center py-2 px-6 bg-greenNormal rounded-lg text-lg text-BaseWhite">
              Buy Rights
            </button>
          </div>
        </div>
      </div>

      <div className={showModal ? `inset-0 bg-[#00000075] fixed`: 'hidden'} >
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-[#161515] w-[30rem] h-[25rem] rounded-lg'>
          <div onClick={() => {setShowModal(false)}}>
            <svg  className='absolute cursor-pointer right-[1rem] top-[1rem] w-8' fill="none" stroke="white" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div onClick={() => {setSlidePosition(slidePosition - 1 )}} className='bg-gray-400 z-10 rounded-full absolute left-[13px] top-[45%] cursor-pointer'>
            <svg className='w-8' fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </div>
          <div onClick={() => {setSlidePosition(slidePosition + 1 )}} className='bg-gray-400 z-10 rounded-full absolute right-[13px] top-[45%] cursor-pointer'>
            <svg className='w-8' fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <div className={ `${slidePosition === 0 ? '' : slidePosition === 1 ? '-translate-x-[30rem]' : '-translate-x-[60rem]'} text-white h-full flex flex-row items-center`}>
            <div className='w-[30rem] h-[70%] flex-grow-0 flex-shrink-0 p-10 text-center flex flex-col justify-between'>
              <div className='flex flex-col gap-8'>
              <div className='font-bold text-4xl'>Payment</div>
              <p className=''>Pay the creator</p>
              </div>
              <button className="flex items-center py-2 px-6 bg-greenNormal rounded-lg text-lg text-BaseWhite w-20 m-auto">Pay</button>
            </div>
            <div className='w-[30rem] h-[70%] flex-grow-0 flex-shrink-0 p-10 text-center flex flex-col justify-between'>
              <div className='flex flex-col gap-8'>
              <div className='font-bold text-4xl'>Mint License</div>
              <p className=''>Mint your license details as an NFT</p>
              </div>
              <button className="flex items-center py-2 px-6 bg-greenNormal rounded-lg text-lg text-BaseWhite w-20 m-auto">Mint</button>
            </div>
            <div className='w-[30rem] h-[70%] flex-grow-0 flex-shrink-0 p-10 text-center flex flex-col justify-between'>
              <div className='flex flex-col gap-8'>
                <div className='font-bold text-4xl'>Download Asset</div>
                <p className=''>Download Asset to your device</p>
                </div>
              <button     onClick={() => {
                let a = document.createElement("a");
                document.body.appendChild(a);
                a.href = "/assets/quarterpounder.jpg";
                a.download = "quarterpounder.jpg";
                a.click();
                a.remove();
              }} className="flex items-center py-2 px-6 bg-greenNormal rounded-lg text-lg text-BaseWhite w-25 m-auto">Download</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
