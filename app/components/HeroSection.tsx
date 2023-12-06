'use client'
import { ArConnect } from 'arweavekit/auth'
import { useEffect, useState } from 'react';

export default function HeroSection() {
    const [address, setaddress] = useState('')

    const connectWallet = async () => {
        console.log("wrokin")

        const response = await ArConnect.connect({
            permissions: ['ACCESS_ADDRESS', 'ACCESS_PUBLIC_KEY']
        });

        console.log("res: ", response)
    }

    useEffect(() => {
        (async() => {
            const address = await ArConnect.getActiveAddress();
            setaddress(address)
        })()
    },[ArConnect])

    return (
        <div className="flex flex-row justify-between items-center">
            {/* Left Side */}
            <div className="flex flex-col gap-6 w-1/2">
                <div className="flex flex-col gap-2">
                    {/* Title */}
                    <div className="text-xl font-outfit text-greenLightNormal">Welcome to Perma License 👋</div>
                    {/* Heading */}
                    <div className="text-5xl font-acorn font-semibold text-greenNormal ">One stop shop for everything UDL! </div>
                    {/* Description */}
                    <div className="text-xl font-normal font-outfit text-BaseWhite">buy license for assets, verify your asset rights, support creators</div>
                </div>
                <div className="flex gap-4 mt-6">
                    <button className="flex items-center p-2 bg-greenNormal rounded-md gap-2" onClick={() => {connectWallet()}}>
                        <div className="text-BaseBlack font-outfit text-md px-3">{address? address.substring(0,5)+"..."+address.substring(address.length - 5): 'Connect'}</div>
                    </button>
                    <button className="flex items-center p-2 bg-BaseWhite bg-opacity-10 rounded-md gap-2">
                        <div className="text-BaseWhite font-outfit text-md">Explore Atomic Assets</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="#E6F6F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="#E6F6F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <img src="/hero-image.png" alt="hero-section" className="w-[378px] h-fit" />
        </div>
    );
}
