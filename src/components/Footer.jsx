
import logo from "../assets/alldao_logodark.png"
// import telegram from '../../assets/socialmedia/telegram.svg';
// import instagram from '../../assets/socialmedia/instagram.svg';
// import facebook from '../../assets/socialmedia/facebook.svg';
// import twitter from '../../assets/socialmedia/twitter.svg';
import { FaTelegram } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
   <div className=" bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000]  md:px-10 px-1">
     <div className="flex flex-wrap justify-between rounded-t-2xl bg-[#1d1d1d] dark:bg-[#b5f8ad] p-6 sm:p-8 lg:p-12 gap-8">
      {/* Column One */}
      <div className="flex-1 min-w-[200px] space-y-2">
        <div className="flex items-center gap-2">
        <img className="w-[70%]" src={logo} alt="Logo" />
        </div>
        <p className="font-medium py-5">
          PinkSale helps everyone to create their own tokens and token sales in a few seconds.
        </p>
        <div className="flex gap-5">
          <a href="/"> <FaTelegram className="w-6 h-6 hover:text-[#1fc600]"/> </a>
          <a href="/"> <AiFillInstagram className="w-6 h-6 hover:text-[#1fc600]"/> </a>
          <a href="/"> <FaFacebook className="w-6 h-6 hover:text-[#1fc600]"/> </a>
          <a href="/"> <RiTwitterXFill className="w-6 h-6 hover:text-[#1fc600]"/> </a>
          {/* <img className="w-6 sm:w-8 lg:w-10 cursor-pointer" src="/" alt="Telegram" />
          <img className="w-6 sm:w-8 lg:w-10 cursor-pointer" src=" /" alt="Instagram" />
          <img className="w-6 sm:w-8 lg:w-10 cursor-pointer" src=" /" alt="Facebook" />
          <img className="w-6 sm:w-8 lg:w-10 cursor-pointer" src='/' alt="Twitter" /> */}
        </div>
      </div>

      {/* Column Two */}
      <div className="flex-1 min-w-[200px] lg:mt-5">
        <h3 className="text-2xl  font-k2d font-bold mb-4">Main Links</h3>
        <ul className="">
          <li><a href="#" className="text-md font-quicksand font-semibold hover:text-[#1fc600]">Launchpad</a></li>
          <li><a href="#" className="text-md font-quicksand font-semibold hover:text-[#1fc600]">PinkLock</a></li>
          <li><a href="#" className="text-md font-quicksand font-semibold hover:text-[#1fc600]">Airdrops</a></li>
        </ul>
      </div>

      {/* Column Three */}
      <div className="flex-1 min-w-[200px] lg:mt-5">
        <h3 className="text-2xl  font-k2d font-bold mb-4">PinkLock Pages</h3>
        <ul className="">
          <li><a href="#" className="text-md font-quicksand font-semibold hover:text-[#1fc600]">Create</a></li>
          <li><a href="#" className="text-md font-quicksand font-semibold hover:text-[#1fc600]">Token</a></li>
          <li><a href="#" className="text-md font-quicksand font-semibold hover:text-[#1fc600]">Liquidity</a></li>
        </ul>
      </div>

      {/* Column Four */}
      <div className="flex-1 min-w-[200px] lg:mt-5">
        <h3 className="text-2xl  font-k2d font-bold mb-4">Other Pages</h3>
        <ul className="">
          <li><a href="#" className="text-md font-quicksand font-semibold  hover:text-[#1fc600]" onClick={() => navigate('/PrivacyPolicy')}>Privacy Policy</a></li>
          <li><a href="#" className="text-md font-quicksand font-semibold hover:text-[#1fc600]"onClick={() => navigate('/TermsConditions')}>Terms/Conditions</a></li>
        </ul>
      </div>
    </div>
   </div>
  );
}

export default Footer;
