//sidebar

// import React from 'react';
// import launchpad from "../assets/Launchpads.png"
import { useState, useRef, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { TbGhost2 } from "react-icons/tb";
import { SiAirplayaudio } from "react-icons/si";
import { MdOutlineLock } from "react-icons/md";
import { GiAirBalloon } from "react-icons/gi";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { RiDoorLockBoxLine } from "react-icons/ri";
import { BiSolidNetworkChart } from "react-icons/bi";
import { GrRobot } from "react-icons/gr";
import { LuSendHorizonal } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineAlert } from "react-icons/ai";
import { SiTicktick } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PiTelegramLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { RiFacebookBoxLine } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import { GoRocket } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
// import { GoRocket } from "react-icons/go";


import logo from "../assets/alldao-text.png"
import slogo from "../assets/top-logo.png"

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const navigate = useNavigate();
  const sidebarRef = useRef(null); // Reference to the sidebar
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar(); // Close the sidebar
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);



  return (
    <div ref={sidebarRef}
      className={`fixed top-0 left-0  slider max-h-screen overflow-x-hidden h-full  bg-black dark:bg-white   transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:translate-x-0 md:relative overflow-y-scroll scrollbar  `}
    >
      <div className="flex flex-col ">
        {/* <div className="flex items-center px-4 py-4 gap-2"> */}
          {/* <img src={logo} alt="logo" className="h-12 w-12" /> */}
          {/* <div className="text-xl" href=""> */}
            {/* ALLDAO */}
          {/* </div> */}
          
          
          <div className="flex items-center justify-between px-1 py-2">
        <div className="text-3xl flex items-center font-bold gap-2 text-[#1fc600] cursor-pointer" onClick={() => navigate('/')}> 
          <img src={slogo} className="h-8 w-8" alt="" /> 
        <img src={logo} className="w-24 " alt="" />
        </div>
        <button className="md:hidden text-xl" onClick={toggleSidebar}>
          ✕
        </button>
      </div>
          
             {/* </div> */}
        {/* all buttons */}
        <div className="flex flex-col gap-2 mt-2 w-full">
          {/* <img src={launchpad} alt="" className="text-red-500" /> <launchpad className=""/> */}

          {/* launchpad button */}
          <div className="hover:bg-[#ffffff1c] py-2">
            <button
              onClick={() => toggleDropdown("launchpad")}
              className=" px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600] "
            >
              <GoRocket className="h-5 w-5" /> Launchpad
              <FaAngleRight className="" />
            </button>

            {/* Dropdown Content */}
            {openDropdown === "launchpad" && (
              <div className=" flex flex-col mx-5 mt-2  items-center rounded bg-[#0000004e]">
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/Createlaunchpad1')}  >
                  {" "}
                  Create presale{" "}
                </button>
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/ComingSoon')}>
                  {" "}
                  Create Fairlaunch{" "}
                </button>
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/ComingSoon')}>
                  {" "}
                  Create Subscription{" "}
                </button>
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/ComingSoon')}>
                  {" "}
                  Create Social Sale{" "}
                </button>
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/ComingSoon')}>
                  {" "}
                  Launchpad List{" "}
                </button>
              </div>
            )}
          </div>

          {/* pinkmeme button */}
          <div className="hover:bg-[#ffffff1c] py-2">
            <button
              onClick={() => toggleDropdown("pinkMeme")}
              className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]"
            >
              <TbGhost2 className="h-5 w-5" /> PinkMeme
              <FaAngleRight className="" />
            </button>

            {/* Dropdown Content */}
            {openDropdown === "pinkMeme" && (
              <div className=" flex flex-col mx-5 mt-2  items-center rounded bg-[#0000004e]">
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/ComingSoon')}>
                  {" "}
                  Create Token{" "}
                </button>
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/ComingSoon')}>
                  {" "}
                  Token List{" "}
                </button>
              </div>
            )}
          </div>

          {/* tele airdrop button button */}
          <div className="hover:bg-[#ffffff1c] py-2">
            <button
              onClick={() => toggleDropdown("Tele-Airdrop-Bot")}
              className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]"
            >
              <SiAirplayaudio className="h-5 w-5" /> Bot
              <FaAngleRight className="" />
            </button>

            {/* Dropdown Content */}
            {openDropdown === "Tele-Airdrop-Bot" && (
              <div className=" flex flex-col mx-5 mt-2  items-center rounded bg-[#0000004e]">
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/ComingSoon')}>
                  {" "}
                  Create tele Airdrop{" "}
                </button>
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/ComingSoon')}>
                  {" "}
                  Airdrop Bot List{" "}
                </button>
              </div>
            )}
          </div>

          {/* pinklock button */}
          <div className="hover:bg-[#ffffff1c] py-2">
            <button
              onClick={() => toggleDropdown("PinkLock")}
              className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]"
            >
              <MdOutlineLock className="h-5 w-5" /> PinkLock
              <FaAngleRight className="" />
            </button>

            {/* Dropdown Content */}
            {openDropdown === "PinkLock" && (
              <div className=" flex flex-col mx-5 mt-2  items-center rounded bg-[#0000004e]">
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/PinklockCreate1')}>
                  Create
                </button>
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/PinklockToken')} >
                  Token
                </button>
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/Liquidity1')}>
                  Liquidity
                </button>
              </div>
            )}
          </div>

          {/* Airdrops button */}
          <div className="hover:bg-[#ffffff1c] py-2">
            <button
              onClick={() => toggleDropdown("Airdrops")}
              className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]"
            >
              <GiAirBalloon className="h-5 w-5" /> Airdrops
              <FaAngleRight className="" />
            </button>

            {/* Dropdown Content */}
            {openDropdown === "Airdrops" && (
              <div className=" flex flex-col mx-5 mt-2  items-center rounded bg-[#0000004e]">
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/Airdrop1')} >
                  Create Airdrop
                </button>
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/Airdrop4')} >
                  Airdrop List
                </button>
              </div>
            )}
          </div>

          {/* Token button */}
          <div className="hover:bg-[#ffffff1c] py-2">
            <button
              onClick={() => toggleDropdown("Token")}
              className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]"
            >
              <MdOutlineGeneratingTokens className="h-5 w-5" /> Token
              <FaAngleRight className="" />
            </button>

            {/* Dropdown Content */}
            {openDropdown === "Token" && (
              <div className=" flex flex-col mx-5 mt-2  items-center rounded bg-[#0000004e]">
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/Token')}>
                  Token
                </button>
                <button className=" hover:text-[#1fc600] py-2 px-4" onClick={() => navigate('/TokenLockInfo')}>
                  Token Info
                </button>
              </div>
            )}
          </div>

          <hr className="border-t border-[#1ec6004d]" />

          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <MdSecurity className="h-5 w-5" /> sales{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <TbLayoutBoardSplit className="h-5 w-5" /> Leaderboards{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <RiDoorLockBoxLine className="h-5 w-5" />  Fiat{" "}
          </button>
          </div>

          
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <BiSolidNetworkChart className="h-5 w-5" /> Bridge{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <GrRobot className="h-5 w-5" /> AntiBot{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/Multisender')}>
            <LuSendHorizonal className="h-5 w-5" /> MultiSender{" "}
          </button>
          </div>

          <hr className="border-t border-[#1ec6004d]" />

          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <BsGraphUpArrow className="h-5 w-5" /> dexview.com{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <AiOutlineAlert className="h-5 w-5" /> poolsAlert{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <SiTicktick className="h-5 w-5" /> KYC_Audit{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <IoDocumentTextOutline className="h-5 w-5" /> Docs{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <AiOutlineShoppingCart className="h-5 w-5" /> Shop{" "}
          </button>
          </div>

          <hr className="border-t border-[#1ec6004d]" />

          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <PiTelegramLogo className="h-5 w-5" /> Telegram{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <RiTwitterXLine className="h-5 w-5" /> X{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <RiFacebookBoxLine className="h-5 w-5" /> Facebook{" "}
          </button>
          </div>

          <hr />

          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="px-4 text-l flex space-x-2 gap-5 items-center hover:text-[#1fc600]" onClick={() => navigate('/ComingSoon')}>
            <MdOutlineDarkMode className="h-5 w-5" /> Theme{" "}
          </button>
          </div>


        </div>
      </div>
    </div>
  );
};





// const iconSidebar = () => {
//   return(
//     <>

// <div className="flex justify-center items-center ">
//       {/* Parent element with group */}
//       <div className="relative group">
//         {/* The main element */}
//         <button className="px-6 py-3 font-semibold rounded-lg shadow-md">
//           Hover Over Me
//         </button>

//         {/* The component to show on hover */}
//         <div className="absolute left-0 mt-2 hidden group-hover:block">
//           <Sidebar />
//         </div>
//       </div>
//     </div>

//     </>
//   )
// }



// export default iconSidebar;
export default Sidebar;