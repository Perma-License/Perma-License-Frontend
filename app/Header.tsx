'use client'
import { ArConnect } from 'arweavekit/auth'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    const redirect = () =>{
   
        router.push('/user');
     
    }

    const home = () =>{
   
        router.push('/');
     
    }
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
        <header className="flex flex-row mx-32 justify-between items-center mt-7 sticky bg-BaseBlack">
            {/* Logo */}
            <div className="flex flex-row items-center gap-5">
                <div className="flex flex-row items-center gap-2 cursor-pointer" onClick={home} >
                    <img src="/logo.svg" alt="logo" className="w-9 h-fit" />
                    <div className="text-2xl font-medium font-acorn text-BaseWhite">Perma License</div>
                </div>
                {/* Seprator */}
                <div className="w-[1px] h-10 bg-greenNormal"></div>
                <div className="flex flex-row gap-5 items-center text-lg font-outfit ">
                    <div className="text-BaseWhite">Create</div>
                    <div className="text-BaseWhite">Explore</div>
                </div>
            </div>
            {/* Search Button */}
            <label className="mb-2 text-sm font-medium text-BaseWhite opacity-50 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M11.1769 19.5C15.5952 19.5 19.1769 15.9183 19.1769 11.5C19.1769 7.08172 15.5952 3.5 11.1769 3.5C6.7586 3.5 3.17688 7.08172 3.17688 11.5C3.17688 15.9183 6.7586 19.5 11.1769 19.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.1769 21.5L16.8269 17.15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
                <input type="text" name="search" id="search" className="pl-10 pr-4 py-2 w-72 bg-BaseWhite bg-opacity-10 rounded-full text-sm font-medium text-BaseWhite" placeholder="Search" />
            </div>
            {/* User Buttons */}
            <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row items-center gap-2 cursor-pointer">
                    <div className=" flex items-center p-2 w-10 h-10 bg-BaseWhite bg-opacity-10 rounded-md" onClick={redirect}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M20.1769 21.5V19.5C20.1769 18.4391 19.7555 17.4217 19.0053 16.6716C18.2552 15.9214 17.2377 15.5 16.1769 15.5H8.17688C7.11601 15.5 6.0986 15.9214 5.34845 16.6716C4.59831 17.4217 4.17688 18.4391 4.17688 19.5V21.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.1769 11.5C14.386 11.5 16.1769 9.70914 16.1769 7.5C16.1769 5.29086 14.386 3.5 12.1769 3.5C9.96774 3.5 8.17688 5.29086 8.17688 7.5C8.17688 9.70914 9.96774 11.5 12.1769 11.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>  
                    </div>
                </div>
                <button className="flex items-center p-2 bg-BaseWhite bg-opacity-10 rounded-md gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M4.24831 3.5C2.83 3.5 1.67688 4.65313 1.67688 6.07143V18.9286C1.67688 20.3469 2.83 21.5 4.24831 21.5H19.6769C21.0952 21.5 22.2483 20.3469 22.2483 18.9286V9.92857C22.2483 8.51027 21.0952 7.35714 19.6769 7.35714H4.89117C4.53759 7.35714 4.24831 7.06786 4.24831 6.71429C4.24831 6.36071 4.53759 6.07143 4.89117 6.07143H19.6769C20.388 6.07143 20.9626 5.49688 20.9626 4.78571C20.9626 4.07455 20.388 3.5 19.6769 3.5H4.24831ZM18.3912 13.1429C18.7322 13.1429 19.0592 13.2783 19.3003 13.5194C19.5414 13.7606 19.6769 14.0876 19.6769 14.4286C19.6769 14.7696 19.5414 15.0966 19.3003 15.3377C19.0592 15.5788 18.7322 15.7143 18.3912 15.7143C18.0502 15.7143 17.7231 15.5788 17.482 15.3377C17.2409 15.0966 17.1055 14.7696 17.1055 14.4286C17.1055 14.0876 17.2409 13.7606 17.482 13.5194C17.7231 13.2783 18.0502 13.1429 18.3912 13.1429Z" fill="white" />
                    </svg>
                    <div className="text-BaseWhite font-outfit text-md" onClick={() => {connectWallet()}}>{address? address.substring(0,5)+"..."+address.substring(address.length - 5): 'Connect'}</div>
                </button>
            </div>
        </header>
    )
}