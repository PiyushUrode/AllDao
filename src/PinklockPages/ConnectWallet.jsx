import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineQuestion, AiOutlineClose } from 'react-icons/ai';
import iconimg1 from '../image/page2/iconimg1.png';
import iconimg2 from '../image/page2/iconimg2.png';
import iconimg3 from '../image/page2/iconimg3.png';
import iconimg4 from '../image/page2/iconimg4.png';
import iconimg5 from '../image/page2/iconimg5.png';
import iconimg6 from '../image/page2/iconimg6.png';
import iconimg7 from '../image/page2/iconimg7.png';
import iconimg8 from '../image/page2/iconimg8.png';
import iconimg9 from '../image/page2/iconimg9.png';
import BottomSections from '../components/BottomSections';

const ConnectWallet = () => {
  const [showQrCode, setShowQrCode] = useState(null);
  const navigate = useNavigate();

  const handleBoxClick = (path) => {
    navigate(path);
  };

  const toggleQrCode = (id) => {
    setShowQrCode((prev) => (prev === id ? null : id));
  };

  const wallets = [
    { id: 1, img: iconimg1, name: 'Wallet Connect', path: '/PinklockCreate2' },
    { id: 2, img: iconimg2, name: 'Meta Mask', path: '/PinklockCreate2' },
    { id: 3, img: iconimg3, name: 'Trust Wallet', path: '/PinklockCreate2' },
    { id: 4, img: iconimg4, name: 'Binance Web3 Wallet', path: '/PinklockCreate2' },
    { id: 5, img: iconimg5, name: 'OKX Wallet', path: '/PinklockCreate2' },
    { id: 6, img: iconimg6, name: 'Bitnet Wallet', path: '/PinklockCreate2' },
    { id: 7, img: iconimg7, name: 'AVE Wallet', path: '/PinklockCreate2' },
    { id: 8, img: iconimg8, name: 'Coin Wallet', path: '/PinklockCreate2' },
    { id: 9, img: iconimg9, name: 'All Wallet', path: '/PinklockCreate2' },
  ];

  return (
    <>
    <div className="pt-5 az:pt-0 md:pt-5 bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] w-full flex flex-col  items-center p-1 sm:px-10 md:px-16 lg:px-20 xl:px-28 ">
      <div className="w-full sm:w-full  md:w-full lg:w-[40%] flex flex-col items-center p-5 sm:py-10 lg:py-5 bg-[#0a0a0a] dark:bg-[#00000026] rounded-lg border border-[#1ec6003f] dark:border-0">
        {/* Header Section */}
        <div className="w-full flex justify-between items-center px-5 sm:px-10 py-2 rounded-lg bg-black dark:bg-[#00000030]">
          <AiOutlineQuestion size={30} className="" />
          <h1 className=" font-bold">Connect Wallet</h1>
          <AiOutlineClose size={30} className="" />
        </div>

        {/* Form Section */}
        <div className="w-full flex flex-col gap-2 py-3" id="form">
          {wallets.map((wallet) => (
            <div
              key={wallet.id}
              className="bg-[#ffffff1d] dark:bg-[#00000026] flex flex-row justify-between items-center px-5 py-3 sm:px-10 w-full rounded-lg cursor-pointer hover:bg-[#97ff841c] dark:hover:bg-[#00000015] transition-all"
              onClick={() => handleBoxClick(wallet.path)}
            >
              <div className="flex flex-row gap-4 items-center">
                <img src={wallet.img} alt={`${wallet.name} icon`} className="w-8 h-8" />
                <h1 className="">{wallet.name}</h1>
              </div>
              <button
                className="text-[#1fc600] border border-[#1ec6003a] px-4 rounded-lg"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click event bubbling
                  toggleQrCode(wallet.id);
                }}
              >
                QR Code
              </button>
            </div>
          ))}
        </div>

        {/* QR Code Display */}
        {showQrCode && (
          <div className="w-full mt-4 flex justify-center ">
            <h1 className="text-green-500 text-lg border-2   border-[#1FC600] p-4 rounded-lg">
              QR Code for Wallet {showQrCode}
            </h1>
          </div>
        )}
      </div>
    </div>
    <BottomSections/>
    </>
  );
};

export default ConnectWallet;
