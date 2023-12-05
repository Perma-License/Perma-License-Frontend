export default function Footer() {
    const Links = [
        {
            title: "Explore",
            links: [
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
                    name: "PFPs",
                },
                {
                    name: "Photography",
                },
            ]
        },
        {
            title: "My Account",
            links: [
                {
                    name: "Profile",
                },
                {
                    name: "Favourite",
                },
                {
                    name: "Watchlist",
                },
                {
                    name: "Settings",
                },
            ]
        },
    ]
    return (
        <div className="flex flex-col justify-between items-center bg-BaseGrey mt-40 gap-10">
            {/* Contact Section */}
            <div className="flex flex-row justify-between  mt-20">
                {/* Email Address Section */}
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 w-1/2">
                        <div className="text-3xl font-acorn font-semibold text-BaseWhite">Stay in the loop</div>
                        <div className="text-lg font-outfit font-normal text-BaseWhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum ligula nisi, non sagittis nisi imperdiet in. Nunc dignissim </div>
                    </div>
                    {/* Email Input Section */}
                    <div className="flex flex-row gap-2 ">
                        <input type="text" placeholder="Enter your email" className="w-[427px] h-12 rounded-lg border border-BaseWhite bg-transparent border-opacity-10 text-BaseWhite font-outfit font-normal px-4" />
                        <button className="w-[146px] h-12 rounded-lg bg-gradient-to-t from-greenNormal to-Blue bg-opacity-10 text-BaseWhite font-outfit font-normal">Sign</button>
                    </div>
                </div>
                {/* Social Media Section */}
                <div className="flex flex-col gap-2">
                    {/* Header */}
                    <div className="text-3xl font-acorn font-semibold text-BaseWhite">Follow us</div>
                    {/* Social Icons */}
                    <div className="flex flex-row gap-2">
                        <div className=" flex items-center p-2 w-10 h-10 bg-BaseWhite bg-opacity-10 rounded-md cursor-pointer hover:bg-greenNormal duration-100 ease-out ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.2438 2.25H21.5531L14.325 10.5094L22.8281 21.75H16.1719L10.9547 14.9344L4.99219 21.75H1.67813L9.40782 12.9141L1.25626 2.25H8.08126L12.7922 8.47969L18.2438 2.25ZM17.0813 19.7719H18.9141L7.08282 4.125H5.11407L17.0813 19.7719Z" fill="white" />
                            </svg>
                        </div>
                        <div className=" flex items-center p-2 w-10 h-10 bg-BaseWhite bg-opacity-10 rounded-md cursor-pointer hover:bg-greenNormal duration-100 ease-out ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12.0047 6.6094C9.02344 6.6094 6.61876 9.01409 6.61876 11.9953C6.61876 14.9766 9.02344 17.3813 12.0047 17.3813C14.9859 17.3813 17.3906 14.9766 17.3906 11.9953C17.3906 9.01409 14.9859 6.6094 12.0047 6.6094ZM12.0047 15.4969C10.0781 15.4969 8.50313 13.9266 8.50313 11.9953C8.50313 10.0641 10.0734 8.49377 12.0047 8.49377C13.9359 8.49377 15.5063 10.0641 15.5063 11.9953C15.5063 13.9266 13.9313 15.4969 12.0047 15.4969ZM18.8672 6.38909C18.8672 7.08752 18.3047 7.64534 17.6109 7.64534C16.9125 7.64534 16.3547 7.08284 16.3547 6.38909C16.3547 5.69534 16.9172 5.13284 17.6109 5.13284C18.3047 5.13284 18.8672 5.69534 18.8672 6.38909ZM22.4344 7.66409C22.3547 5.98127 21.9703 4.49065 20.7375 3.26252C19.5094 2.0344 18.0188 1.65002 16.3359 1.56565C14.6016 1.46721 9.40313 1.46721 7.66876 1.56565C5.99063 1.64534 4.50001 2.02971 3.26719 3.25784C2.03438 4.48596 1.65469 5.97659 1.57032 7.6594C1.47188 9.39377 1.47188 14.5922 1.57032 16.3266C1.65001 18.0094 2.03438 19.5 3.26719 20.7281C4.50001 21.9563 5.98594 22.3406 7.66876 22.425C9.40313 22.5235 14.6016 22.5235 16.3359 22.425C18.0188 22.3453 19.5094 21.961 20.7375 20.7281C21.9656 19.5 22.35 18.0094 22.4344 16.3266C22.5328 14.5922 22.5328 9.39846 22.4344 7.66409ZM20.1938 18.1875C19.8281 19.1063 19.1203 19.8141 18.1969 20.1844C16.8141 20.7328 13.5328 20.6063 12.0047 20.6063C10.4766 20.6063 7.19063 20.7281 5.81251 20.1844C4.89376 19.8188 4.18594 19.111 3.81563 18.1875C3.26719 16.8047 3.39376 13.5235 3.39376 11.9953C3.39376 10.4672 3.27188 7.18127 3.81563 5.80315C4.18126 4.8844 4.88907 4.17659 5.81251 3.80627C7.19532 3.25784 10.4766 3.3844 12.0047 3.3844C13.5328 3.3844 16.8188 3.26252 18.1969 3.80627C19.1156 4.1719 19.8234 4.87971 20.1938 5.80315C20.7422 7.18596 20.6156 10.4672 20.6156 11.9953C20.6156 13.5235 20.7422 16.8094 20.1938 18.1875Z" fill="white" />
                            </svg>
                        </div>
                        <div className=" flex items-center p-2 w-10 h-10 bg-BaseWhite bg-opacity-10 rounded-md cursor-pointer hover:bg-greenNormal duration-100 ease-out ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19.6699 5.01885C19.6638 5.00697 19.6536 4.99767 19.6413 4.9926C18.2116 4.33667 16.703 3.86895 15.153 3.60112C15.139 3.5985 15.1244 3.60039 15.1115 3.60652C15.0985 3.61265 15.0878 3.6227 15.0809 3.63525C14.8755 4.00811 14.689 4.39109 14.5222 4.78275C12.8514 4.52913 11.152 4.52913 9.4812 4.78275C9.31327 4.3901 9.12379 4.00702 8.91364 3.63525C8.90643 3.62297 8.89569 3.61315 8.88282 3.60706C8.86996 3.60098 8.85555 3.59891 8.84149 3.60112C7.29138 3.86838 5.78262 4.33614 4.35319 4.99264C4.34095 4.99782 4.33063 5.00668 4.32364 5.01799C1.46505 9.28691 0.681976 13.4509 1.06613 17.5633C1.06721 17.5734 1.0703 17.5831 1.07523 17.592C1.08016 17.6008 1.08682 17.6086 1.09481 17.6148C2.75934 18.8473 4.62114 19.788 6.60075 20.3969C6.61469 20.4011 6.62958 20.4009 6.64341 20.3964C6.65724 20.3919 6.66935 20.3832 6.67811 20.3716C7.10329 19.7931 7.48003 19.1805 7.8045 18.54C7.80896 18.5312 7.81151 18.5216 7.81197 18.5117C7.81243 18.5019 7.81081 18.4921 7.8072 18.4829C7.80359 18.4737 7.79808 18.4654 7.79102 18.4585C7.78397 18.4517 7.77554 18.4463 7.76629 18.443C7.1722 18.2156 6.59705 17.9416 6.04624 17.6235C6.03623 17.6176 6.02783 17.6093 6.02177 17.5994C6.01571 17.5895 6.01218 17.5783 6.0115 17.5667C6.01081 17.5551 6.01299 17.5435 6.01784 17.533C6.02269 17.5224 6.03006 17.5133 6.0393 17.5062C6.15488 17.4196 6.27053 17.3296 6.38089 17.2386C6.39069 17.2305 6.40256 17.2253 6.41515 17.2236C6.42773 17.222 6.44055 17.2238 6.45214 17.229C10.0607 18.8759 13.9675 18.8759 17.5334 17.229C17.545 17.2235 17.558 17.2214 17.5707 17.2229C17.5835 17.2245 17.5956 17.2296 17.6055 17.2377C17.7159 17.3287 17.8316 17.4196 17.948 17.5062C17.9573 17.5132 17.9647 17.5223 17.9696 17.5328C17.9746 17.5433 17.9768 17.5549 17.9762 17.5665C17.9756 17.5781 17.9722 17.5893 17.9662 17.5993C17.9602 17.6092 17.9519 17.6175 17.9419 17.6235C17.3924 17.9443 16.8167 18.2181 16.221 18.4421C16.2118 18.4456 16.2034 18.451 16.1964 18.458C16.1894 18.465 16.1839 18.4734 16.1804 18.4827C16.1768 18.4919 16.1753 18.5018 16.1758 18.5117C16.1764 18.5215 16.179 18.5312 16.1835 18.54C16.5134 19.1769 16.8896 19.7887 17.3091 20.3706C17.3176 20.3825 17.3296 20.3915 17.3435 20.3962C17.3574 20.4009 17.3724 20.4011 17.3864 20.3968C19.3696 19.79 21.2346 18.8492 22.9013 17.6148C22.9094 17.6089 22.9161 17.6013 22.9211 17.5926C22.926 17.5838 22.929 17.5741 22.9299 17.5641C23.3898 12.8098 22.16 8.67994 19.6699 5.01885ZM8.34341 15.0592C7.25696 15.0592 6.36176 14.0622 6.36176 12.8378C6.36176 11.6133 7.2396 10.6162 8.34341 10.6162C9.45585 10.6162 10.3424 11.622 10.325 12.8377C10.325 14.0622 9.44715 15.0592 8.34341 15.0592ZM15.6702 15.0592C14.5838 15.0592 13.6886 14.0622 13.6886 12.8378C13.6886 11.6133 14.5664 10.6162 15.6702 10.6162C16.7827 10.6162 17.6692 11.622 17.6518 12.8377C17.6518 14.0622 16.7827 15.0592 15.6702 15.0592Z" fill="white" />
                            </svg>
                        </div>
                        <div className=" flex items-center p-2 w-10 h-10 bg-BaseWhite bg-opacity-10 rounded-md cursor-pointer hover:bg-greenNormal duration-100 ease-out ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M22.9023 6.50346C22.6406 5.51804 21.8695 4.74196 20.8904 4.47858C19.1159 4 12 4 12 4C12 4 4.88415 4 3.10953 4.47858C2.13048 4.742 1.3594 5.51804 1.09769 6.50346C0.622192 8.28958 0.622192 12.0162 0.622192 12.0162C0.622192 12.0162 0.622192 15.7428 1.09769 17.5289C1.3594 18.5143 2.13048 19.258 3.10953 19.5214C4.88415 20 12 20 12 20C12 20 19.1158 20 20.8904 19.5214C21.8695 19.258 22.6406 18.5143 22.9023 17.5289C23.3778 15.7428 23.3778 12.0162 23.3778 12.0162C23.3778 12.0162 23.3778 8.28958 22.9023 6.50346ZM9.67269 15.3996V8.63271L15.6202 12.0163L9.67269 15.3996Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Seprator */}
            <div className="bg-BaseWhite h-0.5 bg-opacity-5 w-[calc(200vh_-_128px)] mt-4 "></div>
            {/* Footer Section */}
            <div className="flex flex-row justify-between mx-32">
                {/* Logo */}
                <div className="flex flex-col w-1/2 gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <img src="/logo.svg" alt="logo" className="w-9 h-fit" />
                        <div className="text-2xl font-medium font-acorn text-BaseWhite">Perma License</div>
                    </div>
                    {/* Description */}
                    <div className="text-lg font-outfit font-normal text-BaseWhite">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum ligula nisi, non sagittis nisi imperdiet in. Nunc dignissim
                    </div>
                </div>
                {/* Links */}
                <div className="flex flex-row">
                    <div className="flex flex-row font-outfit gap-4">
                        {Links.map((link) => (
                            <div className="flex flex-col gap-1">
                                <div className="text-xl font-medium text-BaseWhite">{link.title}</div>
                                {link.links.map((item) => (
                                    <div className="text-lg font-normal text-BaseWhite text-opacity-50">{item.name}</div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Seprator */}
            <div className="bg-BaseWhite h-0.5 bg-opacity-10 w-full mt-4 "></div>
            {/* Footer Bottom Section */}
            <div className="flex flex-row justify-between mx-32">
                <div className="flex justify-between items-center text-sm font-outfit text-BaseWhite text-opacity-20">© 2023 Perma License</div>
            </div>
        </div>
    );
}
