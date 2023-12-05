export default function Card() {
    // Need to create Dynamic Collection Category, collection Name & Collection Image
    const card = [
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 1.png"
        },
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 2.png"
        },
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 3.png"
        },
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 4.png"
        },
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 5.png"
        },
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 6.png"
        },
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 7.png"
        },
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 8.png"
        },
        {
            name: "Collection Name",
            category: "Collection Category",
            image: "/assets/image 9.png"
        },
        {
            name: "Collection Name",
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
                        <path d="M4.66669 10.5H16.3334" stroke="#127CF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.5 4.66669L16.3333 10.5L10.5 16.3334" stroke="#127CF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col h-60 w-fit bg-BaseGrey rounded-lg">
                {/* Image-container */}
                <img src="/assets/image 1.png" className="w-72 rounded-lg" alt="image-1" />
                {/* Image Description */}
                <div className="flex items-center mx-4 my-2 justify-between">
                    <div className="text-lg font-medium font-outfit text-BaseWhite ">Collection Name</div>
                    <div className="flex items-center p-2 bg-greenNormal rounded-lg gap-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M4.05881 9H13.9412" stroke="black" stroke-width="1.41176" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 4.05884L13.9412 9.00001L9 13.9412" stroke="black" stroke-width="1.41176" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}