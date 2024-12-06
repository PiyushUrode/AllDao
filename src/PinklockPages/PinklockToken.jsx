import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import BottomSections from "../components/BottomSections";

const PinklockToken = () => {
  // const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Dropdown visibility
  const [selectedOption, setSelectedOption] = useState("BNB Smart Chain"); // Selected dropdown value
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 10; // Number of items per page

  const options = ["Option 1", "Option 2", "Option 3"];
  const tableData = Array.from({ length: 100 }, (_, i) => ({
    token: `Token ${i + 1}`,
    amount: `${(i + 1) * 10}`,
    view: "View",
  }));

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle dropdown option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Filtered data based on the search term
  const filteredData = tableData.filter((item) =>
    item.token.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  
    // State to track which button is active
    const [activeTab, setActiveTab] = useState("all");

    // Handler for wallet connection
    const handleConnectWallet = () => {
      alert("Wallet connection functionality goes here!");
    };

  return (
   <>
    <div className="p-1 sm:px-10 md:px-16 lg:px-20 xl:px-28 mt-10 md:mt-5">
    <div className="flex  ">
      <div className="flex flex-col w-full">
        {/* Header */}
        <div className="border border-[#1ec60065] bg-black dark:bg-white text-white dark:text-black rounded-lg">
          <div
            className="flex justify-center items-center text-center py-3"
            id="first">
            <h1 className="text-xl lg:text-3xl font-k2d font-bold">
              Pink Lock
            </h1>
          </div>
          <div className="border border-dashed border-[#1ec600b8]"></div>

          {/* Tabs */}
          <div
            className="flex flex-row justify-around py-3"
            id="second"
          >
                    <h1
          className={`hover:text-[#1fc600] hover:underline text-xl cursor-pointer ${
            activeTab === "all" ? "text-[#1fc600] font-bold underline" : ""
          }`}
          onClick={() => setActiveTab("all")}
        >
          All
        </h1>
        <h1
          className={`hover:text-[#1fc600] hover:underline text-xl cursor-pointer ${
            activeTab === "mylocks" ? "text-[#1fc600] font-bold underline" : ""
          }`}
          onClick={() => setActiveTab("mylocks")}
        >
          Mylocks
        </h1>

          </div>
        </div>


        {activeTab === "all" && (
        <div className="">
          {/* Search Bar and Dropdown */}
        <div
          className="flex flex-row justify-between py-2 gap-2 items-center"
          id="third"
        >
          <div className="flex flex-col  w-1/2">
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-[#1ec600b8] rounded-lg bg-[#1d1d1d]"
            />
          </div>
          <div className="relative w-1/2">
            <div
              onClick={toggleDropdown}
              className="flex items-center text-[#1fc600] font-medium justify-between p-2 border rounded-lg border-[#1ec600b8] bg-[#1d1d1d] cursor-pointer text-center"
            >
              <span>{selectedOption}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ml-2 transform transition-transform ${
                  isOpen ? "rotate-180" : ""
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
              <div className="absolute z-10 mt-2 w-full bg-black border border-[#1ec600b8] rounded-md shadow-md">
                {options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="px-4 py-2 cursor-pointer hover:bg-[#7aff6238]"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="flex flex-col w-full justify-center md:px-5 md:py-5" id="table">
          <table className="w-full border-collapse text-white dark:text-black ">
            <thead>
              <tr className="bg-[#1ec60011] border border-[#1ec60021] text-left">
                <th className=" px-4 py-2">Token</th>
                <th className=" px-4 py-2">Amount</th>
                <th className=" px-4 py-2">View</th>
              </tr>
            </thead>
            <tbody className="">
              {paginatedData.map((row, index) => (
                <tr key={index} className="hover:bg-[#1ec60011]">
                  <td className=" border border-[#1ec60021] px-4 py-2 font-semibold">
                    {row.token}
                  </td>
                  <td className=" border border-[#1ec60021] px-4 py-2 font-semibold ">
                    {row.amount}
                  </td>
                  <td className=" border border-[#1ec60021] px-4 py-2 text-[#1fc600]  font-semibold cursor-pointer">
                    {row.view}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center py-5">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 mx-1 rounded ${
                currentPage === i + 1
                  ? "bg-[#1fc600] text-white"
                  : "bg-[#1d1d1d]"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        </div>
        )}


        {activeTab === "mylocks" && (
        <div
          id="div2"
          className="mt-2 border border-[#1ec60065] flex flex-col items-center justify-center w-full md:h-[20vh] h-[40vh] bg-black dark:bg-white text-white dark:text-black text-center rounded-lg shadow-lg"
        >
          <h1 className="text-base sm:text-lg md:text-xl py-5 font-medium text-[#1FC600]">
            You need to connect your wallet first
          </h1>
          <button
            id="connectwallet"
            className="text-md font-semibold font-quicksand border border-[#1fc600] p-2 px-3 lg:px-5 rounded bg-gradient-to-r from-[#000000] via-[#1fc600] to-[#000000] hover:from-[#000000] hover:via-[#22dd01] hover:to-[#000000] dark:bg-gradient-to-r dark:from-[#1fc600] dark:via-[#ffffff] dark:to-[#1fc600]"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </button>
        </div>
      )}

      </div>

     
    </div>
    </div>
    <BottomSections/>
   </>
  );
};

export default PinklockToken;
