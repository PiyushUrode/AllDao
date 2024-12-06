import logo from "../assets/top-logo.png";
// import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import ToggleButton from "./Togglebutton";
import { useTheme } from '../context/ThemeContext';
const Navbar = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex md:items-stretch items-center  justify-between md:px-10  md:ps-24 gap-2  p-2  ">
      <div className="sm:hidden ">
        {" "}
        <img src={logo} alt="" className="h-8" />{" "}
      </div>
      <div className="sm:flex sm:items-center px-0 hidden sm:block sm:px-2 rounded-3xl   border-[#1fc600] border-2 gap-2 sm:w-[40%] md:w-[50%]">
        <HiOutlineSearch className="text-2xl  " />
        <input
          type="text"
          placeholder="Type token Symbol, address to find your launchpad"
          className=" bg-black dark:bg-white placeholder-[#eeededf1] dark:placeholder-[#202020f1] "
        />
      </div>
      <div className="flex items-center sm:items-stretch gap-2 md:gap-5 ">
        <button className="flex flex-row hidden sm:block font-semibold font-quicksand items-center p-1 px-5 md:px-5 border border-[#fdd717] shadow-sm shadow-[#fdd717] rounded dark:text-black">
          <span className=""> Rewards</span>
        </button>
        <button className="text-md font-semibold font-quicksand px-3 p-1 sm:p-1 md:p-2 md:px-5 text-md font-semibold font-quicksand border border-[#1fc600] p-2 px-3 lg:px-5 rounded-xl bg-gradient-to-r text-white dark:text-black from-[#000000] via-[#1fc600] to-[#000000] hover:from-[#000000] hover:via-[#22dd01] hover:to-[#000000] dark:bg-gradient-to-r dark:from-[#1fc600] dark:via-[#ffffff] dark:to-[#1fc600] ">
          Connect Wallet
        </button>

        {/* <button
        onClick={toggleTheme}
        className="ml-auto p-2 rounded bg-secondary-dark dark:bg-secondary-light text-text-dark dark:text-text-light"
      >
        {theme === 'dark' ? 'Switch to dark Mode' : 'Switch to light Mode'}
      </button> */}

      {/* toglle button start*/}
      <div >
        <ToggleButton/>
      </div>
      {/* toglle button end*/}



        <div className="block md:hidden text-xl ">
          <button
            className="block md:hidden text-xl "
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
