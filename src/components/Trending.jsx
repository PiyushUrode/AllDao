function Trending() {
  return (
    <>
      <div className="lg:py-20 py-10 mx-5 md:mx-10">
        <div className="text-center">
          <div className="text-4xl font-bold font-k2d bg-gradient-to-r from-[#1FC600] to-[#8AE27A] bg-clip-text text-transparent">
            Trending
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-10">
          {/* First Row */}
          <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
            {['$ZMBI', 'RHOOD', 'BFWOG', 'LUXV', 'GOAT', 'PNUT'].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center w-28 sm:w-32 lg:w-36 bg-[#1ec60013] border border-[#1FC6004D] rounded-full p-3 shadow-md hover:transform hover:-translate-y-1 transition-transform"
              >
                <p className="font-quicksand font-bold text-sm sm:text-base lg:text-lg leading-6 text-center m-0">
                  {item}
                </p>
              </div>
            ))}
          </div>
          {/* Second Row */}
          <div className="flex flex-wrap gap-5 justify-center sm:justify-end">
            {['BOJACK', 'ISM', 'MSCT', 'WRAP', 'mr.pokee', 'MOON'].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center w-28 sm:w-32 lg:w-36 bg-[#1ec60013] border border-[#1FC6004D] rounded-full p-3 shadow-md hover:transform hover:-translate-y-1 transition-transform"
              >
                <p className="font-quicksand font-bold text-sm sm:text-base lg:text-lg leading-6 text-center m-0">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Trending;
