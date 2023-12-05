export default function Categories() {
    const categories = [
        {
            name: "Art",
            image: "/assets/art.png"
        },
        {
            name: "Gaming",
            image: "/assets/gaming.png"
        },
        {
            name: "Membership",
            image: "/assets/membership.png"
        },
        {
            name: "PFPs",
            image: "/assets/PFPs.png"
        },
        {
            name: "Music",
            image: "/assets/music.png"
        },
    ]
    return (
        <div className="flex flex-col gap-6 mt-20">
            {/* Heading */}
            <div className="flex justify-center font-medium font-acorn bg-clip-text bg-gradient-to-t from-greenNormal to-Blue text-transparent text-4xl">Categories</div>
            {/* Categories */}
            <div className="flex flex-row gap-3 justify-center ">
                {categories.map((category) => (
                    <div className="flex flex-col h-48  bg-BaseGrey rounded-lg cursor-pointer">
                        {/* Image-container */}
                        <img src={category.image} className="w-72 h-36 rounded-lg" alt="image-1" />
                        {/* Image Description */}
                        <div className="flex items-center mx-4 my-2 justify-between">
                            <div className="text-lg font-medium font-outfit text-BaseWhite ">{category.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}