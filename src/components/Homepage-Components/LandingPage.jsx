import image1 from "../../assets/homeimage.png";

function LandingPage() {

  return (

    <>
      <div className="overflow-hidden  ">
      <div className="mx-5 my-5 md:container ">
          <div className="sm:flex sm:flex-row flex-col-reverse text-center md:text-start items-center justify-center md:justify-between  ">
            <div className="w-full sm:w-[60%] mt-10 md:mt-0">
              <div className=" text-4xl lg:text-7xl dark:text-[#120e0eda] font-bold font-k2d"> The Effortless    

                <span className="dark:bg-text-gradient-2 bg-gradient-to-r from-[#1ec600] to-[#8AE27A] bg-clip-text text-transparent"> Token </span>

                <span className="bg-gradient-to-r from-[#1ec600] to-[#8AE27A] bg-clip-text text-transparent"> Creation  </span>
                , Just a Click Away
              </div>
              <p className="mt-5 md:w-[80%] text-md font-thin font-quicksand dark:font-[600]">
              ALLDAO revolutionizes the way you create tokens and launch sales, allowing you to do it in mere seconds. Every token made on our platform is rigorously verified and displayed on trusted explorer sites, ensuring transparency and credibility.
              </p>
              <div className="flex gap-5 mt-5 justify-center md:justify-start">
                <button className="text-md font-semibold font-quicksand border border-[#1fc600] p-2 px-3 lg:px-5 rounded bg-gradient-to-r from-[#000000] via-[#1fc600] to-[#000000] hover:from-[#000000] hover:via-[#22dd01] hover:to-[#000000] dark:bg-gradient-to-r dark:from-[#1fc600] dark:via-[#ffffff] dark:to-[#1fc600] ">
                  Create Now
                </button>
                <button className="underline hover:text-[#1fc600] font-light font-quicksand dark:font-[600]">
                  Learn more
                </button>
              </div>
            </div>
            <div className="md:mr-16 lg:mr-24 hidden mt-5 sm:mt-0 sm:block ">
              <img src={image1} className="  h-[380] w-[280px] lg:w-[400px] animate-spin-reverse " alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
