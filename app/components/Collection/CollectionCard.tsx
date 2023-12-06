export default function Card() {
    // Need to create Dynamic Collection Category, collection Name & Collection Image
    const card = [
        {
            name: "Oblivion",
            category: "Collection Category",
            image: "/assets/image 1.png"
        },
        {
            name: "Starface",
            category: "Collection Category",
            image: "/assets/image 2.png"
        },
        {
            name: "Blue Moon",
            category: "Collection Category",
            image: "/assets/image 3.png"
        },
        {
            name: "Gray Blood",
            category: "Collection Category",
            image: "/assets/image 4.png"
        },
        {
            name: "Unread Books",
            category: "Collection Category",
            image: "/assets/image 5.png"
        },
        {
            name: "Mango slime",
            category: "Collection Category",
            image: "/assets/image 6.png"
        },
        {
            name: "Purple Oil",
            category: "Collection Category",
            image: "/assets/image 7.png"
        },
        {
            name: "Chicken Stew",
            category: "Collection Category",
            image: "/assets/image 8.png"
        },
        {
            name: "Yellow girl",
            category: "Collection Category",
            image: "/assets/image 9.png"
        },
        {
            name: "LandLords",
            category: "Collection Category",
            image: "/assets/image 10.png"
        },
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 11.png"
        },
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 12.png"
        },
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 13.png"
        },
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 14.png"
        },
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 15.png"
        },
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
                        <div className="flex flex-col w-fit bg-BaseGrey rounded-lg">
                            {/* Image-container */}
                            <img src={e.image} className="w-72 max-h-[12rem] rounded-lg" alt="image-1" />
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
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}