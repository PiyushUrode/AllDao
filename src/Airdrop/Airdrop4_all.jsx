import {useState} from 'react'
import  Alldrop1 from "../assets/Binance_Logo.png"
import  Alldrop2 from "../assets/ethereum.png"
import  Alldrop3 from "../assets/solana.png"
import  Alldrop4 from "../assets/arbitrum.png"
import  Alldrop5 from "../assets/polygon.png"
import  Alldrop6 from "../assets/avalanche.png"
import  Alldrop7 from "../assets/fantom-opera.png"
import  Alldrop8 from "../assets/cronos-.png"
import  Alldrop9 from "../assets/alvey-chain.webp"
import  Alldrop10  from "../assets/bitrock.png"
import  Alldrop11  from "../assets/core.png"
import  Alldrop12  from "../assets/dogechain.png"








const Airdrop4_all = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false); // Dropdown visibility
  const [selectedOption, setSelectedOption] = useState('Select an option'); // Selected dropdown value
  const options = ['Option 1', 'Option 2', 'Option 3'];
    // Toggle dropdown visibility
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Handle dropdown option selection
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };

    const cardData = [
      {
        id: 1,
        logo: Alldrop1, // Reference the imported variable
        coinName: "Pi Coin",
        tokenInfo: { name: "Pi Token", symbol: "PI", decimal: 18 },
        status: "Start",
        action: "Airdrop Active",
      },
      {
        id: 2,
        logo: Alldrop2,
        coinName: "Cash Coin",
        tokenInfo: { name: "Cash Token", symbol: "CASH", decimal: 18 },
        status: "Cancel",
        action: "Airdrop Cancelled",
      },
      {
        id: 3,
        logo: Alldrop3,
        coinName: "Ether Coin",
        tokenInfo: { name: "Ether", symbol: "ETH", decimal: 18 },
        status: "Start",
        action: "Airdrop Active",
      },
      {
        id: 4,
        logo: Alldrop4,
        coinName: "Doge Coin",
        tokenInfo: { name: "Doge Token", symbol: "DOGE", decimal: 8 },
        status: "Cancel",
        action: "Airdrop Cancelled",
      },
      {
        id: 5,
        logo: Alldrop5,
        coinName: "Shiba Coin",
        tokenInfo: { name: "Shiba Token", symbol: "SHIB", decimal: 18 },
        status: "Start",
        action: "Airdrop Active",
      },
      {
        id: 6,
        logo: Alldrop6,
        coinName: "Lite Coin",
        tokenInfo: { name: "Litecoin", symbol: "LTC", decimal: 8 },
        status: "Start",
        action: "Airdrop Active",
      },
      {
        id: 7,
        logo: Alldrop7,
        coinName: "Ripple Coin",
        tokenInfo: { name: "Ripple", symbol: "XRP", decimal: 6 },
        status: "Cancel ",
        action: "Airdrop Cancelled",
      },
      {
        id: 8,
        logo: Alldrop8,
        coinName: "Cardano Coin",
        tokenInfo: { name: "Cardano", symbol: "ADA", decimal: 6 },
        status: "Start",
        action: "Airdrop Active",
      },
      {
        id: 9,
        logo: Alldrop9,
        coinName: "Polka Dot",
        tokenInfo: { name: "Polkadot", symbol: "DOT", decimal: 10 },
        status: "Cancel",
        action: "Airdrop Cancelled",
      },
      {
        id: 10,
        logo: Alldrop10,
        coinName: "Chainlink Coin",
        tokenInfo: { name: "Chainlink", symbol: "LINK", decimal: 18 },
        status: "Start",
        action: "Airdrop Active",
      },
      {
        id: 11,
        logo: Alldrop11,
        coinName: "Solana Coin",
        tokenInfo: { name: "Solana", symbol: "SOL", decimal: 9 },
        status: "Start",
        action: "Airdrop Active",
      },
      {
        id: 12,
        logo: Alldrop12,
        coinName: "Bitcoin Cash",
        tokenInfo: { name: "Bitcoin Cash", symbol: "BCH", decimal: 8 },
        status: "Cancel",
        action: "Airdrop Cancelled",
      },
    ];
    


  return (
<>
 <div className=''> 

      {/* Search Bar and Dropdown */}
      <div className=" py-2" id="third">

        <div className="relative w-1/2">
          <div
            onClick={toggleDropdown}
            className="flex items-center justify-between p-2 border text-[#1fc600] font-medium rounded-md border-[#1fc600a8] bg-black dark:bg-white text-white dark:text-black cursor-pointer text-center"
          >
            <span>{selectedOption}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ml-2 transform transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.943l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isOpen && (
            <div className="absolute z-10 mt-2 w-full bg-black dark:bg-white text-white dark:text-black border border-[#1fc6006b] rounded-md shadow-md">
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 cursor-pointer hover:bg-[#1ec6002f] font-medium text-md "
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div> <div className="container mx-auto ">
      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((data, index) => (
          <div
            key={data.id}
            className="bg-[#0d350a7e] dark:bg-white text-white dark:text-black p-4 rounded-lg border border-[#1fc600a8]"
          >
{/* Div 1: Buttons, logo, and conditional symbol */}
<div className="flex flex-row justify-between items-center mb-4">
  {/* Conditional Symbol */}
  <div className='flex flex-row items-center px-4 py-0  border border-[#1fc600a8] rounded-full'> 


  {data.status === "Cancel" ? (
    <span className="text-2xl text-[red]">❌</span> // Cross sign in red
  ) : (
    <div
      className="w-4 h-4 bg-[#1fc600] rounded-full"
      style={{ minWidth: "1rem", minHeight: "1rem" }}
    ></div> // Larger green dot circle
  )}
  
  {/* Button */}
  <button
    className={`px-4  rounded ${
      data.status === "Cancel" ? "text-[red] font-medium" : "text-[#1fc600] font-medium "
    }`}
  >
    {data.status}
  </button>
  </div>
  
  {/* Logo */}
  <img
    src={data.logo}
    alt="logo"
    className="w-16 h-16 rounded-full"
  />
</div>


            {/* Div 2: Coin name */}
            <div className="text-center mb-4 text-lg font-bold">
              {data.coinName}
            </div>

            {/* Div 3: Token Info */}
            <div className="p-4 rounded-lg  mb-4">
              <div className="flex justify-between   ">
                <span className='text-xl font-semibold dark:text-black text-[#2cf940]  '>Name:</span>
                <span className='text-lg font-medium text-[#f1f1f1] dark:text-black' >{data.tokenInfo.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className='text-xl font-semibold dark:text-black text-[#2cf940]' >Symbol:</span>
                <span className='text-lg font-medium text-[#f1f1f1] dark:text-black'>{data.tokenInfo.symbol}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className='text-xl font-semibold dark:text-black text-[#2cf940]' >Decimal:</span>
                <span className='text-lg font-medium text-[#f1f1f1] dark:text-black'>{data.tokenInfo.decimal}</span>
              </div>
            </div>

            {/* Div 4: Status */}
            <div className="text-center mb-4 text-lg font-bold">
              {data.action}
            </div>

            {/* Div 5: View button */}
            <div className="text-center">
              <button className="text-md font-semibold font-quicksand border border-[#1fc600] p-2 px-3 lg:px-5 rounded bg-gradient-to-r from-[#000000] via-[#1fc600] to-[#000000] hover:from-[#000000] hover:via-[#22dd01] hover:to-[#000000] dark:bg-gradient-to-r dark:from-[#1fc600] dark:via-[#ffffff] dark:to-[#1fc600]">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>  </div>

    </div>

</>
  )
}

export default Airdrop4_all