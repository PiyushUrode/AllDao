import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import squid from "../../assets/squid.jpg";
import cat from "../../assets/cat.jpg";
import hat from "../../assets/cathat.png";
import eagle from "../../assets/eagle.png";
import monkey from "../../assets/monkey.jpg";

const SliderBox = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of visible slides
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets and desktops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For small tablets and large phones
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For phones
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    {
      title: "Squid Game V2",
      sub: "SQUID",
      value: "*5754",
      img: squid,
    },
    {
      title: "Baby Cate",
      sub: "BABY CATE",
      value: "*111",
      img: cat,
    },
    {
      title: "Cat Wifi Hat",
      sub: "CAT WIFI HAT",
      value: "*225",
      img: hat,
    },
    {
      title: "Eagle AI",
      sub: "EAI",
      value: "*123",
      img: eagle,
    },
    {
      title: "Monkey",
      sub: "MONKEY",
      value: "*1091",
      img: monkey,
    },
  ];

  return (
    <>
      <div className="mt-20 sm:mt-2 mx-5  ">
        <div className="flex flex-col sm:flex-row  sm:gap-2 justify-between items-center">
          <div className="flex px-5 sm:px-0 sm:flex-col border border-[#7DDD6B] rounded-lg items-center sm:justify-center justify-between p-1 text-center h-[80px] lg:h-[90px] w-full sm:w-[180px] lg:w-[200px] xl:w-[220px] shadow-md shadow-[#1fc600]">
            <div className="text-md xl:text-xl lg:font-bold font-quicksand">
              Liquidity
            </div>
            <div className="text-[#1fc600] font-bold text-lg font-quicksand">
              $1.78
            </div>
          </div>
          <div className="flex px-5 sm:px-0 sm:flex-col border border-[#7DDD6B] rounded-lg items-center sm:justify-center justify-between p-1 text-center h-[80px] lg:h-[90px] w-full sm:w-[180px] lg:w-[200px] xl:w-[220px] shadow-md shadow-[#1fc600]">
            <div className="text-md xl:text-xl lg:font-bold font-quicksand">
              Total Participants
            </div>
            <div className="text-[#1fc600] font-bold text-lg font-quicksand">
              3.4M
            </div>
          </div>
          <div className="flex px-5 sm:px-0 sm:flex-col border border-[#7DDD6B] rounded-lg items-center sm:justify-center justify-between p-1 text-center h-[100px] w-full sm:w-[220px] shadow-lg shadow-[#1fc600]">
            <div className="text-xl xl:font-bold font-quicksand">ALLDAO</div>
            <div className="text-[#1fc600] font-bold text-lg font-quicksand">
              $257.62
            </div>
          </div>
          <div className="flex px-5 sm:px-0 sm:flex-col border border-[#7DDD6B] rounded-lg items-center sm:justify-center justify-between p-1 text-center h-[80px] lg:h-[90px] w-full sm:w-[180px] lg:w-[200px] xl:w-[220px] shadow-md shadow-[#1fc600]">
            <div className="text-md xl:text-xl lg:font-bold font-quicksand">
              Total Projects
            </div>
            <div className="text-[#1fc600] font-bold text-lg font-quicksand">
              30.2K
            </div>
          </div>
          <div className="flex px-5 sm:px-0 sm:flex-col border border-[#7DDD6B] rounded-lg items-center sm:justify-center justify-between p-1 text-center h-[80px] lg:h-[90px] w-full sm:w-[180px] lg:w-[200px] xl:w-[220px] shadow-md shadow-[#1fc600]">
            <div className="text-md xl:text-xl lg:font-bold font-quicksand">
              Total Values Locked
            </div>
            <div className="text-[#1fc600] font-bold text-lg font-quicksand">
              $273.5M
            </div>
          </div>
        </div>

{/* slider change */}
        {/* <div className="bg-black py-8 px-4"> */}
        <div className="mt-20 rounded-lg py-5 px-10    bg-[#1d1d1d] dark:bg-[#b5f8ad] border border-[#1ec6004b] ">
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#000000] flex gap-6  dark:bg-[#fbf7f7]  border border-[#1fc600] rounded-2xl "
              >
                <div className="flex flex-row gap-10 items-stretch py-2 px-4">
                  {/* <div className=""> */}
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-12 h-12 rounded-full border border-[#1ec6002a]"
                    />
                  {/* </div> */}
                  <div className="flex flex-col items-start">
                    <div className="text-white text-lg font-semibold dark:text-[#000000]">
                      {card.title}
                    </div>
                    <div className="text-[gray] dark:text-[#000000d4] text-sm">{card.sub}</div>
                    <div className="text-[#1fc600] text-xl font-bold">
                      {card.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export default SliderBox;
