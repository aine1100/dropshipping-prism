import { FaTruck } from "react-icons/fa6";

const RectanglePage = () => {
  const Boxes = [
    {
      HeadContent: "Many products chose from",
      OtherContent:
        "Explore products for your business from millions of offerings worldwide",
    },
    {
        HeadContent: "Many products chose from",
        OtherContent:
          "Explore products for your business from millions of offerings worldwide",
      },
  ];

  return (
    <div className="p-12 xl:ml-10 xl:mr-10 ml-5 mr-5 bg-[url('/rectangle.png')] md:-mt-[200px] -mt-[250px] bg-cover bg-hero-image h-cover flex justify-center xl:justify-start">
      <div className="flex xl:flex-row flex-col md:gap-20 gap-4 mt-[180px] justify-start items-end xl:mt-[100px]">
        {/* Static first box */}
        <div className="bg-[#F67366] md:w-[400px] h-[250px] w-[300px] rounded-lg flex flex-col items-start justify-start p-5 text-white gap-4">
          <div className="bg-white xl:h-16 xl:w-16 w-12 h-12 rounded-[50%] flex items-center justify-center">
            <FaTruck className="xl:h-10 xl:w-10 w-6 h-6 text-[#2C2D5B]" />
          </div>
          <h2 className="text-[25px] font-semibold">
            Many products to <br /> chose from
          </h2>
          <p className="text-[13px]">
            Explore products and suppliers for your business <br /> from
            millions of offerings worldwide.
          </p>
        </div>

        {/* Two boxes from the array */}
        {Boxes.map((items, index) => (
          <div key={index} className="bg-[#F67366] md:w-[400px] w-[300px] md:h-[200px] h-[180px] rounded-lg flex flex-col items-start justify-start p-5 text-white gap-4">
            <div className="bg-white xl:h-16 xl:w-16 w-12 h-12 rounded-[50%] flex items-center justify-center">
              <FaTruck className="xl:h-10 xl:w-10 w-6 h-6 text-[#2C2D5B]" />
            </div>
            <h2 className="text-[20px] font-semibold">{items.HeadContent}</h2>
            <p className="text-[13px]">{items.OtherContent}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RectanglePage;
