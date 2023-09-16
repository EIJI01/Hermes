import { useState } from "react";

function Chevron() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
        >
            <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default function SettingsMenu() {
    const [isMenuOpen1, setIsMenuOpen1] = useState(false);
    // const [isMenuOpen2, setIsMenuOpen2] = useState(false);

    const toggleMenu1 = () => {
        setIsMenuOpen1(!isMenuOpen1);
    };

    // const toggleMenu2 = () => {
    //     setIsMenuOpen2(!isMenuOpen2);
    // };

    return (
        <ul className="p-4 flex flex-col">
            <li className="">
                <button onClick={toggleMenu1} className="flex w-full justify-between px-4 py-2 rounded-lg hover:bg-gray-100">
                    <p className="font-bold">Some menu</p>
                    <div className={`transition-all ${isMenuOpen1 ? "rotate-180" : ""}`}>
                        {Chevron()}
                    </div>
                </button>
                <div className={`min-h-0 ${isMenuOpen1 ? "h-20" : "h-0 invisible"}`}>
                    <div className="" id="menu1">
                        Inside menu
                    </div>
                </div>
            </li>
        </ul>
    );
    //     <div>
    //         <div>
    //             <div>
    //                 <button
    //                     className="w-full ml-2 mr-2 mt-2 hover:bg-zinc-100 text-black p-2 rounded-md flex justify-between items-center"
    //                     onClick={toggleMenu1}
    //                 >
    //                     <div className="font-semibold text-sm">Chat info</div>
    //                     <div className="text-right">
    //                         {isMenuOpen1 ? closeArrow() : openArrow()}
    //                     </div>
    //                 </button>
    //             </div>

    //             {isMenuOpen1 && (
    //                 <div>
    //                     <button className="w-full ml-2 mr-2 hover:bg-zinc-100 text-black p-2 rounded-md">
    //                         <div className="flex gap-3">
    //                             <svg
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                                 fill="none"
    //                                 viewBox="0 0 24 24"
    //                                 stroke-width="1.5"
    //                                 stroke="currentColor"
    //                                 className="w-6 h-6"
    //                             >
    //                                 <path
    //                                     stroke-linecap="round"
    //                                     stroke-linejoin="round"
    //                                     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //                                 />
    //                             </svg>

    //                             <div className="font-semibold text-sm text-left">
    //                                 Kuy
    //                             </div>
    //                         </div>
    //                     </button>
    //                 </div>
    //             )}
    //         </div>

    //         <div>
    //             <div>
    //                 <button
    //                     className="w-full ml-2 mr-2 mt-2 hover:bg-zinc-100 text-black p-2 rounded-md flex justify-between items-center"
    //                     onClick={toggleMenu2}
    //                 >
    //                     <div className="font-semibold text-sm">
    //                         Customize chat
    //                     </div>
    //                     <div className="text-right">
    //                         {isMenuOpen2 ? closeArrow() : openArrow()}
    //                     </div>
    //                 </button>
    //             </div>

    //             {isMenuOpen2 && (
    //                 <div>
    //                     <button className="w-full ml-2 mr-2 hover:bg-zinc-100 text-black p-2 rounded-md">
    //                         <div className="flex gap-3">
    //                             <svg
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                                 fill="none"
    //                                 viewBox="0 0 24 24"
    //                                 stroke-width="1.5"
    //                                 stroke="currentColor"
    //                                 className="w-6 h-6"
    //                             >
    //                                 <path
    //                                     stroke-linecap="round"
    //                                     stroke-linejoin="round"
    //                                     d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
    //                                 />
    //                             </svg>

    //                             <div className="font-semibold text-sm text-left">
    //                                 Eiei
    //                             </div>
    //                         </div>
    //                     </button>
    //                 </div>
    //             )}
    //         </div>
    //     </div>
    // );
}
