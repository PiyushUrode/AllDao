// import React from 'react'

import Landingpage from "./Homepage-Components/LandingPage";
import SliderBox from "./Homepage-Components/SliderBox";
import Table from "./Homepage-Components/Table";
import ToolsToken from "./Homepage-Components/ToolsToken";
import ProtocolSystem from "./Homepage-Components/ProtocolSystem";
import BottomSections from "./BottomSections"
// import Footer from "./Footer"
// import Trending from "./Trending"
// import Disclaimer from "./Disclaimer"
const Homepage = () => {
  return (
    <div className="">
      <div className="bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] md:ml-[6%] md:mr-[1%] lg:ml-[5%] lg:mr-[0%] ">
        <Landingpage />
        <SliderBox />
        <Table />
        <ToolsToken />
        <ProtocolSystem />
        {/* <BottomSections/> */}
        {/* <Trending/> */}
        {/* <Disclaimer/> */}
        {/* <Footer/> */}
      </div>
            <BottomSections/>
    </div>
  );
};

export default Homepage;
