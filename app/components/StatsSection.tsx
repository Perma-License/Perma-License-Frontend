export default function StatsSection() {
    const stats = [
        {
            title : "Collections Created",
            number : "108k"
        },
        {
            title : "Assets Created",
            number : "407M"
        },
        {
            title : "Sales Today",
            number : "12k"
        },
    ]
    return (
        <div className="flex flex-row items-center">
            {stats.map((stat) => (
                <div className="flex flex-row items-center gap-3">
                    <div className="text-3xl font-outfit font-normal bg-clip-text bg-gradient-to-r from-greenNormal to-Blue text-transparent">{stat.number}</div>
                    <div className="text-sm w-1/2 font-normal font-outfit text-BaseWhite">{stat.title}</div>
                </div>
            ))}
        </div>
    );
}