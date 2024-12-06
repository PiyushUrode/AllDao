// import React from 'react'

const Airdrop4_Myairdrop = () => {
  const handleConnectWallet = () => {
    if (selectedOption) {
      // Navigate to the new page
      console.log('Navigating to CreatePage2');
    } else {
      alert('Please select an option first!');
    }
  };
  return (
    <div
    id="div2"
    className="mt-2 border border-[#1fc6006b] flex flex-col items-center justify-center w-full h-[50vh] md:h-[20vh] bg-black dark:bg-white text-white dark:text-black text-center rounded-lg shadow-lg"
  >
    <h1 className="text-base sm:text-lg md:text-xl py-5 font-medium text-[#1FC600]">
      You need to connect your wallet first
    </h1>
    <button
      id="connectwallet"
      className="text-md font-semibold border border-[#1fc600] p-2 px-3 lg:px-5 rounded bg-gradient-to-r from-[#000000] via-[#1fc600] to-[#000000] hover:via-[#22dd01]"
      onClick={handleConnectWallet}
    >
      Connect Wallet
    </button>
  </div>)
}


export default Airdrop4_Myairdrop