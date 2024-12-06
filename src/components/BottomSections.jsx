import Disclaimer from "./Disclaimer"
import Footer from "./Footer"
import Trending from "./Trending"

const BottomSections = () => {
    return(
        <div className="bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] md:ml-[6%] md:mr-[1%] lg:ml-[5%] lg:mr-[0%]">
        <Trending/>
        <Disclaimer/>
        <Footer/>
        </div>
    )
}
export default BottomSections