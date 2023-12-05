import CollectionCard from "./CollectionCard";

export default function Home() {
    const tags = [
        {
            name: "All",
        },
        {
            name: "Art",
        },
        {
            name: "Gaming",
        },
        {
            name: "Membership",
        },
        {
            name: "PFP",
        },
        {
            name: "Photography",
        },
        {
            name: "Music",
        },
    ]
    return (
        <div className="flex flex-col gap-5  mt-20">
            {/* Filtering Tags */}
            <div className="flex items-center justify-between">
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
            {/* Collection Cards */}
            <CollectionCard />
            
        </div>

    )
}