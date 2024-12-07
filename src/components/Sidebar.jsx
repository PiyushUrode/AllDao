//sidebar

// import React from 'react';
// import launchpad from "../assets/Launchpads.png"
import { useState, useRef, useEffect } from "react";
import Togglebutton from "./Togglebutton";
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
const [hovered, setHovered] = useState(false); // Track the hover state for the dropdown

// Function to toggle dropdown
const toggleDropdown = (dropdownId) => {
  setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
};

// Handle mouse enter (to open dropdown)
const handleMouseEnter = (dropdownId) => {
  if (isOpen) { // Ensure the sidebar is open before displaying the dropdown
    setHovered(true);
    setOpenDropdown(dropdownId); // Open the dropdown on mouse enter
  }
};

// Handle mouse leave (to close dropdown)
const handleMouseLeave = () => {
  setHovered(false);
  setOpenDropdown(null); // Close dropdown on mouse leave
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
      className={`fixed top-0 left-0 pl-2 slider max-h-screen overflow-x-hidden h-full  bg-black dark:bg-[#b5f8ad]  text-white dark:text-black font-semibold  transform ${
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
        <div className="text-3xl flex items-center font-bold gap-7 text-[#1fc600] cursor-pointer" onClick={() => navigate('/')}> 
          <img src={slogo} className="  h-8 w-8" alt="" /> 
        <img src={logo} className="w-24 " alt="" />
        </div>
        <button className="md:hidden text-xl" onClick={toggleSidebar}>
          ✕
        </button>
      </div>
          

        <div className="flex flex-col gap-2 mt-2 w-full">
       {/* launchpad */}
          <div
    className="hover:bg-[#ffffff1c]  py-2"
    onMouseEnter={() => setHovered(true)} // Set hover state to true
    onMouseLeave={() => setHovered(false)} // Set hover state to false
  >
    <button
      onClick={() => toggleDropdown("launchpad")}
      onMouseEnter={() => handleMouseEnter("launchpad")} // Show dropdown on mouse enter
      //      // onMouseLeave={handleMouseLeave} // // Hide dropdown on mouse leave
      className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-10 justify-between group"
    >
      <GoRocket className="h-7 w-7" />
      <span>Launchpad</span>
      <FaAngleRight />
    </button>

    {/* Dropdown Content */}
    {openDropdown === "launchpad" && hovered && (
      <div className="flex flex-col mx-5 mt-2   rounded bg-[#0000004e] dark:bg-[#f0fff0] dark:bg-[#f0fff0] ">
        <button
          className="hover:text-[#1fc600] text-left py-2 px-4"
          onClick={() => navigate("/Createlaunchpad1")}
        >
          Create presale
        </button>

        <button
          className="hover:text-[#1fc600] text-left py-2 px-4"
          onClick={() => navigate("/ComingSoon")}
        >
          Create Fairlaunch
        </button>
        <button
          className="hover:text-[#1fc600] text-left py-2 px-4"
          onClick={() => navigate("/ComingSoon")}
        >
          Create Subscription
        </button>
        <button
          className="hover:text-[#1fc600] text-left py-2 px-4"
          onClick={() => navigate("/ComingSoon")}
        >
          Create Social Sale
        </button>
        <button
          className="hover:text-[#1fc600] text-left py-2 px-4"
          onClick={() => navigate("/ComingSoon")}
        >
          Launchpad List
        </button>
      </div>
    )}
  </div>


  {/* launchpad end */}

          {/* pinkmeme button */}
          <div
    className="hover:bg-[#ffffff1c] py-2"
    onMouseEnter={() => setHovered(true)} // Set hover state to true
    onMouseLeave={() => setHovered(false)} // Set hover state to false
  >
    <button
      onClick={() => toggleDropdown("pinkMeme")}
      onMouseEnter={() => handleMouseEnter("pinkMeme")} // Show dropdown on mouse enter
      //      // onMouseLeave={handleMouseLeave} // // Hide dropdown on mouse leave
      className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group"
    >
      <TbGhost2 className="h-7 w-7" />
      <span>AllDao meme</span>
      <FaAngleRight />
    </button>

    {/* Dropdown Content */}
    {openDropdown === "pinkMeme" && hovered && (
      <div className="flex flex-col mx-5 mt-2  rounded bg-[#0000004e] dark:bg-[#f0fff0]">
        <button
          className="hover:text-[#1fc600] text-left py-2 px-4"
          onClick={() => navigate("/ComingSoon")}
        >
          Create Token
        </button>
        <button
          className="hover:text-[#1fc600] text-left py-2 px-4"
          onClick={() => navigate("/ComingSoon")}
        >
          Token List
        </button>
      </div>
    )}
  </div>

          {/* tele airdrop button button */}
          <div
    className="hover:bg-[#ffffff1c] py-2"
    onMouseEnter={() => setHovered(true)} // Set hover state to true
    onMouseLeave={() => setHovered(false)} // Set hover state to false
  >


    <button
      onClick={() => toggleDropdown("Tele-Airdrop-Bot")}
      onMouseEnter={() => handleMouseEnter("Tele-Airdrop-Bot")} // Show dropdown on mouse enter
      //      // onMouseLeave={handleMouseLeave} // // Hide dropdown on mouse leave
      className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group"
    >
      <SiAirplayaudio className="h-7 w-7" />
      <span>TeleBot</span>
      <FaAngleRight />
    </button>

    {/* Dropdown Content */}
    {openDropdown === "Tele-Airdrop-Bot" && hovered && (
      <div className="flex flex-col mx-5 mt-2  rounded bg-[#0000004e] dark:bg-[#f0fff0]">
        <button
          className="hover:text-[#1fc600] text-left py-2 px-4"
          onClick={() => navigate("/ComingSoon")}
        >
          Create Tele Airdrop
        </button>
        <button
          className="hover:text-[#1fc600] text-left py-2 px-4"
          onClick={() => navigate("/ComingSoon")}
        >
          Airdrop Bot List
        </button>
      </div>
    )}
  </div>

          {/* pinklock button */}
          <div
    className="hover:bg-[#ffffff1c] py-2 "
    onMouseEnter={() => setHovered(true)} // Set hover state to true
    onMouseLeave={() => setHovered(false)} // Set hover state to false
  >


    <button
      onClick={() => toggleDropdown("PinkLock")}
      onMouseEnter={() => handleMouseEnter("PinkLock")} // Show dropdown on mouse enter
      //      // onMouseLeave={handleMouseLeave} // // Hide dropdown on mouse leave
      className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group"
    >
      <MdSecurity className="h-7 w-7" />
      <span>AllDao Lock</span>
      <FaAngleRight />
    </button>

    {/* Dropdown Content */}
    {openDropdown === "PinkLock" && hovered && (
      <div className="flex flex-col mx-5 mt-2  rounded bg-[#0000004e] dark:bg-[#f0fff0]">
        <button
          className="hover:text-[#1fc600] text-left py-2 px-4"
          onClick={() => navigate('/PinklockCreate1')}
        >
          Create
        </button>
        <button
          className="hover:text-[#1fc600] text-left py-2 px-4"
          onClick={() => navigate('/PinklockToken')}
        >
          Token
        </button>
        <button
          className="hover:text-[#1fc600] text-left py-2 px-4"
          onClick={() => navigate('/Liquidity1')}
        >
          Liquidity
        </button>
      </div>
    )}
  </div>

          {/* Airdrops button */}
          <div className="hover:bg-[#ffffff1c] py-2"
     onMouseEnter={() => setHovered(true)} // Set hover state to true
     onMouseLeave={() => setHovered(false)} // Set hover state to false
>


  <button
      onClick={() => toggleDropdown("Airdrops")}
      onMouseEnter={() => handleMouseEnter("Airdrops")} // Show dropdown on mouse enter
      //      // onMouseLeave={handleMouseLeave} // // Hide dropdown on mouse leave
      className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group"
    >
      <GiAirBalloon className="h-7 w-7" />
      <span>Airdrops</span>
      <FaAngleRight />
    </button>

  {/* Dropdown Content */}
  {openDropdown === "Airdrops" && hovered && (
    <div className="flex flex-col mx-5 mt-2  rounded bg-[#0000004e] dark:bg-[#f0fff0]">
      <button
        className="hover:text-[#1fc600] text-left py-2 px-4"
        onClick={() => navigate('/Airdrop1')}
      >
        Create Airdrop
      </button>
      <button
        className="hover:text-[#1fc600] text-left py-2 px-4"
        onClick={() => navigate('/Airdrop4')}
      >
        Airdrop List
      </button>
    </div>
  )}
</div>


<div className="hover:bg-[#ffffff1c] py-2"
     onMouseEnter={() => setHovered(true)} // Set hover state to true
     onMouseLeave={() => setHovered(false)} // Set hover state to false
>


  <button
      onClick={() => toggleDropdown("Token")}
      onMouseEnter={() => handleMouseEnter("Token")} // Show dropdown on mouse enter
      //      // onMouseLeave={handleMouseLeave} // // Hide dropdown on mouse leave
      className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group"
    >
      <MdOutlineGeneratingTokens className="h-7 w-7" />
      <span>Token</span>
      <FaAngleRight />
    </button>

  {/* Dropdown Content */}
  {openDropdown === "Token" && hovered && (
    <div className="flex flex-col mx-5 mt-2  rounded bg-[#0000004e] dark:bg-[#f0fff0]">
      <button
        className="hover:text-[#1fc600] text-left py-2 px-4"
        onClick={() => navigate('/Token')}
      >
TokenLock
      </button>
      <button
        className="hover:text-[#1fc600] text-left py-2 px-4"
        onClick={() => navigate('/TokenLockInfo')}
      >
TokenLockInfo
      </button>
    </div>
  )}
</div>


          {/* Token button */}
        

          <hr className="border-t border-[#1ec6004d]" />
         
{/* 
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <MdSecurity className="h-7 w-7" /> sales{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <TbLayoutBoardSplit className="h-7 w-7" /> Leaderboards{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <RiDoorLockBoxLine className="h-7 w-7" />  Fiat{" "}
          </button>
          </div>

                    
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <BiSolidNetworkChart className="h-7 w-7" /> Bridge{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <GrRobot className="h-7 w-7" /> AntiBot{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/Multisender')}>
            <LuSendHorizonal className="h-7 w-7" /> MultiSender{" "}
          </button>
          </div>

          <hr className="border-t border-[#1ec6004d]" />

          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <BsGraphUpArrow className="h-7 w-7" /> dexview.com{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <AiOutlineAlert className="h-7 w-7" /> poolsAlert{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <SiTicktick className="h-7 w-7" /> KYC_Audit{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <IoDocumentTextOutline className="h-7 w-7" /> Docs{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <AiOutlineShoppingCart className="h-7 w-7" /> Shop{" "}
          </button>
          </div>

          <hr className="border-t border-[#1ec6004d]" />

          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <PiTelegramLogo className="h-7 w-7" /> Telegram{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <RiTwitterXLine className="h-7 w-7" /> X{" "}
          </button>
          </div>
          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <RiFacebookBoxLine className="h-7 w-7" /> Facebook{" "}
          </button>
          </div>

          <hr />

          <div className="hover:bg-[#ffffff1c] py-2">
            <button className="hover:text-[#1fc600]  px-4 text-l flex space-x-2 gap-5 items-center group" onClick={() => navigate('/ComingSoon')}>
            <MdOutlineDarkMode className="h-7 w-7" /> Theme{" "}
          </button>
          </div> */}



        </div>
      </div>
    </div>
  );
};




export default Sidebar;