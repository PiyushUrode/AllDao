import robot from "../../assets/RobotVideo.mp4"
import robot2 from "../../assets/Robotvideo2.mp4"
// import robotdark from "../../assets/robotdark.gif"
import tool1 from "../../assets/tool1.png"
import tool2 from "../../assets/tool2.png"
import tool3 from "../../assets/tool3.png"
import tool4 from "../../assets/tool4.png"
import tool5 from "../../assets/tool5.png"
import tool6 from "../../assets/tool6.png"
import tool7 from "../../assets/tool7.png"
import tool8 from "../../assets/tool8.png"
import "../Tooltoken.css"
const ToolsToken = () => {
  return (
    <>
      <div className="mt-20 mx-5 my-10">
        <div className="text-center">
          <div className="">
            <div className="text-center font-k2d lg:text-6xl text-4xl font-bold dark:bg-text-gradient-1 bg-gradient-to-r from-[#1fc600] via-[#8AE27A] to-[#1fc600] bg-clip-text text-transparent">
              Comprehensive Tools for Seamless Token Sales
            </div>
            <p className="mt-5 lg:mx-40 text-center text-md font-thin font-quicksand dark:font-[600]">
              ALLDAO offers a robust suite of intuitive tools, empowering everyone—novice or expert—to create tokens and run successful sales effortlessly. Our platform ensures your project is verified and showcased on major explorer websites.
            </p>
          </div>

          <div className="flex items-center gap-5 mt-20 justify-between">
            <div className="md:w-[40%] hidden md:block">
              {/* Video for light mode */}
              <video
                src={robot}
                autoPlay
                loop
                muted
                className="transform scale-x-[-1] w-full dark:hidden"
              ></video>

              <video
                src={robot2}
                autoPlay
                loop
                muted
                className="transform scale-x-[-1] w-full hidden dark:block"
              ></video>


            </div>

            <div className="flex w-full md:w-[80%] flex-col justify-between gap-5 ">
              <div className="flex flex-col w-full md:flex-row justify-center gap-5  items-center">
                <div div className="border w-full md:w-1/2 border-[#1ec600fa] shadow-md shadow-[#1fc600] bg-[#1d1d1d] dark:bg-[#fafafa] py-10 px-5 flex flex-col items-center rounded-2xl gap-5 ">
                  {/* <img src={tool1} alt="Standard.img" className="h-40 w-40 border border-[#1ec600fa] rounded-full " /> */}
                  <div className="relative w-56 h-56 p-2 rounded-full border-4 border-gray-300 hover:border-spacing-2   ">
                    <div className="absolute inset-0 rounded-full border-4 border-green-500  "></div>
                    <img
                      src={tool1}
                      alt="a lighthouse"
                      className="w-full h-full rounded-full object-cover shadow-2xlw shadow-inner shadow-emerald-800"
                    />
                  </div>
                  <div className="">
                    <div className="text-2xl font-bold text-[#1fc600] font-k2d">STANDARD</div>
                    <p>Mint standard tokens on ETH, BSC, AVAX, Fantom, Polygon.</p>
                  </div>
                </div>
                <div className="border w-full md:w-1/2 border-[#1ec600fa] shadow-md shadow-[#1fc600] bg-[#1d1d1d] dark:bg-[#fafafa] py-10 px-5 flex flex-col items-center rounded-2xl gap-5 ">
                  {/* <img src={tool2} alt="Standard.img" className="h-40 w-40 border border-[#1ec600fa] rounded-full" /> */}
                  <div className="relative w-56 h-56 p-2 rounded-full border-4 border-gray-300 hover:border-spacing-2   ">
                    <div className="absolute inset-0 rounded-full border-4 border-green-500  "></div>
                    <img
                      src={tool2}
                      alt="a lighthouse"
                      className="w-full h-full rounded-full object-cover shadow-2xlw shadow-inner shadow-emerald-800"
                    />
                  </div>
                  <div className="">
                    <div className="text-2xl font-bold text-[#1fc600] font-k2d">DEFLATIONERY</div>
                    <p>Generate deflationary tokens with tax and/or charity functions.</p>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col md:flex-row justify-center gap-5 items-center">
                <div className="border w-full md:w-1/2 border-[#1ec600fa] shadow-md shadow-[#1fc600] bg-[#1d1d1d] dark:bg-[#fafafa] py-10 px-5 flex flex-col items-center rounded-2xl gap-5  ">
                  {/* <img src={tool3} alt="Standard.img" className="h-40 w-40 border border-[#1ec600fa] rounded-full" /> */}
                  <div className="relative  w-56 h-56 p-2 rounded-full border-4 border-gray-300 hover:border-spacing-2   ">
                    <div className="absolute inset-0 rounded-full border-4 border-green-500  "></div>
                    <img
                      src={tool3}
                      alt="a lighthouse"
                      className="w-full h-full rounded-full object-cover shadow-2xlw shadow-inner shadow-emerald-800"
                    />
                  </div>
                  <div className="">
                    <div className="text-2xl font-bold text-[#1fc600] font-k2d">CUSTOMIZATION</div>
                    <p>Create a token sale for your own custom token easily.</p>
                  </div>
                </div>
                <div className="border w-full md:w-1/2 border-[#1ec600fa] shadow-md shadow-[#1fc600] bg-[#1d1d1d] dark:bg-[#fafafa] py-10 px-5 flex flex-col items-center rounded-2xl gap-5 ">
                  {/* <img src={tool4} alt="Standard.img" className="h-40 w-40 border border-[#1ec600fa] rounded-full" /> */}
                  <div className="relative w-56 h-56 p-2 rounded-full border-4 border-gray-300 hover:border-spacing-2   ">
                    <div className="absolute inset-0 rounded-full border-4 border-green-500  "></div>
                    <img
                      src={tool4}
                      alt="a lighthouse"
                      className="w-full h-full rounded-full object-cover shadow-2xlw shadow-inner shadow-emerald-800"
                    />
                  </div>
                  <div className="">
                    <div className="text-2xl font-bold text-[#1fc600] font-k2d">LAUNCHPAD</div>
                    <p>Use the token you mint to create a launchpad with just a few clicks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex items-center gap-5 mt-5 md:mt-20 justify-between">
            <div className="flex w-full md:w-[80%] flex-col justify-between gap-5 ">
              <div className="flex flex-col w-full md:flex-row justify-center gap-5 items-center">
                <div className="border w-full md:w-1/2 border-[#1ec600fa] shadow-md shadow-[#1fc600] bg-[#1d1d1d] dark:bg-[#fafafa] py-10 px-5 flex flex-col items-center rounded-2xl gap-5 ">
                  {/* <img src={tool5} alt="Standard.img" className="h-40 w-40 border border-[#1ec600fa] rounded-full" /> */}
                  <div className="relative w-56 h-56 p-2 rounded-full border-4 border-gray-300 hover:border-spacing-2   ">
                    <div className="absolute inset-0 rounded-full border-4 border-green-500  "></div>
                    <img
                      src={tool5}
                      alt="a lighthouse"
                      className="w-full h-full rounded-full object-cover shadow-2xlw shadow-inner shadow-emerald-800"
                    />
                  </div>
                  <div className="">
                    <div className="text-2xl font-bold text-[#1fc600] font-k2d">STANDARD</div>
                    <p>Mint standard tokens on ETH, BSC, AVAX, Fantom, Polygon.</p>
                  </div>
                </div>
                <div className="border w-full md:w-1/2  md:w-1/2 border-[#1ec600fa] shadow-md shadow-[#1fc600] bg-[#1d1d1d] dark:bg-[#fafafa] py-10 px-5 flex flex-col items-center rounded-2xl gap-5 ">
                  {/* <img src={tool6} alt="Standard.img" className="h-40 w-40 border border-[#1ec600fa] rounded-full" /> */}
                  <div className="relative w-56 h-56 p-2 rounded-full border-4 border-gray-300 hover:border-spacing-2   ">
                    <div className="absolute inset-0 rounded-full border-4 border-green-500  "></div>
                    <img
                      src={tool6}
                      alt="a lighthouse"
                      className="w-full h-full rounded-full object-cover shadow-2xlw shadow-inner shadow-emerald-800"
                    />
                  </div>
                  
                  <div className="">
                    <div className="text-2xl font-bold text-[#1fc600] font-k2d">DEFLATIONERY</div>
                    <p>Generate deflationary tokens with tax and/or charity functions.</p>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col md:flex-row justify-center gap-5 items-center">
                <div className="border w-full md:w-1/2 border-[#1ec600fa] shadow-md shadow-[#1fc600] bg-[#1d1d1d] dark:bg-[#fafafa] py-10 px-5 flex flex-col items-center rounded-2xl gap-5 ">
                  {/* <img src={tool7} alt="Standard.img" className="h-40 w-40 border border-[#1ec600fa] rounded-full" /> */}
                  <div className="relative w-56 h-56 p-2 rounded-full border-4 border-gray-300 hover:border-spacing-2   ">
                    <div className="absolute inset-0 rounded-full border-4 border-green-500  "></div>
                    <img
                      src={tool7}
                      alt="a lighthouse"
                      className="w-full h-full rounded-full object-cover shadow-2xlw shadow-inner shadow-emerald-800"
                    />
                  </div>
                  <div className="">
                    <div className="text-2xl font-bold text-[#1fc600] font-k2d">CUSTOMIZATION</div>
                    <p>Create a token sale for your own custom token easily.</p>
                  </div>
                </div>
                <div className="border w-full md:w-1/2 border-[#1ec600fa] shadow-md shadow-[#1fc600] bg-[#1d1d1d] dark:bg-[#fafafa] py-10 px-5 flex flex-col items-center rounded-2xl gap-5 ">
                  {/* <img src={tool8} alt="Standard.img" className="h-40 w-40 border border-[#1ec600fa] rounded-full" /> */}
                  <div className="relative w-56 h-56 p-2 rounded-full border-4 border-gray-300 hover:border-spacing-2  ">
                    <div className="absolute inset-0 rounded-full border-4 border-green-500  "></div>
                    <img
                      src={tool8}
                      alt="a lighthouse"
                      className="w-full h-full rounded-full object-cover shadow-2xlw shadow-inner shadow-emerald-800"
                    />
                  </div>
                  <div className="">
                    <div className="text-2xl font-bold text-[#1fc600] font-k2d">LAUNCHPAD</div>
                    <p>Use the token you mint to create a launchpad with just a few clicks.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[40%] hidden md:block">
              {/* Video for light mode */}
              <video
                src={robot}
                autoPlay
                loop
                muted
                className="transform scale-x-[-1] w-full dark:hidden"
              ></video>

              {/* GIF for dark mode */}
              <video
                src={robot2}
                autoPlay
                loop
                muted
                className="transform scale-x-[-1] w-full hidden dark:block"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ToolsToken;
