import { useState } from 'react';

const Liquidity2 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false); // Dropdown visibility
  const [selectedOption, setSelectedOption] = useState('Select an option'); // Selected dropdown value
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 10; // Number of items per page

  const options = ['Option 1', 'Option 2', 'Option 3'];
  const tableData = Array.from({ length: 100 }, (_, i) => ({
    token: `Token ${i + 1}`,
    amount: `${(i + 1) * 10}`,
    view: 'View',
  }));

  const handleConnectWallet = () => {
    if (selectedOption) {
      // Navigate to the new page
      console.log('Navigating to CreatePage2');
    } else {
      alert('Please select an option first!');
    }
  };

  return (
    <div className=' md:px-32 bg-black dark:bg-white text-white dark:text-black'>    

    <div className="flex flex-col items-center justify-center min-h-screen border border-green-500 bg-black dark:bg-white text-white dark:text-black px-5 py-10 space-y-8">
      {/* Header Section (div1) */}
      <div
        id="div1"
        className="flex flex-col items-center justify-center w-full h-[20vh] bg-black dark:bg-white text-white dark:text-black text-center rounded-lg shadow-lg"
      >
        <div className="w-full flex justify-center items-center text-center border-b-2 border-green-300 py-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">All DAO Lock</h1>
        </div>
        <div className="flex flex-row justify-center items-center w-full space-x-6 border-b-2 border-green-300 py-4">
          <h1 className="text-[#23df02] hover:text-green-700 hover:border-b-2 hover:border-green-400 text-lg md:text-xl lg:text-2xl cursor-pointer">
            All
          </h1>
          <h1 className="text-green-500 hover:text-green-700 hover:border-b-2 hover:border-green-400 text-lg md:text-xl lg:text-2xl cursor-pointer">
            Mylocks
          </h1>
        </div>
      </div>

      {/* Wallet Section (div2) */}
      <div
        id="div2"
        className="flex flex-col items-center justify-center w-full h-[20vh] bg-black dark:bg-white text-white dark:text-black text-center rounded-lg shadow-lg"
      >
        <h1 className="text-base sm:text-lg md:text-xl py-5 font-medium text-[#1FC600]">
          You need to connect your wallet first
        </h1>
        <button
          id="connectwallet"
          className="border-2 border-green-700 bg-green-900  text-white rounded-lg py-2 px-6 md:px-10 hover:bg-green-500 hover:text-black"
          onClick={handleConnectWallet}
        >
          Connect Wallet
        </button>
      </div>
    </div>
    </div>
  );
};

export default Liquidity2;
