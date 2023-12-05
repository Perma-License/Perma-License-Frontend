export default function HeroSection() {
    return (
        <div className="flex flex-row justify-between items-center">
            {/* Left Side */}
            <div className="flex flex-col gap-6 w-1/2">
                <div className="flex flex-col gap-2">
                    {/* Title */}
                    <div className="text-xl font-outfit text-greenLightNormal">Welcome to Perma License 👋</div>
                    {/* Heading */}
                    <div className="text-5xl font-acorn font-semibold text-greenNormal ">Neque porro quisquam est qui dolorem ipsum </div>
                    {/* Description */}
                    <div className="text-xl font-normal font-outfit text-BaseWhite">Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla ex sem, scelerisque eu quam id.</div>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center p-2 bg-greenNormal rounded-md gap-2">
                        <div className="text-BaseBlack font-outfit text-md">Connect Wallet</div>
                    </button>
                    <button className="flex items-center p-2 bg-BaseWhite bg-opacity-10 rounded-md gap-2">
                        <div className="text-BaseWhite font-outfit text-md">Explore Atomic Assets</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="#E6F6F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="#E6F6F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <img src="/hero-image.png" alt="hero-section" className="w-[378px] h-fit" />
        </div>
    );
}
