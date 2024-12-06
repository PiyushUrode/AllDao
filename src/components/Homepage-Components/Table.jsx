import img1 from "../../assets/Binance_Logo.png"
import img2 from "../../assets/ethereum.png"
import img3 from "../../assets/solana.png"
import img4 from "../../assets/arbitrum.png"
import img5 from "../../assets/polygon.png"
import img6 from "../../assets/avalanche.png"
import img7 from "../../assets/fantom-opera.png"
import img8 from "../../assets/cronos-.png"
import img9 from "../../assets/alvey-chain.webp"
import img10 from "../../assets/bitrock.png"
import img11 from "../../assets/core.png"
import img12 from "../../assets/dogechain.png"
import img13 from "../../assets/pulsechain.png"
import img14 from "../../assets/base-mainnet.png"

const Table = () => {
  const tableData = [
    {
      chain: "Binance",
      icon: img1, // Replace with actual icon URLs
      projects: "23.5k",
      participants: "2.8M",
      liquidity: "$1.2B",
      valueLocked: "$198.2M",
    },
    {
      chain: "Ethereum",
      icon: img2,
      projects: "3k",
      participants: "160.7K",
      liquidity: "$163.7M",
      valueLocked: "$49.1M",
    },
    {
      chain: "Solana",
      icon: img3,
      projects: "2.7k",
      participants: "435K",
      liquidity: "$119.7M",
      valueLocked: "$22.1M",
    },
    {
      chain: "Arbitrum",
      icon: img4,
      projects: "280",
      participants: "18.3K",
      liquidity: "$11.7M",
      valueLocked: "$1.1M",
    },
    {
      chain: "Polygon Mainnet",
      icon: img5,
      projects: "440",
      participants: "3.7K",
      liquidity: "$529.4K",
      valueLocked: "$233.4K",
    },
    {
      chain: "Avalanche C-Chain",
      icon: img6,
      projects: "125",
      participants: "7.6K",
      liquidity: "$1.9M",
      valueLocked: "$273.9K",
    },
    {
      chain: "Fantum Opera",
      icon: img7,
      projects: "41",
      participants: "534",
      liquidity: "$83.8K",
      valueLocked: "$50.4K",
    },
    {
      chain: "Cronos Mainnet",
      icon: img8,
      projects: "70",
      participants: "1.8K",
      liquidity: "$121.5K",
      valueLocked: "$70.7K",
    },
    {
      chain: "Alvey",
      icon: img9,
      projects: "4",
      participants: "5",
      liquidity: "$0",
      valueLocked: "$5.7K",
    },
    {
      chain: "Bitrock",
      icon: img10,
      projects: "2",
      participants: "4",
      liquidity: "-",
      valueLocked: "-",
    },
    {
      chain: "Core",
      icon: img11,
      projects: "2",
      participants: "158",
      liquidity: "$0",
      valueLocked: "-",
    },
    {
      chain: "Dogechain Mainnet",
      icon: img12,
      projects: "29",
      participants: "301",
      liquidity: "$109.3K",
      valueLocked: "$40.9K",
    },
    {
      chain: "PulseChain",
      icon: img13,
      projects: "10",
      participants: "304",
      liquidity: "$15.7K",
      valueLocked: "$725",
    },
    {
      chain: "Base Mainnet",
      icon: img14,
      projects: "147",
      participants: "8.4K",
      liquidity: "$2.9M",
      valueLocked: "$2.3M",
    },
    // Add more rows as needed #1fc600
  ];

  return (
    <div className="bg-[#1d1d1d] dark:bg-[#b5f8ad] border border-[#1ec6004b] mt-20 mx-5 rounded-lg">
      <div className="max-w-7xl mx-auto text-center">
        <div className="py-5 text-center font-k2d text-3xl  dark:text-black font-bold bg-gradient-to-r from-[#1fc600] to-[#8AE27A] bg-clip-text text-transparent">
          Supported Chains
        </div>
        <div className="overflow-x-auto pb-5 ">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-[#2bc2110c] dark:bg-[#1fc600] text-center   border border-[#ffffff]">
                <th className="py-3 px-4 border border-[#ffffff28] border-l-0 border-r-0 font-bold">Chain</th>
                <th className="py-3 px-4 border border-[#ffffff28] border-r-0 border-l-0 font-bold">Projects</th>
                <th className="py-3 px-4 border border-[#ffffff28] border-r-0 border-l-0 font-bold">Participants</th>
                <th className="py-3 px-4 border border-[#ffffff28] border-r-0 border-l-0 font-bold">Liquidity Raised</th>
                <th className="py-3 px-4 border border-[#ffffff28] border-l-0 border-r-0 font-bold">Values Locked</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-[#1d1d1d] dark:bg-[#e4e2e220]" : "bg-[#1ec6000c] dark:bg-[#54e7544f]"} hover:border-[#1fc600] hover:border dark:text-black font-k2d font-medium  `}
                >
                  <td className="py-3 px-4 flex items-center gap-2">
                    <img src={row.icon} alt={row.chain} className="w-6 h-6" />
                    {row.chain}
                  </td>
                  <td className="py-3 px-4">{row.projects}</td>
                  <td className="py-3 px-4">{row.participants}</td>
                  <td className="py-3 px-4">{row.liquidity}</td>
                  <td className="py-3 px-4">{row.valueLocked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
