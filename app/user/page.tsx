
export default function User() {
    const tags = [
        {
            name: "All",
        },
        {
            name: "Jpegs",
        },
        {
            name: "Videos",
        },
        {
            name: "Music",
        },
        {
            name: "Games",
        },
        {
            name: "Books",
        },
    ]
    const card = [
        {
            name: "Oblivion",
            category: "Collection Category",
            image: "/assets/quarterpounder.jpg"
        },
    ]
    return (
        <div className="mt-16">
            {/* Background Image for user */}
            <div className="flex flex-col">
                <div className="bg-BaseGrey h-96 rounded-t-xl w-full relative"></div>
                {/* Default Profile Picture */}
                <img src="./profile.png" className="border-6 border-BaseWhite w-40 bottom-36 absolute mx-32" alt="profile-image-default" />
            </div>
            {/* All Profile Info */}
            <div className="mx-32 mt-24">
                {/* User Info + Interactivity Buttons */}
                <div className="flex justify-between">
                    <div className="flex flex-col gap-1 ">
                        <div className="text-lg text-white font-outfit">Username</div>
                        <div className="flex gap-4 items-center">
                            {/* User Address */}
                            <div className="text-sm text-BaseWhite font-outfit text-opacity-50">0x09750ad...360fdb7</div>
                            {/* User Joined Date */}
                            <div className="text-xs text-BaseWhite font-outfit">Joined June 2023</div>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-row items-center gap-2 cursor-pointer">
                        {/* Share Buttons */}
                        <div className=" flex items-center p-3 w-10 h-10 bg-BaseWhite bg-opacity-10 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.59009 13.51L15.4201 17.49" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.4101 6.51L8.59009 10.49" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        {/* More Button */}
                        <div className=" flex items-center p-3 w-10 h-10 bg-BaseWhite bg-opacity-10 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {/* Filtering Tags */}
                    <div className="flex items-center justify-between mt-5">
                        <div className="flex gap-2">
                            {tags.map((tag) => (
                                <button className="flex items-center px-4 py-2 bg-none border border-BaseWhite rounded-full gap-2">
                                    <div className="text-BaseWhite font-outfit text-md">{tag.name}</div>
                                </button>
                            ))}
                        </div>
                        <button className="flex items-center px-4 py-2 bg-BaseWhite bg-opacity-10 rounded-full">
                            <div className="text-greenNormal font-outfit text-md">Show More</div>
                        </button>
                    </div>
                    {/* Line Seprator */}
                    <div className="bg-BaseWhite h-0.5 bg-opacity-10 w-full"></div>
                    <div className="flex flex-col gap-3">
                        {/* Header */}
                        <div className="text-xl font-acorn text-greenNormal">Your Licenses</div>
                        {/* User Collection Section */}
                        {card.map((e) => (
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
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}