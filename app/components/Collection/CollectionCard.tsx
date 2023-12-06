import Link from "next/link"

export default function Card() {
    // Need to create Dynamic Collection Category, collection Name & Collection Image
    const card = [
        {
            name: "Glorious Purpose",
            category: "Collection Category",
            image: "/assets/image 1.png",
            address: "u_7Y1KFXREBHMKWWiSHuHG3kPjSVLe6_GVp7tLVSW-Q",
            description: "The Throne"
        },
        {
            name: "Sweet dreams are made of",
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
        }
    ]
    return (
        <div className="flex flex-col mt-2 gap-4    ">
            {/* Collection Category + Checkout More Button */}
            <div className="flex items-center justify-between">
                {/* Collection Category */}
                <div className="font-acorn text-2xl text-BaseWhite ">Notable collections</div>
                {/* Checkout Button (For Scrolling Functionality UX) */}
                <button className="flex items-center gap-1">
                    <div className="text-Blue font-outfit text-md">Checkout More</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M4.66669 10.5H16.3334" stroke="#127CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.5 4.66669L16.3333 10.5L10.5 16.3334" stroke="#127CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="mt-10 flex flex-row flex-wrap gap-x-[6rem] gap-y-[3rem] justify-between">
                {
                    card.slice(0,10).map((e) => (
                        <Link href={`/${e.address}`} className="flex flex-col w-fit bg-BaseGrey rounded-lg">
                            {/* Image-container */}
                            <img src={"https://arweave.net/" + e.address} className="w-72 max-h-[12rem] rounded-lg" alt="image-1" />
                            {/* Image Description */}
                            <div className="flex items-center h-[3rem] mx-4 my-2 justify-between">
                                <div className="text-lg font-medium font-outfit text-BaseWhite ">{e.name}</div>
                                <div className="flex items-center p-2 bg-greenNormal rounded-lg gap-2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M4.05881 9H13.9412" stroke="black" strokeWidth="1.41176" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 4.05884L13.9412 9.00001L9 13.9412" stroke="black" strokeWidth="1.41176" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            
        </div>
    )
}