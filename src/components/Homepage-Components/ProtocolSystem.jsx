import { IoPeopleSharp } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiSwapBold } from "react-icons/pi";
import { BsPersonLock } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";
import { FaPersonSnowboarding } from "react-icons/fa6";

const ProtocolSystem = () => {
  return (
    <>
      <div className="mt-20 mx-5 p">
        <div className="bg-[#1d1d1d] dark:bg-[#ffff] md:py-10 ">
          <div className="my-10 ">
            <div className="text-center font-k2d lg:text-6xl text-4xl font-bold bg-gradient-to-r from-[#1fc600] via-[#8AE27A] to-[#1fc600] bg-clip-text text-transparent">
            A Thriving Ecosystem of Decentralized Tools

            </div>
            <p className="mt-5 lg:mx-40 text-center text-md font-thin font-quicksand dark:font-[600]">
            ALLDAO is building a powerful suite of tools for the decentralized finance world. From PinkMoon to PinkSwap, we’re revolutionizing every aspect of DeFi with tools that bring ease and efficiency to the crypto community. If it’s decentralized, we’re part of it!

            </p>
          </div>

          <div className="lg:mx-28 lg:my-20">
            <div className="mx-5 text-center sm:text-start flex flex-col sm:flex-row gap-5 items-center justify-between my-5">
              <div className="border border-[#1ec6004b] bg-[#000000] dark:bg-[#fafafa]   border-[#1ec600fa] shadow-inner shadow-[#1fc600] shadow-inner rounded-lg hover:border hover:border[#1fc600] flex flex-col gap-4 p-5 w-full animate-border-color-pulse ">
                <div className="flex gap-2 md:items-center  ">
                  <IoPeopleSharp className="h-8 w-8 border border-[#1ec6004b] rounded-full bg-[#1d1d1d] dark:text-[#ffffff] dark:hover:text-[#1fc600] hover:text-[#1fc600] p-1" />
                  <div className="font-bol font-k2d text-2xl  ">PinkMoon</div>
                </div>
                <div className="font-quicksand text-lg   text-left ">
                  The best launchpad for prefessional teams.
                </div>
              </div>
              <div className="border border-[#1ec6004b] bg-[#000000] dark:bg-[#fafafa]   border-[#1ec600fa] shadow-inner shadow-[#1fc600] shadow-inner  rounded-lg hover:border hover:border[#1fc600] flex flex-col gap-4 p-5 w-full animate-border-color-pulse ">
                <div className="flex gap-2 items-center ">
                  <BsGraphUpArrow className="h-8 w-8 border border-[#1ec6004b] rounded-full bg-[#1d1d1d] dark:text-[#ffffff] dark:hover:text-[#1fc600] hover:text-[#1fc600] p-1" />
                  <div className="font-bol font-k2d text-2xl">PinkSale</div>
                </div>
                <div className="font-quicksand text-lg text-left  text-left">
                  Launch a token sale with a few clicks.
                </div>
              </div>
            </div>
            <div className="mx-5 text-center sm:text-start flex flex-col sm:flex-row gap-5 items-center justify-between my-5">
              <div className="border border-[#1ec6004b] bg-[#000000] dark:bg-[#fafafa]   border-[#1ec600fa] shadow-inner shadow-[#1fc600] shadow-inner  rounded-lg hover:border hover:border[#1fc600] flex flex-col gap-4 p-5 w-full animate-border-color-pulse ">
                <div className="flex gap-2 items-center ">
                  <PiSwapBold className="h-8 w-8 border border-[#1ec6004b] rounded-full bg-[#1d1d1d] dark:text-[#ffffff] dark:hover:text-[#1fc600]  hover:text-[#1fc600] p-1" />
                  <div className="font-bol font-k2d text-2xl">PinkSwap</div>
                </div>
                <div className="font-quicksand text-lg text-left  text-left">
                  Swap tokens and farming $PinkS.
                </div>
              </div>
              <div className="border border-[#1ec6004b] bg-[#000000] dark:bg-[#fafafa]   border-[#1ec600fa] shadow-inner shadow-[#1fc600] shadow-inner  rounded-lg hover:border hover:border[#1fc600] flex flex-col gap-4 p-5 w-full animate-border-color-pulse ">
                <div className="flex gap-2 items-center ">
                  <BsPersonLock className="h-8 w-8 border border-[#1ec6004b] rounded-full bg-[#1d1d1d] dark:text-[#ffffff] dark:hover:text-[#1fc600]  hover:text-[#1fc600] p-1" />
                  <div className="font-bol font-k2d text-2xl">PinkLock</div>
                </div>
                <div className="font-quicksand text-lg text-left  text-left">
                  Locking liquidity on PinkSwap.
                </div>
              </div>
            </div>
            <div className="mx-5 text-center sm:text-start flex flex-col sm:flex-row gap-5 items-center justify-between my-5">
              <div className="border border-[#1ec6004b] bg-[#000000] dark:bg-[#fafafa]   border-[#1ec600fa] shadow-inner shadow-[#1fc600] shadow-inner  rounded-lg hover:border hover:border[#1fc600] flex flex-col gap-4 p-5 w-full  animate-border-color-pulse">
                <div className="flex gap-2 items-center">
                  <FaPersonSnowboarding className="h-8 w-8 border border-[#1ec6004b] rounded-full bg-[#1d1d1d] dark:text-[#ffffff] dark:hover:text-[#1fc600]  hover:text-[#1fc600] p-1" />
                  <div className="font-bol font-k2d text-2xl">PinkElon</div>
                </div>
                <div className="font-quicksand text-lg text-left  text-left">
                  The first meme token on PinkMoon.
                </div>
              </div>
              <div className="border border-[#1ec6004b] bg-[#000000] dark:bg-[#fafafa]   border-[#1ec600fa]  shadow-inner  shadow-[#1fc600]   rounded-xl i hover:border hover:border[#1fc600] flex flex-col gap-4 p-5 w-full animate-border-color-pulse ">
                <div className="flex gap-2 items-center">
                  <LuWallet className="h-8 w-8 border border-[#1ec6004b] rounded-full bg-[#1d1d1d] dark:text-[#ffffff] dark:hover:text-[#1fc600]  hover:text-[#1fc600] p-1" />
                  <div className="font-bol font-k2d text-2xl">PinkWallet</div>
                </div>
                <div className="font-quicksand text-lg text-left  text-left">
                  Crypto wallet, buy, store, exchange & earn.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProtocolSystem;
