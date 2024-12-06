import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomSections from "../components/BottomSections";

const Airdrop2 = () => {

    const navigate = useNavigate();

    const handleNextClick = () => {
      navigate("/Airdrop3"); // Replace "/next-page" with your desired route
    };

  const [formData, setFormData] = useState({
    title: "",
    logo: "",
    website: "",
    facebook: "",
    twitter: "",
    github: "",
    telegram: "",
    instagram: "",
    discord: "",
    reddit: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Add your form submission logic here
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center p-1 sm:px-10 md:px-16 lg:px-20 xl:px-28 mt-10 md:mt-5">
      <div className="w-full max-w-screen-lg bg-black dark:bg-white text-white dark:text-black border border-[#1ec600] p-6 rounded-lg shadow-md">
        <h1 className="text-xl text-center md:text-3xl font-bold">
          Create Airdrop
        </h1>
        <form onSubmit={handleSubmit} className="my-6">
          {/* Airdrop Title */}
          <div>
            <label className="block text-lg font-semibold mb-2">Airdrop Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter Airdrop Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full bg-black dark:bg-white text-white dark:text-black p-3  rounded-lg border border-[#1fc6006b] focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Logo and Website */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-semibold mb-2">Logo</label>
              <input
                type="url"
                name="logo"
                placeholder="Enter Logo URL"
                value={formData.logo}
                onChange={handleChange}
                className="w-full bg-black dark:bg-white text-white dark:text-black p-3 text-gray-900 rounded-lg border border-[#1fc6006b] focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Website</label>
              <input
                type="url"
                name="website"
                placeholder="Enter Website URL"
                value={formData.website}
                onChange={handleChange}
                className="w-full bg-black dark:bg-white text-white dark:text-black p-3 rounded-lg border border-[#1fc6006b] focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Social Media Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "facebook", label: "Facebook" },
              { name: "twitter", label: "Twitter" },
              { name: "github", label: "GitHub" },
              { name: "telegram", label: "Telegram" },
              { name: "instagram", label: "Instagram" },
              { name: "discord", label: "Discord" },
            ].map((social) => (
              <div key={social.name}>
                <label className="block text-lg font-semibold mb-2">
                  {social.label}
                </label>
                <input
                  type="url"
                  name={social.name}
                  placeholder={`Enter ${social.label} URL`}
                  value={formData[social.name]}
                  onChange={handleChange}
                  className="w-full bg-black dark:bg-white text-white dark:text-black p-3 rounded-lg border border-[#1fc6006b] focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            ))}
          </div>

          {/* Reddit */}
          <div>
            <label className="block text-lg font-semibold mb-2">Reddit</label>
            <input
              type="url"
              name="reddit"
              placeholder="Enter Reddit URL"
              value={formData.reddit}
              onChange={handleChange}
              className="w-full bg-black dark:bg-white text-white dark:text-black p-3 rounded-lg border border-[#1fc6006b] focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-semibold mb-2">Description</label>
            <textarea
              name="description"
              placeholder="Enter Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full bg-black dark:bg-white text-white dark:text-black p-3 rounded-lg border border-[#1fc6006b] focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-center my-5 lg:my-10 gap-10  items-center">
            <button
              type="button"
              className="opacity-60 text-md font-semibold font-quicksand border border-[#1fc600] p-2 px-3 lg:px-5 rounded bg-gradient-to-r from-[#000000] via-[#1fc600] to-[#000000] hover:from-[#000000] hover:via-[#22dd01] hover:to-[#000000] dark:bg-gradient-to-r dark:from-[#1fc600] dark:via-[#ffffff] dark:to-[#1fc600]"
            >
              Back
            </button>
            <button
              type="submit"
              onClick={handleNextClick}
              className="text-md font-semibold font-quicksand border border-[#1fc600] p-2 px-3 lg:px-5 rounded bg-gradient-to-r from-[#000000] via-[#1fc600] to-[#000000] hover:from-[#000000] hover:via-[#22dd01] hover:to-[#000000] dark:bg-gradient-to-r dark:from-[#1fc600] dark:via-[#ffffff] dark:to-[#1fc600]"
            >
              Create Airdrop
            </button>
          </div>
        </form>
      </div>
    </div>
    <BottomSections/>
    </>
  );
};

export default Airdrop2;
